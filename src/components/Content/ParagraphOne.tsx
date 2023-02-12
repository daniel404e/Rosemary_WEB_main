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
                ROSEMARY{' '}
              </span>
              <span data-aos="fade-up" data-aos-duration="1800">
                SCHOOL{' '}
              </span>
              <span data-aos="fade-up" data-aos-duration="2200">
                OF{' '}
              </span>
              <span data-aos="fade-up" data-aos-duration="2600">
                EXCELLENCE{' '}
              </span>
            </h1>
            <p className="paraText mb-6 sm:text-sm  lg:text-lg  text-center font-normal text-white sm:px-16 xl:px-48 ">
              Established in 1981 ,{' '}
              <b className="boldtextoneparaone">Rosemary Institutions</b> mark
              excellence in all realms of education. The Sprawling campus
              located in <b className="boldtexttwoparaone">NGO New Colony</b>,
              Perumalpuram is Uniquely placed in the heart of the city yet
              offers a serene environment for schooling. We are founded on the
              core competencies that are pertinent today and will be relevant
              for years to come. The{' '}
              <b className="boldtextoneparaone">Rosemary Education Network</b>{' '}
              strives to create{' '}
              <b className="boldtexttwoparaone">modern citizens</b> who are
              equipped to take on challenges and primed to make{' '}
              <b className="boldtexttwoparaone">Global changes</b>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParagraphOne
