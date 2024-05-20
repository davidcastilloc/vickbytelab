<template>
  <form>
    <BaseInput
      v-model="form.email"
      rounded="sm"
      label="Username / Email"
      placeholder="Ex: example@example.com"
    />
    <BaseInput
      v-model="form.password"
      rounded="sm"
      label="Password"
      placeholder="Ex: 123123123"
    />
    <BaseButtonAction class="w-full mt-3" type="submit"> Login </BaseButtonAction>
  </form>
</template>

<script lang="ts" setup>
const props = defineProps(
  {
    email: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    }
  }
)
// if props has values set values on the form
const form = reactive(
  {
    email: props.email,
    password: props.password
  }
)

</script>

<style>

</style>

