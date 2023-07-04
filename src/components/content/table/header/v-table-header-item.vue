<template>
  <div class="v-table-header-item">
    <p class="row">{{ header_item }}</p>
  </div>
</template>

<script>

export default {
  name: 'v-table-row-item',
  props: {
    header_item: {
      type: String,
      default() {
        return ""
      }
    }
  }

}
</script>

<style lang="scss">
.v-table-header-item, .v-table-header-item_employer {
  font-weight: bold;
  color: rgba(122, 124, 122, 0.75);
  text-align: left;
  flex-basis: 25%;
  padding: 0 16px;
}
.v-table-header-item_employer {
  min-width: 200px;
}
.row {
  cursor: pointer;
  transition: 600ms;
}
.row:hover {
  color: #282828;
}

@media screen and (max-width: 1200px) {
  .v-table-header-item, .v-table-header-item_employer {
    justify-content: flex-start;
    min-width: 150px;
    padding-right: 10px;
  }
  .v-table-header-item_employer {
    min-width: 265px;
  }
}
</style>