<template>
  <div class="v-add-user-dialog" v-if="show" @click="hideDialog">


    <div @click.stop class="dialog__content">
      <div class="header_text">
        <h4>Создание пользователя</h4>
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
  name: 'v-add-user-dialog',
  mixins: [toggleMixin]
}
</script>

<style scoped>
.v-add-user-dialog {
  z-index: 6;
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
  padding: 30px 50px 20px;
  height: 90%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.header_text {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.header_text h4 {
  font-size: 20px;
  margin: 0 0 20px;
}

.header_text span {
  cursor: pointer;
  font-size: 28px;
  color: #818080;
}

@media screen and (max-width: 576px) {
  .v-add-user-dialog {
    overflow: hidden;
  }
  .dialog__content {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    min-width: 0px;
    padding: 30px 20px 10px 20px;
  }
}
</style>