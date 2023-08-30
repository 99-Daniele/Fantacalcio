<template>
    <div class="title" v-if="player.role == 'P'" style="border-color: orange">
        {{player.name}}
    </div>
    <div class="title" v-else-if="player.role == 'D'" style="border-color: #47C6EF">
        {{player.name}}
    </div>
    <div class="title" v-else-if="player.role == 'C'" style="border-color: rgb(92, 255, 47)">
        {{player.name}}
    </div>
    <div class="title" v-else style="border-color: red">
        {{player.name}}
    </div>
    <div class="goBackButton" @click="$router.go(-1)">TORNA INDIETRO</div>
    <div id="big-card">
        <PlayerCard :name="player.name" :squad="player.team.name" :role="player.role" :id="player.id" :color1="player.team.color1" :color2="player.team.color2" :rate="player.rate" :slot="player.slot" :cost="player.cost"/>
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
            <img src="~\assets\img\ass.png" id="icon">: {{ player.ass }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\amm.png" id="icon">: {{ player.amm }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\esp.png" id="icon">: {{ player.esp }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\R+.png" id="icon">: {{ player.RSG }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\R-.png" id="icon">: {{ player.RSB }}
        </div>
        <div class="player-info" v-if="player.role == 'P'">
            <img src="~\assets\img\RP.png" id="icon">: {{ player.RP }}
        </div>
        <div class="player-info">
            <img src="~\assets\img\aut.png" id="icon">: {{ player.aut }}
        </div>
    </div>
</template>

<style>   
    
    .goBackButton{
        left: 500px;
    }

    @media (max-width: 768px) {
        
        .goBackButton{
            left: 90px;
        }  
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: player } = await useFetch('/api/player/' + id)
    
</script>