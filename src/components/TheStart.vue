<script lang="ts" setup>
// Components
  import { RouterLink } from 'vue-router'
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'
  import BaseBtn from './common/BaseBtn.vue'

  const [isSectionVisible, onSectionVisibility] = useVisibility()
</script>

<template>
  <section
    v-element-visibility="onSectionVisibility"
    class="tw-container tw-relative tw-z-10 tw-w-full tw-h-screen"
  >
    <div class="tw-flex tw-flex-col tw-justify-center tw-align-middle">
      <div class="tw-w-max-screen-md">
        <div class="tw-flex tw-items-center tw-self-stretch tw-w-full tw-gap-4 tw-justify-space-between">
          <div class="tw-w-full tw-h-1 tw-bg-white" />
          <div class="tw-font-sans tw-tracking-wide tw-text-white tw-uppercase">
            Privates Tattoo-Atelier in Leipzig
          </div>
          <div class="tw-w-full tw-h-1 tw-bg-white" />
        </div>
          
        <div class="tw-relative tw-z-20 tw-mx-auto md:tw-mt-20 xl:tw-w-11/12">
          <h1
            class="tw-select-none tw-text-gold tw-font-serif tw-text-center tw-text-[16vmin] md:tw-max-w-screen-md lg:tw-text-8xl xl:tw-max-w-screen-lg 2xl:-tw-mt-20 2xl:tw-text-9xl"
          >
            ASTRA<br>MENTUM
            <span class="tw-text-white">
              TATTOO
            </span>
          </h1>
        </div>

        <BaseBtn
          to="/#termine"
          text="Termin buchen"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-image {
  clip-path: circle(50% at 50% 50%);
}
</style>