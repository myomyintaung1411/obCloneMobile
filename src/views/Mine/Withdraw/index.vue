<template>
  <div class="w-full h-full relative">
    <van-nav-bar
      :border="false"
      title="转账"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd; font-weight: 500 !important"
    />
    <div class="w-full relative z-20">
      <van-tabs v-model:active="active" sticky color="#597ef7">
        <van-tab title="USDT取款" animated>
          <div class="py-3 mt-2 bg-white">
            <div>
              <div
                class="px-5 font-bold flex items-center text-base text-[#333] space-x-2 py-2"
              >
                <span>钱包金额</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt="reload"
                  class="w-4"
                />
              </div>
            </div>
          </div>
          <div class="py-5 border-y border-[#f4f6ff] bg-white">
            <div class="flex flex-col justify-center items-center text-[#333]">
              <span class="flex items-center space-x-2">
                <img
                  src="http://m1.els.best/static/image/qianbao123.png"
                  alt=""
                  class="w-5"
                />
                <span>中心钱包</span>
              </span>
              <span class="text-[#597ef7] space-x-1">
                <span class="text-[9px]">￥</span>
                <span class="text-base">0.00</span>
              </span>
            </div>
          </div>
          <div
            class="py-3 items-center text-[#333] px-5 flex flex-wrap bg-white"
          >
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
              <span>FB体育</span>
              <span class="flex items-center space-x-2">
                <span class="text-xs text-[#ccc]">0.00</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt=""
                  class="w-3"
                />
              </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
              <span>天豪棋牌</span>
              <span class="flex items-center space-x-2">
                <span class="text-xs text-[#ccc]">0.00</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt=""
                  class="w-3"
                />
              </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
              <span>天成彩票</span>
              <span class="flex items-center space-x-2">
                <span class="text-xs text-[#ccc]">0.00</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt=""
                  class="w-3"
                />
              </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
              <span>AG亚游</span>
              <span class="flex items-center space-x-2">
                <span class="text-xs text-[#ccc]">0.00</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt=""
                  class="w-3"
                />
              </span>
            </div>
          </div>
          <form @click.prevent>
          <div class="mt-3 bg-white text-[#333] px-4">
            <div>
              <div
                class="text-base font-bold w-full border-b border-[#f5f1f1] py-3"
              >
                温馨提示
              </div>
              <div class="text-[#c8c9cc] py-1 text-xs px-4">0</div>
            </div>
          </div>

          <div class="relative text-black space-y-1 pt-2 mt-3 bg-white px-4">
            <div
              class="text-base font-bold w-full border-b border-[#f5f1f1] py-3"
            >
              取款金额
            </div>
            <div class="h-10 w-full relative flex items-center">
              <input
                type="tel" autocomplete="off"
                placeholder="请输入取款金额"
                value=""
                maxlength="10"
                class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]"
              />
              <span
                class="text-xs px-2 whitespace-nowrap text-white rounded text-center py-1 bg-blue-500"
              >
                最大金额</span
              >
            </div>
          </div>

          <div class="relative text-black space-y-1 pt-2 mt-3 bg-white px-4">
            <div
              class="text-base font-bold w-full border-b border-[#f5f1f1] py-3"
            >
              支付密码
            </div>
            <div class="h-10 w-full relative flex items-center">
              <input
                type="password" autocomplete="off"
                placeholder="请输入支付密码"
                value=""
                maxlength="10"
                class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]"
              />
            </div>
          </div>

          <div class="relative text-black space-y-1 py-2 mt-3 bg-white px-4">
            <div
              class="text-base font-bold w-full  py-3"
            >
              折合USDT
            </div>
          <div class="text-xs space-x-4 flex items-center">
            <span>
                <span class="text-red-500">≈ </span>
                <span class="">0.00 SDT</span>
            </span>
            <span>参考汇率：6.56 实时变化</span>
          </div>
          <div class="text-xs">
            实际到账：0.00USDT
          </div>
          </div>

         <div class="relative text-black  pt-5  px-4 bg-[#f4f6ff]">
            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              立即存款
            </van-button>
            <div class="py-3 text-center space-x-1 text-xs text-[#a19a9a]">
                <span>存款遇到问题？联系 </span>
                <span class="text-blue-500">人工客服</span>
                <span> 解决</span>
            </div>
        </div>
        </form>  
        </van-tab>

        <van-tab title="银行卡取款" animated>
          <div class="py-3 mt-2 bg-white">
            <div>
              <div
                class="px-5 font-bold flex items-center text-base text-[#333] space-x-2 py-2"
              >
                <span>钱包金额</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt="reload"
                  class="w-4"
                />
              </div>
            </div>
          </div>
          <div class="py-5 border-y border-[#f4f6ff] bg-white">
            <div class="flex flex-col justify-center items-center text-[#333]">
              <span class="flex items-center space-x-2">
                <img
                  src="http://m1.els.best/static/image/qianbao123.png"
                  alt=""
                  class="w-5"
                />
                <span>中心钱包</span>
              </span>
              <span class="text-[#597ef7] space-x-1">
                <span class="text-[9px]">￥</span>
                <span class="text-base">0.00</span>
              </span>
            </div>
          </div>
          <div
            class="py-3 items-center text-[#333] px-5 flex flex-wrap bg-white"
          >
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
              <span>FB体育</span>
              <span class="flex items-center space-x-2">
                <span class="text-xs text-[#ccc]">0.00</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt=""
                  class="w-3"
                />
              </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
              <span>天豪棋牌</span>
              <span class="flex items-center space-x-2">
                <span class="text-xs text-[#ccc]">0.00</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt=""
                  class="w-3"
                />
              </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
              <span>天成彩票</span>
              <span class="flex items-center space-x-2">
                <span class="text-xs text-[#ccc]">0.00</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt=""
                  class="w-3"
                />
              </span>
            </div>
            <div class="flex flex-col items-center text-sm w-1/4 pb-2">
              <span>AG亚游</span>
              <span class="flex items-center space-x-2">
                <span class="text-xs text-[#ccc]">0.00</span>
                <img
                  src="http://m1.els.best/static/image/iconRefresh.5b108ae65439270527aeee8ac17c2aca.png"
                  alt=""
                  class="w-3"
                />
              </span>
            </div>
          </div>
          <form @click.prevent>
          <div class="mt-3 bg-white text-[#333] px-4">
            <div>
              <div
                class="text-base font-bold w-full border-b border-[#f5f1f1] py-3"
              >
                温馨提示
              </div>
              <div class="text-[#c8c9cc] py-1 text-xs px-4">0</div>
            </div>
          </div>

          <div class="relative text-black space-y-1 pt-2 mt-3 bg-white px-4">
            <div
              class="text-base font-bold w-full border-b border-[#f5f1f1] py-3"
            >
              取款金额
            </div>
            <div class="h-10 w-full relative flex items-center">
              <input
                type="tel" autocomplete="off"
                placeholder="请输入取款金额"
                value=""
                maxlength="10"
                class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]"
              />
              <span
                class="text-xs px-2 whitespace-nowrap text-white rounded text-center py-1 bg-blue-500"
              >
                最大金额</span
              >
            </div>
          </div>

          <div class="relative text-black space-y-1 pt-2 mt-3 bg-white px-4">
            <div
              class="text-base font-bold w-full border-b border-[#f5f1f1] py-3"
            >
              支付密码
            </div>
            <div class="h-10 w-full relative flex items-center">
              <input
                type="password" autocomplete="off"
                placeholder="请输入支付密码"
                value=""
                maxlength="10"
                class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]"
              />
            </div>
          </div>
         <div class="relative text-black  pt-5  px-4 bg-[#f4f6ff]">
            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              立即存款
            </van-button>
            <div class="py-3 text-center space-x-1 text-xs text-[#a19a9a]">
                <span>存款遇到问题？联系 </span>
                <span class="text-blue-500">人工客服</span>
                <span> 解决</span>
            </div>
        </div>
        </form>  
        </van-tab>

      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const active = ref(0);
const onClickLeft = () => {
  router.push("/money");
};
</script>
