<template>
    <div>
        <span v-for="i in 38">
            <NuxtLink :to="'/calendar/' + i">{{ i }}</NuxtLink>
        </span>
    </div>
    <div>
        <span v-for="team in teams">
            <NuxtLink :to="'/calendar/team/' + team.Id">{{ team.Nome }}</NuxtLink>
        </span>
    </div>
    <div v-for="game in calendar">
        CASA:{{ game.team1.Nome }} TRASFERTA: {{ game.team2.Nome }} GIORNATA: {{ game.Giornata }}
    </div>
</template>

<script setup>

    const { data: teams} = await useFetch('/api/team')
    const { data: calendar } = await useFetch('/api/calendar')
    
</script>