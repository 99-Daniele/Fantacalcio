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
            {{ squad }}<br>{{ cost }} cr<br>{{ slot }}° SLOT
          </div>
          <div class="rate">
            {{ Math.ceil(rate) }}
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

  const props = defineProps(['name', 'squad', 'role', 'id', 'color1', 'color2', 'rate', 'slot', 'cost']);
  
</script>