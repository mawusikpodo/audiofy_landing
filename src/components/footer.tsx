import Image from 'next/image'

import Illustration from '../images/audiofy.svg';

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
    return ( 
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <Image 
      src={Illustration}
       width={30}
      height={30}
      alt="Audiofy"/>
      {/* <span className="ml-3 text-xl">Audiofy</span> */}
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {year} Audiofy —
      <a href="https://twitter.com/mawusikpodo" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@mawusikpodo</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
      
      <a className="ml-3 text-gray-500" href="https://github.com/">
  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0a8 8 0 00-2.534 15.598c.4.074.546-.174.546-.386 0-.19-.007-.692-.01-1.36-2.225.482-2.695-1.072-2.695-1.072-.363-.92-.885-1.164-.885-1.164-.722-.494.055-.484.055-.484.8.056 1.22.822 1.22.822.712 1.218 1.87.867 2.32.663.072-.516.28-.868.509-1.068-1.784-.203-3.644-.892-3.644-3.964 0-.876.312-1.593.822-2.155-.083-.202-.36-1.018.078-2.121 0 0 .67-.215 2.2.822a7.69 7.69 0 012.002-.268c.68 0 1.365.092 2.002.268 1.527-1.037 2.197-.822 2.197-.822.44 1.103.162 1.92.08 2.121.514.562.82 1.28.82 2.155 0 3.078-1.865 3.758-3.652 3.958.287.248.54.737.54 1.48 0 1.068-.01 1.926-.01 2.192 0 .214.145.464.55.385A8.001 8.001 0 008 0z"></path>
  </svg>
</a>

    </span>
  </div>
</footer>
     );
}
 
export default Footer;