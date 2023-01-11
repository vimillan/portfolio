<template>
  <div>
    <div class="center-item mb-1">
      <vs-avatar circle color="#434868" size="30">
        <i class="bx bxl-github"></i>
      </vs-avatar>
      &emsp;Github overview
    </div>
    <vs-row>
      <vs-col
        v-for="(item, i) in 4"
        :key="i"
        lg="3"
        class="pa-1 text-center"
      >
        <div class="rounded shadow bg-white pa-1">
          <div class="c-primary fs-4 text-w-bold">+20</div>
          <div>Projects</div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'GithubOverview',
}
</script>

<style></style>
