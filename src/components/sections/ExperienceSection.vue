<template>
  <section id="experience" class="portfolio-section">
    <div class="container">
      <SectionTitle
        kicker="Career"
        :title="content.experience.title"
        :description="content.experience.intro"
      />

      <div class="timeline-grid mt-4">
        <article
          v-for="item in content.experience.items"
          :key="`${item.company}-${item.period}`"
          class="timeline-card glass-panel"
        >
          <div class="timeline-header row g-3 align-items-start">
            <div class="col-12 col-xl-8">
              <h3 class="timeline-role mb-1">{{ item.role }}</h3>
              <p class="timeline-meta mb-0">{{ item.company }} · {{ item.location }}</p>
            </div>
            <div class="col-12 col-xl-4 text-xl-end">
              <span class="timeline-period">{{ item.period }}</span>
            </div>
          </div>

          <ul class="timeline-list mb-0">
            <li v-for="highlight in item.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </article>
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
