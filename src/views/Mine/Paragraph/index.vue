<template>
    <div class="w-full h-full relative ">
        <div class="h-48 bg-blue-500 rounded-b-[66px] relative">
            <div class="pt-5 pl-5">
             <div @click="onClickLeft" class="bg-black  bg-opacity-70 rounded-full h-7 w-7 flex items-center justify-center">
                    <van-icon name="arrow-left" size="12" />
             </div>
            </div>

            <div class="w-full space-x-4 text-center flex items-center justify-center">
                 <img class="w-12 h-12" src="@/assets/service.png" alt="serv">
            <div class="flex flex-col items-center justify-center space-y-1">
                <span class="text-sm text-white font-bold tracking-wide">Hi,尊敬的会员用户</span>
                <span class="text-[9px] text-white  tracking-wide">早上好，欢迎来到帮助中心</span>
                <span class="text-[9px] text-white  tracking-wide">若相关问题仍未解决，可咨询在线客服</span>
            </div>
            </div>

            <div class=" px-6 py-6">
                <div class="h-[1px] w-full bg-white"></div>
            </div>
         <div v-if="active_section === 1" class="py-3 text-center text-xs text-white"> 关于我们</div>
         <div v-if="active_section === 2" class="py-3 text-center text-xs text-white"> 常见问题</div>
         <div v-if="active_section === 3" class="py-3 text-center text-xs text-white"> 隐私政策</div>
         <div v-if="active_section === 4" class="py-3 text-center text-xs text-white"> 免责说明</div>
         <div v-if="active_section === 5" class="py-3 text-center text-xs text-white"> 联系我们</div>
        </div>
        <div v-if="active_section === 1" class=" pt-4 px-3 relative text-[#333] ">
            <p class="px-2 text-sm">关于我们</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> TG集团线上娱乐成立于2007年，我们拥有着一支来自世界的博彩界精英服务团队，并与亚洲最大博彩软件提供商合作，是亚洲领先的在线博彩网站，我们提供体育投注，网上真人赌城，在线扑克和在线电子游艺。我们从2007年进入中国和亚洲市场，已经取得了菲律宾First Cagayan 的充分授权及监管。严格按照这些管理机构发布的规则进行所有运营。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 安全和私密博彩环境以及产品的完整性为您提供的在线博彩体验。我们拥有目前世界上最先进的安全措施和游戏结果审计流程，从而确保我们的会员有一个安全公平的游戏环境。在我们的隐私保密范围之内，我们将为您的所有信息保密，决不分享或出售给第三方。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 我们为您提供全世界最多种类的体育赛事、不同的体育投注玩法以及最佳赔率。在我们的在线娱乐场，我们为您提供各种各样的现场游戏和老虎机游戏。我们的真人荷官及现场娱乐也是无可挑剔的，设有 7×24小时在线监测，确保每一局游戏结果均为现场真实的游戏结果。在TG集团我们保证您可以享受到世界上最顶级的在线博彩娱乐。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 我们提供训练有素和亲切的客户服务，全天候24小时的在线为客户们服务。我们保证以快速、礼貌和有效的方式为玩家们处理问题。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 我们向您提供安全方便的各种支付方式。我们坚持以“了解你的客户”和“反洗钱”为一贯宗旨，并配合第三方金融监管机构，以确保遵守最高标准。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 我们的使命是为每一位会员提供最精彩的游戏体验，请随时通过电话或电子邮件向我们提出您的意见或建议。。</p>
         <span class="pt-5 text-center w-full flex items-center justify-center space-x-1">
            <span class="text-xs">没有找到解决办法？请联系</span>
            <span class="text-blue-500 font-bold">人工客服</span>
            <span class="text-xs">解决</span>
         </span>
        </div>
        <div v-if="active_section === 2" class=" pt-4 px-3 relative text-[#333] ">
            <p class="px-2 text-sm">常见问题</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 1.TG集团线上娱乐实力怎样？<br/>您好，请参阅主页“关于我们”。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 2.在贵公司进行游戏是否安全？<br/>
             您好，本公司系统绝对安全。我们决不泄漏客户的个人资料给任何商业机构。此外，我们亦要求有交易往来的银行，信用卡中转代理等严格保密客户的资料。所有的存款将视为贸易户口，并不会交给其它的人士进行。
            </p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 3.网上博彩是否合法？<br/>
             您好，我们是合法注册于菲律宾之博彩公司,一切博彩操作皆遵从菲律宾政府条约,不受其他地区管辖，请根据您自身的风险承受能力及当地法律决定是否投注。本公司不能亦不会接受任何人士违犯当地法律所引致之任何责任。
            </p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">4.在TG集团线上娱乐进行投注是否有年龄限制？<br/>
             您好，是的，投注合法年龄必须年满18岁。
            </p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">5.开户是否要填写真实姓名？<br/>
             您好，基于安全理由，提款时财务部会按照注册姓名进行审核，银行卡户名必须与注册姓名一致方可提款，所以请您在开户时填写的真实姓名必须与您提款的银行卡户名一致。
            </p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">6.忘记密码怎么办？<br/>
             您好，请您联系7*24小时在线客服核对身份后申请更改密码。
            </p>

         <span class="pt-5 text-center w-full flex items-center justify-center space-x-1">
            <span class="text-xs">没有找到解决办法？请联系</span>
            <span class="text-blue-500 font-bold">人工客服</span>
            <span class="text-xs">解决</span>
         </span>
        </div>
      <div v-if="active_section ===3" class=" pt-4 px-3 relative text-[#333] ">
            <p class="px-2 text-sm">隐私政策</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">1、TG集团十分尊重及重视会员的隐私权，我们将竭力保证您的信息与数据安全，让客户无后顾之忧，这是我们一直遵循的隐私权政策宗旨。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">2、TG集团绝不会透露任何能识别个人身份的资料给任何第三方，除非收到法庭传票或应可行法律的要求及判决。我们有权通过网站向有关付款平台服务提供商以及金融保险机构提供必要的个人信息以完成付款要求。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">3、会员提供的所有个人信息，其传送均通过128位SSL加密的安全端口，并存放在普通公众无法进入的保密环境之中。所有数据的内部出入将受到严格限制和严密监控。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">下列是关于客户个人信息隐私权保护规则的内容：

                <br/>
                为了让客户享受进一步服务，有时我们可能需要客户提供个人信息。本政策将会涵盖相关客户个人信息的使用事项，同时也涉及相关信息的记录程序。有时，客户接受进一步服务前，可能需要客户提供个人信息（如：姓名，通信地址，邮箱地址，会员编号，电话或手机号码，出生日期或支付信息），任何情况下，我们都将对照此政策来处理您的个人信息。在使用您的个人信息时我们将适用现行的法律条款，并竭力采取最佳最稳妥的方式处理。同时，我们也将监控您在本网站的活动内容，可能包括您的访问量，访问页面，网络服务的原始域名等，这将有助于我们建立客户个人文件数据。其中部分资料将被聚合统计，意旨我们将不能对其单独进行检验。
            </p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">数据机密性 <br/>
            TG集团将尽全力保护客户提供给我们的个人资料，不会蓄意将该数据泄漏给外人，除非此政策条款里有明文规定。所有TG集团员工都被要求遵循该政策条款。员工有义务严密的保守客户的个人信息，即使员工离开TG集团后仍须坚守此义务。您本人也须保护好您的个人信息，严守您的帐户密码，不应将此透露给其他人。
            </p>
         <span class="pt-5 text-center w-full flex items-center justify-center space-x-1">
            <span class="text-xs">没有找到解决办法？请联系</span>
            <span class="text-blue-500 font-bold">人工客服</span>
            <span class="text-xs">解决</span>
         </span>
        </div>
        <div v-if="active_section === 4" class=" pt-4 px-3 relative text-[#333] ">
            <p class="px-2 text-sm">免责说明</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">1、每日取款上限1000000.00元人民币，完成全额有效投注，手续费全免；。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 安全和私密博彩环境以及产品的完整性为您提供的在线博彩体验。我们拥有目前世界上最先进的安全措施和游戏结果审计流程，从而确保我们的会员有一个安全公平的游戏环境。在我们的隐私保密范围之内，我们将为您的所有信息保密，决不分享或出售给第三方。</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 2、取款到账时间一般3-5分钟，如遇到银行系统维护或财务清算等不可抗拒因素，到账将有所延迟或暂停出款；</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 3、所有线上博彩在未申请优惠情况下需完成存款一倍有效流水才可申请提款，申请优惠请参照相关优惠流水要求；</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 4、公司保留权利审核会员帐号；</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 5、各类游戏和局/未接受/取消注单，不纳入有效投注计算。 运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注（大赔率产品包括：过关、波胆、总入球、半全场、双胜彩、冠军赛等）；</p>
         <span class="pt-5 text-center w-full flex items-center justify-center space-x-1">
            <span class="text-xs">没有找到解决办法？请联系</span>
            <span class="text-blue-500 font-bold">人工客服</span>
            <span class="text-xs">解决</span>
         </span>
        </div>
        <div v-if="active_section === 5" class=" pt-4 px-3 relative text-[#333] ">
            <p class="px-2 text-sm">联系我们</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">一、合营计划联系方式</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 合营部Skype </p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> live:.cid.abd79c917c885961</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">二、客服邮箱</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px">service@tgames.vip</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 三、在线客服</p>
            <p class="text-xs pl-5 py-4" style="line-height:17px"> 我们的客服人员持续秉持着尽心尽责的服务态度，在线客服全天24小时为您提供咨询和帮助</p>
         <span class="pt-5 text-center w-full flex items-center justify-center space-x-1">
            <span class="text-xs">没有找到解决办法？请联系</span>
            <span class="text-blue-500 font-bold">人工客服</span>
            <span class="text-xs">解决</span>
         </span>
        </div>
    </div>
</template>


<script setup>
import { ref, computed,onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const active_section = ref(0);


const onClickLeft = () => {
  router.push("/aboutGame");
};

onMounted(() => {
  if (route?.query !== undefined && route.query?.id !== undefined) {
    active_section.value = Number(route?.query?.id);
  }
});

</script>
