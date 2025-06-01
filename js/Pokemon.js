export default class Pokemon {
    #url = "https://pokeapi.co/api/v2/pokemon/";
    #name;
    #sprite;
    #moves = [];
    #health;

    async getPokemon() {
        await this.#getPokemonData();
        return this;
    }

    get name() { return this.#name };

    get sprite() { return this.#sprite };

    get moves() { return this.#moves };

    get health() { return this.#health };

    takeDamage(damage) {
        this.#health -= damage;
    }

    async #getPokemonData() {
        const indexPoke = Math.floor(Math.random() * 1000) + 1;
        try {
            const response = await fetch(this.#url + indexPoke);
            if (!response.ok) throw new Error("Couldn't fetch pokemon");

            const data = await response.json();
            this.#name = data.name;
            this.#sprite = data.sprites.front_default;
            this.#health = data.base_experience;

            const moves = data.moves;
            const validMoves = [];
            const shuffledMoves = moves.sort(() => Math.random() - 0.5);

            for (const moveEntry of shuffledMoves) {
                if (validMoves.length >= 4) break;
                
                const moveInfo = moveEntry.move;
                const moveResponse = await fetch(moveInfo.url);
                const moveData = await moveResponse.json();
                
                if (moveData.power !== null) {
                    validMoves.push([moveInfo.name, moveData.power, moveData.type, moveData.pp]);
                }
            }
            this.#moves = validMoves;

        } catch (e) {
            alert(e.message);
        }
    }
}
