import React from 'react';

const RelativeList = () => {
  const relatives = [
    { key: "relativeListItem1", name: "Uncle Raj" },
    { key: "relativeListItem2", name: "Aunt Meena" },
    { key: "relativeListItem3", name: "Cousin Anil" },
    { key: "relativeListItem4", name: "Grandparents" }
  ];

  return (
    <div>
      <h2>Relatives to Visit this Diwali</h2>
      <ol key="relativeList">
        {relatives.map((relative) => (
          <li key={relative.key}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default RelativeList;
