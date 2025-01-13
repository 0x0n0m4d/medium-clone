import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailForm from '../components/forms/EmailForm';
import '@testing-library/dom';

const mockId = 'test-id';
const mockOnSubmit = jest.fn();

it('should render correct input values and call onSubmit with email', async () => {
  render(<EmailForm onSubmit={mockOnSubmit} id={mockId} />);

  const input = screen.getByRole('textbox');

  await userEvent.type(input, 'n0m4d@root.pwn');

  expect(input).toHaveProperty('value', 'n0m4d@root.pwn');

  const submit = screen.getByRole('button', { name: /Continue/i });

  await userEvent.click(submit);

  expect(mockOnSubmit).toHaveBeenCalledWith('n0m4d@root.pwn');
});
