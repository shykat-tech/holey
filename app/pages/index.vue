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
  padding-top: 12.5rem;
  padding-bottom: 7.5rem;
}
.separator {
  margin-block: 10rem;
  height: 0.0625rem;
  width: 100%;
  background: $highlight;
}
</style>
