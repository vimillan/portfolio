<template>
  <div>
    <CoverSection />
    <AboutMe />
    <LatestProjects />
    <Studies />
    <Footer />
  </div>
</template>

<script>
import AboutMe from '../components/about/AboutMe.vue'
import CoverSection from '../components/cover/CoverSection.vue'
import Footer from '../components/footer/Footer.vue'
import LatestProjects from '../components/projects/LatestProjects.vue'
import Studies from '../components/studies/Studies.vue'
export default {
  name: 'Landing',
  components: { CoverSection, AboutMe, LatestProjects, Studies, Footer },
}
</script>

<style></style>
