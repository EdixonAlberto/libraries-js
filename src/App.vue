<template>
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
</template>

<script>
import Library from "./components/Library.vue";

export default {
  name: "App",
  components: {
    Library
  },
  data() {
    return {
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
