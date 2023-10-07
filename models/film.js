const pool = require('../config/dbConfig');

////model untuk berinteraksi dengan data film
class Film {
  static async getAllFilms() {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM film');
    client.release();
    return result.rows;
  }

  static async getFilmById(filmId) {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM film WHERE film_id = $1', [filmId]);
    client.release();
    return result.rows[0];
  }
}

module.exports = Film;
