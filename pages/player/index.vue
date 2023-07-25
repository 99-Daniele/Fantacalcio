<template>
    <div class="title">
        Players
    </div>
    <div class="card-container">
        <div v-for="player in players">
            <NuxtLink :to='"/player/" + player.Id'><PlayerCard :name="player.Nome" :squad="player.team.Nome" :role="player.Ruolo" :id="player.Id" :color1="player.team.color1" :color2="player.team.color2"/></NuxtLink>
        </div>
    </div>
</template>

<script setup>

    const { data: players } = await useFetch('/api/player')
    
</script>