import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

  const client = serverSupabaseClient(event);
  const slot = event.context.params.id;

  const { data, error } = await client
    .from('player')
    .select('name, team(name, color1, color2), role, id, rate, slot, cost')
    .eq('role', "P")
    .eq('slot', slot)
    .order('rate', {ascending: false});
  
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;

});