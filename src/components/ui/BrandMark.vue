<template>
  <div class="brand-mark center">
    <img :class="logoClass" :src="logoSrc" />
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  invert: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
});

const logoSrc = computed(() => {
  return props.invert ? "/images/logo-invert.png" : "/images/logo.png";
});

const logoClass = computed(() => {
  return props.customClass ? props.customClass : "img-40";
});
</script>
