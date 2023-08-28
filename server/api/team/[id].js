import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event);
    const team = event.context.params.id;

    const { data, error } = await client
    .from('player')
    .select('name, team(name, color1, color2), role, id, rate, slot, cost')
    .eq('playerTeam', team)
    .order('role', { ascending: false }); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return data;

});