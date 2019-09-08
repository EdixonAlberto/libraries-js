<template>
  <div>
    <strong>Npm:</strong>
    <span class="npm-comand">$ {{ npm }}</span>
    <button
      class="copy-button hint--top hint--rounded"
      :data-hint="message"
      :class="{ 'hint--success': copied }"
      @click="onClick"
    >Copy</button>
  </div>
</template>

<script>
export default {
  name: "Comand",
  props: {
    npm: String
  },
  data() {
    return {
      message: "Copy to clipboard",
      copied: false
    };
  },
  methods: {
    onClick: function() {
      const input = document.createElement("input");

      input.setAttribute("value", this.comand);
      document.body.appendChild(input);
      input.select();

      document.execCommand("copy");
      document.body.removeChild(input);

      this.message = "Copied!";
      this.copied = true;
    }
  }
};
</script>
