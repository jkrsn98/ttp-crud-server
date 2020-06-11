var express = require("express");
var router = express.Router();
const { Campus } = require("../database/models");


/* GET all campuses. */
router.get("/", async (req, res, next) => {

  try{
    const campuses = await Campus.findAll()
    res.status(200).json(campuses);
  }catch(err){
    next(err)
  }
});

// Route to serve single campus based on its id
router.get("/:id", (req, res, next) => {
  const campus = mockCampusesArray.find(
    (campus) => campus.id === req.params.id
  );

  res.json(campus);
});

// Route to handle adding a campus
router.post("/", (req, res, next) => {
  res.send("Route to handle adding a campus");
});

// Route to handle editing a campus
router.put("/:id", (req, res, next) => {
  res.send("Route to handle editing a campus");
});

// Route to handle removing a campus
router.delete("/:id", (req, res, next) => {
  res.send("Route to handle removing a campus");
});

module.exports = router;
