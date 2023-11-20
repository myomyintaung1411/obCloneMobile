<template>
    <section class="w-full h-full relative">
        <div class=" rounded-br-3xl rounded-bl-3xl h-64 bg__">
            <div class="  sticky  text-center h-10 pt-3" style="line-height:40px">
                <span class="font-bold text-base tracking-wide">我的钱包</span>
                <div @click="onClickLeft" class="bg-black absolute top-[5px] mt-3 left-4 bg-opacity-70 rounded-full h-7 w-7 flex items-center justify-center">
                    <van-icon name="arrow-left" size="12" />
                </div>
            </div>
            <div class="px-10 pt-10 font-medium text-lg">
                总资产（元）
            </div>
            <div class="pt-5 px-10 flex font-bold items-center space-x-2">
                <span class=" text-base">￥</span>
                <span class="font-bold text-3xl">0</span>
                <img class="w-5" src="@/assets/Money/reload_white.png" alt="">
            </div>
        </div>
        <section class="relative   mx-auto -mt-16 w-[90%]    ">
            <div class="h-12 bg-[#f2f4fc] flex items-center text-[#383b43] px-5 rounded-t-2xl ">
                <div class="h-6 bg-[#383b43] w-[2px] mr-4"></div>
                <span class="text-base">中心钱包（元）</span>
            </div>
            <div class="bg-white flex items-center justify-around py-5 w-full text-[#383b43]">
               
                <div @click="clickTab(0)" class="w-1/4 text-center text-sm">
                 <img src="@/assets/Money/1.png" alt="" class="mx-auto w-[70%]">
                 <span>存款</span>
                </div>

                <div @click="clickTab(1)" class="w-1/4 text-center text-sm">
                 <img src="@/assets/Money/2.png" alt="" class="mx-auto w-[70%]">
                 <span>转账</span>
                </div>

                <div @click="clickTab(2)" class="w-1/4 text-center text-sm">
                 <img src="@/assets/Money/3.png" alt="" class="mx-auto w-[70%]">
                 <span>取款</span>
                </div>

                <div @click="clickTab(3)" class="w-1/4 text-center text-sm">
                 <img src="@/assets/Money/4.png" alt="" class="mx-auto w-[70%]">
                 <span>卡片管理</span>
                </div>
            </div>
            <div class="gaming w-full p-3 mx-auto bg-[#fcfcff] text-[#383b43] flex items-center">
                <div class="text-base mr-3">场馆余额</div>
                <div class="h-6 text-center text-xs rounded-md px-4 leading-6 actvie-background-btn ">一键回收</div>
            </div>
            
            <div class="flex flex-wrap w-full mx-auto text-[#383b43]">
                <div v-for="n in 5" :key="n" class="w-1/4 text-center py-2 flex flex-col items-center">
                 <div class="text-sm">FB体育</div>
                 <div class="flex items-center space-x-1 pt-1">
                    <span class="text-xs text-[#cbced8]">0.00</span>
                    <img class="w-3" src="@/assets/Money/reload_blue.png" alt="">
                 </div>
                </div>
                <div class="w-1/4 text-center py-2 flex flex-col items-center">
                 <div class="text-sm">天豪棋牌</div>
                 <div class="flex items-center space-x-1 pt-1">
                    <span class="text-xs text-[#cbced8]">0.00</span>
                    <img class="w-3" src="@/assets/Money/reload_blue.png" alt="">
                 </div>
                </div>
                <div class="w-1/4 text-center py-2 flex flex-col items-center">
                 <div class="text-sm">天成彩票</div>
                 <div class="flex items-center space-x-1 pt-1">
                    <span class="text-xs text-[#cbced8]">0.00</span>
                    <img class="w-3" src="@/assets/Money/reload_blue.png" alt="">
                 </div>
                </div>
                <div class="w-1/4 text-center py-2 flex flex-col items-center">
                 <div class="text-sm">AG亚游</div>
                 <div class="flex items-center space-x-1 pt-1">
                    <span class="text-xs text-[#cbced8]">0.00</span>
                    <img class="w-3" src="@/assets/Money/reload_blue.png" alt="">
                 </div>
                </div>
            </div>
        </section>
    </section>
</template>


<script setup>
 import {  ref,computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();

const clickTab = (number) => {
    switch (number) {
        case 0:
            router.push('/recharge')
            break;
        case 1:
             router.push('/transfer')
            break;
        case 2:
             router.push('/withdraw')
            break;
        case 3:
             router.push('/wallet')
            break;
    
        default:
            break;
    }
}

const onClickLeft = () => {
    router.push('/mine')
}
  </script>


<style scoped>
 .bg__{
    background: rgb(130,102,222);
background: linear-gradient(90deg, rgba(130,102,222,1) 0%, rgba(217,114,159,1) 35%, rgba(240,98,110,1) 100%);

 }
</style>