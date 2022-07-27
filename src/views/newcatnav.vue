<template>
  <Navbar></Navbar>
    <div class="container">
        <div class="row mt-4 text-center d-flex">

          <div class="mt-4">
            <a type="submit" @click="tabChange(all)"><button class="allaboutBtn mx-2 px-2">全部</button></a>
            <a type="submit" @click="tabChange(before)"><button class="allaboutBtn mx-2 px-2">養貓前</button></a>
            <a type="submit" @click="tabChange(after)"><button class="allaboutBtn mx-2 px-2">養貓中</button></a>
            <a type="submit" @click="tabChange(other)"><button class="allaboutBtn mx-2 px-2">其他</button></a>
          </div>

        </div>

          <div class="">
            <div v-is="changeView"></div>
          </div>

    </div>
</template>

<script>
import Navbar from "../components/CatNavbar.vue";
import all from "../components/aboutnewcat/all.vue";
import before from "../components/aboutnewcat/before.vue";
import after from "../components/aboutnewcat/after.vue";
import other from "../components/aboutnewcat/other.vue";


export default {
    components: {
    Navbar,
    all,
    before,
    after,
    other,
  },
  data() {
    return {
      all: all,
      before: before,
      after: after,
      other: other,
      changeView: all,
    };
  },
  methods: {
    tabChange(tabItem) {
      this.changeView = tabItem;
    },
  },
};

</script>

<style>
button.allaboutBtn {
    font-size: 0.8rem;
  
  height: 30px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
  
}
button.allaboutBtn:hover {
  border: 1px solid #ff835b;
  background-color: #ffb33a;
}

.allaboutcatcard{
  border: #ffb33a solid 2px;
  border-radius: 20px;
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