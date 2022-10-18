<template>
  
  <img alt="Vue logo" src="./assets/logo.png">
  
  <HelloWorld msg="Hello Vue"/>
  
  <TestVue message="licslan@sina.com"></TestVue>
  
  <VBind sex="mela"></VBind>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestVue from './components/Test.vue'
import VBind from './components/VBind.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
	TestVue,
	VBind
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
