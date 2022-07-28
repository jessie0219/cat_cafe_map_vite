<template>
  <catnavbar></catnavbar>
   <div class="container">
    <div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="d-flex justify-content-center px-2 h-100">
                <div class="card my-4 ">
                    <div class="px-0 img-hover-outer">
                        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjIRzXT3gRvAXgY8Wo13TRuNhGTu554hWsGyr3sc0efcfVmmkphmQN3m0_PVgZSAMbL1lKs0TqJJVgvzSnycql2bxZmbcIbZlG0zcfgMSZlpoCgWQ206LzKJNri9IQQg7LOX005-njuArmAdA2BiUsgEJLLFFvS8l4xQuIZ-OojWPtavUH-0EJVrsGoHA" class="card-img-top product-image " alt="折價詳情照片"
                            style="width:100%;">
                            <div class="img-hover-content">
                                <router-link to="/discountdetail" class="text-light">
                                <p class="text-center">給APP回饋，送神秘好禮>>立即填寫問卷調查<br>(點我看詳情)</p>
                                </router-link>
                            </div>
                    </div>   
                </div>
            </div>
            <div class="d-flex justify-content-center px-2 h-100">
                <div class="card my-4 ">
                    <div class="px-0 img-hover-outer">
                        <img src="https://tokukai.com/webuploadpic/g0HZnE_210803_rec50_1040.png" class="card-img-top product-image " alt="折價詳情照片"
                            style="width:100%;">
                            <div class="img-hover-content">
                                <router-link to="/discountdetail" class="text-light">
                                <p class="text-center">推薦好友，首次下單再折$30元。（不限團購商品或貓餐廳使用）<br>(點我看詳情)</p>
                                </router-link>
                            </div>
                    </div>   
                </div>
            </div>
            <div class="d-flex justify-content-center px-2 h-100">
                <div class="card my-4 ">
                    <div class="px-0 img-hover-outer">
                        <img src="https://tokukai.com/webuploadpic/g0HZnE_210803_rec50_1040.png" class="card-img-top product-image " alt="折價詳情照片"
                            style="width:100%;">
                            <div class="img-hover-content">
                                <router-link to="/discountdetail" class="text-light">
                                <p class="text-center">推薦好友，首次下單再折$30元。（不限團購商品或貓餐廳使用）<br>(點我看詳情)</p>
                                </router-link>
                            </div>
                    </div>   
                </div>
            </div>
            <div class="d-flex justify-content-center px-2 h-100">
                <div class="card my-4 ">
                    <div class="px-0 img-hover-outer">
                        <img src="https://tokukai.com/webuploadpic/g0HZnE_210803_rec50_1040.png" class="card-img-top product-image " alt="折價詳情照片"
                            style="width:100%;">
                            <div class="img-hover-content">
                                <router-link to="/discountdetail" class="text-light">
                                <p class="text-center">推薦好友，首次下單再折$30元。（不限團購商品或貓餐廳使用）<br>(點我看詳情)</p>
                                </router-link>
                            </div>
                    </div>   
                </div>
            </div>
            <div class="d-flex justify-content-center px-2 h-100">
                <div class="card my-4 ">
                    <div class="px-0 img-hover-outer">
                        <img src="https://tokukai.com/webuploadpic/g0HZnE_210803_rec50_1040.png" class="card-img-top product-image " alt="折價詳情照片"
                            style="width:100%;">
                            <div class="img-hover-content">
                                <router-link to="/discountdetail" class="text-light">
                                <p class="text-center">推薦好友，首次下單再折$30元。（不限團購商品或貓餐廳使用）<br>(點我看詳情)</p>
                                </router-link>
                            </div>
                    </div>   
                </div>
            </div>
            <div class="d-flex justify-content-center px-2 h-100">
                <div class="card my-4 ">
                    <div class="px-0 img-hover-outer">
                        <img src="https://tokukai.com/webuploadpic/g0HZnE_210803_rec50_1040.png" class="card-img-top product-image " alt="折價詳情照片"
                            style="width:100%;">
                            <div class="img-hover-content">
                                <router-link to="/discountdetail" class="text-light">
                                <p class="text-center">推薦好友，首次下單再折$30元。（不限團購商品或貓餐廳使用）<br>(點我看詳情)</p>
                                </router-link>
                            </div>
                    </div>   
                </div>
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
}
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
</style>