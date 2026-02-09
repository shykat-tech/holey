<script setup lang="ts">
import type {Category, SubCategory} from "~~/public/data"

const {result, pending} = useData("category")
</script>

<template>
  <div v-if="pending">
    Loading menu details
  </div>
  <div v-else class="menu-details"
       v-for="(menu, i) in result as Category[]" :key="`menu-${i}`">
    <div class="menu-banner">
      <img :src="`http://localhost:8000/${menu.value.thumbnail.url}`" :alt="menu.value.name">
      <h2 class="title">{{ menu.value.name }}</h2>
    </div>

    <div :id="menuList.name.toLowerCase().split(' ').join('_')" class="details-list"
         v-for="(menuList, j) in menu.value.subcategories as SubCategory[]"
         :key="`menu-${i}-menuList-${j}`">
      <h2 class="list-title">{{ menuList.name }}</h2>

      <div class="list-table">
        <div class="table-header">
          <span>Dish</span>
          <span>Description</span>
          <span>Price (BDT)</span>
        </div>

        <div class="table-data" v-for="(mm, k) in menuList.items" :key="`menu-${i}-menuList-${j}-menu-data-${k}`">
          <span class="dish-title">{{ mm.name }}</span>
          <span class="dish-desc">
            {{ mm.description }}
          </span>
          <span class="price">Tk {{ mm.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-details {
  @include clamp-property("margin-bottom", 3, 15);

  .menu-banner {
    width: 100%;
    @include flex(center, center);
    @include clamp-property("margin-bottom", 2, 10);
    @include clamp-property("height", 12, 30);
    position: relative;

    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      background: #000;
      opacity: 0.4;
      z-index: -1;
      inset: 0;
    }


    img {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      object-fit: cover;
      z-index: -2;
    }

    .title {
      color: $light;
      text-align: center;
      font-family: Cinzel, serif;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 8.4rem */
      text-transform: uppercase;

      @include clamp-property("font-size", 2, 7);

      @media screen and (min-width: 1024px) {
        width: 50%;
      }
    }
  }

  .details-list {
    @include flex(space-between, start, nowrap, column);
    @include clamp-property("margin-bottom", 2, 10);
    @include clamp-property("gap", 2, 5);
    scroll-margin-top: 80px;

    @media screen and (min-width: 1024px) {
      @include flex(space-between);
    }

    &:last-child {
      margin-bottom: 0;
    }

    .list-title {
      width: 28%;
      color: $primary;
      font-family: Cinzel, serif;
      font-style: normal;
      font-weight: 500;
      line-height: 125%; /* 6.25rem */
      text-transform: uppercase;

      @include clamp-property("font-size", 1.5, 5);
    }

    .list-table {
      display: block;
      width: 100%;
      @media screen and (min-width: 1024px) {
        width: 72%;
      }

      .table-header,
      .table-data {
        display: block;
        width: 100%;
        @include flex(space-between, start, wrap);
        padding-bottom: 1rem;
        border-bottom: 0.0625rem solid $primary;
        @include clamp-property("gap", 0.5, 2.5);
      }

      .table-header {
        @include clamp-property("margin-bottom", 1.5, 1.75);
      }

      .table-header span {
        color: $text;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: capitalize;
        @include clamp-property("font-size", 1.125, 1.75);

        &:nth-child(1) {
          // flex: 1;
          @media screen and (min-width: 1024px) {
            width: 30%;
          }
        }

        &:nth-child(2) {
          display: none;
          @media screen and (min-width: 1024px) {
            flex: 1;
            display: inline-block;
          }
        }

        &:nth-child(3) {
          text-align: end;
        }
      }

      .table-data {
        border: none;
        border-bottom: 1px solid rgba(1, 67, 105, 0.07);

        @include clamp-property("padding-block", 1, 1.75);

        &:last-child {
          border: none;
        }

        .dish-title,
        .price {
          width: 30%;
          color: $text;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: capitalize;
          @include clamp-property("font-size", 1, 1.25);
        }

        .dish-title {
          width: 80%;

          @media screen and (min-width: 1024px) {
            width: 30%;
          }
        }

        .price {
          text-align: end;
        }

        .price {
          width: auto;
        }

        .dish-desc {
          color: $text;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-transform: capitalize;
          order: 1;
          @include clamp-property("font-size", 0.875, 1);

          @media screen and (min-width: 1024px) {
            flex: 1;
            order: 0;
          }
        }
      }
    }
  }
}
</style>
