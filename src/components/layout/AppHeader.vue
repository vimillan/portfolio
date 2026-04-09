<template>
  <header class="portfolio-header">
    <div class="container">
      <div class="header-shell">
        <a class="brand-link center-item no-wrap" href="#top">
          <BrandMark />
          <div>
            <span class="brand-name d-block">{{ profile.brand }}</span>
            <span class="brand-role d-block">{{ profile.headline }}</span>
          </div>
        </a>

        <div class="header-actions center-item gap-2">
          <nav class="nav-links d-none d-lg-flex center-item no-wrap">
            <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
          </nav>

          <LanguageToggle :locale="locale" :options="languageOptions" @change="$emit('change-locale', $event)" />
          <ThemeToggle :theme="theme" :labels="labels" @toggle="$emit('toggle-theme')" />
          <a class="contact-button" href="#contact">{{ cta }}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import BrandMark from '../ui/BrandMark.vue'
import LanguageToggle from '../ui/LanguageToggle.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

defineProps({
  profile: { type: Object, required: true },
  navItems: { type: Array, required: true },
  locale: { type: String, required: true },
  languageOptions: { type: Array, required: true },
  theme: { type: String, required: true },
  labels: { type: Object, required: true },
  cta: { type: String, required: true }
})

defineEmits(['toggle-theme', 'change-locale'])
</script>
