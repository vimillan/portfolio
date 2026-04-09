<template>
  <div class="section-heading">
    <span class="section-kicker">{{ kicker }}</span>
    <h2 class="section-title mb-0">{{ title }}</h2>
    <p v-if="description" class="section-description mb-0">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  kicker: {
    type: String,
    default: "Portfolio",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});
</script>
