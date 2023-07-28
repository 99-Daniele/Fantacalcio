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

  .team-card .data-container{
    width: 40%;
    text-align: center;
    padding: 8px 14px;
  }

  #pos{
    padding: 14px;
    font-size: 48px;
  }

  #logo{
      height: 52px;
      align-items: center;
  }

</style>

<script setup>

  const props = defineProps(['name', 'pos']);
  
</script>