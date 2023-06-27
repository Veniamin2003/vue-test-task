<template>
  <div class="v-users-table">
    <v-export-block />
  </div>
</template>

<script>
import VExportBlock from "@/components/content/export/v-export-block.vue";

export default {
  name: 'v-users-table',
  components: {VExportBlock},
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