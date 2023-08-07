<template>
  <div class="p-8">
    <div class="bg-gray-100 rounded-xl py-2 px-4 font-medium">
      <router-link to="/"
        >&leftarrow; <span class="text-blue-400">Users </span></router-link
      >
      / User Name
    </div>
    <div class="flex gap-7 py-6">
      <div class="flex-1">
        <div class="flex font-medium">
          <div class="pb-2 px-3 border-b border-red-600 text-red-600">
            Details
          </div>
          <div class="pb-2 px-3 border-b flex-1">
            <button class="">Manage Account</button>
          </div>
        </div>
        <div class="py-7 border-b">
          <h2 class="font-medium">Nickname</h2>
          <p class="text-gray-500">@userName</p>
        </div>
        <div class="py-7 border-b">
          <h2 class="font-medium">About User</h2>
          <p class="text-gray-500">text about the user</p>
        </div>
        <div class="py-7 border-b">
          <h2 class="font-medium">Location</h2>
          <p class="text-gray-500">somewhere, somewhere</p>
        </div>
        <div class="py-7">
          <h2 class="font-medium pb-2">Writing Topics:</h2>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="item in 6"
              :key="item"
              class="py-1 px-4 rounded-full bg-gray-100 border border-gray-300"
            >
              A Topic
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <div class="w-20 h-20 bg-red-400 rounded-full"></div>
        <h2 class="font-semibold text-lg">Name Name</h2>
        <p class="text-gray-400 text-sm pb-2">@nameName</p>
        <div class="flex gap-3 pb-6">
          <div class="py-1 px-4 rounded-lg border border-gray-300">
            12 something
          </div>
          <div class="py-1 px-4 rounded-lg border border-gray-300">
            53 something
          </div>
        </div>
        <div>
          <h2 class="font-medium pb-1">Email</h2>
          <p class="text-gray-500 pb-5">somthing@email.com</p>
        </div>
        <div>
          <h2 class="font-medium pb-1">Registration Date</h2>
          <p class="text-gray-500 pb-5">54.56.5467</p>
        </div>
        <div>
          <h2 class="font-medium pb-1">Last Activity</h2>
          <p class="text-gray-500 pb-5">11.11.2231 98:76</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>