<template>
    <h1>{{ squads[0].championship.Nome }}</h1>
    <div v-for="squad in squads">
        <NuxtLink :to="'/squad/' + squad.squadId">{{ squad.Nome }}</NuxtLink>
    </div>
</template>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: squads } = await useFetch('/api/championship/' + id)
    
</script>