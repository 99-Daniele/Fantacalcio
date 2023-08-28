<template>
    <div class="title">
        {{ championship.name }}
    </div>
    <div class="goBackButton" @click="$router.go(-1)">TORNA INDIETRO</div>
    <div class="container">
        <div v-for="squad in championship.squad">
            <NuxtLink :to="'/squad/' + squad.squadId">
                <div class="small-container">
                    <div class="squad-name-container">
                        {{ squad.name }}
                    </div>
                    <div class="player-name-container">
                        {{ squad.gamer }}
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="small-container" style="border: dashed; font-size: 36px;" @click="showCreator()">
            +
        </div>
    </div>
    <div class="hidden-container" id="creator">
        <div id="exit" @click="hideCreator()">X</div>
        <label for="squadName">Inserisci nome squadra:</label>
        <input type = "text" id = "squadName" autocomplete="off">
        <label for="playerName">Inserisci nome giocatore:</label>
        <input type = "text" id = "playerName" autocomplete="off">
        <div id="submit" @click="createSquad()">Crea squadra</div>
    </div>
</template>

<style scoped>

    .goBackButton{
        left: 500px;
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: championship } = await useFetch('/api/championship/' + id)
    
</script>

<script>

    export default {
        methods: {
            showCreator: function(){
                document.getElementById("creator").style.visibility = 'visible';
            },
            hideCreator: function(){
                document.getElementById("creator").style.visibility = 'hidden';
            },
            async createSquad(){
                this.hideCreator();
                const { data: response } = await useFetch('/api/squad/createSquad', {
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