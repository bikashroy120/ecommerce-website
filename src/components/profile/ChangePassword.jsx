import React, { useEffect, useState } from "react";
import { useUpdatePasswordMutation } from "../../redux/features/auth/authApi";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { isLoading, isSuccess, error }] =
    useUpdatePasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Password update success";
      toast.success(message);
      setEmail("")
      setOldPassword("")
      setNewPassword("")
    }
    if (error) {
      toast.error("invalid email and old password ! please try again");
    }
  }, [isSuccess, error]);

  const changePassword = async () => {
    if (email === "" || oldPassword === "" || newPassword === "") {
      toast.error("please fill all filed");
    } else {
      const data = {
        email,
        oldPassword,
        newPassword,
      };
      await updatePassword(data);
    }
  };

  return (
    <div>
      <h5 className="mb-2">Change Password</h5>
      <div>
        <div className=" checkout_inputbox py-2">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            name="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" checkout_inputbox py-2">
          <label>Current Password</label>
          <input
            type="password"
            placeholder="Current Password"
            className="form-control"
            name="Current Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className=" checkout_inputbox py-2">
          <label>New Password</label>
          <input
            type="password"
            placeholder="New Password"
            className="form-control"
            name="Current Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          onClick={() => changePassword()}
          type="submit"
          className="py-2 px-5"
          style={{
            border: "none",
            background: "green",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          {isLoading ? "Loading..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
