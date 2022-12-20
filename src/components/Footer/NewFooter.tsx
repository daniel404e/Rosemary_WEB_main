import Link from 'next/link'
export const NewFooter = () => {
  return (
    <div className="relative mt-16 bg-secondary">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-primary"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase">
                About Us
              </span>
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm  text-white">
                Established in 1981 Rosemary Institutions mark excellenceinall
                the realms of education. The Sprawling campus located in NGO New
                Colony, Perumalpuram is Uniquely placed intheheart of the city
                yet offers a serene environment for schooling. We are founded on
                the core competencies that are pertinent today and will be
                relevant for years to come. The Rosemary Education Network
                strives to create modern citizens who are equipped to take on
                challenges and primed to make global changes
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-primary">
                Admissions
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/admission/application"
                    className="transition-colors duration-300 text-white hover:text-sky-900"
                  >
                    Application Form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admission/enquiry"
                    className="transition-colors duration-300 text-white hover:text-sky-900"
                  >
                    Enquiry Form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admission/schedule"
                    className="transition-colors duration-300 text-white hover:text-sky-900"
                  >
                    Shedule a Visit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-primary">
                Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/about-us/philosophy"
                    className="transition-colors duration-300 text-white hover:text-sky-900"
                  >
                    Our Philosophy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-sky-900"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/vision"
                    className="transition-colors duration-300 text-white hover:text-sky-900"
                  >
                    Vision and Mission
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold tracking-wide text-primary">
                Contact Us
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <p className="transition-colors duration-300 text-sm text-white hover:text-sky-900">
                    SR. No. 808/2, Issac Nagar, NGO New Colony, Perumalpuram
                    post, Tirunelveli - 627007, Tamilnadu.
                  </p>
                </li>
                <li className="text-primary">
                  Email:
                  <p className="transition-colors duration-300 text-white hover:text-sky-900">
                    rmseoffice@gmail.com
                    <br />
                    rosemaryschoolofexcellence@gmail.com
                  </p>
                </li>
                <li className="text-primary">
                  Phone:
                  <p className="transition-colors duration-300 text-white hover:text-sky-900">
                    +92 994 3026313,
                    <br />
                    +92 994 3026311,
                    <br />
                    0462 2901215
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2022 Rosemary School Of Excellence. All rights reserved.
          </p>
          {/* use Nextjs link tag for external link 
          
           */}
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <p className="italic text-white">Created by Anish Ali</p>
            <Link
              href="https://www.github.com/anishali2"
              passHref={true}
              className="transition-colors duration-300 text-white hover:text-sky-900"
            >
              {/*  create a svg for github icon */}
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* create a github icon  */}
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.82 1.11.82 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.79 24 17.293 24 12c0-6.627-5.373-12-12-12" />
              </svg>
            </Link>
            {/* <Link
              href="/"
              className="transition-colors duration-300 text-white hover:text-sky-900"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="transition-colors duration-300 text-white hover:text-sky-900"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
