import React from "react";
import { FaFacebook, FaInstagram,FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <hr />

      <footer className="py-12">
        <div className="max-w-screen-2xl  mx-auto px-4 md:px-20 my-16">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100088847739904" target="blank"> <FaFacebook size={24} /></a>
             <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmanishbc01%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2hmDCNX8VVtQpuT1koi63PMVIxfsB7h9JKHE92ifck_AZYvzQneXENI40_aem_d8m9EemXB95esbkom0m8jA&h=AT2fmmJZp-5i3sCbouh0e3qCagjgtQndi5GWx3MdxxE2-6WvFoLFdMlmAW1z7wNQ5P300LQvR-7iNsU_2SE8CWDe_t55Sgw1XTNekm36EpaxVi6LIowCFyYuGXLm" target="blank"> <FaInstagram size={24} /></a>
             
              <a href="https://wa.me/9823463895" target="_blank"> <FaWhatsapp size={24} /></a>
             
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2021 All rights reserved</p>
              <p className="text-sm">Supportive partner </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
