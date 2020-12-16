<template>

  <ValidationProvider v-slot="v" rules="required|email">
    <input v-model="value" type="email">
  </ValidationProvider>

</template>

<script lang="ts">
import { defineComponent            } from 'vue'
import { ValidationProvider, extend } from 'vee-validate'

export default defineComponent({
  name: 'Step1',

  setup() {
  }

})

</script>

<style scoped lang="scss">
</style>
