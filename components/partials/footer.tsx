import Image from "next/image";
import TwitterLogo from "@/assets/logo/twitter.png";
import FacebookLogo from "@/assets/logo/facebook.png";
import InstagramLogo from "@/assets/logo/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-4">Tentang Kami</h3>
          <p className="text-sm">
            Platform e-voting fleksibel untuk segala kebutuhan! Kami hadir untuk
            membuat setiap voting menjadi mudah, seru, dan aman. Dengan
            antarmuka yang user-friendly dan sistem yang transparan, semua jenis
            pemungutan suara jadi lebih praktis. Pilih sekarang, nikmati
            hasilnya!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Kontak</h3>
          <ul className="text-sm space-y-2">
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@example.com</li>
            <li>Address: 123 Cikutra, Bandung</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={0}
                height={0}
                src={FacebookLogo}
                alt="Facebook"
                className="h-6 w-6 hover:opacity-75"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={0}
                height={0}
                src={TwitterLogo} 
                alt="Twitter"
                className="h-6 w-6 hover:opacity-75"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={0}
                height={0}
                src={InstagramLogo}
                alt="Instagram"
                className="h-6 w-6 hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} El Voting. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
