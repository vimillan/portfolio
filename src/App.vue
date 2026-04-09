<template>
  <div class="portfolio-app">
    <AppHeader
      :profile="profile"
      :nav-items="navItems"
      :locale="locale"
      :language-options="languageOptions"
      :theme="theme"
      :labels="content.labels"
      :cta="content.navigation.cta"
      @toggle-theme="toggleTheme"
      @change-locale="setLocale"
    />

    <main>
      <HeroSection :profile="profile" :content="content" :cv-url="cvUrl" :project-image="heroImage" />
      <AboutSection :profile="profile" :content="content" :locale="locale" />
      <ProjectsSection :content="content" />
      <ExperienceSection :content="content" />
      <ProcessSection :content="content" />
      <CertificationsSection :profile="profile" :content="content" />
      <ContactSection :profile="profile" :content="content" :locale="locale" />
    </main>

    <footer class="portfolio-footer">
      <div class="container center-item justify-content-between gap-3">
        <div class="center-item gap-3">
          <BrandMark />
          <p class="mb-0">{{ content.footer.text }}</p>
        </div>
        <div class="footer-links center-item gap-3">
          <a v-for="item in profile.socialLinks" :key="item.label" :href="item.url" target="_blank" rel="noreferrer">
            <i :class="item.icon"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import AppHeader from './components/layout/AppHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import CertificationsSection from './components/sections/CertificationsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import BrandMark from './components/ui/BrandMark.vue'

import { usePortfolioState } from './composables/usePortfolioState'

const { profile, theme, locale, content, toggleTheme, setLocale } = usePortfolioState()

const navItems = computed(() => [
  { href: '#projects', label: content.value.navigation.projects },
  { href: '#experience', label: content.value.navigation.experience },
  { href: '#about', label: content.value.navigation.about },
  { href: '#contact', label: content.value.navigation.contact }
])

const languageOptions = computed(() => [
  { value: 'es', label: content.value.labels.spanish },
  { value: 'en', label: content.value.labels.english }
])

const cvUrl = computed(() => '/docs/violeta-millan-cv.pdf')
const heroImage = computed(() => '/images/hero-reference.png')
</script>
