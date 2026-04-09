<template>
  <section id="projects" class="portfolio-section">
    <div class="container">
      <SectionTitle
        kicker="Work"
        :title="content.projects.title"
        :description="content.projects.intro"
      />

      <div class="row g-4 mt-1">
        <div
          v-for="project in content.projects.items"
          :key="project.title"
          class="col-12 col-xl-4"
        >
          <article
            class="project-card glass-panel h-100"
            :class="`accent-${project.accent}`"
          >
            <div class="project-preview">
              <img :src="project.image" :alt="project.title" class="project-image" />
            </div>

            <div class="project-body">
              <span class="project-category">{{ project.category }}</span>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-summary">{{ project.summary }}</p>

              <div class="project-block">
                <small class="section-kicker">{{ content.labels.contributions }}</small>
                <ul class="project-list mb-0">
                  <li v-for="contribution in project.contributions" :key="contribution">
                    {{ contribution }}
                  </li>
                </ul>
              </div>

              <div class="project-block">
                <small class="section-kicker">{{ content.labels.skills }}</small>
                <div class="badge-row center-item gap-2">
                  <span
                    v-for="item in project.stack"
                    :key="item"
                    class="portfolio-badge small-badge"
                    >{{ item }}</span
                  >
                </div>
              </div>
            </div>
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
