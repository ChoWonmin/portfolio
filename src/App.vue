<template lang="pug">
  v-app
    v-app-bar(color="#163167" dark)
      v-tabs(color="#fefefe" v-model="tab")
        v-tab Profile
        v-tab Project
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

export default Vue.extend({
  name: 'App',

  components: {
  },
  data: () => ({
    tab: 0,
  }),
});
</script>

<style lang="sass" scoped>
*
  box-sizing: border-box
</style>
