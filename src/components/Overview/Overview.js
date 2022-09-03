import React from "react";

import Statistics from "./statistic";

function Content() {
  return (
    <div className=" w-full h-[90vh] space-x-4 items-center justify-center ">
      {/* left section */}
      <div className=" items-center justify-center flex flex-col col-span-2 h-full   py-2 px-3 w-full space-y-4">
        {/* upper section */}
        <div className=" pb-1 pt-12 px-3 w-full h-full space-y-8">
          {/* title + icons */}
          <div className=" py-1 px-2 items-center justify-center w-full flex">
            <h1 className="flex items-start justify-start w-full text-2xl xl:text-4xl self-center font-bold text-black ">
              OverView
            </h1>
            <div className="flex items-end justify-end w-full space-x-4">
              <div className="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              <div className="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-[-45deg]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* center part */}
          <div className="pb-2 pt-4 px-3 items-center justify-center grid grid-cols-2 xl:grid-cols-4 w-full">
            <div className="xl:col-span-1 col-span-2 px-3 py-2 bg-gradient-to-r from-tahiti to-bubble-gum rounded-lg flex items-center w-full justify-between">
              <div className="flex flex-col items-center justify-center w-full px-4 py-2">
                <h1 className="text-start items-start justify-start flex w-full font-bold text-black text-xl text-silver">
                  Current Balance
                </h1>
                <div className="flex w-full items-center justify-between space-x-4">
                  <h1 className="font-bold text-silver">R30 000</h1>
                </div>
              </div>
              <div className="px-4"></div>
            </div>

            <div className=" py-3 px-3  w-full xl:col-span-3 col-span-2 xl:flex items-center justify-between  xl:space-y-0 space-y-4 xl:space-x-4">
              <div className="xl:col-span-1 col-span-2 px-3 py-2 bg-gradient-to-r from-tahiti to-bubble-gum rounded-lg flex items-center w-full justify-between">
                <h1 className="font-medium text-silver"> Savings</h1>
                <h1 className="text-2xl font-bold text-silver"> R20 000 </h1>
              </div>
              <div className="xl:col-span-1 col-span-2 px-3 py-2 bg-gradient-to-r from-tahiti to-bubble-gum rounded-lg flex items-center w-full justify-between">
                <h1 className="font-medium text-silver"> Investments</h1>
                <h1 className="text-2xl font-bold text-silver"> R20 000 </h1>
              </div>
            </div>
          </div>
          <div className="px-3 w-full items-center justify-center flex">
            <div className="py-4 px-6 w-full items-center justify-between xl:space-y-0 space-y-6 lg:flex bg-gradient-to-r from-tahiti to-bubble-gum rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 fill-purple-500 stroke-gray-900 lg:inline hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>

              <div className="lg:flex justify-between items-center lg:space-x-12">
                <div className="space-y-2">
                  <h1 className="font-medium text-gray-500 text-lg">Needs</h1>
                  <h1 className="font-bold text-2xl"> R10 000 </h1>
                </div>
                <div className="space-y-2">
                  <h1 className="font-medium text-gray-500 text-lg">Wants</h1>
                  <h1 className="font-bold text-2xl"> R3000 </h1>
                </div>
                <div className="space-y-2">
                  <h1 className="font-medium text-gray-500 text-lg">
                    Investment
                  </h1>
                  <h1 className="font-bold text-2xl"> R2000</h1>
                </div>
              </div>

              <div className="lg:w-1/2 w-full items-start justify-start lg:items-end lg:justify-end flex lg:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 self-center md:inline hidden "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <button className="bg-black smooth hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900 text-gray-100 py-3 px-8 border border-transparent rounded-md">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* lower section */}
        <div className=" py-1 px-3 w-full h-full">
          <Statistics />
        </div>
      </div>
      {/* right section  */}
      <div className=" col-span-1 h-full xl:flex xl:flex-col hidden space-y-6 py-2 px-6 w-full"></div>
    </div>
  );
}

export default Content;
