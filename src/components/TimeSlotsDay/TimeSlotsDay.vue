<template>
  <div class="flex-col">
    <div
      class="flex-col justify-center items-center border-t-2 border-b-2 border-gray-200 py-1 my-2"
    >
      <p v-if="isTodayFlag" class="text-center text-sm text-gray-400">Today</p>
      <p v-if="isTomorrowFlag" class="text-center text-sm text-gray-400">
        Tomorrow
      </p>
      <p v-if="!isTodayFlag && !isTomorrowFlag" class="text-center text-sm">
        <span>&nbsp;</span>
      </p>
      <p class="text-center font-bold text-black">{{ dayLetter }}</p>

      <p class="text-center text-sm text-grey-600">{{ formattedDate }}</p>
    </div>
    <div class="flex flex-col gap-4 mx-6">
      <TimeSlot
        v-for="timeSlot in timeSlotsForDay"
        :key="timeSlot.id"
        :timeSlot="timeSlot"
      >
      </TimeSlot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormattedTimeSlot } from '../../types/timeSlots.type';
import TimeSlot from '../TimeSlot/TimeSlot.vue';
import { defineProps } from 'vue';
import { format, isToday, parseISO, isTomorrow } from 'date-fns';

const props = defineProps<{
  day: string;
  timeSlotsForDay: FormattedTimeSlot[];
}>();

const date = parseISO(props.day);
const isTodayFlag = isToday(date);
const isTomorrowFlag = isTomorrow(date);
const dayLetter = format(date, 'EEEE');
const formattedDate = format(date, 'MMM dd');
</script>
