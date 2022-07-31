<template>
  <Navbar></Navbar>

  <div class="container"> 
    <div class="row">
      <div class="text-center mt-4 mb-1">
        <h3 class="adoptiontitle"><strong>全國收容所待收養貓咪</strong></h3>
      </div>
      <div class="col">
        <!-- 卡片 全國收容所待收養貓咪 -->
        <div class="card border-warning" style="width: 20rem">
          <div class="card-body">
            <h5 class="caption text-center">全國收容所待收養貓咪</h5>  
          </div>
          <img src="../assets/20190425-4.jpg" class=" " alt="...">
          <br>
          <p class="text-center">我在 - 新北市五股區公立動物之家</p>
          <img src="../assets/新北市五股區公立動物之家.jpg" class="" alt="新北市五股區公立動物之家" style="height:20%">
          <br>
          <div class="text-center">
            <strong>
              <router-link class="nav-link" to="/adoptionall" >查看更多</router-link>
            </strong>
          </div>
          <br>
        </div>
      </div>
      <br>
      <br>
     
      
      <div class="text-center mt-4 mb-1">
        <h3 class="adoptiontitle"><strong>領養資訊平台</strong></h3>
      </div>

      <div class="col">
        <!-- 卡片 全國動物收容管理系統 -->
        <div class="card border-warning" style="width: 20rem">
          <div class="card-body">
            <h5 class="caption text-center">全國動物收容管理系統</h5>
            <p class="card-text">
              收容公告、動物認領養、寵物送養媒合、公立收容所，更多... 
            </p>
          </div>
          <img src="../assets/20190425-4.jpg" class=" " alt="...">
          <br>
          <div class="text-center">
            <a href="https://asms.coa.gov.tw/Amlapp/App/Default.aspx">
              <strong>立即前往</strong>
            </a>
          </div>
          <br>
        </div>
        
        <br>
        <!-- 卡片 Wepet 寵物資訊平台 -->
        <div class="card border-warning" style="width: 20rem">
          <div class="card-body">
            <h5 class="caption text-center">Wepet 寵物資訊平台</h5>

            <p class="card-text">
              Wepet 寵物資訊平台提供公立收容所之認養資料及
              寵物、浪浪與毛小孩們的送養、領養、認養、走失協尋、最後送別以及相關的資訊服務，所有訊息均免費刊登。 　
            </p>
          </div>
          <img src="../assets/swepet.tw.jpg" class="card-img-top" alt="..." />
          <br>
          <div class="text-center">
            <a href="https://wepet.tw/"><strong>立即前往</strong></a>
          </div>
          <br>
        </div>
        <br>

        <!-- 分隔線 -->
        <hr> 
        <!-- 流浪動物收容 -->
        <div>
           <div class="text-center mt-4 mb-1">
        <h3 class="adoptiontitle"><strong>流浪動物收容</strong></h3>
        </div>
        </div>
        <br>
        <!-- 卡片 Wepet 中華民國保護動物協會 -->
        <div class="card border-warning" style="width: 20rem">
          <div class="card-body">
            <h5 class="caption text-center">中華民國保護動物協會</h5>
            <p class="card-text">
              我們是台灣第一家動物保護團體成立於民國49年6月10日，迄今已有50餘年歷史。
              致力於宣導動物保護觀念，以及從事流浪動物收容工作，
              亦曾參與推動「中華民國野生動物保育法」與「中華民國動物保護法」立法的工作。 
            </p><div class="text-center">
            <a href="https://www.apatw.org/about"><strong>立即前往</strong></a>
          </div>
          </div>
          <img src="../assets/download.png" class="card-img-top" alt="..." />
          <br />
          
          <br />
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/CatNavbar.vue";
import AdoptionAll from "../views/AdoptionAll.vue";

export default {
  components: {
    Navbar,
    AdoptionAll,
  },
  data() {
    return {
      AdoptionAll: AdoptionAll,
    };
  },
  methods: {
    tabChange(tabItem) {
      this.changeView = tabItem;
    },
  },
};
</script>

<style scoped>
.adoptiontitle {
  color: rgb(245, 146, 70);
}
a {
  color: rgb(245, 146, 70);
}
a:hover {
  color: rgb(255, 111, 0);
}
button {
  text-emphasis-color: rgb(245, 146, 70);
  background-color: antiquewhite;
}
.caption {
  color: rgb(245, 146, 70);
}
.card {
  display:block;
  margin:auto;
  background-color: rgba(255, 251, 220, 1);
}
img{
  display:block;
  margin:auto;
  height: 100%;
  width: 95%;
}
hr{
  border:2px;
  color:rgb(255, 111, 0);
}
</style>
