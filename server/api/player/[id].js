import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event);
    const id = event.context.params.id;

    const { data, error } = await client
        .from('player')
        .select('name, team(name, color1, color2), role, id, rate, slot, cost, PG, MV, FM, GF, GS, RP, RSG, RSB, ass, amm, aut, esp')
        .eq('id', id)
        .limit(1)
        .single(); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return data;

});