export const validateName = (name) => {
  if (!name) {
    return "Name is required";
  } else if (typeof name !== "string" || name.length < 3) {
    return `Name must be at least 3 characters long`;
  }
};

export const validateEmail = (email) => {
  if (!email) {
    return "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid emaill address";
  }
};

export const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  } else if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
};

export const validateComfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "Confirm Password is required";
  } else if (password !== confirmPassword) {
    return "Password does not match";
  }
};

export const validateTitle = (title) => {
  if (!title) {
    return "Title is required";
  } else if (typeof title !== "string" || title.length < 3) {
    return `Title must be at least 3 characters long`;
  }
};

export const validateUrl = (url) => {
  if (!url) {
    return "Url is Required";
  } else if (
    !/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi.test(url)
  ) {
    return "Invalid url format";
  }
};
