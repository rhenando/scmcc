// app/components/Footer.jsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer id='footer' className='bg-brand-dark text-white'>
      <div className='container mx-auto section-padding pb-8'>
        <div className='grid md:grid-cols-3 gap-12 text-center md:text-left'>
          {/* About */}
          <div>
            <h3 className='text-xl font-bold mb-4'>SCMCC</h3>
            <p className='text-gray-400'>
              Your partner in achieving supply chain excellence through
              innovative, practical, and sustainable solutions.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#overview'
                  className='text-gray-300 hover:text-brand-gold'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='text-gray-300 hover:text-brand-gold'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='#clients'
                  className='text-gray-300 hover:text-brand-gold'
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <ul className='space-y-2 text-gray-300'>
              <li>Riyadh, Kingdom of Saudi Arabia</li>
              <li>
                Email:{" "}
                <a
                  href='mailto:info@scmcc.sa'
                  className='hover:text-brand-gold'
                >
                  info@scmcc.sa
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href='tel:+966505209094' className='hover:text-brand-gold'>
                  +966 50 520 9094
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-12 border-t border-gray-700 pt-6 text-center text-gray-500'>
          <p>
            &copy; {new Date().getFullYear()} Supply Chain Management Consulting
            Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
