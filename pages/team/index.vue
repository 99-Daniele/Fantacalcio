<template>
    <div class="title">
        Squadre
    </div>
    <div class="card-container">
        <div v-for="team in teams">
            <NuxtLink :to="'/team/' + team.name"><TeamCard :name="team.name" :pos="team.position"></TeamCard></NuxtLink>
        </div>
    </div>
</template>

<style scoped>

    .card-container{
        column-gap: 58px;
        row-gap: 20px;
        margin-top: 0;
        justify-content: space-between;
        width: 1200px;
        column-gap: normal;
    }

    .title{
        margin-top: 24px;
        height: 60px;
        padding-top: 8px;
    }

    @media (max-width: 768px) {

        .card-container{
            width: 160px;
        }
    }

</style>

<script setup>

    const { data: teams } = await useFetch('/api/team')
    
</script>