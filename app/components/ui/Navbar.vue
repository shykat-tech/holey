<script setup lang="ts">
const isMenuOpen = ref(false);
const {$lenis} = useNuxtApp();

const handleToggleMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  } else {
    isMenuOpen.value = true;
  }
}
</script>

<template>
  <div>
    <nav class="body-container" id="navbar">
      <button class="btn menu" @click="handleToggleMenu">Menu</button>
      <img src="/holey_logo.svg" alt="holey logo" class="logo"/>
      <button class="btn location">Location</button>
    </nav>

    <!-- Menu -->
    <Transition name="menu">
      <div v-if="isMenuOpen" class="menu-list">
        <UiMenuList @close="handleToggleMenu"/>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
nav {
  @include clamp-property("padding-top", 1.5, 2.5);
  @include clamp-property("padding-bottom", 1, 2.5);
  @include flex(space-between, center);

  .logo {
    aspect-ratio: 90/43;
    @include clamp-property("width", 7.5, 11.5);
  }

  .btn {
    color: $highlight;
    font-style: normal;
    line-height: normal;
    font-weight: 550;
    text-transform: uppercase;

    @include clamp-property("font-size", 0.875, 1);
  }
}

.menu-list {
  position: fixed;
  inset: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
}

// Transitions
/* OPEN — slow */
.menu-enter-active {
  transition: transform 0.6s cubic-bezier(0.45, 1, 0.45, 1);
}

/* CLOSE — fast */
.menu-leave-active {
  transition: transform 0.2s cubic-bezier(0.2, 0, 1, 1);
}

.menu-enter-from {
  transform: translateY(-100%);
}

.menu-leave-to {
  transform: translateY(-100%);
}
</style>
