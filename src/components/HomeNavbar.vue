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
          <!-- 會員 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              <img src="../assets/icon/member.png" alt="" />
            </router-link>
            <router-link class="nav-link" to="/map">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/member.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">會員</p>
              </div>
            </router-link>
          </li>
          <!-- 領養 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/adoption">
              <img src="../assets/icon/adoption1.png" alt="" />
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/map">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/adoption1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">領養</p>
              </div>
            </router-link>
          </li> -->
          <!-- 貓的二三事 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/map">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/catInfo1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">貓的兩三事</p>
              </div>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/map">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/myFavorite1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">我的最愛</p>
              </div>
            </router-link>
          </li> -->
          <!-- 限時團購 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/groupbuying">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/groupPurchase1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">限時團購</p>
              </div>
            </router-link>
          </li>

          <!-- 問題回報 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/discount">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/groupPurchase1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">限時折扣</p>
              </div>
            </router-link>
          </li>
          <br />
          <li class="nav-item">
            <router-link class="nav-link" to="/map">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/problemReport1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">問題回報</p>
              </div>
            </router-link>
          </li>
          <!-- 贊助 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/map">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/sponsor.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">贊助</p>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/map">
              <div class="d-flex justify-content-start align-items-center">
                <img src="../assets/icon/setup1.png" alt="" />
                <p class="h2 fw-bold mx-2 mt-2">設定</p>
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
