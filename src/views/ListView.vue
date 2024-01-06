<template>
  <v-container class="vContainer">
    <div class="box">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">代辦清單</h1>
      </v-col>

      <!-- :rules 表單驗證規則 -->
      <!-- ref="newItemInput"??? -->
      <v-col cols="12">
        <v-text-field
        class="textField"
        variant="solo-filled"
        label="新增事項"
        append-icon="mdi-plus"
        v-model="newItem"
        :rules="[rules.required,rules.length]"
        ref="newItemInput"
        @click:append="onInputSubmit"
        @keydown.enter="onInputSubmit"
        ></v-text-field>

        <v-table>
          <thead >
            <tr>
              <th>名稱</th>
                  <th>編輯</th>
            </tr>
        </thead>

        <tbody>
          <tr v-for="(item,i) in items" :key="item.id">
            <td>
                <!-- 未編輯時 -->
                <span v-show="!item.edit">{{ item.list }}</span>
                <!-- 編輯時 -->
                <v-text-field v-show="item.edit" v-model="item.listEdit"
                :rules="[rules.required,rules.length]"
                ref="editItemInput"
                @keydown.enter="onEditInputSubmit(item.id,i)"
                autofocus
                >
                </v-text-field>
            </td>
            <td>
              <template v-if="!item.edit">
                <v-btn icon="mdi-pencil" variant="text" color="green" @click="editItem(item.id)"></v-btn>
                <v-btn icon="mdi-delete" variant="text" color="red" @click="delItem(item.id)"></v-btn>
              </template>
              <template v-else>
                <v-btn icon="mdi-check" variant="text" color="green" @click="onEditInputSubmit(item.id)"></v-btn>
                <v-btn icon="mdi-undo" variant="text" color="red" @click="cancelEditItem(item.id)"></v-btn>
              </template>
            </td>
          </tr>
          <tr v-if="items.length === 0" >
            <td colspan="2">沒有清單</td>
          </tr>
        </tbody>
        </v-table>
      </v-col>

      <v-col cols="12">
          <h1 class="text-center">已完成事項</h1>
      </v-col>

      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in finishedItems" :key="item.id">
              <td>{{item.list}}</td>
              <td>
                <v-btn  icon="mdi-delete" variant="text" color="red" @click="delFinishedItem(item.id)"></v-btn>
              </td>
            </tr>
            <tr v-if="finishedItems.length===0">
              <td colspan="2">沒有已完成清單</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </div>
</v-container>
</template>

<script setup>
// import { ref } from 'vue'
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { items, finishedItems, newItem, newItemInput, editItemInput } = storeToRefs(list)
const { addItem, confirmEditItem, editItem, delItem, cancelEditItem, delFinishedItem } = list

const onInputSubmit = async () => {
  // validate() reset() 是 v-text-field 元件裡面的Function
  const validate = await newItemInput.value.validate()
  console.log(validate)
  // 如果驗證通過，會有一個空陣列
  if (validate.length > 0) return
  addItem(newItem.value)
  newItemInput.value.reset()
}

const onEditInputSubmit = async (id, i) => {
  const validate = await editItemInput.value[i].validate()
  if (validate.length > 0) return
  confirmEditItem(id)
}

const rules = {
  required: (value) => {
    return !!value || '欄位必填'
  },
  length: (value) => {
    return value.length >= 3 || '必須是三個字以上'
  }
}
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
    top: 15%;
    width: 90%;
    height: 80%;
    overflow-y: scroll;
  background-color: rgba(0, 0, 0,0.5);
  border-radius: 1rem;
    padding:1rem 3rem;
  }

  .text{
    /* color: aqua !important; */
    text-shadow: 0 0 25px aqua;
  }

  @media(min-width:768px) {
  .box{
  width: 80%;
  }
    }

@media(min-width:992px) {
  .box{
  width: 70%;
    }
  }
  </style>
