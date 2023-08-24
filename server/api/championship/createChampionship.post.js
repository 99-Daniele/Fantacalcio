import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const { data } = await readBody(event);
    const client = serverSupabaseClient(event);

    const champId = await client 
        .from('championship')
        .select('Id')
        .order('Id', {ascending: false})
        .limit(1)
        .single();   

    const { error } = await client
        .from('championship')
        .insert({ Id: champId.data.Id + 1, Nome: data[0]}); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return "Campionato " + data[0] + " creato correttamente";
});