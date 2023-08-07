<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold pb-3">Users</h1>
    <div class="pb-4">
      <div class="flex items-center gap-12">
        <div
          class="hidden md:flex gap-2 border-2 border-[#e6e6e6] rounded-xl bg-white px-2 py-1"
        >
          <input
            type="text"
            placeholder="Search by Name or Email"
            class="outline-none border-none bg-transparent placeholder-[#e6e6e6]"
          />
          <button class="w-5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#656565"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <p class="font-semibold">Role</p>
          <button class="w-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="#656565"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <p class="font-semibold">Status</p>
          <button class="w-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="#656565"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <p class="font-semibold">Publisher</p>
          <button class="w-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="#656565"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-5 justify-center items-center px-6 pb-1 text-gray-400 text-sm"
    >
      <div class="">Name</div>
      <div>Role</div>
      <div>Status</div>
      <div>Publisher</div>
      <div>Last LogIn</div>
    </div>
    <div class="bg-white border rounded-xl overflow-hidden">
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