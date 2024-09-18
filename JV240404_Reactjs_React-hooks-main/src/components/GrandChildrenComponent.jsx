// import React, { useContext } from "react";
// import { ThemeProvider } from "./ParentComponent";

// export default function GrandChildrenComponent() {
//   // Bước 3: Lấy dữ liệu từ Cha
//   const { theme, handleChangeTheme } = useContext(ThemeProvider);

//   return (
//     <>
//       <div
//         className={`${theme === "light" ? "light" : "dark"}`}
//         style={{ height: 400, width: 400, border: "1px solid #dadada" }}
//       >
//         GrandChildrenComponent
//       </div>

//       <button onClick={handleChangeTheme}>Toggle theme</button>
//     </>
//   );
// }
