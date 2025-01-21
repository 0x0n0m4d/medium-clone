import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Modal from '../components/modals/Modal';
import ModalContext from '../components/modals/ModalContext';

describe('close modal', () => {
  const setModalOpen = jest.fn();
  const setIsDialog = jest.fn();

  it('should close modal when close modal button is clicked', async () => {
    render(
      <ModalContext.Provider
        value={{
          setModalOpen,
          isModalOpen: true,
          setIsDialog,
          isDialog: true,
          modalContent: <div>content</div>
        }}
      >
        <Modal />
      </ModalContext.Provider>
    );

    const closeModalButton = screen.getByRole('button', { name: 'close' });

    await userEvent.click(closeModalButton);

    expect(setModalOpen).toHaveBeenCalledWith(false);
  });

  it('should close modal when outside of modal is clicked', async () => {
    render(
      <ModalContext.Provider
        value={{
          setModalOpen,
          setIsDialog,
          isDialog: true,
          isModalOpen: true,
          modalContent: <div>content</div>
        }}
      >
        <Modal />
      </ModalContext.Provider>
    );

    await userEvent.click(screen.getByTestId('modal'));

    expect(setModalOpen).toHaveBeenCalledWith(false);
  });

  it('shows `modalContent` when `isModalOpen` is true', () => {
    render(
      <ModalContext.Provider
        value={{
          setModalOpen,
          isModalOpen: true,
          setIsDialog,
          isDialog: true,
          modalContent: <div>( ._.) 200 OK</div>
        }}
      >
        <Modal />
      </ModalContext.Provider>
    );

    expect(screen.queryByText('( ._.) 200 OK')).toBeInTheDocument();
  });

  it('does not show `modalContent` when `isModalOpen` is false', () => {
    render(
      <ModalContext.Provider
        value={{
          setModalOpen,
          isModalOpen: false,
          setIsDialog,
          isDialog: true,
          modalContent: <div>( ._.) 404 Not Found!</div>
        }}
      >
        <Modal />
      </ModalContext.Provider>
    );

    expect(screen.queryByText('( ._.) 404 Not Found!')).not.toBeInTheDocument();
  });
});
