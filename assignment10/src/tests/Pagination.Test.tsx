import React from 'react';
import { mount } from 'enzyme';
import { Pagination } from '../components/Pagination';

test('Click next success', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={1} maxPages={10} setPage={spy}></Pagination>)

    expect(pagination.find('#page').text()).toBe('1 / 10');

    pagination.find('#next').simulate('click');
    expect(pagination.find('#next').prop('disabled')).toBeFalsy();
    expect(spy).lastCalledWith(2);
})

test('Click prev success', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={10} maxPages={10} setPage={spy}></Pagination>);

    pagination.find('#prev').simulate('click');
    expect(spy).lastCalledWith(9);
    expect(pagination.find('#prev').prop('disabled')).toBeFalsy();
});

test('Click next disabled', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={10} maxPages={10} setPage={spy}></Pagination>);

    expect(pagination.find('#page').text()).toBe('10 / 10');

    pagination.find('#next').simulate('click');
    expect(pagination.find('#next').prop('disabled')).toBeTruthy();
    expect(pagination.find('#page').text()).toBe('10 / 10');
});

test('Click prev disabled', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={1} maxPages={10} setPage={spy}></Pagination>);

    expect(pagination.find('#page').text()).toBe('1 / 10');

    pagination.find('#prev').simulate('click');
    expect(pagination.find('#prev').prop('disabled')).toBeTruthy();
    expect(pagination.find('#page').text()).toBe('1 / 10');
});