<template>
 <Navbar></Navbar>
 <!-- 標題 -->
  <div class="container">  
    <div class="row">
      <div class="text-center mt-4 mb-1">
        <h3 class="adoptiontitle"><strong>全國公立收容所待收養貓咪</strong></h3>
      </div>

      <div class="col">
        <!-- 卡片 全國收容所待收養貓咪 -->
        <div class="card border-warning" style="width: 20rem">
        <div class="card-header text-center">
             新北市
        </div>
          <br>
          <img src="../assets/新北市五股區公立動物之家.jpg" class="" alt="新北市五股區公立動物之家" style="height:20%">
          <br>
          <div class="card-footer text-muted">
              <ul>
                <li>品種：混種貓</li>
                <li>性別：公</li>
                <li>來源：五股區公立動物之家</li>
              </ul> 
          </div>
        </div>
      </div>

      <!-- <div class="col">
        <div class="card border-warning" style="width: 20rem">
          <div class="card-body">
            <h5 class="caption text-center">新北市五股區公立動物之家</h5>  
          </div>
          <img src="../assets/新北市五股區公立動物之家.jpg" class="" alt="新北市五股區公立動物之家" style="height:20%">
          <br>
          <div class="text-center">
            <strong>
              <router-link class="nav-link" to="/AdoptionOverview" >查看更多</router-link>
            </strong>
          </div>
        <br>
        </div>
      </div> -->
    </div>
  </div>
  <br>
  <br>
</template>

<script>
import Navbar from "../components/CatNavbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
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
.nav-link {
  color: rgb(245, 146, 70);
}
.nav-link:hover {
  color: rgb(255, 111, 0);
}
.card {
  display:block;
  margin:auto;
  background-color: rgb(255, 255, 255);
}
.card-header{
  background-color: rgba(255, 213, 146, 1);
}
.card-footer{
  background-color: rgba(255, 213, 146, 1);

}
.card-body{
  background-color: rgba(255, 213, 146, 1);
}
li{
  color: rgb(0, 0, 0);
}
img{
  display:block;
  margin:  auto;
  height: 50px;
  width: 95%;
}
.btn-primary {
    color: #fff;
    background-color: rgb(245, 146, 70);
    border-color: rgb(245, 146, 70);
}
.btn-primary:hover {
    color: rgb(0, 0, 0);
    background-color: rgba(255, 213, 146, 1);
    border-color: rgba(255, 213, 146, 1);
}
.btn-primary:focus {
    box-shadow: 0 0 0 0.25rem rgb(255, 193, 145);
}
</style>
