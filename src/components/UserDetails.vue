<template>
  <div
    class="grid grid-cols-5 justify-center items-center py-2 px-4 border-b text-gray-400 hover:bg-gray-100 duration-300"
  >
    <div class="flex items-center gap-2">
      <router-link to="/details" class="hover:opacity-70 duration-300"
        ><div class="w-10 h-10 bg-red-300 rounded-full"></div
      ></router-link>
      <div class="">
        <p class="font-semibold text-black">
          <router-link to="/details" class="hover:underline"
            >Name Name</router-link
          >
        </p>
        <p class="text-sm">Title</p>
      </div>
    </div>
    <div>Member</div>
    <div>Active</div>
    <div>-</div>
    <div>12.12.2012, 9:11</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>