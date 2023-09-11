import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const { data } = await readBody(event);
    const client = serverSupabaseClient(event);

    const id = data[0]
    const PG = data[1]
    const MV = data[2]
    const FM = data[3]
    const GF = data[4]
    const GS = data[5]
    const RP = data[6]
    const RSG = data[7]
    const RSB = data[8]
    const ass = data[9]
    const amm = data[10]
    const esp = data[11]
    const aut = data[12]
    const cont = data[13]

    const { error } = await client
        .from('player')
        .update({'PG': PG, 'MV': MV, 'FM': FM, 'GF':GF, 'GS': GS, 'RP': RP, 'RSG': RSG, 'RSB': RSB, ass: ass, amm: amm, esp: esp, aut: aut})
        .eq('id', id); 
    
    console.log(cont, id)
  
    if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
    }

});