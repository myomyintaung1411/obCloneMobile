<template>
    <section class="w-full h-full relative">
       <van-nav-bar
      :border="false"
      title="个人资料"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
    <section class=" relative bg-white p-5">
        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">个人头像</div>
            <van-uploader 
         accept="image/*"
        :max-count="1"
        :max-size="3000 * 1024"
        @oversize="onOversize"
         v-model="frontImage"
          :after-read="frontafterRead"
        > 
        <van-image
          round
          width="5rem"
          height="5rem"
          :src="avatar"
        />
         </van-uploader>
         <div class="absolute bottom-6 left-12 ">
            <img class="w-7" src="@/assets/img_edit.png" alt="">
         </div>
        </div>
        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">个人头像</div>
            <div class="h-10 w-full ">
                <input type="text" disabled value="tiktok13" class="bg-white text-xs w-full h-full px-3 text-[#c8c9cc]">
            </div>
        </div>
        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">真实姓名</div>
            <div class="h-10 w-full ">
                <input type="text" disabled value="zeeolne" class="bg-white text-xs w-full h-full px-3 text-[#c8c9cc]">
            </div>
        </div>

        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">真实姓名</div>
            <div class="h-10 w-full text-[#c8c9cc] px-3 text-xs " style="line-height:40px">
                请选择出入日期
            </div>
        </div>
        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">手机号码</div>
            <div class="h-10 w-full ">
                <input type="text" placeholder="绑定手机号，保障账号安全" value="" class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>
        <div class="relative text-black space-y-1 border-b py-2 border-[rgb(242,242,242)]">
            <div class="text-base">电子邮箱</div>
            <div class="h-10 w-full ">
                <input type="text" placeholder="绑定邮箱保护账号安全" value="" class="bg-white placeholder:text-xs text-sm w-full h-full px-3 text-[#000]">
            </div>
        </div>


            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              确认修改
            </van-button>

    </section>
    </section>
</template>


<script setup>
import avatar from "@/assets/Mine/avatar.png"
 import {  ref,computed } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { useStore } from "vuex";
const router = useRouter();
const route = useRoute();
const frontImage = ref([]);//

const onOversize = (file) => {
  console.log(file);
  showToast("文件大小不能超过 3MB");
};

const onClickLeft = () => {
    router.push('/mine')
}
 
 async function frontafterRead(file, detail) {

 }

  </script>
