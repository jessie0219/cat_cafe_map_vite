<template>
  <div v-if="!isLoggedIn">
    <!-- login -->
    <template v-if="showLogin">
      <!-- <login-form/> -->
        <router-link to="/user_login">user login</router-link>
      <!-- <p>No account yet? <span @click="showLogin=false">Sign up</span> instead.</p> -->
    </template>
    <!-- or register -->
    <template v-else>
      <!-- <signup-form/> -->
      signup
      <p>Already registered? <span @click="showLogin=true">Login</span> instead.</p>
    </template>
  </div>
  <!-- is logged in -->
  <div v-else>
    <h2>Welcome</h2>
  </div>
</template>

<script>
// import SignupForm from './components/SignupForm'
// import LoginForm from './components/LoginForm'

export default {
//   components: { SignupForm, LoginForm },
  data() {
    return {
      isLoggedIn: false,
      showLogin: true
    }
  }
}
</script>

<!-- <style>
p,h2{text-align:center}span{text-decoration:underline;cursor:pointer;color:blue}
form{display:flex;flex-direction:column;row-gap:16px;max-width:260px;margin:30px auto}
input,button{height:28px}input{padding-left:10px}button{width:fit-content;margin:auto}
</style> -->