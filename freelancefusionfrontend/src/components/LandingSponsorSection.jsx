import React from 'react'

function LandingSponsorSection() {
  return (
      <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
          <h2 className="text-4xl font-bold text-center">
              Powering the Future of Work
          </h2>
          <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
              <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
                  Trusted by leading companies and 50,000+ top-tier freelancers worldwide
              </p>
          </p>
          <div className="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <a target="_blank" href="">
                  <img
                      alt=""
                      className="h-20  mx-auto"
                      src="https://www.svgrepo.com/show/442910/brand-apple.svg"
                  />
              </a>
              <a target="_blank" href="">
                  <img
                      alt=""
                      className="h-20  mx-auto"
                      src="https://www.svgrepo.com/show/443329/brand-pixar.svg"
                  />
              </a>
              <a target="_blank" href="">
                  <img
                      alt=""
                      className="h-20  mx-auto"
                      src="https://www.svgrepo.com/show/443079/brand-geforce.svg"
                  />
              </a>
              <a target="_blank" href="">
                  <img
                      alt=""
                      className="h-20  mx-auto"
                      src="https://www.svgrepo.com/show/443042/brand-ethereum.svg"
                  />
              </a>
              <a target="_blank" href="">
                  <img
                      alt=""
                      className="h-20  mx-auto"
                      src="https://www.svgrepo.com/show/443206/brand-line.svg"
                  />
              </a>
              <a target="_blank" href="">
                  <img
                      alt=""
                      className="h-20  mx-auto"
                      src="https://www.svgrepo.com/show/519278/slack.svg"
                  />
              </a>
          </div>
      </div>

  )
}

export default LandingSponsorSection