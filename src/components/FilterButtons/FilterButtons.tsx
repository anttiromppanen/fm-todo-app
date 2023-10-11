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
          p-2 text-userLightDarkGrayBlue2 peer-checked:text-userBrightBlue 
          peer-focus-visible:outline"
      >
        {text}
      </p>
    </label>
  );
}

FilterRadioButton.defaultProps = {
  checked: false,
};

function FilterButtons() {
  const setFilter = useTodoStore((state) => state.setFilter);
  const handleAllClick = () => setFilter("");
  const handleActiveClick = () => setFilter("active");
  const handleCompletedClick = () => setFilter("completed");

  return (
    <section
      className="
      mt-4 flex justify-evenly rounded-md bg-userLightLightGray p-5 shadow-2xl shadow-gray-700/20
      dark:bg-userDarkDarkDesaturatedBlue"
    >
      <FilterRadioButton
        id="all"
        text="All"
        checked
        handleClick={handleAllClick}
      />
      <FilterRadioButton
        id="active"
        text="Active"
        handleClick={handleActiveClick}
      />
      <FilterRadioButton
        id="completed"
        text="Completed"
        handleClick={handleCompletedClick}
      />
    </section>
  );
}

export default FilterButtons;
