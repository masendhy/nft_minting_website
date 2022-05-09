export default function Mint() {
  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src="/images/blur.jpg"
          className="animate-pulse absolute inset-auto block w-full min-h-screen object-cover"
        />
        <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
          <div className="z-1 md:max-w-3xl w-full bg-gray-700/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center ">
            <h1 className="font-righteous font-bold text-3xl text-brand-pink md:text-4xl ">
              Pre Sale
            </h1>
            <h3 className="font-righteous text-sm text-brand-green tracking-widest break-all ...">
              0x7399E31089C06F7b4111BF166E578Ff90bbdfa26
            </h3>

            <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
              <div className="relative w-full">
                <div className="font-righteous z-10 absolute left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-brand-background border border-brand-pink rounded-md flex items-center justify-center text-brand-pink mt-2">
                  <p>
                    <span> 0 </span> / 2222
                  </p>
                </div>
                <img
                  src="/images/16.png"
                  className="object-cover w-full sm:h-[280px] items-center rounded-md md:w-[250px]"
                />
              </div>
              <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                <div className=" flex items-center justify-between w-full">
                  <button className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-light hover:shadow-lg bg-gradient-to-br from-brand-pink to-brand-red  font-bold rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                  <p className="flex items-center justify-center flex-1 grow text-center font-righteous font-bold text-brand-pink text-3xl">
                    1
                  </p>
                  <button className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-light hover:shadow-lg bg-gradient-to-br from-brand-pink to-brand-red  font-bold rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                </div>
                <p className=" font-righteous text-sm text-brand-light tracking-widest mt-3">
                  Max Mint Amount : 5
                </p>
                <div className="font-righteous border-t border-b py-4 mt-16 w-full">
                  <div className="w-full text-l flex items-center justify-between text-brand-green ">
                    <p>Total</p>
                    <div className="flex items-center space-x-3">
                      <p>0.01</p>
                      <span className="text-brand-yellow">+ GAS</span>
                    </div>
                  </div>
                </div>

                {/* Mint Button */}

                <button className="font-righteous mt-12 w-full text-brand-light rounded-md bg-gradient-to-br from-brand-pink to-brand-red shadow-lg hover:shadow-brand-pink mx-4 tracking-widest">
                  Connect Wallet
                </button>
              </div>
            </div>
            {/* status */}
            <div className="border border-brand-red rounded-md text-start h-full px-4 py-4 w-md mx-auto mt-9 md:mt-5">
              <p className="flex flex-col space-y-2 text-brand-red text-sm  md:text-base break-words ...">
                Oops something wrong, please try again
              </p>
            </div>
            {/* Contract Address */}

            <div className="border-t border-gray-300 flex flex-col items-center mt-10 py-2 w-full ">
              <h3 className="font-righteous text-brand-pink mt-2 tet-2x">
                Contract Address
              </h3>
              <a
                href="https://rinkeby.etherscan.io/address/0x7399e31089c06f7b4111bf166e578ff90bbdfa26"
                target="blank"
                className="text-brand-light mt-3"
              >
                <span className="break-all ...">
                  1234567890123456798998123456789012345679899812345678901234567989981234567890123456798998
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
