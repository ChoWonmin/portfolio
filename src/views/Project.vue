<template lang="pug">
  .project
    .side-bar
      .side-bar-content project
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
.project
  width: 100%
  height: 100%
  display: flex
  .side-bar
    width: 360px
    height: 100%
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12) !important
    overflow-y: auto
    .side-bar-content
      width: 100%
      background-color: red
  .content
</style>
