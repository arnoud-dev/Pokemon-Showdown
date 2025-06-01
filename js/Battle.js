import Pokemon from "./pokemon.js";

export default class Battle {
  #pokemonOne;
  #pokemonTwo;

  constructor() {
    const catchP1  = document.getElementById("p1-choose");
    const imgContP1 = document.getElementById("p1-pokemon");
    const imgP1    = document.getElementById("p1-img");
    const nameP1   = document.getElementById("p1-name");

    catchP1.addEventListener("click", async () => {
      this.#pokemonOne = new Pokemon();
      await this.#pokemonOne.getPokemon();
      imgContP1.className = "pokemon-slot";
      imgP1.src           = this.#pokemonOne.sprite;
      nameP1.textContent  = this.#pokemonOne.name;
    });

    const catchP2  = document.getElementById("p2-choose");
    const imgContP2 = document.getElementById("p2-pokemon");
    const imgP2    = document.getElementById("p2-img");
    const nameP2   = document.getElementById("p2-name");

    catchP2.addEventListener("click", async () => {
      this.#pokemonTwo = new Pokemon();
      await this.#pokemonTwo.getPokemon();
      imgContP2.className = "pokemon-slot";
      imgP2.src           = this.#pokemonTwo.sprite;
      nameP2.textContent  = this.#pokemonTwo.name;
    });
  }
}
