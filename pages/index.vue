<template>
    <h1>HOME</h1>
</template>

<script setup>

    const { data: players } = await useFetch('/api/player')
    
</script>