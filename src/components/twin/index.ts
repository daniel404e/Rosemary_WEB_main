import tw from 'twin.macro'

export const Text = tw.div`w-1/2   `
export const HeaderText = tw.div`w-1/2 text-gray-200 text-2xl font-bold`
export const SubHeaderText = tw.div`w-1/2 text-black  `
export const LinkText = tw.div`w-1/2 text-primary `

export const FlexColumn = tw.div`flex flex-col`
export const FlexColCenter = tw.div`flex flex-col justify-center items-center `
export const FlexCenter = tw.div`flex justify-center items-center `

export const GrayText = tw.p`leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[12px]  md:text-base lg:text-[1.2rem]`
export const BlackText = tw.span`leading-relaxed text-justify w-2/3 text-black text-[12px]  md:text-base lg:text-[1.2rem]`
export const headingBook = tw.h1`text-3xl flex  text-primary font-semibold leading-relaxed`
export const InputSet = tw.div`w-full px-3 mb-6  md:mb-0`
export const InputLabel = tw.p`block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase`
export const SubmitButton = tw.button`bg-secondarylight w-[94%] ml-3 mt-3  border-2  py-2 rounded-md border-gray-400 px-6 `
// create a new component for Space between two elements
export const Space = tw.div`h-10`
export const BlueText = tw(GrayText)`text-primary`
