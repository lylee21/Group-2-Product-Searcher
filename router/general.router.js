const cheerio = require('cheerio');
const express = require('express');
const sequelize = require('sequelize');
const axios = require('axios');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');