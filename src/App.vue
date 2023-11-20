<script setup>
import { ref } from "vue";
const loading = ref(true)
    setTimeout(() => {
      loading.value = false
    }, 1500)

</script>
<template>
  <div  class="w-full h-screen relative sm:max-w-md sm:mx-auto bg-[#edf2fd]">

    <div v-if="loading" class="w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-60">
      <img src="@/assets/loading.gif" alt="loading_gif" class="w-24 h-24">
    </div>

    <main v-else >
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  --van-field-label-color	: #000;
  --van-field-input-text-color	: #000;
  --van-field-placeholder-text-color	: #941010;
}
html {
  scroll-behavior: smooth;
}

*:focus {
  outline: none !important;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  background: #f4f6ff;
  width: 100%;
  color: #fff;
  font-family: PingFang SC, Hiragino Sans GB, Helvetica Neue, Microsoft Yahei, sans-serif, arial;
  user-select: none;
}

@media (min-width: 640px) {
  body {
  background: none;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  }
}

  .actvie-background-btn{
    color: white;
    background: rgb(126,139,190);
    background: linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%);
  }

</style>

