<template>
  <div
    id="main"
    class="w-full h-full sm:max-w-md sm:mx-auto sm:flex sm:justify-center sm:items-center  "
  >
   <div class="relative  h-[calc(100vh_-_68px)]  w-full main  ">
      <router-view></router-view>
   <section class="fixed left-0 bottom-0 z-50 h-[68px] bg-[#f3f6ff] border-t border-[rgb(213,216,224)] flex w-full sm:max-w-md sm:relative  ">
        <div @click="TabClick(1)" class=" text-sm flex-1 flex flex-col items-center justify-center cursor-pointer" style="line-height:1" :class="activeRoute === '/home' ? 'text-[rgb(89,126,247)]' : 'text-[#646566]'">
            <div class="relative text-xl mb-1">
                <img v-if="activeRoute === '/home'" src="@/assets/Tab/home_a.png" alt="home" class=" h-[34px] block">
                <img v-else src="@/assets/Tab/home.png" alt="home" class=" h-[34px] block">
            </div>
            <div>
                <span>首页</span>
            </div>
        </div>
        <div @click="TabClick(2)" class=" text-sm flex-1 flex flex-col items-center justify-center cursor-pointer" style="line-height:1" :class="activeRoute === '/activity' ? 'text-[rgb(89,126,247)]' : 'text-[#646566]'">
            <div class="relative text-xl mb-1">
                <img v-if="activeRoute === '/activity'" src="@/assets/Tab/activity_a.png" alt="home" class=" h-[34px] block">
                <img v-else src="@/assets/Tab/activity.png" alt="home" class=" h-[34px] block">
            </div>
            <div>
                <span>优惠</span>
            </div>
        </div>
        <div @click="TabClick(3)" class=" text-sm flex-1 flex flex-col items-center justify-center cursor-pointer" style="line-height:1" :class="activeRoute === '/kefu' ? 'text-[rgb(89,126,247)]' : 'text-[#646566]'">
            <div class="relative text-xl mb-1">
                <img v-if="activeRoute === '/kefu'" src="@/assets/Tab/kefu_a.png" alt="home" class=" h-[34px] block">
                <img v-else src="@/assets/Tab/kefu.png" alt="home" class=" h-[34px] block">
            </div>
            <div>
                <span>客服</span>
            </div>
        </div>
        <div @click="TabClick(4)" class=" text-sm flex-1 flex flex-col items-center justify-center cursor-pointer" style="line-height:1" :class="activeRoute === '/mine' ? 'text-[rgb(89,126,247)]' : 'text-[#646566]'">
            <div class="relative text-xl mb-1">
                <img v-if="activeRoute === '/mine'" src="@/assets/Tab/mine_a.png" alt="home" class=" h-[34px] block">
                <img v-else src="@/assets/Tab/mine.png" alt="home" class=" h-[34px] block">
            </div>
            <div>
                <span>我的</span>
            </div>
        </div>
   </section>
   </div>
  </div>
</template>

<script setup>
 import { onMounted, ref, watch,computed } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { useStore } from "vuex";
const activeRoute = ref("");
const router = useRouter();
const route = useRoute();

let activeTab = ref(1);
// const token = computed(() => store.getters["user/LToken"]);

watch(
    () => route.path,
    () => {
        console.log(route.path, "watching");
        activeRoute.value = route.path;
    },
    { immediate: true, deep: true }
);

const TabClick = (n) =>{
    console.log(n);
    activeTab.value = n
    switch (n) {
        case 1:
            router.push('/home')
            break;
        case 2:
            router.push('/activity')
            break;
        case 3:
            router.push('/kefu')
            break;
        case 4:
            router.push('/mine')
            break;
    
        default:
            break;
    }
}
  </script>



<style scoped>
.main {
  @apply overflow-y-scroll sm:overflow-y-visible
}
</style>
