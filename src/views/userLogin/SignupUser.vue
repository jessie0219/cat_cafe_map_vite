<template>

<Navbar></Navbar>

<h4 class="text-center mt-3 mb-5">會員註冊</h4>



<div class="container-fluid">
    <div class="row justify-content-center text-start g-5">



       <form class="row g-3 needs-validation col-10" @submit="usersignUP()" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Account</label><br>

<div class="input-container left-inner-addon">
    <i class="fa-regular fa-envelope"></i>


    <input type="email" class="form-control " id="validationCustom01"  required  placeholder="請輸入驗證信箱" v-model="form.useremail">

    <div class="invalid-feedback">
      請輸入有效電子信箱
    </div>
</div>
    
  </div>

   <div class="col-md-4">
    <label for="validationCustom02" class="form-label">用戶名稱</label>
    <div class="input-container left-inner-addon">

    <i class="fa-regular fa-face-smile"></i>
    <input type="text" class="form-control " id="validationCustom02" placeholder="請設定您的用戶名稱" required v-model="form.username"> 
</div>
</div>
 
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Password</label>
<div class="input-container left-inner-addon">
<i class="fa-solid fa-key"></i>

      <input type="password" class="form-control " id="validationCustomUsername" placeholder="密碼（ 6-16個字元）" minlength="6" maxlength="16" required v-model="form.userpassword1"> 




    </div>
  </div>
    <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Password</label>
<div class="input-container left-inner-addon">
<i class="fa-solid fa-key"></i>
      <input type="password" class="form-control " id="validationCustomUsername" placeholder="確認密碼" minlength="6" maxlength="16" required v-model="form.userpassword2">

    </div>
  </div>
  
 
  <div class="col-12">
    <div class="form-check px-5 py-3 rounded-3 ">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required v-model="form.check">
      <label class="form-check-label" for="invalidCheck">
        我不是機器人
      </label>

    </div>
  </div>
  <div class="col-12 text-center">
    <button class="btn  rounded-pill px-5 py-2" type="submit" @click="usersignUP()" >免費註冊</button>
  </div>
</form>

    </div>
</div>
<!-- <Footer class="fixed-bottom px-5"></Footer> -->

</template>
<script>
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
// import { auth } from '../firebase/init.js'
// import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
// import { auth } from '../../firebase/init.js'


import Navbar from '../../components/HomeNavbar.vue'
// import Footer from '../components/HomeFooter.vue'

export default{
    components:{
        Navbar,
        // Footer
    },
    data(){
      return{
        form:{
          useremail:'',
            username:'',
            userpassword1:'',
            userpassword2:'',
            check:false,
        }
  

      }
    },
    methods:{
        usersignUP(){
            // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
console.log(this.form)

// register new user
      // createUserWithEmailAndPassword(auth,this.email,this.password)
      // .then((credential) => {
      //   // registered and signed in
      //   console.log(credential.user)
      // })
      // .catch((error) => {
      //   console.log(error.message)
      // })

// register new user
      createUserWithEmailAndPassword(auth,this.form.useremail,this.form.userpassword1)
      .then((credential) => {
        // // registered and signed in
        // console.log(credential.user)
        // router.push('/')
         updateProfile(auth.currentUser, {
          displayName: this.form.username
        })
      })
        .then(() => {
          // emit event
          this.$emit('loggedIn')
        })
      .catch((error) => {
        console.log(error.message)
      })


       


       
       },
       

        }

    }

</script>
<style scoped>
.logo{
    width: 100px;
    height:100px;
}

.input-container {
	padding-bottom: 1em;
}
.left-inner-addon {
    position: relative;
}
.left-inner-addon input {
    padding-left: 35px !important; 
}
.left-inner-addon i {
    position: absolute;
    padding: 12px 12px;
    pointer-events: none;
}

input{
  background: rgb(253, 213, 146);
}

.form-check{
  background: rgb(253, 213, 146);


}
.btn{
    color:white;
    background: rgb(246, 146, 71);
}


</style>