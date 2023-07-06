<template>
  <div class="v-search-container">
      <div class="v-search-container__block">
          <v-my-input :model-value="this.searchQuery"
                      @update:model-value="SET_SEARCH_QUERY"/>


        <button @click="showDialog"
                class="v-search-container__btn"
                v-if="COUNT_ACTIVE_FILTERS === 0"
        >
          <span class="material-symbols-outlined">
            filter_alt
          </span>
          Фильтр
        </button>

        <button @click="showDialog"
                class="v-search-container__btn_filter"
                v-else>
          <span class="material-symbols-outlined">
            filter_alt
          </span>
          Фильтр ({{COUNT_ACTIVE_FILTERS}})
        </button>

        <v-filter-container v-model:show="dialogVisible">
          <v-filter-form/>
        </v-filter-container>
      </div>
  </div>
</template>

<script>
import VMyInput from "@/components/content/search/v-my-input.vue";
import {mapGetters, mapMutations, mapState} from "vuex";
import VFilterContainer from "@/components/filters/v-filter-container.vue";
import VFilterForm from "@/components/filters/v-filter-form.vue";

export default {
  name: 'v-search-container',

  components: {VFilterForm, VFilterContainer, VMyInput},
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    ...mapMutations({
      SET_SEARCH_QUERY: "users/SET_SEARCH_QUERY"
    })
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      searchQuery: state => state.users.searchQuery,
      countActiveFilters: state => state.countActiveFilters
    }),
    ...mapGetters({
      COUNT_ACTIVE_FILTERS: "users/COUNT_ACTIVE_FILTERS"
    })

  }

}
</script>

<style lang="scss" scoped>
.v-search-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
  &__block {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn, &__btn_filter {
    z-index: 1;
    cursor: pointer;
    width: 175px;
    height: 55px;
    border: 1px solid transparent;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgb(3,158,247);
    font-weight: 600;
    transition: 300ms;
    background: rgb(241,250,255);
  }
  @media (hover: hover) {
    &__btn:hover, &__btn_filter:hover{
      color: white;
      background: rgb(3,158,247);
      border: 1px solid rgba(3, 158, 247, 0.45);
    }
  }


  &__btn span {
    font-weight: 600;
    margin-right: 5px;
    font-size: 18px;
  }
}

@media screen and (max-width: 500px) {
  .v-search-container {
    &__block {
      flex-direction: column;
      align-items: flex-start;
    }

    &__btn, &__btn_filter {
      margin-top: 10px;
    }

  }
}
</style>