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

    <section class="h-56 bg-blue-400 relative flex flex-col justify-center items-center">
        <img src="@/assets/safe.png" alt="" class="w-28">
        <div class="absolute bottom-4 text-center text-xs tracking-wider">
            完善账户信息，更安全
        </div>
    </section>

    <section class="relative   mx-auto -mt-3 w-[90%]   ">
            <div class=" bg-white  text-[#383b43] px-5 rounded-md py-5 ">

                <div @click="goSection(0)" class="border-b border-solid border-[#ece7e7] flex justify-between w-full items-center  py-3">
                    <div class="felx-1">
                        <div class="text-sm">完善个人资料</div>
                        <div class="text-[#999] mt-1 text-xs">资料更完整，我们的服务更加周到</div>
                    </div>
                    <div class="flex items-center text-[#999] text-xs space-x-2">
                        <span>去完善 </span>
                        <van-icon name="arrow" size="10" />
                    </div>
                </div>

                <div @click="goSection(1)" class="border-b border-solid border-[#ece7e7] flex justify-between w-full items-center  py-3">
                    <div class="felx-1">
                        <div class="text-sm">卡片管理</div>
                        <div class="text-[#999] mt-1 text-xs">如需提现，请绑定银行卡或虚拟币地址</div>
                    </div>
                    <div class="flex items-center text-[#999] text-xs">
                        <van-icon name="arrow" size="10" />
                    </div>
                </div>

                <div @click="goSection(2)" class="border-b border-solid border-[#ece7e7] flex justify-between w-full items-center  py-3">
                    <div class="felx-1">
                        <div class="text-sm">登录密码管理</div>
                        <div class="text-[#999] mt-1 text-xs">定期修改登录密码，有利账户安全</div>
                    </div>
                    <div class="flex items-center text-[#999] text-xs">
                        <van-icon name="arrow" size="10" />
                    </div>
                </div>

                <div @click="goSection(3)" class="border-b border-solid border-[#ece7e7] flex justify-between w-full items-center  py-3">
                    <div class="felx-1">
                        <div class="text-sm">取款密码管理</div>
                        <div class="text-[#999] mt-1 text-xs">定期修改登录密码，有利账户安全</div>
                    </div>
                    <div class="flex items-center text-[#999] text-xs">
                        <van-icon name="arrow" size="10" />
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


const onClickLeft = () => {
    router.push('/mine')
}
 
 const goSection = (number) => {
    switch (number) {
        case 0:
            router.push('/userInfo')
            break;
        case 1:
             router.push('/wallet')
            break;
        case 2:
             router.push({name:'ChangePass',query:{url:1}})
            break;
        case 3:
               router.push({name:'ChangePass',query:{url:2}})
            break;
    
        default:
            break;
    }
 }

  </script>
