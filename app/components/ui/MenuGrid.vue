<script setup lang="ts">
import type {FeatureItem} from "~~/public/data"

const props = defineProps<{
  items: FeatureItem[],
}>();

const pattern1 = [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1];

const mapItems = (pattern: number[]) => {
  let idx = 0;
  if (props.items.length <= 4) return props.items;
  return pattern
      .map((p) => (p === 1 ? props.items[idx++] : !props.items[idx] ? null : "empty"))
      .filter(Boolean);
};

const gridShape = computed(() => mapItems(pattern1));

</script>

<template>
  <div class="grid">
    <div v-for="p in gridShape" class="lg-items">
      <div class="box" :class="{ _blank: p === 'empty' }">
        <img :src="`http://localhost:8000/${p?.value.image.url}`" :alt="p?.value.name">
      </div>
      <div v-if="p !== 'empty'" class="desc">
        <span>{{ p?.value.name }}</span>
        <span>Tk {{ p?.value.price }}</span>
      </div>
    </div>

    <div v-for="p in items" class="sm-items">
      <div class="box">
        <img :src="`http://localhost:8000/${p?.value.image.url}`" :alt="p?.value.name">
      </div>
      <div class="desc">
        <span>{{ p?.value.name }}</span>
        <span>Tk {{ p?.value.price }}</span>
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

  .lg-items {
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }

  .sm-items {
    display: block;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  .box {
    width: 100%;
    aspect-ratio: 29/32;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

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
