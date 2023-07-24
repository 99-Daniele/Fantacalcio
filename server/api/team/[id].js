import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event);
    const id = event.context.params.id;

    const { data, error } = await client
        .from('team')
        .select(`Nome, Posizione, player(Id, Nome, Ruolo, Squadra)`)
        .eq('Id', id)
        .limit(1)
        .single(); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return data;

});