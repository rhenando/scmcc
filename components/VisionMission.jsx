// app/components/VisionMission.jsx

export default function VisionMission() {
  return (
    <section className='section-padding'>
      <div className='container mx-auto grid md:grid-cols-2 gap-12 items-center'>
        <div className='p-8 bg-white rounded-lg'>
          <h3 className='text-2xl font-bold text-brand-teal mb-4'>
            Our Vision
          </h3>
          <p className='text-gray-600'>
            To be the leading supply chain consulting partner in Saudi Arabia
            and the Gulf by delivering innovative solutions that drive real and
            lasting impact on our clients' performance.
          </p>
        </div>
        <div className='p-8 bg-white rounded-lg'>
          <h3 className='text-2xl font-bold text-brand-teal mb-4'>
            Our Mission
          </h3>
          <p className='text-gray-600'>
            We help companies optimize their supply chains through effective and
            efficient consulting solutions grounded in deep expertise and local
            insight. We are committed to achieving tangible results that promote
            growth and future readiness.
          </p>
        </div>
      </div>
    </section>
  );
}
