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
    }

    .left-big-rectangle{
        position: absolute;
        margin-left: 18px;
        width: 32px;
        height: 80px;
    }

    .right-big-rectangle{
        position: absolute;
        margin-left: 50px;
        width: 32px;
        height: 80px;
    }

    .right-rectangle{
        position: absolute;
        margin-top: 2.5px;
        margin-left: 76px;
        width: 24px;
        height: 40px;
        rotate: 135deg;
    }

    .role{
        position: absolute;
        color: white;
        font-size: 40px;
        font-weight: bold;
        margin-left: 40px;
        margin-top: 12px;
    }


</style>

<script setup>

  const props = defineProps(['color1', 'color2', 'role']);
  
</script>