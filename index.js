"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersJobPositions = getUsersJobPositions;
var users_1 = require("./users");
var userInfo_1 = require("./userInfo");
function getUsersJobPositions() {
    var result = [];
    users_1.usersArray.forEach(function (user) {
        var userInfo = userInfo_1.usersInfoArray.find(function (userInfoItem) { return userInfoItem.userid === user.userid; });
        if (userInfo) {
            result.push({
                name: userInfo.name,
                position: userInfo.organization.position,
                age: userInfo.age,
                gender: user.gender,
            });
        }
    });
    return result;
}
var usersPositions = getUsersJobPositions();
console.log(usersPositions);
