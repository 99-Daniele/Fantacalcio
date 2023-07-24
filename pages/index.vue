<template>
    Profava prova
    {{ player }}
    p
</template>

<script setup>

    const { data: player } = await useFetch('/api/player')
    
</script>