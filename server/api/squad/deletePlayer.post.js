import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const { data } = await readBody(event);
    const client = serverSupabaseClient(event);

    const player = await client 
        .from('player')
        .select('id')
        .eq('name', data[0])
        .limit(1)
        .single(); 
    
    const squad = await client 
        .from('squad')
        .select('squadId')
        .eq('name', data[1])
        .limit(1)
        .single();   

    const { error } = await client
        .from('squadPlayers')
        .delete()
        .match({ squadId: squad.data.squadId, playerId: player.data.id });
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return "La squadra " + data[1] + " ha eliminato il giocatore " + data[0];
});