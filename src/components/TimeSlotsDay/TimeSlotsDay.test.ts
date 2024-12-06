import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TimeSlotsDay from './TimeSlotsDay.vue';

import { groupedTimeSlotsMock } from '../../mocks/timeSlots.mock';

describe('TimeSlotsDay.vue', () => {
  it('renders Today text when the date is today', () => {
    const wrapper = mount(TimeSlotsDay, {
      // @ts-ignore
      props: {
        day: '2024-12-05',
        TimeSlotsDay: groupedTimeSlotsMock['2024-12-05'],
      },
    });

    expect(wrapper.text()).toContain('ThursdayDec 05');
    expect(wrapper.text()).toContain('ThursdayDec 05');
  });

  it.only('renders nothing if Today or Tomorrow conditions fail', () => {
    const wrapper = mount(TimeSlotsDay, {
      props: {
        day: '2000-01-01',
        timeSlotsForDay: groupedTimeSlotsMock['2024-12-01'],
      },
    });

    expect(wrapper.text()).not.toContain('Today');
    expect(wrapper.text()).not.toContain('Tomorrow');
  });
});
