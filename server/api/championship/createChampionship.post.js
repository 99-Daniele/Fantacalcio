import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const { data } = await readBody(event);
    const client = serverSupabaseClient(event);

    const champId = await client 
        .from('championship')
        .select('id')
        .order('id', {ascending: false})
        .limit(1)
        .single();   

    const { error } = await client
        .from('championship')
        .insert({ id: champId.data.id + 1, name: data[0]}); 
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

    return "Campionato " + data[0] + " creato correttamente";
});