import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  //
  return (
    <div>
      <Link to="/"> 드레스 </Link>
      <Link to="/dress/makeup"> 메이크업</Link>
      <Link to="/dress/studio"> 스튜디오</Link>
    </div>
  );
}

export default Nav;
