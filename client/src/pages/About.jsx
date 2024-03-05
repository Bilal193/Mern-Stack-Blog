import CallToAction from '../components/CallToAction'

export default function About() {
  return (
    <div className='min-h-screen flex flex-col gap-6 items-center justify-center'>
      <div className="max-w-4xl mx-auto p-3 text-center">
        <div>
          <h1 className='text-3xl font-semibold text-center my-7'>About Devify Labs</h1>
          <div className="text-lg text-gray-500 flex flex-col gap-6">
            <p>
              Discover the digital difference with DevifyLabs! Providing superior IT solutions including website design, development, digital marketing, and more.
            </p>
            <p>
              As your IT agency, we are not just service providers, we are partners in your growth. Leveraging our technical expertise and business acumen, we create digital solutions that propel your business forward, catalyzing success and expansion in your journey.
            </p>
            <p>
            Boosting Shopify Website Performance: Proven Strategies to Reduce Load Time.
            Discuss the importance of having a fast-loading Shopify website and its impact on user experience and conversion rates.
            When talking about enhancing a websites performance, one key metric stands out above the rest, and thats website load time. So, what exactly does this mean? Simply put, website load time is the amount of time it takes for a web page to load fully when a user clicks on a link or types in a URL.
            </p>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mb-5 mx-auto w-full'>
            <CallToAction />
        </div>
    </div>
  )
}
