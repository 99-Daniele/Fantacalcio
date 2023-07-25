<template>
    <div v-for="championship in championships">
        <NuxtLink :to="'/championship/' + championship.Id">{{championship.Nome}}</NuxtLink> 
    </div>
</template>

<script setup>

    const { data: championships } = await useFetch('/api/championship')
    
</script>