import navStyle from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.navbarlogo}>Stephen</div>
      <div>
        <ul className={navStyle.navbarMenu}>
          <li className={navStyle.navbarMenuItem}>Home</li>
          <li className={navStyle.navbarMenuItem}>About</li>
          <li className={navStyle.navbarMenuItem}>Portfolio</li>
        </ul>
      </div>
      <button className={navStyle.navbarCta}>Let's talk</button>
    </nav>
  );
};

export default Navbar;
