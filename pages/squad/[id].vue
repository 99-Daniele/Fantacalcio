<template>
    <div class="title">
        {{ squad.Nome }}
    </div>
    <div class="card-container">
        <div v-for="p in squad.player">
            <NuxtLink :to='"/player/" + p.Id'><PlayerCard :name="p.Nome" :squad="p.team.Nome" :role="p.Ruolo" :id="p.Id" :color1="p.team.color1" :color2="p.team.color2" :rate="p.rate" :slot="p.slot" :cost="p.cost"/></NuxtLink>
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
    const { data: squad } = await useFetch('/api/squad/' + id)
    
</script>