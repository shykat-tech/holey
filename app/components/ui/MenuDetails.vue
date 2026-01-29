<template>
  <div class="menu-details">
    <div class="menu-banner">
      <h2>Breads & Pantry</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-details {
  .menu-banner {
    width: 100%;
    height: 30rem;
    background: $highlight;
    @include flex(center, center);

    h2 {
      color: $light;
      text-align: center;
      font-family: Cinzel;
      font-size: 7rem;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 8.4rem */
      text-transform: uppercase;
      width: 50%;
    }
  }
}
</style>
