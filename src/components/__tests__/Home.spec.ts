import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../Home.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('Home', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders correctly with loading state', async () => {
    const wrapper = mount(Home);
    expect(wrapper.find('.spinner-border').exists()).toBe(true);
    expect(wrapper.find('.search').exists()).toBe(true);
  });

  it('renders search input when not loading', async () => {
    const wrapper = mount(Home);

    await wrapper.vm.$nextTick();
    const searchInput = wrapper.find('.form-control');
    expect(searchInput.exists()).toBe(true);
  });

  it('filters shows based on search input', async () => {
    const wrapper = mount(Home);
    await wrapper.vm.$nextTick();

    // Set search query
    const searchInput = wrapper.find('input[type="text"]');
    await searchInput.setValue('Test Show');
    await wrapper.vm.$nextTick();

    const shows = wrapper.findAll('.show-item-container .list');
    shows.forEach(show => {
      expect(show.text().toLowerCase()).toContain('test show');
    });
  });

  it('displays "no matching shows" message when search query has no matches', async () => {
    const wrapper = mount(Home);
    await wrapper.vm.$nextTick();

    // Set search query with no matches
    const searchInput = wrapper.find('input[type="text"]');
    await searchInput.setValue('Random Search Query');
    await wrapper.vm.$nextTick();

    // Ensure "no matching shows" message is displayed
    expect(wrapper.find('.text-danger').exists()).toBe(true);
    expect(wrapper.findAll('.list').length).toBe(0);
  });

  it('displays shows sorted by rating', async () => {
    const wrapper = mount(Home);
    await wrapper.vm.$nextTick();

    // Ensure shows are sorted by rating
    const shows = wrapper.findAll('.show-item-container .list');
    let previousRating = Infinity;
    shows.forEach(show => {
      const rating = parseFloat(show.find('.rating').text());
      expect(rating).not.toBeNaN();
      expect(rating).toBeLessThanOrEqual(previousRating);
      previousRating = rating;
    });
  });
})
