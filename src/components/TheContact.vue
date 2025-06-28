<script lang="ts" setup>
// Components
  import TheFooter from '../components/layouts/TheFooter.vue'
  import CopyEmail from '../components/features/CopyEmail.vue'
  import { vElementVisibility } from '@vueuse/components'

  // Utilities
  import { useVisibility } from '../composables/useVisibility'
  const [isSectionVisible, onSectionVisibility] = useVisibility()

</script>

<template>
  <section class="tw-flex tw-flex-col tw-justify-between dark:tw-bg-opacity-40 3xl:tw-h-screen">
    <section
      class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-pt-24 tw-pb-16 tw-text-center lg:tw-pb-28 3xl:tw-pt-40"
    >
      <div
        v-element-visibility="onSectionVisibility"
        :class="{ 'animate__animated animate__fadeInUp': isSectionVisible }"
        class="tw-container tw-pb-10 md:tw-pt-20 lg:tw-w-2/3 3xl:tw-w-1/2"
      >
        <h1
          class="tw-select-none tw-text-gold-default tw-font-serif tw-text-center tw-text-[4vmin] md:tw-max-w-screen-md lg:tw-text-8xl xl:tw-max-w-screen-lg 2xl:-tw-mt-20 2xl:tw-text-9xl"
        >
          Termine
        </h1>


        <p class="tw-mt-8 tw-mb-2 tw-text-justify tw-hyphens-auto md:tw-mt-10 md:tw-text-center">
          {{ $t('contact.text') }}
        </p>

        <CopyEmail class="tw-inline-block tw-mt-5 tw-text-center" />
</div>
    </section>

    <the-footer />
  </section>
</template>
