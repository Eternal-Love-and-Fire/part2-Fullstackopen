/* eslint-disable react/prop-types */
export const Filter = ({ handleFilter }) => {
  return (
    <div className="flex flex-col gap-2">
        Find by Name:
      <input
        type="text"
        onChange={(event) => handleFilter(event.target.value)}
      />
    </div>
  );
};
