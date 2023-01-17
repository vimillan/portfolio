<template>
  <div>
    <CoverSection />
    <AboutMe />
    <LatestProjects/>
  </div>
</template>

<script>
import AboutMe from '../components/about/AboutMe.vue'
import CoverSection from '../components/cover/CoverSection.vue'
import LatestProjects from '../components/projects/LatestProjects.vue'
export default {
  name: 'Landing',
  components: { CoverSection, AboutMe, LatestProjects },
}
</script>

<style></style>
