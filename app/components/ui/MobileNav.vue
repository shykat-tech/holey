<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();

interface MenuItem {
  label: string;
  link: string;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

const props = defineProps<{
  menuList: MenuGroup[];
}>();

// track multiple open menus
const openMenus = ref<Set<number>>(new Set());

const toggleMenu = (index: number) => {
  if (openMenus.value.has(index)) {
    openMenus.value.delete(index);
  } else {
    openMenus.value.add(index);
  }
};

const handleCloseMenu = () => {
  emit("close");
};
</script>

<template>
  <nav class="__mobile-nav">
    <!-- HEADER -->
    <div class="header">
      <h2 class="heading">Menu</h2>
      <button @click="handleCloseMenu">
        <span>Close</span>
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M40.75 20.75C40.75 9.7043 31.7956 0.75 20.75 0.75C9.7043 0.75 0.75 9.7043 0.75 20.75C0.75 31.7956 9.7043 40.75 20.75 40.75C31.7956 40.75 40.75 31.7956 40.75 20.75Z"
              stroke="#014369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M26.7483 26.7502L14.7495 14.7502M14.7508 26.7502L26.7495 14.7502" stroke="#014369" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </button>
    </div>

    <!-- MENU LIST -->
    <ul class="menu-list__items">
      <li
          v-for="(mList, i) in menuList"
          :key="i"
          class="menu-item"
      >
        <button @click="toggleMenu(i)">
          <span class="list__title">{{ mList.title }}</span>
          <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              :class="{ open: openMenus.has(i) }"
          >
            <path
                d="M2.71928 5.93945L7.06595 10.2861C7.57928 10.7994 8.41928 10.7994 8.93262 10.2861L13.2793 5.93945"
                stroke="#014369"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>

        <Transition name="menu">
          <div v-if="openMenus.has(i)" class="sub-menu">
            <li v-for="subMenu in mList.items" :key="subMenu.label">
              <NuxtLink :to="subMenu.link" @click="handleCloseMenu">
                {{ subMenu.label }}
              </NuxtLink>
            </li>
          </div>
        </Transition>
      </li>
    </ul>
  </nav>
</template>


<style scoped lang="scss">
.__mobile-nav {

  @media screen and (min-width: 1024px) {
    display: none;
  }

  .header {
    @include flex(space-between, center);
    @include clamp-property("padding-inline", 1.25, 1.25);
    @include clamp-property("padding-top", 2, 2);
    @include clamp-property("padding-bottom", 1.5, 1.5);
    border-bottom: 1px solid #E3DED8;

    .heading {
      color: $primary;
      font-family: Cinzel;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 125%; /* 2.5rem */
      text-transform: uppercase;
    }

    button {
      @include flex(center, center);
      gap: 0.5rem;

      span {
        color: #105984;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
      }


    }
  }

  .menu-list__items {
    list-style: none;

    .menu-item {
      padding-bottom: 0.75rem;
      overflow: hidden;

      &:nth-child(1) {
        margin-top: 1rem;
      }

      button {
        width: 100%;
        @include flex(space-between, center);
        @include clamp-property("padding-inline", 1.25, 1.25);
        @include clamp-property("padding-block", 1, 1);

        .list__title {
          color: $primary;
          font-family: Cinzel;
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 550;
          line-height: 125%; /* 1.5625rem */
          text-transform: uppercase;
        }

        svg {
          transition: transform 0.3s ease;

          &.open {
            transform: rotate(180deg);
          }
        }
      }

      .sub-menu {
        a {
          color: $text;
          font-size: 1.125rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          text-decoration: none;
          padding-block: 0.75rem;
          padding-inline: 1.88rem;
          display: block;
        }
      }
    }
  }
}

/* TRANSITIONS */
.menu-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>