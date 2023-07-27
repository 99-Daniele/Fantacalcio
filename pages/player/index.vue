<template>
    <div class="title">
        Giocatori
    </div>
    <input id="search" type="text" v-model="search" placeholder="Search player.." autocomplete="off"/>
    <div class="role-button-container">
        <div id="p-button" @click="toggle($event, 'orange')">P</div>
        <div id="d-button" @click="toggle($event, '#47C6EF')">D</div>
        <div id="c-button" @click="toggle($event, 'rgb(92, 255, 47)')">C</div>
        <div id="a-button" @click="toggle($event, 'red')">A</div>
    </div>
    <div class="slot-button-container">
        <div class="button" @click="toggle($event, 'black')">1</div>
        <div class="button" @click="toggle($event, 'black')">2</div>
        <div class="button" @click="toggle($event, 'black')">3</div>
        <div class="button" @click="toggle($event, 'black')">4</div>
        <div class="button" @click="toggle($event, 'black')">5</div>
        <div class="button" @click="toggle($event, 'black')">6</div>
        <div class="button" @click="toggle($event, 'black')">7</div>
        <div class="button" @click="toggle($event, 'black')">8</div>
        <div class="button" @click="toggle($event, 'black')">-</div>
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

<style>

    .card-container .card:hover{
        background-color: #47C6EF;
        transition: 0.5s;
    }

    .role-button-container{
        display: flex;
        width: 796px;
        margin-top: 20px;
        justify-content: space-between;
    }

    .slot-button-container{
        display: flex;
        width: 796px;
        margin-top: 8px;
        justify-content: space-between;
    }

    #p-button{
        width: 188px;
        border-radius: 8px;
        border: solid 1px orange;
        text-align: center;
        font-size: 24px;
        color: orange;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
    }

    #p-button:hover{
        color: white;
        background-color: orange;
        transition: 0.5s;
    }

    #d-button{
        width: 188px;
        border-radius: 8px;
        border: solid 1px #47C6EF;
        text-align: center;
        font-size: 24px;
        color: #47C6EF;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
    }

    #d-button:hover{
        color: white;
        background-color: #47C6EF;
        transition: 0.5s;
    }

    #c-button{
        width: 188px;
        border-radius: 8px;
        border: solid 1px rgb(92, 255, 47);
        text-align: center;
        font-size: 24px;
        color: rgb(92, 255, 47);
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
    }

    #c-button:hover{
        color: white;
        background-color: rgb(92, 255, 47);
        transition: 0.5s;
    }

    #a-button{
        width: 188px;
        border-radius: 8px;
        border: solid 1px red;
        text-align: center;
        font-size: 24px;
        color: red;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
    }

    #a-button:hover{
        color: white;
        background-color: red;
        transition: 0.5s;
    }

    .button{
        width: 80px;
        border-radius: 8px;
        border: solid 1px black;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
    }

    .button:hover{
        background-color: black;
        color: white;
        transition: 0.5s;
    }

</style>

<script setup>

    import { ref } from 'vue'

    const search = ref('')

    const { data: players } = await useFetch('/api/player')

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

    export default {
        methods: {
            back: function(){
                window.scrollTo({
                    top: document.getElementById("search").offsetTop - 40,
                    behavior: 'smooth',
                })
            },
            toggle: function(button, color){
                button.currentTarget.style.backgroundColor = color;
                button.currentTarget.style.color = 'white';
            }
        }
    }

</script>