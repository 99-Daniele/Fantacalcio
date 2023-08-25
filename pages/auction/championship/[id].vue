<template>
    {{ chosenPlayers }}
    <div class="title">
        {{ champ.Nome }}
    </div>
    <div id="p-card">
        <PlayerCard :name="filteredPlayers[0].Nome" :squad="filteredPlayers[0].team.Nome" :role="filteredPlayers[0].Ruolo" :id="filteredPlayers[0].Id" :color1="filteredPlayers[0].team.color1" :color2="filteredPlayers[0].team.color2" :rate="filteredPlayers[0].rate" :slot="filteredPlayers[0].slot" :cost="filteredPlayers[0].cost"/>
    </div>
    <NuxtLink :to="'/auction/championship/player/' + champ.Id">
        <div class="link">
            SVINCOLATI <img src="~\assets\img\link.png" id="icon">
        </div>
    </NuxtLink>
    <input id="search" type="text" v-model="search" placeholder="Cerca giocatore..." autocomplete="off" list="searchedPlayers" @change="showPlayer()">
    <datalist id="searchedPlayers">
        <option :value="p.Nome" v-for="p in players"></option>
    </datalist>
    <select name="squad-list" id="squad-list">
        <option value="default">Scegli squadra..</option>
        <option :value="squad.Nome" v-for="squad in champ.squad">{{ squad.Nome }}</option>
    </select>
    <input type="number" min="1" id="cost">
    <input type="submit" style="border-radius: 8px; width: 60px; cursor:pointer;" @click="buyPlayer()">
    <div class="container">
        <div v-for="squad in champ.squad">
            <div class="mini-container">
                <div class="squad-name-container">
                    {{ squad.Nome }}
                </div>
            </div>
            <div class="squad-list">
                <div class="role-list">
                    <div v-for="i in 3">
                        <div id="circle" style="background-color: orange;">
                            P
                        </div> 
                    </div>
                    <div v-for="i in 8">
                        <div id="circle" style="background-color: #47C6EF;">
                            D
                        </div> 
                    </div>
                    <div v-for="i in 8">
                        <div id="circle" style="background-color: rgb(92, 255, 47);">
                            C
                        </div> 
                    </div>
                    <div v-for="i in 6">
                        <div id="circle" style="background-color: red;">
                            A
                        </div> 
                    </div>
                </div>
                <div class="player-list">
                    <div v-for="p in squad.squadPlayers">
                        <div class="player-container">
                            {{ p.player.Nome }}
                        </div>
                    </div>
                </div>
                <div class="cost-list">
                    <div v-for="p in squad.squadPlayers">
                        <div class="cost-container" v-if="p.cost < 100">
                            {{ p.cost }}
                        </div>
                        <div class="cost-container" v-else style="font-size: 8px; padding: 4px 2px;">
                            {{ p.cost }}
                        </div>
                    </div>
                </div>
                <div class="rate-list">
                    <div v-for="p in squad.squadPlayers">
                        <div class="rate-container" v-if="p.player.rate < 100">
                            {{ p.player.rate }}
                        </div>
                        <div class="rate-container" v-else style="font-size: 8px; padding: 4px 2px;">
                            {{ p.player.rate }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    #squadName{
        margin-bottom: 24px;
        border-radius: 8px;
    }

    #playerName{
        margin-bottom: 24px;
        border-radius: 8px;
    }

    .container{
        gap: 8px;
        margin-left: -80px
    }

    .squad-name-container{
        font-size: 16px;
    }

    #circle{
        border-radius: 50%;
        width: 18px;
        color: white;
        margin-top: 2px;
    }

    #search{ 
        position: relative;
        top: 0;
        right: 0;
        margin-right: 20px;
    }

    .searched-player-list{
        margin-top: 20px;
        max-height: 100px;
        overflow-x: hidden;
        overflow-y: scroll;
        margin-bottom: 20px;
        width: 160px;
    }

    .player-container{
        width: 60px;
        overflow-x: hidden;
    }

    #squad-list{
        width: 160px;
        border-radius: 8px;
        margin-bottom: 90px;
        margin-right: 20px;
    }

    #p-card{
        visibility: hidden;
    }

    #p-card .player-card{
        position: absolute;
        top: 80px;
        right: 160px;
    }

    #cost{
        width: 60px;
        border-radius: 8px;
        margin-right: 20px;
    }

    .link{
        font-size: 20px;
        top: 148px;
        left: 360px;
        width: 124px;
    }

</style>

<script setup>

    import { ref } from 'vue'

    const search = ref('')

    const route = useRoute()
    const id = route.params.id
    const { data: champ } = await useFetch('/api/championship/' + id)
    const { data: players } = await useFetch('/api/player/')
    const { data: chosenPlayers } = await useFetch('/api/squadPlayers/' + id)

    

    const filteredPlayers = computed(() => {
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
    
    export default {
        methods: {
            showPlayer: function(){
                document.getElementById("p-card").style.visibility = 'visible';
                
            },
            async buyPlayer(){
                let player = document.getElementById("search").value;
                let squad = document.getElementById("squad-list").value;
                let cost = document.getElementById("cost").value;
                if(cost < 1)
                    alert("Inserire costo maggiore di 0")
                else{
                    const { data: response } = await useFetch('/api/squad/buyPlayer', {
                        method: 'post',
                        body: {
                            data: [player, squad, cost]
                        } 
                    })
                    if (response) {
                        alert(response.value);
                        reloadNuxtApp()
                    } 
                }

            }
        }
    }

</script>