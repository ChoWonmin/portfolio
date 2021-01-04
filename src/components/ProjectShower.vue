<template lang="pug">
  #project-shower
    .project-shower-row(v-for="(row, i) in rows" :key="i")
      .project-shower-image(v-if="row.type==='img'")
        v-img(:src="require(`@/assets/${project}/${row.src}`)")
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    projcet: {
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
