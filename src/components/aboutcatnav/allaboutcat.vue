<template>
    <div class="container">
    <div class="d-flex justify-content-center">
        <div class="row">
            <div class="col-md-4">

                <div class="mt-4">
                <router-link class="link text-center" to="/newcatnav"><h4 class="card-title">新手養貓</h4></router-link>
                <div class="allaboutcatcard allaboutcatcard1" >
                  <div class="bbody">
                    <div class="card-body">
                      <router-link class="link" to="/Tenthingstoknow"><p class="text-area">※ 這十件事，養貓前你一定要知道！</p> </router-link>
                      <router-link class="link" to="/Suitable"><p class="text-area">※ 你適合養貓嗎？貓奴的自我評估</p> </router-link>
                      <router-link class="link" to="/storage"><p class="text-area">※ 養貓新手攻略-養貓前要準備的空間、環境配置和收納篇</p> </router-link>
                      <router-link class="link" to="/Drinkwater"><p class="text-area">※ 貓奴必學：六招增加貓喝水量貓奴必學：六招增加貓喝水量</p> </router-link>
                      <router-link class="link" to="/Drinkwater"><p class="text-area">※ 初任鏟屎官養貓新手入門- 第一篇：五大接貓前準備</p> </router-link>
                      
                    </div>
                  </div>
                  <router-link class="link mmore text-end" to="/newcatnav"><h6 class="mmore">more...</h6> </router-link> 
                </div>
              </div>

              <div class="mt-4">
                <router-link class="link text-center" to="/cafe"><h4 class="card-title">多貓家庭</h4></router-link>
                <div class="allaboutcatcard allaboutcatcard2" >
                  <div class="bbody">
                    <div class="card-body">
                      <router-link class="link" to="/Tenthingstoknow"><p class="text-area">※ 貓砂盆數量太少，小心貓咪亂大小便！</p> </router-link>
                      <router-link class="link" to="/Suitable"><p class="text-area">※ 想養第二隻貓？環境、個性都要考量</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓咪打架怎麼辦？ 多貓家庭必知5大相處守則！</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 多貓家庭的貓砂盆擺放位置，盡量不要集中在一處</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 多貓家庭常犯的五大錯誤</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓咪潛規則，從一貓家庭到多貓家庭該注意什麼？</p> </router-link>
                    </div>
                  </div>
                  <router-link class="link mmore text-end" to="/cafe"><h6 class="mmore">more...</h6> </router-link> 
                </div>
              </div>

              <div class="mt-4">
                <router-link class="link text-center" to="/cafe"><h4 class="card-title">老貓須知</h4></router-link>
                <div class="allaboutcatcard allaboutcatcard3" >
                  <div class="bbody">
                    <div class="card-body">
                      <router-link class="link" to="/Tenthingstoknow"><p class="text-area">※ 貓也有退化性關節炎 老貓心中說不出的痛</p> </router-link>
                      <router-link class="link" to="/Suitable"><p class="text-area">※ 請提早預防這７大老貓疾病！</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓甲狀腺機能亢進的治療與照顧</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 九個祕訣 貓咪養老好easy！</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓7歲開始變老！5個退化徵兆肥貓容易「小病變大病」</p> </router-link>
                    </div>
                  </div>
                  <router-link class="link mmore text-end" to="/cafe"><h6 class="mmore">more...</h6> </router-link> 
                </div>
              </div>

              <div class="mt-4">
                <router-link class="link text-center" to="/cafe"><h4 class="card-title">貓咪語言</h4></router-link>
                <div class="allaboutcatcard allaboutcatcard4" >
                  <div class="bbody">
                    <div class="card-body">
                      <router-link class="link" to="/Tenthingstoknow"><p class="text-area">※ 看懂貓咪身體語言：叫聲、反應、尾巴20項觀察重</p></router-link>
                      <router-link class="link" to="/Suitable"><p class="text-area">※ 快速搖尾巴代表什麼？資深貓奴教你讀懂「貓語言」</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 一秒讀懂喵星人15種肢體語言，貓奴鏟屎官必看！</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓咪沒有語言的，只會對人類喵喵喵</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 喵星人「肢體語言」大公開！15個連貓奴都不知道的小秘密</p> </router-link>
                    </div>
                  </div>
                  <router-link class="link mmore text-end" to="/cafe"><h6 class="mmore">more...</h6> </router-link> 
                </div>
              </div>

              


            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Footer from "../HomeFooter.vue";

export default {
    components: {
      Footer,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};

</script>

<style>
button.allaboutBtn {
    font-size: 0.8rem;
    
  height: 30px;
  border-radius: 14px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
button.allaboutBtn:hover {
  border: 1px solid #ff835b;
  background-color: #ffb33a;
}
.allaboutcatcard{
  overflow:hidden;
  width: 18rem;
  height: 24rem;
  background-size: 100%;
  background-repeat: no-repeat;
  border: #ffb33a solid 2px;
  border-radius: 20px;
}
.card-body .text-area{
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.bbody{
  overflow:hidden;
  height: 22rem;
}
.mmore{
  margin-right: 20px;
}
.allaboutcatcard1{
  background-image: url(../../assets/新手養貓.png);
}
.allaboutcatcard2{
  background-image: url(../../assets/多貓家庭.png);
}
.allaboutcatcard3{
  background-image: url(../../assets/老貓須知.png);
}
.allaboutcatcard4{
  background-image: url(../../assets/貓咪語言.png);
}
.allaboutcatcard .card-body{
  margin-top: 11rem;
}
.link {
  color: black;
  text-decoration: none;
}
.link h4{
  color: #4a443e;
  text-decoration: none;
}
.link h6{
  color: #ffb33a;
  text-decoration: none;
}
.link:hover {
  color: #F59246;
  text-decoration: none;
}
</style>