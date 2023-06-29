<template>
  <div class="v-search-container">
      <div class="v-search-container__block">
          <v-my-input :model-value="this.searchQuery"
                      @update:model-value="SET_SEARCH_QUERY"/>

        <button class="v-search-container__btn">
          <span class="material-symbols-outlined">
          filter_alt
          </span>
          Фильтр
        </button>
      </div>
  </div>
</template>

<script>
import VMyInput from "@/components/content/search/v-my-input.vue";
import {mapMutations, mapState} from "vuex";

export default {
  name: 'v-search-container',
  components: { VMyInput},
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      SET_SEARCH_QUERY: "users/SET_SEARCH_QUERY"
    })
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      searchQuery: state => state.users.searchQuery,
    }),

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

  &__btn {
    width: 150px;
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

  &__btn:hover {
    background: transparent;
    border: 1px solid rgba(3, 158, 247, 0.45);
  }

  &__btn span {
    font-weight: 600;
    margin-right: 5px;
    font-size: 18px;
    opacity: 80%;
  }
}
</style>