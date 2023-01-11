<template>
  <div>
    <CoverSection />
    <AboutMe />
  </div>
</template>

<script>
import AboutMe from '../components/about/AboutMe.vue'
import CoverSection from '../components/cover/CoverSection.vue'
export default {
  name: 'Landing',
  components: { CoverSection, AboutMe },
}
</script>

<style></style>
