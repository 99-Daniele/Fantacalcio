<template>
    <NuxtLink to="/player">Players</NuxtLink>
</template>

<script setup>

    const { data: players } = await useFetch('/api/player')
    
</script>