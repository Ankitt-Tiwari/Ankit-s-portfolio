import { useState } from "react";
import axios from "axios";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:5000/api/contact",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);

    } catch (error) {

      console.log(error.response);
alert(error.response?.data?.message || error.message);
      setLoading(false);

    }

  };

  return (

    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-black"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

        {/* Left Side */}
        <div className="flex flex-col justify-center">

          <p className="text-orange-500 text-lg mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 leading-8">

            Feel free to contact me for web development,
            digital solutions, collaborations, or freelance projects.

          </p>

        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111111] border border-gray-800 rounded-3xl p-8"
        >

          <div className="mb-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            />

          </div>

          <div className="mb-6">

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            />

          </div>

          <div className="mb-6">

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            ></textarea>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 px-8 py-4 rounded-xl hover:bg-orange-600 transition w-full"
          >

            {loading ? "Sending..." : "Send Message"}

          </button>

        </form>

      </div>

    </section>

  );
};

export default Contact;