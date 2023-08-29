<template>
    <div class="title">
        {{ team }}
    </div>
    <input id="search" type="text" v-model="search" placeholder="Cerca giocatore..." autocomplete="off"/>
    <img :src="'/logo/' + team + '.png'" id="logo">
    <div class="team-container">
        <div v-for="team in teams">
            <NuxtLink :to="'/team/' + team.name"><img :src="'/logo/' + team.name + '.png'" id="calendar-logo"></NuxtLink>
        </div>
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

    #search{
        top: 212px;
        left: 120px;
    }
  
    #logo{
        position: absolute;
        height: 120px;
        top: 120px;
        right: 120px;
    }
    
    .team-container{
        margin-top: 60px;
        margin-bottom: 0px;
        width: 1220px;
    }

    @media (max-width: 768px) {

        #logo{
            height: 80px;
            top: 64px;
            right: 90px;
        }

        .team-container{
            margin-top: 20px;
            width: 320px;
            margin-left: -50px;
        }

        #calendar-logo{
            height: 14px;
            transition: 0.5s;
        }

        #search{
            top: 240px;
            left: 90px;
        }
    }

</style>

<script setup>

    import { ref } from 'vue'

    const search = ref('')

    const route = useRoute()
    const team = route.params.id
    const { data: teams } = await useFetch('/api/team')
    const { data: players } = await useFetch('/api/team/' + team)

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
                    top: 0,
                    behavior: 'smooth',
                })
            }
        }
    }

</script>