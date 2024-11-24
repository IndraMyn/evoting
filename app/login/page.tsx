"use client";

import Image from "next/image";
import VoteIllustration from "@/assets/vote_illustration.png";
import Link from "next/link";
import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => router.push("/"),
    flow: "auth-code",
  });

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
              Login dengan Google untuk melanjutkan
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-9">
              <button
                onClick={handleLogin}
                className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Google
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
