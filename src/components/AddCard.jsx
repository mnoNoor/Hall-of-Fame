import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

export default function AddCard({ setCards, setShow }) {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const maxWords = 30;

  const addCard = () => {
    if (name.trim() === "" || desc.trim() === "") return;

    const newCard = {
      id: Date.now(),
      img,
      name,
      desc,
    };

    setCards((prevCards) => [newCard, ...prevCards]);

    setImg("");
    setName("");
    setDesc("");

    setShow(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h3 className="text-xl font-bold mb-4">Add New Character</h3>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Image URL:</label>
          <Input
            type="url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Name:</label>
          <Input
            type="text"
            placeholder="Character name"
            value={name}
            placeholder="URL"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Description:</label>
          <Input
            type="text"
            placeholder="Short description..."
            value={desc}
            onChange={(e) => {
              const text = e.target.value;
              const words = text.trim().split(/\s+/);

              if (words.length <= maxWords) {
                setDesc(text);
              }
            }}
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button onClick={addCard}>Save</Button>
        </div>
      </div>
    </div>
  );
}
