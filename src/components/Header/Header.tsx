import ThemeToggle from "../ThemeToggle";

const baseStyles = {
  background:
    "bg-userHeaderBgDarkMobile -z-10 absolute left-0 top-0 h-80 w-full bg-cover bg-center bg-no-repeat md:bg-userHeaderBgDarkDesktop",
};

function Header() {
  return (
    <section>
      <div className={baseStyles.background} />
      <ThemeToggle />
    </section>
  );
}

export default Header;
