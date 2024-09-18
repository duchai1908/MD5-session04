import React, { memo } from "react";

// memo là một HOC (Higher Order Component)
// Sử dụng toán tử strict (===) - Khi 1 prop thay đổi, thì component bị re-render

function ChildrenComponent({ onHandleCount }) {
  console.log("re-render");

  return (
    <div>
      ChildrenComponent
      <button onClick={onHandleCount}>Count</button>
    </div>
  );
}

export default memo(ChildrenComponent);
