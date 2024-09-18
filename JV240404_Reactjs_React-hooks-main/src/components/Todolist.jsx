import React, { useEffect, useState } from "react";

export default function Todolist() {
  //#region Những State dùng chung của ứng dụng
  const [listJob, setListJob] = useState(() => {
    const jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];
    return jobLocal;
  });
  const [jobName, setJobName] = useState(""); // Tên công việc
  const [isShowError, setIsShowError] = useState(false); // Lỗi
  //#endregion

  /**
   * Validate dữ liệu đầu vào
   * @param {*} value Dữ liệu cần kiểm tra
   * @returns True: Khi không có lỗi, False khi có lỗi
   * Auth: NVQUY (12/09/2024)
   */
  const validateData = (value) => {
    let isValid = true;
    if (!value) {
      setIsShowError(true);
      isValid = false;
    } else {
      setIsShowError(false);
    }

    return isValid;
  };

  /**
   * Lấy giá trị từ input
   * @param {*} e Thông tin từ sự kiện
   * Auth: NVQUY (12/09/2024)
   */
  const handleChange = (e) => {
    const { value } = e.target;

    // Cập nhật lại giá trị cho state
    setJobName(value);

    // Gọi hàm validate dữ liệu
    validateData(value);
  };

  // Thêm mới công việc
  const handleAddJob = () => {
    // Validate dữ liệu đầu vào
    const isValid = validateData(jobName);

    if (isValid) {
      // Submit form
      // Tạo đối tượng job
      const jobInfo = {
        id: Math.ceil(Math.random() * 1000000),
        name: jobName,
        status: false,
      };

      // Push đối tượng vào mảng
      listJob.push(jobInfo);

      saveData("jobs", listJob);

      // Clean giá trị trong input
      setJobName("");
    }
  };

  /**
   * Hàm xác nhận xóa
   * @param {*} id  Id cần xóa
   * @param {*} name Tên công viêc cần xóa
   * Auth: NVQUY (12/09/2024)
   */
  const handleShowConfirm = (id, name) => {
    const isConfirm = confirm(
      `Bạn có chắc chắn muốn xóa công việc "${name}" không?`
    );

    if (isConfirm) {
      // Tiến hành xóa công việc

      // Lọc ra những bản ghi có id khác với id cần xóa [1,2, 3, 4] . Xóa 1 => [2, 3, 4]
      const filterJobs = listJob.filter((item) => item.id !== id);

      saveData("jobs", filterJobs);
    }
  };

  const handleChangeStatus = (id) => {
    // Tìm kiếm vị trí của công việc cần cập nhật
    const findIndexJob = listJob.findIndex((item) => item.id === id);

    if (findIndexJob !== -1) {
      // Cập nhật lại trạng thái công việc
      listJob[findIndexJob].status = !listJob[findIndexJob].status;
    }

    const newArray = [...listJob];

    saveData("jobs", newArray);
  };

  /**
   *
   * @param {*} key
   * @param {*} array
   */
  function saveData(key, array) {
    // Lưu lại dữ liệu lên local
    localStorage.setItem(key, JSON.stringify(array));

    // Cập nhật lại mảng cho state
    setListJob(array);
  }

  return (
    <div>
      <div>
        <input
          name="jobName"
          value={jobName}
          onChange={handleChange}
          type="text"
        />
        <button onClick={handleAddJob}>Add</button>
      </div>

      {isShowError && <p>Tên công việc không được để trống.</p>}

      <ul>
        {listJob.map((item) => (
          <li key={item.id}>
            <input
              checked={item.status}
              onChange={() => handleChangeStatus(item.id)}
              type="checkbox"
            />
            {item.status ? <s>{item.name}</s> : <span>{item.name}</span>}

            <button>Sửa</button>
            <button onClick={() => handleShowConfirm(item.id, item.name)}>
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
