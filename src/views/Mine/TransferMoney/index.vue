<template>
    <div class="w-full h-full relative">
      <van-nav-bar
      :border="false"
      title="转账"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
    <div class="bg-white pt-2">
        <div class="px-5 font-bold flex items-center text-base text-[#333] space-x-2 py-2">
            <span>钱包金额</span>
            <img src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png" alt="reload" class="w-4">
        </div>
        <div class="py-5 border-y border-[#f4f6ff]">
            <div class="flex flex-col justify-center items-center text-[#333]">
                <span class="flex items-center space-x-2">
                    <img src="http://m1.els.best/static/image/qianbao123.png" alt="" class="w-5">
                    <span>中心钱包</span>
                </span>
                <span class="text-[#597ef7] space-x-1">
                    <span class=" text-[9px]">￥</span>
                    <span class="text-base">0.00</span>
                </span>
            </div>
        </div>
        <div class="py-3  items-center  text-[#333] px-5 flex flex-wrap">
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
                <span>FB体育</span>
                <span class="flex items-center space-x-2">
                    <span class="text-xs text-[#ccc]">0.00</span>
                    <img src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png" alt="" class="w-3">
                </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
                <span>天豪棋牌</span>
                <span class="flex items-center space-x-2">
                    <span class="text-xs text-[#ccc]">0.00</span>
                    <img src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png" alt="" class="w-3">
                </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
                <span>天成彩票</span>
                <span class="flex items-center space-x-2">
                    <span class="text-xs text-[#ccc]">0.00</span>
                    <img src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png" alt="" class="w-3">
                </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
                <span>AG亚游</span>
                <span class="flex items-center space-x-2">
                    <span class="text-xs text-[#ccc]">0.00</span>
                    <img src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png" alt="" class="w-3">
                </span>
            </div>
        </div>
        <div class="mt-3  py-2">
            <div class="flex items-center justify-center text-[#333] space-x-7 bg-[rgb(241,241,241)] py-3 ">
                <div class="flex items-center space-x-1">
                    <span class="font-bold text-base">平台钱包 </span>
                    <van-icon name="arrow" />
                </div>
                <div>
                    <img src="http://m1.els.best/static/image/iconTransfer.png" alt="" class="w-8">
                </div>
                <div class="flex items-center space-x-1">
                    <span class="font-bold text-base">FB体育 </span>
                    <van-icon name="arrow" />
                </div>
            </div>
           <div class="relative text-black space-y-1  pt-2 mb-2 bg-white px-4">
            <div class="text-[10px] tracking-wider font-thin">场馆内钱包不支持互转</div>
            <div class="h-10 w-full relative flex items-center  ">
                <span class="text-xs pl-3">￥</span>
                <input type="tel" placeholder="请输入转账金额" value="" maxlength="10" class="bg-white text-lg  placeholder:text-base w-full h-full px-3 text-[#000]">
                <span class=" text-xs px-2 whitespace-nowrap text-white rounded text-center py-1 bg-blue-500"> 最大金额</span>
            </div>
        </div>
        </div>
         <div class="relative text-black  pt-2  px-4 bg-[#f4f6ff]">
            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              立即存款
            </van-button>
            <div class="py-3 text-center space-x-1 text-xs text-[#a19a9a]">
                <span>存款遇到问题？联系 </span>
                <span class="text-blue-500">人工客服</span>
                <span> 解决</span>
            </div>
        </div>
    </div>
    </div>
</template>


<script setup>
 import {  ref,computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const onClickLeft = () => {
    router.push('/money')
}
 


  </script>
