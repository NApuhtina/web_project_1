(()=>{"use strict";var e,r,n,a,o={50:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.usersInfoArray=void 0,r.usersInfoArray=[{userid:"127e4",name:"John",birthdate:"1982-02-17T21:00:00.000Z",age:40,organization:{name:"Amazon",position:"General manager"}},{userid:"127e5",name:"Anna",birthdate:"1988-02-17T21:00:00.000Z",age:34,organization:{name:"Amazon",position:"Manager"}}]},429:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.usersArray=void 0,r.usersArray=[{userid:"127e4",name:"John",gender:"man"},{userid:"127e5",name:"Anna",gender:"woman"}]}},i={};function s(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,s),n.exports}e=s(429),r=s(50),n=[],e.usersArray.forEach((function(e){var a=r.usersInfoArray.find((function(r){return r.userid===e.userid}));a&&n.push({name:a.name,position:a.organization.position,age:a.age,gender:e.gender})})),a=n,console.log(a)})();