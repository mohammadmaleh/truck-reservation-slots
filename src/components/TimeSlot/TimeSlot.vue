<template>
  <div
    class="data-card p-2 rounded-lg shadow-md text-black text-sm bg-slate-100 relative min-w-36"
  >
    <div class="absolute top-[-7px] right-[-4px]">
      <span
        :class="{
          'bg-green-400': timeSlot.category === 'green',
          'bg-red-400': timeSlot.category === 'red',
          'bg-yellow-400': timeSlot.category === 'yellow',
        }"
        class="relative inline-flex rounded-full h-3 w-3 top-0 right-0"
      >
        <span
          :class="{
            'bg-green-500': timeSlot.category === 'green',
            'bg-red-500': timeSlot.category === 'red',
            'bg-yellow-500': timeSlot.category === 'yellow',
          }"
          class="animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75"
        ></span>
      </span>
    </div>

    <p class="font-bold text-black text-center">{{ timeSlot.hourSlot }}</p>
    <p class="text-center">
      Capacity: {{ timeSlot.currentCapacity }} / {{ timeSlot.maxCapacity }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { FormattedTimeSlot } from '../../types/timeSlots.type';

defineProps<{
  timeSlot: FormattedTimeSlot;
}>();
</script>
