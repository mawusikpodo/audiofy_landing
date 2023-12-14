import Image from 'next/image'

import Illustration from '../images/hero.svg';

const Hero = () => {
    return ( 
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Harmony Unleashed:
        <br className="hidden lg:inline-block" />Your Ultimate Audio Sharing Adventure Begins Here!
      </h1>
      <p className="mb-8 leading-relaxed">🚀 Welcome to the future of auditory bliss! 🎶 Dive into a world where music, stories, and sounds come alive like never before. 🌟 Introducing Audiofy, the game-changing audio sharing app that set to revolutionize the way you experience and share your favorite sounds.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Download</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Use Online</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src={Illustration} width={500}
      height={500}/>
    </div>
  </div>
</section>
     );
}
 
export default Hero;