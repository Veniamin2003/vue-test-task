<template>
  <div class="v-add-user-dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/components/mixins/toggleMixin";

export default {
  name: 'v-add-user-dialog',
  mixins: [toggleMixin]
}
</script>

<style scoped>
.v-add-user-dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 450px;
  padding: 40px 50px;
}
</style>