async function getAbilityInfo(abilityUrl) {
    let response = await fetch(abilityUrl);
    if (!response.ok) {
        console.log('ERROR: Request returned error');
        return null;
    }
    const EFFECT_DATA = await response.json();
    return EFFECT_DATA.effect_entries[0].effect;
}

export default async function getPokemon(pokemonName) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
        console.log('ERROR: Request returned error');
        return null;
    }

    let pokeInfo = `<span>Name: ${pokemonName}<br></span>`;//.replace("${pokemonName}", pokemonName);

    const POKEMON_DATA = await response.json();

    for (let i = 0; i < POKEMON_DATA.abilities.length; i++) {
        let ability = POKEMON_DATA.abilities[i].ability;
        let abilityUrl = ability.url;
        let abilityPromise = getAbilityInfo(abilityUrl);
        let abilityName = ability.name;
        pokeInfo += `<span>${abilityName}: ${await abilityPromise}<br></span>`//.replace("${abilityName}", abilityName)
    }

    console.log(pokeInfo);
    pokeInfo = pokeInfo.replace(/span/g, "p");
    console.log(pokeInfo);

    return pokeInfo;
}