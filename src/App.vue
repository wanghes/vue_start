<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button :class="{'btn':btn}" @click="startHacking">Let's do it</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btn:true,
      msg: '今天开始学习Vue 2.0!'
    }
  },
  methods: {
    startHacking () {
      alert(111)
    }
  }
}
</script>

<style lang="less">
body {
  font-family: "Microsoft Yahei";
}
.btn{
  background:blue;
  color:#fff;
  border:1px solid blue;
  padding:5px 15px;
  cursor:pointer;
  transition:all .3s ease-out;
  &:hover{
    background:#000;
    border:1px solid #000;
  }
}
</style>