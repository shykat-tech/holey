<script setup lang="ts"></script>

<template>
  <div class="body-container">
    <header>
      <UiSectionHeader
        title="Signature Picks"
        subTitle=" Our standout creations, selected for their popularity and quality. Perfect
      for first time visitors or those looking for our best offerings."
      />
    </header>

    <BlocksFeatured />
    <UiMenuGrid />

    <div class="separator" />

    <UiHomeMenu />
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
