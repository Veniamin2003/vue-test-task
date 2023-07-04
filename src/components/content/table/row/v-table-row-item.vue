<template>
  <div class="v-table-row-item">
    <div class="row">{{ row_item }}</div>
  </div>
</template>

<script>

export default {
  name: 'v-table-row-item',
  props: {
    row_item: {
      type: String,
      default() {
        return ""
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.v-table-row-item{
  flex-basis: 25%;
  padding: 8px 16px;
  text-align: left;
}

@media screen and (max-width: 1200px) {
  .v-table-row-item {
    flex-basis: max-content;
    min-width: 150px;
    padding-right: 10px;
  }
}
</style>