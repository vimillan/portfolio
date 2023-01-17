<template>
  <div>
    <div
      v-for="(item, i) in $vs.getPage(list, page, max)"
      :key="i"
      class="mb-2"
    >
      <vs-row justify="space-between">
        <vs-col lg="1" class="text-w-bold">Title</vs-col>
        <vs-col lg="1" class="text-center">20%</vs-col>
      </vs-row>
      <div class="progress rounded" role="progressbar">
        <div class="progress-bar progress-moved bg-dark rounded" style="--percentage: 10%;"></div>
      </div>
    </div>
    <div
      v-for="(item, i) in $vs.getPage(list, page, max)"
      :key="i"
      class="mb-2"
    >
      <vs-row justify="space-between">
        <vs-col lg="1" class="text-w-bold">Title</vs-col>
        <vs-col lg="1" class="text-center">20%</vs-col>
      </vs-row>
      <div class="progress rounded" role="progressbar">
        <div class="progress-bar progress-moved bg-dark rounded" style="--percentage: 40%;"></div>
      </div>
    </div>
    <vs-pagination
      buttons-dotted
      v-model="page"
      color="#7B8BAD"
      :length="$vs.getLength(list, max)"
    />
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data: () => ({
    page: 1,
    max: 4,
    list: [1, 2],
  }),
}
</script>

<style></style>
