import React from 'react';
import { shallow } from 'enzyme';
import { App, createFakeData } from '../components/App';

test('Create App component', () => {
    const app = shallow(<App/>);

    expect(app.exists()).toBeTruthy();
});

test('creating fake data', () => {
    const arr = createFakeData(3);
    expect(arr.length).toBe(20);
    expect(arr[0]).toBe('Entry 40');
})