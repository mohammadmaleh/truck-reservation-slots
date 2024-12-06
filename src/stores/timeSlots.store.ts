import { defineStore } from 'pinia';
import { GroupedTimeSlots, TimeSlotSSEUpdate } from '../types/timeSlots.type';
import { TimeSlotsEventSource, timeSlotsApi } from '../api/timeSlots.api';
import { groupByDay, timeSlotsConverter } from '../helpers/timeSlots.converter';
import { TimeSlotMap } from '../types/timeSlots.type';
import { toast } from 'vue3-toastify';

export const useTimeSlotsStore = defineStore('timeSlots', {
  state: () => ({
    timeSlots: {} as TimeSlotMap,
  }),
  actions: {
    async fetchTimeSlots() {
      try {
        const { data } = await timeSlotsApi;
        this.timeSlots = timeSlotsConverter(data);
      } catch (error) {
        toast('Failed to fetch time slots', {
          autoClose: 3000,
          type: 'error',
        });
      }
    },
    listenToSSE() {
      TimeSlotsEventSource.onmessage = (event) => {
        const update: TimeSlotSSEUpdate = JSON.parse(event.data);
        const timeSlot = this.timeSlots[update.id];
        if (timeSlot) {
          timeSlot.category = update.category;
          timeSlot.currentCapacity = update.currentCapacity;
        }
      };
      TimeSlotsEventSource.onerror = () => {
        toast('Failed to connect to server, please refresh', {
          autoClose: 3000,
          type: 'error',
        });
        TimeSlotsEventSource.close();
      };
    },
  },
  getters: {
    groupedTimeSlots(state): GroupedTimeSlots {
      return groupByDay(state.timeSlots);
    },
  },
});
