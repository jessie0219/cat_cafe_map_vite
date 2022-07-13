<template>
  <div class="bar container-fluid mt-3">
    <div class="text-center">
      <span class="innerText"><strong>BL 板南線</strong></span>
    </div>
  </div>
  <router-link class="stationCafe" to="/catCafe" style="color: black">
    <div class="line container mt-4">
      <div class="d-flex mt-2 justify-content-between">
        <div>
          <span class="state mt-2 px-3"><strong>BL</strong></span>
          <span class="stateName mt-2 px-3"><strong>南港展覽館</strong></span>
        </div>
        <div>
          <!-- <span class="stateName mt-2 px-3"><strong>3 間店</strong></span> -->
          <span class="stateName mt-2 px-3"
            ><strong><i class="fa-solid fa-angle-right"></i></strong
          ></span>
        </div>
      </div></div
  ></router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.bar {
  width: 100%;
  height: 30px;
  background-color: #0070bc;
}
.innerText {
  padding: 3.5px;
  background-color: #8cd1ff;
}
.line {
  border: #ffb33a solid 1px;
  background-color: #fff1dc;
  height: 50px;
}
.state {
  background-color: #66c1ff;
  width: 35px;
  border-radius: 5px;
}
.stationCafe {
  text-decoration: none;
}
.line:hover {
  background-color: #e5b362;
}
</style>
