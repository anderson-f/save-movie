"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("/user/register", "UserController.register");
Route.post("/user/authenticated", "UserController.authenticated");

Route.group(() => {
  Route.resource("genre", "GenreController").apiOnly();
  Route.resource("movies", "MovieController").apiOnly();
  Route.resource("watched", "WatchedController")
    .apiOnly()
    .except(["store", "show", "delete"]);
}).middleware("auth");
