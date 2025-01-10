import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInPage from '../components/auth/SignInPage';
import SignUpPage from '../components/auth/SignUpPage';
import ModalContext from '../components/modals/ModalContext';

it('opens sign up page when "Create One" is clicked', async () => {
  const mockSetModalOpen = jest.fn();

  render(
    <ModalContext.Provider
      value={{
        setModalOpen: mockSetModalOpen,
        modalContent: null,
        isModalOpen: false
      }}
    >
      <SignInPage />
    </ModalContext.Provider>
  );

  const createAccount = screen.getByRole('button', { name: /Create one/ });

  await userEvent.click(createAccount);

  expect(mockSetModalOpen).toHaveBeenCalledWith(true, <SignUpPage />);
});
