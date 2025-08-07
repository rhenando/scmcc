// app/components/WhyChooseUs.jsx

export default function WhyChooseUs() {
  return (
    <section className='bg-brand-teal text-white section-padding'>
      <div className='container mx-auto text-center'>
        <h2 className='section-title !text-white'>Why Choose SCMCC?</h2>
        <p className='max-w-3xl mx-auto text-lg text-gray-200 mb-8'>
          Our strength lies not just in what we offer, but how we deliver it. We
          work side-by-side with your teams, understanding the Saudi and GCC
          markets deeply while applying global standards to achieve measurable
          outcomes.
        </p>
        <a
          href='#footer'
          className='px-8 py-3 bg-brand-gold text-white font-semibold rounded-md hover:bg-opacity-90 transition-all'
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
