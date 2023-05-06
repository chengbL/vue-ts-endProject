<template>
  <div class="xtx-tabs-panel" v-show="activeName === name">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});
const activeName = inject<string>("activeName");
</script>
