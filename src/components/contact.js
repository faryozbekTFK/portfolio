import { FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="d-flex justify-content-center overflow-hidden" id="contact">
      <div className="contact d-flex flex-column align-items-center py-4">
        <h1
          className="py-1 text-light"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <FaEnvelope /> Biz bilan aloqa
        </h1>
        <div className="contactCont d-flex justify-content-center gap-5">
          <form className="d-flex flex-column form">
            <div>
              <label
                htmlFor="name"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                F.I.O. *
              </label>
              <input
                type="text"
                id="name"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Telefon *
              </label>
              <input
                type="number"
                id="phone"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>

            <div>
              <label
                htmlFor="viloyat"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Viloyat *
              </label>
              <input
                type="text"
                id="viloyat"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div>
              <label
                htmlFor="tuman"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Tumani *
              </label>
              <input
                type="text"
                id="tuman"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div>
              <label
                htmlFor="adres"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Ko'cha nomi *
              </label>
              <input
                type="text"
                id="adres"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div className="d-flex align-items-start">
              <label
                htmlFor="message"
                className="my-2"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Xabar matni *
              </label>
              <textarea
                id="message"
                required
                rows="6"
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div>
              <label
                htmlFor="fileSend"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-offset="0"
              >
                Rasm yuborish
              </label>
              <input
                type="file"
                accept="image/*"
                id="fileSend"
                className="text-decoration-underline"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-offset="0"
              />
            </div>
            <button
              type="submit"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-offset="0"
            >
              JO'NATISH
            </button>
          </form>

          <div className="contactAboutCont w-25">
            <h3
              data-aos="fade-down"
              data-aos-duration="400"
              className="text-light"
            >
              Tashkilot haqida ma'lumot
            </h3>
            <h5
              className="fw-light text-light"
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-offset="0"
            >
              Use this bio section as your way of describing yourself and saying
              what you do, what technologies you like to use or feel most
              comfortable with, describing your personality, or whatever else
              you feel like throwing in.
            </h5>
            <br />

            <h3
              data-aos="fade-down"
              data-aos-duration="400"
              className="text-light"
            >
              Manzil va telefon
            </h3>
            <h5
              className="fw-light text-light"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              Tashkilot nomi (Manzili) (Toshkent shahar), (O'zbekiston
              Respublika) 10080 <br />
              <a
                className="text-decoration-none text-"
                href="tel: +998 99 999 99 99"
              >
                +998-99-999-99-99
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
