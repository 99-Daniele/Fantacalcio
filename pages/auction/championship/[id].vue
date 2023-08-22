<template>
    <div class="title">
        {{ champ.Nome }}
    </div>
    <input id="search" type="text" v-model="search" placeholder="Search player.." autocomplete="off"/>
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
                <div class="rate-list">
                    <div v-for="p in squad.squadPlayers">
                        <div class="rate-container">
                            {{ p.player.rate }}
                        </div>
                    </div>
                </div>
                <div class="cost-list">
                    <div v-for="p in squad.squadPlayers">
                        <div class="cost-container">
                            {{ p.cost }}
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
        gap: 8px
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

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: champ } = await useFetch('/api/championship/' + id)
    
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