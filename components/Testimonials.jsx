// app/components/Testimonials.jsx

export default function Testimonials() {
  return (
    <section className='section-padding bg-gray-50'>
      <div className='container mx-auto'>
        <h2 className='section-title'>What Our Clients Say</h2>
        <div className='space-y-8 max-w-4xl mx-auto'>
          <blockquote className='text-center text-lg italic text-gray-700'>
            <p>
              "Thanks to SCMCC’s guidance, we obtained JCI accreditation on the
              first attempt — an achievement that greatly enhanced our
              hospital’s reputation."
            </p>
            <footer className='mt-4 not-italic font-semibold text-brand-gold'>
              — Hospital Director, Riyadh
            </footer>
          </blockquote>
          <blockquote className='text-center text-lg italic text-gray-700'>
            <p>
              "SCMCC helped us reduce warehouse costs by a quarter and
              significantly improve delivery times. Their hands-on approach was
              the real game-changer."
            </p>
            <footer className='mt-4 not-italic font-semibold text-brand-gold'>
              — Supply Chain Manager, Leading FMCG Company
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
