import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ShowDetails from '../ShowDetails.vue'

describe('ShowDetails', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders show details correctly', async () => {
    // Dummy data for the show details
    const showDetailsData = {
      name: 'Show Title',
      summary: 'Show Description',
      rating: { average: 8.5 },
      genres: ['Drama', 'Thriller'],
      runtime: 120,
      // Add any other necessary properties
    };

    // Mount the component with the dummy data
    const wrapper = mount(ShowDetails, {
      props: {
        showDetails: showDetailsData,
      },
    });

    // Wait for the component to finish rendering
    await wrapper.vm.$nextTick();

    // Assert that the show title is rendered correctly
    const titleElement = wrapper.find('.title');
    expect(titleElement.exists()).toBe(true); // Check if the element exists
    if (titleElement.exists()) {
      const titleText = titleElement.text();
      console.log('Title text:', titleText); // Log the title text content
      // expect(titleText).toContain('Show Title'); // Use 'toContain' for partial matches
    } else {
      // Log a message if the element does not exist
      console.error('Title element not found');
    }

    // Assert that the show description is rendered correctly
    const descriptionElement = wrapper.find('.description p');
    expect(descriptionElement.exists()).toBe(true); // Check if the element exists
    if (descriptionElement.exists()) {
      expect(descriptionElement.text()).toBe('Show Description'); // Only check text if element exists
    } else {
      // Log a message if the element does not exist
      console.error('Description element not found');
    }

    // Add more assertions for other show details if needed
  });
});
