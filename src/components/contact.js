import { FaEnvelope } from "react-icons/fa";
import regionsList from "./assetsComponents/regions.json";
import "../styles/contact.css";

function Contact() {
  const Tumanlar = () => {
    return (
      <div>
        <label
          for="district"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-delay="800"
        >
          Tuman *
        </label>
        <select
          required
          className="district"
          id="district"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-delay="900"
        >
          <option selected disabled>
            Tuman tanlang
          </option>
          {regionsList.districts.map((district) => {
            return (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  const Viloyatlar = () => {
    return (
      <>
        <div className="d-flex align-items-center">
          <label
            for="regionSelect"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-delay="600"
          >
            Viloyat *
          </label>
          <select
            id="regionSelect"
            className="regionSelect"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-delay="700"
          >
            <option selected disabled>
              Viloyatni tanlang
            </option>
            {regionsList.regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  };

  return (
    <div className="d-flex justify-content-center overflow-hidden" id="contact">
      <div className="contact d-flex flex-column align-items-center py-4">
        <h1 className="py-1" data-aos="fade-down" data-aos-duration="1000">
          <FaEnvelope /> Biz bilan aloqa
        </h1>
        <div className="d-flex justify-content-center gap-5">
          <form className="d-flex flex-column">
            <div>
              <label
                for="name"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="200"
              >
                F.I.O. *
              </label>
              <input
                type="text"
                id="name"
                required
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="300"
              />
            </div>
            <div>
              <label
                for="email"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="400"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="500"
              />
            </div>
            <Viloyatlar />
            <Tumanlar />

            <div>
              <label
                for="adres"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="1000"
              >
                Ko'cha nomi *
              </label>
              <input
                type="text"
                id="adres"
                required
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="1100"
              />
            </div>
            <div className="d-flex align-items-start">
              <label
                for="message"
                className="my-2"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="1200"
              >
                Xabar matni *
              </label>
              <textarea
                id="message"
                required
                rows="6"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="1300"
              />
            </div>
            <div>
              <label
                for="fileSend"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="1400"
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
                data-aos-delay="1500"
                data-aos-offset="0"
              />
            </div>
            <button
              type="submit"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="1600"
              data-aos-offset="0"
            >
              JO'NATISH
            </button>
          </form>

          <div className="w-25 ">
            <h3
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-delay="1900"
            >
              Tashkilot haqida ma'lumot
            </h3>
            <h5
              className="fw-light"
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-delay="1800"
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
              data-aos-delay="1700"
            >
              Manzil va telefon
            </h3>
            <h5
              className=" fw-light"
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-delay="2000"
            >
              Tashkilot nomi <br /> (Manzili) <br /> (Toshkent shahar), <br />{" "}
              (O'zbekiston Respublika) 10080 <br />{" "}
              <a
                className="text-decoration-none text-"
                href="tel: +998 99 999 99 99"
              >
                +998-99-999-99-99
              </a>
            </h5>

            <iframe
              src="https://yandex.ua/map-widget/v1/?um=constructor%3A5323026e6e2c03580814bb322d618c525c305e57892ac51a51f00831787981d0&amp;source=constructor"
              width="370"
              height="195"
              className="my-2"
              frameborder="0"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="2200"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
