<template>
  <div class="p-8">
    <h1>Duck</h1>
    <div
      class="grid grid-cols-5 justify-center items-center px-6 pb-1 text-gray-400 text-sm"
    >
      <div class="">Name</div>
      <div>Role</div>
      <div>Status</div>
      <div>Publisher</div>
      <div>Last LogIn</div>
    </div>
    <div class="bg-white border rounded-xl">
      <UserDetails v-for="item in 7" :key="item" />
    </div>
  </div>
</template>

<script>
import UserDetails from "../components/UserDetails.vue";

export default { components: { UserDetails } };
</script>

<style>
</style>