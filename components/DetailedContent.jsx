"use client";

export default function DetailedContent() {
  const imageUrl = "/company-overview-bg.png";

  return (
    <section className='scroll-snap-section relative z-10' id='about-us'>
      <div className='h-screen'>
        <div
          className='relative flex h-full w-full items-center overflow-hidden'
          // The background property is changed to a linear gradient
          style={{
            background: "linear-gradient(to bottom, #C5A56D, #EAE0C8)",
          }}
        >
          <div className='container relative z-10 mx-auto grid grid-cols-1 items-center px-6 lg:grid-cols-5 lg:gap-16'>
            {/* Left Column with text content */}
            <div className='lg:col-span-3'>
              <div className='space-y-6 text-[#004d55]'>
                <h2 className='text-4xl font-bold tracking-tight md:text-5xl'>
                  Who We Are?
                </h2>

                <div className='space-y-4 text-lg md:text-xl'>
                  <p>
                    Supply Chain Management Consulting Company is a
                    distinguished Saudi company in providing management
                    consulting and innovative solutions in the field of supply
                    chain management in the Kingdom of Saudi Arabia.
                  </p>
                  <p>
                    The company has extensive experience in this field and
                    provides a variety of services that help the public and
                    private sectors develop the performance of their supply
                    chains.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className='relative hidden h-full items-center lg:col-span-2 lg:flex'>
              <div className='relative mx-auto w-full max-w-md'>
                <img
                  className='w-full'
                  src={imageUrl}
                  alt='Professionals collaborating over a project'
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/004d55/FFFFFF?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
