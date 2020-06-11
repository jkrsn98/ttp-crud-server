const { Campus } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      imageUrl: "",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "CSI",
      address: "Staten Island",
      imageUrl: "",
      description: "A college in Staten Island",
    }),
    Campus.create({
      name: "John Jay",
      address: "New York",
      imageUrl: "",
      description: "A college in Manhattan",
    }),
  ]);
};

module.exports = seedDatabase;
