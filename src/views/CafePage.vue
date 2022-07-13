<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <div class="mt-4 text-center">
        <button class="SelectBtn mx-2 px-2"><strong>可帶寵物</strong></button>
        <button class="SelectBtn mx-2 px-2"><strong>有正餐</strong></button>
        <button class="SelectBtn mx-2 px-2"><strong>親子</strong></button>
        <button class="SelectBtn mx-2 px-2"><strong>中途</strong></button>
      </div>
      <div class="mt-4 container text-center">
        <img src="https://fakeimg.pl/500x500/" />
      </div>
    </div>
    <div class="mt-4 container text-center">
      <span class="mx-2"
        ><i class="fa-regular fa-heart text-danger"></i>加入我的最愛</span
      >
      <span class="mx-2"
        ><i class="fa-solid fa-share-nodes text-primary"></i>分享</span
      >
      <br />
      <span class="mx-2"
        ><i class="fa-solid fa-location-dot text-success"></i>Google Map</span
      ><span class="mx-2">距離900公尺</span>
      <br />
      <span class="mx-2"
        ><i style="color: #f69246" class="fa-solid fa-phone"></i
        >0800-092-000</span
      ><span class="mx-2">不須事先預約</span>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <div>
        <div class="drop-shadow d-flex circle mx-4 justify-content-center">
          <div class="align-self-center">餐廳</div>
        </div>
        <div class="justify-content-center mt-3">
          <div class="text-center">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div>
        <div class="drop-shadow d-flex circle mx-4 justify-content-center">
          <div class="align-self-center">環境</div>
        </div>
        <div class="justify-content-center mt-3">
          <div class="text-center">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star-half-stroke"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="news container mt-4 text-center d-flex justify-content-center">
      <div class="InnerText align-self-center">店家公告/最新消息</div>
    </div>
    <div
      class="container flex-column mt-4 text-center d-flex justify-content-center"
    >
      <div class="InnerText align-self-center">
        店家資訊
        <div class="content">
          <div class="mt-3">
            <div>
              <h4><strong>營業時間</strong></h4>
              <h6>周一~周日(無休) 中午十二點~晚上九點</h6>
              <h4><strong>採「時機制」計費</strong></h4>
              <h6>10分鐘40元<br />以10分鐘為單位<br />90分鐘以上不再加價</h6>
              <br />
              <h6>無低消壓力，不強迫點餐飲 !</h6>
              <br />
              <h6>飲料100元喝到飽</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/CatNavbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
button.SelectBtn {
  font-size: 0.8rem;
  height: 30px;
  border-radius: 14px;
  border: 1px solid #ff835b;
  background-color: #ffd592;
}
.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 3rem;
  font-weight: bold;
  background-color: #ffd592;
}
.drop-shadow {
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
}
.fa-star,
.fa-star-half-stroke {
  color: #ffb629;
  font-size: 30px;
}
.InnerText {
  font-weight: bolder;
  width: 75%;
  height: 40px;
  background-color: #ffd592;
}
.content {
  width: 100%;
  border: #ffd592 solid 2px;
}
</style>
