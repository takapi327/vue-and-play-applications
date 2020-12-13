<template>
  <form>
    <input v-model="formData.controls.name.value" type="text" v-on:keyup="name" />
    <p v-if="formData.errors.name">{{ formData.errors.name[0] }}</p>

    <input v-model="formData.controls.email.value" type="text" />
    <p v-if="formData.errors.email">{{ formData.errors.email[0] }}</p>
  </form>
  <button type="submit" :disabled="isInvalid">OK</button>
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
      [Validators.required, Validators.stringLength(3, 5)]
    )

    formData.controls['email'] = new ReactiveFormControl(
      '',
      [Validators.required, Validators.stringLength(3, 5)]
    )

    return {
      formData
    }
  },

  data: () => {
    return {
      isInvalid: true,
    }
  },

  methods: {
    name: function (event: any) {
      this.formData.validate();
      this.isInvalid = this.formData.hasErrors
    }
  }
})
</script>

<style scoped lang="scss">
</style>
