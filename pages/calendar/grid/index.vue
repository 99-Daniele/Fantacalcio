<template>
    <div class="title">
        Griglia Portieri
    </div>
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
                <th><b>{{gridTeam[0].homeTeam.substring(0,3)}}</b></th>
                <th v-for="game in gridTeam">
                    <span v-if="game.round == 0"></span>
                    <span v-else-if="game.totDif < 50" style="color:red">
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
                    <div v-if="couple.homeTeam > couple.awayTeam" style="border-top: solid 1px black;">
                        {{ couple.homeTeam }} - {{ couple.awayTeam }}: <b>{{ Math.ceil(couple.totDif) }}</b>
                    </div>
                </div>
            </div>
            <div class="list-container">
                <div style="color:red; font-weight: bold; padding: 5px 0;">
                    PEGGIORI COPPIE
                </div>
                <div v-for="couple in worst">
                    <div v-if="couple.homeTeam > couple.awayTeam" style="border-top: solid 1px black;">
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

    .grid-container{
        display: flex;
        width: 1200px;
        justify-content: space-around;
    }

    .list-container{
        border: solid 1px black;
        text-align: center;
        border-radius: 8px;
        font-size: 16px;
        width: 180px;
        line-height: 26px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

</style>

<script setup>

    const { data: teams} = await useFetch('/api/team')
    const { data: calendar } = await useFetch('/api/calendar/grid')

    const grid = [];

    let best = calendar.value.slice();
    let worst = calendar.value.slice();

    best = best.sort((a, b) => b.totDif - a.totDif).slice(0, 10);
    worst = worst.sort((a, b) => a.totDif - b.totDif).slice(0, 30);

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