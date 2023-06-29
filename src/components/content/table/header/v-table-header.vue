<template>
  <div class="v-table-header">
    <div class="v-table-header__block">
      <div class="v-table-header-item">
        <p class="item">СОТРУДНИК</p>
      </div>
      <template v-for="item in row_data.params" :key="item.id">
        <v-table-header-item
            v-if="item.isVisible"
            :header_item="item.label.toUpperCase()"
        />
      </template>
    </div>
  </div>
</template>

<script>
import vTableHeaderItem from "@/components/content/table/header/v-table-header-item.vue";

export default {
  name: 'v-table-header',
  components: {vTableHeaderItem},
  props: {
    row_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.v-table-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  &__block {
    display: flex;
    width: 95%;
    justify-content: space-around;
  }
}


</style>