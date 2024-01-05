<template>
<v-container class="vContainer">
  <div class="box">
    <v-row>
        <v-col cols="12" class="text-center">
          <h1></h1>
          <h1></h1>
      </v-col>
    </v-row>
  </div>

</v-container>
</template>

<script setup>
import { useListStore } from '@/store/list'
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

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
