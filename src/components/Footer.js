import footerStyle from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className="footerColumn">col 1</div>
      <div className="footerColumn">col 2</div>
      <div className="footerColumn"> col 3</div>
    </footer>
  );
};

export default Footer;
