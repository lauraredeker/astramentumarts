<script lang="ts" setup>
  const props = defineProps<{
    hasArrow?: boolean;
    href?: string;
    text?: string;
    to?: string;
  }>()

  const element = props.href ? 'a' : 'router-link'
</script>

<template>
  <component
    :is="element"
    :href="props.href || ''"
    :to="props.to"
    class="tw-relative tw-block focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500"
  >
    <span
      ref="btn"
      class="tw-relative tw-flex tw-flex-row tw-items-center tw-self-center tw-justify-center tw-px-10 tw-py-4 tw-overflow-hidden tw-font-semibold tw-text-white tw-transition-all tw-bg-indigo-700  tw-rounded-full tw-cursor-pointer custom-button hover:tw-border-indigo-800 hover:tw-text-white dark:tw-text-white md:tw-mt-0 md:tw-px-16 md:tw-py-4"
    >
      <span class="tw-relative tw-z-10 tw-flex tw-flex-row tw-items-center tw-align-middle">
        {{ text }}
        <span
          v-if="hasArrow"
          class="tw-ml-3 tw-i-ph-arrow-right-bold"
        />
        <slot />
      </span>
    </span>
  </component>
</template>

<style scoped>
</style>
