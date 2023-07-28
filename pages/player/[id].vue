<template>
    <div class="title" v-if="player.Ruolo == 'P'" style="border-color: orange">
        {{player.Nome}}
    </div>
    <div class="title" v-else-if="player.Ruolo == 'D'" style="border-color: #47C6EF">
        {{player.Nome}}
    </div>
    <div class="title" v-else-if="player.Ruolo == 'C'" style="border-color: rgb(92, 255, 47)">
        {{player.Nome}}
    </div>
    <div class="title" v-else style="border-color: red">
        {{player.Nome}}
    </div>
    <div id="big-card">
        <PlayerCard :name="player.Nome" :squad="player.team.Nome" :role="player.Ruolo" :id="player.Id" :color1="player.team.color1" :color2="player.team.color2" :rate="player.rate" :slot="player.slot" :cost="player.cost"/>
    </div>
    <div class="player-infos">
        <div class="player-info" style="width: 100%">
            <span class=player-info-text>PG</span>: {{ player.PG }}
        </div>
        <div class="player-info">
            <span class=player-info-text>MV</span>: {{ player.MV }}
        </div>
        <div class="player-info">
            <span class=player-info-text>FM</span>: {{ player.FM }}
        </div>
        <div class="player-info" v-if="player.Ruolo != 'P'">
            <img src="~\assets\img\GF.png" id="icon">: {{ player.GF }}
        </div>
        <div class="player-info" v-else>
            <img src="~\assets\img\GS.png" id="icon">: {{ player.GS }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\ass.png" id="icon">: {{ player.Assist }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\amm.png" id="icon">: {{ player.Ammonizioni }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\esp.png" id="icon">: {{ player.Espulsioni }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\R+.png" id="icon">: {{ player.RSG }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\R-.png" id="icon">: {{ player.RSB }}
        </div>
        <div class="player-info" v-if="player.Ruolo == 'P'">
            <img src="~\assets\img\RP.png" id="icon">: {{ player.RP }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\aut.png" id="icon">: {{ player.Autogol }}
        </div>
    </div>
    <div class="goBackButton" @click="$router.go(-1)">TORNA INDIETRO</div>
</template>

<style>

    #big-card{
        position: absolute;
        top: 120px;
        left: 60%;
    }

    #big-card .player-card {
        width: 320px;
        height: 440px;
    }

    #big-card .player-card .data-container .name{
        font-size: 32px;
    }

    #big-card .player-card .data-container .extra{
      font-size: 24px;
    }

    #big-card .player-card .data-container .rate{
      font-size: 96px;
    }

    #big-card .left-rectangle{
        margin-top: 5px;
        width: 48px;
        height: 80px;
    }

    #big-card .left-big-rectangle{
        margin-left: 36px;
        width: 64px;
        height: 160px;
    }

    #big-card .right-big-rectangle{
        margin-left: 100px;
        width: 64px;
        height: 160px;
    }

    #big-card .right-rectangle{
        margin-top: 5px;
        margin-left: 152px;
        width: 48px;
        height: 80px;
    }

    #big-card .role{
        font-size: 80px;
        margin-left: 80px;
        margin-top: 24px;
    }

    .player-infos{
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 12px;
    }

    .player-info{
        width: 50%;
    }

    .player-info-text{
        font-size: 14px;
        font-family: "AlloyInk";
        justify-content: center;
        width: 20px;
    }

    #icon{
        height: 20px;
        width: 20px;
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: player } = await useFetch('/api/player/' + id)
    
</script>