"use client";

import Image from "next/image";
import VoteIllustration from "@/assets/vote_illustration.png";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const onLogin = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse.credential);
    if (credentialResponse.credential) {
      localStorage.setItem("token", credentialResponse.credential);
      router.push("/");
    }
  };

  const onGuestLogin = () => {
    // Simpan status login sebagai tamu (opsional, hanya di memori lokal)
    localStorage.setItem("guest", "true");
    router.push("/");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden h-[600px]">
        <div className="w-full flex flex-col flex-1 lg:w-1/2 p-8">
          <h1 className="text-xl font-bold text-center text-gray-800">
            El Voting
          </h1>

          <div className="my-5">
            <hr />
          </div>

          <div className="flex flex-1 flex-col">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Selamat Datang
            </h1>

            <p className="text-sm text-center text-gray-600 mb-6 mt-12">
              Login dengan Google untuk melanjutkan atau masuk sebagai tamu
            </p>

            <div className="flex flex-col items-center space-y-4">
              <GoogleLogin onSuccess={onLogin} useOneTap />

              <button
                onClick={onGuestLogin}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Masuk tanpa Akun
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-6 text-center">
            Platform e-voting fleksibel untuk segala kebutuhan! Mulai dari
            keputusan penting hingga perdebatan seru soal telur dulu atau ayam
            dulu, kami hadir untuk membuat setiap voting menjadi mudah, seru,
            dan aman. Dengan antarmuka yang user-friendly dan sistem yang
            transparan, semua jenis pemungutan suara jadi lebih praktis. Pilih
            sekarang, nikmati hasilnya!
          </p>
        </div>

        <div className="w-full lg:w-1/2 bg-stone-50 flex items-center justify-center">
          <div className="bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
            <Image
              src={VoteIllustration}
              alt=""
              className="w-[350px] h-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
