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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  margin-bottom: 4rem;

  .box {
    width: 100%;
    height: 46rem;
    background-color: $highlight;
  }

  .smBox {
    height: 32rem;
  }
  .lgBox {
    grid-column: 2 /4;
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
