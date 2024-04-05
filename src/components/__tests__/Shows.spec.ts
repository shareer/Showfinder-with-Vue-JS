import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Shows from '../Shows.vue'

describe('Shows', () => {
  it('renders correctly', () => {
    const wrapper = mount(Shows, {
      props: {
        genereName: 'Action',
        tvShowsList: [
          {
            id: 1,
            name: 'Show 1',
            image: { medium: 'image-url' },
            summary: 'Summary of Show 1',
            rating: { average: 9.5 },
            genres: ['Action', 'Drama']
          }
        ]
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('renders genre name correctly', () => {
    const genereName = 'Action'
    const wrapper = mount(Shows, {
      props: { genereName, tvShowsList: [] }
    })

    expect(wrapper.find('.genere-name h3').text()).toBe(genereName)
  })

  it('renders show card correctly', () => {
    const tvShowsList = [
      {
        id: 1,
        name: 'Show 1',
        image: { medium: 'image-url' },
        summary: 'Summary of Show 1',
        rating: { average: 9.5 },
        genres: ['Action', 'Drama']
      }
    ]
    const wrapper = mount(Shows, {
      props: { genereName: 'Action', tvShowsList }
    })

    const showCard = wrapper.find('.show-item-card')
    expect(showCard.exists()).toBe(true)
    expect(showCard.find('.card-title').text()).toBe(tvShowsList[0].name)
  })
})
