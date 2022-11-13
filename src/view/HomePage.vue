<template>
  <div class="main-container h-full grid grid-cols-12">
    <div class="header-section col-span-12">
      <header-component />
    </div>
    <div class="sidebar-section bg-light-gray col-span-3">
      <router-link to="/data-page"> Home Page </router-link>
    </div>
    <div class="content-section bg-success col-span-9">Content</div>
    <div class="footer-section bg-dark-gray col-span-12">Footer</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { defineAsyncComponent } from 'vue'
const SideBar = defineAsyncComponent(
  () => import('/src/components/navigation/SideNavList.vue'),
)
const HeaderComponent = defineAsyncComponent(
  () => import('/src/components/header/HeaderComponent.vue'),
)

const store = useStore()
</script>

<style lang="scss" scoped>
.header-section {
  $root: &;

  // &__container {}
}
</style>
