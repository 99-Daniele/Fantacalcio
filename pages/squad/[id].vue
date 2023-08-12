<template>
    <div class="title">
        {{ players[0].squad.Nome }}
    </div>
    <div class="card-container">
        <div v-for="p in players">
            <NuxtLink :to='"/player/" + p.player.Id'><PlayerCard :name="p.player.Nome" :squad="p.player.team.Nome" :role="p.player.Ruolo" :id="p.player.Id" :color1="p.player.team.color1" :color2="p.player.team.color2" :rate="p.player.rate" :slot="p.player.slot" :cost="p.player.cost"/></NuxtLink>
        </div>
    </div>
</template>

<style>

    .player-card:hover{
        box-shadow: 0 0 10px black;
        transition: 0.5s;
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: players } = await useFetch('/api/squad/' + id)
    
</script>