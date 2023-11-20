<template>
      <section class="w-full h-full relative bg-white ">
     <van-nav-bar
      :border="false"
      title="存款"
      fixed
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
    <section class="w-full pt-14  ">
        <div class="py-3 bg-white px-4">
            <div class="flex items-center justify-between space-x-4">
                <div @click="TabClick(0)" :class="active_tab === 0 ? 'border-[#597ef7]' : 'border-[#ebebeb]'" class="border border-solid  flex flex-col items-center w-1/4 py-2 space-y-1 rounded shadow">
                    <img src="@/assets/aa.png" alt="" class="w-8">
                    <span class="text-xs text-[#333]">网银转账</span>
                </div>
                <div @click="TabClick(1)" :class="active_tab === 1 ? 'border-[#597ef7]' : 'border-[#ebebeb]'"  class="border border-solid  flex flex-col items-center w-1/4 py-2 space-y-1 rounded shadow">
                    <img src="@/assets/bb.png" alt="" class="w-8">
                    <span class="text-xs text-[#333]">USDT</span>
                </div>
                <div @click="TabClick(2)" :class="active_tab === 2 ? 'border-[#597ef7]' : 'border-[#ebebeb]'"  class="border border-solid flex flex-col items-center w-1/4 py-2 space-y-1 rounded shadow">
                    <img src="@/assets/cc.png" alt="" class="w-8">
                    <span class="text-xs text-[#333]">微信</span>
                </div>
                <div @click="TabClick(3)" :class="active_tab === 3 ? 'border-[#597ef7]' : 'border-[#ebebeb]'"  class="border border-solid  flex flex-col items-center w-1/4 py-2 space-y-1 rounded shadow">
                    <img src="@/assets/dd.png" alt="" class="w-8">
                    <span class="text-xs text-[#333]">支付宝</span>
                </div>
            </div>
        </div>

    <section v-if="active_tab === 0">
       <div class="px-3">
        <div class="px-3 py-3 relative text-[#333] bg-[#f4f6ff]">
            <div class="flex items-center justify-between py-1">
                <div class=" space-x-2">
                    <span class="text-sm"> 收款账号 </span>
                    <span class="text-xs">2231 3434 3434 3434 454</span>
                </div>
                <div class=" text-xs cursor-pointer text-green-600">
                     复制 
                </div>
            </div>
            <div class="flex items-center justify-between py-1">
                <div class=" space-x-2">
                    <span class="text-sm">  银行户名  </span>
                    <span class="text-xs">王某某</span>
                </div>
                <div class=" text-xs cursor-pointer text-green-600">
                     复制 
                </div>
            </div>
            <div class="flex items-center justify-between py-1">
                <div class=" space-x-2 ">
                    <span class="text-sm mr-3">  开户行  </span>
                    <span class="text-xs">中国农业银行</span>
                </div>
                <div class=" text-xs cursor-pointer text-green-600">
                     复制 
                </div>
            </div>
            <div class="flex items-center justify-between py-1">
                <div class="space-x-2">
                    <span class="text-sm">  银行地址  </span>
                    <span class="text-xs">中国农业银行海外总行</span>
                </div>
                <div class=" text-xs cursor-pointer text-green-600">
                     复制 
                </div>
            </div>
        </div>
        </div>

        <section class="py-5 relative bg-[#f4f6ff]  mt-3">
        <div @click="showPicker = true" class="relative text-black space-y-1  py-2 mb-2 bg-white px-4">
            <div class="text-base font-bold">开户银行</div>
            <div class="h-10 w-full text-[#c8c9cc] px-3 text-xs " style="line-height:40px">
                {{selectBank}}
            </div>
        </div>
        <div class="relative text-black space-y-1  pt-2 mb-2 bg-white px-4">
            <div class="text-base font-bold">存款人姓名</div>
            <div class="h-10 w-full ">
                <input type="text" placeholder="请输入存款人姓名" value="" class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
            <div class="py-2 w-full border-t border-[#f5f1f1] text-xs text-[#a19a9a]">
                为及时到账，请务必输入正确的存款人姓名
            </div>
        </div>
        <div class="relative text-black space-y-1  py-2 mb-2 bg-white px-4">
            <div class="text-base font-bold">银行卡号</div>
            <div class="h-10 w-full ">
                <input type="text" placeholder="请输入银行卡号" value="" class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>
        <div class="relative text-black space-y-1  py-2 mb-2 bg-white px-4">
            <div class="text-base font-bold">开户行地址</div>
            <div class="h-10 w-full ">
                <input type="text" placeholder="请输入开户行地址" value="" class="bg-white text-sm placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>
        <div class="relative text-black space-y-1  py-2 mb-2 bg-white px-4">
            <div class="text-base font-bold">存款金额</div>
            <div class="h-10 w-full relative flex items-center  ">
                <span class="text-xs pl-3">￥</span>
                <input type="tel" placeholder="请输入取款金额 100 - 1000000" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
                <span class="pr-3"> 元</span>
            </div>
        </div>
        <div class="relative text-black space-y-1  py-2 mb-3 bg-white px-4">
            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              立即存款
            </van-button>
            <div class="py-3 text-center space-x-1 text-xs text-[#a19a9a]">
                <span>存款遇到问题？联系 </span>
                <span class="text-blue-500">人工客服</span>
                <span> 解决</span>
            </div>
        </div>
        </section>
    </section> 

    <section v-if="active_tab === 1" class="bg-[#f4f6ff]">
           <div class="px-3">
            <div class="bg-[#f4f6ff] py-3 px-3">
                <div class="flex items-center justify-between text-[#333]">
                    <span class="font-bold text-base">USDT价格稳定 流通性高 不受监管 </span>
                    <span class="text-xs space-x-1">
                        <span>了解更多</span>
                        <span class="text-[#333]"><van-icon name="arrow" /></span>
                    </span>
                </div>
                <div class="py-2">
                    <div class="flex items-center justify-between">
                        <div class="__bg_img text-xs flex-1 text-center text-[#a5a9b3] px-2 ">绑定协议地址</div>
                        <div class="__bg_img text-xs flex-1 text-center text-[#a5a9b3] px-2 ">绑定协议地址</div>
                        <div class="__bg_img text-xs flex-1 text-center text-[#a5a9b3] px-2 ">绑定协议地址</div>
                    </div>
                </div>
            </div>
           </div>

             <div class="mt-3 bg-white ">
                    <div class="flex items-center text-[#333]  py-4 px-3">
                        <span class="font-bold text-base"> 钱包协议 </span>
                        <div class="pl-10 flex items-center space-x-5">
                            <div class="px-3 py-2 rounded border border-solid border-[#597ef7]">TRC20</div>
                            <div class="px-3 py-2 rounded border border-solid border-[#597ef7]">ERC20</div>
                        </div>
                    </div>
            </div>

       <section class="py-5 relative bg-[#f4f6ff] ">

        <div class="relative text-black space-y-1  pt-2 mb-2 bg-white px-4">
            <div class="text-base font-bold">存款金额</div>
            <div class="h-10 w-full relative flex items-center  ">
                <span class="text-xs pl-3">￥</span>
                <input type="tel" placeholder="请输入取款金额 0.00 - 0.00" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
                <span class="pr-3"> 元</span>
            </div>
              <div class="py-2 w-full border-t border-[#f5f1f1] text-xs text-[#a19a9a]">
                <span class="text-red-500 text-[10px] px-1">≈ </span>  <span>0.00USDT</span> ; 参考汇率 ：6.42
            </div>
        </div>

        <div class="relative text-black space-y-1  pt-2 mb-2 bg-white px-4">
            <div class="text-base font-bold">温馨提示</div>
             <div class=" w-full text-[#c8c9cc] px-3 text-xs py-2 border-t border-[#f5f1f1] " style="line-height:20px">
                请选择正确的USDT协议付款，若您选择错误的协议付款，平台将无法收到您的付款，为此我们不承担任何负责！
            </div>
        </div>
        <div class="relative text-black space-y-1  py-2 mb-3 bg-white px-4">
            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              立即存款
            </van-button>
            <div class="py-3 text-center space-x-1 text-xs text-[#a19a9a]">
                <span>存款遇到问题？联系 </span>
                <span class="text-blue-500">人工客服</span>
                <span> 解决</span>
            </div>
        </div>
        </section>

    </section>

    <section v-if="active_tab === 2 || active_tab === 3" class="bg-[#f4f6ff]">



       <section class="py-5 relative bg-[#f4f6ff] ">

        <div class="relative text-black space-y-1  pt-2 mb-2 bg-white px-4">
            <div class="text-base font-bold">存款金额</div>
            <div class="h-10 w-full relative flex items-center  ">
                <span class="text-xs pl-3">￥</span>
                <input type="tel" placeholder="请输入取款金额 0.00 - 0.00" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
                <span class="pr-3"> 元</span>
            </div>
        </div>


        <div class="relative text-black space-y-1  py-2 mb-3 bg-white px-4">
            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              立即存款
            </van-button>
            <div class="py-3 text-center space-x-1 text-xs text-[#a19a9a]">
                <span>存款遇到问题？联系 </span>
                <span class="text-blue-500">人工客服</span>
                <span> 解决</span>
            </div>
        </div>
        </section>

    </section>
    </section>

</section>

  <van-popup v-model:show="showPicker" position="bottom">
    <van-picker
      confirm-button-text="确认"
      cancel-button-text="取消"
      title="银行类型"
      :columns="columns"
      @cancel="showPicker = false"
      @confirm="onConfirm"
    />
  </van-popup>

</template>

<script setup>
 import {  ref,computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const showPicker = ref(false)
const active_tab = ref(0)
const columns = [
  { text: "中国农业银行", value: "1" },
  { text: "中国银行", value: "2" },
  { text: "交通银行", value: "3" },
];
const selectBank = ref('选择开户银行')
const TabClick = (number) => {
    active_tab.value = number
}

const onClickLeft = () => {
    router.push('/money')
}

const onConfirm = ({ selectedOptions }) => {
  selectBank.value = selectedOptions[0].text;
  showPicker.value = false
}
  </script>
<style scoped>
.__bg_img{
    height: 28px;
    line-height: 28px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA0CAYAAADPCHf8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALCSURBVHgB7d0hcNtAEIXhtWh4y8vDixseXHPz4ibYKW2Kw1UsHt7g8vCWB7u7mYsnss7S3elmam3+b8bjxM6Evaz1tFJWu91uKyLnAixbt1qt7qSyRh+3Aizfpf6xv5TKGk3dX31uBVi+jYak6qehJjx3+ngSYPmuNCTvpZLngOgUsXBU//wG/Adn+thqSM6kgpcJYiG516ffAizfO31cSQXNwfc/BfDhXKfIRmbqBUSniE2QewF8sGZrLTM0kdfsWIQDdnix1pB8lEKDgIQD9k4AP75oSD5IgdgEsZDYeZE/AvhgjVZR/duMvPdDAD+s2fqaW/8eDUg4YKf2hSf2MSur2Wom3mdPC95c5DRbowFhTwtOWbN1kfKDUxPEsKcFjzYpzdZkQNjTglNJzVbKBGFPC15NNltJAQnY04JHo81WckDY04JjR5utnAli2NOCV+vYJbtZAWFPC84Nmq3cCWIsIOxpwavt62YrOyBhirCnBa96l+yWTBD2tODd/pLdlRTShNkv4QQiPOuKJgjwRjzNCcisa32BE/dgFw4WBSRsQiZtQwILZFvs3+2L0gnyWQCfLBzXoa3ND0g4JV/t1o7AibnRcOzP82UFJDRX1e+gDZyIOw3H4+sXcieITY8q9zwFTkyr4RisUSUHJEwPDszh0UO41dVAzgTZCuDPvrGKSQpIqHU5MIc3vcYqZjIg4aMVtS68sVD0GquYlAlirRXTA960h41VzGhAqHXhVLSxipmaIOxbwZvuWGMVczQg7FvBocfc/6U+NkE4MIcn1lh9k0zRgLBvBWessbqeaqxiBgEJB+afBPDjtiQcJjZBmB7wxBqrX1KoFxD2reBMVmMVczhB2LeCF9mNVcw+IOxbwZGixirmOSDsW8GR4sYq5mWCMD3gxU2tcJgmTA9WSuBBG+76WY1NEMIBD9q5jVXMPzyG0oj5jr9QAAAAAElFTkSuQmCC);
    background-size: cover;
}
</style>