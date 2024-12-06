export type Category = 'red' | 'green' | 'yellow';
export interface RawTimeSlot {
  id: number;
  start_time: string;
  end_time: string;
  category: Category;
  capacity: {
    current_capacity: number;
    max_capacity: number;
  };
}

export interface FormattedTimeSlot {
  id: number;
  day: string;
  hourSlot: string;
  category: Category;
  currentCapacity: number;
  maxCapacity: number;
}

export interface TimeSlotSSEUpdate {
  id: number;
  currentCapacity: number;
  category: Category;
}

export type GroupedTimeSlots = Record<string, FormattedTimeSlot[]>;

export type TimeSlotMap = Record<number, FormattedTimeSlot>;
