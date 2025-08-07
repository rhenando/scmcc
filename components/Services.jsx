// app/components/Services.jsx

const services = [
  {
    title: "Supply Chain Strategy & Network Design",
    description:
      "We develop holistic strategies and operational designs that support growth, expansion, and risk mitigation.",
  },
  {
    title: "Procurement & Sourcing Optimization",
    description:
      "We redesign procurement functions to ensure maximum value from suppliers, using tools like spend analysis and strategic sourcing.",
  },
  {
    title: "Logistics & Distribution Management",
    description:
      "We optimize transport and warehouse networks, including route planning, leveraging 3PL providers, and reducing costs.",
  },
  {
    title: "Digital Transformation",
    description:
      "We assist clients in selecting and implementing technologies like ERP, WMS, and IoT to automate operations.",
  },
  {
    title: "Sustainable Supply Chains",
    description:
      "We design environmentally friendly supply chains by optimizing resource use, fully aligned with ESG standards.",
  },
  {
    title: "Risk Management & Resilience Building",
    description:
      "We identify vulnerabilities and strengthen supply chains against disruptions through strategic planning.",
  },
];

export default function Services() {
  return (
    <section id='services' className='section-padding'>
      <div className='container mx-auto'>
        <h2 className='section-title'>Our Services</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div
              key={service.title}
              className='bg-gray-50 p-8 rounded-lg transition-shadow hover:shadow-xl'
            >
              <h3 className='font-bold text-xl text-brand-teal mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
