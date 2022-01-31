import Image from 'next/image'
const Header = () => 
    (<header className='py-6'>
    <div className="container flex justify-between items-center mx-auto px-8 md:px-14 w-full">
      {/* <div className="text-lg font-bold">Jonathan.doe</div> */}
      <Image src="/logo.png" alt="logo" width={120} height={60}></Image>
      <div className="hidden md:flex space-x-12 items-center">
        <a href="#" className='text-selected-text'>Home</a>
        <a href="#works">My work</a>
        <a href="#clients">Clients</a>
        <a href="#hire" className='px-6 py-2 bg-theme'>Hire me</a>
      </div>
      <div className="md:hidden">
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
      </div>
    </div>
  </header>)

export default Header
