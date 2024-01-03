<template>
<v-container class="vContainer">
  <div class="box"></div>

</v-container>
</template>

<script setup>

</script>

<style scoped>
.vContainer{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box{
  position: absolute;

  width: 60%;
  height: 40%;
  /* background-color: rgba(0, 0, 0); */
  border: 1px red solid;
}
</style>
