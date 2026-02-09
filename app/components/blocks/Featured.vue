<script setup lang="ts">

import type {FeatureItem} from "~~/public/data";

const {result, pending} = useData("featured_items")
const items = computed(() => result.value.slice(0, 2))
</script>

<template>
  <div v-if="pending">
    Loading Featured items...
  </div>
  <div v-else class="featured" id="featuredSection">
    <div
        class="box"
        :class="i===0 ? 'smBox' : 'lgBox'"
        v-for="(box, i) in items as FeatureItem[]"
        :key="i"
    >
      <img :src="`http://localhost:8000/${box?.value.image.url}`" :alt="box?.value.name">
      <div class="desc">
        <span>{{ box?.value.name }}</span>
        <span>Tk {{ box?.value.price }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.featured {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 2rem;
  margin-bottom: 4rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .box {
    width: 100%;
    @include clamp-property("height", 12.5, 46);

    img {
      width: 100%;
      height: calc(100% - 28px);
      object-fit: cover;
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

  .smBox {
    @include clamp-property("height", 12.5, 32);
  }

  .lgBox {
    @media screen and (min-width: 1024px) {
      grid-column: 2 /4;
    }
  }


}
</style>
