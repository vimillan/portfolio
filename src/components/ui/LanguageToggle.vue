<template>
  <div class="language-toggle">
    <button
      v-for="item in options"
      :key="item.value"
      type="button"
      class="language-button"
      :class="{ active: item.value === locale }"
      @click="$emit('change', item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  locale: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
})

defineEmits(['change'])
</script>
