<template>
  <catnavbar></catnavbar>
  <div class="">
    <div class="d-flex justify-content-between">
      <h3 class="mt-4 mb-0 mx-3 fw-bold"></h3>
    </div>
        <div class=" ">
            <div class="d-flex justify-content-center h-100">
            <div class="card my-4 border-0">
            <div class="px-0 d-flex justify-content-center">
                <img :src="discount.imageUrl" class="card-img-top product-img " alt="產品照片">
            </div>   
                    <div class="card-body product-content text-center fs-5">
                        <span class="card-title fw-bold">{{discount.description}}<br>{{discount.gift}}<br></span>
                        <span class="card-title fw-bold col-6"></span>
                    </div>
                    <!-- <div class="d-flex justify-content-center card-body product-content fs-5 ">
                      <div class="me-3">數量</div>
                      <diva class="me-3 border border-2 rounded px-3" type="button"
                      @click="removeFromCart(item.id)">-</diva>
                      <div class="me-3 border border-2 rounded px-5">{{cartItemsCount}}</div>
                      <diva class="me-3 border border-2 rounded px-3" type="button"
                      @click="incrementProductInventory">+</diva>
                    </div> -->
                    <div  class="d-flex justify-content-center">
                      <divatc class=" border border-2 add-to-cart text-center py-1" type="button">{{discount.btnText}}</divatc>
                    </div>
            </div>
    </div>
  </div>
</div>
</template>

<script>
import catnavbar from '/src/components/CatNavbar.vue'
export default {
data(){
    return{
        discount: this.$store.getters.discount(this.$route.params.id),
    }
},
components: {
    catnavbar
},
computed: {
  discounts: function(){
     return this.$store.state.discounts
  },
  },
name: 'discountdetail',
}
</script>

<style scoped>
.cart-outter{
  font-size: 1.8rem;
  position:relative;
}
.fa-cart-shopping{
  color: #f69246;
}
.fa-cart-shopping:hover{
  color: #e16a15;
  transition-duration: 0.3s;
}
.cartQuantity{
  margin-top: 3px;
  position:absolute;
  width: 20px;
  height: 20px;
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right:-9px;
  top:-8px;
  font-size: 0.5rem;
  background: #F2B58A;
}

.product-price{
    text-decoration:line-through;
    color:#b4b2b1
}
.product-sale{
    color: #ff0000 
}
.product-img{
  border: solid 1px;
  width:20rem
}

.ingredient-content{
  border: solid 1px #f69246;
  border-radius: 25px
}

divatc{
  background: #f69246;
}
divatc:hover{
  background-color:#e16a15;
    transition-duration: 0.3s;
}
diva:hover{
   background-color: #f69246;
    transition-duration: 0.3s;
}
.add-to-cart{
  width: 12rem;
  border-radius: 20px;
}
li{
    list-style: none;
}
</style>
