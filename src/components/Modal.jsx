import { Modal, Button } from "flowbite-react";
import { useState } from "react";

const MyModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} style={{background: 'black'}}>Open Modal</Button>
      <Modal show={open} size="md" onClose={() => setOpen(false)}>
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>
          <p>This is the modal content. You can customize it as needed.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
