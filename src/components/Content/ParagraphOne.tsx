import React from 'react'
const ParagraphOne = () => {
  return (
    <>
      <div className="bg-primary p-4 py-20">
        <div className="container mx-auto p-3">
          <div>
            <h1 className=" fontText mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              <span data-aos="fade-up" data-aos-duration="600">
                Welcome{' '}
              </span>
              <span data-aos="fade-up" data-aos-duration="1000">
                to{' '}
              </span>
              <span data-aos="fade-up" data-aos-duration="1400">
                Rosemary{' '}
              </span>
              <span data-aos="fade-up" data-aos-duration="1800">
                School{' '}
              </span>
              <span data-aos="fade-up" data-aos-duration="2200">
                of{' '}
              </span>
              <span data-aos="fade-up" data-aos-duration="2600">
                excellence{' '}
              </span>
            </h1>
            <p className="paraText mb-6 sm:text-sm  lg:text-lg  text-center font-normal text-white sm:px-16 xl:px-48 ">
              Established in 1981 Rosemary Institutions mark excellenceinall the
              realms of education. The Sprawling campus located in NGO New
              Colony, Perumalpuram is Uniquely placed in the heart of the city
              yet offers a serene environment for schooling. We are founded on
              the core competencies that are pertinent today and will be
              relevant for years to come. The Rosemary Education Network strives
              to create modern citizens who are equipped to take on challenges
              and primed to make global changes
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParagraphOne
