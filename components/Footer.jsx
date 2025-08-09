// app/components/Footer.jsx

import Link from "next/link";
import Image from "next/image"; // ✅ 1. Import the Image component

export default function Footer() {
  return (
    <footer id='footer' className='bg-[#004d55] text-white'>
      <div className='container mx-auto px-6 pt-12 pb-12'>
        <div className='grid md:grid-cols-3 gap-12 text-center md:text-left'>
          {/* About */}
          <div>
            {/* ✅ 2. Replace the h3 tag with the Image component */}
            <Image
              src='/logo.svg' // Path to your logo in the /public folder
              alt='SCMCC Logo'
              width={100} // Adjust to your logo's actual width
              height={40} // Adjust to your logo's actual height
              className='mb-4 mx-auto md:mx-0' // Keep bottom margin & handle alignment
            />
            <p className='text-white'>
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
                  href='#about-us'
                  className='text-white hover:text-brand-gold'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='text-white hover:text-brand-gold'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='#who-we-serve'
                  className='text-white hover:text-brand-gold'
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <ul className='space-y-2 text-white'>
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
        <div className='mt-12 border-t border-white pt-6 text-center text-white'>
          <p>
            &copy; {new Date().getFullYear()} Supply Chain Management Consulting
            Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
