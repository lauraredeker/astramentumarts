<script setup lang="ts">
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'

  defineProps<{
    title?: string;
    target?: string;
    containerClass?: string;
    arrowClass?: string;
  }>()

  const showTitle = ref(false)
</script>

<template>
  <div :class="['tw-text-center', containerClass]">
    <RouterLink
      :to="target ? target : '/#'"
      :aria-label="title"
      class="tw-relative tw-px-3 tw-py-4 tw-rounded-full focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500"
      @mouseover="showTitle = true"
      @focusin="showTitle = true"
      @mouseout="showTitle = false"
      @focusout="showTitle = false"
    >
      <Transition name="fade">
        <span
          v-show="showTitle"
          class="tw-absolute tw-hidden tw-w-56 tw-font-semibold tw-tracking-wider tw-text-left tw-uppercase tw-select-none tw-bottom-12 tw-left-16 tw-text-indigo-950 dark:tw-text-indigo-400 md:tw-left-20 md:tw-block"
        >
          {{ title }}
        </span>
      </Transition>
      <span
        :class="arrowClass ? arrowClass : 'tw-text-indigo-950 dark:tw-text-indigo-300'"
        class="tw-inline-block tw-w-10 tw-h-10 tw-i-ph-arrow-down-bold"
      />
    </RouterLink>
  </div>
</template>
