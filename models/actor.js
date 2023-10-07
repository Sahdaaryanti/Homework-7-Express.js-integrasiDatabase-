'use strict';

const pool = require('../config/dbConfig');

//model untuk berinteraksi dengan data actor
class Actor {
  static async getAllActors() {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM actor');
    client.release();
    return result.rows;
  }
}

module.exports = Actor;
