// app/components/WhoWeServe.jsx

const sectors = [
  {
    name: "Startups and SMEs",
    description:
      "Building scalable and efficient supply chains with a focus on cost-effective operations.",
  },
  {
    name: "Manufacturing Companies",
    description:
      "Enhancing production planning and process flow across factories and supply chains.",
  },
  {
    name: "Retail & Distribution",
    description:
      "Improving inventory, speeding up delivery, and balancing high service levels with operational efficiency.",
  },
  {
    name: "Healthcare & Government",
    description:
      "Designing supply chains that ensure critical supply continuity and regulatory compliance.",
  },
];

export default function WhoWeServe() {
  return (
    <section id='clients' className='section-padding bg-gray-50'>
      <div className='container mx-auto'>
        <h2 className='section-title'>Who We Serve</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className='bg-white p-6 rounded-lg text-center shadow-sm'
            >
              <h3 className='font-semibold text-xl text-brand-gold mb-2'>
                {sector.name}
              </h3>
              <p className='text-gray-600'>{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
