<template>
  <section id="contact" class="portfolio-section pb-5">
    <div class="container">
      <div class="contact-shell glass-panel">
        <div class="row g-4 align-items-center">
          <div class="col-12 col-lg-7">
            <SectionTitle
              kicker="Contact"
              :title="content.contact.title"
              :description="content.contact.description"
            />
          </div>
          <div class="col-12 col-lg-5">
            <div class="contact-actions d-grid gap-3">
              <a class="btn btn-primary hero-btn" :href="`mailto:${profile.email}`">
                {{ content.contact.primaryLabel }}
              </a>
              <a
                class="btn btn-outline-light hero-btn alt-btn"
                :href="githubUrl"
                target="_blank"
                rel="noreferrer"
              >
                {{ content.contact.secondaryLabel }}
              </a>
            </div>
          </div>
          <div class="col-12">
            <div class="contact-meta row g-3">
              <div class="col-12 col-md-4">
                <div class="meta-card">
                  <small>Email</small>
                  <span>{{ profile.email }}</span>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="meta-card">
                  <small>{{ locale === "es" ? "Ubicación" : "Location" }}</small>
                  <span>{{ profile.location }}</span>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="meta-card">
                  <small>{{ locale === "es" ? "Teléfono" : "Phone" }}</small>
                  <span>{{ profile.phone }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import SectionTitle from "../ui/SectionTitle.vue";

const props = defineProps({
  profile: { type: Object, required: true },
  content: { type: Object, required: true },
  locale: { type: String, required: true },
});

const githubUrl = computed(
  () => props.profile.socialLinks.find((item) => item.label === "GitHub")?.url || "#"
);
</script>
