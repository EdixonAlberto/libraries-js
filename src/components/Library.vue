<template>
  <li>
    <div>
      <span id="lib-name">{{ name }}</span>
      <span>{{ description }}</span>
    </div>
    <div>
      <strong>Github:</strong>
      <a :href="github">{{ github }}</a>
    </div>
    <Command :npm="npm"></Command>
    <div>
      <strong>Cdn:</strong>
      <a :href="cdn">{{ cdn }}</a>
    </div>
  </li>
</template>

<script>
import Command from './Command.vue';

export default {
  name: 'Library',
  components: {
    Command
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
