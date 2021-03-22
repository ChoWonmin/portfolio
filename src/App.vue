<template lang="pug">
  v-app
    v-app-bar(color="#163167" dark)
      v-tabs(color="#fefefe" v-model="tab" @change="navigate")
        v-tab Profile
      v-spacer
      v-btn(
        target="_blank"
        @click="openWindow('https://danbi-ncsoft.github.io/')"
        color="#7256d1"
      ).mr-2
        span 조직 소개
        //- v-icon mdi-open-in-new
      v-btn(
        target="_blank"
        @click="openWindow('https://github.com/ChoWonmin')"
        color="#7256d1"
      )
        span GITHUB
        //- v-icon mdi-open-in-new
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
