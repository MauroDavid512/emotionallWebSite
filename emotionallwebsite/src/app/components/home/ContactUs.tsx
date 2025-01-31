"use client";

import styles from "./ContactUs.module.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface Input {
  from_name: string;
  reply_to: string;
  message: string;
}

interface Errors {
  from_name: string;
  reply_to: string;
  message: string;
}

export default function ContactUs() {
  const [input, setInput] = useState<Input>({ from_name: "", reply_to: "", message: "" });
  const [errors, setErrors] = useState<Errors>({ from_name: "", reply_to: "", message: "" });
  const [touched, setTouched] = useState({ from_name: false, reply_to: false, message: false });

  const form = useRef<HTMLFormElement>(null);

  const validateInputs = (): Errors => {
    const newErrors: Errors = { from_name: "", reply_to: "", message: "" };
  
    if (input.from_name.trim().length === 0) {
      newErrors.from_name = "Name is required.";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(input.from_name)) {
      newErrors.from_name = "Name can only contain letters and spaces.";
    }
  
    if (input.reply_to.trim().length === 0) {
      newErrors.reply_to = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.reply_to)) {
      newErrors.reply_to = "Invalid email format.";
    }
  
    if (input.message.length > 400) {
      newErrors.message = "Message cannot exceed 400 characters.";
    }
  
    return newErrors;
  };
  

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const validationErrors = validateInputs();
    setErrors(validationErrors);
  
    // Si hay errores, no enviar el formulario
    if (Object.values(validationErrors).some((error) => error)) {
      return;
    }
  
    if (!form.current) return;
  
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          console.log("SUCCESS!");
          // Reiniciar los valores del formulario
          setInput({ from_name: "", reply_to: "", message: "" });
          // Restablecer el estado de 'touched' para que no aparezcan errores
          setTouched({ from_name: false, reply_to: false, message: false });
          // Limpiar los errores
          setErrors({ from_name: "", reply_to: "", message: "" });
        },
        (error: any) => {
          console.log("FAILED...", error.text);
        }
        
      );
  };
  

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleBlur = (field: keyof Input) => {
    setTouched({ ...touched, [field]: true });
    setErrors(validateInputs());
  };

  useEffect(() => {
    setErrors(validateInputs());
  }, [input]);

  return (
    <div className={styles.container} id='contact'>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            Please feel free to reach us with any suggestion or question
          </div>
          <div className={styles.subtitle}>support@emotionall.co</div>
        </div>
        <form className={styles.rightSide} ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name"></label>
          {touched.from_name && errors.from_name && <p className={styles.error}>{errors.from_name}</p>}
          <input
            className={styles.input}
            value={input.from_name}
            onChange={handleInput}
            onBlur={() => handleBlur("from_name")}
            id="user_name"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="user_email"></label>
          {touched.reply_to && errors.reply_to && <p className={styles.error}>{errors.reply_to}</p>}
          <input
            className={styles.input}
            value={input.reply_to}
            onChange={handleInput}
            onBlur={() => handleBlur("reply_to")}
            id="user_email"
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message"></label>
          {touched.message && errors.message && <p className={styles.error}>{errors.message}</p>}
          <textarea
            className={`${styles.input} ${styles.message}`}
            value={input.message}
            onChange={handleInput}
            onBlur={() => handleBlur("message")}
            id="message"
            name="message"
            placeholder="Message"
            maxLength={400}
            required
          />

          <input className={styles.btn} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
