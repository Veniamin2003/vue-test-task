<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
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
.input {
  width: 450px;
  border: 1px solid rgba(94, 91, 91, 0.67);
  height: 46px;
  margin-top: 5px;
  padding-left: 20px;
  font-size: 14px;
  color: rgba(94, 91, 91, 0.67);
  border-radius: 7px;
}
.input:focus{
  border: 1px solid rgba(3, 158, 247, 0.68);
}
.input:focus {
  outline: 0;
}
@media screen and (max-width: 576px) {
  .input {
    width: 94%;
    height: 41px;
  }
}
</style>