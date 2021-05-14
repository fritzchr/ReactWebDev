import React from 'react';
import { mount } from 'enzyme';
import { App } from '../components/App';

test('Create App component', () => {
    const app = mount(<App/>);

    expect(app.exists()).toBeTruthy();
});