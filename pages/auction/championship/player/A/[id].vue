<template>
    <div class="title">
        Attaccanti
    </div>
    <NuxtLink :to="'/auction/championship/' + id"><div class="goBackButton" >TORNA INDIETRO</div></NuxtLink>
    <input id="search" type="text" v-model="search" placeholder="Cerca giocatore..." autocomplete="off"/>
    <div class="role-button-container">
        <NuxtLink :to="'/auction/championship/player/P/' + id"><div id="p-button">P</div></NuxtLink>
        <NuxtLink :to="'/auction/championship/player/D/' + id"><div id="d-button">D</div></NuxtLink>
        <NuxtLink :to="'/auction/championship/player/C/' + id"><div id="c-button">C</div></NuxtLink>
        <NuxtLink :to="'/auction/championship/player/' + id"><div id="a-button-active">A</div></NuxtLink>
    </div>
    <div class="card-container">
        <div v-for="player in searchedPlayers">
            <NuxtLink :to='"/player/" + player.id'><PlayerCard :name="player.name" :squad="player.team.name" :role="player.role" :id="player.id" :color1="player.team.color1" :color2="player.team.color2" :rate="player.rate" :slot="player.slot" :cost="player.cost"/></NuxtLink>
        </div>
    </div>
    <div class="go-up" id="go-up-button" @click="back()">
        <div class="circle">
            <div class="arrow"></div>
        </div>
    </div>
</template>

<style scoped>

    .player-card:hover{
        box-shadow: 0 0 10px black;
        transition: 0.5s;
    }

    .title{
        border-color: red;
    }

    @media (max-width: 768px) {
        .goBackButton{
            top: 140px;
            left: 90px;
        }

        .role-button-container{
            margin-top: 60px;
        }

        #search{
            top: 450px;
            left: 90px;
        }
        
    }

</style>

<script setup>

    import { ref } from 'vue'

    const search = ref('')

    const route = useRoute()
    const id = route.params.id
    const { data: players } = await useFetch('/api/player/A/top/')
    const { data: chosenPlayers } = await useFetch('/api/squadPlayers/' + id)

    for(let j = 0; j < chosenPlayers.value.length; j++){
        for(let i = 0; i < players.value.length; i++)
            if(players.value[i].id === chosenPlayers.value[j].playerId)
                players.value.splice(i, 1);
    }

    const searchedPlayers = computed(() => {
        if(search.value.length > 0){
            return players.value.filter(player => {
                return player.name.toLowerCase().startsWith(search.value.toLowerCase())
            })
        }
        else{
            return players.value
        }
    })
    
</script>

<script>

    import { ref } from 'vue'

    export default {
        methods: {
            back: function(){
                window.scrollTo({
                    top: document.getElementById("search").offsetTop - 40,
                    behavior: 'smooth',
                })
            }
        }
    }

</script>