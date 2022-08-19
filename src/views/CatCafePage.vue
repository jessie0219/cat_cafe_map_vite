<template>
  <Navbar></Navbar>
  <!-- 捷運>捷運站>顯示店家 -->
  <div class="container">
    <div class="row">
      <div class="mt-4 text-center">
        <button
          v-for="{ name, key } in filterList"
          v-bind:key="`filter-${key}`"
          v-on:click="filters[key] = !filters[key]"
          :class="`SelectBtn ${filters[key] ? 'active' : ''} mx-2 px-2`"
        >
          {{ name }}
        </button>
        <!-- <a v-if="!isShow" @click="toggle()">
          <button class="SelectBtn mx-2 px-2"><strong>全部</strong></button></a
        >
        <a v-if="isShow" @click="toggle()">
          <button class="SelectBtn2 mx-2 px-2"><strong>全部</strong></button></a
        >
        <a v-if="!isShow2" @click="toggle2()">
          <button class="SelectBtn mx-2 px-2"><strong>正餐</strong></button></a
        >
        <a v-if="isShow2" @click="toggle2()">
          <button class="SelectBtn2 mx-2 px-2"><strong>正餐</strong></button></a
        >
        <a v-if="!isShow3" @click="toggle3()">
          <button class="SelectBtn mx-2 px-2"><strong>點心</strong></button></a
        >
        <a v-if="isShow3" @click="toggle3()">
          <button class="SelectBtn2 mx-2 px-2"><strong>點心</strong></button></a
        >
        <a v-if="!isShow4" @click="toggle4()">
          <button class="SelectBtn mx-2 px-2"><strong>中途</strong></button></a
        >
        <a v-if="isShow4" @click="toggle4()">
          <button class="SelectBtn2 mx-2 px-2"><strong>中途</strong></button></a
        >
        <a v-if="!isShow5" @click="toggle5()">
          <button class="SelectBtn mx-2 px-2">
            <strong>寵物友善</strong>
          </button></a
        >
        <a v-if="isShow5" @click="toggle5()">
          <button class="SelectBtn2 mx-2 px-2">
            <strong>寵物友善</strong>
          </button></a
        > -->
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
                      src="../assets/Frame 1.png"
                      class="card-img-top"
                      alt="catCafe"
                    />
                  </div>
                  <div class="list-group list-group-flush">
                    <div class="container">
                      <div>
                        FUFUCat Cafe
                        <i class="fa-solid fa-star" style="color: #fba524"></i>
                        4.7(989)
                        <i
                          class="fa-regular fa-heart"
                          style="color: #ff0202"
                        ></i>
                      </div>
                      <div>
                        <!-- <button class="SelectedBtn mx-1">
                          <strong>中途</strong>
                        </button>
                        <button class="SelectedBtn mx-1">
                          <strong>寵物友善</strong>
                        </button> -->
                          <button class="SelectedBtn mx-1">
                        <strong>正餐</strong>
                      </button>
                        <button class="SelectedBtn mx-1">
                        <strong>點心</strong>
                      </button>
                      </div>
                      <div>
                        <i
                          class="fa-solid fa-location-dot mx-1"
                          style="color: #0fb800"
                        ></i>
                        <span>距離260公尺</span> <span>徒步3~5分鐘</span>
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
                    src="../assets/entry time.jpg"
                    class="card-img-top"
                    alt="catCafe"
                  />
                </div>
                <div class="list-group list-group-flush">
                  <div class="container">
                    <div>
                      早初entry time
                      <i class="fa-solid fa-star" style="color: #fba524"></i>
                      4.8(989)
                      <i class="fa-regular fa-heart" style="color: #ff0202"></i>
                    </div>
                    <div>
                      <!-- <button class="SelectedBtn mx-1">
                        <strong>中途</strong>
                      </button> -->
                      <button class="SelectedBtn mx-1">
                        <strong>寵物友善</strong>
                      </button>
                       <button class="SelectedBtn mx-1">
                        <strong>正餐</strong>
                      </button>
                        <button class="SelectedBtn mx-1">
                        <strong>點心</strong>
                      </button>
                    </div>
                    <div>
                      <i
                        class="fa-solid fa-location-dot mx-1"
                        style="color: #0fb800"
                      ></i>
                      <span>距離600公尺</span> <span>徒步8~9分鐘</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="mt-3">
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
            </div> -->
            <!-- 上面先寫死，接api後可以刪除留template -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-is="changeView"></div>
</template>

<script>
import Navbar from "../components/CatNavbar.vue";
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firestore";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      filters: { meal: false, adoption: false },
      filterList: [
        { name: "正餐", key: "meal" },
        { name: "中途", key: "adoption" },
      ],
 
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "store_list"));

    const result = {};
    querySnapshot.forEach((doc) => {
      const key = doc.id;
      // const stores = doc.data()[ "name", "address", "weekday_text" ];
      const address = doc.data()["address"];
      const name = doc.data()["name"];
      const weekday_text = doc.data()["weekday_text"];
console.log(address,name,weekday_text)
    });

    // this.stores = result;
  },
  methods: {

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
  border-radius: 5px;
}
.catCafe img {
  width: 100%;
  height: 250px;
  /* border-radius: 20px; */
}
.link {
  color: black;
  text-decoration: none;
}
</style>
