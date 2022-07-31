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
          </li>
          <!-- 領養 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/adoption">
              <img src="../assets/icon/adoption1.png" alt="" />
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/map">
              <img src="../assets/icon/adoption1.png" alt="" />
            </router-link>
          </li> -->
          <!-- 貓的二三事 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/allaboutcatnav">
              <img src="../assets/icon/catInfo1.png" alt="" />
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/map">
              <img src="../assets/icon/myFavorite1.png" alt="" />
            </router-link>
          </li> -->
          <!-- 限時團購 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/groupbuying">
              <img src="../assets/icon/groupPurchase1.png" alt="" />
            </router-link>
          </li>

          <!-- 問題回報 -->
          <li class="nav-item">
            <router-link class="nav-link" to="/discount">
              <img src="../assets/icon/groupPurchase1.png" alt="" />
            </router-link>
          </li>
          <br />
          <li class="nav-item">
            <router-link class="nav-link" to="#">
              <img src="../assets/icon/problemReport1.png" alt="" />
            </router-link>
          </li>
          <!-- 贊助 -->
          <li class="nav-item">
            <router-link class="nav-link" to="#">
              <img src="../assets/icon/sponsor.png" alt="" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">
              <img src="../assets/icon/setup.png" alt="" />
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
}
.navbar-nav li:hover {
  background: rgba(255, 232, 204, 0.848);
  color: rgba(246, 146, 70, 0.664);
}
</style>
