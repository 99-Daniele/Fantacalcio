<template>
    <div v-for="player in players">
        <NuxtLink :to='"/player/" + player.Id'>{{ player }}</NuxtLink>
    </div>
</template>

<script setup>

    const { data: players } = await useFetch('/api/player')
    
</script>