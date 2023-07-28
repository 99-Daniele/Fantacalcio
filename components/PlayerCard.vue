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

<style>

  .card {
      width: 160px;
      height: 220px;
      background-color: white;
      transition: 0.5s;
      border-radius: 8px;
      border: solid 2px #47C6EF;
  }

  .jersey{
      margin-left: 18%;
      margin-top: 12.5%;
      width: 55%;
  }

  .card .data-container{
      margin-top: 62.5%;
      width: 75%;
      height: 35%;
      padding: 12.5%;
  }

  .card .data-container .name{
      font-size: 16px;
      font-weight: bold;
      width: 110%;
  }

  .card .data-container .info{
      display: flex;
      margin-top: 10%;
  }

  .card .data-container .extra{
      font-size: 12px;
      width: 50%;
      line-height: 150%;
  }

  .card .data-container .rate{
      font-size: 48px;
      font-weight: bold;
      width: 50%;
      text-align: center;
  }

</style>

<script setup>

  const props = defineProps(['name', 'squad', 'role', 'id', 'color1', 'color2', 'rate', 'slot', 'cost']);
  
</script>