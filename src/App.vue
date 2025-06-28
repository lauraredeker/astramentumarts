<script lang="ts" setup>
  import ScrollTopBtn from './components/common/BaseScrollToTop.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <main
    class="tw-relative tw-w-full tw-font-sans tw-text-base custom-bg-image tw-overflow-x-clip tw-scroll-smooth md:tw-text-l 3xl:tw-text-xl"
  >
    <RouterView />
    <ScrollTopBtn />
  </main>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
	transition: opacity 0.8s ease;
}
.fade-in-enter-from,
.fade-in-leave-to {
	opacity: 0;
}

.custom-bg-image {
	@apply tw-bg-fixed tw-bg-center;
		background-image: url("/img/pictures/bgImage.webp");
    background-size: cover;

	@screen md {
		background-image: url("/img/pictures/bgImage.webp");
	}
}
</style>
