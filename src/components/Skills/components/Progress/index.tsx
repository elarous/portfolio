import React from "react";
import { Background, Thumb } from "./style";

function Progress({ percent }) {
  return (
    <div>
      <Background>
        <Thumb percent={percent}/>
      </Background>
    </div>
  );
}

export default Progress;
