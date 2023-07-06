<template>
  <div class="v-filter-container" v-if="show" @click="hideDialog">
    <div @click.stop class="v-filter-container__content">
      <div class="block_name">
        <h4>Фильтр</h4>
        <span class="material-symbols-outlined"
              @click="hideDialog"
        >
        close
      </span>
      </div>
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
  z-index: 4;
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

    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.block_name {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.block_name span {
  cursor: pointer;
  font-size: 28px;
  color: #818080;
}

.block_name h4 {
  font-size: 18px;
}
@media screen and (max-width: 1000px) {
  .v-filter-container {
    &__content {
      width: 40%;
      padding: 0;
    }
    .block_name h4 {
      padding-left: 20px;
    }
    .block_name span {
      padding-right: 20px;
    }
  }
}
@media screen and (max-width: 768px) {
  .v-filter-container {
    &__content {
      width: 55%;
    }
  }
}
@media screen and (max-width: 500px) {
  .v-filter-container {
    &__content {
      width: 100%;
    }
  }
}

</style>