import '../styles/admin.css';
import { useState } from 'react';
import ModalAdmin from '../features/add-modal';

export default function ButtonAdmin() {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');

  const handleOpen = (currentAction) => {
    setAction(currentAction);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="button-container-admin">
      <button onClick={() => handleOpen('ajouter')} id="btn-1">
        Ajouter
      </button>
      <button id="btn-2" onClick={() => handleOpen('supprimer')}>
        Supprimer
      </button>
      <ModalAdmin open={open} handleClose={handleClose} action={action} />
    </div>
  );
}
