const express = require("express");
const router = express.Router();
const Users = require("./users-model.js");

// Get All Data
router.get("/", (req, res) => {
  Users.getAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "error Getting all users"
      });
    });
});

//  Get User By ID
router.get("/:id", (req, res) => {
  Users.getById(req.params.id)
    .then(user => {
      if (user) res.status(200).json(user);
      else
        res.status(404).json({
          message: "no user with this id"
        });
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "error Getting all users"
      });
    });
});

router.post("/", (req, res) => {
  if (req.body.username && req.body.password) {
    Users.addUser(req.body)
      .then(user => {
        res.status(202).json(user);
      })
      .catch(error => {
        res.status(500).json({
          errorMessage: "Error Getting Users"
        });
      });
  } else {
    res.status(404).json({
      Message: "Please Provide Username and Password"
    });
  }
});

router.put("/:id", (req, res) => {
  Users.getById(req.params.id)
    .then(user => {
      if (user) {
        Users.updateUser(req.body, req.params.id)
          .then(updated => {
            res.status(200).json(updated);
          })
          .catch(error => {
            res.status(500).json({
              errorMessage: "Error Getting Users"
            });
          });
      } else {
        res.status(404).json({
          message: "no user with this id"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error Getting Users"
      });
    });
});

router.delete("/:id", (req, res) => {
  Users.removeUser(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error Getting Users"
      });
    });
});
module.exports = router;
