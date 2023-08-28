<template>
    <div class="title">
        Attaccanti
    </div>
    <input id="search" type="text" v-model="search" placeholder="Cerca giocatore..." autocomplete="off"/>
    <div class="role-button-container">
        <NuxtLink to="/player/P"><div id="p-button">P</div></NuxtLink>
        <NuxtLink to="/player/D"><div id="d-button">D</div></NuxtLink>
        <NuxtLink to="/player/C"><div id="c-button">C</div></NuxtLink>
        <NuxtLink to="/player"><div id="a-button-active">A</div></NuxtLink>
    </div>
    <div class="slot-button-container">
        <NuxtLink to="/player/A/slot/1"><div class="slot-button">1</div></NuxtLink>
        <NuxtLink to="/player/A/slot/2"><div class="slot-button">2</div></NuxtLink>
        <NuxtLink to="/player/A/slot/3"><div class="slot-button">3</div></NuxtLink>
        <NuxtLink to="/player/A/slot/4"><div class="slot-button">4</div></NuxtLink>
        <NuxtLink to="/player/A/slot/5"><div class="slot-button">5</div></NuxtLink>
        <NuxtLink to="/player/A/slot/6"><div class="slot-button">6</div></NuxtLink>
        <NuxtLink to="/player/A/slot/0"><div class="slot-button">7+</div></NuxtLink>
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

    .slot-button-container{
        width: 593.34px;
    }

    .player-card:hover{
        box-shadow: 0 0 10px black;
        transition: 0.5s;
    }

    .title{
        border-color: red;
    }

</style>    

<script setup>

    import { ref } from 'vue'

    const search = ref('')

    const { data: players } = await useFetch('/api/player/A')

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