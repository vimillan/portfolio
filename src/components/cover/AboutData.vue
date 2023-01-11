<template>
  <div class="px-3">
    <div class="fs-1">Hi! I am</div>
    <div class="fs-1 text-w-bold">{{ aboutInfo.shortName }}</div>
    <div class="fs-4">{{ aboutInfo.title }}</div>
    <div class="mt-2">{{ aboutInfo.shortDescription }}</div>
    <vs-row class="mt-2 mb-2" justify="space-between">
      <vs-col lg="6" md="12" sm="12" xs="12">
        <div class="center-item mb-1">
          <vs-avatar circle color="#434868" size="30">
            <i class='bx bxs-phone'></i>
          </vs-avatar>
          &emsp;{{ aboutInfo.phone }}
        </div>
      </vs-col>
      <vs-col lg="6" md="12" sm="12" xs="12">
        <div class="center-item mb-1">
          <vs-avatar circle color="#434868" size="30">
            <i class='bx bxs-envelope'></i>
          </vs-avatar>
          &emsp;{{ aboutInfo.email }}
        </div>
      </vs-col>
    </vs-row>
    <vs-button size="large" color="#7B8BAD" floating>Go to my resume</vs-button>
  </div>
</template>

<script>
export default {
  name: 'AboutData',
  data: () => ({
    aboutInfo: {
      shortName: 'Violeta Millán',
      fullName: '',
      age: 0,
      title: 'Multiplatform Software Development Engineer',
      description: '',
      shortDescription: 'Short description',
      phone: '(+52) 777 225 3857',
      email: 'vimillanvi@gmail.com',
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
