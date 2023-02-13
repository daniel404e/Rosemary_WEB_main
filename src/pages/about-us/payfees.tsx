import Heading from '@/components/Heading'
import React, { useState } from 'react'
import Image from 'next/image'

const Payfees = () => {
  const [count, setCount] = useState('')

  const termfeeurl =
    'https://webfront.payu.in/webfront/#/payment/webfrontpage/rosemary-school-of-excellence/single/254'
  const otherfeeurl =
    'https://webfront.payu.in/webfront/#/payment/webfrontpage/rozsa-mariah-educational-society/single/255'

  const [width22, setWidth] = React.useState(0)
  React.useEffect(() => {
    setWidth(window.innerWidth)
  })

  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <Heading first={'Pay'} second={'Fees'} />
        {/* create a sub heading */}

        <div className="ml-4 mt-2 text-center " style={{ marginTop: '40px' }}>
          <iframe
            frameBorder="0"
            // scrolling="no"

            src={count}
            name="myFrame1"
            id="myIframe1"
            className="center"
            style={{
              width: '100%',
              height: '650px',
              display:
                count === otherfeeurl || count === termfeeurl
                  ? 'inline-block'
                  : 'none'
            }}
          ></iframe>

          <div className="center ">
            <Image
              className="floating"
              style={{
                width: width22 > 1000 ? '50%' : '100%',
                margin: 'auto',
                paddingLeft: '50px',
                display: count === '' ? 'block' : 'none'
              }}
              height={400}
              width={650}
              src={'/payfees/floatingphonepng.png'}
              alt="logo 1"
            />
          </div>
          <br></br>

          <button
            className={
              count === termfeeurl
                ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full '
            }
            style={{
              display: count === otherfeeurl ? 'none' : 'inline-block'
            }}
            onClick={() => {
              setCount(termfeeurl)
              document.getElementById('myIframe1').src =
                document.getElementById('myIframe1').src
            }}
          >
            Pay Term Fees
          </button>
          {/* <span style={{ marginLeft: '30px', marginRight: '30px' }}> </span> */}
          <button
            className={
              count === otherfeeurl
                ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full '
            }
            style={{
              display: count === termfeeurl ? 'none' : 'inline-block'
            }}
            onClick={() => {
              setCount(otherfeeurl)
              document.getElementById('myIframe1').src =
                document.getElementById('myIframe1').src
            }}
          >
            Pay Other Fees
          </button>
          {/* <span style={{ marginLeft: '30px', marginRight: '30px' }}> </span>
          <span
            style={{
              marginLeft: '30px',
              marginRight: '30px',
              display: count === termfeeurl ? 'none' : 'inline-block'
            }}
          >
            {' '}
          </span> */}
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            style={{
              display:
                count === termfeeurl || count === otherfeeurl
                  ? 'inline-block'
                  : 'none'
            }}
            onClick={() => {
              setCount('')
              //location.reload()
            }}
          >
            Back
          </button>
        </div>
      </div>
      <div className="text-center leading-relaxed text-[#888] mt-8 text-[1.2rem] ">
        <span className="text-[#463AA1] font-medium">
          Download Terms And Conditions
        </span>
        <br></br>
        <a href="/Download-feesterms/Terms-And-Conditions.pdf" download>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>

            <span>Download</span>
          </button>
        </a>
      </div>
    </>
  )
}

export default Payfees
