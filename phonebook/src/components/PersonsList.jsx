/* eslint-disable react/prop-types */

export const PersonsList = ({ filteredPersons, handleDelete }) => {
  console.log(filteredPersons);
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.id} className="flex justify-between">
          <p>
            Name: {person.name} Number: {person.number}
          </p>
          <button
            data-person-id={person.id}
            onClick={() => handleDelete(person.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
