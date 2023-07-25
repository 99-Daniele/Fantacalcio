import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from('calendar')
    .select('team1:team!teamId(*), team2:team!versusId(*), Giornata')
    .order('Giornata'); 
   
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;

});