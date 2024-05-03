import React from "react";

const TopButtons = ({ setCity }) => {
  const cities = [
    {
      id: 1,
      title: "Berlin",
    },
    {
      id: 2,
      title: "New York",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Dhaka",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => setCity(city.title)}
          key={city.id}
          className="  text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
