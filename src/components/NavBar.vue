<template>
  <header class="flex justify-between px-4 py-3 bg-white border-b-2">
    <div class="flex items-center gap-20">
      <div>
        <button class="w-8">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#656565"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        class="hidden md:flex gap-2 border-2 border-[#e6e6e6] rounded-xl bg-white px-2 py-1"
      >
        <input
          type="text"
          placeholder="Search"
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
    </div>
    <div class="flex items-center gap-9">
      <div class="hidden md:flex items-center">
        <p>EN</p>
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
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-red-300 rounded-full"></div>
          <div class="hidden md:block">
            <p class="font-bold">Name Name</p>
            <p class="text-gray-400 text-sm">Title</p>
          </div>
        </div>
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
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>