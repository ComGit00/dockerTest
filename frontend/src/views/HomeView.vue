<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <v-btn v-on:click="test1()">test1</v-btn>
    <v-btn v-on:click="test2()">test2</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    test1() {
      axios.get("http://localhost:8794/test").then(function (res) {
        console.log(res);
      });
    },
    test2() {
      axios.get("http://localhost/test").then(function (res) {
        console.log(res);
      });
    },
  },
};
</script>
