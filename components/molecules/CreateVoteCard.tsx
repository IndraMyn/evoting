"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

interface FormValues {
  caption: string;
  content: FileList | null;
}

const CreateVoteCard = () => {
  const [choices, setChoices] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [choiceInput, setChoiceInput] = useState("");
  const router = useRouter();

  const onSubmit = (data: FormValues) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Anda harus login untuk membuat voting.");
      router.push("/login"); // Redirect ke halaman login
      return;
    }

    if (!data.caption || !data.content || data.content.length === 0) {
      alert("Caption dan file Konten harus diisi!");
      return;
    }

    console.log("Data berhasil dikirim:", {
      caption: data.caption,
      content: data.content[0],
      choices,
    });

    alert("Voting berhasil dibuat!");
    router.push("/voting-list");
  };

  const onAddChoice = () => {
    if (!choiceInput.trim()) {
      alert("Nama kandidat tidak boleh kosong!");
      return;
    }
    setChoices([...choices, choiceInput]);
    setChoiceInput("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 to-green-600 text-white">
      <Card className="w-full max-w-3xl p-8 shadow-lg rounded-lg border border-gray-300 bg-white">
        <CardHeader className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">Buat Voting Baru</h2>
          <p className="text-gray-600">Isi formulir di bawah untuk membuat voting baru.</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="caption" className="text-sm font-semibold text-gray-800">Judul</Label>
              <Input
                {...register("caption", { required: "Judul wajib diisi" })}
                placeholder="Masukkan judul di sini"
                className="mt-2 w-full rounded-md bg-gray-100 border border-gray-300 text-gray-800 focus:ring focus:ring-teal-500"
              />
              {errors.caption && (
                <span className="text-red-600 text-sm">{errors.caption.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="content" className="text-sm font-semibold text-gray-800">Konten</Label>
              <Input
                {...register("content", {
                  required: "File konten wajib diunggah",
                })}
                type="file"
                id="content"
                className="mt-2 w-full rounded-md bg-gray-100 border border-gray-300 text-gray-800 file:bg-teal-600 file:text-white"
              />
              {errors.content && (
                <span className="text-red-600 text-sm">{errors.content.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="choices" className="text-sm font-semibold text-gray-800">Tambah Kandidat</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  value={choiceInput}
                  onChange={(e) => setChoiceInput(e.target.value)}
                  placeholder="Masukkan nama kandidat"
                  className="flex-1 rounded-md bg-gray-100 border border-gray-300 text-gray-800 focus:ring focus:ring-teal-500"
                />
                <Button
                  type="button"
                  onClick={onAddChoice}
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                >
                  Tambah
                </Button>
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              {choices.map((choice, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md border border-gray-300">
                  <span className="text-gray-800">{choice}</span>
                  <Button
                    type="button"
                    onClick={() => setChoices(choices.filter((_, i) => i !== index))}
                    className="text-red-600 hover:underline"
                  >
                    Hapus
                  </Button>
                </li>
              ))}
            </ul>

            <Button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:ring focus:ring-teal-500"
            >
              Buat Voting
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-600">
          Pastikan semua data terisi dengan benar.
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateVoteCard;