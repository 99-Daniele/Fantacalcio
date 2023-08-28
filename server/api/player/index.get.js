import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from('player')
    .select('name, team(name, color1, color2), role, id, rate, slot, cost')
    .order('name');
  
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;

});