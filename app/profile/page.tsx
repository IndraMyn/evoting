"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("John Doe");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      localStorage.setItem("token", credentialResponse.credential);
      setIsLoggedIn(true);
      alert("Login berhasil!");
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert("Nama tidak boleh kosong!");
      return;
    }

    console.log("Nama berhasil disimpan:", name);
    alert("Perubahan berhasil disimpan!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200">
      {isLoggedIn ? (
        <Card className="w-full max-w-md p-6 shadow-xl border bg-white rounded-2xl">
          {/* Tombol Kembali */}
          <div className="flex justify-start mb-6">
            <Button
              onClick={() => router.push("/")}
              className="px-4 py-2 text-xs font-medium text-purple-700 bg-purple-100 border border-purple-300 rounded-full hover:bg-purple-200"
            >
              ⬅ Kembali
            </Button>
          </div>

          {/* Header Profil */}
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto shadow-lg">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>IMG</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-4 text-2xl font-extrabold text-purple-800">
              Profil Pengguna
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Perbarui informasi profil Anda dengan mudah.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-purple-800"
                >
                  Nama
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="mt-2 border-purple-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-purple-800"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  value="johndoe@email.com"
                  disabled
                  readOnly
                  className="mt-2 bg-gray-100 border-gray-300 cursor-not-allowed"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-2 mt-4 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Simpan Perubahan
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            Perubahan akan disimpan setelah konfirmasi.
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-full max-w-md p-6 shadow-xl border bg-white rounded-2xl">
          {/* Halaman Login */}
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-extrabold text-purple-800">
              Login
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Silakan login untuk mengakses profil Anda.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <GoogleLogin onSuccess={handleLogin} useOneTap />
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            Login menggunakan akun Google untuk melanjutkan.
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Page;
