import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInPage from '../components/auth/SignInPage';
import Nav from '../components/header/Nav';
import ModalContext from '../components/modals/ModalContext';

it('opens sign in page when "Sign In" is clicked', async () => {
  const mockSetModalOpen = jest.fn();

  render(
    <ModalContext.Provider
      value={{
        setModalOpen: mockSetModalOpen,
        isModalOpen: false,
        modalContent: null
      }}
    >
      <Nav />
    </ModalContext.Provider>
  );

  const signInButton = screen.getByRole('button', { name: /Sign In/ });

  await userEvent.click(signInButton);

  expect(mockSetModalOpen).toHaveBeenCalledWith(true, <SignInPage />);
});
