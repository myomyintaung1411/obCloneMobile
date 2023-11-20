<template>
    <div class="w-full h-full relative  ">
     <van-nav-bar
      :border="false"
      title="存款"
      
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
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
        <form @click.prevent>
        <div class="relative text-black space-y-1  pt-2 mt-3 bg-white px-4">
            <div class="text-base font-bold">USDT地址</div>
            <div class="h-10 w-full relative flex items-center  ">
                <input type="tel" autocomplete="off" placeholder="请输入USDT地址" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>

        <div class="relative text-black space-y-1  pt-2 mt-3 bg-white px-4">
            <div class="text-base font-bold">USDT地址</div>
            <div class="h-10 w-full relative flex items-center  ">
                <input type="password" autocomplete="off" placeholder="请输入USDT地址" value="" maxlength="10" class="bg-white text-sm  placeholder:text-xs w-full h-full px-3 text-[#000]">
            </div>
        </div>

         <div class="relative text-black space-y-1  py-3 mt-3  px-4">
            <van-button block color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)">
              确认添加
            </van-button>
        </div>

        </form>

    </div>
</template>

<script setup>
 import {  ref,computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();


const onClickLeft = () => {
    router.push('/wallet')
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