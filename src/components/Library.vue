<template>
  <li>
    <strong id="lib-name">{{ name }}</strong>
    {{ description }}
    <br />
    <strong>Github</strong>
    <a :href="github">{{ github }}</a>
    <br />
    <Comand :npm="npm"></Comand>
    <strong>Cdn:</strong>
    <a :href="cdn">{{ cdn }}</a>
    <br />
    <br />
  </li>
</template>

<script>
import Comand from "./Comand.vue";

export default {
  name: "Library",
  components: {
    Comand
  },
  props: {
    name: String,
    description: String,
    github: String,
    npm: String,
    cdn: String
  }
};
</script>
