<template>
  <section class="w-full h-full relative bg-[rgb(241,241,241)]">
    <van-nav-bar
      title="优惠活动"
      
      :clickable="false"
      style="background: #edf2fd"
    />
    <div class="w-full relative z-20">
      <van-tabs v-model:active="active" sticky   color="#597ef7"

        title-active-color="#323233"
        title-inactive-color="#646566">
        <van-tab v-for="data in tabData" :title="data.title" :key="data.id" animated>
          <section class="pb-20 sm:h-[800px] sm:overflow-y-auto">
            <div class="mt-5 rounded-xl shadow-lg ">
                <img src="@/assets/carousal.jpg" alt="image__" class="w-full h-[256px]">
                <div class="text-xs font-bold text-[#333] h-[40px] text-ellipsis whitespace-nowrap px-5 overflow-hidden" style="line-height:40px">
                    VIP星计划 全新体验
                </div>
            </div>
            <div class="mt-5 rounded-xl shadow-lg ">
                <img src="@/assets/carousal.jpg" alt="image__" class="w-full h-[256px]">
                <div class="text-xs font-bold text-[#333] h-[40px] text-ellipsis whitespace-nowrap px-5 overflow-hidden" style="line-height:40px">
                    视讯专享 连赢有豪礼
                </div>
            </div>
            <div class="mt-5 rounded-xl shadow-lg ">
                <img src="@/assets/carousal.jpg" alt="image__" class="w-full h-[256px]">
                <div class="text-xs font-bold text-[#333] h-[40px] text-ellipsis whitespace-nowrap px-5 overflow-hidden" style="line-height:40px">
                    TG视讯 激情天天乐
                </div>
            </div>
          </section>
        </van-tab>
      </van-tabs>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

 const active = ref(0);
  const tabData = ref([
    {
        id:1,
        title:'全部'
    },
    {
        id:1,
        title:'现金回馈'
    },
    {
        id:1,
        title:'棋牌活动'
    },
    {
        id:1,
        title:'电子活动'
    },
    {
        id:1,
        title:'彩票活动'
    }
  ])
</script>