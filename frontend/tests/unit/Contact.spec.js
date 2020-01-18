import { mount, createLocalVue } from '@vue/test-utils'
import ContactComponent from '../../src/views/Contact'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue)

const wrapper = mount(ContactComponent,
    {
        localVue
    });


describe('ContactComponent', () => {
    it('has empty string as default values', () => {
        expect(wrapper.vm.$data.message).toEqual({
            email: '',
            content: '',
        });
    });
});