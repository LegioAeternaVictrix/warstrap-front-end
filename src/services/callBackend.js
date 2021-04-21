import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

// const domain = "https://warstrap-backend.herokuapp.com";
const domain = "http://localhost:8000";

export async function isLoggedIn() {
  try {
    const res = await axios({
      method: "GET",
      url: `${domain}/LoggedIn`,
    });
    if (res.data.status === "success") {
      return {
        isLoggedIn: true,
        userData: {
          username: res.data.user.username,
          email: res.data.user.email,
          id: res.data.user._id,
        },
      };
    } else if (res.data.status === "noToken") {
      return { isLoggedIn: false };
    }
  } catch (err) {
    return { isLoggedIn: false };
  }
}

export async function register(data) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8000/register",
      data,
    });

    if (res.data.status === "success") {
      toast.success("You have register successfully");
      setTimeout(() => {
        window.location = "/";
      }, 1500);
    }

    return true;
  } catch (err) {
    toast.error(err.response.data.message);
  }
}

export async function login(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${domain}/login`,
      data,
    });

    if (res.data.status === "success") {
      toast.success("User login successfully");
      setTimeout(() => {
        window.location = "/";
      }, 1500);
    }
    return true;
  } catch (err) {
    toast.error(err.response.data.message);
  }
}

export async function logout() {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:8000/logout",
    });
    if (res.data.status === "success") {
      toast.success("You are logged out from your account");
      setTimeout(() => {
        window.location = "/";
      }, 1500);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function changeData(data, id) {
  const { username, email } = data;

  try {
    const res = await axios({
      method: "PATCH",
      url: "http://localhost:8000/changeData",
      data: {
        id,
        username,
        email,
      },
    });
    if (res.data.status === "success") {
      toast.success("Data changed successfully");
      setTimeout(() => {
        window.location = "/settings";
      }, 1500);
    }
  } catch (err) {
    toast.error(err.response.data.message);
  }
}

export async function changePassword(data, id) {
  const { currentPassword, password, repeatPassword } = data;

  try {
    const res = await axios({
      method: "PATCH",
      url: "http://localhost:8000/changePassword",
      data: {
        id,
        currentPassword,
        password,
        repeatPassword,
      },
    });
    if (res.data.status === "success") {
      toast.success("Password changed successfully");
      setTimeout(() => {
        window.location = "/settings";
      }, 1500);
    }
  } catch (err) {
    toast.error(err.response.data.message);
  }
}
