<template>
    <section class="w-full h-full relative">
     <van-nav-bar
      :border="false"
      title="投注记录"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
    <section class="w-full relative">
      <div class="w-full relative z-20">
      <van-tabs v-model:active="active" sticky   color="#597ef7"

        title-active-color="#323233"
        title-inactive-color="#646566">

        <van-tab title="虚拟币" animated>
          <section class="py-5 px-3 w-full relative">
            <div class="pt-10 px-5 text-center">
                <button @click="add(0)" class="text-xs tracking-wider actvie-background-btn px-8 py-3 rounded">添加USDT地址</button>
            </div>
          </section>
        </van-tab>

        <van-tab title="银行卡" animated>
          <section class="py-5 px-3 w-full relative">
            <div class="pt-10 px-5 text-center">
                <button @click="add(1)" class="text-xs tracking-wider actvie-background-btn px-8 py-3 rounded">添加银行卡</button>
            </div>
          </section>
        </van-tab>
      </van-tabs>
    </div>
    </section>
    </section>
</template>

<script setup>
 import {  ref,computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
 const active = ref(0);

const onClickLeft = () => {
    router.push('/center')
}
 
const add = (number) => {
  switch (number) {
    case 0:
       router.push('/add-usdt')
      break;
    case 1:
      router.push('/add-bank')
      break;
  
    default:
      break;
  }
   
}
 


  </script>
