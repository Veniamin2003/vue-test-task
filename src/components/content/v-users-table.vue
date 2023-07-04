<template>
  <div class="v-users-table">
    <v-export-block />
    <v-search-container />
    <v-table v-if="!isPostsLoading"/>
    <div v-else><img src="@/assets/Loader/users.svg" alt="loader"/></div>
    <v-add-user />
  </div>
</template>

<script>
import VExportBlock from "@/components/content/export/v-export-block.vue";
import VTable from "@/components/content/table/v-table.vue";
import VSearchContainer from "@/components/content/search/v-search-container.vue";
import VAddUser from "@/components/content/addUser/v-add-user.vue";
import {mapState} from "vuex";

export default {
  name: 'v-users-table',
  components: {VAddUser, VSearchContainer, VTable, VExportBlock},
  computed: {
    ...mapState({
      isPostsLoading: state => state.users.isPostsLoading,
    })
  }
}
</script>

<style lang="scss" scoped>
.v-users-table{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 50px 0 70px;
  background: #ffffff;
  border-radius: 30px;
  align-items: center;
}

@media screen and (max-width: 1570px) {
  .v-users-table {
    width: 95%;
  }
}
</style>