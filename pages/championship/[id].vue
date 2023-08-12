<template>
    <h1>{{ squads[0].championship.Nome }}</h1>
    <div class="squad-container">
        <div v-for="squad in squads">
            <NuxtLink :to="'/squad/' + squad.squadId">
                <div class="small-container">
                    <div class="squad-name-container">
                        {{ squad.Nome }}
                    </div>
                    <div class="player-name-container">
                        {{ squad.Giocatore }}
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
        <input type = "text" id = "squadName" v-model="name" autocomplete="off">
        <label for="playerName">Inserisci nome giocatore:</label>
        <input type = "text" id = "playerName" v-model="name" autocomplete="off">
        <div id="submit" @click="createSquad()">Crea squadra</div>
    </div>
    <div class="goBackButton" @click="$router.go(-1)">TORNA INDIETRO</div>
</template>

<style scoped>

    #exit{
        font-weight: bold;
        position: absolute;
        top: 10px;
        left: 10px;
        border: solid 1px black;
        border-radius: 50%;
        width: 18px;
        cursor: pointer;
    }

    #squadName{
        margin-bottom: 24px;
        border-radius: 8px;
    }

    #playerName{
        margin-bottom: 24px;
        border-radius: 8px;
    }

    #submit{
        padding: 10px;
        font-size: 16px;
        border: solid 1px black;
        border-radius: 8px;
        width: fit-content;
        margin-left: 48px;
        background-color: white;
        cursor: pointer;
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: squads } = await useFetch('/api/championship/' + id)
    
</script>

<script>

    import { ref } from 'vue'

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
                        alert(response.value);
                    }  
            },
        }
    }

</script>