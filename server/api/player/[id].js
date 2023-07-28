import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event);
    const id = event.context.params.id;

    const { data, error } = await client
        .from('player')
        .select('Nome, team(Nome, color1, color2), Ruolo, Id, rate, slot, cost, PG, MV, FM, GF, GS, RP, "R+", "R-", Assist, Ammonizioni, Autogol, Espulsioni')
        .eq('Id', id)
        .limit(1)
        .single(); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return data;

});