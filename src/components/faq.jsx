import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'


//TODO: Add Form Specific Questions
const faqs = [
  {
    question: "What does home insurance cover?",
    answer:
      "Home insurance typically covers damage or loss to your home and personal property caused by covered perils such as fire, theft, and natural disasters like hurricanes or earthquakes. It may also provide liability coverage in case someone is injured on your property or you are sued for damaging someone else's property.",
  },
  {
    question: "How much home insurance coverage do I need?",
    answer:
      "The amount of home insurance coverage you need depends on several factors, including the value of your home and personal property, the cost to rebuild your home, and the amount of liability coverage you require. It's a good idea to consult with an insurance agent or use an online calculator to determine the appropriate level of coverage for your specific needs.",
  },
  {
    question: "What is the difference between actual cash value and replacement cost coverage?",
    answer:
      "Actual cash value coverage pays out the current market value of your damaged or stolen property, taking into account depreciation. Replacement cost coverage, on the other hand, pays out the cost to replace your damaged or stolen property with a new item of similar quality. While replacement cost coverage typically has a higher premium, it can provide more comprehensive protection for your belongings.",
  },
  
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-dark-purple">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            FAQ's For You.
          </h2>
          <dl className="mt-6 space-y-6 divide-y bg-white rounded-lg p-5 divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

