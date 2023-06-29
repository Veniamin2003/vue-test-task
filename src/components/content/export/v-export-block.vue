<template>
  <div class="v-export-block">
    <div class="v-export-block__header_block">
      <h3>Гендерное распределение</h3>
      <button class="v-export-block__btn">
      <span class="material-symbols-outlined">
        vertical_align_bottom
      </span>
        Экспорт
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-export-block'
}
</script>

<style lang="scss" scoped>
.v-export-block {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(173, 172, 172, 0.35);
    padding-bottom: 20px;
  &__header_block {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header_block h3 {
    font-size: 26px;
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
    transition: 300ms;
  }

  &__btn:hover {
    background: transparent;
    border: 1px solid rgba(173, 171, 171, 0.39);
  }

  &__btn span {
    margin-right: 5px;
    font-size: 18px;
    opacity: 80%;
  }
}
</style>