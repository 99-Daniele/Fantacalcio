<template>
    <div class="title">
        FANTACALCIO
    </div>
    <div class="container">
        <div v-for="championship in championships">
            <NuxtLink :to="'/championship/' + championship.id">
                <div class="small-container">
                    {{championship.name}}
                </div>
            </NuxtLink> 
        </div>
        <div class="small-container" style="border: dashed; font-size: 20px;" @click="showCreator()">
            +
        </div>
    </div>   
    <div class="hidden-container" id="creator">
        <div id="exit" @click="hideCreator()">X</div>
        <label for="champName">Inserisci nome campionato:</label>
        <input type = "text" id = "champName" autocomplete="off">
        <div id="submit" @click="createChamp()">Crea campionato</div>
    </div> 
</template>

<script setup>

    const { data: championships } = await useFetch('/api/championship')
    
</script>

<script>

    export default {
        methods: {
            showCreator: function(){
                document.getElementById("creator").style.visibility = 'visible';
            },
            hideCreator: function(){
                document.getElementById("creator").style.visibility = 'hidden';
            },
            async createChamp(){
                this.hideCreator();
                const { data: response } = await useFetch('/api/championship/createChampionship', {
                        method: 'post',
                        body: {
                            data: [document.getElementById("champName").value]
                        } 
                    })
                    if (response) {
                        alert(response.value)
                        reloadNuxtApp()
                    }  
            },
        }
    }

</script>