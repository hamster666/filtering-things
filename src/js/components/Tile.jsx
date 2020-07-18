import React, { useState } from "react";

const Tile = ({ content: { photo, drinkName, alcoholic } }) => {
  const [error, setError] = useState(false);

  return (
    <li className="tile" data-testid="app-tile">
      <div className="tile__content">
        {error && (
          <div className="tile__image tile__image--default">
            Image for {title} is unavailable :(
          </div>
        )}
        {!error && (
          <img
            className="tile__image"
            src={photo}
            onError={() => setError(true)}
          />
        )}
      <div>{`${drinkName} (${alcoholic})`}</div>
      </div>
    </li>
  );
};

export default Tile;
