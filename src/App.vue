<template lang="pug">
  v-app
    v-app-bar(color="#163167" dark)
      v-tabs(color="#fefefe" v-model="tab" @change="navigate")
        v-tab Profile
      v-spacer
      v-btn(
        target="_blank"
        text
        @click="openWindow('https://github.com/ChoWonmin')"
      )
        span.mr-2 GITHUB
        v-icon mdi-open-in-new
    #app
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
    pages: ['Profile', 'Project'],
  }),
  methods: {
    openWindow(link: string|undefined) {
      console.log(link);
      window.open(link);
    },
    navigate() {
      this.$router.push({ name: this.pages[this.tab] });
    },
  },
});
</script>

<style lang="sass" scoped>
#app
  width: 100%
  height: calc(100vh - 64px)
</style>
