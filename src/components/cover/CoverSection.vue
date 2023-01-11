<template>
  <div class="bg-blue-back full-section">
    <vs-row justify="center" aling="center">
      <vs-col lg="1" md="6" sm="6" xs="6">
        <vs-row justify="flex-end" align="center">
          <vs-col lg="8" md="12" sm="12" xs="12">
            <LinkedData />
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col lg="5" md="12" sm="12" xs="12">
        <AboutData />
      </vs-col>
      <vs-col class="mx-1 bg-light rounded full-section" lg="3">
        <br />
      </vs-col>
      <vs-col class="mx-1 bg-dark rounded full-section" lg="1">
        <br />
      </vs-col>
      <vs-col class="mx-1 bg-primary rounded full-section" lg="1">
        <br />
      </vs-col>
    </vs-row>
    <br />
  </div>
</template>

<script>
import AboutData from './AboutData.vue'
import LinkedData from './LinkedData.vue'
export default {
  components: { AboutData, LinkedData },
  name: 'CoverSection',
}
</script>

<style></style>
