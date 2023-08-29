<template>
    <div class="title">
        Calendario
    </div>
    <NuxtLink to="/calendar/grid">
        <div class="link">
            GRIGLIA PORTIERI <img src="~\assets\img\link.png" id="icon">
        </div>
    </NuxtLink>
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
        <div v-for="roundGames in calendar" class="round-container" :id="'round-' + roundGames.round">
            <div class="round-nr" :id="'round-nr-' + roundGames.round">
                {{ roundGames.round }}° GIORNATA
            </div>
            <div v-for="roundGame in roundGames.games" class="round-game">
                <div class="round-game-team" style="border-right: solid 1px black;">
                    <div class="round-logo">
                        <img :src="'/logo/' + roundGame[0] + '.png'" id="round-logo">
                    </div>
                    {{ roundGame[0] }}
                </div>
                <div class="round-game-team">
                    <div class="round-logo">
                        <img :src="'/logo/' + roundGame[1] + '.png'" id="round-logo">
                    </div>
                    {{ roundGame[1] }}
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

    .title{
        margin-top: 40px;
    }

    .round-nr{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .round-game{
        height: 32px;
    }

    #round-logo{
      height: 20px;
      max-width: 26px;
    }

    .link:hover{
        box-shadow: 0 0 10px black;
        transition: .5s;
    }

    @media (max-width: 768px) {

        .link{
            display: none;
        }

        .rounds-container{
            width: 380px;
            margin-left: -80px;
            font-size: 8px;
            margin-top: -20px;
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

    const { data: teams} = await useFetch('/api/team')
    const { data: calendar } = await useFetch('/api/calendar')
    
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