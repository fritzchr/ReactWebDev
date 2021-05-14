import React from 'react';
import { mount } from 'enzyme';
import { ListView } from '../components/ListView';

test('List is not empty', () => {
    const items = ['test'];
    const list = mount(<ListView items={items}></ListView>)

    expect(list.find('#listContainer').children().length).toBeGreaterThan(0);
});

test('List has 10 items', () => {
    const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const list = mount(<ListView items={items}></ListView>);

    expect(list.find('#listContainer').children()).toHaveLength(10);
});

