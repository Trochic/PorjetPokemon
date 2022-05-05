class Pokemon {
    static all_pokemons = [];
    constructor(_id, _name, _base_att, _base_def, _base_sta, _type, _catk, _fatk,_gen) {
        this.id = _id;
        this.name = _name;
        this.type = _type;
        this.base_attaque = _base_att;
        this.base_defense = _base_def;
        this.base_stamina = _base_sta;
        this.cattacks = _catk;
        this.fattacks = _fatk;
        this.gen=_gen;
    }
    getType() {
        return this.type;
    }
    getAttacks() {
        return this.cattacks + this.fattacks;
    }
    getCmove(){
        return this.cattacks;
    }

    getFmove(){
        return this.fattacks;
    }

    toString() {
        return this.name + " Id : " + this.id + " Base Attaque : " + this.base_attaque + " Base Defence : " +
            this.base_defence + " Best Stamina : " + this.base_stamina + this.type + this.cattacks + this.fattacks +this.gen +"\n" + "\n" + "\n" + "\n";
    }

}

var key = Object.keys(type_effectiveness);

function import_pokemon() {
    let typePoke = [];
    this.CHmoves = [];
    this.FSmoves = [];
    let gen = Object.keys(generations[0]);
    let genPok;
    for (let i = 0; i < key.length; i++) {

        Type.all_types[key[i]] = new Type(key[i], type_effectiveness[key[i]]);
    }
    for (let i = 0; i < charged_moves.length; i++) {

        Attack.all_attacks[charged_moves[i]['move_id']] = new Attack(charged_moves[i]);
    }
    for (let i = 0; i < fast_moves.length; i++) {
        Attack.all_attacks[fast_moves[i]['move_id']] = new Attack(fast_moves[i]);
    }

    for (let u = 0; u < pokemons.length; u++) {
        if (pokemons[u]['form'] == "Normal") {
            for (let i = 0; i < gen.length; i++) {
                generations[0][gen[i]].forEach(pokegen => {
                    if (pokegen['name'] ==pokemons[u]['pokemon_name']) {
                        genPok = pokegen['generation_number'];
                    }
                })
            }

            for (let i = 0; i < typePokemon.length; i++) {
                if (typePokemon[i]['form'] == "Normal" && pokemons[u]['pokemon_name'] == typePokemon[i]['pokemon_name']) {//si deux pokemons normaux on le meme nom

                    CHmoves = [];
                    FSmoves = [];
                    for (let Cmove = 0; Cmove < moveSets.length; Cmove++) {

                        if (moveSets[Cmove]['pokemon_name'] == pokemons[u]['pokemon_name'] && moveSets[Cmove]['form'] == "Normal") {
                            for (let i = 0; i < moveSets[Cmove]['charged_moves'].length; i++) {
                                for (let j = 0; j < charged_moves.length; j++) {
                                    if (moveSets[Cmove]['charged_moves'][i] == charged_moves[j]["name"]) {
                                        this.CHmoves[this.CHmoves.length] = Attack.all_attacks[charged_moves[j]['move_id']];
                                    }
                                }
                            }
                            for (let k = 0; k < moveSets[Cmove]['elite_charged_moves'].length; k++) {

                                for (let l = 0; l < charged_moves.length; l++) {
                                    if (moveSets[Cmove]['elite_charged_moves'][k] == charged_moves[l]["name"]) {
                                        this.CHmoves[this.CHmoves.length] = Attack.all_attacks[charged_moves[l]['move_id']];
                                    }
                                }
                            }

                            for (let i = 0; i < moveSets[Cmove]['fast_moves'].length; i++) {
                                for (let j = 0; j < fast_moves.length; j++) {
                                    if (moveSets[Cmove]['fast_moves'][i] == fast_moves[j]["name"]) {
                                        this.FSmoves[this.FSmoves.length] = Attack.all_attacks[fast_moves[j]['move_id']];
                                    }
                                }
                            }
                            for (let k = 0; k < moveSets[Cmove]['elite_fast_moves'].length; k++) {

                                for (let l = 0; l < fast_moves.length; l++) {
                                    if (moveSets[Cmove]['elite_fast_moves'][k] == fast_moves[l]["name"]) {
                                        this.FSmoves[this.FSmoves.length] = Attack.all_attacks[fast_moves[l]['move_id']];
                                    }
                                }
                            }

                        }
                    }
                    typePoke = [];
                    for (let k = 0; k < typePokemon[i]['type'].length; k++) {
                        for (let j = 0; j < key.length; j++) {
                            if (key[j] == typePokemon[i]['type'][k]) {

                                typePoke[k] = Type.all_types[key[j]];
                            }

                        }
                        Pokemon.all_pokemons[pokemons[u]['pokemon_id']] = new Pokemon(pokemons[u]['pokemon_id'],
                            pokemons[u]['pokemon_name'], pokemons[u]['base_attack'], pokemons[u]['base_defense'],
                            pokemons[u]['base_stamina'], typePoke, CHmoves, FSmoves,genPok);

                    }
                }
            }

        }
    }

}

function getPokemonsByType(typeName) {
    var pokeType = [];
    Pokemon.all_pokemons.forEach(pokemon => {
        pokemon.getType().forEach(type => {
            if (type['name'] == typeName) {
                pokeType.push(pokemon['name']);
            }
        })
    });
    console.log(pokeType);
}

function getPokemonsByAttack(attackName) {
    var pokeAtk = [];
    Pokemon.all_pokemons.forEach(pokemon => {
        pokemon.getCmove().forEach(cattacks => {
            if (cattacks['name'] == attackName) {
                pokeAtk.push(pokemon['name']);
            }
        })
        pokemon.getFmove().forEach(fattacks =>{
            if (fattacks['name']==attackName){
                pokeAtk.push(pokemon['name']);
            }
        })
    });
    console.log(pokeAtk);
}

function getAttacksByType(typeName) {
    var atkType = [];
    Attack.all_attacks.forEach(attack => {
        if (attack['type'] == typeName) {
            atkType.push(attack);
        }
    })
    console.log(atkType);
}

function SortArray(x, y) {
    if (x.name < y.name) { return -1; }
    if (x.name > y.name) { return 1; }
    return 0;
}
function sortPokemonByName() {
    var s = Pokemon.all_pokemons.sort(SortArray);
    console.log(s);
}

function SortArrayStamina(x, y) {
    if (x.base_stamina < y.base_stamina) { return 1; }
    if (x.base_stamina > y.base_stamina) { return -1; }
    return 0;
}
function sortPokemonByStamina() {
    var s = Pokemon.all_pokemons.sort(SortArrayStamina);
    console.log(s);
}

function getWeakestEnemies(attack) {
    
    let efftab = [];
    let typatk;
    Attack.all_attacks.forEach(atk => {
        if (atk['name'] == attack) {
            typatk = atk['type'];
        }
    }); 
    Pokemon.all_pokemons.forEach(pokemon => {
        pokemon['type'].forEach(type => {
           
            if(type_effectiveness[typatk][type['name']]>1){
                if(!(efftab[pokemon['name']])){
                    efftab[pokemon['name']]=1;
                }
                
                efftab[pokemon['name']]=efftab[pokemon['name']]*type_effectiveness[typatk][type['name']];

            }
        })
    })

}


function getStrongestEnemies(attack) {
    
    let efftab = [];
    let typatk;
    Attack.all_attacks.forEach(atk => {
        if (atk['name'] == attack) {
            typatk = atk['type'];
        }
    }); 
    Pokemon.all_pokemons.forEach(pokemon => {
        pokemon['type'].forEach(type => {
            if(type_effectiveness[typatk][type['name']]<1){
                if(!(efftab[pokemon['name']])){
                    efftab[pokemon['name']]=1;
                }
                efftab[pokemon['name']]=efftab[pokemon['name']]*type_effectiveness[typatk][type['name']];
            }
        })
    })
}
import_pokemon();

