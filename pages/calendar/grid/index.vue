<template>
    <div class="title">
        Griglia Portieri
    </div>
    <div class="team-container">
        <div v-for="team in teams">
            <NuxtLink :to="'/calendar/team/' + team.Nome"><img :src="'/logo/' + team.Nome + '.png'" id="calendar-logo"></NuxtLink>
        </div>
    </div>
    <div class="grid-container">
        <table>
            <tr>
                <th></th>
                <th v-for="team in teams">
                    <b>{{team.Nome.substring(0,3)}}</b>
                </th>
            </tr>
            <tr v-for="gridTeam in grid">
                <th><b>{{gridTeam[0].homeTeam.substring(0,3)}}</b></th>
                <th v-for="game in gridTeam">
                    <span v-if="game.round == 0"></span>
                    <span v-else-if="game.totDif < 0" style="color:red">
                        {{ game.totDif }}
                    </span>
                    <span v-else style="color:green">
                        {{ game.totDif }}
                    </span>
                </th>
            </tr>
        </table>
        <div>
            <div class="list-container">
                <div style="color:green; font-weight: bold; padding: 5px 0;">
                    MIGLIORI COPPIE
                </div>
                <div v-for="couple in best" style="border-top: solid 1px black;">
                    {{ couple.homeTeam }} - {{ couple.awayTeam }}: <b>{{ couple.totDif }}</b>
                </div>
            </div>
            <div class="list-container">
                <div style="color:red; font-weight: bold; padding: 5px 0;">
                    PEGGIORI COPPIE
                </div>
                <div v-for="couple in worst" style="border-top: solid 1px black;">
                    {{ couple.homeTeam }} - {{ couple.awayTeam }}: <b>{{ couple.totDif }}</b>
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

    best = best.sort((a, b) => b.totDif - a.totDif).slice(0, 5);
    worst = worst.sort((a, b) => a.totDif - b.totDif).slice(0, 5);

    teams.value.forEach(team => {
        const games = [];
        const teamName = team.Nome;
        calendar.value.forEach(game => {
            if(game.homeTeam == teamName){
                games.push(game);
            }
        });
        grid.push(games)
    });

</script>