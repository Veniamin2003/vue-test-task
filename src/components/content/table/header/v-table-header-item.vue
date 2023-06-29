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
.v-table-header-item {
  font-weight: bold;
  color: rgba(122, 124, 122, 0.75);
  text-align: left;
  flex-basis: 25%;
  padding: 0 16px;
}
</style>