"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Genre = use("App/Models/Genre");

class GenreController {
  // Get /genre
  async index() {
    const genres = await Genre.all();
    return genres;
  }

  // Post /genre
  async store({ request }) {
    const data = request.only(["description"]);
    const genre = await Genre.create(data);

    return genre;
  }

  // Get /genre/:id
  async show({ params }) {
    const genre = await Genre.findOrFail(params.id);
    return genre;
  }

  // Put /genre/:id
  async update({ params, request }) {
    const data = request.only(["description"]);
    const genre = await Genre.findOrFail(params.id);

    console.log(data);

    genre.merge(data);
    await genre.save();
    return genre;
  }

  // Delete /genre/:id
  async destroy({ params }) {
    const genre = await Genre.findOrFail(params.id);
    await genre.delete();
  }
}

module.exports = GenreController;
