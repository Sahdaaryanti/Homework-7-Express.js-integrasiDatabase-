const actor = require('../models/actor');

//fungsi getAllActors sebagai handler yang akan mengambil database actors menggunakan model actor
const actorController = {
  getAllActors: async (req, res) => {
    try {
      const actors = await actor.getAllActors();
      res.json(actors);
    } catch (err) {
      console.error('Error Saat Memanggil Seluruh Actor:', err);
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },
};

module.exports = actorController;
