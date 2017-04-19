const db = require('../models').sequelize;
const Post = require('../models').Post;

const cars = require('./car-seed');


db.sync({ force: true })
.then(() => Post.bulkCreate(cars));



// const db = require('../models').sequelize;
// const Event = require('../models').Event;
// const Image = require('../models').Image;
// const LocationHours = require('../models').LocationHours;
// const Location = require('../models').Location;
// const User = require('../models').User;
// const Bookmark = require('../models').Bookmark;


// const cars = require('./car-seed');


// db.sync({ force: true })
// .then(() => User.bulkCreate(cars))
// .then(() => Location.bulkCreate(location))
// .then(() => LocationHours.bulkCreate(locationHours))
// .then(() => Event.bulkCreate(events))
// .then(() => Image.bulkCreate(images))
// .then(() => bookmarks());
