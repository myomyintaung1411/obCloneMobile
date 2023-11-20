<template>
    <section class="w-full h-full relative">
     <van-nav-bar
      :border="false"
      title="交易记录"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
    <section class="w-full relative">
        <div class="py-3 w-full px-3">
            <div class="w-full flex items-center justify-between px-4">
                <div @click="gameDialog = true" class="w-[30%] bg-[#f7f8fc] h-10 rounded-full text-[#000] leading-10 text-center">
                {{gametitle}}
                </div>
                <div @click="dateDialog = true" class="w-[30%] bg-[#f7f8fc] h-10 rounded-full text-[#000] leading-10 text-center">
                {{datetitle}}
                </div>
                <div @click="recordDialog= true" class="w-[30%] bg-[#f7f8fc] h-10 rounded-full text-[#000] leading-10 text-center">
                {{recordtitle}}
                </div>
            </div>
        </div>

        <div class="h-40">
            <van-empty image="search" description="空空如也" />

        </div>
    </section>
    </section>
     <van-popup v-model:show="gameDialog" position="bottom"  :style="{ height: '30%' }">
      <div class="px-3 py-2 w-full">
        <div class="flex flex-wrap   w-full  ">
            <div v-for="game in typeofGame" :key="game.id" class="w-1/4 h-10 flex items-center justify-center">
             <div @click="clickGame(game)" class="w-[calc(100%_-_8px)] h-9 text-xs rounded  flex items-center justify-center  text-center"
             :class="game.title === gametitle ? 'bg-blue-500 text-white' : 'bg-[#f7f8fc]  text-black'"
             >
                {{game.title}}
             </div>
            </div>
        </div>
      </div>
     </van-popup>
     <van-popup v-model:show="dateDialog" position="bottom"  :style="{ height: '30%' }">
      <div class="px-3 py-2 w-full">
        <div class="flex flex-wrap   w-full  ">
            <div v-for="date in typeofDate" :key="date.id" class="w-1/4 h-10 flex items-center justify-center">
             <div @click="clickDate(date)" class="w-[calc(100%_-_8px)] h-9 text-xs rounded  flex items-center justify-center  text-center"
             :class="date.title === datetitle ? 'bg-blue-500 text-white' : 'bg-[#f7f8fc]  text-black'"
             >
                {{date.title}}
             </div>
            </div>
        </div>
      </div>
     </van-popup>
     <van-popup v-model:show="recordDialog" position="bottom"  :style="{ height: '30%' }">
      <div class="px-3 py-2 w-full">
        <div class="flex flex-wrap   w-full  ">
            <div v-for="rec in typeofrecord" :key="rec.id" class="w-1/4 h-10 flex items-center justify-center">
             <div @click="clickTypeofRec(rec)" class="w-[calc(100%_-_8px)] h-9 text-xs rounded  flex items-center justify-center  text-center"
             :class="rec.title === recordtitle ? 'bg-blue-500 text-white' : 'bg-[#f7f8fc]  text-black'"
             >
                {{rec.title}}
             </div>
            </div>
        </div>
      </div>
     </van-popup>
</template>

<script setup>
 import {  ref,computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const gametitle = ref('全平台')
const gameType = ref(1)
const gameDialog = ref(false)
const typeofGame = ref([
    {
        id:1,
        title:'全平台'
    },
    {
        id:2,
        title:'FB体育'
    },
    {
        id:3,
        title:'天豪棋牌'
    },
    {
        id:4,
        title:'天成彩票'
    },
])
const datetitle = ref('近30日')
const dateType = ref(1)
const dateDialog = ref(false)
const typeofDate = ref([
    {
        id:1,
        title:'今日'
    },
    {
        id:2,
        title:'近7日'
    },
    {
        id:3,
        title:'近15日'
    },
    {
        id:4,
        title:'近30日'
    },
])

const recordtitle = ref('存款')
const recordType = ref(1)
const recordDialog = ref(false)
const typeofrecord = ref([
    {
        id:1,
        title:'存款'
    },
    {
        id:2,
        title:'取款'
    },
    {
        id:3,
        title:'转入'
    },
    {
        id:4,
        title:'转出'
    },
])

const clickGame = (game) => {
  gametitle.value = game.title
  gameDialog.value = false;
}
const clickDate = (date) => {
  datetitle.value = date.title
  dateDialog.value = false;
}
const clickTypeofRec = (rec) => {
  recordtitle.value = rec.title
  recordDialog.value = false;
}

const onClickLeft = () => {
    router.push('/mine')
}
 


  </script>
