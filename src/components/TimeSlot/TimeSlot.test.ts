import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TimeSlot from './TimeSlot.vue';
import { groupedTimeSlotsMock } from '../../mocks/timeSlots.mock';
import { FormattedTimeSlot } from './../../types/timeSlots.type';

describe('TimeSlot.vue', () => {
  it('renders the time slot information correctly', () => {
    const timeSlot: FormattedTimeSlot = groupedTimeSlotsMock['2024-12-05'][0];

    const wrapper = mount(TimeSlot, {
      props: { timeSlot },
    });

    expect(wrapper.text()).toContain('11:00 - 12:00');
    expect(wrapper.text()).toContain('Capacity: 5 / 10');

    const badge = wrapper.find('.bg-red-400');
    expect(badge.exists()).toBe(true);

    const pingEffect = wrapper.find('.animate-ping.bg-red-500');
    expect(pingEffect.exists()).toBe(true);
  });

  it('applies the correct color class based on category', () => {
    const timeslots: FormattedTimeSlot[] = groupedTimeSlotsMock['2024-12-05'];

    timeslots.forEach((timeSlot) => {
      const wrapper = mount(TimeSlot, {
        props: { timeSlot },
      });

      const badge = wrapper.find(`.bg-${timeSlot.category}-400`);
      expect(badge.exists()).toBe(true);

      const pingEffect = wrapper.find(
        `.animate-ping.bg-${timeSlot.category}-500`
      );
      expect(pingEffect.exists()).toBe(true);
    });
  });
});
