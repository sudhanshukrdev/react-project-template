import TodoItem from 'components/TodoItem';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Todo from './Todo';

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

it('Renders a todo container', () => {
  act(() => {
    render(<Todo />, container);
  });

  expect(container!.textContent).toBe('React To Do+');
});
