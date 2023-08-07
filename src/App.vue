<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import SideNav from "./components/SideNav.vue";
import UserDetailsPage from "./views/UserDetailsPage.vue";
import Users from "./views/Users.vue";
</script>

<template>
  <div class="bg-[#fbfbfb] min-h-screen">
    <NavBar />
    <div class="flex">
      <SideNav />
      <div class="flex-1">
        <router-view />
      </div>
      <!-- <Users class="flex-1" /> -->
      <!-- <UserDetailsPage class="flex-1" /> -->
    </div>
  </div>
</template>

<style scoped>
</style>
