import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

  const client = serverSupabaseClient(event);
  const slot = event.context.params.id;

  const { data, error } = await client
    .from('player')
    .select('Nome, team(Nome, color1, color2), Ruolo, Id, rate, slot, cost')
    .eq('Ruolo', "P")
    .eq('slot', slot)
    .order('Nome');
  
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;

});