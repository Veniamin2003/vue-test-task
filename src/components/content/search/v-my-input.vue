<template>
  <div class="v-my-input">
    <span class="material-symbols-outlined">
      search
    </span>
    <input :value="modelValue"
           @input="updateInput"
           class="v-my-input__input"
           type="text"
           placeholder="Поиск по имени">
  </div>

</template>

<script>
export default {
  name: 'v-my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.v-my-input {
  width: 40%;
  position: relative;
}
.v-my-input__input {
  outline: none;
  width: 100%;
  border: 1px solid rgba(166, 166, 166, 0.2);
  border-radius: 10px;
  padding: 20px 0 20px 40px;
  background: #f0f0f0;
  font-weight: 200;
  font-size: 18px;
  transition: 300ms;
}
.material-symbols-outlined{
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: rgba(83, 87, 83, 0.41);
  font-size: 26px;
  position: absolute;
}
.v-my-input__input:focus{
  border: 1px solid rgba(3, 158, 247, 0.3);
  background: rgba(158, 218, 252, 0.18);
}

@media screen and (max-width: 500px) {
  .v-my-input {
    width: 90%;
  }
}


</style>