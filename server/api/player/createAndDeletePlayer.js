import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event);

    const { error } = await client
        .from('player')
        .insert({ id: 3, name:'Pippo'});

    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return "Giocatori aggiornati correttamente";
});