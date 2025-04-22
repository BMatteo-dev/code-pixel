import '../styles/contact.css';

export default function ConfirmationFormulaire() {
  return (
    <div>
      <div id="checked">
        <svg xmlns="http://www.w3.org/2000/svg" id="icon-check" viewBox="0 0 448 512">
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </div>
      <p id="ty">Merci !</p>
      <p id="card-added">Votre message a été envoyé 🙌</p>
      {/* <ConfirmerBtn topPosition="450px" value={'Continue'} /> */}
    </div>
  );
}
