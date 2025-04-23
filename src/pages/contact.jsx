import Banniere from '../components/banniere';
import '../styles/contact.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IoShareSocial } from 'react-icons/io5';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa6';
import { useForm, ValidationError } from '@formspree/react';
import ConfirmationFormulaire from '../components/confirmation-formulaire';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mrbqggjr');
  return (
    <>
      <Banniere imageUrl="/banniere-contact.jpg" titleBanniere="Nous contacter" />
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="section-subtitle">Contactez-nous</span>
              <h2 className="section-title">Prenez contact avec nous</h2>
              <p className="section-description">
                Nous serons ravis d’échanger avec vous sur vos idées, projets ou besoins digitaux.
                Que ce soit pour une demande de devis, une question ou un simple échange, n’hésitez
                pas à nous écrire.
              </p>

              <div className="info-block">
                <div className="icon-box">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="title-4">Téléphone</h4>
                  <p>07 82 98 90 43</p>
                </div>
              </div>

              <div className="info-block">
                <div className="icon-box">
                  <IoIosMail />
                </div>
                <div>
                  <h4 className="title-4">Email</h4>
                  <p>contact.codeetpixel@gmail.com</p>
                </div>
              </div>
              <div className="info-block">
                <div className="icon-box">
                  <IoShareSocial />
                </div>
                <div className="icon-contact">
                  <a
                    href="https://www.linkedin.com/in/tonprofil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/codeetpixel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tonprofil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              {state.succeeded ? (
                <ConfirmationFormulaire />
              ) : (
                <form
                  action="https://formspree.io/f/mrbqggjr"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="text" name="name" placeholder="Votre nom" required />
                  <input id="email" type="email" name="email" placeholder="Votre email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <input type="text" name="phone" placeholder="Votre téléphone" />
                  <textarea
                    rows="6"
                    name="message"
                    id="message"
                    placeholder="Votre message"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  <button type="submit" disabled={state.submitting}>
                    Envoyer
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
