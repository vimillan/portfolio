<template>
  <button class="control-pill no-grab" type="button" @click="$emit('toggle')">
    <i :class="theme === 'dark' ? 'bi bi-moon-stars' : 'bi bi-sun'"></i>
    <span>{{ theme === 'dark' ? labels.dark : labels.light }}</span>
  </button>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    required: true
  },
  labels: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle'])
</script>
