import React from "react";
import logo from "./lauken.svg"; // Asegúrate de que la ruta es correcta

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";

function Spect({
  title,
  descripcion,
  box1,
  box2,
  box3,
  box4,
  title1,
  text1,
  image1,
  title2,
  text2,
  image2,
  title3,
  text3,
  image3,
  title4,
  text4,
  image4,
}) {
  return (
    <section
      id="especificaciones"
      className="mx-auto max-w-7xl py-0 sm:px-6 sm:py-4 lg:px-8  "
    >
      <div  className="overflow-hidden  bg-container rounded-none  p-5 sm:rounded-xl">
        <div
          aria-labelledby="features-heading"
         className="relative h-full "
        >
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl "
              >
                {title}
              </h1>
              <p className="mt-4 text-gray-500">{descripcion}</p>
            </div>

            <TabGroup className="mt-4"
            
            
            >
              <div className="-mx-4 flex overflow-x-auto sm:mx-0 bg ">
                <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                  <TabList className="-mb-px flex space-x-10">
                    <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-[#263954] hover:text-[#263954] data-[selected]:border-[#BB8D42] data-[selected]:text-[#BB8D42]">
                      {box1}
                    </Tab>
                    <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-[#263954] hover:text-[#263954] data-[selected]:border-[#BB8D42] data-[selected]:text-[#BB8D42]">
                      {box2}
                    </Tab>
                    <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-[#263954] hover:text-[#263954] data-[selected]:border-[#BB8D42] data-[selected]:text-[#BB8D42]">
                      {box3}
                    </Tab>
                    <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-[#263954] hover:text-[#263954] data-[selected]:border-[#BB8D42] data-[selected]:text-[#BB8D42]">
                      {box4}
                    </Tab>
                  </TabList>
                </div>
              </div>

              <TabPanels as={Fragment}>
                <TabPanel className="space-y-16 pt-10 lg:pt-16 ">
                  <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                    <h1 className="text-3xl font-light text-[#BB8D42] ">
                        {title1}
                      </h1>
                      <p className="mt-2 text-sm text-gray-500">{text1}</p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                        <img
                          alt="Walnut."
                          src={image1}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="space-y-16 pt-10 lg:pt-16 ">
                  <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div className="mt-6 lg:col-span-5 lg:mt-0 ">
                    <h1 className="text-3xl font-light text-[#BB8D42] ">
                        {title2}
                      </h1>
                      <p className="mt-2 text-sm text-gray-500 ">{text2}</p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                        <img
                          alt="Walnut."
                          src={image2}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="space-y-16 pt-10 lg:pt-16">
                  <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                    <h1 className="text-3xl font-light text-[#BB8D42] ">
                        {title3}
                      </h1>
                      <p className="mt-2 text-sm text-gray-500">{text3}</p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                        <img
                          alt="Walnut."
                          src={image3}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="space-y-16 pt-10 lg:pt-16">
                  <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                    <h1 className="text-3xl font-light text-[#BB8D42] ">
                        {title4}
                      </h1>
                      <p className="mt-2 text-sm text-gray-500">{text4}</p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                        <img
                          alt="Walnut."
                          src={image4}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spect;
