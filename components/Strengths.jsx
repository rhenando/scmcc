// app/components/Strengths.jsx

const strengths = [
  {
    title: "Hands-on Execution Experience",
    description:
      "Our team brings strong operational backgrounds, giving us a precise understanding of real-world challenges.",
  },
  {
    title: "Local Insight + Global Methodologies",
    description:
      "We combine in-depth knowledge of the Saudi market with globally recognized models and tools.",
  },
  {
    title: "Independence & Objectivity",
    description:
      "We are not affiliated with any vendor, ensuring our clients receive unbiased, fully customized solutions.",
  },
  {
    title: "Tangible, Measurable Results",
    description:
      "We measure performance with data and deliver actual improvements in cost, efficiency, and agility.",
  },
];

export default function Strengths() {
  return (
    <section id='strengths' className='section-padding'>
      <div className='container mx-auto'>
        <h2 className='section-title'>Our Strengths</h2>
        <div className='grid md:grid-cols-2 gap-10'>
          {strengths.map((strength) => (
            <div key={strength.title}>
              <h3 className='font-bold text-xl text-brand-teal mb-2'>
                {strength.title}
              </h3>
              <p className='text-gray-600'>{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
