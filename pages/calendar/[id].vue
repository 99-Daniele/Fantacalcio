<template>
    <div>
        <span v-for="i in 38">
            <NuxtLink :to="'/calendar/' + i">{{ i }}</NuxtLink>
        </span>
    </div>
    <h1>GIORNATA {{ id }}</h1>
    <div v-for="game in calendar">
        CASA:{{ game.team1.Nome }} TRASFERTA: {{ game.team2.Nome }} GIORNATA: {{ game.Giornata }}
    </div>
</template>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: calendar } = await useFetch('/api/calendar/' + id)
    
</script>