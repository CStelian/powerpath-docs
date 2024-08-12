const dailyClaim = {
    bronze: 100,
    silver: 25,
    gold: 1
}

const weeklyClaim = {
    bronze: 500,
    silver: 125,
    gold: 5
}

const season = "Pre-Season"
const botVersion = "v0.9"

const gameModes = [
    {
        name: "Raid",
        powerLevel: 5,
        howToPlay: {
            slashCommand: "/play game-mode:raid",
            legacyCommand: "p!play raid"
        },
        timesPlayed: 0
    },
    {
        name: "Zombies Outbreak",
        powerLevel: 5,
        howToPlay: {
            slashCommand: "/play game-mode:zombies-outbreak",
            legacyCommand: "p!play zombies-outbreak"
        },
        timesPlayed: 0
    }
]

export {
    dailyClaim,
    weeklyClaim,
    season,
    gameModes,
    botVersion
}