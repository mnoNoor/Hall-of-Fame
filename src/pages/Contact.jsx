import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          Got a question or just want to say hi? Feel free to reach out anytime!
        </p>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          
          <div className="flex space-x-6 text-3xl">
            <a href="https://github.com/mnoNoor" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-700 transition-colors" />
            </a>

            <a href="https://t.me/mnoNoor" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="hover:text-blue-500 transition-colors" />
            </a>

            <a href="mailto:zcpmq14@gmail.com">
              <MdEmail className="hover:text-red-500 transition-colors" />
            </a>
          </div>

          <p className="mt-4 text-gray-700">
            Address: 123 Fame Avenue, Greatness city, Achievement country
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
