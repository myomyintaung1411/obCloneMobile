<template>
    <section class="w-full h-full relative">
     <van-nav-bar
      :border="false"
      title="消息中心"
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

        <van-tab title="公告" animated>
          <section class="py-2 px-3  w-full relative mt-3 bg-white">
            <div class="border-b pb-2 border-[#e9e7e7] pt-3">
                <p class="text-xs text-[#333] tracking-wider leading-5">★★★尊敬的客户：我司亚博体育场馆比分系统于2020年7月7日（星期二）11:00-13:35进行滚球比分系统维护，维护期间将无法查看比分，可以正常游戏，给您带来不便敬请谅解，谢谢。</p>
            </div>
            <div class="border-b pb-2 border-[#e9e7e7] pt-3">
                <p class="text-xs text-[#333] tracking-wider leading-5">尊敬的客户：第107期保险投注【7月5日 勒沃库森 VS 拜仁慕尼黑】彩金已经发放完毕，活动详情请至优惠活动页面了解。</p>
            </div>
          </section>
        </van-tab>
        <van-tab title="站内信" animated>
          <section class="py-2 px-3  w-full relative bg-white mt-3">
            <div class="border-b pb-2 border-[#e9e7e7] pt-3">
                <p class="text-xs text-[#333] tracking-wider leading-5">遵守</p>
                <p class="text-xs text-[#333] tracking-wider leading-5">请自觉遵守本站秩序</p>
                <p class="text-xs text-[#333] tracking-wider leading-5">2021-10-12 15:09:06</p>
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
    router.push('/mine')
}
 
  </script>
