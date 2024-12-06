import { RawTimeSlot } from '../types/timeSlots.type';
import axios from 'axios';

export const TIME_SLOTS_EVENT_SOURCE =
  'https://timeslot-stream-ha2tva3niq-ey.a.run.app/sse';
export const TIME_SLOTS_API =
  'https://timeslot-stream-ha2tva3niq-ey.a.run.app/timeSlots';

export const TimeSlotsEventSource = new EventSource(TIME_SLOTS_EVENT_SOURCE);

export const timeSlotsApi = axios<RawTimeSlot[]>(TIME_SLOTS_API, {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
});
