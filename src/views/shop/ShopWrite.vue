<template>
<Navbar></Navbar>
<form action="">

<div class="container-fluid mt-5">
    <div class="row justify-content-center text-center">



    <input type="text" placeholder="請輸入店名" class="col-9 rounded-pill p-2 text-center">
    <div class="text-start mt-3 ps-5">請選擇標籤</div>


    <div class="rounded-pill m-2 p-2 tag col-3"><input type="checkbox">可帶寵物</div>
    <div class="rounded-pill m-2 p-2 tag col-3"><input type="checkbox">提供正餐</div>
    <div class="rounded-pill m-2 p-2 tag col-3"><input type="checkbox">中途之家</div>
    <!-- <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">親子餐廳</div> -->
    <!-- <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">寵物友善</div> -->
    <!-- <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">接受捐款</div> -->

    <div class="col-10 my-5 border-pri img py-5">
        <input type="file" class="file">
    </div>
    <input type="text" placeholder="請輸入地址" class="col-9 rounded-pill p-2 text-center">

    <div class="col-10 bg px-5 py-3 mt-5">店家公告/最新消息</div>
        <div class="col-10 border-pri  px-2 py-3 text-start">
<div class="my-3 mx text-center">
<input type="text" placeholder="請輸入標題" class="text-center"><br>
<input type="text" placeholder="請輸入內文" class="text-center">
<button class="btn px-4 my-3">新增下一條消息</button>
<br>
<button class="btn px-4 ">存檔</button>

</div>
</div>
        <div class="col-10 bg px-5 py-3 mt-5">店家資訊</div>

        <div class="col-10 border-pri  px-2 py-3 text-start">
            <div class="my-3 mx-2">
            <h5>營業時間</h5>
            <input type="checkbox">星期一<input type="time" v-model="start_time"><input type="time"><br>
            <input type="checkbox">星期二<input type="time"><input type="time"><br>
            <input type="checkbox">星期三<input type="time"><input type="time"><br>
            <input type="checkbox">星期四<input type="time"><input type="time"><br>
            <input type="checkbox">星期五<input type="time"><input type="time"><br>
            <input type="checkbox">星期六<input type="time"><input type="time"><br>
            <input type="checkbox">星期日<input type="time"><input type="time">

            </div>
           
        </div>

          <div class="col-10 border-pri  px-2 py-3 text-start">
            <div class="my-3 mx-2">
                <h5>消費模式</h5>

                <div class="text-start d-inline "><input type="checkbox"><label class="label">低消</label></div>
                <input type="text" placeholder="請輸入金額"><br>
                <input type="checkbox"><label for="" class="label">無低消</label><br>
                <div class="text-start d-inline "><input type="checkbox"><label class="label">時間制</label></div>
                <input class="" type="text" placeholder="請輸入規則"><br>
                <div class="text-start d-inline "><input type="checkbox"><label class="label" for="">其他</label></div>
                <input type="text" placeholder="請輸入規則"><br>


        


</div>
</div>
                  <div class="col-10 border-pri  px-2 py-3">
            <div class="my-3 mx-2">
                <h5 class="text-start">預約方式</h5>

                <div class="text-start d-inline "><input type="checkbox"><label class="label">網站</label></div>
                <input type="text" placeholder="請輸入網址" calss="text-center"><br>
                <div class="text-start d-inline "><input type="checkbox"><label for="" class="label">FB</label></div>
                <input class="" type="text" placeholder="請輸入粉專名稱"><br>

                <div class="text-start d-inline "><input type="checkbox"><label class="label">電話</label></div>
                <input class="" type="text" placeholder="請輸入電話號碼"><br>
                <div class="text-start d-inline "><input type="checkbox"><label class="label" for="">現場候位</label></div>
                <input class="invisible" type="text" placeholder="請輸入電話號碼"><br>

<br>


        


</div>
</div>

   <div class="col-10 bg px-5 py-3 mt-5">店貓小檔案</div>

        <div class="col-10 border-pri  px-2 py-3 text-start">
            <div class="my-3 mx-2">
            <input type="file" class="file">

            </div>
           
        </div>
        <div class="col-10 border-pri  px-2 py-3 text-start">
            <div class="my-3 mx-2">
                <label for="" class="text-center">姓名</label><input type="text">
                <label for="" class="text-center">年齡</label><input type="text">
                <label for="" class="text-center">性別</label><input type="text">
                <label for="" class="text-center">品種</label><input type="text">
                <label for="" class="ms-4" style="width:7rem;">介紹／注意事項</label><textarea name="" id="" cols="28" rows="10" class="mx-4"></textarea>


            </div>
           
        </div>


         <div class="col-10 bg px-5 py-3 mt-5">中途貓咪</div>

        <div class="col-10 border-pri  px-2 py-3 text-start">
            <div class="my-3 mx-2">
            <input type="file" class="file">

            </div>
           
        </div>
        <div class="col-10 border-pri  px-2 py-3 text-start ">
            <div class="my-3 mx-2">
                <label for="" class="text-center">姓名</label><input type="text">
                <label for="" class="text-center">年齡</label><input type="text">
                <label for="" class="text-center">性別</label><input type="text">
                <label for="" class="text-center">品種</label><input type="text">
                <label for="" class="text-center">結紮</label><input type="text">
                <label for="" class="text-center">驅蟲</label><input type="text">
                <label for="" class="text-center">預防針</label><input type="text">
                <label for="" class="ms-4" style="width:7rem;">介紹／注意事項</label><textarea name="" id="" cols="28" rows="10" class="mx-4"></textarea>


            </div>
           
        </div>

<!-- <button class="rounded-pill btn pri px-5 mt-3 text-center col-5 my-5">存檔</button> -->
<button class="rounded-pill btn pri px-1 mt-3 text-center col-4 my-5 mx-1">取消變更</button>
<button class="rounded-pill btn pri px-1 mt-3 text-center col-4 my-5 mx-1" @click="update()">確認變更</button>
    </div>
</div>
</form>

</template>
<script>
import Navbar from '../../components/HomeNavbar.vue'
import Footer from '../../components/HomeFooter.vue'


export default{
    components:{ 
        Navbar,
        Footer,
      
    },
    data() {
        return {
            start_time:'',
            form:{
                shopname:'',
                tags:[],
                shopimg:'',
                shopaddress:'',
                news:[
                    {
                        title:'',
                        content:'',
                    }
                ],
                shopinfo:[
                    {
                        "營業時間":{
                            mon:'',

                        }
                    

                    }
                ],




            },

        }
    },
     methods:{
        update(){
            console.log(this.start_time)
        }
         
            },
}
</script>
<style scoped>

.logo{
    width: 100px;
    height:100px;
}
.pri{
    background: rgb(246, 146, 71);
    color:white;

}
/* .bg-{
  background: rgb(253, 213, 146);
} */
.bg{
    background: rgb(246, 146, 71);
}
.img {
    border:2px solid rgb(246, 146, 71);

}
.btn{
    background: rgb(246, 146, 71);


}

input{
    border:2px solid rgb(246, 146, 71);
margin-bottom:5px;

}
.tag {
    border:2px solid rgb(246, 146, 71);

}
textarea{

    border:2px solid rgb(246, 146, 71);
}
.file{
    width: 300px;
}
.border-pri{

    border-bottom:2px solid rgb(246, 146, 71);
    border-left:2px solid rgb(246, 146, 71);
    border-right:2px solid rgb(246, 146, 71);
}
a{
    color:black;
    text-decoration: none;
}
label{
    width: 5rem;
}
</style>