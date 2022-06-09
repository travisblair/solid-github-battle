import { NavLink } from "solid-app-router";

const Nav = () => {
  return (
    <nav>
      <ul>
        <il>
          <NavLink href="/" activeClass="active">Home</NavLink>
        </il>
        <il>
          <NavLink href="/battle" activeClass="active">Battle</NavLink>
        </il>
        <il>
          <NavLink href="/popular" activeClass="active">Popular</NavLink>
        </il>
        <il>
          <NavLink href="/search" activeClass="active">Search</NavLink>
        </il>
      </ul>
    </nav>
  )
}

export default Nav;