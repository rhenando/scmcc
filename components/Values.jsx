// app/components/Values.jsx

const values = [
  {
    name: "Integrity",
    description:
      "We commit to transparency and honesty, always putting the client’s interest first.",
  },
  {
    name: "Excellence",
    description: "We deliver high-quality services that exceed expectations.",
  },
  {
    name: "Innovation",
    description:
      "We create practical and forward-thinking solutions that address evolving market challenges.",
  },
  {
    name: "Empowerment",
    description:
      "We build our clients’ internal capabilities to ensure sustainable improvements after project completion.",
  },
];

export default function Values() {
  return (
    <section className='section-padding bg-gray-50'>
      <div className='container mx-auto'>
        <h2 className='section-title'>Our Values</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {values.map((value) => (
            <div
              key={value.name}
              className='bg-white p-6 rounded-lg shadow-sm text-center'
            >
              <h3 className='font-semibold text-xl text-brand-gold mb-2'>
                {value.name}
              </h3>
              <p className='text-gray-600'>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
