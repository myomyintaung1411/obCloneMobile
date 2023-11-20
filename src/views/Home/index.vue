<template>
  <section class="relative h-full w-full b-[#edf1ff]">
    <div class="relative w-full h-[60]">
        <van-swipe :autoplay="3000" lazy-render class="h-64 relative w-full ">
          <van-swipe-item v-for="n in 3" :key="n">
            <img  src="@/assets/carousal.jpg" alt="carousal" class="w-full h-full object-contain">
          </van-swipe-item>
          <template #indicator="{ active, total }">
            <div class="custom-indicator absolute rounded-full p-1 left-5 bottom-2 text-sm bg-black bg-opacity-20">{{ active + 1 }}/{{ total }}</div>
          </template>
        </van-swipe>
       <div class="absolute left-0 top-0 w-full h-[60px] flex items-center justify-end z-10 px-7 text-black ">
        <!-- <img src="http://m1.els.best/static/image/home_muen.png" alt="left_icon" class="w-[19px] h-[19px]"> -->
        <div class="flex items-center text-xs font-sans">
            <img src="@/assets/Home/service.png" alt="service" class=" w-8 h-8">
            <span>客服</span>
        </div>
       </div>
    </div>
    <!--  -->
    <section class="bg-[rgb(244,246,255)] pt-2">
        <div @click="goNotice" class="w-[90%] mx-auto flex items-center justify-between ">
            <img src="@/assets/Home/sound.png" alt="sound" class="w-5">
            <div class="flex-1">
                <van-notice-bar  background="#f4f6ff" color="#5d75a2" scrollable text="★★★尊敬的客户：我司亚博体育场馆比分系统于2020年7月7日（星期二）11:00-13:35进行滚球比分系统维护，维护期间将无法查看比分，可以正常游戏，给您带来不便敬请谅解，谢谢。" />
            </div>
            <img src="@/assets/Home/noticeBtn.png" alt="button_more" class=" w-[68px]">
        </div>
    </section>
    <!--  -->
    <section class="xiding pt-2 bg-[#f4f6ff] sticky top-0">
        <div class="w-[90%] mx-auto flex items-center justify-between text-[#5d75a2]">
            <div class="flex-1">
                <div class="text-xs">未登录</div>
                <div class=" mt-1 text-base font-bold">登录后查看</div>
            </div>
            <div class="flex items-center justify-between">
                <div @click="clickRecord(0)" class=" w-14 text-center text-xs">
                    <img src="@/assets/Home/1.png" alt="card" class=" w-[60%] block mx-auto">
                    <span> 存款</span>
                </div>
                <div @click="clickRecord(1)" class=" w-14 text-center text-xs">
                    <img src="@/assets/Home/2.png" alt="card" class=" w-[60%] block mx-auto">
                    <span>转账</span>
                </div>
                <div @click="clickRecord(2)" class=" w-14 text-center text-xs">
                    <img src="@/assets/Home/3.png" alt="card" class=" w-[60%] block mx-auto">
                    <span> 取款</span>
                </div>
                <div @click="clickRecord(3)" class=" w-14 text-center text-xs">
                    <img src="@/assets/Home/4.png" alt="card" class=" w-[60%] block mx-auto">
                    <span> VIP</span>
                </div>
            </div>
        </div>
    </section>
    <!-- gamebox -->
    <section class="bg-[#edf1ff] p-[10px] text-[#5d75a2] h-[518px] flex justify-between w-full">
        <div class="left_side w-9 h-[400px] bg-[#eff3ff] rounded-[20px] border border-solid border-[#fff]">
            <div @click="clickTab(0)" class="ls text-center rounded-[20px] py-[7px] " :class="active_btn === 0 ? 'text-white bg-[#557af2] animate-fadefromTop' : ''">
                <img src="@/assets/Home/tab1.png" alt="__gameone" class="w-[30px] block mx-auto">
                <span class="block text-xs">真人</span>
            </div>
            <div @click="clickTab(1)" class="ls text-center rounded-[20px] py-[7px]" :class="active_btn === 1 ? 'text-white bg-[#557af2] animate-fadefromTop' : ''">
                <img src="@/assets/Home/tab2.png" alt="__gameone" class="w-[30px] block mx-auto">
                <span class="block text-xs">体育</span>
            </div>
            <div @click="clickTab(2)" class="ls text-center rounded-[20px] py-[7px]" :class="active_btn === 2 ? 'text-white bg-[#557af2] animate-fadefromTop' : ''">
                <img src="@/assets/Home/tab3.png" alt="__gameone" class="w-[30px] block mx-auto">
                <span class="block text-xs">电竞</span>
            </div>
            <div @click="clickTab(3)" class="ls text-center rounded-[20px] py-[7px]" :class="active_btn === 3 ? 'text-white bg-[#557af2] animate-fadefromTop' : ''">
                <img src="@/assets/Home/tab4.png" alt="__gameone" class="w-[30px] block mx-auto">
                <span class="block text-xs">棋牌</span>
            </div>
            <div @click="clickTab(4)" class="ls text-center rounded-[20px] py-[7px]" :class="active_btn === 4 ? 'text-white bg-[#557af2] animate-fadefromTop' : ''">
                <img src="@/assets/Home/tab5.png" alt="__gameone" class="w-[30px] block mx-auto">
                <span class="block text-xs">电子</span>
            </div>
            <div @click="clickTab(5)" class="ls text-center rounded-[20px] py-[7px] " :class="active_btn === 5 ? 'text-white bg-[#557af2] animate-fadefromTop' : ''">
                <img src="@/assets/Home/tab6.png" alt="__gameone" class="w-[30px] block mx-auto">
                <span class="block text-xs">彩票</span>
            </div>
        </div>
             <section v-if="active_btn === 0" class="right_side flex-1 overflow-y-auto h-[420px] px-3 flex flex-wrap justify-between animate-fadeleft">
                <img src="@/assets/Home/realbet/ag.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/allbet.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/bbin.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/bbviode.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/bg.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/dg.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/obgzr.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/qg.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/videogame.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/realbet/wm.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
            </section>
             <section v-if="active_btn === 1" class="right_side flex-1 overflow-y-auto h-[420px] px-3 flex flex-wrap justify-between animate-fadeleft">
                <img src="@/assets/Home/sport/bbin.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/sport/cmd.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/sport/hbb.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/sport/oap.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/sport/obgty.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/sport/saba.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/sport/sbtest.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/sport/xsbo.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
            </section>
             <section v-if="active_btn === 2" class="right_side flex-1 overflow-y-auto h-[420px] px-3 flex flex-wrap justify-between animate-fadeleft">
                <img src="@/assets/Home/game/bbinqp.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/game/datqp.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/game/fgqp.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/game/hlgame.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/game/kx.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/game/kx.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/game/leg.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/game/ly.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
            </section>
             <section v-if="active_btn === 3" class="right_side flex-1 overflow-y-auto h-[420px] px-3 flex flex-wrap justify-between animate-fadeleft">


                <img src="@/assets/Home/concise/ae.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/concise/bbin.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/concise/bg.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/concise/bng.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/concise/cg.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/concise/dt.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/concise/fgdz.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/concise/game.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
            </section>
             <section v-if="active_btn === 4" class="right_side flex-1 overflow-y-auto h-[420px] px-3 flex flex-wrap justify-between animate-fadeleft">
               <img src="@/assets/Home/gaming/avia.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/gaming/ia.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/gaming/ld.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/gaming/obgdj.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
            </section>
             <section v-if="active_btn === 5" class="right_side flex-1 overflow-y-auto h-[420px] px-3 flex flex-wrap justify-between animate-fadeleft">
                <img src="@/assets/Home/lottery/vrbet.png" alt="image_one" class="w-full mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/lottery/bbin.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/lottery/dl.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/lottery/GFC.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/lottery/LOTTERY.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/lottery/imone.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/lottery/jz.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/lottery/LOTTO.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
                <img src="@/assets/Home/lottery/obgcp.png" alt="image_one" class="w-[48%] mt-[10px] rounded-[10px]">
            </section>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const active_btn = ref(0)

const clickTab = (number) => {
    active_btn.value = number
}
const goNotice = (number) => {
    router.push('/message')
}
const clickRecord = (number) => {
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
        break;
    default:
        break;
   }
}
</script>
