import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const { data } = await readBody(event);
    const client = serverSupabaseClient(event);

    const squadId = await client 
        .from('squad')
        .select('squadId')
        .order('squadId', {ascending: false})
        .limit(1)
        .single();   

    const { error } = await client
        .from('squad')
        .insert({ squadId: squadId.data.squadId + 1, championshipId: data[0], Nome: data[1], Giocatore: data[2] }); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return "Squadra " + data[1] + " del giocatore " + data[2] + " creata correttamente";
});