<template lang="pug">
  .home
    .side-bar
      v-tabs(color="#163167" v-model="tab")
        v-tab Profile
        v-tab Project
      .side-bar-content
    .content

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Home extends Vue {
  private tab = 0;
}
</script>

<style lang="sass" scoped>
.home
  width: 100%
  height: 100vh
  display: flex
  .side-bar
    width: 360px
    height: calc(100vh -64px)
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12) !important
    overflow-y: scroll
    .side-bar-content
      width: 100%
      height: 1360px
      background-color: red

  .content
</style>
