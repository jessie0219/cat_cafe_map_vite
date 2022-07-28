<template>
  <Navbar></Navbar>
  <div class="container-fluid home-scroll mt-5 mb-5">
    <router-link to="/map">
      <span class="home-scroll-text d-flex">
        <img src="../assets/icon/search.png" alt="search" />
        <p>&nbsp;以地址或捷運<br />&nbsp;找到離你最近的貓貓</p>
      </span>
    </router-link>
  </div>

  <div class="container-fluid d-flex justify-content-center">
    <div class="icon d-flex">
      <div class="adoption"></div>

      <div class="groupPurchase">
        <router-link class="nav-link" to="/groupbuying"></router-link>
      </div>
      <div class="favorite"></div>
      <div class="catInfo"></div>
    </div>
  </div>
  <div class="container-fluid d-flex justify-content-center">
    <div class="icon d-flex">
      <div class="addCafe mt-5 mb-5"></div>
    </div>
  </div>
  <div class="container">
    <p class="subtitle">獨家 貓咖好康</p>
  </div>
  <!-- 好康輪播discount -->
  <swiper :pagination="true" :modules="modules" class="mySwiper swiper1">
    <swiper-slide class="swiper-slide1"
      ><img src="../assets/icon/discount.png" alt="discount"
    /></swiper-slide>
    <swiper-slide class="swiper-slide1"
      ><img src="../assets/icon/discount.png" alt="discount"
    /></swiper-slide>
    <swiper-slide class="swiper-slide1"
      ><img src="../assets/icon/discount.png" alt="discount"
    /></swiper-slide>
    <swiper-slide class="swiper-slide1"
      ><img src="../assets/icon/discount.png" alt="discount"
    /></swiper-slide>
  </swiper>
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
  <div class="container">
    <p class="subtitle mt-5">獨家 限時特價</p>
  </div>
  <!-- 限時特價輪播timeLimit -->
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
    <swiper-slide class="swiper-slide3">
      <div class="timeLimit">
        <div class="card">
          <div class="card-title">
            <img src="../assets/icon/adoptThem.png" alt="限時特價商品" />
          </div>
          <span class="line"></span>
          <div class="card-txt">
            <div class="lh-1 text-center">
              <span class="title">【Monge】</span>
            </div>
            <div class="lh-sm">
              <span class="product text-nowrap">天然五穀貓糧(1.5kg)</span><br />
              <span class="price">$1000</span><br />
              <span class="price">$800</span><br />
            </div>
            <div class="lh-1 text-center">
              <span class="title">6天 3:24</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide3">
      <div class="timeLimit">
        <div class="card">
          <div class="card-title">
            <img src="../assets/icon/adoptThem.png" alt="限時特價商品" />
          </div>
          <span class="line"></span>
          <div class="card-txt">
            <div class="lh-1 text-center">
              <span class="title">【Monge】</span>
            </div>
            <div class="lh-sm">
              <span class="product text-nowrap">天然五穀貓糧(1.5kg)</span><br />
              <span class="price">$1000</span><br />
              <span class="price">$800</span><br />
            </div>
            <div class="lh-1 text-center">
              <span class="title">6天 3:24</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide3">
      <div class="timeLimit">
        <div class="card">
          <div class="card-title">
            <img src="../assets/icon/adoptThem.png" alt="限時特價商品" />
          </div>
          <span class="line"></span>
          <div class="card-txt">
            <div class="lh-1 text-center">
              <span class="title">【Monge】</span>
            </div>
            <div class="lh-sm">
              <span class="product text-nowrap">天然五穀貓糧(1.5kg)</span><br />
              <span class="price">$1000</span><br />
              <span class="price">$800</span><br />
            </div>
            <div class="lh-1 text-center">
              <span class="title">6天 3:24</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide3">
      <div class="timeLimit">
        <div class="card">
          <div class="card-title">
            <img src="../assets/icon/adoptThem.png" alt="限時特價商品" />
          </div>
          <span class="line"></span>
          <div class="card-txt">
            <div class="lh-1 text-center">
              <span class="title">【Monge】</span>
            </div>
            <div class="lh-sm">
              <span class="product text-nowrap">天然五穀貓糧(1.5kg)</span><br />
              <span class="price">$1000</span><br />
              <span class="price">$800</span><br />
            </div>
            <div class="lh-1 text-center">
              <span class="title">6天 3:24</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <div class="container">
    <p class="more mt-1 text-end"><a href="">more...&nbsp;</a></p>
  </div>
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
};
</script>

<style scoped>
.home-scroll {
  background-image: url(../assets/icon/rectangle.png);
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
.adoption {
  background-image: url("../assets/icon/adoption.png");
  width: 53px;
  height: 65px;
}
.adoption:hover {
  background-image: url("../assets/icon/adoptionHover.png");
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
.catInfo {
  background-image: url("../assets/icon/catInfo.png");
  width: 53px;
  height: 65px;
  margin-left: 25px;
}
.catInfo:hover {
  background-image: url("../assets/icon/catInfoHover.png");
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
</style>
