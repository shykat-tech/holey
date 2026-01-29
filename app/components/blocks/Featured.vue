<template>
  <div class="featured">
    <div class="smBox box"></div>
    <div class="lgBox box"></div>
  </div>
</template>

<style scoped lang="scss">
.featured {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  margin-bottom: 4rem;

  .box {
    width: 100%;
    aspect-ratio: 29/32;
    background-color: $highlight;
  }

  .smBox {
    grid-column: 2/4;
  }
}
</style>
