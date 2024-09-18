// import React, { createContext, useState } from "react";

// // Bước 1: Tạo ngữ cảnh
// export const ThemeProvider = createContext();

// export default function ParentComponent({ children }) {
//   const [theme, setTheme] = useState("light");

//   const handleChangeTheme = () => {
//     // Nếu theme = dark => light <=>
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <ThemeProvider.Provider value={{ theme, handleChangeTheme }}>
//       {/* Khu vữ chứa tất cả các component con */}
//       {children}
//     </ThemeProvider.Provider>
//   );
// }

// Kiểu nguyên thủy: Khi tạo xong trong bộ nhớ thì trả về giá trị
// Kiểu phức tạp: Trả về địa chỉ ô nhớ

// useCallback đưa địa chỉ của hàm ra bên ngoài function COmponent

import React, { useCallback, useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h3>ParentComponent</h3>
      <h3>Count: {count}</h3>

      <ChildrenComponent onHandleCount={handleCount} />
    </div>
  );
}
