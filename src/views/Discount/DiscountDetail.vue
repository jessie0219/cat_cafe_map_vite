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
                <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjIRzXT3gRvAXgY8Wo13TRuNhGTu554hWsGyr3sc0efcfVmmkphmQN3m0_PVgZSAMbL1lKs0TqJJVgvzSnycql2bxZmbcIbZlG0zcfgMSZlpoCgWQ206LzKJNri9IQQg7LOX005-njuArmAdA2BiUsgEJLLFFvS8l4xQuIZ-OojWPtavUH-0EJVrsGoHA" class="card-img-top product-img " alt="產品照片"
                >
                <div class="d-flex">
                </div>
            </div>   
                    <div class="card-body product-content text-center fs-5">
                        <span class="card-title fw-bold">2022/07/15至2022/9/15，只要給予APP回饋<br>即送(僅其中一種，可自選)<br></span>
                        <ul class="text-center">
                        <li>「紐頓試用包」乙包</li>
                        <li>「皇家幼貓飼料試用包」乙包</li>
                        <li>「貓爾地夫經典肉泥試用包」乙包</li>
                        </ul>
                        
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
                      <divatc class=" border border-2 add-to-cart text-center py-1" type="button"
                      @click="addToCart">
                      立即填寫問券表單>>
                    </divatc>
                    </div>
           <productinfo></productinfo>
            </div>
    </div>
  </div>
</div>
</template>

<script>
import catnavbar from '/src/components/CatNavbar.vue'
export default {
components: {
    catnavbar
}
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
  width: 11rem;
  border-radius: 20px;
}
li{
    list-style: none;
}
</style>