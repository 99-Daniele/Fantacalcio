<template>
    {{ player }}
</template>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: player } = await useFetch('/api/player/' + id)
    
</script>