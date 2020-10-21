import React from "react";

export default function Spinner({toggle}) {
  return(
    <div className="spinner-grow" style={ {display: toggle && toggle.length ? 'none' : 'inherit'} } role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}
