<template>
    <div class="left-rectangle" :style="'background-color:' + color1"></div>
    <div class="left-big-rectangle" :style="'background-color:' + color1"></div>
    <div class="right-big-rectangle" :style="'background-color:' + color2"></div>
    <div class="right-rectangle" :style="'background-color:' + color2"></div>
    <div class="role">{{ role }}</div>
</template>

<style scoped>

    .left-rectangle{
        position: absolute;
        margin-top: 2.5px;
        width: 24px;
        height: 40px;
        rotate: 45deg;
        border: solid 1px black;
        z-index: 0;
    }

    .left-big-rectangle{
        position: absolute;
        margin-left: 18px;
        width: 32px;
        height: 80px;
        border-top: solid 1px black;
        border-left: solid 1px black;
        border-bottom: solid 1px black;
        z-index: 1;
    }

    .right-big-rectangle{
        position: absolute;
        margin-left: 50px;
        width: 32px;
        height: 80px;
        border-top: solid 1px black;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
        z-index: 1;
    }

    .right-rectangle{
        position: absolute;
        margin-top: 2.5px;
        margin-left: 76px;
        width: 24px;
        height: 40px;
        rotate: 135deg;
        border: solid 1px black;
        z-index: 0;
    }

    .role{
        position: absolute;
        color: white;
        font-size: 40px;
        font-weight: bold;
        margin-left: 40px;
        margin-top: 12px;
        -webkit-text-stroke: 1px black;
        z-index: 2;
    }


</style>

<script setup>

  const props = defineProps(['color1', 'color2', 'role']);
  
</script>