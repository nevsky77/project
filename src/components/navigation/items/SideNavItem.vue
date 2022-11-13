<template>
  <nuxt-link
    class="link menu-item-text text-black md:text-light-gray"
    :to="to"
  >
    <div class="link__content pl-3 h-14 md:h-auto md:p-[10px] flex gap-2 items-center">
      <slot name="icon" />
      <slot
        name="title"
      />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SideNavItem',
  components: {

  },
  props: {
    to: {
      type: String,
      default: '',
    },
  },
  setup () {
    return {}
  },
})
</script>

<style lang="scss" scoped>
$root: &;
.menu-item-text {
  @apply font-400 text-14px
}
a.nuxt-link-active {
  color: var(--c-black);
  .link__content {
    background-color: var(--c-light);
    border-radius: 8px 0 0 8px;
  }
}
</style>
