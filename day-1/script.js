const dayOfTheWeek = "poniedziałek";

switch (dayOfTheWeek) {
    case "poniedziałek":
        console.log("Dzis jest poniedziałek");
        break;
    case "wtorek":
        console.log("Dziś jest wtotek");
        break;
    case "środa":
        console.log("Dziś jest środa");
        break;
    case "czwartek":
        console.log("Dziś jest czwartek");
        break;
    default:
        console.log("Nie mam pojęcia jaki jest dzisiaj dzień :(");
        break;
}

const score = 100;
20 === "20" && score ? console.log("wykonuje się, bo prawda") : console.log("wykonuje się bo nie jest prawidzy");

false || true ? console.log("prawda") : console.log("fałsz");

score > 120 ? console.log("prawda1") : console.log("fałsz2");