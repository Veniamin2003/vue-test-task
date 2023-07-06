<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn {
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

@media (hover: hover) {
  .btn:hover {
    background: transparent;
    border: 1px solid rgba(3, 158, 247, 0.45);
  }
}

@media screen and (max-width: 576px) {
  .btn {
    border: 1px solid rgba(3, 158, 247, 0.38);
  }
}

</style>