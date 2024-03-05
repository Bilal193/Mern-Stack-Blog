import CallToAction from "../components/CallToAction";


export default function Projects() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-lg text-gray-500">
      Website Development:
      <br />
      DevifyLabs is an industry-leading provider of professional website development services. With a team of seasoned developers and technical experts, we specialize in creating functional, engaging, and user-friendly websites that effectively convey your business message
      </p>
      <div className='max-w-4xl mb-5 mx-auto w-full'>
            <CallToAction />
        </div>
    </div>
  )
}
