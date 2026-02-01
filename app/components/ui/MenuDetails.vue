<script setup></script>

<template>
  <div class="menu-details">
    <div class="menu-banner">
      <h2 class="title">Breads & Pantry</h2>
    </div>

    <div class="details-list">
      <h2 class="list-title">Bread</h2>

      <div class="list-table">
        <div class="table-header">
          <span>Dish</span>
          <span>Description</span>
          <span>Price (BDT)</span>
        </div>

        <div class="table-data">
          <span>Baguette</span>
          <span>
            Integer at imperdiet turpis integer tortor condimentum pellentesque.
          </span>
          <span>Tk 350</span>
        </div>
        <div class="table-data">
          <span>Brioche</span>
          <span>condimentum pellentesque.</span>
          <span>Tk 350</span>
        </div>
        <div class="table-data">
          <span>House White</span>
          <span>Integer at imperdiet turpis integer tortor.</span>
          <span>Tk 350</span>
        </div>
        <div class="table-data">
          <span>Sourdough</span>
          <span></span>
          <span>Tk 250</span>
        </div>
      </div>
    </div>

    <div class="details-list">
      <h2 class="list-title">Bread</h2>

      <div class="list-table">
        <div class="table-header">
          <span>Dish</span>
          <span>Description</span>
          <span>Price (BDT)</span>
        </div>

        <div class="table-data">
          <span>Baguette</span>
          <span>
            Integer at imperdiet turpis integer tortor condimentum pellentesque.
          </span>
          <span>Tk 350</span>
        </div>
        <div class="table-data">
          <span>Brioche</span>
          <span>condimentum pellentesque.</span>
          <span>Tk 350</span>
        </div>
        <div class="table-data">
          <span>House White</span>
          <span>Integer at imperdiet turpis integer tortor.</span>
          <span>Tk 350</span>
        </div>
        <div class="table-data">
          <span>Sourdough</span>
          <span></span>
          <span>Tk 250</span>
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
    height: 30rem;
    background: $highlight;
    @include flex(center, center);
    @include clamp-property("margin-bottom", 3, 10);

    .title {
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
  .details-list {
    @include flex(space-between);
    @include clamp-property("margin-bottom", 3, 10);

    &:last-child {
      margin-bottom: 0;
    }
    gap: 5rem;

    .list-title {
      width: 28%;
      color: $primary;
      font-family: Cinzel;
      font-size: 5rem;
      font-style: normal;
      font-weight: 500;
      line-height: 125%; /* 6.25rem */
      text-transform: uppercase;
    }

    .list-table {
      width: 72%;
      display: block;

      .table-header,
      .table-data {
        display: block;
        width: 100%;
        @include flex(space-between);
        gap: 2.5rem;
        padding-bottom: 1rem;
        border-bottom: 0.0625rem solid $primary;
      }

      .table-header {
        margin-bottom: 1.75rem;
      }

      .table-header span {
        color: $text;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: capitalize;

        &:nth-child(1) {
          width: 30%;
        }
        &:nth-child(2) {
          flex: 1;
        }
        &:nth-child(3) {
          text-align: end;
        }
      }

      .table-data {
        border: none;
        padding-block: 1.75rem;
        border-bottom: 1px solid rgba(1, 67, 105, 0.07);

        &:last-child {
          border: none;
        }

        span:nth-child(1),
        span:nth-child(3) {
          width: 30%;
          color: $text;
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: capitalize;
        }

        span:nth-child(3) {
          width: auto;
        }

        span:nth-child(2) {
          flex: 1;
          color: $text;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
