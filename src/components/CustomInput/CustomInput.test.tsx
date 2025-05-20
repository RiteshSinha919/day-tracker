import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomInput from './index';
import { inputStore } from '../../stores/InputStore';

// Mock the inputStore
jest.mock('../../../stores/InputStore', () => ({
  inputStore: {
    getInput: jest.fn(),
    setInput: jest.fn(),
    setError: jest.fn(),
  },
}));

describe('CustomInput', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    (inputStore.getInput as jest.Mock).mockReturnValue('');
  });

  it('renders with correct props', () => {
    // Arrange
    const props = {
      placeholderText: 'Enter task',
      name: 'taskInput',
      type: 'text',
    };

    // Act
    render(<CustomInput {...props} />);

    // Assert
    const inputElement = screen.getByPlaceholderText('Enter task');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('name', 'taskInput');
  });

  it('displays error message when provided', () => {
    // Arrange
    const props = {
      placeholderText: 'Enter task',
      name: 'taskInput',
      type: 'text',
      errorMsg: 'This is an error',
    };

    // Act
    render(<CustomInput {...props} />);

    // Assert
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    // Arrange
    const props = {
      placeholderText: 'Enter task',
      name: 'taskInput',
      type: 'text',
    };
    render(<CustomInput {...props} />);
    const inputElement = screen.getByPlaceholderText('Enter task');

    // Act
    fireEvent.change(inputElement, { target: { value: 'New Task' } });

    // Assert
    expect(inputStore.setInput).toHaveBeenCalledWith('New Task');
    expect(inputStore.setError).toHaveBeenCalledWith('');
  });

  it('displays current input value from store', () => {
    // Arrange
    const props = {
      placeholderText: 'Enter task',
      name: 'taskInput',
      type: 'text',
    };
    (inputStore.getInput as jest.Mock).mockReturnValue('Current Task');

    // Act
    render(<CustomInput {...props} />);

    // Assert
    const inputElement = screen.getByPlaceholderText('Enter task');
    expect(inputElement).toHaveValue('Current Task');
  });
}); 