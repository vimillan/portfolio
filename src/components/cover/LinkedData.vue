<template>
  <div class="bg-white rounded shadow">
    <vs-row>
      <vs-col lg="12" md="6" sm="6" xs="6">
        <div class="center mt-1">
          <vs-tooltip right>
            <vs-button color="#0080A9" circle icon floating>
              <i class="bx bxl-linkedin"></i>
            </vs-button>
            <template #tooltip>
              Go to my LinkedIn!
            </template>
          </vs-tooltip>
        </div>
      </vs-col>
      <vs-col lg="12" md="6" sm="6" xs="6">
        <div class="center mt-1 mb-1">
          <vs-tooltip right>
            <vs-button color="#8B91C8" circle icon floating>
              <i class="bx bxl-github"></i>
            </vs-button>
            <template #tooltip>
              Go to my github!
            </template>
          </vs-tooltip>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'LinkedData',
  data: () => ({
    aboutInfo: {
      shortName: 'Violeta Millán',
      fullName: '',
      age: 0,
      title: 'Multiplatform Software Development Engineer',
      description: '',
      shortDescription: 'Short description',
      phone: '',
      email: '',
      pages: [
        {
          name: '',
          sourceLink: '',
          shortDescription: '',
        },
      ],
    },
  }),
}
</script>

<style></style>
