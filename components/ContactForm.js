import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const contactHandler = async (e) => {
    e.preventDefault();
    //implement submit logic here and then after submitting clear the input fields and set the loading to false

    //submitting the form first
    if (name && email && msg) {
      setLoading(true);
      const formData = {
        name,
        email,
        subject: "Mail from Ilyas's portfolio",
        message: msg,
      };

      try {
        const response = await fetch("https://calm-red-worm-toga.cyclic.app/", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Form data submitted successfully:", data);
          if (data.message === "ok") {
            setName("");
            setEmail("");
            setMsg("");
            setLoading(false);
          }
        } else {
          console.error("Failed to submit form data:", response.status);
        }
      } catch (error) {
        console.error(
          "An error occurred while submitting the form data:",
          error
        );
      }
    }

    setName("");
    setEmail("");
    setMsg("");
    setLoading(false);
  };

  return (
    <form
      data-aos="fade"
      className="contact__form"
      noValidate
      onSubmit={contactHandler}
    >
      <h2 className="contact__form--title heading--secondary">Contact me</h2>
      <input
        className="contact__form--input form--input form--input--text"
        type="text"
        placeholder="First name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="contact__form--input form--input form--input--text"
        type="email"
        required
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="contact__form--textarea form--input form--input--textarea"
        required
        rows="6"
        placeholder="Message"
        onChange={(e) => setMsg(e.target.value)}
      ></textarea>
      {!loading ? (
        <button className="contact__form--btn form--btn" type="submit">
          Send
        </button>
      ) : (
        <button disabled className="contact__form--btn form--btn" type="submit">
          <div className="loader"></div>
        </button>
      )}
    </form>
  );
}
