import {
  FormattedTimeSlot,
  GroupedTimeSlots,
  RawTimeSlot,
  TimeSlotMap,
} from '../types/timeSlots.type';
import { parseISO, format } from 'date-fns';

export const timeSlotsConverter = (data: RawTimeSlot[]): TimeSlotMap => {
  return data.reduce((acc, item) => {
    const day = format(parseISO(item.start_time), 'yyyy-MM-dd');
    const hourSlot = `${format(parseISO(item.start_time), 'HH:mm')} - ${format(
      parseISO(item.end_time),
      'HH:mm'
    )}`;

    const formattedItem: FormattedTimeSlot = {
      id: item.id,
      day,
      hourSlot,
      category: item.category,
      currentCapacity: item.capacity.current_capacity,
      maxCapacity: item.capacity.max_capacity,
    };

    acc[formattedItem.id] = formattedItem;
    return acc;
  }, {} as TimeSlotMap);
};

export const groupByDay = (timeSlots: TimeSlotMap): GroupedTimeSlots =>
  Object.values(timeSlots).reduce((acc, timeSlot) => {
    if (!acc[timeSlot.day]) {
      acc[timeSlot.day] = [];
    }
    acc[timeSlot.day].push(timeSlot);
    return acc;
  }, {} as GroupedTimeSlots);
