<template lang="pug">
  #project-shower
    .project-shower-row(v-for="(row, i) in rows" :key="i") {{`../assets/${project}/${row.src}`}}
      .project-shower-image(v-if="row.type==='img'")
        v-img(src="assets/thesis-vis/HCI001.jpeg" width="100px")
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    project: {
      type: String,
      required: true,
    },
    rows: {
      type: Array,
      default: () => [
      ],
    },
  },
});
</script>

<style lang="sass" scoped>
#project-shower
  width: 100%
  height: 100%
  .project-shower-row
    .project-shower-image
      width: 100%
</style>
