import React from 'react';
function GifList({gif}){
return (
    <>
      <ul key={gif.id}>
        <li style={{ listStyleType: "none" }}>
          <img
            src={gif.images.original.url}
            alt={gif.url}
            style={{ width: "200px" }}
          />
        </li>
      </ul>
    </>
  );
};

export default GifList;