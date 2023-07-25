import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

  const client = serverSupabaseClient(event);
  const team = event.context.params.id;

  const homeGames = await client
    .from('calendar')
    .select('team1:team!teamId(*), team2:team!versusId(*), Giornata')
    .eq('teamId', team)
    .order('Giornata'); 
  
  if (homeGames.error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  const awayGames = await client
    .from('calendar')
    .select('team1:team!teamId(*), team2:team!versusId(*), Giornata')
    .eq('versusId', team)
    .order('Giornata'); 
  
  if (awayGames.error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  const data = homeGames.data.concat(awayGames.data)

  return data;

});