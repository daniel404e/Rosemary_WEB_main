import React from 'react'
const Gallery = () => {
  const arraywithimages = [
    {
      src: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'image'
    },
    {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'image'
    },
    {
      src: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'image'
    },
    {
      src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      alt: 'image'
    },

    {
      src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      alt: 'image'
    },
    {
      src: 'https://images.unsplash.com/photo-1501290836517-b22a21c522a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80',
      alt: 'image'
    },
    {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'image'
    },
    {
      src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      alt: 'image'
    },

    {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'image'
    }
  ]

  return (
    <section
      className="wrapper-full tab-container effectTab-header"
      id="style_9"
    >
      <h1 className=" fontText my-4 text-2xl text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-4xl ">
        A 21st CENTURY INSTITUTION
      </h1>
      <p className="text-center">ACADEMICS & BEYOND</p>
      <div className="wrapper tab-item">
        <div className="custom-row">
          <div className="column-12 column-xs-12 tab">
            <div className="custom-row">
              {/* Image 1 */}
              {arraywithimages.map((item) => {
                return (
                  <div
                    key={item.src}
                    className="column-4 column-sm-6 column-md-6 column-xs-12 "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="effect effect-nine">
                      <img
                        src="https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        className="img-fluid"
                        alt="image"
                      />
                      <div className="tab-text">
                        {/* <h2>Three column 4</h2> */}
                        <p>poppins Design for smart design.</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
