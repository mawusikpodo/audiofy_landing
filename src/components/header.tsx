import Image from 'next/image'

import Illustration from '../images/audiofy.svg';

const Header = () => {
    return ( 
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <Image 
      src={Illustration}
       width={40}
      height={40}
      alt="Audiofy"/>
      <span className="ml-3 text-xl">AudioFy</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {/* <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Features</a> */}
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <a href="https://github.com/mawusikpodo/Audiofy.git">
  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0a8 8 0 00-2.534 15.598c.4.074.546-.174.546-.386 0-.19-.007-.692-.01-1.36-2.225.482-2.695-1.072-2.695-1.072-.363-.92-.885-1.164-.885-1.164-.722-.494.055-.484.055-.484.8.056 1.22.822 1.22.822.712 1.218 1.87.867 2.32.663.072-.516.28-.868.509-1.068-1.784-.203-3.644-.892-3.644-3.964 0-.876.312-1.593.822-2.155-.083-.202-.36-1.018.078-2.121 0 0 .67-.215 2.2.822a7.69 7.69 0 012.002-.268c.68 0 1.365.092 2.002.268 1.527-1.037 2.197-.822 2.197-.822.44 1.103.162 1.92.08 2.121.514.562.82 1.28.82 2.155 0 3.078-1.865 3.758-3.652 3.958.287.248.54.737.54 1.48 0 1.068-.01 1.926-.01 2.192 0 .214.145.464.55.385A8.001 8.001 0 008 0z"></path>
  </svg>
</a>
    </button>
  </div>
</header>
     );
}
 
export default Header;