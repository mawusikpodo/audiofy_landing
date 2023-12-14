import Image from 'next/image'

import Illustration from '../images/feature1.svg';

const Features = () => {
    return ( 
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Seamless Sharing:</h2>
            <p className="leading-relaxed text-base">Share your favorite tunes, podcasts, and audio creations effortlessly with friends and followers. With just a tap, spread the joy of music and discover the beats that resonate with your tribe.</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Personalized Recommendations:</h2>
            <p className="leading-relaxed text-base">Let our advanced algorithms tailor recommendations based on your preferences. Whether you're a die-hard music aficionado or a casual podcast listener, [Your App Name] ensures that your feed is always filled with content you'll love.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Immersive Playlists:</h2>
            <p className="leading-relaxed text-base">Craft the perfect soundscapes for any occasion. Our intuitive playlist feature lets you curate playlists that match your mood, whether it's for a workout, a road trip, or a cozy night in. Elevate every moment with the right tunes!</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Discover New Horizons:</h2>
            <p className="leading-relaxed text-base">Explore a vast universe of sounds with our expertly curated content and discover hidden gems you never knew existed. Unearth emerging artists, uncover unique podcasts, and broaden your auditory horizons.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     );
}
 
export default Features;