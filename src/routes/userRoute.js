const userController = require("../controllers/userController");
const createUser = (app) => {
  app.post("/create/user", userController.createUser);
};
const updateUser = (app) => {
  app.put("/update/user/:id", userController.updateUser);
};
const deleteUser = (app) => {
    app.delete("/delete/user/:id", userController.deleteUser);
  };
  const selectUser = (app) => {
    app.get("/users", userController.selectUser);
  };
  const selectUserids = (app) => {
    app.get("/user/:id", userController.selectUserId);
  };
module.exports = (app) => {
  createUser(app),
  updateUser(app),
  deleteUser(app),
  selectUser(app),
  selectUserids(app)

  // app.get('/user', (req, res) => {
0
  //     res.status(200).json(req.body);

  // })
};
