import useTodoStore from "../../store/useTodoStore";

function FilterRadioButton({
  id,
  text,
  checked,
  handleClick,
}: {
  id: string;
  text: string;
  checked?: boolean;
  handleClick: () => void;
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer">
      <input
        type="radio"
        name="filters"
        id={id}
        defaultChecked={checked}
        onClick={handleClick}
        className="peer appearance-none"
      />
      <p
        className="
          p-2 font-bold text-userLightDarkGrayBlue2/60
        peer-checked:text-userBrightBlue peer-focus-visible:outline dark:text-userLightDarkGrayBlue2 md:py-0"
      >
        {text}
      </p>
    </label>
  );
}

FilterRadioButton.defaultProps = {
  checked: false,
};

function FilterButtons({ variant }: { variant: "mobile" | "desktop" }) {
  const setFilter = useTodoStore((state) => state.setFilter);
  const handleAllClick = () => setFilter("");
  const handleActiveClick = () => setFilter("active");
  const handleCompletedClick = () => setFilter("completed");

  return (
    <section
      className={`
      mt-4 flex justify-evenly rounded-md bg-userLightLightGray px-5 py-2 shadow-2xl shadow-gray-700/20
    dark:bg-userDarkDarkDesaturatedBlue md:mt-0 md:justify-between md:bg-transparent md:p-0 md:shadow-none
      ${variant === "mobile" ? "md:hidden" : "hidden md:flex"}`}
    >
      <FilterRadioButton
        id={variant === "mobile" ? "allMobile" : "allDesktop"}
        text="All"
        checked
        handleClick={handleAllClick}
      />
      <FilterRadioButton
        id={variant === "mobile" ? "activeMobile" : "activeDesktop"}
        text="Active"
        handleClick={handleActiveClick}
      />
      <FilterRadioButton
        id={variant === "mobile" ? "completedMobile" : "completedDesktop"}
        text="Completed"
        handleClick={handleCompletedClick}
      />
    </section>
  );
}

export default FilterButtons;
