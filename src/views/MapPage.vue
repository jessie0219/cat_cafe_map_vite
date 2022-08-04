<template>
  <Navbar></Navbar>
  <div class="container buttonGroup">
    <div class="row">
      <div class="mt-4 mb-1"><strong>點選篩選</strong></div>
      <div>
        <button @click="customizeWindowEvent()" class="locationBtn mx-1">
          <strong>選擇位置</strong>
        </button>
        <div id="window-container">
          <div id="window-pop">
            <div class="window-content">
              <div class="innerContent container mt-4 text-start">
                <p><strong>請選擇位置</strong></p>
                <br />
                <input type="text" />
                <br />
                <button class="dialogBtn mt-5">
                  <strong>選擇位置</strong>
                </button>
                <br />
                <button class="dialogBtn mt-1">
                  <router-link class="routerLink" to="/addLocation"
                    ><strong>新增多個地址</strong></router-link
                  >
                </button>

                <br />
                <router-link to="/catCafeSelect">
                  <button class="dialogBtn mt-5">
                    <strong>送出</strong>
                  </button></router-link
                >
              </div>
            </div>
          </div>
        </div>

        <button
          @click="customizeWindowEventDistance()"
          class="distanceBtn mx-1"
        >
          <strong>距離</strong>
        </button>
        <div id="window-container-distance">
          <div id="window-pop-distance">
            <div class="window-content">
              <div class="innerDistanceContent container mt-4 text-start">
                <p><strong>請選擇距離 :</strong></p>
                <br />
                <div class="container d-flex justify-content-between">
                  <div class="col-4">
                    <button class="distance">
                      <strong>全部</strong>
                    </button>
                  </div>
                  <div class="col-4">
                    <button class="distance">
                      <strong>&lt;1KM</strong>
                    </button>
                  </div>
                  <div class="col-4 mx-2">
                    <button class="distance">
                      <strong>&lt;3KM</strong>
                    </button>
                  </div>
                </div>
                <div class="container d-flex justify-content-between mt-4">
                  <div class="col-4">
                    <button class="distance">
                      <strong>&lt;5KM</strong>
                    </button>
                  </div>
                  <div class="col-4">
                    <button class="distance">
                      <strong>&lt;10KM</strong>
                    </button>
                  </div>
                  <div class="col-4 mx-2">
                    <button class="distance">
                      <strong>&lt;20KM</strong>
                    </button>
                  </div>
                </div>

                <br />
                <div class="text-center">
                  <router-link to="/catCafeSelect">
                    <button class="distanceSendBtn mt-5">
                      <strong>送出</strong>
                    </button></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 mb-1"><strong>附近的貓咖</strong></div>
      <div class="d-flex justify-content-center">
        <div class="catCafe mx-1">
          <img src="../assets/icon/adoptThem.png" alt="" />
        </div>
        <div class="catCafe mx-1">
          <img src="../assets/icon/adoptThem.png" alt="" />
        </div>
        <div class="catCafe mx-1">
          <img src="../assets/icon/adoptThem.png" alt="" />
        </div>
        <!-- <div class="catCafe mx-1"></div>
        <div class="catCafe mx-1"></div> -->
      </div>
      <div class="mt-4">
        <a
          v-if="!isShow"
          type="submit"
          @click="
            tabChange(SelectLine);
            toggle();
          "
        >
          <button class="lineBtn mx-1"><strong>選擇捷運路線</strong></button></a
        >
        <a
          v-if="isShow"
          type="submit"
          @click="
            tabChange(SelectLine);
            toggle();
          "
        >
          <button class="lineBtnSelected mx-1">
            <strong>選擇捷運路線</strong>
          </button></a
        >
      </div>
      <!-- <div v-if="isShow" class="mt-4 d-flex justify-content-center">
        <a type="submit" @click="tabChange(BrownLine)"
          ><button class="BR mx-1">BR</button></a
        ><a type="submit" @click="tabChange(RedLine)"
          ><button class="R mx-1">R</button></a
        >
        <a type="submit" @click="tabChange(GreenLine)"
          ><button class="G mx-1">G</button></a
        ><a type="submit" @click="tabChange(OrangeLine)">
          <button class="O mx-1">O</button></a
        >
        <a type="submit" @click="tabChange(BlueLine)">
          <button class="BL mx-1">BL</button></a
        ><a type="submit" @click="tabChange(YellowLine)">
          <button class="Y mx-1">Y</button></a
        >
      </div> -->
    </div>
  </div>
  <div class="text-center">
    <div v-if="isShow" v-is="changeView"></div>
  </div>
  <homeTop></homeTop>
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

// components
import Navbar from "../components/CatNavbar.vue";
import SelectLine from "../components/Map/SelectLine.vue";
// import BlueLine from "../components/Map/BlueLine.vue";
// import BrownLine from "../components/Map/BrownLine.vue";
// import RedLine from "../components/Map/RedLine.vue";
// import GreenLine from "../components/Map/GreenLine.vue";
// import OrangeLine from "../components/Map/OrangeLine.vue";
// import YellowLine from "../components/Map/YellowLine.vue";
import homeTop from "../components/homeTop.vue";

export default {
  components: {
    Navbar,
    SelectLine,
    // BlueLine,
    // BrownLine,
    // RedLine,
    // GreenLine,
    // OrangeLine,
    // YellowLine,
    Swiper,
    SwiperSlide,
    homeTop,
  },
  data() {
    return {
      isShow: false,
      SelectLine: SelectLine,
      // BlueLine: BlueLine,
      // BrownLine: BrownLine,
      // RedLine: RedLine,
      // GreenLine: GreenLine,
      // OrangeLine: OrangeLine,
      // YellowLine: YellowLine,
      changeView: SelectLine,
    };
  },
  methods: {
    tabChange(tabItem) {
      this.changeView = tabItem;
    },
    toggle() {
      this.isShow = !this.isShow;
    },
    customizeWindowEvent() {
      var popup_window = document.getElementById("window-container");

      popup_window.style.display = "block";

      window.onclick = function close(e) {
        if (e.target == popup_window) {
          popup_window.style.display = "none";
        }
      };
    },
    customizeWindowEventDistance() {
      var popup_window = document.getElementById("window-container-distance");

      popup_window.style.display = "block";

      window.onclick = function close(e) {
        if (e.target == popup_window) {
          popup_window.style.display = "none";
        }
      };
    },
  },
  mounted() {},
};
</script>

<style scoped>
.buttonGroup input {
  width: 100%;
  border: #f69146 2px solid;
  border-radius: 14px;
}
.buttonGroup .dialogBtn {
  width: 100%;
  border-radius: 14px;
  border: 1px solid #ffead9;
  background-color: #ffead9;
}
.buttonGroup .dialogBtn:hover {
  background-color: #ffb33a;
  color: #fff;
}
button.locationBtn {
  width: 120px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
button.locationBtn:hover {
  background-color: #ffb33a;
  color: #fff;
}
button.distanceBtn {
  width: 120px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
button.distanceBtn:hover {
  background-color: #ffb33a;
  color: #fff;
}
/* .catCafe {
  width: 100px;
  height: 100px;
  margin: 0;
  padding: 0;
  border-radius: 20px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
} */
img.catCafe {
  width: 100%;
  height: 100%;
}
button.lineBtn {
  width: 150px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
button.lineBtn:hover {
  background-color: #ffb33a;
}
/* button.lineBtn:focus {
  border: 1px solid #ff9d00;
  background-color: #ffb33a;
} */
button.lineBtnSelected {
  width: 150px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid #ff9d00;
  background-color: #ffb33a;
}

button.BR {
  color: #c38c31;
  font-size: small;
  width: 12vw;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #c38c31;
  background-color: #ffffff00;
}
button.BR:focus {
  color: #ffffff;
  background-color: #c38c31;
}
button.BR a {
  color: #c38c31;
}
button.R {
  color: #e3002d;
  font-size: small;
  width: 12vw;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #e3002d;
  background-color: #ffffff00;
}
button.R:focus {
  color: #ffffff;
  background-color: #e3002d;
}
button.R a {
  color: #e3002d;
}
button.G {
  color: #018659;
  font-size: small;
  width: 12vw;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #018659;
  background-color: #ffffff00;
}
button.G:focus {
  color: #ffffff;
  background-color: #018659;
}
button.G a {
  color: #018659;
}
button.O {
  color: #f8b51c;
  font-size: small;
  width: 12vw;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #f8b51c;
  background-color: #ffffff00;
}
button.O:focus {
  color: #ffffff;
  background-color: #f8b51c;
}
button.O a {
  color: #f8b51c;
}
button.BL {
  color: #0070bc;
  font-size: small;
  width: 12vw;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #0070bc;
  background-color: #ffffff00;
}
button.BL:focus {
  color: #ffffff;
  background-color: #0070bc;
}
button.BL a {
  color: #0070bc;
}
button.Y {
  color: #ffe707;
  font-size: small;
  width: 12vw;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ffe707;
  background-color: #ffffff00;
}
button.Y:focus {
  color: #ffffff;
  background-color: #ffe707;
}
button.Y a {
  color: #ffe707;
}
/* 選擇地址-彈出視窗 */
#window-container {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

#window-pop {
  background: white;
  width: 40%;
  height: 50%;
  z-index: 200;
  margin: 25% auto;
  overflow: auto;
  border-radius: 20px;
}
.window-content {
  width: auto;
  height: 100%;
  line-height: 200px;
  overflow: auto;
  text-align: center;
}

.window-content .innerContent {
  display: inline-block;
  vertical-align: middle;
  width: 80vw;
  height: auto;
  line-height: 100%;
}
.window-content input {
  line-height: 30px;
}
.dialogBtn {
  line-height: 30px;
}
.routerLink {
  text-decoration: none;
  color: black;
}
.routerLink:hover {
  color: #fff;
}
/* 距離-彈出視窗 */
#window-container-distance {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

#window-pop {
  background: white;
  width: 80%;
  height: 50%;
  z-index: 100;
  margin: 25% auto;
  overflow: auto;
  border-radius: 20px;
}
.window-content {
  width: auto;
  height: 100%;
  line-height: 200px;
  overflow: auto;
  text-align: center;
}

/* .window-content .innerContent {
  display: inline-block;
  vertical-align: middle;
  line-height: 100%;
} */
.window-content input {
  line-height: 30px;
}
.dialogBtn {
  line-height: 30px;
}
.routerLink {
  text-decoration: none;
  color: black;
}
.routerLink:hover {
  color: #fff;
}
button.distance {
  padding: 5px;
  width: auto;
  font-size: 0.8rem;
  border-radius: 14px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
button.distance:focus {
  background-color: #ffb33a;
  color: #fff;
}
.window-content .innerDistanceContent {
  display: inline-block;
  vertical-align: middle;
  line-height: 100%;
}
#window-pop-distance {
  background: white;
  width: 80%;
  height: 50%;
  z-index: 100;
  margin: 25% auto;
  overflow: auto;
  border-radius: 20px;
}
.distanceSendBtn {
  line-height: 40px;
  width: 80%;
  border-radius: 15px;
  border: 1px solid #ffead9;
  background-color: #ffead9;
}
.distanceSendBtn:hover {
  color: #fff;
  background-color: #ffb33a;
}

.mySwiper {
  z-index: -1;
}
</style>
