<template>
  <div class="v-users-table">
    <v-export-block />
    <v-search-container />
    <v-table/>
    <v-add-user />
  </div>
</template>

<script>
import VExportBlock from "@/components/content/export/v-export-block.vue";
import VTable from "@/components/content/table/v-table.vue";
import VSearchContainer from "@/components/content/search/v-search-container.vue";
import VAddUser from "@/components/content/addUser/v-add-user.vue";

export default {
  name: 'v-users-table',
  components: {VAddUser, VSearchContainer, VTable, VExportBlock},
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
</style>