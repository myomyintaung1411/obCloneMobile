<template>
    <section class="w-full h-full relative">
     <van-nav-bar
      :border="false"
      title="福利中心"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
    <section class=" px-4 w-full ">

      <section class=" relative h-[90vh] rounded bg-white overflow-y-auto px-3 text-[#333] ">
        <div class="py-2  w-full flex items-center justify-between text-[#333] text-sm">
            <span>  红包记录  </span>
            <div class="px-3 h-7 leading-7 rounded text-xs text-center text-white tracking-wide actvie-background-btn">前往领取</div>
        </div>
        <div class="py-2 w-full flex justify-between items-center px-3 border-b  border-[#ccc]">
            <div class="text-xs w-[49%] flex flex-col text-center items-center ">
                <span> 剩余领取次数</span>
                <span class="text-[#597ef7] ">￥0</span>
            </div>
            <div class="w-[1px] h-[30px] bg-[#ccc]"></div>
            <div class="text-xs w-[49%] flex flex-col text-center items-center ">
                <span>已领取次数</span>
                <span class="text-[#597ef7] ">￥0</span>
            </div>
        </div>
        
        <div>
            <van-empty image="search" description="空空如也" />
        </div>

      </section>
    </section>
    </section>
</template>

<script setup>
 import {  ref,computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
 const active = ref(0);

const onClickLeft = () => {
    router.push('/mine')
}
 
  </script>
