<script setup lang="ts">
import type {Header} from "~~/public/data";

const {$gsap} = useNuxtApp()
const headerRef = ref(null)

const items = computed(() => result?.value.slice(2))
const {result} = useData("featured_items")
const {result: header} = useData("header")

console.log(items)

onMounted(() => {
  const tl = $gsap.timeline()

  tl.from(headerRef.value, {
    y: 300,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "Power4.out"
  }).from("#featuredSection", {
    y: 300,
    opacity: 0,
    duration: 1,
    ease: "Power4.out"
  }, "<").from("#navbar", {
    y: -300,
    opacity: 0,
    duration: 0.75,
    ease: "Power4.out"
  }, "<")
})
</script>

<template>
  <div class="body-container">
    <header ref="headerRef">
      <UiSectionHeader
          :title="header.title"
          :subTitle="header.description"
      />
    </header>

    <BlocksFeatured/>
    <UiMenuGrid :items="items"/>

    <div class="separator"/>

    <UiHomeMenu/>
  </div>
</template>

<style scoped lang="scss">
header {
  @include clamp-property("padding-top", 3, 12.5);
  @include clamp-property("padding-bottom", 2.5, 7.5);
}

.separator {
  height: 0.0625rem;
  width: 100%;
  background: $highlight;

  @include clamp-property("margin-block", 3, 10);
}
</style>