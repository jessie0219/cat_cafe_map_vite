<template>
  <Navbar></Navbar>
    <div class="container">
        <div class="row mt-4 text-center justify-content-center">
          <div class="mt-4 col-9"><!-- mx-auto單個區塊水平居中 -->
            <a type="submit" @click="tabChange(allaboutcat)"><button class="allaboutBtn mx-2 px-2 ">全部</button></a>
            <a type="submit" @click="tabChange(newcat)"><button class="allaboutBtn mx-2 px-2">新手養貓</button></a>
            <a type="submit" @click="tabChange(muchcat)"><button class="allaboutBtn mx-2 px-2 ">多貓家庭</button></a>
            <a type="submit" @click="tabChange(oldcat)"><button class="allaboutBtn mx-2 px-2 ">老貓須知</button></a>
            <a type="submit" @click="tabChange(catsay)"><button class="allaboutBtn mx-2 px-2 ">貓咪語言</button></a>
          </div>

        </div>

          <div class="">
            <div v-is="changeView"></div>
          </div>

    </div>
</template>

<script>
import Navbar from "../components/HomeNavbar.vue";
import Footer from "../components/HomeFooter.vue";
import allaboutcat from "../components/aboutcatnav/allaboutcat.vue";
import newcat from "../components/aboutcatnav/newcat.vue";
import muchcat from "../components/aboutcatnav/muchcat.vue";
import oldcat from "../components/aboutcatnav/oldcat.vue";
import catsay from "../components/aboutcatnav/catsay.vue";

export default {
    components: {
    Navbar,
    Footer,
    allaboutcat,
    newcat,
    muchcat,
    oldcat,
    catsay,
  },
  data() {
    return {
      allaboutcat: allaboutcat,
      newcat: newcat,
      muchcat: muchcat,
      oldcat: oldcat,
      catsay: catsay,
      changeView: allaboutcat,
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
  margin: 5px;
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