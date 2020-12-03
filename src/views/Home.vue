<template lang="pug">
  .home
    .side-bar
    .content

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
.home
  width: 100%
  height: 100%
  display: flex
  .side-bar
    width: 360px
    height: 100%
  .content
</style>
