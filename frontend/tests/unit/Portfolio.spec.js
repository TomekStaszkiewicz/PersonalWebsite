import { shallowMount } from '@vue/test-utils';
import PortfolioComponent from '../../src/views/Portfolio';



const wrapper = shallowMount(PortfolioComponent);

wrapper.setData({
    githubProjects: [
        {
            id: 1,
            name: 'Name1',
            description: 'Description 1',
            html_url: 'http://www.google.com'
        },
        {
            id: 2,
            name: 'Name2',
            description: 'Description 2',
            html_url: 'http://www.google.com'
        },
        {
            id: 3,
            name: 'Name3',
            description: 'Description 3',
            html_url: 'http://www.google.com'
        }
    ]
});

describe('PortfolioComponent', () => {
    it('renders proper amount of cards', () => {
        expect( wrapper.findAll('.portfolio-card').length).toEqual(3);
    });
});