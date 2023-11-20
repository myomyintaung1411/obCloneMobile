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
      <div class="px-7 w-full pt-10">
        <img
          src="@/assets/agent_text.png"
          alt=""
          class="w-full h-22"
        />
      </div>
      <div class="px-7 w-full pt-10">
        <img
          src="@/assets/agnet_img.png"
          alt=""
          class="w-full h-96 object-cover"
        />
      </div>
    </section>
    <div class="px-6 rounded w-full z-30 relative">
      <div
        class="w-full px-4 -mt-10 flex items-center justify-between py-2 bg-white text-[#1e1e1e]"
      >
        <div class="flex space-x-4">
          <img
            src="@/assets/service.png"
            alt=""
            class="w-10"
          />
          <div class="h-10 w-[1px] bg-[#e2e2e2]"></div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-xs">合营部</span>
            <span class="text-sm text-[#999]">立即咨询</span>
          </div>
        </div>
        <div
          class="px-5 py-1 text-sm rounded text-center actvie-background-btn text-white"
        >
          咨询
        </div>
      </div>
    </div>
    <div class="px-6 rounded w-full z-30 relative py-5 text-[#999]">
      <div class="rounded w-full px-4 bg-white">
        <div class="py-5">
          <div
            class="flex items-center w-full h-10 bg-none px-2 border-b border-gray-200"
          >
            <span class="whitespace-nowrap">用户名</span>
            <div class="w-full pl-8">
              <input
                disabled
                type="text"
                value="tiktok13"
                class="text-xs bg-transparent h-10 w-full"
              />
            </div>
          </div>
          <div
            class="flex items-center w-full h-10 bg-none px-2 border-b border-gray-200 mt-3"
          >
            <span class="whitespace-nowrap">真实姓名</span>
            <div class="w-full pl-4">
              <input
                disabled
                type="text"
                value="zeeone"
                class="text-xs bg-transparent h-10 w-full"
              />
            </div>
          </div>
          <div
            class="flex items-center w-full h-10 bg-none px-2 border-b border-gray-200 mt-3"
          >
            <span class="whitespace-nowrap">联系方式</span>
            <div class="w-full pl-4">
              <input
                type="text"
                placeholder="请输入您的联系方式"
                class="text-xs bg-transparent h-10 w-full"
              />
            </div>
          </div>
          <div
            class="flex items-center w-full h-10 bg-none px-2 border-b border-gray-200 mt-3"
          >
            <span class="whitespace-nowrap">申请理由</span>
            <div class="w-full pl-4">
              <input
                type="text"
                placeholder="请输入申请说明"
                class="text-xs bg-transparent h-10 w-full"
              />
            </div>
          </div>
          <div class="pt-5">
            <van-button
              block
              color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)"
            >
              加入我们
            </van-button>
          </div>
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
