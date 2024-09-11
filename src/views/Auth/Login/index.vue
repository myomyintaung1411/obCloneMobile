<template>
  <section class="w-full h-full relative text-black">
    <div class="py-2 relative  px-3 flex items-center">
      <div @click="gohome" class="bg-black  bg-opacity-70 text-white rounded-full h-7 w-7 flex items-center justify-center">
                    <van-icon name="arrow-left" size="12" />
          
      </div>
    <div class="text-lg px-3 font-semibold"> {{ active_section == 0 ? ' 登录' : '注册' }}  </div>
    </div>
    <section class="py-2 flex flex-col items-center justify-center ">
     <img src="http://api.ybl-7777.com/storage/uploads/config/202310/15/config_1697364615_2zoSnm9y6w.png" alt="logo" class="w-24">
     <span class="py-2 text-base font-bold tracking-wider">开启极致体验</span>
    </section>
    <section v-if="active_section == 0" class="py-2 px-6 animate-fade">
      <form @click.prevent>
        <div class="flex flex-col ">
          <span class="font-medium text-sm pb-1">用户名</span>
          <div class="flex items-center bg-white px-2 py-1 rounded">
            <span class="text-red-500 text-base ">*</span>
            <input v-model="name" type="text " min="6" maxlength="8" class="bg-transparent px-3 w-full  py-1" autocomplete="off"  placeholder="请输入账号" />
          </div>
        </div>
        <div class="flex flex-col pt-2 ">
          <span class="font-medium text-sm pb-1">密码</span>
          <div class="flex items-center bg-white px-2 py-1 rounded">
            <span class="text-red-500 text-base ">*</span>
            <input v-model="password" type="password" min="6" maxlength="16" class="bg-transparent px-3 w-full  py-1" autocomplete="off"  placeholder="请输入密码" />
          </div>
        </div>

        <div class="pt-5">
          <van-button @click="Login" round block type="primary" >
            登录
          </van-button>
        </div>

      </form>
      <div
              class="my-4 flex px-4 items-center justify-between text-black text-sm"
            >
              <span @click="gohome">先去逛逛</span>
              <span @click="active_section = 1" class="text-blue-500 font-bold"> 注册</span>
            </div>
    </section>

    <section v-if="active_section == 1" class="py-2 px-6 animate-fade">
      <form @click.prevent>
        <div class="flex flex-col ">
          <span class="font-medium text-sm pb-1">用户名</span>
          <div class="flex items-center bg-white px-2 py-1 rounded">
            <span class="text-red-500 text-base ">*</span>
            <input v-model="name" type="text " min="6" maxlength="8" class="bg-transparent px-3 w-full  py-1" autocomplete="off"  placeholder="6 - 8 字符，字母开头，限字母，数字" />
          </div>
        </div>
        <div class="flex flex-col pt-2 ">
          <span class="font-medium text-sm pb-1">密码</span>
          <div class="flex items-center bg-white px-2 py-1 rounded">
            <span class="text-red-500 text-base ">*</span>
            <input v-model="password" type="password" min="6" maxlength="16" class="bg-transparent px-3 w-full  py-1" autocomplete="off"  placeholder="6 个字符以上，须包含字母及数字" />
          </div>
        </div>
        <div class="flex flex-col pt-2 ">
          <span class="font-medium text-sm pb-1">确认密码</span>
          <div class="flex items-center bg-white px-2 py-1 rounded">
            <span class="text-red-500 text-base ">*</span>
            <input v-model="confirm_pass" type="password" class="bg-transparent px-3 w-full  py-1" autocomplete="off" placeholder="6 个字符以上，须包含字母及数字" />
          </div>
        </div>
        <div class="flex flex-col pt-2 ">
          <span class="font-medium text-sm pb-1">取款密码</span>
          <div class="flex items-center bg-white px-2 py-1 rounded">
            <span class="text-red-500 text-base ">*</span>
            <input v-model="withdraw_pass" type="password" min="6" maxlength="16" class="bg-transparent px-3 w-full  py-1" autocomplete="off"  placeholder="请输入取款密码" />
          </div>
        </div>

        <div class="flex flex-col pt-2 ">
          <span class="font-medium text-sm pb-1">货币种类</span>
          <div class="flex items-center bg-white px-2 py-1 rounded">
            <span class="text-red-500 text-base ">*</span>
            <input disabled type="text" class="bg-transparent px-3 w-full  py-1" autocomplete="off"  placeholder="请选择货币种类" />
          </div>
        </div>

        <div class="pt-5">
          <van-button @click="Register" round block type="primary" >
            立即开户 赚钱娱乐两不误
          </van-button>
        </div>

      </form>
      <div
              class="my-4 flex px-4 items-center justify-between text-black text-sm"
            >
              <span @click="gohome">先去逛逛</span>
              <span @click="active_section = 0" class="text-blue-500 font-bold">登录</span>
            </div>
    </section>


  </section>
</template>

<script setup>
import { ref, computed,onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import {useStore} from 'vuex'
const router = useRouter();
const route = useRoute();
const store = useStore()
import {
  showToast,
  showLoadingToast,
  closeToast,
  showImagePreview,
} from "vant";
const captch = computed(() => store.getters["app/CaptchaData"]);

const active_section = ref(0);
const name = ref('')
const password = ref('')
const confirm_pass = ref('')
const withdraw_pass = ref('')
const money_type = ref('')

const gohome = () => {
  router.push("/");
};

const Register = async () => {
  if (
    name.value == "" ||
    password.value == "" ||
    confirm_pass.value == "" ||
    withdraw_pass.value == "" 
  ) return showToast('请输入完整的登录信息');
    if (password.value.length < 6)  return showToast(t('密码必须至少有6个字符长'))
    if (!/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value)) return showToast('密码必须包含数字和英文字母')
    if (name.value == password.value) return showToast('用户名和密码不能相同')
    let data = {
        "invite_code": "",
        "name": name.value,
        "password": password.value,
        "password_confirmation": confirm_pass.value,
        "phone": "",
        "qk_pwd": withdraw_pass.value,
        "realname": "",
        "register_site": window.location.href,
        "key": "$2y$10$RxBUeCqsM7G9aMTYbxeb7uc04os72p81ZoeEs8uvDkDGrlHa3C8Je",
        "captcha": "",
        "sms_code": "",
        "lang": "zh_cn"
    }
  }

const Login = () => {

}

onMounted(() => {
  if (route?.query !== undefined && route.query?.id !== undefined) {
    active_section.value = Number(route?.query?.id);
  }
});

</script>
