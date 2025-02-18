import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./conect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj }; //... serve para COPIAR o obj
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongsObj) => {
  const newSongsObj = { ...currentSongsObj }; //... serve para COPIAR o obj
  delete newSongsObj.id;

  return newSongsObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

console.log(responseArtists);
console.log(responseSongs);
