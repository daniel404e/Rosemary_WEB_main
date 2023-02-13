import React from 'react'

const Ytplayer = () => {
  const [width23, setWidth2] = React.useState(0)
  React.useEffect(() => {
    setWidth2(window.innerWidth)
    console.log(window.innerWidth)
  })

  return (
    <section
      className="wrapper-full tab-container effectTab-header"
      id="style_9"
    >
      <h1 className=" gradientfor21centuary fontText my-4 text-2xl text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-4xl ">
        ~State of the Art Infrastructure~
      </h1>
      <p
        className="text-center"
        style={{
          fontFamily: 'inherit',
          color: 'GrayText',
          marginBottom: '20px'
        }}
      >
        Commited to Excellence 🔥
      </p>
      <div
        style={{
          width: width23 < 800 ? '90%' : '40%',
          height: width23 < 800 ? '90%' : '40%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <div className="container123">
          <iframe
            src="https://www.youtube.com/embed/exlI09hfxcE?controls=0&amp;start=24&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="responsive-iframe"
            style={{
              backgroundColor: 'white',
              borderRadius: '5px',
              padding: '6px'
            }}
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Ytplayer
