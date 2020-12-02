<template lang="pug">
  v-app
    v-app-bar(color="#163167" dark)
      .d-flex.align-center(
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="40")
        .text-h5 조원민
      v-spacer
      v-btn(
        target="_blank"
        text
      )
        span.mr-2 GITHUB
        v-icon mdi-open-in-new
    v-app
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

<style lang="sass" scoped>
*
  box-sizing: border-box
</style>
