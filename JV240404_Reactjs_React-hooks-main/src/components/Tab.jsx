import React, { useState } from "react";

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Trang chủ",
    },
    {
      id: 1,
      title: "Lộ trình",
    },
    {
      id: 2,
      title: "Bài viết",
    },
  ];

  // Khi clcik vào button, sẽ lấy được index của button đấy và cập nhập cho state

  /**
   * Hàm thay đổi vị trí active của button
   * @param {*} index Vị trí của button vừa được click
   * Auth: NVQUY (12/09/2024)
   */
  const handleActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab) => {
          return (
            <div key={tab.id}>
              <button
                onClick={() => handleActive(tab.id)}
                className={`${activeIndex === tab.id ? "active" : ""}`}
              >
                {tab.title}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
