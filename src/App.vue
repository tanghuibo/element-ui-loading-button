<template>
  <div id="app">
    <loading-button :loading="false" @loadingClick="loadingClick" @click="click">
      loading-button
    </loading-button>

    <loading-button-jsx :loading="false" @loadingClick="loadingClick" @click="click">
      loading-button-jsx
    </loading-button-jsx>

    <el-button @click="click">
      el-button
    </el-button>
  </div>
</template>

<script>
import LoadingButton from "./components/LoadingButton.js";
import LoadingButtonJsx from "./components/LoadingButtonJsx.js";
export default {
  name: "app",
  components: {
    LoadingButton,
    LoadingButtonJsx,
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
