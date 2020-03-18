<template>
  <div>
    <strong>Npm:</strong>
    <div class="command">
      <span>$ {{ npm }}</span>
      <button
        class="copy-button hint--top hint--rounded"
        :data-hint="message"
        :class="{ 'hint--success': copied }"
        @click="onClick"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Command',
  props: {
    npm: String
  },
  data() {
    return {
      message: 'Copiar a portapapeles',
      copied: false
    };
  },
  methods: {
    onClick: function() {
      const input = document.createElement('input');

      input.setAttribute('value', this.npm);
      document.body.appendChild(input);
      input.select();

      document.execCommand('copy');
      document.body.removeChild(input);

      this.message = 'Copiado!';
      this.copied = true;
    }
  }
};
</script>

<style scoped>
div {
  padding: 0;
}

.command {
  display: inline;
  background: #e8e8e8;
  border-left: 10px solid black;
  font-family: 'Consolas';
  padding: 5px;
  padding-right: 0;
}

.copy-button {
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  border: none;
  border-radius: 6px;
}

.copy-button:hover {
  cursor: pointer;
  background: #f7df1e;
}
</style>
