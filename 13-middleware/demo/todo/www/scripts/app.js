'use strict';

const ENV = {};
const app = {};

let productionApiUrl = 'https://cokos-server.herokuapp.com';
let developmentApiUrl = 'http://localhost:3000';

ENV.isProduction = window.location.protocol === 'https:';
ENV.apiUrl = ENV.isProduction ? productionApiUrl : developmentApiUrl;

function show(id) {
  $('section').not(`#${id}`).hide();
  $(`#${id}`).show();
}
