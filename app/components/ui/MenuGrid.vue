<script setup lang="ts">
const items = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const pattern1 = [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1];

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
  <div class="grid">
    <div v-for="p in gridShape" class="p">
      <div>
        <div class="box" :class="{ _blank: p === 'empty' }" />
        <div v-if="p !== 'empty'" class="desc">
          <span>Baguette</span>
          <span>Tk 300</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;

  @include clamp-property("column-gap", 1, 2);
  @include clamp-property("row-gap", 1.5, 4);

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .box {
    width: 100%;
    aspect-ratio: 29/32;
    background-color: $primary;

    &._blank {
      opacity: 0;
      pointer-events: none;
    }
  }

  .desc {
    margin-top: 1rem;
    @include flex(space-between, center);

    span {
      color: $text;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
    }
  }
}
</style>
