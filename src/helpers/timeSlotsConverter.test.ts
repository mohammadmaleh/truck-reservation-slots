import { describe, it, expect } from 'vitest';
import { timeSlotsConverter, groupByDay } from './timeSlots.converter';
import {
  rawTimeSlotsMock,
  timeSlotMapMock,
  groupedTimeSlotsMock,
} from '../mocks/timeSlots.mock';

describe('timeSlotsConverter', () => {
  it('should convert raw time slots to formatted time slot map', () => {
    const result = timeSlotsConverter(rawTimeSlotsMock);
    expect(result).toEqual(timeSlotMapMock);
  });
});

describe('groupByDay', () => {
  it('should group formatted time slots by day', () => {
    const result = groupByDay(timeSlotMapMock);
    expect(result).toEqual(groupedTimeSlotsMock);
  });
});
