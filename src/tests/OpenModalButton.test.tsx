import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalContext from '../components/modals/ModalContext';
import OpenModalButton from '../components/modals/OpenModalButton';

it('should open modal when button is clicked', async () => {
  const mockSetModalOpen = jest.fn();
  const mockSetIsDialog = jest.fn();

  render(
    <ModalContext.Provider
      value={{
        setModalOpen: mockSetModalOpen,
        setIsDialog: mockSetIsDialog,
        modalContent: null,
        isModalOpen: false,
        isDialog: true
      }}
    >
      <OpenModalButton element={<div>Content...</div>}>
        Click me!!
      </OpenModalButton>
    </ModalContext.Provider>
  );

  const openModalButton = screen.getByRole('button', { name: 'Click me!!' });

  await userEvent.click(openModalButton);

  expect(mockSetModalOpen).toHaveBeenCalledWith(true, <div>Content...</div>);
});
