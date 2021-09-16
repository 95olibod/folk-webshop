export interface MovieData {
    id: number,
    title: string,
    releaseYear: string,
    duration: string,
    price: number,
    storyline:
    string,
    imageUrl:
    string,
}

export const movies: MovieData[] = [
    {
        id: 0,
        title: "Iron Man",
        releaseYear: "2008",
        duration: "126",
        price: 199,
        storyline:
            "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 1,
        title: "Spider-Man",
        releaseYear: "2002",
        duration: "121",
        price: 299,
        storyline:
            "Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson. To say his life is 'miserable' is an understatement. But one day while on an excursion to a laboratory a runaway radioactive spider bites him... and his life changes in a way no one could have imagined. Peter acquires a muscle-bound physique, clear vision, ability to cling to surfaces and crawl over walls, shooting webs from his wrist ... but the fun isn't going to last. An eccentric millionaire Norman Osborn administers a performance enhancing drug on himself and his maniacal alter ego Green Goblin emerges. Now Peter Parker has to become Spider-Man and take Green Goblin to the task... or else Goblin will kill him. They come face to face and the war begins in which only one of them will survive at the end.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 2,
        title: "Avengers: Infinity War",
        releaseYear: "2018",
        duration: "149",
        price: 225,
        storyline:
            "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 3,
        title: "The Avengers",
        releaseYear: "2012",
        duration: "143",
        price: 199,
        storyline:
            "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 4,
        title: "Captain Marvel",
        releaseYear: "2019",
        duration: "123",
        price: 159,
        storyline:
            "After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls, Danvers begins to discover there's more to her past. With help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the truth.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYjYxMTEyNjctMDk4MS00ZGYyLWFkYmQtMjMwYjg0YmU2NmIzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 5,
        title: "The Incredible Hulk",
        releaseYear: "1977",
        duration: "840",
        price: 99,
        storyline:
            "Dr. David Banner is a brilliant scientist but, one day, a laboratory experiment that he is working on goes terribly awry. Since that time, whenever he is under extreme stress, his body undergoes a transmogrification and he morphs into the Incredible Hulk. The Hulk is about seven feet tall, hugely muscular and powerful, and has bright green skin. After destroying whatever threatens Dr. Banner, he morphs back to normal human form with only amnesia and tattered clothing as evidence of what just transpired. As you can well imagine, this situation is quite troubling for Dr. Banner and causes him a great amount of problems. All the while, he is pursued by Jack McGee, an investigative reporter who believes that the Hulk is a deadly menace whose exposure would enhance his career.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BODc3YTIwY2ItMDU3MS00ZTFlLWJjOTAtNmE4M2M0NWI4MWE1XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 6,
        title: "Avengers: Age of Ultron",
        releaseYear: "2015",
        duration: "141",
        price: 259,
        storyline:
            "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX864_.jpg",
    },
    {
        id: 7,
        title: "Spider-man 2",
        releaseYear: "2004",
        duration: "127",
        price: 199,
        storyline:
            "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
        id: 8,
        title: "Ant-Man and the Wasp",
        releaseYear: "2018",
        duration: "118",
        price: 219,
        storyline:
            "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMzBhZDc0MmUtYjkxMi00NTVjLThiN2QtZTc3NzdiNmYzMGQ3XkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 9,
        title: "Hulk",
        releaseYear: "2003",
        duration: "138",
        price: 179,
        storyline:
            "Bruce is an ordinary Gamma expert who one day gets blasted with radiation and somehow survives. But in the process a monster was born. Now whenever he gets angry he grows bigger and stronger until he is no longer Bruce Banner. He becomes The Hulk",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: 10,
        title: "Spider-man 3",
        releaseYear: "2007",
        duration: "129",
        price: 199,
        storyline:
            "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    },
    {
        id: 11,
        title: "Thor: Ragnarok",
        releaseYear: "2017",
        duration: "130",
        price: 239,
        storyline:
            "Imprisoned on the other side of the universe, the mighty Thor (Chris Hemsworth) finds himself in a deadly gladiatorial contest that pits him against The Incredible Hulk (Mark Ruffalo), his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela (Cate Blanchett) from destroying his home world and the Asgardian civilization.",
        imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_FMjpg_UX1000_.jpg",
    },
];
