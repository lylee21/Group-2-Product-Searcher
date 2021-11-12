const cheerio = require('cheerio');
const express = require('express');
const axios = require('axios');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');