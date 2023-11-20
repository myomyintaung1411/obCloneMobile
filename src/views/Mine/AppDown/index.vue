<template>
  <section class="w-full h-full relative">
    <van-nav-bar
      :border="false"
      title="合营计划"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd; font-weight: 500 !important"
    />
    <section class="w-full relative bg-[#f4f6ff]">
        <div class="text-center py-5 font-bold text-2xl text-[rgb(6,32,220)]">
            els包网.欧宝演示站app下载
        </div>
      <div class="px-7 w-full pt-10">
        <img
          src="@/assets/down_txt.png"
          alt=""
          class="w-full h-22"
        />
      </div>
      <div class="px-7 w-full pt-10">
        <img
          src="@/assets/sports_and4.png"
          alt=""
          class="w-full h-96 object-cover"
        />
      </div>
      <div class="px-3 w-full">
        <img src="@/assets/sport1_ico.png" alt="" class="h-20 w-full">
      </div>
    </section>
    <div class="px-6 rounded w-full py-5 z-30 relative bg-white mb-4">
        <p class="text-center text-[#7a7979] text-xs">可扫描下发二维码进行app下载</p>
        <div class="px-5 w-full py-4 bg-slate-100 mt-2">
            <img src="@/assets/ewm2.png" alt="qrcode" class="w-full h-80 p-5 object-cover">
        </div>
          <div class="pt-5">
            <van-button
              block
              color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)"
            >
              立即下载
            </van-button>
            <div class="text-left px-4 pt-5 text-xs text-[#7a7979] tracking-widest">
                需在同一网络环境下下载安装注册，请勿切换网络； 若无法正常安装，请使用手机自带浏览器打开本页面
            </div>
          </div>
    </div>

  </section>
</template>


<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const onClickLeft = () => {
  router.push("/mine");
};
</script>
