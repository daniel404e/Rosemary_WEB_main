import Heading from '@/components/Heading'

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover'
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.'
  }
]

export default function Science() {
  return (
    <div className="bg-white">
      {/* <Heading first={' '} second="Science" third={'Lab'} /> */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            COMPOSITE SCIENCE LAB
          </h2>
          <p className="mt-4 text-gray-500">
            Laboratories are the most important infrastructure of an educational
            institution. RMSE has got an Composite Science Lab to enable the
            practical knowledge of students by doing Experiments. The Science
            Lab is well equipped with furniture and apparatus related to the
            curriculum of the students.
          </p>
          <p className="mt-4 text-gray-500">
            The School encourages the Students to use these laboratories to
            learn through experiments. Every year latest instruments, specimens,
            charts etc. are purchased for these laboratories.
          </p>

          <p className="mt-4 text-gray-500">
            The Composite Lab provides facilities and opportunities for students
            of classes 6 to 10 in carrying out experiments and activities in all
            science subjects. The lab is well equipped and can accommodate more
            than 40 students at a time.
          </p>

          <p className="mt-4 text-gray-500">
            The lab settings include spacious tables with plug points to perform
            experiments with electricity, lenses and prisms for light
            experiments in optics, reagent shelves, sinks and water taps, Bunsen
            burner, reagents and chemicals for experiments in chemistry,
            sufficient number of microscopes for slide preparations and
            observations, charts and models etc... Students get equal
            opportunity for developing their scientific skills and interests by
            following the principle of learning by doing.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000376-5c93f5c942/450/20200124_140527.jpg?ph=e53fdc85c3"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000377-8d70f8d711/450/20200124_150709.jpg?ph=e53fdc85c31"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000378-c69fbc69fe/450/20200124_150757.jpg?ph=e53fdc85c3"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
