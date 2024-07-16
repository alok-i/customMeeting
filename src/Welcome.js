import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <div className="relative h-full min-h-screen bg-black">
      <div className="fixed z-50 w-full px-80 top-10">
        <div className="grid grid-cols-4 gap-10 p-6 bg-[#1A1A1A] rounded-full items-center">
          <div>
            <img src="assets/img/logo/company_logo.svg" alt="logo" />
          </div>
          <div className="flex col-span-2 text-xl text-white capitalize justify-evenly">
            <NavLink to="/">home</NavLink>
            <NavLink to="/features">features</NavLink>
            <NavLink to="/blog">blog</NavLink>
            <NavLink to="/contacts">contacts</NavLink>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-4">
              <i className="text-4xl text-white fa fa-user-circle-o"></i>
            </div>
            <div>
              <NavLink to="/login" className="px-4">
                <button className="px-4 py-2 font-bold capitalize rounded-full bg-button">
                  login
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen px-48 pb-60 pt-60">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-extrabold text-white">
              Unlock NextGen meetings
            </h1>
            <h1 className="mt-1.5 text-5xl font-extrabold text-white capitalize">
              in Just 3 clicks:
            </h1>
            <h1 className="mt-1.5 text-5xl font-extrabold text-violet-500">
              Welcome to XTRA vision
            </h1>
            <div className="my-4">
              <NavLink to="/register">
                <button className="px-10 py-3 text-lg font-semibold capitalize rounded-md bg-button">
                  register
                </button>
              </NavLink>
            </div>
          </div>
          <div className="-mt-28">
            <img src="assets/img/icons/puzzle.svg" alt="puzzle" />
          </div>
        </div>
        <div className="mt-24">
          <h1 className="text-6xl font-extrabold text-center text-white capitalize">
            Here how's you get started
          </h1>
          <div className="py-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#49071f] via-black to-black">
            <div>
              <img src="assets/img/icons/step-1.svg" alt="step-1" />
              <div className="ml-12 text-center w-60">
                <h1 className="text-lg text-white capitalize">register</h1>
                <p className="mt-1 text-sm text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="grid justify-end">
              <img src="assets/img/icons/step-2.svg" alt="step-2" />
              <div className="text-center ml-14 w-60">
                <h1 className="text-lg text-white capitalize">
                  create profile
                </h1>
                <p className="mt-1 text-sm text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div>
              <img src="assets/img/icons/step-3.svg" alt="step-3" />
              <div className="ml-12 text-center w-60">
                <h1 className="text-lg text-white capitalize">
                  search company
                </h1>
                <p className="mt-1 text-sm text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="grid justify-end">
              <img src="assets/img/icons/step-4.svg" alt="step-4" />
              <div className="text-center ml-14 w-60">
                <h1 className="text-lg text-white capitalize">
                  contact company
                </h1>
                <p className="mt-1 text-sm text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h1 className="text-6xl font-extrabold text-center text-white">
            Amazing Features
          </h1>
          <div className="p-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#49071f] via-black to-black">
            <div className="flex items-center">
              <div>
                <img
                  src="assets/img/icons/feature-1.svg"
                  alt="feature-1"
                  className="w-[70rem]"
                />
                <h1 className="text-xl font-bold text-center text-white">
                  Verified Data and Trust
                </h1>
              </div>
              <div className="w-full border-2 border-white border-dashed"></div>
              <div>
                <img
                  src="assets/img/icons/feature-2.svg"
                  alt="feature-2"
                  className="w-[70rem]"
                />
                <h1 className="text-xl font-bold text-center text-white">
                  Algorithmic Company Matching
                </h1>
              </div>
              <div className="w-full border-2 border-white border-dashed"></div>
              <div>
                <img
                  src="assets/img/icons/feature-3.svg"
                  alt="feature-3"
                  className="w-[70rem]"
                />
                <h1 className="text-xl font-bold text-center text-white">
                  Encrypted Chat and Collaboration
                </h1>
              </div>
            </div>
            <div className="flex mt-6 justify-evenly">
              <div>
                <img src="assets/img/icons/feature-4.svg" alt="feature-4" />
                <h1 className="text-xl font-bold text-center text-white">
                  Decentralized Video Calling
                </h1>
              </div>
              <div>
                <img src="assets/img/icons/feature-5.svg" alt="feature-5" />
                <h1 className="text-xl font-bold text-center text-white">
                  Social Media Integration
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 mt-24">
          <div>
            <img src="assets/img/icons/boy.svg" alt="boy" className="w-4/5" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
              <div className="relative text-xl leading-loose tracking-widest text-white break-words">
                <span>
                  Unlock
                  <div className="absolute z-50 text-6xl text-violet-500 -top-2 -left-8">
                    ❝
                  </div>
                </span>
                <span>
                  {" "}
                  the potential of XTRA's meetings solution and experience a
                  substantial{" "}
                  <span className="px-3 border rounded-full text-violet-500 border-violet-500 bg-violet-100">
                    boost
                  </span>{" "}
                  in quality, coupled with an impressive{" "}
                  <span className="px-3 border rounded-full text-violet-500 border-violet-500 bg-violet-100">
                    increase
                  </span>{" "}
                  in effortless and instant
                </span>
                <span className="relative">
                  meetings and confrence.
                  <div className="absolute z-50 text-6xl text-violet-500 -bottom-8 -right-8">
                    ❞
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h1 className="text-6xl font-extrabold text-center text-white">
            FAQ
          </h1>
          <div className="py-10 px-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#49071f] via-black to-black">
            <div className="flex items-center justify-between cursor-pointer p-8 bg-[#ffffff21] border rounded-3xl border-[#ffffff1f] my-4">
              <div className="text-2xl font-bold text-white">
                How can I Register with Xtra Vision?
              </div>
              <div>
                <img src="assets/img/icons/down-arrow.svg" alt="down-arrow" />
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer p-8 bg-[#ffffff21] border rounded-3xl border-[#ffffff1f] my-4">
              <div className="text-2xl font-bold text-white">
                How can I Build my Profile?
              </div>
              <div>
                <img src="assets/img/icons/down-arrow.svg" alt="down-arrow" />
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer p-8 bg-[#ffffff21] border rounded-3xl border-[#ffffff1f] my-4">
              <div className="text-2xl font-bold text-white">
                What can I Contact With another Companies?
              </div>
              <div>
                <img src="assets/img/icons/down-arrow.svg" alt="down-arrow" />
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer p-8 bg-[#ffffff21] border rounded-3xl border-[#ffffff1f] my-4">
              <div className="text-2xl font-bold text-white">
                Do we Charge money for Collaboration?
              </div>
              <div>
                <img src="assets/img/icons/down-arrow.svg" alt="down-arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[35rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#49071f] via-black to-black relative mt-24 text-center">
          <h1 className="text-6xl font-extrabold text-white">
            Coming Soon <span className="text-[#6953D3]">X</span>
            <span className="text-[#6953D3]">T</span>RA
          </h1>
          <p className="mt-4 text-2xl tracking-wider text-white">
            Very Soon...
          </p>
          <div className="flex justify-center">
            <div>
              <img src="assets/img/icons/twitter.svg" alt="twitter" />
            </div>
            <div>
              <img src="assets/img/icons/telegram.svg" alt="telegram" />
            </div>
            <div>
              <img src="assets/img/icons/linkedin.svg" alt="linkedin" />
            </div>
          </div>
          <div className="absolute z-50 top-12">
            <img src="assets/img/icons/icon.svg" alt="icon" />
          </div>
        </div>
        {/* <div className="mt-24 text-center">
                    <div className="grid justify-center">
                        <img src="assets/img/logo/company_logo.svg" alt="logo" className="w-96"/>
                    </div>
                    <div className="flex justify-center py-5 text-xl text-white capitalize">
                        <NavLink to="/register" className="px-4">
                            home
                        </NavLink>
                        <NavLink to="/features" className="px-4">
                            features
                        </NavLink>
                        <NavLink to="/collaboration" className="px-4">
                            collaboration
                        </NavLink>
                        <NavLink to="/blog" className="px-4">
                            blog
                        </NavLink>
                        <NavLink to="/contacts" className="px-4">
                            contacts
                        </NavLink>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
export default Welcome;
