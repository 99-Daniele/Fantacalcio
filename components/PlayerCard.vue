<template>
    <div class="card">
      <div class="data-container">
        {{ name }}
        {{ squad }}   
        {{ role }} 
        {{ id }}
      </div>
    </div>
</template>

<script setup>

  const props = defineProps(['name', 'squad', 'role', 'id']);
  
</script>