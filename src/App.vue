<template>
  <router-view />
  <HomeTop/>
  <!-- <HomeFooter/> -->
</template>

<script>
import HomeTop from "./components/homeTop.vue";
import HomeFooter from "./components/HomeFooter.vue";


export default {
    components: { HomeTop, HomeFooter }
};
</script>

<style >

</style>