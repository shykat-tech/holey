<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();

import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";

const sliderEl = ref<HTMLElement | null>(null);
let tl: gsap.core.Tween | null = null;

onMounted(() => {
  if (!sliderEl.value) return;

  const track = sliderEl.value.querySelector(".slider-track") as HTMLElement;

  const images = track.children;
  let totalHeight = 0;

  // calculate total height
  Array.from(images).forEach((img) => {
    totalHeight += (img as HTMLElement).offsetHeight;
  });

  tl = gsap.to(track, {
    y: `-${totalHeight / 2}`, // move half because we duplicated
    duration: 30,
    ease: "none",
    repeat: -1,
  });
});

onBeforeUnmount(() => {
  tl?.kill();
});

const handleCloseMenu = () => {
  emit("close");
};

const data = [
  {
    title: "Breads & Pantry",
    items: [
      {
        label: "Breads",
        link: "breads",
      },
      {
        label: "Dairy",
        link: "Dairy",
      },
      {
        label: "Dips & Pate",
        link: "Dips & Pate",
      },
      {
        label: "Cold",
        link: "Cold",
      },
      {
        label: "Snacks & Serials",
        link: "Snacks & Serials",
      },
    ],
  },
  {
    title: "Brunch & Bagels",
    items: [
      {
        label: "Breads",
        link: "breads",
      },
      {
        label: "Dairy",
        link: "Dairy",
      },
      {
        label: "Dips & Pate",
        link: "Dips & Pate",
      },
    ],
  },
  {
    title: "Desserts & Coffee",
    items: [
      {
        label: "Breads",
        link: "breads",
      },
      {
        label: "Dairy",
        link: "Dairy",
      },
      {
        label: "Dips & Pate",
        link: "Dips & Pate",
      },
      {
        label: "Snacks & Serials",
        link: "Snacks & Serials",
      },
    ],
  },
  {
    title: "Pastries & Puffs",
    items: [
      {
        label: "Breads",
        link: "breads",
      },
      {
        label: "Dairy",
        link: "Dairy",
      },
      {
        label: "Dips & Pate",
        link: "Dips & Pate",
      },
      {
        label: "Cold",
        link: "Cold",
      },
      {
        label: "Snacks & Serials",
        link: "Snacks & Serials",
      },
    ],
  },
  {
    title: "Bistro Kitchen",
    items: [
      {
        label: "Breads",
        link: "breads",
      },
      {
        label: "Dairy",
        link: "Dairy",
      },
      {
        label: "Dips & Pate",
        link: "Dips & Pate",
      },
      {
        label: "Cold",
        link: "Cold",
      },
      {
        label: "Snacks & Serials",
        link: "Snacks & Serials",
      },
      {
        label: "Dairy",
        link: "Dairy",
      },
      {
        label: "Dips & Pate",
        link: "Dips & Pate",
      },
      {
        label: "Cold",
        link: "Cold",
      },
      {
        label: "Snacks & Serials",
        link: "Snacks & Serials",
      },
    ],
  },
];
</script>

<template>
  <div class="menu">
    <div class="menu-item body-container">
      <h2 class="heading">Menu</h2>
      <div class="item-wrapper">
        <div
          class="item-box"
          v-for="(menu, idx) in data"
          :key="'item-box' + idx"
        >
          <h3>{{ menu.title }}</h3>
          <ul>
            <li
              v-for="(item, i) in menu.items"
              class="link"
              :key="'item-box' + idx + 'link' + i"
            >
              <NuxtLink to="#">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="slider" ref="sliderEl">
      <div class="slider-track">
        <img src="/navbar/img1.jpg" />
        <img src="/navbar/img2.jpg" />
        <img src="/navbar/img3.png" />

        <!-- duplicate for seamless loop -->
        <img src="/navbar/img1.jpg" />
        <img src="/navbar/img2.jpg" />
        <img src="/navbar/img3.png" />
      </div>
    </div>

    <div class="close-area">
      <button @click="handleCloseMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M58.6673 31.9997C58.6673 17.2721 46.7281 5.33301 32.0006 5.33301C17.2731 5.33301 5.33398 17.2721 5.33398 31.9997C5.33398 46.7271 17.2731 58.6663 32.0006 58.6663C46.7281 58.6663 58.6673 46.7271 58.6673 31.9997Z"
            stroke="#FEF9F1"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M39.9984 40L24 24M24.0017 40L40 24"
            stroke="#FEF9F1"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <span class="directional-text">
        <span>Click to close</span>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  width: 100%;
  height: 100%;
  background: $light;
  overflow-y: auto;
  @include flex(space-between, stretch);

  .menu-item {
    flex: 1;
    height: 100%;

    .heading {
      color: $primary;
      font-family: Cinzel;
      font-style: normal;
      font-weight: 500;
      line-height: 125%;
      text-transform: uppercase;

      @include clamp-property("font-size", 2, 4.5);
      @include clamp-property("padding-block", 2, 5);
    }

    .item-wrapper {
      display: flex;
      flex-flow: column wrap;
      row-gap: 4rem;
      align-content: space-between;
      /* Your container needs a fixed height, and it 
   * needs to be taller than your tallest column. */
      height: calc(100% - 290px);

      &::before,
      &::after {
        content: "";
        flex-basis: 100%;
        width: 0;
        order: 2;
      }

      .item-box {
        width: 28%;

        h3 {
          color: $primary;
          font-family: Cinzel;
          font-size: 1.625rem;
          font-style: normal;
          font-weight: 500;
          line-height: 125%;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        ul {
          list-style: none;

          > * + * {
            margin-top: 1rem;
          }

          .link {
            :deep(a) {
              color: $text;
              //   font-family: "General Sans Variable";
              font-size: 1.25rem;
              font-style: normal;
              font-weight: 450;
              line-height: normal;
              text-decoration: none;
            }
          }
        }

        &:nth-child(3n + 1) {
          order: 1;
        }
        &:nth-child(3n + 2) {
          order: 2;
        }
        &:nth-child(3n) {
          order: 3;
        }
      }
    }
  }

  .slider {
    width: 18%;
    padding-block: 5rem;
    overflow: hidden;
    position: relative;

    .slider-track {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      will-change: transform;
    }

    img {
      width: 100%;
      aspect-ratio: 14 / 23;
      object-fit: cover;
      display: block;
    }
  }

  .close-area {
    width: 15%;
    background: $highlight;
    padding-block: 5rem;
    position: relative;

    @include flex(start, center, nowrap, column);

    .directional-text {
      flex: 1;
      @include flex(center, center);

      span {
        display: block;
        transform: rotate(-90deg);
        color: #fef9f1;
        text-align: center;
        opacity: 0.6;
        font-size: 1rem;
      }
    }
  }
}
</style>
