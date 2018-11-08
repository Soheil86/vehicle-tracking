const User = require('../controllers/user');
const { wrapAsync } = require('../utils/controllers');

module.exports = (api, base_path) => {
    api.route(base_path + '/user/:userId').get(wrapAsync(User.getById));
    api.route(base_path + '/user').get(wrapAsync(User.getAll));
};