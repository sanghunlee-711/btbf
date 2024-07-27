'use client';

import Pagestyles from '../../styles/page.module.scss';
import styles from '../../styles/customer-support.module.scss';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    orderNumber: '',
    contact: '',
    reason: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { name, orderNumber, contact, reason, message } = formData;
    const mailtoLink = `mailto:bttfthefolks@gmail.com?subject=${encodeURIComponent(
      reason
    )}&body=${encodeURIComponent(
      `Name: ${name}\nOrder Number: ${orderNumber}\ncontact: ${contact}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className={Pagestyles.main}>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="order-number">Order Number</label>
          <input
            type="text"
            id="order-number"
            name="orderNumber"
            placeholder="주문번호"
            value={formData.orderNumber}
            onChange={handleChange}
          />

          <label htmlFor="email">Contact</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="연락처"
            value={formData.contact}
            onChange={handleChange}
          />

          {/* <label htmlFor="reason">Reason for Contact</label> */}
          {/* <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="">Please Select</option>
            <option value="General Inquiry">일반 질문</option>
            <option value="Order Issue">주문 오류</option>
            <option value="Feedback">기타</option>
          </select> */}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        <div className={styles.contactInfo}>
          <p>
            <strong>Contact</strong>
            <a href="mailto:bttfthefolks@gmail.com">bttfthefolks@gmail.com</a>
          </p>
          <p>
            <strong>Customer Support Hours</strong>
            Monday – Friday 18:00pm - 22:00pm KST
            <em>Excluding the weekend and major holidays.</em>
          </p>
          <p>
            <a href="#">Instagram</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
