import React from 'react';
import { Toast, ToastContainer} from 'react-bootstrap';

const ErrorToast: React.FC<{ show: boolean; message: string; onClose: () => void }> = ({
    show,
    message,
    onClose,
  }) => {
    return (
      <ToastContainer className="p-3" position="top-end">
          <Toast onClose={onClose} show={show} delay={3000}  bg="dark" autohide>
          <Toast.Header>
              <strong className="me-auto">Erro</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
          </Toast>
      </ToastContainer>
    );
  };

export default ErrorToast;