<template>
    <div class="title">
        {{player.Nome}}
    </div>
    <PlayerCard :name="player.Nome" :squad="player.team.Nome" :role="player.Ruolo" :id="player.Id" :color1="player.team.color1" :color2="player.team.color2" :rate="player.rate" :slot="player.slot" :cost="player.cost"/>
</template>

<style scoped>

    .card {
        width: 320px;
        height: 440px;
    }

    .card .data-container .name{
        font-size: 32px;
    }

    .card .data-container .extra{
      font-size: 24px;
    }

    .card .data-container .rate{
      font-size: 96px;
    }

    .left-rectangle{
        margin-top: 5px;
        width: 48px;
        height: 80px;
    }

    .left-big-rectangle{
        margin-left: 36px;
        width: 64px;
        height: 160px;
    }

    .right-big-rectangle{
        margin-left: 100px;
        width: 64px;
        height: 160px;
    }

    .right-rectangle{
        margin-top: 5px;
        margin-left: 152px;
        width: 48px;
        height: 80px;
    }

    .role{
        font-size: 80px;
        margin-left: 80px;
        margin-top: 24px;
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: player } = await useFetch('/api/player/' + id)
    
</script>