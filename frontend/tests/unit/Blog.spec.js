import { shallowMount } from '@vue/test-utils'
import BlogComponent from '../../src/views/Blog'

const wrapper = shallowMount(BlogComponent);

wrapper.setData({
    posts: [{
        id: 1,
        title: "Test title 1",
        content: "Test content 1",
        photo: "test/photo/1"
    },
    {
        id: 2,
        title: "Test title 2",
        content: "Test content 2",
        photo: "test/photo/2"
    },

]
})

describe('BlogComponent', () => {
    it('has a mounted hook', () => {
        expect(typeof BlogComponent.mounted).toBe('function')
    });

    it('displays proper amount of articles', () => {
        expect(wrapper.findAll('.blog-big').length).toEqual(2)
    })

})