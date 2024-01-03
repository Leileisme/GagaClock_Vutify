<template>
  <v-container class="vContainer">
    <div class="box">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">代辦清單</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field
        class="textField"
        variant="solo-filled"
        label="新增事項"
        append-icon="mdi-plus"
        ></v-text-field>
      </v-col>
      </v-row>
    </div>
    </v-container>
  </template>

<script setup>
import { ref } from 'vue'
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { items, finishedItems } = storeToRefs(list)

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
