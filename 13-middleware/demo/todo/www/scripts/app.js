'use strict';

const ENV = {};
const app = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'insert cloud API server URL here';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

function show(section) {
  $('section').not(`#${section}`).hide();
  $(`#${section}`).show();
}