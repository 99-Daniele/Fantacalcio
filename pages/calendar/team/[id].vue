<template>
    <div>
        <span v-for="t in teams">
            <NuxtLink :to="'/calendar/team/' + t.Id">{{ t.Nome }}</NuxtLink>
        </span>
    </div>
    <h1>{{ team.Nome }}</h1>
    <div v-for="game in games">
        CASA:{{ game.team1.Nome }} TRASFERTA: {{ game.team2.Nome }} GIORNATA: {{ game.Giornata }}
    </div>
</template>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: teams } = await useFetch('/api/team')
    console.log(teams)
    const { data: team } = await useFetch('/api/team/' + id)
    console.log(team)
    const { data: calendar } = await useFetch('/api/calendar/team/' + id)
    console.log(calendar)
    

    let games = []
    for(let i = 1; i <= 38; i++){
        for(let j = 0; j < 38; j++ ){
            if(calendar.value[j].Giornata == i)
                games.push(calendar.value[j])
        }
    }
    
</script>