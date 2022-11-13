<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="p-1.5 w-full inline-block align-middle">
        <div class="overflow-hidden border rounded-lg">
          <table
            v-if="heading?.length && rows?.length"
            class="min-w-full divide-y divide-gray-200"
          >
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="columnName in heading"
                  :key="columnName"
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                >
                  {{ columnName }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="row in rows" :key="row.ts">
                <td
                  class="w-[15%] px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                >
                  {{ row.symbol }}
                </td>
                <td
                  class="w-[25%] px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                >
                  {{ row.ts }}
                </td>
                <td
                  class="w-[20%] px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                >
                  {{ row.bid }}
                </td>
                <td
                  class="w-[20%] px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                >
                  {{ row.ask }}
                </td>
                <td
                  class="w-[20%] px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                >
                  {{ row.mid }}
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="flex w-full flex-col items-center py-32">
            <span>No data...</span>
            <span
              >Need to establish a connection to the server to display the
              data</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TSymbolItem } from '../types/types'
import { PropType } from 'vue'

const props = defineProps({
  heading: {
    default: function () {
      return []
    },
    type: Array as PropType<Array<string>>,
  },
  rows: {
    default: function () {
      return []
    },
    type: Array as PropType<Array<TSymbolItem>>,
  },
})
</script>

<style lang="scss" scoped>
.component {
  $root: &;

  // &__container {}
}
</style>
