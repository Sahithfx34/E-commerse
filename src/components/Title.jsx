import React from "react";

// eslint-disable-next-line react/prop-types
const Title = ({title,sub}) => {

  return (
    <div className="title">
        <h3> <span>{title}</span> {sub} </h3>
        <div className="line"></div>
    </div>
  )

}

export default React.memo(Title);