"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MovieSchema extends Schema {
  up() {
    this.create("movies", (table) => {
      table.increments();
      table.string("title", 240).notNullable();
      table.string("sinopse", 500);
      table
        .integer("genre_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("genres")
        .onUpdate("CASCADE")
        .onDelete("Cascade");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("Cascade");
      table.boolean("watched_flag").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("movies");
  }
}

module.exports = MovieSchema;
