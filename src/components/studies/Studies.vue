<template>
  <div class="px-4 bg-blue-back mt-4">
    <div class="text-w-bold fs-3">Education</div>
    <vs-row justify="space-between">
      <vs-col lg="4" md="12" sm="12" xl="12">
        <div class="pa-3 text-center bg-white rounded shadow mt-4 mb-3">
          I have developed web applications with vue 2 and react js, I have made
          rest apis in spring boot and php, in addition to making mobile apps
          from android studio, managing cloud services and using the git flow
          methodology
        </div>
      </vs-col>
      <vs-col lg="7" md="12" sm="12" xl="12">
        <div v-for="(i, item) in 2" :key="i">
          <EducationItem v-if="item != null" />
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import EducationItem from './EducationItem.vue'
export default {
  components: { EducationItem },
  name: 'Studies',
}
</script>

EducationItem
<style></style>
