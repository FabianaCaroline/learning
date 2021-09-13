const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/pokemon", async (req, res) => {
    async function getPokemons() {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3");
        return response.data.results;
    }
    res.json(await getPokemons());
});

app.get("/pokemon/:idOuNome", async (req, res) => {
    async function getPokemons(req) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idOuNome}`);

        const pokemon = {
            id: response.data.id,
            name: response.data.name,
            height: response.data.height,
            base_experience: response.data.base_experience,
            forms: response.data.forms,
            abilities: response.data.abilities,
            species: response.data.species
        }
        return pokemon;
    }

    res.json(await getPokemons(req));
});


app.listen(8000);