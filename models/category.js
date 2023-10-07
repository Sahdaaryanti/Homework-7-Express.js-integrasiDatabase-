const pool = require('../config/dbConfig');

////model untuk berinteraksi dengan data catecogry
class Category {
  static async getAllCategories() {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM category');
    client.release();
    return result.rows;
  }

  static async getFilmsByCategory(categoryId) {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT film.* FROM film INNER JOIN film_category ON film.film_id = film_category.film_id WHERE film_category.category_id = $1',
      [categoryId]
    );
    client.release();
    return result.rows;
  }
}

module.exports = Category;
