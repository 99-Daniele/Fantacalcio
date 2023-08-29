<template>
    <div class="title">
        {{team}}
    </div>
    <img :src="'/logo/' + team + '.png'" id="logo">
    <div class="rounds-container" id="rounds-container">
        <div v-for="i in 38">
            <div class="round" @click="focusRound(i)" :id="'nr-' + i">
                {{ i }}
            </div>
        </div>
    </div>
    <div class="team-container">
        <div v-for="team in teams">
            <NuxtLink :to="'/calendar/team/' + team.name"><img :src="'/logo/' + team.name + '.png'" id="calendar-logo"></NuxtLink>
        </div>
    </div>
    <div class="calendar-container">
        <div v-for="roundGame in calendar" class="round-container" :id="'round-' + roundGame.round">
            <div class="round-nr" :id="'round-nr-' + roundGame.round">
                {{ roundGame.round }}° GIORNATA
            </div>
            <div class="round-game">
                <div class="round-game-team" style="border-right: solid 1px black;">
                    <div class="round-logo">
                        <img :src="'/logo/' + roundGame.homeTeam + '.png'" id="round-logo">
                    </div>
                    {{ roundGame.homeTeam }}
                </div>
                <div class="round-game-team">
                    <div class="round-logo">
                        <img :src="'/logo/' + roundGame.awayTeam + '.png'" id="round-logo">
                    </div>
                    {{ roundGame.awayTeam }}
                </div>
            </div>
        </div>
    </div>
    <div class="go-up" id="go-up-button" @click="back()">
        <div class="circle">
            <div class="arrow"></div>
        </div>
    </div>
</template>

<style scoped>

    .rounds-container{
        margin-top: 40px;
    }

    #logo{
        position: absolute;
        height: 120px;
        top: 100px;
        right: 120px;
    }

    @media (max-width: 768px) {

        #logo{
            height: 80px;
            top: 64px;
            right: 90px;
        }
        .rounds-container{
            width: 380px;
            margin-left: -80px;
            font-size: 8px;
            margin-top: 10px;
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

        .calendar-container{
            width: 300px;
            column-gap: 48px;
            row-gap: 40px;
            margin-left: -20px;
        }

        .go-up{
            bottom: 40px;
            right: 12px;
        }
}

</style>

<script setup>

    const route = useRoute()
    const team = route.params.id
    const { data: teams } = await useFetch('/api/team')
    const { data: calendar } = await useFetch('/api/calendar/team/' + team)    
    
</script>

<script>

    export default {
        methods: {
            focusRound: function(round){
                this.reset();
                document.getElementById("nr-" + round).style.fontWeight = 'bold';
                window.scrollTo({
                    top: document.getElementById("round-" + round).offsetTop - 20,
                    behavior: 'smooth',
                });
                document.getElementById("round-nr-" + round).style.backgroundColor = 'black';
                document.getElementById("round-nr-" + round).style.color = 'white';
                document.getElementById("round-" + round).style.boxShadow = '0 0 10px black';
            },
            back: function(){
                this.reset()
                window.scrollTo({
                    top: document.getElementById("rounds-container").offsetTop - 20,
                    behavior: 'smooth',
                })
            },
            reset: function(){
                for(let i = 1; i <= 38; i++){
                    document.getElementById("round-nr-" + i).style.backgroundColor = 'white';
                    document.getElementById("round-nr-" + i).style.color = 'black';  
                    document.getElementById("round-" + i).style.boxShadow = '';
                    document.getElementById("nr-" + i).style.fontWeight = '400';
                }
            }
        }
    }

</script>