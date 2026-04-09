import { computed, ref, watch } from 'vue'

import profile from '../data/profile.json'
import contentEs from '../data/content.es.json'
import contentEn from '../data/content.en.json'

const THEME_KEY = 'violeta-portfolio-theme'
const LOCALE_KEY = 'violeta-portfolio-locale'

const theme = ref(localStorage.getItem(THEME_KEY) || 'dark')
const locale = ref(localStorage.getItem(LOCALE_KEY) || 'es')

const contentMap = {
  es: contentEs,
  en: contentEn
}

watch(theme, (value) => {
  localStorage.setItem(THEME_KEY, value)
  document.documentElement.setAttribute('data-theme', value)
})

watch(locale, (value) => {
  localStorage.setItem(LOCALE_KEY, value)
  document.documentElement.setAttribute('lang', value)
})

document.documentElement.setAttribute('data-theme', theme.value)
document.documentElement.setAttribute('lang', locale.value)

export const usePortfolioState = () => {
  const content = computed(() => contentMap[locale.value])

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  const setLocale = (value) => {
    locale.value = value
  }

  return {
    profile,
    theme,
    locale,
    content,
    toggleTheme,
    setLocale
  }
}
