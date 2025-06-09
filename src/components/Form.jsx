import { useState } from "react";

export default function Form() {
  const [status, setStatus] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Kontakta oss</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex flex-col flex-1">
            <label className="italic">Förnamn*</label>
            <input
              type="text"
              className="w-full border-b black bg-transparent focus:outline-none focus:border-b-2 transition-all h-8"
              required
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="italic ">Efternamn*</label>
            <input
              type="text"
              className="w-full border-b bg-transparent focus:outline-none focus:border-b-2 transition-all h-8"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="italic ">Email*</label>
          <input
            type="email"
            className="w-full border-b bg-transparent focus:outline-none focus:border-b-2 transition-all h-8"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="italic ">Meddelande*</label>
          <input
            type="text"
            className="w-full border-b  bg-transparent focus:outline-none focus:border-b-2 transition-all resize-none"
            required
          />
        </div>
        <div className="flex flex-col items-center mt-6">
          <button
            type="submit"
            className="w-48 border border-blue-200 rounded-md p-2 bg-blue-200 hover:bg-blue-300 transition-colors"
          >
            Skicka
          </button>
          {status === "success" && (
            <p className="mt-2 font-medium text-center">
              Klart! Ditt meddelande har skickats.
            </p>
          )}
          {status === "error" && (
            <p className="mt-2 0 font-medium text-center">
              Något gick fel! Försök igen senare.
            </p>
          )}
        </div>
      </form>
      <p className="mb-4 mt-8 italic text-sm">
        © Aran Asaiesh, 2025.<br></br> Contact: aranasaiesh@gmail.com
      </p>
    </section>
  );
}
