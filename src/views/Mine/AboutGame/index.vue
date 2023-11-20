<template>
    <div class="w-full h-full relative ">
        <div class="h-48 bg-blue-500 rounded-b-[66px] relative">
            <div class="pt-5 pl-5">
             <div @click="onClickLeft" class="bg-black  bg-opacity-70 rounded-full h-7 w-7 flex items-center justify-center">
                    <van-icon name="arrow-left" size="12" />
             </div>
            </div>

            <div class="w-full space-x-4 text-center flex items-center justify-center">
                <img class="w-12 h-12" src="@/assets/service.png" alt="serv">
            <div class="flex flex-col items-center justify-center space-y-1">
                <span class="text-sm text-white font-bold tracking-wide">Hi,尊敬的会员用户</span>
                <span class="text-[9px] text-white  tracking-wide">早上好，欢迎来到帮助中心</span>
            </div>
            </div>

            <div class=" px-6 py-6">
                <div class="h-[1px] w-full bg-white"></div>
            </div>
         <div class="py-3 text-center text-xs text-white"> 若相关问题仍未解决，可咨询在线客服</div>
        </div>
        <div class=" pt-4 px-3 relative ">
            <div class="bg-white px-3  rounded shadow">
                <div v-for="game in gameSec" :key="game.id" :class="game.id !== 7 ? 'border-b border-[#eeeded]' : ''" @click="gopara(game.id)" class="flex items-center justify-between py-3  text-[#4e6693]">
                    <div class="flex items-center text-xs space-x-4">
                        <img src="@/assets/quest.png" alt="quest" class="w-6">
                        <div>{{game.title}}</div>
                    </div>
                    <div class="text-[#ccc]">
                        <van-icon name="arrow" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const gameSec = ref([
    {id:1,title:'关于我们'},
    {id:2,title:'常见问题'},
    {id:3,title:'隐私政策'},
    {id:4,title:'免责说明'},
    {id:5,title:'免责说明'},
    {id:6,title:'代理加盟'},
    {id:7,title:'博彩责任'},
])

const onClickLeft = () => {
  router.push("/mine");
};
const gopara = (id) => {
  router.push({name:'Paragraph',query:{id:id}});
};
</script>
