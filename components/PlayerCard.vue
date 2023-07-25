<template>
    <div class="card">
      <div class="jersey">
        <PlayerJersey :color1="color1" :color2="color2" :role="role"></PlayerJersey>
      </div>
    </div>
</template>

<style scoped>

  .jersey{
    margin-left: 18%;
    margin-top: 11%;
  }

</style>

<script setup>

  const props = defineProps(['name', 'squad', 'role', 'id', 'color1', 'color2']);
  
</script>