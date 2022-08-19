<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid nav">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/member.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">會員</p>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AdoptionPage">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/adoption-1-1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">領養</p>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/allaboutcatnav">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/catInfo-1-1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">貓的兩三事</p>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/myFavorite1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">我的最愛</p>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/groupbuying">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/groupPurchase1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">團購商品</p>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/discount">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/sale.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">限時折扣</p>
              </div>
            </router-link>
          </li>
          
       
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/problemReport1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">問題回報</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  background: rgb(246, 146, 70);
  box-shadow: 0px 1px 3px #00000088;
  padding: 4px;
}
nav {
  padding: 0;
}
.navbar-nav li {
  text-align: center;
  margin-left: 100px;
}
.navbar-nav li p:hover {
  color: rgba(255, 232, 204, 0.848);
}
</style>