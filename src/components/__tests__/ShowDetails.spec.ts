import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ShowDetails from '../ShowDetails.vue'

describe('ShowDetails', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders show details correctly', async () => {
    const showDetailsData = {
      name: 'Show Title',
      summary: 'Show Description',
      rating: { average: 8.5 },
      genres: ['Drama', 'Thriller'],
      runtime: 120
    };

    // Mount the component with the dummy data
    const wrapper = mount(ShowDetails, {
      props: {
        showDetails: showDetailsData,
      },
    });
    await wrapper.vm.$nextTick();
    const titleElement = wrapper.find('.title');
    expect(titleElement.exists()).toBe(true);
  });
});
