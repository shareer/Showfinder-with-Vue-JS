import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  it('renders a header with correct title', async () => {
    const wrapper = mount(Header);
    const title = wrapper.find('h1');

    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('TV Maze');
  });
})
