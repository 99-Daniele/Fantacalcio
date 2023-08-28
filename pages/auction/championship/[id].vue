<template>
    <div class="title">
        {{ champ.name }}
    </div>
    <div id="p-card">
        <PlayerCard :name="filteredPlayers[0].name" :squad="filteredPlayers[0].team.name" :role="filteredPlayers[0].role" :id="filteredPlayers[0].id" :color1="filteredPlayers[0].team.color1" :color2="filteredPlayers[0].team.color2" :rate="filteredPlayers[0].rate" :slot="filteredPlayers[0].slot" :cost="filteredPlayers[0].cost"/>
    </div>
    <NuxtLink :to="'/auction/championship/player/' + champ.id">
        <div class="link">
            SVINCOLATI <img src="~\assets\img\link.png" id="icon">
        </div>
    </NuxtLink>
    <NuxtLink to="/calendar/grid">
        <div class="link" style="left: 540px; width: 180px;">
            GRIGLIA PORTIERI <img src="~\assets\img\link.png" id="icon">
        </div>
    </NuxtLink>
    <input id="search" type="text" v-model="search" placeholder="Cerca giocatore..." autocomplete="off" list="searchedPlayers" @change="showPlayer()">
    <datalist id="searchedPlayers">
        <option :value="p.name" v-for="p in players"></option>
    </datalist>
    <select name="squad-list" id="squad-list">
        <option value="default">Scegli squadra..</option>
        <option :value="squad.name" v-for="squad in champ.squad">{{ squad.name }}</option>
    </select>
    <input type="number" min="1" id="cost">
    <input type="submit" style="border-radius: 8px; width: 60px; cursor:pointer;" @click="buyPlayer()">
    <div class="container">
        <div v-for="squad in champ.squad">
            <div class="mini-container">
                <div class="squad-name-container">
                    {{ squad.name }}
                </div>
            </div>
            <div class="squad-list">
                <div class="role-list">
                    <div v-for="i in 3">
                        <div class="role-circle" style="background-color: orange;" @click="showDelete(squad.name, i)">
                            P
                        </div> 
                    </div>
                    <div v-for="i in 8">
                        <div class="role-circle" style="background-color: #47C6EF;" @click="showDelete(squad.name, i + 3)">
                            D
                        </div> 
                    </div>
                    <div v-for="i in 8">
                        <div class="role-circle" style="background-color: rgb(92, 255, 47);" @click="showDelete(squad.name, i + 11)">
                            C
                        </div> 
                    </div>
                    <div v-for="i in 6">
                        <div class="role-circle" style="background-color: red;" @click="showDelete(squad.name, i + 19)">
                            A
                        </div> 
                    </div>
                </div>
                <div class="player-list">
                    <div v-for="p in squad.squadPlayers">
                        <div class="player-container" :id="squad.name + ' - ' + squad.squadPlayers.indexOf(p)">
                            {{ p.player.name }}
                        </div>
                    </div>
                </div>
                <div class="cost-list">
                    <div v-for="p in squad.squadPlayers">
                        <div class="cost-container" v-if="p.cost < 100">
                            {{ p.cost }}
                        </div>
                        <div class="cost-container" v-else style="font-size: 8px; padding-top: 4px; height: 12.2px;">
                            {{ p.cost }}
                        </div>
                    </div>
                </div>
                <div class="rate-list">
                    <div v-for="p in squad.squadPlayers">
                        <div class="rate-container" v-if="p.player.rate < 100">
                            {{ p.player.rate }}
                        </div>
                        <div class="rate-container" v-else style="font-size: 8px; padding-top: 4px; height: 12.2px;">
                            {{ p.player.rate }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <div class="hidden-container" id="delete-container">
        <label id="delete">Sei sicuro di eliminare il giocatore {{ deletedPlayer }} dalla squadra {{deletedSquad}}?</label>
        <button @click="deletePlayer()">SI</button>
        <button @click="hideDelete()">NO</button>
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

    .role-circle{
        border-radius: 50%;
        width: 18px;
        color: white;
        margin-top: 2px;
        cursor: pointer;
    }

    .role-circle:hover{
        filter: grayscale(100%);
        color: black;
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
        height: 14.2px;
        overflow: hidden;
    }

    .player-container:hover{
        overflow: visible; 
        white-space: normal;
        height:auto;
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

    .cost-container{
        height: 14.2px;
    }

    .rate-container{
        height: 14.2px;
    }

    #cost{
        width: 60px;
        border-radius: 8px;
        margin-right: 20px;
    }

    .link{
        font-size: 20px;
        top: 142px;
        left: 360px;
        width: 124px;
    }

    .hidden-container{
        width: 300px;
        left: 550px;
    }

    #delete{
        display: flex;
    }

    button{
        border-radius: 8px;
        margin-top: 20px;
        margin-left: 20px;
        width: 60px;
        cursor: pointer;
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

    for(let i = 0; i < players.value.length; i++){
        for(let j = 0; j < chosenPlayers.value.length; j++)
            if(players.value[i].id === chosenPlayers.value[j].playerId)
                players.value.splice(i, 1);
    }   

    const filteredPlayers = computed(() => {
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
                deletedPlayer: null,
                deletedSquad: null
            }
        },
        methods: {
            showDelete: function(squadName, i){
                if(document.getElementById(squadName + " - " + (i - 1)) != null){
                    document.getElementById("delete-container").style.visibility = 'visible';
                    this.deletedPlayer = document.getElementById(squadName + " - " + (i - 1)).textContent;
                    this.deletedSquad = squadName;
                }
            },
            hideDelete: function(){
                document.getElementById("delete-container").style.visibility = 'hidden';
            },
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
                        alert(response.value)
                        reloadNuxtApp()
                    } 
                }
            },
            async deletePlayer(){
                const { data: response } = await useFetch('/api/squad/deletePlayer', {
                        method: 'post',
                        body: {
                            data: [this.deletedPlayer, this.deletedSquad]
                        } 
                    })
                    if (response) {
                        alert(response.value)
                        reloadNuxtApp()
                    } 
            }
        }
    }

</script>