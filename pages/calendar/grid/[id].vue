<template>
    <div class="title">
        {{t}}
    </div>
    <NuxtLink to="/calendar/grid">
        <div class="link">
            GRIGLIA PORTIERI <img src="~\assets\img\link.png" id="icon">
        </div>
    </NuxtLink>
    <div class="team-container">
        <div v-for="team in teams">
            <NuxtLink :to="'/calendar/grid/' + team.name"><img :src="'/logo/' + team.name + '.png'" id="calendar-logo"></NuxtLink>
        </div>
    </div>
    <div class="grid-container">
        <table>
            <tr>
                <th></th>
                <th v-for="team in teams">
                    <b>{{team.name.substring(0,3)}}</b>
                </th>
            </tr>
            <tr v-for="gridTeam in grid">
                <th v-if="gridTeam[0].homeTeam == t" style="color:white; background-color: black;"><b>{{gridTeam[0].homeTeam.substring(0,3)}}</b></th>
                <th v-else><b>{{gridTeam[0].homeTeam.substring(0,3)}}</b></th>
                <th v-for="game in gridTeam" v-if="gridTeam[0].homeTeam == t" style="background-color: black;">
                    <span v-if="game.round == 0"></span>
                    <span v-else-if="game.totDif < 50" style="color:red;">
                        <b>{{ Math.ceil(game.totDif) }}</b>
                    </span>
                    <span v-else style="color:green">
                        <b>{{ Math.ceil(game.totDif) }}</b>
                    </span>
                </th>
                <th v-for="game in gridTeam" v-else>
                    <span v-if="game.round == 0"></span>
                    <span v-else-if="game.totDif < 50" style="color:red;">
                        {{ Math.ceil(game.totDif) }}
                    </span>
                    <span v-else style="color:green">
                        {{ Math.ceil(game.totDif) }}
                    </span>
                </th>
            </tr>
        </table>
        <div>
            <div class="list-container">
                <div style="color:green; font-weight: bold; padding: 5px 0;">
                    MIGLIORI COPPIE
                </div>
                <div v-for="couple in best">
                    <div v-if="couple.homeTeam != couple.awayTeam" style="border-top: solid 1px black;">
                        {{ couple.homeTeam }} - {{ couple.awayTeam }}: <b>{{ Math.ceil(couple.totDif) }}</b>
                    </div>
                </div>
            </div>
            <div class="list-container">
                <div style="color:red; font-weight: bold; padding: 5px 0;">
                    PEGGIORI COPPIE
                </div>
                <div v-for="couple in worst">
                    <div v-if="couple.homeTeam != couple.awayTeam" style="border-top: solid 1px black;">
                        {{ couple.homeTeam }} - {{ couple.awayTeam }}: <b>{{ Math.ceil(couple.totDif) }}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    table{
        border-spacing: 0;
    }

    th{
        font-weight: 400;
        border: solid 1px black;
        width: 26px;
        font-size: 13px;
    }

    .title{
        margin-top: 12px;
        padding-top: 8px;
        height: 60px;
    }

    #calendar-logo{
        height: 20px;
    }

    .link{
        position: absolute;
        top: 80px;
        right: 145px;
        border-radius: 8px;
        border: solid 1px black;
        padding: 4px;
        font-weight: bold;
        transition: .5s;
    }

</style>

<script setup>

    
    const route = useRoute()
    const t = route.params.id
    const { data: teams} = await useFetch('/api/team')
    const { data: calendar } = await useFetch('/api/calendar/grid')
    const { data: teamCalendar } = await useFetch('/api/calendar/grid/' + t)

    const grid = [];

    let best = teamCalendar.value.slice();
    let worst = teamCalendar.value.slice();

    best = best.sort((a, b) => b.totDif - a.totDif).slice(0, 5);
    worst = worst.sort((a, b) => a.totDif - b.totDif).slice(0, 6);

    teams.value.forEach(team => {
        const games = [];
        const teamName = team.name;
        calendar.value.forEach(game => {
            if(game.homeTeam == teamName){
                games.push(game);
            }
        });
        grid.push(games)
    });

</script>