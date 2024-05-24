<template>
  <form @submit.prevent="execute()">
    <BaseMessage color="danger" v-show="error">
      {{ error }}
    </BaseMessage>
    <BaseInput v-model="form.email" rounded="sm" label="Username / Email" placeholder="Ex: example@example.com" />
    <BaseInput v-model="form.password" rounded="sm" label="Password" placeholder="Ex: 123123123" />
    <BaseButtonAction shadow="hover" variant="solid" :loading="pending" color="success" class="w-full mt-3" type="submit">
      <Icon name="cib:circleci" class="-ms-1 h-4 w-4" />
      <span>Login</span>
    </BaseButtonAction>
  </form>
</template>

<script lang="ts" setup>
import PocketBase from "pocketbase"
const pb = new PocketBase(
  "https://gcpocketbase.duckdns.org/"
)

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

const errorResponse = reactive(
  {
    code: 0,
    message: "",
    data: {}
  }
)

const {
  error,
  pending,
  data,
  execute } = useAsyncData('auth', 
  ()=> pb
  .collection('users')
  .authWithPassword(
      form.email,
      form.password
  ));

</script>

<style></style>
