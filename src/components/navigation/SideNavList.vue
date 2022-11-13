<!--<template>-->
<!--  <div class="side-nav-list overflow-auto sticky pt-7 pb-14 pl-5 bg-white">-->
<!--    <side-nav-item-->
<!--      v-for="navItem in navItems"-->
<!--      :key="navItem.path"-->
<!--      :to="navItem.path"-->
<!--    >-->
<!--      <template #title>-->
<!--        {{ navItem.title }}-->
<!--      </template>-->
<!--      <template #icon>-->
<!--        <component :is="navItem.icon" />-->
<!--      </template>-->
<!--    </side-nav-item>-->

<!--    <div class="side-nav-list__bottom-section mt-10 pt-4 md:mt-auto">-->
<!--      <language-dropdown-->
<!--        class="text-black md:hidden"-->
<!--      >-->
<!--        <template #default>-->
<!--          <div class="flex justify-between items-center w-full">-->
<!--            <div class="flex justify-center items-center">-->
<!--              <span class="language-link cursor-pointer flex items-center gap-1">-->
<!--                <icon-globe class="inline-block" />-->
<!--                <span>{{ $i18n.locales.find(l => l.code === $i18n.locale).name }}</span>-->
<!--              </span>-->
<!--            </div>-->
<!--            <dropdown-triangle-->
<!--              direction="bottom"-->
<!--              class="ml-2"-->
<!--            />-->
<!--          </div>-->
<!--        </template>-->
<!--        <template-->
<!--          #items-->
<!--        >-->
<!--          <nuxt-link-->
<!--            v-for="locale in $i18n.locales"-->
<!--            :key="locale.code"-->
<!--            class="bg-white h-11 items-center text-black hover:bg-transparent-2 min-w-[130px] block"-->
<!--            :to="switchLocalePath(locale.code)"-->
<!--          >-->
<!--            <dropdown-item-->
<!--              class="text-sm-regular"-->
<!--              :option="{ name: locale.name }"-->
<!--              :selected="locale.code === $i18n.locale"-->
<!--            />-->
<!--          </nuxt-link>-->
<!--        </template>-->
<!--      </language-dropdown>-->
<!--      <button-->
<!--        class="text-black text-md-regular md:text-sm-regular md:hover:text-black md:text-light-gray w-[100%] flex flex-row items-center p-[10px] gap-2"-->
<!--        @click="$authenticate.logout()"-->
<!--      >-->
<!--        <icon-logout />-->
<!--        {{ $t('lc.SideNavList.logout') }}-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'-->
<!--    SideNavItem: () => import('@/components/navigation/items/SideNavItem.vue'),-->

<!--export default defineComponent({-->
<!--  name: 'SideNavList',-->
<!--  components: {-->

<!--  },-->
<!--  setup () {-->
<!--    const ctx = useContext()-->
<!--    const navItems = computed(() => [-->
<!--      { title: ctx.i18n.t('lc.SideNavList.dashboard'), path: ctx.localePath('/profile/dashboard'), icon: 'IconDashboard' },-->
<!--      { title: ctx.i18n.t('lc.SideNavList.accountActivation'), path: ctx.localePath('/profile/activate-account'), icon: 'IconAccountActivation' },-->
<!--      { title: ctx.i18n.t('lc.SideNavList.payments'), path: ctx.localePath('/profile/payments'), icon: 'IconPayments' },-->
<!--      { title: ctx.i18n.t('lc.SideNavList.merchant'), path: ctx.localePath('/profile/merchant'), icon: 'IconMerchant' },-->
<!--      { title: ctx.i18n.t('lc.SideNavList.balance'), path: ctx.localePath('/profile/balance'), icon: 'IconBalance' },-->
<!--      { title: ctx.i18n.t('lc.SideNavList.security'), path: ctx.localePath('/profile/security'), icon: 'IconSecurity' },-->
<!--    ])-->
<!--    return { navItems }-->
<!--  },-->
<!--})-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
<!--.side-nav-list {-->
<!--  $root: &;-->
<!--  height: calc(100vh - #{$h-Header});-->
<!--  top: #{$h-Header};-->
<!--  &__bottom-section {-->
<!--    border-top: 1px solid rgba(145, 148, 159, 0.2);-->
<!--    width: calc(100% - 2rem);-->
<!--  }-->
<!--}-->
<!--</style>-->
