<template>
    <div class="w-full h-full relative  bg-[#f4f6ff]">
     <van-nav-bar
      :border="false"
      title="新增银行卡"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
    <form @click.prevent>
        <div class="relative text-black space-y-1  pt-2  bg-white px-4">
            <div class="text-base font-bold">持卡人姓名</div>
            <div class="h-10 w-full relative flex items-center">
                <input type="text" autocomplete="off" placeholder="请输入持卡人姓名" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>

        <div class="py-2 text-center text-[#333] text-[11px]">为了您的资金能够迅速到账，请确保填写的姓名与银行卡的开户姓名一致</div>

        <div @click="showPicker = true" class="relative text-black space-y-1  pt-2  bg-white px-4">
            <div class="text-base font-bold">银行类型</div>
            <div class="h-10 w-full relative flex items-center  text-sm px-3 text-[#c4c6cc] ">
                {{selectBank}}
            </div>
        </div>

       <div class="relative text-black space-y-1  pt-2 mt-3 bg-white px-4">
            <div class="text-base font-bold">银行卡号</div>
            <div class="h-10 w-full relative flex items-center">
                <input type="text" autocomplete="off" placeholder="请输入银行卡号" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>

       <div class="relative text-black space-y-1  pt-2 mt-3 bg-white px-4">
            <div class="text-base font-bold">开户行</div>
            <div class="h-10 w-full relative flex items-center">
                <input type="text" autocomplete="off" placeholder="请输入开户行" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>
       <div class="relative text-black space-y-1  pt-2 mt-3 bg-white px-4">
            <div class="text-base font-bold">支付密码</div>
            <div class="h-10 w-full relative flex items-center">
                <input type="password" autocomplete="off" placeholder="请输入支付密码" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>

         <div class="relative text-black space-y-1  py-3 mt-3  px-4">
            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              确认添加
            </van-button>
        </div>

        </form>

    </div>
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
const columns = [
  { text: "中国农业银行", value: "1" },
  { text: "中国银行", value: "2" },
  { text: "交通银行", value: "3" },
];
const selectBank = ref('请选择银行类型')

const onClickLeft = () => {
    router.push('/wallet')
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