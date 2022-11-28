import Heading from '@/components/Heading'
import React from 'react'

const Payfees = () => {
  const data = [
    {
      title: 'ONLINE PAYMENT GATEWAY',
      description:
        'This is an important document and it explains the terms and conditions you are agreeing to when you use the Payment gateway.Before using this service please read these terms and conditions carefully. You may then proceed to the gateway by check marking I agree the above Terms & Conditions and Privacy Policy'
    },
    {
      title: 'Terms of Use',
      description:
        'Headed by a teacher and an assistant teacher, keeping in view the child centric model, the School has brightly-lit and well ventilated classrooms. Beyond the norms spacious 1000 Sq Feet air-conditioned (PK and LK) Classrooms and 500Sqft UK classrooms are easy enough to make 40 students at a time. The school furniture is specially designed to facilitate good posture, give comfort and aid optimum learning.'
    },
    {
      title: 'Transaction Fees clause',
      description:
        'Transaction fees charged by bank time to time would be borne by cardholder for any payments.'
    },
    {
      title: 'Cancellation & refund Policy',
      description:
        'Admission /Application fees once paid which are non-refundable for any reason.'
    },
    {
      title: 'Privacy Policy',
      description:
        'The pre-primary wing has a well-equipped lab room with educational equipment for motorskill development, language, Math and cognitive development. These rooms are in tandem with classroom teaching and hence reinforces the concept.'
    },
    {
      title: 'PRIVACY AND DATA PROTECTION',
      description:
        'We RMSE recognise that your personal privacy is a serious and important issue and we support the principle of protecting privacy on the internet within the context of current Indian law.'
    },
    {
      title: '',
      description:
        'Contact us with address customer care contact to be displayed.'
    }
  ]
  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <Heading first={'Pay'} second={'Fees'} />
        {/* create a sub heading */}

        <div className="ml-4 mt-2">
          {data.map((value, index) => {
            return (
              <div className="sm:ml-2" key={index}>
                <h1 className=" mb-4 mt-4 text-primary text-lg font-medium leading-relaxed tracking-tight">
                  {value.title}
                </h1>
                <h5 key={index} className="ml-2 md:w-3/4 ">
                  {value.description}
                </h5>
              </div>
            )
          })}
        </div>
      </div>
      <p className="text-center leading-relaxed text-[#888] mt-8 text-[1.2rem] ">
        <span className="text-[#463AA1] font-medium">
          CLICK TO VIEW THE FEE DETAILS.PDF
        </span>
      </p>
    </>
  )
}

export default Payfees
