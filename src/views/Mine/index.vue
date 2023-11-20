<template>
    <section class="w-full  bg-[rgb(237,242,253)] h-full">
        <!-- upper section -->
        <div class="w-full px-[18px]">
            <div class="mine-top h-[60px] text-base text-[#5d75a2] text-center relative" style="line-height:60px">
                我的
                <div class="absolute right-0 flex text-xs items-center top-0 h-14 space-x-1 ">
                    <img class="w-5" src="@/assets/Home/service.png" alt="kefu">
                 <span class="pt-[3px]">客服</span>
                </div>
            </div>
            <div @click="goUserInfo" class="userbg flex items-center justify-between text-[#5d75a2]">
                <div class="w-[60px] relative mr-5">
                    <img src="@/assets/Mine/avatar.png" alt="profile" class="w-[60px] h-[60px] rounded-full">
                </div>
                <div class="flex-1">
                    <div class="text-base font-bold flex items-center">
                        <span>tiktok13</span>
                        <div class="bg-[#4974ff] text-white w-10 h-4 rounded text-xs text-center ml-3 font-medium">VIP1</div>
                    </div>
                    <div class="text-xs mt-2 text-[#a2aec8] tracking-wide">加入els包网.欧宝演示站第0天</div>
                </div>
                <img src="@/assets/Mine/arrow_right.png" alt="arrow-left" class="w-[10px]">
            </div>
            <!--  -->
            <div class="meys flex items-center justify-between px-3 w-[94%] h-9 text-white mt-[10px] mx-auto">
                <div class="flex items-center text-xs">
                    <img src="@/assets/Mine/wallet.png" alt="bankcard__" class="w-[18px]">
                    <span class="px-[6px]">中心钱包</span>
                    <div class="imsg w-[14px] h-[14px] flex items-center justify-center">
                        <img src="@/assets/Mine/yuan.png" alt="yuan" class="w-[6px]">
                    </div>
                </div>
                <div class="meysf text-base font-bold">
                    <span class="text-[8px] font-thin">￥</span>
                    0.00
                </div>
            </div>
            <!-- vips -->
            <div class="vipousf relative flex justify-between mx-auto rounded w-full h-20 pt-[5px] pb-[10px] shadow">
                <div class="flex-1 flex justify-center items-center">
                    <img src="@/assets/Mine/vipnew.png" alt="diamond" class="mr-[10px] w-[38px]">
                    <div>
                        <div class=" font-semibold text-sm text-[#5d75a2]">VIP特权</div>
                        <div class="  text-[8px] text-[#a5a9b3] uppercase mt-[6px]">VIP PRIVILEGE</div>
                    </div>
                </div>
                <div class="shu w-[1px] h-full block bg-[rgba(170,184,209,0.2)]"></div>
                <div class="flex-1 flex justify-center items-center">
                    <img src="@/assets/Mine/giftnew.png" alt="diamond" class="mr-[10px] w-[38px]">
                    <div>
                        <div class=" font-semibold text-sm text-[#5d75a2]">豪礼赠送</div>
                        <div class="  text-[8px] text-[#a5a9b3] uppercase mt-[6px]">SPREE ACTIVITY</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- below section -->
         <section class="below_sec w-full -mt-5 z-40 relative pb-[98px] ">
            <div class="px-3">
                <div class=" h-6"></div>
                <div class="flex justify-between items-center px-4 text-[#5d75a2]">
                    <div @click="UserAmountTab(0)" class="lis">
                       <img src="@/assets/Mine/walletnew.png" alt="1111" class="my-0 mx-auto block w-11"> 
                       <span class="block text-xs text-center ">我的钱包</span>
                    </div>
                    <div @click="UserAmountTab(1)" class="lis">
                       <img src="@/assets/Mine/transactionnew.png" alt="2222" class="my-0 mx-auto block w-11"> 
                       <span class="block text-xs text-center ">交易记录</span>
                    </div>
                    <div @click="UserAmountTab(2)" class="lis">
                       <img src="@/assets/Mine/betnew.png" alt="3333" class="my-0 mx-auto block w-11"> 
                       <span class="block text-xs text-center ">投注记录</span>
                    </div>
                    <div @click="UserAmountTab(3)" class="lis">
                       <img src="@/assets/Mine/settingnew.png" alt="4444" class="my-0 mx-auto block w-11"> 
                       <span class="block text-xs text-center ">账户设置</span>
                    </div>
                </div>
                <!--  -->
                <section class="bosfs mt-[15px] rounded-[15px] py-1 px-3 w-full shadow bg-white">

                    <div @click="goUser(0)" class="flex items-center justify-between border-b border-solid border-[#f5f0f0] h-11">
                        <img src="@/assets/Mine/ob@2x.png" alt="firstimg" class="w-6">
                        <span class="text-[#4e6693] ml-[10px] text-xs">消息中心</span>
                        <span class="flex-1 text-right text-[#a2aec8] mx-3"></span>
                        <img src="@/assets/Mine/arrow_right.png" alt="aaa" class="w-[6px]">
                    </div>

                    <div @click="goUser(1)" class="flex items-center justify-between border-b border-solid border-[#f5f0f0] h-11">
                        <img src="@/assets/Mine/haoyou.svg" alt="firstimg" class="w-6">
                        <span class="text-[#4e6693] ml-[10px] text-xs">返水中心</span>
                        <span class="flex-1 text-right text-[#a2aec8] mx-3"></span>
                        <img src="@/assets/Mine/arrow_right.png" alt="aaa" class="w-[6px]">
                    </div>

                    <div @click="goUser(2)" class="flex items-center justify-between border-b border-solid border-[#f5f0f0] h-11">
                        <img src="@/assets/Mine/help.png" alt="firstimg" class="w-6">
                        <span class="text-[#4e6693] ml-[10px] text-xs">活动记录</span>
                        <span class="flex-1 text-right text-[#a2aec8] mx-3"></span>
                        <img src="@/assets/Mine/arrow_right.png" alt="aaa" class="w-[6px]">
                    </div>

                    <div @click="goUser(3)" class="flex items-center justify-between border-b border-solid border-[#f5f0f0] h-11">
                        <img src="@/assets/Mine/haoyou.svg" alt="firstimg" class="w-6">
                        <span class="text-[#4e6693] ml-[10px] text-xs">福利中心</span>
                        <span class="flex-1 text-right text-[#a2aec8] mx-3"></span>
                        <img src="@/assets/Mine/arrow_right.png" alt="aaa" class="w-[6px]">
                    </div>

                    <div @click="goUser(4)" class="flex items-center justify-between border-b border-solid border-[#f5f0f0] h-11">
                        <img src="@/assets/Mine/join.png" alt="firstimg" class="w-6">
                        <span class="text-[#4e6693] ml-[10px] text-xs">合营计划</span>
                        <span class="flex-1 text-right text-[#a2aec8] mx-3">加入我们，共赢财富</span>
                        <img src="@/assets/Mine/arrow_right.png" alt="aaa" class="w-[6px]">
                    </div>

                    <div @click="goUser(5)" class="flex items-center justify-between border-b border-solid border-[#f5f0f0] h-11">
                        <img src="@/assets/Mine/appxiazaus.png" alt="firstimg" class="w-6">
                        <span class="text-[#4e6693] ml-[10px] text-xs">app下载</span>
                        <span class="flex-1 text-right text-[#a2aec8] mx-3"></span>
                        <img src="@/assets/Mine/arrow_right.png" alt="aaa" class="w-[6px]">
                    </div>

                    <div @click="goUser(6)" class="flex items-center justify-between border-b border-solid border-[#f5f0f0] h-11">
                        <img src="@/assets/Mine/help.png" alt="firstimg" class="w-6">
                        <span class="text-[#4e6693] ml-[10px] text-xs">帮助中心</span>
                        <span class="flex-1 text-right text-[#a2aec8] mx-3"></span>
                        <img src="@/assets/Mine/arrow_right.png" alt="aaa" class="w-[6px]">
                    </div>

                    <div @click="goUser(7)" class="flex items-center justify-between h-11">
                        <img src="@/assets/Mine/close151.svg" alt="firstimg" class="w-6">
                        <span class="text-[#4e6693] ml-[10px] text-xs">退出系统</span>
                        <span class="flex-1 text-right text-[#a2aec8] mx-3"></span>
                        <img src="@/assets/Mine/arrow_right.png" alt="aaa" class="w-[6px]">
                    </div>

                </section>
            </div>
         </section>
    </section>
        <van-dialog
    className="customBackround"
    v-model:show="logoutDialog"
    confirm-button-text="确认"
    cancel-button-text="取消"
    :cancelButtonColor="'#252a3e'"
    :confirmButtonColor = "'#e53123'"
    show-cancel-button
    @confirm="confirmLogout"
    @cancel="logoutDialog = false"
  >
    <template #title>
      <div>
        提示
      </div>
    </template>
    <p class="text-center py-2 text-black">是否确认退出？</p>
  </van-dialog>
</template>


<script setup>
 import {  ref,computed } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { useStore } from "vuex";
const router = useRouter();
const route = useRoute();

const logoutDialog = ref(false)

const confirmLogout = () => {
    router.push('/login')
}

const goUserInfo = () => {
    router.push('/userinfo')
}
const UserAmountTab = (number) => {
   switch (number) {
    case 0:
         router.push('/money')
        break;
    case 1:
        router.push('/transferRecord')
        break;
    case 2:
         router.push('/betRecord')
        break;
    case 3:
         router.push('/center')
        break;
   
    default:
        break;
   }
}
 
const goUser = (number) => {
   switch (number) {
    case 0:
         router.push('/message')
        break;
    case 1:
         router.push('/fanshui')
        break;
    case 2:
         router.push('/activityRecord')
        break;
    case 3:
         router.push('/welfare')
        break;
    case 4:
         router.push('/applyAgent')
        break;
    case 5:
         router.push('/app-down')
        break;
    case 6:
         router.push('/aboutGame')
        break;
    case 7:
         logoutDialog.value = true
        break;
    default:
        break;
   }
}
 

  </script>


<style scoped>
.meys{
    background-image: url(@/assets/Mine/walletbg.png);
    background-size: 100% 100%;
    background-position: top;
    background-repeat: no-repeat;
}
.imsg{
    background-image: url(@/assets/Mine/refresh.png);
    background-size: 100% 100%;
    background-position: top;
    background-repeat: no-repeat;
}
.vipousf{
    background-image: url(@/assets/Mine/vipousf.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.below_sec{
    background-image: url(@/assets/Mine/belowsec.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>