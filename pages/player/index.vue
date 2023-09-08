<template>
    <div class="title">
        Giocatori
    </div>
    <button @click="downloadPlayer()">AGGIORNA GIOCATORI</button>
    <input id="search" type="text" v-model="search" placeholder="Cerca giocatore..." autocomplete="off"/>
    <div class="role-button-container">
        <NuxtLink to="/player/P"><div id="p-button">P</div></NuxtLink>
        <NuxtLink to="/player/D"><div id="d-button">D</div></NuxtLink>
        <NuxtLink to="/player/C"><div id="c-button">C</div></NuxtLink>
        <NuxtLink to="/player/A"><div id="a-button">A</div></NuxtLink>
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

    button{
        position: absolute;
        border-radius: 8px;
        width: fit-content;
        cursor: pointer;
        top: 148px;
        left: 360px;
        font-size: 20px;
    }

    .player-card:hover{
        box-shadow: 0 0 10px black;
        transition: 0.5s;
    }

    @media (max-width: 768px) {
        .role-button-container{
            display: flex;
            flex-direction: column;
            width: 160px;
            margin-top: 20px;
            row-gap: 20px;
        }

        #search{
            top: 360px;
            left: 90px;
            width: 160px;
        }

        .card-container{
            margin-top: 120px;
        }

    }


    
</style>

<script setup>

    import { ref } from 'vue'

    const search = ref('')

    const { data: players } = await useFetch('/api/player')

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
        data(){
            return{
                newPlayers: null
            }
        },
        methods: {
            back: function(){
                window.scrollTo({
                    top: document.getElementById("search").offsetTop - 40,
                    behavior: 'smooth',
                })
            },
            async downloadPlayer(){
                this.newPlayers = await useFetch('/api/player/downloadPlayers')
                for(let i = 0; i < this.newPlayers.data.players.length; i++){
                    await useFetch('/api/player/updatePlayer', {
                        method: 'post',
                        body: {
                            data: [
                                this.newPlayers.data.players[i].id, 
                                this.newPlayers.data.players[i].caps, 
                                this.newPlayers.data.players[i].markavg, 
                                this.newPlayers.data.players[i].fmarkavg, 
                                this.newPlayers.data.players[i].goals, 
                                this.newPlayers.data.players[i].gotgoals,
                                this.newPlayers.data.players[i].spenalties,
                                this.newPlayers.data.players[i].penalties,
                                this.newPlayers.data.players[i].mpenalties,
                                this.newPlayers.data.players[i].assists,
                                this.newPlayers.data.players[i].ycards,
                                this.newPlayers.data.players[i].rcards,
                                this.newPlayers.data.players[i].owngoals,
                                i
                            ]
                        } 
                    })
                }
                //const { data: response } = await useFetch('/api/player/createAndDeletePlayer')
                alert("Giocatori aggiornati correttamente")
                reloadNuxtApp()
            }
        }
    }

</script>