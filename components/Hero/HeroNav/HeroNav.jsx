import NavItem from './HeroNavItem'
const HeroNav = () => ( 
  <nav className="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
    <div className="absolute hover:left-50 transform -transtale-x-1/2 space-y-6 mt-36">
      <NavItem text="Home" selected/>
      <NavItem text="Work"/>
      <NavItem text="Clients"/>
      <NavItem text="Hire"/>
    </div>
  </nav>
)

export default HeroNav;