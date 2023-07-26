<template>
    <div class="card">
      <div class="jersey">
        <PlayerJersey :color1="color1" :color2="color2" :role="role"></PlayerJersey>
      </div>
      <div class="data-container">
        <div class="name">
          {{ name }}
        </div>
        <div class="info">
          <div class="extra">
            {{ squad }}<br>33 cr<br>1° SLOT
          </div>
          <div class="rate">
            91
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

  

</style>

<script setup>

  const props = defineProps(['name', 'squad', 'role', 'id', 'color1', 'color2']);
  
</script>