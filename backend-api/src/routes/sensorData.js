const User = require('../controllers/user');
const { wrapAsync } = require('../utils/controllers');

module.exports = (api, base_path) => {
    api.route(base_path + '/sensorData/').get(wrapAsync(User.getById));
};