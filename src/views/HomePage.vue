<template>
  <Navbar></Navbar>
  <div class="container-fluid home-scroll mt-5 mb-5">
    <router-link to="/map">
      <span class="home-scroll-text d-flex">
        <img src="../assets/icon/search.png" alt="search" />
        <h5>&nbsp;以地址或捷運<br />&nbsp;找到離你最近的貓咖</h5>
      </span>
    </router-link>
  </div>

  <div class="container-fluid d-flex justify-content-center">
    <div class="icon d-flex">
      <!-- 領養 -->
      <div class="adoption">
        <router-link class="nav-link" to="/AdoptionPage"></router-link>
      </div>
      <!-- 商品 -->
      <div class="groupPurchase">
        <router-link class="nav-link" to="/groupbuying"></router-link>
      </div>
      <!-- 我的最愛 -->
      <div class="favorite">
        <router-link class="nav-link" to="/favorite"></router-link>
      </div>
      <!-- 貓的二三事 -->
      <div class="catInfo">
        <router-link class="nav-link" to="/allaboutcatnav"></router-link>
      </div>
    </div>
  </div>
  <!-- 使用者新增店家 -->
  <div class="container-fluid d-flex justify-content-center">
    <div class="icon d-flex">
      <div class="addCafe mt-5 mb-5">
        <router-link class="nav-link" to="/addStore"></router-link>
      </div>
    </div>
  </div>
  <!-- 優惠活動輪播器 -->
  <div class="container">
    <p class="subtitle">獨家 貓咖好康</p>
  </div>
  <!-- 好康輪播discount -->
  <router-link to="/discount">
  <swiper :pagination="true" :modules="modules" class="mySwiper swiper1">
    <swiper-slide class="swiper-slide1"
      ><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhRQGzeNbYO5EAkafgDn7QRbaWNe-tJskOMm7EEYYghapS40rNxmM5wVNEvkQMnncZSVfpgwxGtZZWdTFqgubLcZawRDH1YcD3jDnYrsSrilAs0cC6kG1paXUqhSzl8aqS_uNbR0VXkakm7_WXk5t95wtXr02nBM9UvCOfzx3HGOyFC2rmJ9mK-JCd6Dw" alt="discount"
    /></swiper-slide>
    <swiper-slide class="swiper-slide1"
      ><img src="https://blogger.googleusercontent.com/img/a/AVvXsEj8l4sOQe1BdFHukDJq3xIZq3Nfad8X1z5Aotdj9hNJLKvHm5QeLYst5FNSqcPyBK-NwjeLfZS8ZnMfOBEMo_63XjQkL99KcvVWkkLNs0WBQC1rs5clM8NwajfFeXHVtKm3_fV_pabt-xHtmRxDbNfpSqaFa9Ug79LBxk8lrzZ7DFkDHGiud9nkVrJ_WA" alt="discount"
    /></swiper-slide>
    <swiper-slide class="swiper-slide1"
      ><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgmviWGJIajKmQW1PWP0CtB0yNzevMCeEJdv8jXXQrNpBSs22sGw0o4UOCDH2WxcoXzSTgRJtXFIc5eh_dzuQpqL8HOtTJMBvRkI5uNzg7isaxiFlUHEKXgeyOH6Sv-XjbfFhAh3BneHv8j1VS1hxs47c6PcCde2_5zfIfRmh7gAkn2eFbPLcSTFr6taQ" alt="discount"
    /></swiper-slide>
  </swiper>
  </router-link>
  <!-- 政府領養平台 -->
  <div class="container">
    <p class="subtitle mt-5">領養他們</p>
  </div>
  <!-- 領養他們輪播adoptThem -->
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper swiper2"
  >
  <!-- img需要串api -->
    <swiper-slide class="swiper-slide2"
      ><img src="../assets/icon/adoptThem.png" alt="adoptThem"
    /></swiper-slide>
    <swiper-slide class="swiper-slide2"
      ><img src="../assets/icon/adoptThem.png" alt="adoptThem"
    /></swiper-slide>
    <swiper-slide class="swiper-slide2"
      ><img src="../assets/icon/adoptThem.png" alt="adoptThem"
    /></swiper-slide>
    <swiper-slide class="swiper-slide2"
      ><img src="../assets/icon/adoptThem.png" alt="adoptThem"
    /></swiper-slide>
    <swiper-slide class="swiper-slide2"
      ><img src="../assets/icon/adoptThem.png" alt="adoptThem"
    /></swiper-slide>
    <swiper-slide class="swiper-slide2"
      ><img src="../assets/icon/adoptThem.png" alt="adoptThem"
    /></swiper-slide>
    <swiper-slide class="swiper-slide2"
      ><img src="../assets/icon/adoptThem.png" alt="adoptThem"
    /></swiper-slide>
    <swiper-slide class="swiper-slide2"
      ><img src="../assets/icon/adoptThem.png" alt="adoptThem"
    /></swiper-slide>
  </swiper>
  <!-- 團購輪播器 -->
  <div class="container">
    <p class="subtitle mt-5">獨家 限時特價</p>
  </div>
  <!-- 限時特價輪播timeLimit -->
  <router-link to="/groupbuying">
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper swiper3"
  >
    <swiper-slide class="swiper-slide3" v-for="product in products" :key="product.id">
      <div class="timeLimit d-flex">
        <div class="card " >
          <div class="card-title">
            <img :src="product.imageUrl" class="card-img-top product-img " alt="產品照片">
          </div>
          <span class="line"></span>
          <router-link :to="{ name: 'product', params: { id: product.id }}" class="product-link text-dark">
            <div class="card-txt">
              <div class="lh-1 text-center">
                <span class="title">{{product.brand}}</span>
              </div>
              <div class="lh-sm">
                <span class="product text-nowrap">{{product.description}}</span><br />
                <span class="product-price">NT${{product.price}}</span><br />
                <span class="product-sale">NT${{product.sale}}</span><br />
              </div>
              <div class="lh-1 text-center">
                <span class="title">{{product.time}}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </swiper-slide>
    
  </swiper>
  
  <div class="container">
    <p class="more mt-1 text-end"><a href="">more...&nbsp;</a></p>
  </div>
  </router-link>
  <homeTop></homeTop>
  <Footer></Footer>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../homeStyle/discount.css";
import "../homeStyle/adoptThem.css";
import "../homeStyle/timeLimit.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

import Navbar from "../components/HomeNavbar.vue";
import Footer from "../components/HomeFooter.vue";
import homeTop from "../components/homeTop.vue";
export default {
  components: {
    Navbar,
    Footer,
    Swiper,
    SwiperSlide,
    homeTop,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
  computed: {
  products: function(){
     return this.$store.state.products
  },
}
};
</script>

<style scoped>
.home-scroll {
  background-image: url(../assets/icon/map.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 258px;
  height: 174px;
}
.home-scroll a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}
.home-scroll img {
  width: 36px;
  height: 36px;
}
/* 領養 團購 我的最愛 貓資訊icon */

/* 領養 */
.adoption {
  background-image: url("../assets/icon/adoption-1.png");
  width: 53px;
  height: 65px;
}
.adoption:hover {
  background-image: url("../assets/icon/adoptionHover-1.png");
}
.groupPurchase {
  background-image: url("../assets/icon/groupPurchase.png");
  width: 53px;
  height: 65px;
  margin-left: 25px;
}
.groupPurchase:hover {
  background-image: url("../assets/icon/groupPurchaseHover.png");
}
.favorite {
  background-image: url("../assets/icon/favorite.png");
  width: 53px;
  height: 65px;
  margin-left: 25px;
}
.favorite:hover {
  background-image: url("../assets/icon/favoriteHover.png");
}
/* catInfo貓的二三事 */
.catInfo {
  background-image: url("../assets/icon/catInfo-1.png");
  width: 53px;
  height: 65px;
  margin-left: 25px;
}
.catInfo:hover {
  background-image: url("../assets/icon/catInfoHover-1.png");
}
.addCafe {
  background-image: url("../assets/icon/addCafe.png");
  width: 267px;
  height: 53px;
}
.addCafe:hover {
  background-image: url("../assets/icon/addCafeHover.png");
}
.more a {
  color: black;
  text-decoration: none;
}
.product-link{
    text-decoration: none !important;
}
.product-price{
    text-decoration:line-through;
    color:#b4b2b1
}
.product-sale{
    color: #ff0000 
}
</style>
