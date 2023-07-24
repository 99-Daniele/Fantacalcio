<template>
    <div v-for="team in teams">
        <NuxtLink :to="'/team/' + team.Id">{{ team.Nome }}</NuxtLink>
    </div>
</template>

<script setup>

    const { data: teams } = await useFetch('/api/team')
    
</script>