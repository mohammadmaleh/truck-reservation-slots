import { TimeSlotSSEUpdate } from '../types/timeSlots.type';
import {
  RawTimeSlot,
  TimeSlotMap,
  GroupedTimeSlots,
} from '../types/timeSlots.type';

export const rawTimeSlotsMock: RawTimeSlot[] = [
  {
    id: 1,
    start_time: '2024-12-05T10:00:00Z',
    end_time: '2024-12-05T11:00:00Z',
    category: 'red',
    capacity: {
      current_capacity: 5,
      max_capacity: 10,
    },
  },
  {
    id: 2,
    start_time: '2024-12-06T15:00:00Z',
    end_time: '2024-12-06T16:00:00Z',
    category: 'green',
    capacity: {
      current_capacity: 8,
      max_capacity: 12,
    },
  },
  {
    id: 3,
    start_time: '2024-12-05T12:00:00Z',
    end_time: '2024-12-05T13:00:00Z',
    category: 'yellow',
    capacity: {
      current_capacity: 3,
      max_capacity: 6,
    },
  },
];

export const timeSlotMapMock: TimeSlotMap = {
  1: {
    id: 1,
    day: '2024-12-05',
    hourSlot: '11:00 - 12:00',
    category: 'red',
    currentCapacity: 5,
    maxCapacity: 10,
  },
  2: {
    id: 2,
    day: '2024-12-06',
    hourSlot: '16:00 - 17:00',
    category: 'green',
    currentCapacity: 8,
    maxCapacity: 12,
  },
  3: {
    id: 3,
    day: '2024-12-05',
    hourSlot: '13:00 - 14:00',
    category: 'yellow',
    currentCapacity: 3,
    maxCapacity: 6,
  },
};

export const groupedTimeSlotsMock: GroupedTimeSlots = {
  '2024-12-05': [
    {
      id: 1,
      day: '2024-12-05',
      hourSlot: '11:00 - 12:00',
      category: 'red',
      currentCapacity: 5,
      maxCapacity: 10,
    },
    {
      id: 3,
      day: '2024-12-05',
      hourSlot: '13:00 - 14:00',
      category: 'yellow',
      currentCapacity: 3,
      maxCapacity: 6,
    },
  ],
  '2024-12-06': [
    {
      id: 2,
      day: '2024-12-06',
      hourSlot: '16:00 - 17:00',
      category: 'green',
      currentCapacity: 8,
      maxCapacity: 12,
    },
  ],
};

export const TimeSlotSSEUpdateMock: TimeSlotSSEUpdate = {
  id: 1,
  currentCapacity: 5,
  category: 'red',
};
