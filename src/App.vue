<template>
  <div>
    <header>
      <strong id="title-js">Librerías para JavaScript</strong>
      <img id="logo-js" :src="image" alt="Logo" />
    </header>

    <p>{{ secret }}</p>

    <ul>
      <Library
        v-for="(lib, index) in libraries"
        :key="index"
        :img="lib.img"
        :name="lib.name"
        :description="lib.description"
        :github="lib.github"
        :npm="lib.npm"
        :cdn="lib.cdn"
      ></Library>
    </ul>
  </div>
</template>

<script>
import Library from './components/Library.vue';
import image from './assets/img/logo.png';
import libraries from './assets/libraries.json';

export default {
  name: 'App',
  components: {
    Library
  },
  data() {
    return {
      secret: process.env.SECRET || 'ERROR',
      image,
      libraries
    };
  }
};
</script>
