import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

  const client = serverSupabaseClient(event);
  const team = event.context.params.id;

  const {data, error} = await client
    .from('calendar')
    .select('homeTeam, awayTeam, round')
    .or('homeTeam.eq.' + team + ',awayTeam.eq.' + team)
    .order('round'); 
  
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;

});