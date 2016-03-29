var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');
var queries = require('../queries')