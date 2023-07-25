<template>
    <h1>{{ players[0].squad.Nome }}</h1>
    <div class="card-container">
        <div v-for="p in players">
            <NuxtLink :to='"/player/" + p.player.Id'><PlayerCard :name="p.player.Nome" :squad="p.player.Squadra" :role="p.player.Ruolo" :id="p.player.Id"/></NuxtLink>
        </div>
    </div>
</template>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: players } = await useFetch('/api/squad/' + id)
    
</script>