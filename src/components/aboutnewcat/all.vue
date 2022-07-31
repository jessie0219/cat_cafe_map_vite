<template>
<!-- <h4 class="position-absolute">養貓前</h4> -->
  <Navbar></Navbar>
    <div class="container">
    <div class="d-flex justify-content-center">
        <div class="row">
            <div class="col-md-4">

                <div class="mt-4">
                <router-link class="link text-center" to="/newcatnav"><h4 class="card-title">養貓前</h4></router-link>
                <div class="allaboutcatcard allaboutcatcard2" >
                  <div class="bbody">
                    <div class="card-body">
                      <router-link class="link" to="/newcatnav"><p class="text-area">※ 你適合養貓嗎？貓奴的自我評估</p> </router-link>
                      <router-link class="link" to="/newcatnav"><p class="text-area">※ 這十件事，養貓前你一定要知道！</p> </router-link>
                      <router-link class="link" to="/newcatnav"><p class="text-area">※ 品種貓vs米克斯？</p> </router-link>
                      <router-link class="link" to="/newcatnav"><p class="text-area">※ 養貓新手攻略-養貓前要準備的空間、環境配置和收納</p> </router-link>
                    </div>
                  </div>
                  <router-link class="link mmore text-end" to="/newcatnav"><h6 class="mmore">more...</h6> </router-link> 
                </div>
              </div>

              <div class="mt-4">
                <router-link class="link text-center" to="/cafe"><h4 class="card-title">養貓中</h4></router-link>
                <div class="allaboutcatcard allaboutcatcard2" >
                  <div class="bbody">
                    <div class="card-body">
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓咪肢體語言大揭密</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 乾糧、罐頭、零食、生食</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓咪玩具</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 洗澡、剪指甲、刷牙、餵藥</p> </router-link>
                    </div>
                  </div>
                  <router-link class="link mmore text-end" to="/cafe"><h6 class="mmore">more...</h6> </router-link> 
                </div>
              </div>

              <div class="mt-4">
                <router-link class="link text-center" to="/cafe"><h4 class="card-title">其他</h4></router-link>
                <div class="allaboutcatcard allaboutcatcard2" >
                  <div class="bbody">
                    <div class="card-body">
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓咪肢體語言大揭密</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 乾糧、罐頭、零食、生食</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 貓咪玩具</p> </router-link>
                      <router-link class="link" to="/cafe"><p class="text-area">※ 洗澡、剪指甲、刷牙、餵藥</p> </router-link>
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


export default {
    components: {
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
  color: #F59246;
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