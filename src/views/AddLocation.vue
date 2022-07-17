<template>
  <Navbar></Navbar>
  <div class="container inner">
    <p class="m-3"><strong>新增地址 :</strong></p>
    <div class="container-fluid">
      <div class="d-flex text-center">
        <div class="label">地址</div>
        <div><input class="input" type="text" placeholder="請輸入地址" /></div>
      </div>
      <div class="d-flex text-center mt-3">
        <div class="label">樓層</div>
        <div>
          <input class="input" type="text" placeholder="請輸入樓層(非必填)" />
        </div>
      </div>
      <div class="d-flex text-center mt-3">
        <div class="label">行政區</div>
        <div>
          <input class="input" type="text" placeholder="請輸入行政區" />
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <button class="addLocationBtn"><strong>建立地址</strong></button>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/CatNavbar.vue";
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.inner {
  margin-left: 20%;
  width: 90%;
}
.label {
  width: 25%;
}
.input {
  border: 1px solid #f69146;
  border-radius: 10px;
}
.addLocationBtn {
  width: 75%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
.addLocationBtn:hover {
  background-color: #ffb33a;
  color: #fff;
}
</style>
