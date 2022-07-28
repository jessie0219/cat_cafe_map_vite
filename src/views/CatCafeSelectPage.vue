<template>
  <Navbar></Navbar>
  <div class="container mt-4 text-center">
    <span><strong>點選篩選</strong> </span>
    <button class="LocationSelectBtn mx-2 px-2">
      <strong>選擇位置</strong>
    </button>
    <button class="LocationSelectBtn mx-2 px-2">
      <strong>&lt;10KM</strong>
    </button>
  </div>
  <div class="container">
    <div class="row">
      <div class="mt-2 text-center">
        <a v-if="!isShow" @click="toggle()">
          <button class="SelectBtn mt-2 mx-2 px-2">
            <strong>全部</strong>
          </button></a
        >
        <a v-if="isShow" @click="toggle()">
          <button class="SelectBtn2 mt-2 mx-2 px-2">
            <strong>全部</strong>
          </button></a
        >
        <a v-if="!isShow2" @click="toggle2()">
          <button class="SelectBtn mt-2 mx-2 px-2">
            <strong>正餐</strong>
          </button></a
        >
        <a v-if="isShow2" @click="toggle2()">
          <button class="SelectBtn2 mt-2 mx-2 px-2">
            <strong>正餐</strong>
          </button></a
        >
        <a v-if="!isShow3" @click="toggle3()">
          <button class="SelectBtn mt-2 mx-2 px-2">
            <strong>點心</strong>
          </button></a
        >
        <a v-if="isShow3" @click="toggle3()">
          <button class="SelectBtn2 mt-2 mx-2 px-2">
            <strong>點心</strong>
          </button></a
        >
        <a v-if="!isShow4" @click="toggle4()">
          <button class="SelectBtn mt-2 mx-2 px-2">
            <strong>中途</strong>
          </button></a
        >
        <a v-if="isShow4" @click="toggle4()">
          <button class="SelectBtn2 mt-2 mx-2 px-2">
            <strong>中途</strong>
          </button></a
        >
        <a v-if="!isShow5" @click="toggle5()">
          <button class="SelectBtn mt-2 mx-2 px-2">
            <strong>寵物友善</strong>
          </button></a
        >
        <a v-if="isShow5" @click="toggle5()">
          <button class="SelectBtn2 mt-2 mx-2 px-2">
            <strong>寵物友善</strong>
          </button></a
        >
      </div>
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-md-4">
            <!-- template -->

            <div class="mt-4">
              <router-link class="link" to="/cafe">
                <div class="catCafe card" style="width: 18rem">
                  <div class="text-center">
                    <img
                      src="https://fakeimg.pl/250x250/"
                      class="card-img-top"
                      alt="catCafe"
                    />
                  </div>
                  <div class="list-group list-group-flush">
                    <div class="container">
                      <div>
                        FUFUCat Cafe
                        <i class="fa-solid fa-star" style="color: #fba524"></i>
                        4.5(989)
                        <i
                          class="fa-regular fa-heart"
                          style="color: #ff0202"
                        ></i>
                      </div>
                      <div>
                        <button class="SelectedBtn mx-1">
                          <strong>中途</strong>
                        </button>
                        <button class="SelectedBtn mx-1">
                          <strong>寵物友善</strong>
                        </button>
                      </div>
                      <div>
                        <i
                          class="fa-solid fa-location-dot mx-1"
                          style="color: #0fb800"
                        ></i>
                        <span>距離90公尺</span> <span>徒步12~15分鐘</span>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>

            <!-- template -->
            <div class="mt-3">
              <div class="catCafe card" style="width: 18rem">
                <div class="text-center">
                  <img
                    src="https://fakeimg.pl/250x250/"
                    class="card-img-top"
                    alt="catCafe"
                  />
                </div>
                <div class="list-group list-group-flush">
                  <div class="container">
                    <div>
                      FUFUCat Cafe
                      <i class="fa-solid fa-star" style="color: #fba524"></i>
                      4.5(989)
                      <i class="fa-regular fa-heart" style="color: #ff0202"></i>
                    </div>
                    <div>
                      <button class="SelectedBtn mx-1">
                        <strong>中途</strong>
                      </button>
                      <button class="SelectedBtn mx-1">
                        <strong>寵物友善</strong>
                      </button>
                    </div>
                    <div>
                      <i
                        class="fa-solid fa-location-dot mx-1"
                        style="color: #0fb800"
                      ></i>
                      <span>距離90公尺</span> <span>徒步12~15分鐘</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <div class="catCafe card" style="width: 18rem">
                <div class="text-center">
                  <img
                    src="https://fakeimg.pl/250x250/"
                    class="card-img-top"
                    alt="catCafe"
                  />
                </div>
                <div class="list-group list-group-flush">
                  <div class="container">
                    <div>
                      FUFUCat Cafe
                      <i class="fa-solid fa-star" style="color: #fba524"></i>
                      4.5(989)
                      <i class="fa-regular fa-heart" style="color: #ff0202"></i>
                    </div>
                    <div>
                      <button class="SelectedBtn mx-1">
                        <strong>中途</strong>
                      </button>
                      <button class="SelectedBtn mx-1">
                        <strong>寵物友善</strong>
                      </button>
                    </div>
                    <div>
                      <i
                        class="fa-solid fa-location-dot mx-1"
                        style="color: #0fb800"
                      ></i>
                      <span>距離90公尺</span> <span>徒步12~15分鐘</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <div class="catCafe card" style="width: 18rem">
                <div class="text-center">
                  <img
                    src="https://fakeimg.pl/250x250/"
                    class="card-img-top"
                    alt="catCafe"
                  />
                </div>
                <div class="list-group list-group-flush">
                  <div class="container">
                    <div>
                      FUFUCat Cafe
                      <i class="fa-solid fa-star" style="color: #fba524"></i>
                      4.5(989)
                      <i class="fa-regular fa-heart" style="color: #ff0202"></i>
                    </div>
                    <div>
                      <button class="SelectedBtn mx-1">
                        <strong>中途</strong>
                      </button>
                      <button class="SelectedBtn mx-1">
                        <strong>寵物友善</strong>
                      </button>
                    </div>
                    <div>
                      <i
                        class="fa-solid fa-location-dot mx-1"
                        style="color: #0fb800"
                      ></i>
                      <span>距離90公尺</span> <span>徒步12~15分鐘</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-is="changeView"></div>
</template>

<script>
import Navbar from "../components/CatNavbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      isShow: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    toggle2() {
      this.isShow2 = !this.isShow2;
    },
    toggle3() {
      this.isShow3 = !this.isShow3;
    },
    toggle4() {
      this.isShow4 = !this.isShow4;
    },
    toggle5() {
      this.isShow5 = !this.isShow5;
    },
  },
};
</script>

<style scoped>
button.SelectBtn {
  font-size: 0.8rem;
  height: 30px;
  border-radius: 14px;
  border: 1px solid #ffb33a;
  background-color: rgba(255, 255, 255, 0);
}
button.SelectBtn:hover {
  color: #fff;
  border: 1px solid #ff835b;
  background-color: #ffb33a;
}
button.SelectedBtn {
  font-size: 0.8rem;
  height: 30px;
  border-radius: 14px;
  border: 1px solid #ff9d7e;
  background-color: #ffd592;
}
button.SelectBtn2 {
  font-size: 0.8rem;
  height: 30px;
  color: #fff;
  border-radius: 14px;
  border: 1px solid #ff835b;
  background-color: #ffb33a;
}
.catCafe {
  border: #ffb33a solid 2px;
  border-radius: 20px;
}
.catCafe img {
  width: 80%;
  height: 250px;
  /* border-radius: 20px; */
}
.link {
  color: black;
  text-decoration: none;
}
.LocationSelectBtn {
  width: 30%;
  height: 100%;
  border-radius: 15px;
  border: #fba524 solid 1px;
  background-color: #fba524;
}
</style>
