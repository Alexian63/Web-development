import { useState } from "react";
import { useRouter } from "next/router";
import { saveEvent } from "../lib/Store.js";
export default function FormulaireEvenement() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: "",
    date: "",
    lieu: "",
    description: "",
    nombre: 0,
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
          imagePreview: URL.createObjectURL(file),
        }));
      };
      if (file) reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const slug = formData.nom.toLowerCase().replace(/\\s+/g, "-");
    const handleSubmit = (e) => {
        e.preventDefault();
        const slug = formData.nom.toLowerCase().replace(/\s+/g, "-");
        saveEvent(slug, formData);
        router.push(`/${slug}`);
      };
    router.push(`/${slug}`);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Créer un événement</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="nom" type="text" placeholder="Nom" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="lieu" type="text" placeholder="Lieu" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input name="nombre" type="number" placeholder="Nombre de places" onChange={handleChange} required />
        <input name="image" type="file" accept="image/*" onChange={handleChange} />
        <button type="submit" style={{ padding: "10px", background: "#0070f3", color: "white", border: "none", borderRadius: "4px" }}>
          Soumettre
        </button>
      </form>
    </div>
  );
}
