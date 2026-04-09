<template>
  <section class="portfolio-section">
    <div class="container">
      <div class="row g-4 align-items-start">
        <div class="col-12 col-lg-4">
          <SectionTitle kicker="Growth" :title="content.labels.certifications" />
        </div>
        <div class="col-12 col-lg-8">
          <div class="glass-panel p-4 p-xl-5">
            <div class="certification-list">
              <article
                v-for="item in profile.certifications"
                :key="`${item.title}-${item.year}`"
                class="certification-item"
              >
                <div>
                  <h3 class="certification-title">{{ item.title }}</h3>
                </div>
                <span class="certification-year">{{ item.year }}</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "../ui/SectionTitle.vue";

defineProps({
  profile: { type: Object, required: true },
  content: { type: Object, required: true },
});
</script>
