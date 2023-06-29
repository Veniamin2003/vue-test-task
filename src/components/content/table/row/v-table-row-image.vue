<template>
  <div class="v-table-row-image">
    <img class="v-table-row-image__image" :src=" require('../../../../assets/images/' + row_item.image) " alt="">
  </div>
</template>

<script>

export default {
  name: 'v-table-row-image',
  props: {
    row_item: {
      type: Object,
      default() {
        return {}
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.v-table-row-image{
  flex-basis: 0;
  padding: 8px 16px;
  text-align: left;
  &__image {
    width: 50px;
    border-radius: 100%;
  }
}
</style>