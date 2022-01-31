const HeroNavItem = ({text,selected}) => (  
  <a href="#" className= {`nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body ${selected ? "selected-circle" : ""}`}>
    <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
        {text}
    </span>
  </a>
)

export default HeroNavItem;