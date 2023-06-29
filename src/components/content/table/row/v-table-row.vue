<template>
  <div class="v-table-row">
    <div class="v-table-row__employer">
      <v-table-row-image
          :row_item="row_data"/>
      <v-table-row-item style="flex-basis: 0"
                        :row_item="row_data.name"
      />
    </div>

    <template v-for="item in row_data.params" :key="item.id">
      <v-table-row-item
          v-if="item.isVisible"
          :row_item="item.value"
      />
    </template>

    <div class="row"></div>
  </div>
</template>

<script>
import vTableRowItem from "@/components/content/table/row/v-table-row-item.vue";
import {mapGetters} from "vuex";
import VTableRowImage from "@/components/content/table/row/v-table-row-image.vue";


export default {
  name: 'v-table-row',
  components: {
    VTableRowImage,
    vTableRowItem
  },
  props: {
    row_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
    }),
    getVisibleParams() {
      return Object.values(this.row_data.params).filter(item => item.isVisible)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-table-row {
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(187, 186, 186, 0.47);
  &__employer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-basis: 25%;
    padding: 8px 32px 8px 0;
    text-align: left;
  }
}

/*.row {
  flex-basis: 25%;
  padding: 8px 16px;
  text-align: left;
}*/
</style>