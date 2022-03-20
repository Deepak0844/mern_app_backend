import User from "../model/User.js";

//add new user
const addUser = async (request, response) => {
  try {
    const { email, mobileNo } = request.body;

    const emailFromDb = await User.findOne({ email });

    const mobileNoFromDb = await User.findOne({ mobileNo });

    // if email is already exist send error message
    if (emailFromDb) {
      response.status(400).json({ error: "Email already exist" });
      return;
    }

    // if mobile no is already exist send error message
    if (mobileNoFromDb) {
      response.status(400).json({ error: "Mobile no already exist" });
      return;
    }

    const addUser = await new User(request.body);

    const newUser = await addUser.save();

    response.json(newUser);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

//get all user
const getAllUser = async (request, response) => {
  try {
    const user = await User.find();

    response.json(user);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

//get user by id
const getById = async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findById(id);

    response.json(user);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

//update existing user
const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const userFromDb = await User.findById(id);

    //if user is not available in db send error message
    if (!userFromDb) {
      response.status(404).json({ error: "User not found" });
      return;
    }

    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: request.body },
      { new: true }
    );

    response.json(updateUser);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

//delete existing user
const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;

    const userFromDb = await User.findById(id);

    //if user is not available in db send error message
    if (!userFromDb) {
      response.status(404).json({ error: "User not found" });
      return;
    }

    await User.findByIdAndDelete(id);

    response.json({ message: "User deleted successfully" });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

export { getAllUser, updateUser, addUser, deleteUser, getById };
