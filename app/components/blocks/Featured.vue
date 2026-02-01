<template>
  <div class="featured">
    <div>
      <div class="smBox box"></div>
      <div class="desc">
        <span>Baguette</span>
        <span>Tk 300</span>
      </div>
    </div>
    <div class="lgBox">
      <div class="box"></div>
      <div class="desc">
        <span>Baguette</span>
        <span>Tk 300</span>
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
    // height: 46rem;
    background-color: $highlight;

    @include clamp-property("height", 12.5, 46);
  }

  .smBox {
    @include clamp-property("height", 12.5, 32);
  }
  .lgBox {
    @media screen and (min-width: 1024px) {
      grid-column: 2 /4;
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
