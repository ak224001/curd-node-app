const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Employee = require("../models/employee.model");

// Make sure you place body-parser before your CRUD handlers!
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.get("/", (req, res) => {
  res.render("Emp/EditorAdd", {
    viewTitle: "Insert Employee",
  });
});
router.post("/person", (req, res) => {
  if (req.body._id == '') {
    InsertRecord(req, res);
  } else {
    updateRecord(req, res)
  }

});

router.get("/list", (req, res) => {
  Employee.find({})
    .lean()
    // execute query
    .exec(function (err, docs) {
      if (!err) {
        res.render("List/list", {
          list: docs,
        });
      }
    });
});

router.get('/delete/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      res.redirect("/list");
    }
  });
});

router.get('/:id', (req, res) => {
  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("Emp/EditorAdd", {
        viewTitle: "Update Employee",
        employee: doc
      });
    }
  }).lean();
});

function InsertRecord(req, res) {
  var employee = new Employee();
  employee.name = req.body.name;
  employee.email = req.body.email;
  employee.Age = req.body.Age;
  employee.mobile = req.body.mobile;
  employee.city = req.body.city;
  employee.save((err, doc) => {
    if (!err) {
      res.redirect("/list");
    } else {
      console.log("Err during inerting record" + err);
    }
  });
}

function updateRecord(req, res) {
  Employee.findByIdAndUpdate({
    _id: req.body._id
  }, req.body, {
    new: true
  }, (err, doc) => {
    if (!err) {
      res.redirect("/list");
    } else {
      console.log("Err during Update record" + err);
    }
  })
}
module.exports = router;