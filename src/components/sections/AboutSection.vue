<template>
  <section id="about" class="portfolio-section">
    <div class="container">
      <div class="row g-4 align-items-start">
        <div class="col-12 col-lg-5">
          <SectionTitle
            kicker="Profile"
            :title="content.about.title"
            :description="content.about.intro"
          />

          <div class="impact-block">
            <h3 class="block-title">{{ content.about.impact.title }}</h3>

            <div class="impact-grid">
              <article
                class="impact-card"
                v-for="item in content.about.impact.items"
                :key="item.title"
              >
                <div class="center-item gap-3 mb-3">
                  <div class="impact-icon">
                    <i :class="item.icon"></i>
                  </div>
                  <h4 class="impact-card-title">{{ item.title }}</h4>
                </div>

                <div class="impact-content">
                  <p class="impact-card-text">{{ item.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <div class="about-panel-offset">
            <div class="glass-panel p-4 p-xl-5">
              <div class="row g-4">
                <div class="col-12">
                  <p
                    v-for="paragraph in content.about.paragraphs"
                    :key="paragraph"
                    class="content-paragraph mb-3"
                  >
                    {{ paragraph }}
                  </p>
                </div>

                <div class="col-12">
                  <div class="row g-3">
                    <div
                      v-for="stat in content.about.stats"
                      :key="stat.label"
                      class="col-12 col-md-4"
                    >
                      <article class="stat-card h-100">
                        <strong>{{ stat.value }}</strong>
                        <span>{{ stat.label }}</span>
                      </article>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="availability-card center-item gap-3">
                    <span class="availability-dot"></span>
                    <div>
                      <small class="section-kicker d-block">
                        {{ content.labels.availability }}
                      </small>
                      <span>{{ profile.availability[locale] }}</span>
                    </div>
                  </div>
                </div>
              </div>
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
  locale: { type: String, required: true },
});
</script>
