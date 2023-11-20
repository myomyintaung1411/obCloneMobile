<template>
    <section class="w-full h-full relative">
     <van-nav-bar
      :border="false"
      title="活动申请记录"
      left-arrow
      @click-left="onClickLeft"
      color="#fff"
      style="background: #edf2fd;font-weight:500!important"
    />
        <section class="w-full relative bg-white">
        <div>
            <van-empty image="search" description="空空如也" />

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
 


  </script>
