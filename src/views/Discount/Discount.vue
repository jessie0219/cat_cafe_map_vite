<template>
  <catnavbar></catnavbar>
   <div class="container">
    <div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="d-flex justify-content-center px-2 h-100" v-for="item in discounts" :key="item.id">
                <router-link :to="{ name: 'discountdetail', params: { id: item.id }}" class="product-link">
                    <div class="card my-4 ">
                        <div class="px-0 img-hover-outer">
                            <img :src="item.imageUrl" class="card-img-top product-image " alt="折價詳情照片"
                                style="width:100%;">
                                <div class="img-hover-content">
                                    <p class="text-center">{{item.description}}<br>(點我看詳情)</p>
                                </div>
                        </div>   
                    </div>
                </router-link>
            </div>
        </div>        
</div>
</div>
</template>

<script>
import catnavbar from '/src/components/CatNavbar.vue'
export default {
components:{
    catnavbar
},

computed: {
  discounts: function(){
     return this.$store.state.discounts
  },
  },
}
</script>

<style scoped>
.card{
    width: 20rem;
    border: solid #f69246 2px !important;
    border-radius: 15px !important;
}

.card-text{
   font-size: 0.9rem;
   border-top: solid #f69246 2px;
}
.product-image{
    margin: 0 auto;
    border-radius: 15px;
}
.img-hover-outer{
    position: relative;
    width: 100%;
}
.img-hover-content:hover{
    opacity: 1;
    
}
.img-hover-content{
      opacity: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      font-size: 20px;
      width: 100%;
      height: 100%;
      top: 0;
      transition-duration: 0.3s;
}
a{
    text-decoration: none;
}
.product-link{
    text-decoration: none !important;
}
</style>