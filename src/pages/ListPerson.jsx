import React, { useEffect, useState } from "react";
import Person from "../components/Person";
import axios from "axios";
const ListPerson = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setPersons(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">List of Persons</h2>
      {persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          email={person.email}
          phone={person.phone}
          website={person.website}
          address={person.address.street}
        />
      ))}
    </div>
  );
};

export default ListPerson;
