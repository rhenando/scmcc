// app/components/SuccessStories.jsx

export default function SuccessStories() {
  return (
    <section className='section-padding'>
      <div className='container mx-auto'>
        <h2 className='section-title'>Selected Success Stories</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='bg-gray-50 p-8 rounded-lg'>
            <h3 className='font-bold text-xl text-brand-gold mb-3'>
              Cost Reduction & Efficiency – Consumer Goods
            </h3>
            <p className='text-gray-600'>
              A leading company faced high warehouse costs. After a
              comprehensive assessment and implementation of a new storage and
              inventory system, we achieved a 25% cost reduction and faster
              delivery within just six months.
            </p>
          </div>
          <div className='bg-gray-50 p-8 rounded-lg'>
            <h3 className='font-bold text-xl text-brand-gold mb-3'>
              Supply Chain Improvement in Healthcare
            </h3>
            <p className='text-gray-600'>
              We partnered with a major hospital in Riyadh to optimize inventory
              and processes ahead of JCI accreditation. With our systems and
              training, the hospital passed on the first attempt, enhancing its
              reputation and operational performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
