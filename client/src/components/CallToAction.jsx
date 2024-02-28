import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-5 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>Web Development Services</h2>
            <p className='text-gray-500 my-3'>Genuine care for your web development project</p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://devifylabs.com/" target='_blank' rel="noopener noreferrer">
                    Devify Labs
                </a>
            </Button>
        </div>
        <div className='p-3 flex-1'>
            <img src="https://www.scnsoft.com/application-development/web-dev-services/cover-pic-web-development-new.svg" alt="Devify Labs" />
        </div>
    </div>
  )
}
