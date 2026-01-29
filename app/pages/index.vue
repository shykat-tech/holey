<script setup lang="ts">
const items = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const pattern1 = [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1];
const pattern2 = [1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1];

const mapItems = (pattern: number[]) => {
  let idx = 0;
  if (items.length <= 4) return items;
  return pattern
    .map((p) => (p === 1 ? items[idx++] : !items[idx] ? null : "empty"))
    .filter(Boolean);
};

const gridShape = computed(() => mapItems(pattern1));
</script>

<template>
  <div class="body-container">
    <header class="home">
      <h1 class="title">Signature Picks</h1>

      <p class="sub-title">
        Our standout creations, selected for their popularity and quality.
        Perfect for first time visitors or those looking for our best offerings.
      </p>
    </header>

    <BlocksFeatured />
    <div class="grid">
      <div v-for="p in gridShape" class="p">
        <div class="box" :class="{ _blank: p === 'empty' }" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  padding-top: 12.5rem;
  padding-bottom: 7.5rem;

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
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  column-gap: 2rem;
  row-gap: 4rem;

  .box {
    width: 100%;
    aspect-ratio: 29/32;
    background-color: $primary;

    &._blank {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>
