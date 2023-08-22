<template>
    <h1>{{ squads[0].championship.Nome }}</h1>
    <div class="container">
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
    </div>
    <div class="goBackButton" @click="$router.go(-1)">TORNA INDIETRO</div>
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