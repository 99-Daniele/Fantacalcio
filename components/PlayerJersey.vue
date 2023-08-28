<template>
    <div class="left-rectangle" :style="'background-color:' + color1"></div>
    <div class="left-big-rectangle" :style="'background-color:' + color1"></div>
    <div class="right-big-rectangle" :style="'background-color:' + color2"></div>
    <div class="right-rectangle" :style="'background-color:' + color2"></div>
    <div class="role">{{ role }}</div>
</template>

<script setup>

  const props = defineProps(['color1', 'color2', 'role']);
  
</script>