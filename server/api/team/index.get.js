import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from('team')
    .select('*')
    .order('name'); 
  
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;

});