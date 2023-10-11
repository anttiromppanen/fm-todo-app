import ThemeToggle from "../ThemeToggle";

const baseStyles = {
  background: `
    bg-userHeaderBgLightMobile -z-10 absolute left-0 top-0 h-52 w-full 
    bg-cover bg-left bg-no-repeat md:bg-userHeaderBgLightDesktop
    dark:bg-userHeaderBgDarkMobile dark:md:bg-userHeaderBgDarkDesktop
    md:h-[300px]`,
};

function Header() {
  return (
    <section>
      <div className={baseStyles.background} />
      <div className="mt-12 flex w-full justify-between md:mt-20">
        <h1 className="text-3xl font-bold tracking-[0.3em] text-white md:text-4xl">
          TODO
        </h1>
        <ThemeToggle />
      </div>
    </section>
  );
}

export default Header;
