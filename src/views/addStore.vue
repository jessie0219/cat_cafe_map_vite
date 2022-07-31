<template>
<Navbar></Navbar>
<h5 class="ms-3 mb-3 mt-5 fw-bold">新增店家:</h5>
<form>
    <div class="mb-4 row justify-content-center">
        <label for="storeName" class="col-2 col-form-label fw-bold" id="storeName">店名</label>
        <div class="col-7">
            <input type="storeName" class="form-control" id="inputName" placeholder="請輸入店家名稱">
        </div>
    </div>
    <div class="mb-4 row d-flex justify-content-center">
        <label for="administrativeArea" class="col-form-label fw-bold text-nowrap" id="administrativeArea">行政區</label>
        <div class="col-7">
            <input type="administrativeArea" class="form-control" id="inputAdministrativeArea" placeholder="請輸入行政區">
        </div>
    </div>
    <div class="mb-5 row justify-content-center">
        <label for="adress" class="col-2 col-form-label fw-bold" id="adress">地址</label>
        <div class="col-7">
            <input type="adress" class="form-control" id="inputadress" placeholder="請輸入地址">
        </div>
    </div>
</form>
<h5 class="ms-3 mb-4 mt-3 fw-bold">請選擇標籤:</h5>
<div class="justify-content-center">
    <div class="check">
        &nbsp;
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label fw-bold" for="inlineCheckbox1">中途之家</label>
        </div>
    </div>
    <div class="check">
    &nbsp;
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
            <label class="form-check-label fw-bold" for="inlineCheckbox2">提供正餐</label>
        </div>
    </div>
</div>
<a type="button" class="add">建立新店家</a>
</template>

<script>
import Navbar from "../components/CatNavbar.vue";

export default {
    components: {
    Navbar,
    }
};
</script>

<style>
#administrativeArea{
    width: 18%;
}
#storeName{
    width: 18%;
}
#adress{
    width: 18%;
}
form input{
    border-color: #F69246!important;
    border-radius: 15px!important;
    border-width:2px!important;
}
.check{
    border: 2px solid;
    border-color: #F69246;
    border-radius: 20px!important;
    padding: 8px;
    margin-left: 32px;
    display: inline;
}
.add{
    color: white;
    background-color:#F69246;
    border-color: #F69246;
    border-radius: 15px;
    margin: 50px;
    padding: 4px 90px;
    text-decoration: none;
    
}
.add:hover{
    color:black;
    background-color: #FDEBDE;
}
</style>