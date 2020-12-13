<template>
  <form>
    <input v-model="formData.controls.name.value" type="text" />
  </form>
  <button v-on:click="click">OK</button>
</template>

<script lang="ts">
import { defineComponent     } from 'vue'
import { ReactiveFormControl } from '@/library/form/ReactiveFormControl'

import ReactiveForm            from '@/library/form/ReactiveForm'
import Validators              from '@/library/form/validators/Validators'

export default defineComponent({
  name: 'Step1',

  setup() {
    let formData: ReactiveForm = new ReactiveForm();

    formData.controls['name'] = new ReactiveFormControl(
      '',
      [Validators.required, Validators.stringLength(3, 128)]
    )

    return {
      formData
    }
  },

  methods: {
    click: function (event: any) {
      console.log(this.formData.controls.name.value)
    }
  }
})
</script>

<style scoped lang="scss">
</style>
