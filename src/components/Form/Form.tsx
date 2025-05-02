'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Form.module.scss";

interface FormProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  user_email: string;
  message: string;
  phone: string;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const captcha = useRef<ReCAPTCHA>(null);
  const form = useRef<HTMLFormElement>(null);
  
  const [name, setName] = useState<string>("");
  const [user_email, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [captchaValid, setCaptchaValid] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const onChange = () => {
    if (captcha.current?.getValue()) {
      setCaptchaValid(true);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate captcha
    if (captcha.current?.getValue()) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
      return;
    }
    
    // Form data for callback
    const formData: FormData = { 
      name, 
      user_email, 
      phone, 
      message 
    };
    
    // Call onSubmit callback if provided
    if (onSubmit) {
      onSubmit(formData);
    }

    // Send email using emailjs
    if (form.current) {
      emailjs
        .sendForm(
          "service_6liye7j",
          "template_oe78cbt",
          form.current,
          "voNIu8Q4CduuhOd-f"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            // Reset form fields
            setName("");
            setUserEmail("");
            setPhone("");
            setMessage("");
            setFormSubmitted(true);
          },
          (error) => {
            console.error("Email sending failed:", error.text);
          }
        );
    }
  };

  return (
    <div id="Contáctanos" className={styles.contactanos} data-aos="fade-up" data-aos-duration="2500">
      <h1>¿Alguna duda? / Contáctanos</h1>
      <div className="section-title-divider"></div>
      
      <div className="container">
        {!formSubmitted ? (
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-lg-5">
                <i
                  className="bi bi-envelope-fill"
                  data-aos="fade-right"
                  data-aos-offset="350"
                  data-aos-easing="ease-in-sine"
                ></i>
                <br />
                <h3 className="text-center">
                  justiexpress@gmail.com <br /> <br />
                  (+57) 318 5725324
                </h3>
              </div>
              <div className="col-lg-7">
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    name="name"
                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={user_email}
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Teléfono"
                    name="phone"
                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <textarea
                    placeholder="Escribe tu mensaje..."
                    name="message"
                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  />
                </div>
                <div className="row">
                  <div className={`${styles.captchaBox} col-md-6 mb-3`}>
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey="6Le_p4ciAAAAANxwqk28m4Vez8GtPcLRg__vdulK"
                      onChange={onChange}
                    />
                    {!captchaValid && (
                      <div className={styles.errorCaptcha}>
                        Acepta el captcha para enviar formulario
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <button 
                      className={`btn ${styles.submitButton} px-4 py-2 rounded shadow`}
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="alert alert-success text-center py-4">
            <h4>¡Formulario enviado con éxito!</h4>
            <p>Pronto nos pondremos en contacto contigo.</p>
          </div>
        )}
      </div>
    </div>
  );
};