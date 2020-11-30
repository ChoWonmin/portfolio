<template lang="pug">
  v-app
    v-app-bar(app color="primary" dark)
      .d-flex.align-center(
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="40")
        .text-h4  wonmin
      v-spacer
      v-btn(
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      )
        span.mr-2 GITHUB
        v-icon mdi-open-in-new
    v-main
      router-view
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>
