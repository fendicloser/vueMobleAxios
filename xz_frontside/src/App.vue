<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <mt-button @click="Login">Login</mt-button> |
      
      <button @click="Login">Login</button> |
      <button @click="signUp">signUp</button> |
      <mt-button type="primary" @click="swipe">swipe</mt-button> |
      <mt-button type='primary' @click='tryParam'>try param</mt-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
  methods:{
    tryParam(){
      
      this.$router.push({path:'/tryParam'})
    },
    swipe(){
      this.$router.push({path:'/swipe'})
    },
    Login(){
      this.$router.push({path:'/Login'})
    },
    signUp(){
      this.$router.push({path:'/signUp'})
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
