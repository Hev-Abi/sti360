export const loginUser = async (email, password) => {
  // fake login simulation
  if (email === "admin@gmail.com" && password === "1234") {
    return { success: true };
  } else {
    return { success: false };
  }
};