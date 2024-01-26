import React from 'react';
import renderer from 'react-test-renderer';

import { LoginViewModel } from "../models";
import LoginView from "../view";

jest.mock('../view.model', () => {
    const fnLoginViewModel = jest.fn();
    fnLoginViewModel.mockImplementation(
        () => ({
            email: '',
            password: '',
            isLoading: false,
            onSubmit: jest.fn(),
            setEmail: jest.fn(),
            setPassword: jest.fn(),
        } as LoginViewModel),
    );
    return fnLoginViewModel;
});

import useLoginViewModel from "../view.model";

const mockedUseLoginViewModel = useLoginViewModel as jest.Mock;

it('should render correctly', () => {
    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
});

it('should render correctly with email', () => {
    mockedUseLoginViewModel.mockImplementation(
        () =>
        ({
            email: 'rafael@gmail.com',
            password: '',
            isLoading: false,
            onSubmit: jest.fn(),
            setEmail: jest.fn(),
            setPassword: jest.fn(),
        } as LoginViewModel),
    );

    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
});

it('should render correctly with password', () => {
    mockedUseLoginViewModel.mockImplementation(
        () =>
        ({
            email: '',
            password: 'senhaDeTeste',
            isLoading: false,
            onSubmit: jest.fn(),
            setEmail: jest.fn(),
            setPassword: jest.fn(),
        } as LoginViewModel),
    );

    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
});

it('should render correctly with email and password', () => {
    mockedUseLoginViewModel.mockImplementation(
        () =>
        ({
            email: 'rafael@gmail.com',
            password: 'senhaDeTeste',
            isLoading: false,
            onSubmit: jest.fn(),
            setEmail: jest.fn(),
            setPassword: jest.fn(),
        } as LoginViewModel),
    );

    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
});

it('should render correctly while is loading', () => {
    mockedUseLoginViewModel.mockImplementation(
        () =>
        ({
            email: 'rafael@gmail.com',
            password: 'senhaDeTeste',
            isLoading: true,
            onSubmit: jest.fn(),
            setEmail: jest.fn(),
            setPassword: jest.fn(),
        } as LoginViewModel),
    );

    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
});
