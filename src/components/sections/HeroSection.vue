<template>
  <section id="top" class="hero-section">
    <div class="container">
      <div class="hero-shell row g-4 align-items-center">
        <div class="col-12 col-lg-6">
          <div class="hero-copy">
            <span class="hero-eyebrow">{{ content.hero.eyebrow }}</span>
            <h1 class="hero-title">
              <span class="hero-title-base">{{ content.hero.titlePrefix }}</span>
              <span class="hero-title-accent">{{ content.hero.titleHighlight }}</span>
            </h1>
            <p class="hero-description">{{ content.hero.description }}</p>

            <div class="hero-actions center-item gap-3">
              <a class="btn btn-primary hero-btn" href="#projects">{{
                content.hero.primaryCta
              }}</a>
              <a
                class="btn btn-outline-light hero-btn alt-btn"
                :href="cvUrl"
                target="_blank"
                rel="noreferrer"
              >
                {{ content.hero.downloadCV }}
              </a>
            </div>

            <div class="badge-row center-item gap-2">
              <span
                v-for="badge in profile.heroBadges"
                :key="badge"
                class="portfolio-badge"
              >
                {{ badge }}
              </span>
            </div>

            <div class="hero-social center-item gap-3">
              <a
                v-for="item in profile.socialLinks"
                :key="item.label"
                class="social-pill"
                :href="item.url"
                target="_blank"
                rel="noreferrer"
              >
                <i :class="item.icon"></i>
                <span>{{ item.label }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="hero-visual">
            <div class="hero-glow"></div>
            <div class="hero-device hero-device-left cursor-grab">
              <div class="device-screen">
                <img :src="projectImage" :alt="profile.name" class="device-image" />
              </div>
            </div>
            <div class="hero-device hero-device-right">
              <div class="device-screen info-card-screen">
                <div class="support-card">
                  <span class="support-card-label">{{
                    content.hero.supportCardTitle
                  }}</span>
                  <p>{{ content.hero.supportCardText }}</p>
                  <div class="mini-stats">
                    <div class="mini-stat">
                      <strong>UX</strong>
                      <span>Flows</span>
                    </div>
                    <div class="mini-stat">
                      <strong>UI</strong>
                      <span>Components</span>
                    </div>
                    <div class="mini-stat">
                      <strong>QA</strong>
                      <span>Testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="floating-logo-card point-center">
              <BrandMark />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BrandMark from "../ui/BrandMark.vue";

defineProps({
  profile: { type: Object, required: true },
  content: { type: Object, required: true },
  cvUrl: { type: String, required: true },
  projectImage: { type: String, required: true },
});
</script>
