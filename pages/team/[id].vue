<template>
    {{ team.Nome }}
    <div class="card-container">
        <div v-for="player in team.player">
            <NuxtLink :to='"/player/" + player.Id'><PlayerCard :name="player.Nome" :squad="player.Squadra" :role="player.Ruolo" :id="player.Id"/></NuxtLink>
        </div>
    </div>
</template>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: team } = await useFetch('/api/team/' + id)
    
</script>