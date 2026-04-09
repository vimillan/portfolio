<template>
  <section class="portfolio-section">
    <div class="container">
      <SectionTitle kicker="Method" :title="content.process.title" />

      <div class="row g-4 mt-1">
        <div
          v-for="(step, index) in content.process.steps"
          :key="step.title"
          class="col-12 col-md-6 col-xl-3"
        >
          <article class="process-card glass-panel h-100">
            <span class="process-index">0{{ index + 1 }}</span>
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-text mb-0">{{ step.text }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "../ui/SectionTitle.vue";

defineProps({
  content: { type: Object, required: true },
});
</script>
