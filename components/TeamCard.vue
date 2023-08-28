<template>
  <div class="team-card">
    <div class="data-container" id="pos">
      {{ pos }}°
    </div>
    <div class="data-container">
      <div>
        <img :src="'/logo/' + name + '.png'" id="logo">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped>

  #logo{
      height: 52px;
      align-items: center;
  }

</style>

<script setup>

  const props = defineProps(['name', 'pos']);
  
</script>