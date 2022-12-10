import Heading from '@/components/Heading'
import React from 'react'

const Curriculum = () => {
  const data = [
    {
      title: 'Our Campus',
      description:
        ' Rosemary School of Excellence has world class infrastructure for the complete learning experience for your child. The environment at school makes students comfortable and facilitates an atmosphere for continuous knowledge sharing and creative thinking. We feature a multi-faceted array of facilities across all our campuses. Apart from spacious classrooms, RMSE sports a slew of facilities that enhance the way children learn, play and interact'
    },
    {
      title: 'Pre-primary Classrooms',
      description:
        'Headed by a teacher and an assistant teacher, keeping in view the child centric model, the School has brightly-lit and well ventilated classrooms. Beyond the norms spacious 1000 Sq Feet air-conditioned (PK and LK) Classrooms and 500Sqft UK classrooms are easy enough to make 40 students at a time. The school furniture is specially designed to facilitate good posture, give comfort and aid optimum learning.'
    },
    {
      title: 'Primary Classrooms',
      description:
        'Keeping in view the child centric model, the School has brightly-lit and well ventilated classrooms. As per the norms spacious 500 Sq Feet Classrooms are easy enough to make 40 students at a time. The school furniture is specially designed to facilitate good posture, give comfort and aid optimum learning.'
    },
    {
      title: 'Play Area',
      description:
        'The Pre-Primary Wing has a spacious Playing area is a place specifically designed to enable children to play there. It is typically outdoors.'
    },
    {
      title: 'Kreedo Lab (Montessori Equipments)',
      description:
        'The pre-primary wing has a well-equipped lab room with educational equipment for motorskill development, language, Math and cognitive development. These rooms are in tandem with classroom teaching and hence reinforces the concept.'
    },
    {
      title: 'Library',
      description:
        'The library has a well selected collection of books, periodicals, newspaper etc. It has a rich collection of around 2900 books and is increasing day on day. The teachers at our School holds regular storytelling sessions for younger students. It has a spacious reading room and a reference section too.'
    },
    {
      title: 'Computer Lab',
      description:
        'With Information Technology touching every facet of our life, computer classes have been a integral part of our curriculum. Currently the primary wing has sufficient laptops. The lab is equipped with Multimedia software providing an opportunity for young minds to learn technology.'
    },
    {
      title: 'Sports Ground',
      description:
        'We believe that sports teaches teamwork, courage and the ability to win & lose with grace. It is an integral & compulsory part of our curriculum. We conduct various sports like football, throwball, badminton, cricket, and athletics among others.'
    },
    {
      title: 'Multi-purpose Hall',
      description:
        'Our school has an auditorium which provides opportunities to conduct inter-house competitions. It has a seating capacity of more than 200 students.'
    },
    {
      title: 'Medical Facility',
      description:
        'An airy, well ventilated, well maintained room with beds and basic medical facilities define the health care centre in RMSE school. The informative charts and posters on the walls describing the importance of a healthy body. The infirmary can handle situation by providing immediate relief in the form of first-aid.'
    }
  ]
  return (
    <div className="max-w-7xl mx-auto ">
      <Heading first={'Curriculum'} />
      <div className="ml-4 mt-2">
        {data.map((value, index) => {
          return (
            <div className="sm:ml-2" key={index}>
              <h1 className="  mb-4 mt-4 text-primary text-xl inline-block transition-all ease duration-200 cursor-pointer border-primary border-b-2 font-medium leading-relaxed tracking-tight">
                {value.title}
              </h1>
              <h5 key={index} className="ml-2 md:w-3/4  text-justify">
                {value.description}
              </h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Curriculum
