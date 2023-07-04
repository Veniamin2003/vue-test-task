<template>
  <div class="v-pagination">
    <div v-for="pageNumber in totalPage"
         :key="pageNumber"
         class="v-pagination__page"
         :class="{
               'v-pagination__current-page': page === pageNumber
             }"
         @click="changePage(pageNumber)"
    >
      {{pageNumber}}
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "v-pagination",
  methods: {
    changePage(pageNumber) {
      this.SET_CURRENT_PAGE(pageNumber)
    },
    ...mapActions({
      GET_USERS: "users/GET_USERS"
    }),
    ...mapMutations({
      SET_CURRENT_PAGE: "users/SET_CURRENT_PAGE"
    })
  },
  computed: {
    ...mapState({
      totalPage: state => state.users.totalPage,
      page: state => state.users.page,
    })
  },
  watch: {
    page() {
      this.GET_USERS();
    }
  }
}
</script>

<style lang="scss" scoped>
.v-pagination {
  height: 60%;
  display: flex;

  &__page {
    cursor: pointer;
    border: 1px solid rgb(222, 242, 253);
    border-radius: 5px;
    box-shadow: 0 0 2px 1px rgba(231, 244, 253, 0.84);

    background: rgb(241,250,255);
    padding: 10px;
    margin-right: 10px;
    transition: 300ms;
  }
  &__page:hover {
    background: rgba(231, 244, 253, 0.84);
  }
  &__current-page {
    border: 1px solid rgb(187, 219, 238);
    box-shadow: 0 0 2px 1px rgba(189, 208, 222, 0.84);
  }
}



</style>