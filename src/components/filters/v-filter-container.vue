<template>
  <div class="v-filter-container" v-if="show" @click="hideDialog">
    <div @click.stop class="v-filter-container__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/components/mixins/toggleMixin";
export default {
  name: "v-filter-container",
  mixins: [toggleMixin]
}
</script>

<style lang="scss" scoped>
.v-filter-container {
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  display: flex;

  &__content {
    position: absolute;
    right: 0;
    height: 100%;
    width: 25%;
    background: white;
    padding: 10px 30px;
  }
}

</style>