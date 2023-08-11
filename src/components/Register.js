import { useEffect, useState } from "react";
import classes from "./Register.module.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repassword: "",
    email: "",
    fullname: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    repassword: "",
    email: "",
    fullname: "",
  });

  const onChangeHandler = (e) => {
    // console.log(e.target);p
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.username.length == 0) {
      newErrors.username = "Username khong duoc de trong";
    } else if (formData.username.length > 30) {
      newErrors.username = "Username khong duoc vuot qua 30 ki tu";
    }

    if (formData.password.length == 0) {
      newErrors.password = "Password khong duoc de trong";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password khong duoc it hon 8 ki tu";
    }
    if (formData.password != formData.repassword) {
      newErrors.repassword = "Re-password phai trung voi password o tren";
    }
    if (formData.email.length == 0) {
      newErrors.email = "Email khong duoc de trong";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Email khong dung dinh dang";
    }
    if (formData.fullname.length == 0) {
      newErrors.fullname = "Username khong duoc de trong";
    }

    if (Object.keys(newErrors).length > 0) {
      //co' loi
      setErrors({ ...newErrors });
    } else {
      alert("Form Submit thanh cong");
      setFormData({
        username: "",
        password: "",
        repassword: "",
        email: "",
        fullname: "",
      });
      setErrors({
        username: "",
        password: "",
        repassword: "",
        email: "",
        fullname: "",
      });
    }
  };
  useEffect(() => {
    console.log(formData);
  });
  return (
    <>
      <h1>Form dang ky thanh vien</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.row}>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            onChange={onChangeHandler}
            value={formData.username}
          />
        </div>
        {errors.username && <p className={classes.err}>{errors.username}</p>}
        <div className={classes.row}>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            onChange={onChangeHandler}
            value={formData.password}
          />
        </div>
        {errors.password && <p className={classes.err}>{errors.password}</p>}
        <div className={classes.row}>
          <label>Re-Password:</label>
          <input
            type="password"
            id="repassword"
            onChange={onChangeHandler}
            value={formData.repassword}
          />
        </div>
        {errors.repassword && (
          <p className={classes.err}>{errors.repassword}</p>
        )}
        <div className={classes.row}>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            onChange={onChangeHandler}
            value={formData.email}
          />
        </div>
        {errors.email && <p className={classes.err}>{errors.email}</p>}
        <div className={classes.row}>
          <label>Fullname:</label>
          <input
            type="text"
            id="fullname"
            onChange={onChangeHandler}
            value={formData.fullname}
          />
        </div>
        {errors.fullname && <p className={classes.err}>{errors.fullname}</p>}
        <div className={classes.row}>
          <button>Register</button>
        </div>
      </form>
    </>
  );
}

export default Register;
