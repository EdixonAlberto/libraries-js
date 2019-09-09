<template>
  <div>
    <header>
      <strong id="title-js">Librerías para JavaScript</strong>
      <img id="logo-js" :src="image" alt="Logo" />
    </header>
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
import Library from "./components/Library.vue";
import image from "./assets/img/logo.png";

export default {
  name: "App",
  components: {
    Library
  },
  data() {
    return {
      image,
      libraries: [
        {
          name: "Chartjs",
          description:
            "Gráficos JavaScript simples pero flexibles para diseñadores y desarrolladores",
          github: "https://www.chartjs.org",
          npm: "npm i chart.js",
          cdn: "http://path.com"
        },
        {
          name: "Axios",
          description:
            "Cliente HTTP basado en promesas para el navegador y node.js",
          github: "https://github.com/axios/axios",
          npm: "npm i axios",
          cdn: "http://path.com"
        }
      ]
    };
  }
};
</script>
