<template>
  <div class="v-table-header">
    <div class="v-table-header__block">
      <div class="v-table-header-item_employer"
           @click="sortUsers(this.employerType)"
      >
        <p class="row">СОТРУДНИК</p>
      </div>
      <template v-for="item in row_data.params" :key="item.id">
        <v-table-header-item
            v-if="item.isVisible"
            :header_item="item.label.toUpperCase()"
            @click="sortUsers(item.label.toLowerCase())"
        />
      </template>
    </div>
  </div>
</template>

<script>
import vTableHeaderItem from "@/components/content/table/header/v-table-header-item.vue";
import {mapState} from "vuex";


export default {
  name: 'v-table-header',
  components: {vTableHeaderItem},
  props: {
    row_data: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      employerType: "сотрудник"
    }
  },
  computed: {
    ...mapState({
      users: state => state.users.users
    }),
  },
  methods: {
    sortUsers(type) {
      switch (type) {
        case 'сотрудник':
          this.users.sort((a,b) => a.name.localeCompare(b.name));
          break;
        case 'пол':
          this.users.sort((a,b) => a.params.gender.value.localeCompare(b.params.gender.value));
          break;
        case 'должность':
          this.users.sort((a,b) => a.params.work_position.value.localeCompare(b.params.work_position.value));
          break;
        case 'отдел':
          this.users.sort((a,b) => a.params.department.value.localeCompare(b.params.department.value));
          break;
        case 'компания':
          this.users.sort((a,b) => a.params.company_name.value.localeCompare(b.params.company_name.value));
          break;
        case 'локация':
          this.users.sort((a,b) => a.params.company_locate.value.localeCompare(b.params.company_locate.value));
          break;
        default:
          alert( "Нет таких значений" );
      }
    },
  },
  mounted() {
    this.users.sort((a,b) => a.name.localeCompare(b.name));
  }
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

@media screen and (max-width: 1200px) {
  .v-table-header {

    &__block {

      justify-content: flex-start;
    }
  }
}


</style>