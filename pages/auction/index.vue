<template>
    <div class="title">
        FANTACALCIO
    </div>
    <div class="container">
        <div v-for="championship in championships">
            <NuxtLink :to="'/auction/championship/' + championship.Id">
                <div class="small-container">
                    {{championship.Nome}}
                </div>
            </NuxtLink> 
        </div>
    </div>   
</template>

<script setup>

    const { data: championships } = await useFetch('/api/championship')
    
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
            async createChamp(){
                this.hideCreator();
                const { data: response } = await useFetch('/api/championship/createChampionship', {
                        method: 'post',
                        body: {
                            data: [document.getElementById("champName").value]
                        } 
                    })
                    if (response) {
                        alert(response.value);
                    }  
            },
        }
    }

</script>