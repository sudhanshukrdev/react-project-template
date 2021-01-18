import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ToDoItem from './TodoItem';

let container: Element | null = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it('Renders a todo item', () => {
  act(() => {
    render(<ToDoItem deleteItem={() => {}} item="Test Todo" />, container);
  });

  act(() => {
    render(<ToDoItem item="Test Todo" deleteItem={() => {}} />, container);
  });

  expect(container!.textContent).toBe('Test Todo-');
});
