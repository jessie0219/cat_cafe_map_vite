<template>
  <div class="bar container-fluid mt-3">
    <div class="text-center">
      <span class="innerText"><strong>台北捷運</strong></span>
    </div>
  </div>
  <!-- <div class="container">
    <img
      src="https://blogger.googleusercontent.com/img/a/AVvXsEhJRBazmnQ_0yQln9G4BmYYvLVl1rS26HUTHWJVxuCC14kRcmosbcAqp7PHLqiVpzifNdyEd3tIYUNb8bQKyHXxeic-3-3GRWxIDBCcXImLXQXAljDbSydccAFTyJ4X457UZNZrzVvYMjemq-wnuO70cT1w_CohjB6d3sOjlyCN3nWlHN8dkfshfRHsvA"
      alt=""
    />
  </div> -->
  <div class="mt-2">
    <button class="mrtColor m-1"
      v-for="key in Object.keys(stations)"
      v-bind:key="key"
      @click="currentColor = key"
    >
      {{ key }}
    </button>
  </div>
   <router-link class="stationCafe" to="/catCafe" style="color: black">
    <ul v-if="stations[currentColor]" class="mt-2 p-0">
      <li v-for="station in stations[currentColor]" v-bind:key="station.name">
        <button 
        class="state"
        v-on:click="pushToPage({ lon: station.lon, lat: station.lat })">
          {{ station.zh_name }}
        </button>
      </li>
    </ul>
  </router-link>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firestore";

export default {
  data() {
    return {
      stations: {},
      currentColor: "BL",
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "mrt_list"));

    const result = {};
    querySnapshot.forEach((doc) => {
      const key = doc.id;
      const [zh_name, lat, lon, name] = doc.data()[key];
      const color = name.replace(/\d/g, "");
      if (!result[color]) {
        result[color] = [{ zh_name, lat, lon, name }];
      } else {
        result[color].push({ zh_name, lat, lon, name });
      }
    });

    this.stations = result;
  },
  methods:{
    setCurrentColor(color) {
      console.log(111);
    },
    pushToPage({ lon, lat })  {
      console.log(lon, lat);
    },
  },
  
};
</script>

<style scoped>
.bar {
  width: 100%;
  height: 30px;
  background-color: #f59246;
}
.innerText {
  padding: 3.5px;
  background-color: #fdebde;
}
img {
  width: 80%;
}
.stationCafe {
  text-decoration: none;
}
li{ 
   list-style: none;
}
.line:hover {
  background-color: #e5b362;
}
button.mrtColor{
  color: #0d0c0c;
  font-size: small;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid  #f59246;
  background-color:  #ffffff;;
}
button.mrtColor:focus{
  color: #ffffff;
  background-color:  #f59246;
}
.state {
  background-color: #fde5be;
    width: 100%;
    border-radius: 0px;
    border-color: #ffb881;
    border-width: 1px;
    padding: 7px;
}
</style>
