<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn v-on:click="test1()">test1</v-btn><br />
    <v-btn v-on:click="test2()">test2</v-btn><br />
    <v-btn v-on:click="test3()">test2</v-btn><br />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
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
    test3() {
      axios.get("http://localhost:8080/test").then(function (res) {
        console.log(res);
      });
    },
  },
};
</script>
