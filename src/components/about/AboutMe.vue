<template>
  <div class="px-4 bg-blue-back mt-4">
    <div class="text-w-bold fs-3">About myself</div>
    <vs-row class="mt-2" justify="space-between">
      <vs-col lg="5" md="12" sm="12" xs="12">
        <div class="pa-2 fs-7 rounded shadow bg-white mb-3">
          {{ aboutInfo.description }}
        </div>
        <GithubOverview />
      </vs-col>
      <vs-col lg="6" md="12" sm="12" xs="12" class="rounded shadow bg-white">
        <div class="pa-2">
          <div class="progress rounded" role="progressbar">
            <div class="progress-bar bg-dark rounded" :value="aboutInfo.age"></div>
          </div>
        </div>
      </vs-col>
    </vs-row>
    <br />
  </div>
</template>

<script>
import GithubOverview from './GithubOverview.vue'
export default {
  components: { GithubOverview },
  name: 'AboutMe',
  data: () => ({
    aboutInfo: {
      shortName: 'Violeta Millán',
      fullName: '',
      age: 90,
      title: 'Multiplatform Software Development Engineer',
      description:
        'I am a hard-working person who loves to learn and improving my professional skills as a frontend developer. In addition, I enjoy designing with a UI/UX approach. My duties include teamwork, assertive communication, my eager to learn and attention to detail and I would like to become a senior specializing in web design.',
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
