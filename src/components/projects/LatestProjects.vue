<template>
  <div class="px-4 bg-blue-back mt-4">
    <div class="text-w-bold fs-3">Latest projects</div>
    <vs-card-group>
      <vs-card type="3" v-for="(i, item) in 6" @click="handleClick" :key="i">
        <template #title>
          <h3>Project name</h3>
        </template>
        <template #img>
          <img
            src="https://vuesax.com/foto1.png"
            alt=""
            style="width: 150px;"
          />
        </template>
        <template #text>
          <p>Description {{ item }}</p>
        </template>
        <template #interactions>
          <vs-button floating color="#7B8BAD">
            <i class="bx bx-folder-open"></i>
            Details
            <template #animate>
              <i class="bx bxs-folder-open"></i>
              Details
            </template>
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>

    <br />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
