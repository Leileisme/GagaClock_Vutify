<template>
<v-container class="vContainer">
  <div class="box">
    <v-row class="text-center">
        <v-col cols="12" >
          <h1 class="text">{{currentText}}</h1>
          <h1 class="time">{{currentTime}}</h1>
      </v-col>
      <v-col style="height: 100px;">
        <!-- 這邊的鈴聲有bug? 開始的時候會響、按下一次也會響 -->
        <v-Btn class="btn" variant="text" icon="mdi-play" :disabled = "status === STATUS.COUNTING || (currentItem.length === 0 &&items.length === 0)" @click="startTimer"></v-Btn>
        <v-Btn class="btn" variant="text" icon="mdi-pause" :disabled = "status !== STATUS.COUNTING" @click="pauseTimer"></v-Btn>
        <v-Btn class="btn" variant="text" icon="mdi-skip-next" :disabled = "currentItem.length === 0" @click="finishTimer()"></v-Btn>
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
import { useWebNotification } from '@vueuse/core'

const list = useListStore()
const { currentItem, items, timeLeft } = storeToRefs(list)
const { setCurrentItem, countDown, setFinishedItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

//  0  = 停止
//  1 = 倒數中
//  2 = 暫停
//  如果直接是用註解說明，然後把 STATUS=0 ，100行就不知道什麼狀態
//  為了提升可讀性，把變成一個物件定義
// 特殊狀態，用大寫
const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}

// 狀態 (一般變數用小寫)
const status = ref(STATUS.STOP)

let timer = 0

const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  status.value = STATUS.COUNTING

  timer = setInterval(() => {
    countDown()
    if (timeLeft.value === 0) {
      finishTimer()
    }
  }, 1000)
}

const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}

// 讓 時間到 或是 跳過 時可使用
const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP

  //  Audio("URL")
  // audio.play()  開始播放音訊
  // audio.pause()  暫停播放音訊
  // audio.volume = 0.5  設定音量為 50%

  if (timeLeft.value === 0) {
    const audio = new Audio()
    audio.src = selectedAlarmFile.value
    audio.play()
  }

  if (notify.value) {
    const { show, isSupported } = useWebNotification({
      title: '事項完成',
      body: currentItem.value,
      icon: new URL('@/assets/tomato.png', import.meta.url).href
    })
    if (isSupported) {
      show()
    }
  }
  setFinishedItem()

  if (items.value.length > 0) {
    startTimer()
  }
}

// 這邊也可以在list寫成 getters
const currentText = computed(() => {
  // currentItem.value 是因為上面用 storeToRefs(list) 解構，要加 value
  if (currentItem.value.length > 0) {
    return currentItem.value
  } else if (items.value.length > 0) {
    return '點擊開始'
  } else {
    return '沒有事項'
  }
})

// 幾秒寫成幾分
const currentTime = computed(() => {
  const mins = Math.floor(timeLeft.value / 60).toString().padStart(2, '0')
  const secs = (timeLeft.value % 60).toString().padStart(2, '0')
  return mins + ':' + secs
})

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
  top: 50%;
  transform: translate(0,-50%);
  width: 85%;
  background-color: rgba(0, 0, 0,0.8);
  border-radius: 1rem;
  /* border: 1px red solid; */
  padding: 3rem 0;
}
.text{
  font-size: 3rem;
  /* color: aqua !important; */
  text-shadow: 0 0 25px aqua;
}
.time{
font-size: 8rem;
color: aqua !important;
text-shadow: 0px 0px  20px aqua ;

}

.btn{
  font-size: 3rem;
  margin: 0 2rem;
  text-shadow: 0 0 25px aqua;
}

@media(min-width:768px) {
  .box{
  width: 67%;
  }

  .text{
  font-size: 3rem;
  }
  .time{
  font-size: 10rem;
  }

    }

@media(min-width:992px) {
  .box{
  width: 60%;
    }

  .text{
  font-size: 3rem;
  }
  .time{
  font-size: 13rem;
  }

.btn{
  font-size: 3rem;
  margin: 0 2rem;
}
  }

  @media(min-width:1200px) {
  .box{
  width: 47%;
    }
  .time{
  font-size: 13rem;
  }
  }
</style>
