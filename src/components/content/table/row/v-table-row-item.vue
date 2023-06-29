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
</style>