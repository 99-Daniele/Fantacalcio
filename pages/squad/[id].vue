<template>
    <div class="title">
        {{ squad.name }}
    </div>
    <div class="subtitle">
        {{ squad.gamer }}
    </div>
    <img src="~\assets\img\modify.png" id="icon" @click="showModifier()">
    <div class="card-container">
        <div v-for="p in squad.player">
            <NuxtLink :to='"/player/" + p.id'><PlayerCard :name="p.name" :squad="p.team.name" :role="p.role" :id="p.id" :color1="p.team.color1" :color2="p.team.color2" :rate="p.rate" :slot="p.slot" :cost="p.cost"/></NuxtLink>
        </div>
    </div>
    <div class="hidden-container" id="modifier">
        <div id="exit" @click="hideModifier()">X</div>
        <label for="squadName">Cambia nome squadra:</label>
        <input type = "text" id = "squadName" autocomplete="off">
        <label for="playerName">Cambia nome giocatore:</label>
        <input type = "text" id = "playerName" autocomplete="off">
        <div id="submit" @click="modifySquad()">Modifica squadra</div>
    </div>
    <div class="goBackButton" @click="$router.go(-1)">TORNA INDIETRO</div>
</template>

<style scoped>

    .player-card:hover{
        box-shadow: 0 0 10px black;
        transition: 0.5s;
    }

    #icon{
        height: 40px;
        width: 40px;
        position: absolute;
        top: 140px;
        right: 120px;
        cursor: pointer;
    }

    .goBackButton{
        left: 500px;
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: squad } = await useFetch('/api/squad/' + id)
    
</script>

<script>

    export default {
        methods: {
            showModifier: function(){
                document.getElementById("modifier").style.visibility = 'visible';
            },
            hideModifier: function(){
                document.getElementById("modifier").style.visibility = 'hidden';
            },
            async modifySquad(){
                this.hideModifier();
                const { data: response } = await useFetch('/api/squad/updateSquad', {
                        method: 'post',
                        body: {
                            data: [useRoute().params.id, document.getElementById("squadName").value, document.getElementById("playerName").value]
                        } 
                    })
                    if (response) {
                        alert(response.value)
                        reloadNuxtApp()
                    }  
            },
        }
    }

</script>