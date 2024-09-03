import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Fragment } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'



const features = [


  {
    name: 'Durable',
    description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
  },
  {
    name: 'Refillable',
    description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
  },
  {
    name: 'Thoughtfully designed',
    description:
      'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
  },
  { name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
]



const tabs = [


  {
    name: 'Design',
    features: [
      {
        name: 'Adaptive and modular',
        description:
          'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Material',
    features: [
      {
        name: 'Natural wood options',
        description:
          'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
      },
    ],
  },
  {
    name: 'Considerations',
    features: [
      {
        name: 'Helpful around the home',
        description:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
      },
    ],
  },
  {
    name: 'Included',
    features: [
      {
        name: "Everything you'll need",
        description:
          'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
      },
    ],
  },
]





function ProyectoTres() {
  return (
    
    <div className="bg-white">
      <Header />
      <div className='mx-12'>
      <section aria-labelledby="features-heading" className="relative">
      <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
        <img
          alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
        <div className="lg:col-start-2">
          <h2 id="features-heading" className="font-medium text-gray-500">
            Leatherbound Daily Journal
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">All in the Details</p>
          <p className="mt-4 text-gray-500">
            We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
            use.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
      </div>
   





    <div>
    <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500">
              The Organize modular system offers endless options for arranging your favorite and most used items. Keep
              everything at reach and in its place, while dressing up your workspace.
            </p>
          </div>

          <TabGroup className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <TabList className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-indigo-500 data-[selected]:text-indigo-600"
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>

            <TabPanels as={Fragment}>
              {tabs.map((tab) => (
                <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                          <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </div>
     
    




    
    <div className='m-auto text-center '>
    <Link to="/"  aria-labelledby="features-heading" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ">
        Volver a la página principal
      </Link>
    </div>
    



    
     
    </div>
  );
}


export default ProyectoTres;
