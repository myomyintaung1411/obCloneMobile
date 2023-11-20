<template>
  <section class="w-full h-full relative">
       <van-nav-bar
      :border="false"
      :title="activeSection === 1 ? '修改登录密码' : '设置提现密码'"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />

    <section  class="w-full relative px-5 bg-white pt-3 pb-7">
        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">原密码</div>
            <div class="h-10 w-full ">
                <input type="text" placeholder="请输入当前密码" value="" class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>

        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">新密码</div>
            <div class="h-10 w-full ">
                <input type="text" placeholder="请输入新密码" value="" class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>

        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">确认新密码</div>
            <div class="h-10 w-full ">
                <input type="text" placeholder="请再次输入密码" value="" class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>

        <div class="pt-5">
             <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              确认修改
            </van-button>
        </div>
        
    </section>

    </section>
</template>


<script setup>
 import {  ref,computed,onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { useStore } from "vuex";
const router = useRouter();
const route = useRoute();
const frontImage = ref([]);//

const activeSection = ref(1)

const onOversize = (file) => {
  console.log(file);
  showToast("文件大小不能超过 3MB");
};

const onClickLeft = () => {
    router.push('/center')
}
 
onMounted(()=> {
    if (route?.query !== undefined && route.query?.url !== undefined) {
   activeSection.value = Number(route?.query?.url);
 } 
})

  </script>
