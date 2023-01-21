<template>
  <div id="app">
   <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.Vue"; 

  export default {
    name:"App",
    components:{
      HelloWorld,
      },
  };
</script>

</style>
#app {
font-family:Avenir,Helvetica,Arial,sans-serif;
