<template>
    <div class="title">
        Giocatori
    </div>
    <input id="search" type="text" v-model="search" placeholder="Search player.." autocomplete="off"/>
    <div class="role-button-container">
        <NuxtLink to="/player"><div id="p-button-active">P</div></NuxtLink>
        <NuxtLink to="/player/D"><div id="d-button">D</div></NuxtLink>
        <NuxtLink to="/player/C"><div id="c-button">C</div></NuxtLink>
        <NuxtLink to="/player/A"><div id="a-button">A</div></NuxtLink>
    </div>
    <div class="slot-button-container">
        <div v-if="slot == 1">
            <NuxtLink to="/player/P"><div class="button-active">1</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/P/slot/1"><div class="button">1</div></NuxtLink>
        </div>
        <div v-if="slot == 2">
            <NuxtLink to="/player/P"><div class="button-active">2</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/P/slot/2"><div class="button">2</div></NuxtLink>
        </div>
        <div v-if="slot == 3">
            <NuxtLink to="/player/P"><div class="button-active">3</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/P/slot/3"><div class="button">3</div></NuxtLink>
        </div>
        <div v-if="slot == 0">
            <NuxtLink to="/player/P"><div class="button-active">4+</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/P/slot/0"><div class="button">4+</div></NuxtLink>
        </div>
    </div>
    <div class="card-container">
        <div v-for="player in searchedPlayers">
            <NuxtLink :to='"/player/" + player.Id'><PlayerCard :name="player.Nome" :squad="player.team.Nome" :role="player.Ruolo" :id="player.Id" :color1="player.team.color1" :color2="player.team.color2" :rate="player.rate" :slot="player.slot" :cost="player.cost"/></NuxtLink>
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
        width: 390.67px;
    }

    .player-card:hover{
        box-shadow: 0 0 10px black;
        transition: 0.5s;
    }

</style>

<script setup>

    import { ref } from 'vue'

    const search = ref('')

    const route = useRoute()
    const slot = route.params.id
    const { data: players } = await useFetch('/api/player/P/slot/' + slot)

    const searchedPlayers = computed(() => {
        if(search.value.length > 0){
            return players.value.filter(player => {
                return player.Nome.toLowerCase().startsWith(search.value.toLowerCase())
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