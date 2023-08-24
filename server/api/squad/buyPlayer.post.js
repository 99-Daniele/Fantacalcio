import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const { data } = await readBody(event);
    const client = serverSupabaseClient(event);

    const playerId = await client 
        .from('player')
        .select('Id')
        .eq('Nome', data[0])
        .limit(1)
        .single(); 
    
    const squadId = await client 
        .from('squad')
        .select('squadId')
        .eq('Nome', data[1])
        .limit(1)
        .single();   

    const { error } = await client
        .from('squadPlayers')
        .insert({ squadId: squadId.data.squadId, playerId: playerId.data.Id, cost: data[2] }); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return "La squadra " + data[1] + " ha acquisitato il giocatore " + data[0] + " al costo di " + data[2] + " crediti.";
});