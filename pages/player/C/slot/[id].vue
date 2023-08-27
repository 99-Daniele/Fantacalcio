<template>
    <div class="title">
        Centrocampisti
    </div>
    <input id="search" type="text" v-model="search" placeholder="Cerca giocatore..." autocomplete="off"/>
    <div class="role-button-container">
        <NuxtLink to="/player/P"><div id="p-button">P</div></NuxtLink>
        <NuxtLink to="/player/D"><div id="d-button">D</div></NuxtLink>
        <NuxtLink to="/player"><div id="c-button-active">C</div></NuxtLink>
        <NuxtLink to="/player/A"><div id="a-button">A</div></NuxtLink>
    </div>
    <div class="slot-button-container">
        <div v-if="slot == 1">
            <NuxtLink to="/player/C"><div class="button-active">1</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/1"><div class="button">1</div></NuxtLink>
        </div>
        <div v-if="slot == 2">
            <NuxtLink to="/player/C"><div class="button-active">2</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/2"><div class="button">2</div></NuxtLink>
        </div>
        <div v-if="slot == 3">
            <NuxtLink to="/player/C"><div class="button-active">3</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/3"><div class="button">3</div></NuxtLink>
        </div>
        <div v-if="slot == 4">
            <NuxtLink to="/player/C"><div class="button-active">4</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/4"><div class="button">4</div></NuxtLink>
        </div>
        <div v-if="slot == 5">
            <NuxtLink to="/player/C"><div class="button-active">5</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/5"><div class="button">5</div></NuxtLink>
        </div>
        <div v-if="slot == 6">
            <NuxtLink to="/player/C"><div class="button-active">6</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/6"><div class="button">6</div></NuxtLink>
        </div>
        <div v-if="slot == 7">
            <NuxtLink to="/player/C"><div class="button-active">7</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/7"><div class="button">7</div></NuxtLink>
        </div>
        <div v-if="slot == 8">
            <NuxtLink to="/player/C"><div class="button-active">8</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/8"><div class="button">8</div></NuxtLink>
        </div>
        <div v-if="slot == 0">
            <NuxtLink to="/player/C"><div class="button-active">9+</div></NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/player/C/slot/0"><div class="button">9+</div></NuxtLink>
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

    .player-card:hover{
        box-shadow: 0 0 10px black;
        transition: 0.5s;
    }

    .title{
        border-color: rgb(92, 255, 47);
    }

</style>

<script setup>

    import { ref } from 'vue'

    const search = ref('')

    const route = useRoute()
    const slot = route.params.id
    const { data: players } = await useFetch('/api/player/C/slot/' + slot)

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