import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const { data } = await readBody(event);
    const client = serverSupabaseClient(event);
    const id = data[0];

    const { error } = await client
        .from('squad')
        .update({ Nome: data[1], Giocatore: data[2] })
        .eq('squadId', id); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return "Squadra " + data[1] + " del giocatore " + data[2] + " modificata correttamente";
});