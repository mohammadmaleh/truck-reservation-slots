<template>
  <div
    class="w-screen h-screen flex justify-center items-start bg-slate-100 py-10"
  >
    <div class="container flex flex-col bg-white py-5 px-10">
      <h1 class="text-3xl font-bold mb-5 text-slate-600">
        Truck Reservation Slots
      </h1>
      <div class="flex justify-start items-start flex-wrap h-full">
        <TimeSlotsDay
          v-for="(timeSlotsForDay, day) in groupedTimeSlots"
          :timeSlotsForDay="timeSlotsForDay"
          :day="day"
          :key="day"
        ></TimeSlotsDay>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, onBeforeUnmount } from 'vue';
import { useTimeSlotsStore } from '../../stores/timeSlots.store';
import { TimeSlotsEventSource } from '../../api/timeSlots.api';
import TimeSlotsDay from '../TimeSlotsDay/TimeSlotsDay.vue';

const store = useTimeSlotsStore();

onMounted(() => {
  store.fetchTimeSlots();
  store.listenToSSE();
});
onBeforeUnmount(() => {
  TimeSlotsEventSource.close();
});

const groupedTimeSlots = computed(() => store.groupedTimeSlots);
</script>
