import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event);
    const id = event.context.params.id;

    const { data, error } = await client
        .from('squadPlayers')
        .select('playerId')
        .eq('championshipId', id);  
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return data;

});