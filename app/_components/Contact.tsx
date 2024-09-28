"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhoneIcon } from "./icons/PhoneIcon";
import { Facebook } from "./icons/Facebook";
import { EmailIcon } from "./icons/EmailIcon";
import { ClockIcon } from "./icons/ClockIcon";
import { Location } from "./icons/Location";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      // Remplacez l'URL par l'URL de votre API ou endpoint
      const response = await fetch("forms/contact.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSuccess(true);
    } catch (error) {
      setError("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-custom-bg contact py-8 lg:py-16">
      <div className="flex justify-start mb-12 ml-8">
        <div className="ml-8">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl font-bold ml-8">Contact</h2>
            <div className="w-16 h-0.5 bg-primary ml-4"></div>
          </div>
          <p className="text-xl mt-2 text-primary ml-8">Contact Us</p>
        </div>
      </div>

      <div data-aos="fade-up" className="mb-8">
        <iframe
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61756.14699981389!2d-17.480253804740652!3d14.669603106268246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1724ebcf41b5d%3A0x2d84ad82d5bef1a6!2sDakar-Plateau%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1723689223265!5m2!1sfr!2ssn"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className=" container mx-auto mt-8 px-4 lg:px-12" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="info space-y-8">
            <div className="flex items-center">
              <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                <Location />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-white">Location:</h4>
                <p className="text-gray-600">
                  Plateau
                  <br />
                  Dakar, SN
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                <ClockIcon />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-white">
                  Open Hours:
                </h4>
                <p className="text-gray-600">
                  Monday-Saturday:
                  <br />
                  11:00 AM - 23:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                <EmailIcon />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-white">Email:</h4>
                <p className="text-gray-600">info@darline.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                <PhoneIcon />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-white">Call:</h4>
                <p className="text-gray-600">+221 76 909 94 65</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <form
              onSubmit={handleSubmit}
              role="form"
              className="php-email-form space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  className="form-control border p-3 rounded"
                  id="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-control border p-3 rounded"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <input
                type="text"
                className="form-control border p-3 rounded w-full mt-6"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="form-control border p-3 rounded w-full mt-6"
                name="message"
                id="message"
                placeholder="Message"
                required
              ></textarea>
              <div className="space-y-2 mt-6">
                {loading && <div className="loading">Loading...</div>}
                {error && (
                  <div className="error-message text-red-500">{error}</div>
                )}
                {success && (
                  <div className="sent-message text-green-500">
                    Your message has been sent. Thank you!
                  </div>
                )}
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-6 rounded-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Trait de séparation */}
      <div className="mt-8">
        <hr className="w-full border-t-2 border-d9ba85" />
      </div>
    </section>
  );
};

export default Contact;
