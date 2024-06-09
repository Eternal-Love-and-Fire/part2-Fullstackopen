/* eslint-disable react/prop-types */
export const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={(event) => handleSubmit(event)} className="my-6 flex flex-col gap-4 items-center">
      <label htmlFor="name">
        Name:
        <input type="text" id="name" placeholder="Enter name" />
      </label>
      <label htmlFor="phone">
        Phone:
        <input type="tel" id="phone" placeholder="Enter phone" />
      </label>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
