<script setup lang="ts">
defineProps<{
  title: string;
  subTitle: string;
}>();
</script>

<template>
  <div>
    <h1 class="title">{{ title }}</h1>

    <p class="sub-title">{{ subTitle }}</p>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: $primary;
  font-family: Cinzel;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 136px */
  text-transform: uppercase;
  width: 55%;

  @include clamp-property("font-size", 3, 9.5);
}

.sub-title {
  color: $text;
  font-style: normal;
  font-weight: 400;
  width: 30%;
  margin-left: 55%;
  opacity: 0.85;

  @include clamp-property("font-size", 1.25, 1.75);
}
</style>
