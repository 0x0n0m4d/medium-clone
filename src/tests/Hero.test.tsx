import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpPage from '../components/auth/SignUpPage';
import Hero from '../components/home/Hero';
import ModalContext from '../components/modals/ModalContext';

it('opens sign up modal when "Start reading" button is clicked', async () => {
  const setModalOpenMock = jest.fn();

  render(
    <ModalContext.Provider
      value={{
        setModalOpen: setModalOpenMock,
        isModalOpen: false,
        modalContent: null
      }}
    >
      <Hero />
    </ModalContext.Provider>
  );

  const signUpButton = screen.getByRole('button', { name: /Start reading/ });

  await userEvent.click(signUpButton!);

  expect(setModalOpenMock).toHaveBeenCalledWith(true, <SignUpPage />);
});
