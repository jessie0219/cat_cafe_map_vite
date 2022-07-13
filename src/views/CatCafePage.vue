<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <div class="mt-4 text-center">
        <button class="SelectBtn mx-2 px-2"><strong>全部</strong></button>
        <button class="SelectBtn mx-2 px-2"><strong>正餐</strong></button>
        <button class="SelectBtn mx-2 px-2"><strong>點心</strong></button>
        <button class="SelectBtn mx-2 px-2"><strong>中途</strong></button>
        <button class="SelectBtn mx-2 px-2">
          <strong>寵物友善</strong>
        </button>
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
  border: 1px solid #ffb33a;
  background-color: rgba(255, 255, 255, 0);
}
button.SelectBtn:hover {
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
</style>
