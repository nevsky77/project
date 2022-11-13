<template>
  <div class="component bg-[#f3f3f3] py-16 px-9">
    <div class="flex gap-2 w-full justify-center p-5 pt-0">
      <button
        class="text-black rounded border-2 border-success hover:bg-success transition duration-150 ease-in-out rounded-8px p-2 text-center"
        @click="connection(EConnectionActions.OPEN)"
      >
        Open connection
      </button>
      <button
        class="text-black rounded border-2 border-warn hover:bg-warn transition duration-150 ease-in-out rounded-8px p-2 text-center"
        @click="connection(EConnectionActions.CLOSE)"
      >
        Close connection
      </button>
    </div>

    <table-component :heading="heading" :rows="rows" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { EConnectionActions, ETableColumnNames } from '../types/enums'
import TableComponent from '../components/TableComponent.vue'
import { computed } from 'vue'
import { TConnectionActionTypes } from '../types/types'

const store = useStore()

const heading = computed(() => [
  ETableColumnNames.SYMBOL,
  ETableColumnNames.TS,
  ETableColumnNames.BID,
  ETableColumnNames.ASK,
  ETableColumnNames.MID,
])

const rows = computed(() => store.getters.getDataTable)

function connection(actionType: TConnectionActionTypes) {
  store.dispatch('connection', actionType)
}
</script>

<style lang="scss" scoped>
.component {
  $root: &;

  // &__container {}
}
</style>
