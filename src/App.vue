<template>
  <div id="app">
    <LoadingButton
      style="color: red"
      :loading="false"
      @loadingClick="loadingClick"
      @click="click"
      >haha</LoadingButton
    >
    <el-button style="color: red">haha</el-button>
  </div>
</template>

<script>
import LoadingButton from "./components/LoadingButton.js";
export default {
  name: "app",
  components: {
    LoadingButton,
  },
  methods: {
    click() {
      console.log("click button");
    },
    loadingClick(isOver) {
      console.log("loading click start");
      setTimeout(() => {
        isOver();
        console.log("loading click end");
      }, 2000);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
