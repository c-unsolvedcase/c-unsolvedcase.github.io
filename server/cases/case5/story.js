// Story layer for Case 5: conclusions, board links, chapters, hints, accusation, epilogue.

const meta = {
  id: "case5",
  title: "The Vesper Line",
  tagline: "Aldous Fenn boarded with the truth in a blue ledger. He never arrived.",
  summary:
    "Aldous Fenn, the retired inspector whose evidence was to open the Port Agnes inquiry into the Kingsmere junction crash, was found dead in his locked berth on the overnight Vesper, his heart blamed and his whisky untouched. But the medicine phial by his bed is not the phial his chemist issued, and the blue ledger that held his proof is missing from his briefcase. The Railway Inspectorate has held the train's staff and passengers at Port Agnes. Reopen the night.",
  difficulty: "Expert",
  players: "1–4"
};

// Voices (Kokoro voice ids) used by the voice generator.
const speakers = {
  elinor: { name: "Elinor Marsh", voice: "af_aoede", speed: 0.95 },
  narrator: { name: "Narrator", voice: "bf_emma", speed: 0.95 },
  julian: { name: "Julian Pargeter", voice: "am_eric", speed: 0.95 },
  nell: { name: "Nell Barber", voice: "af_nova", speed: 0.97 },
  hugh: { name: "Hugh Fenn", voice: "am_liam", speed: 1.0 },
  emrys: { name: "Emrys Cole", voice: "am_fenrir", speed: 0.95 },
  vane: { name: "Miriam Vane", voice: "af_kore", speed: 0.95 },
  tallow: { name: "George Tallow", voice: "bm_fable", speed: 0.92 },
  aldous: { name: "Aldous Fenn", voice: "am_michael", speed: 0.92 }
};

const conclusions = {
  c_ledger_gone: {
    title: "The ledger was taken from the berth",
    text: "The briefcase's own index card lists 'Ledger B' among its contents, the diary calls it the whole of the case, and the case itself stands in B4 with a ledger-shaped gap in its dust. The blue ledger was in that briefcase when Fenn boarded, and it was gone before the morning. Somebody took it out of a sleeping-car berth in the night — or out of an empty one, at dinner."
  },
  c_tonic_timeline: {
    title: "The dose was waiting before Fenn went to bed",
    text: "Hold the two finds together and the night rearranges itself. The whisky decanter stands sealed — nothing was dosed into any drink, at midnight or at any other hour. And the tumbler by the bed holds the ghost of exactly one measured dose of the concentrated tincture: Fenn dosed himself, once, from the phial, at the bedtime routine he never varied. The poison was not administered at midnight. It was installed — in the phial, before he came to bed — and he took it at half past ten, from his own hand, behind his own locked door."
  },
  c_errand_false: {
    title: "Pargeter's errand never happened",
    text: "Pargeter told the dining car he was fetching his cigar case from the cloakroom at a quarter past nine. The service chit shows him gone from table 6 for fifteen minutes — and the cigar case itself sits in the cloakroom rack where he left it at dinner, unclaimed the whole night through. The errand was a story. The fifteen minutes were spent somewhere he has not named."
  },
  c_handover: {
    title: "Pargeter handed Nell the wrapped phial",
    text: "A starched dining napkin in the pantry's linen bin carries a phial-shaped damp ring and the smell of the tincture. The steward who was in that pantry — for reasons of his own — saw what the napkin held: at a quarter past nine, Julian Pargeter passed Nell Barber a small bottle wrapped in linen, and an envelope, and she took both the way staff take everything from first class: without looking up."
  },
  c_phial_swap: {
    title: "The phial in the berth is a substitute",
    text: "Fenn's own phial — light glass, Hartley's label, the bottle of six years — lies empty in a linen bin at the corridor's end. The bottle by his bed is a stranger: heavy, unlabelled, and holding a heart tonic at four times the strength his chemist ever made. Somebody exchanged the two, and the exchange needed the berth serviced and empty."
  },
  c_swap: {
    title: "The swap was made at the 21:35 turndown",
    text: "One pair of hands serviced berth B4 that night, and the log names them: Nell Barber, turndown, twenty-five to ten, while Aldous Fenn was still at dinner. In that service the phial in his medicine case became the substitute, the ledger left his briefcase, and a dead man's dose was set out by his bed like a kindness. Whoever's plan it was, the swap itself happened at the turndown — there is no other hour it can have happened."
  },
  c_source: {
    title: "The tincture came from Pargeter's own bottle",
    text: "The analysis is not ambiguous: the bottle in Pargeter's valise and the bottle by Fenn's bed hold one and the same tincture, from one and the same making — a concentrate no chemist dispenses. The substitute phial was filled from the culprit's own stock, in his own berth, by his own hand, before it ever went near the pantry."
  },
  c_confession_false: {
    title: "Hugh's confession cannot be true",
    text: "Every leg of Hugh Fenn's confession breaks against the evidence. The decanter he says he dosed stands sealed to this hour. The dose that killed his uncle was taken at half past ten, two hours before Hugh says he entered the berth — and the spare key he says he used hangs in its cupboard with its paper seal-tag unbroken, initialled and intact. Hugh Fenn was not in B4 at half past midnight. He is lying — and the shape of the lie says he is lying for somebody else."
  },
  c_nell_van: {
    title: "Nell hid the ledger in the mail van",
    text: "The blue ledger lay under sack 14 at the van's rear, in a corner where the loading dust of Kingsmere is undisturbed except by one recent hand. The van was opened once in the night — eight minutes at Harefield, the guard at the side door with his waybill — and three separate records put Nell Barber at that van in those minutes: the guard's own margin note, the fireman's notebook, and her own cover story of cushion linen that was never used. She carried the ledger out of her trolley at Harefield and hid it where she could not be made to hand it over."
  },
  c_accomplice: {
    title: "Nell Barber was Pargeter's accomplice",
    text: "The handover in the pantry, the swap at her turndown, the ledger hidden by her hand at Harefield — and in her cubby drawer, an envelope of a hundred and eighty pounds in new notes, from a man who collects other people's necessities the way other men collect stamps. By her own account at last: a sleeping draught, she was told, and a book to fetch, and a brother's bill she could not pay. Nell Barber did Pargeter's work in the dark, for Pargeter's money, without knowing it was murder until the morning round. She is his accomplice. She is also his second victim, and the case against him runs through her."
  },
  c_fraud: {
    title: "The ledger names the signalling fraud",
    text: "Page by page, in Fenn's patient hand: the junction's safety certificates, copied against the test sheets they claim to summarise — figures altered, failures passed, two of them dated after the crash they should have prevented. Every page carries the same firm's name and the same director's signature. Pargeter Signalling Ltd certified as safe the junction that killed two men, and Aldous Fenn could prove it in the firm's own paper."
  },
  c_motive: {
    title: "Pargeter faced ruin at the inquiry",
    text: "The ledger before the inquiry meant prosecution, disgrace, and the end of Pargeter Signalling and of the name on its door. Fenn would not be bought — his diary says it, his dictaphone says it, his nephew's hopeless row in the corridor says it loudest of all. The hearing opened on Friday. Julian Pargeter had one night, one train, and one pair of borrowed hands."
  },
  c_pargeter_knew: {
    title: "Pargeter knew what Fenn carried",
    text: "He knew the ledger, he knew the hearing, and he knew the man: by his own admission they had 'discussed the inquiry' before the journey, and Fenn's diary records exactly what that discussion was — a warning, plainly given, that the book would be laid before the commission whatever it cost. Pargeter boarded the Vesper knowing what was in the briefcase in B4. He had prepared for it before the train ever moved."
  },
  c_method: {
    title: "How it was done",
    text: "He filled a stranger's phial from his own concentrate, wrapped it in a napkin, and bought the hands of the one person who could enter an empty berth without a question being asked. She set the dose out at the turndown like part of the service. The victim locked his own door, measured his own dose, and slept — and the railway called it his heart, the way it was always meant to. No midnight visitor, no dosed drink, no mark on anyone. Only a bottle that was not his, waiting by his bed."
  },
  c_pargeter_proof: {
    title: "Pargeter ordered the swap that killed Fenn",
    text: "The steward who saw the handover, or the confession he gives when the paper closes round him — either way the chain is unbroken: his concentrate in the substitute phial, his napkin round it, his money in the attendant's drawer, his errand that never happened, and the swap made by the hands he bought at the one hour the berth stood empty. Julian Pargeter killed Aldous Fenn by timetable."
  },
  c_emrys_secret: {
    title: "Emrys's secret is the cellar book",
    text: "The wine tally does not add up because Emrys Cole has been opening the good vintages for himself and writing the bottles off as breakage for a year. That is the whole of his secret: a steward's theft, measured in claret. It explains his presence in the pantry at a quarter past nine better than any loyalty — and it has nothing to do with a medicine phial, except that a man hiding in a cellar sometimes sees what the honest miss."
  },
  c_train_fixed: {
    title: "The train's night is fixed by its own records",
    text: "The driver's register and the locomotive's clock card agree to the minute: Kingsmere at 21:05, Millbeck for two minutes at 22:47, the tunnel at speed past midnight, Harefield from 03:05 to 03:20, and no other stop, scheduled or otherwise, in the whole of the night. Nobody boarded the Vesper and nobody left her between the termini. Whatever was done to Aldous Fenn was done by somebody who was already aboard — and every claimed movement can now be tested against a night that no longer moves."
  },
  c_tallow_clear: {
    title: "Tallow slept after the stop, not during it",
    text: "The guard's bunk, his cold tea, and an alarm clock set for ten past four tell their own plain story: George Tallow dozed for fifty minutes after the Harefield exchange was complete and the van sealed again. His sleep covers nothing, hides nobody, and explains no part of the night — except why a proud man has been so eager to say he never closed his eyes."
  }
};

// Board links. Each pair is order-independent. A pair not listed here is simply unproven.
function L(a, b, gives) { return { pair: [a, b], gives }; }
const links = [
  L("case_index", "fenn_diary", "c_ledger_gone"),
  L("case_index", "dictaphone", "c_ledger_gone"),
  L("sealed_decanter", "tumbler_test", "c_tonic_timeline"),
  L("uv_berth_fibres", "s_vane_dose", "c_tonic_timeline"),
  L("tumbler_test", "s_vane_dose", "c_tonic_timeline"),
  L("sealed_decanter", "s_hugh_draft", "c_tonic_timeline"),
  L("cigar_case", "dinner_chit", "c_errand_false"),
  L("dinner_chit", "s_pargeter_errand", "c_errand_false"),
  L("pantry_napkin", "s_emrys_napkin", "c_handover"),
  L("s_emrys_napkin", "c_errand_false", "c_handover"),
  L("medicine_phial", "genuine_phial", "c_phial_swap"),
  L("medicine_phial", "turndown_log", "c_phial_swap"),
  L("genuine_phial", "pantry_napkin", "c_phial_swap"),
  L("c_phial_swap", "turndown_log", "c_swap"),
  L("c_handover", "turndown_log", "c_swap"),
  L("s_nell_admits", "c_phial_swap", "c_swap"),
  L("source_bottle", "medicine_phial", "c_source"),
  L("source_bottle", "tumbler_test", "c_source"),
  L("c_tonic_timeline", "s_hugh_confession", "c_confession_false"),
  L("spare_key", "s_hugh_confession", "c_confession_false"),
  L("sealed_decanter", "s_hugh_confession", "c_confession_false"),
  L("the_ledger", "van_tally", "c_nell_van"),
  L("the_ledger", "fireman_notebook", "c_nell_van"),
  L("linen_parcel", "van_tally", "c_nell_van"),
  L("s_hugh_retracts", "the_ledger", "c_nell_van"),
  L("c_nell_van", "money_envelope", "c_accomplice"),
  L("c_handover", "money_envelope", "c_accomplice"),
  L("s_nell_admits", "money_envelope", "c_accomplice"),
  L("c_swap", "s_nell_admits", "c_accomplice"),
  L("the_ledger", "fenn_diary", "c_fraud"),
  L("the_ledger", "dictaphone", "c_fraud"),
  L("c_fraud", "dictaphone", "c_motive"),
  L("c_fraud", "fenn_diary", "c_motive"),
  L("fenn_diary", "s_pargeter_fenn", "c_pargeter_knew"),
  L("dictaphone", "s_pargeter_fenn", "c_pargeter_knew"),
  L("c_swap", "c_source", "c_method"),
  L("c_swap", "c_handover", "c_method"),
  L("c_tonic_timeline", "c_swap", "c_method"),
  L("s_emrys_napkin", "c_swap", "c_pargeter_proof"),
  L("s_pargeter_confession", "c_swap", "c_pargeter_proof"),
  L("c_handover", "c_method", "c_pargeter_proof"),
  L("c_source", "c_accomplice", "c_pargeter_proof"),
  L("wine_ledger", "s_emrys_wine", "c_emrys_secret"),
  L("wine_ledger", "dinner_chit", "c_emrys_secret"),
  L("train_register", "clock_card", "c_train_fixed"),
  L("train_register", "van_seal", "c_train_fixed"),
  L("tallow_bunk", "s_tallow_dozed", "c_tallow_clear"),
  L("tallow_bunk", "train_register", "c_tallow_clear")
];

const chapters = [
  {
    id: "c1",
    title: "The Berth at B4",
    scenes: ["berth"],
    suspects: ["nell", "vane"],
    question: "How was Aldous Fenn dosed — and what is missing from his berth?",
    goals: ["c_ledger_gone", "c_tonic_timeline"],
    intro: {
      speaker: "elinor",
      text: "Detectives, I am Elinor Marsh; the Railway Inspectorate sends me, and the railway sends its regrets. Aldous Fenn served this line for forty years and was carrying its conscience to Port Agnes in a blue ledger. He was found in his berth at ten past six, his door locked, his heart blamed, and Dr. Vane — who was called to certify him — has handed me his medicine phial with the air of a woman handing over a loaded gun. Start in B4. Everything is as the morning round left it."
    },
    hints: [
      "The whisky was his nightcap for six years, and nobody touched it. Look at the seal before you look anywhere else.",
      "The tumbler by the bed held exactly one measure of something. The analyst's bench can say of what — and one measure of it is a routine, not a visit.",
      "Put the sealed decanter and the tumbler's residue together: the dose was never poured at midnight. It was waiting."
    ]
  },
  {
    id: "c2",
    title: "The Dining Car",
    scenes: ["berth", "dining"],
    suspects: ["nell", "vane", "emrys", "julian"],
    question: "Who left the dining car at a quarter past nine — and what passed between them?",
    goals: ["c_errand_false", "c_handover"],
    intro: {
      speaker: "elinor",
      text: "The dining car, detectives — the one lit room on a dark train, where everybody's evening is written down in chits and tallies by people who notice nothing else. Fenn dined there until five to ten. So did the man at table six, except for fifteen minutes he has accounted for with a story about a cigar case. Ask the room what it remembers. Rooms on trains remember everything."
    },
    hints: [
      "A cigar case in a cloakroom rack is a patient witness: it can tell you whether anyone ever came for it.",
      "The pantry keeps its own linen, and its linen keeps what was wrapped in it. Smell is evidence too.",
      "The steward was somewhere he should not have been at a quarter past nine. That is exactly why he saw what he saw — be gentle with his secret and he will be generous with yours."
    ]
  },
  {
    id: "c3",
    title: "The Sleeping Car",
    scenes: ["berth", "dining", "sleeper"],
    suspects: ["nell", "vane", "emrys", "julian", "hugh"],
    question: "Who serviced berth B4 that night — and whose bottle was it?",
    goals: ["c_swap", "c_source"],
    intro: {
      speaker: "elinor",
      text: "The sleeping car, detectives: a corridor of locked doors, one attendant's cubby, and a log that records every service in a careful hand. Fenn's berth was serviced exactly once that night, at twenty-five to ten, by the only person aboard who could enter it without a question. And in berth A2, under seal, sits a valise whose owner swears he never left his table. Let us see what the valise swears."
    },
    hints: [
      "A turndown is a service with a paper trail: the log records whose hands were in B4, and when.",
      "Fenn's own phial had to go somewhere. Things thrown away on a train are thrown away close — look in the linen.",
      "Two bottles, one tincture. The analyst can marry them; then ask whose travelling stock they came from."
    ]
  },
  {
    id: "c4",
    title: "The Mail Van",
    scenes: ["berth", "dining", "sleeper", "mailvan"],
    suspects: ["nell", "vane", "emrys", "julian", "hugh", "tallow"],
    question: "Where is the blue ledger — and who put it there?",
    goals: ["c_nell_van", "c_fraud"],
    intro: {
      speaker: "elinor",
      text: "The mail van, detectives — forty-one sacks, one guard, and a door that opened exactly once in the night, for eight minutes at Harefield, in the small hours. The blue ledger left a briefcase in the sleeping car and travelled. Vans keep tallies the way dining cars keep chits: in ink, by men who count for a living. Count with them."
    },
    hints: [
      "Loading dust settles on everything loaded at Kingsmere alike. What was placed later sits cleaner — and further back.",
      "The guard wrote more than the sacks in his waybill. Read his margins; tired men confess in margins.",
      "Her errand at the van was cushion linen. Find the parcel, and ask whether the cushions ever wanted it."
    ]
  },
  {
    id: "c5",
    title: "The Footplate",
    scenes: ["berth", "dining", "sleeper", "mailvan", "cab"],
    suspects: ["nell", "vane", "emrys", "julian", "hugh", "tallow"],
    question: "A confession is on the table. Is it true?",
    goals: ["c_confession_false", "c_method", "c_motive"],
    intro: {
      speaker: "elinor",
      text: "Two things remain, detectives. The footplate keeps the night's own clock, and I want this train's hours fixed by its records before anyone else speaks. And young Mr. Fenn has been sitting in the brake van since Port Agnes asking to make a statement — a full statement, he says, with his name signed to it. Fix the night first. Then hear him, and test every word of it against the board."
    },
    hints: [
      "A train is a clock that weighs two hundred tons. The register and the clock card cannot both be argued with.",
      "A confession is a story like any other: it stands on its legs — a vehicle, an hour, a key — or it falls. Test the legs.",
      "He says he used the spare key. The key hangs in its cupboard, and paper seals do not lie about being unbroken."
    ]
  },
  {
    id: "c6",
    title: "Name the Culprit",
    scenes: ["berth", "dining", "sleeper", "mailvan", "cab"],
    suspects: ["nell", "vane", "emrys", "julian", "hugh", "tallow"],
    question: "Who ordered the dose, why, how — and what proves it?",
    goals: [],
    intro: {
      speaker: "elinor",
      text: "That is everything the Vesper can tell you. Decide together: culprit, motive, method and proof. One man on this train bought another person's hands and another person's conscience, and arranged for an old man's own habits to do the rest. Aldous Fenn carried the truth forty years and one night. Carry it the last few yards for him."
    },
    hints: [
      "One man prepared the bottle, invented the errand, and faced the inquiry on Friday. The hands were borrowed. The plan was not.",
      "Show Pargeter the paper one piece at a time — his own bottle first, the steward's eyes second. Men who buy silence are never ready for witnesses.",
      "Name Julian Pargeter. For proof, use the conclusion that joins the steward's sighting, or his own confession, to the swap at the turndown."
    ]
  }
];

const accusation = {
  culprits: ["julian", "nell", "hugh", "emrys", "vane", "tallow"],
  motives: [
    { id: "m_hearing", text: "To stop Fenn's ledger reaching the inquiry and naming his firm's false certificates." },
    { id: "m_inherit", text: "To come into the Fenn family shares before the inquiry could devalue them." },
    { id: "m_debts", text: "To silence a creditor who had found the letters about his debts." },
    { id: "m_quarrel", text: "A quarrel over precedence and seating in the dining car that night." }
  ],
  methods: [
    { id: "x_swap", text: "He had the berth phial swapped for a concentrated tincture at the evening turndown." },
    { id: "x_decanter", text: "He dosed Fenn's whisky decanter in the berth at midnight." },
    { id: "x_dinner", text: "He poisoned Fenn's brandy in the dining car during dinner." },
    { id: "x_flue", text: "He blocked the berth stove's flue so the fumes would do the work in the night." }
  ],
  answer: {
    culprit: "julian",
    motive: "m_hearing",
    method: "x_swap",
    proofs: ["c_pargeter_proof", "c_method"]
  }
};

const epilogue = {
  truth:
    "Julian Pargeter signed certificates for a junction he had never tested, and two men died under a goods train for it. When Aldous Fenn — who had inspected that junction for forty years — assembled the proof in a blue ledger and refused, courteously and completely, to be bought, Pargeter prepared the only argument left to him. He filled a stranger's phial from his own concentrate, wrapped it in a dining napkin, and at a quarter past nine on the Vesper he bought Nell Barber's hands with a story about a sleeping draught and an envelope for her brother's bill. At the turndown she set the dose beside Fenn's bed like part of the service, and took the ledger he had sent her for. Fenn locked his own door, measured his own tonic at half past ten, and slept; the railway called it his heart. Nell, who could neither hand the book over nor burn it, hid it in the mail van at Harefield like a letter she could not send — and Hugh Fenn, who had seen just enough of her night to be sure of the worst, tried to carry the whole crime for her in a confession that the sealed decanter, the unbroken key-tag and the train's own clock tore to pieces between them. The ledger went before the inquiry on the Friday, as its author intended. It simply went without him.",
  results: {
    5: "A perfect case. Julian Pargeter is taken from the train he rode in such comfort into a cell with no timetable out of it, the ledger is read into the inquiry's record on its first morning, and Nell Barber — whose evidence convicted the man who bought her — gives it freely, and is believed.",
    4: "Pargeter is arrested on the evidence of the night. A loose end or two will occupy the Inspectorate's lawyers, but the ledger has gone before the inquiry, and the right man answers for the phial.",
    3: "You named the right culprit, but the case was thin. Pargeter's counsel will make the Inspectorate fight for every star you lost.",
    2: "Part of your case held up, but the accusation fell apart. The Vesper keeps its timetable, and its secret, a while longer.",
    1: "The accusation failed. The file closes again, and the night mail runs on time into the dark."
  }
};

// Two independent paths to the key proof (validator section 7): the proof must
// survive losing the steward's eyewitness testimony (confession path) and
// losing Pargeter's confession (eyewitness path).
const fairness = { proof: "c_pargeter_proof", paths: [["s_emrys_napkin"], ["s_pargeter_confession"]] };


// Live twist: a scripted interlude surfaced by the engine when the party
// enters chapter 4. It grants one colour-only testimony — nothing
// references it in any requires, link or goal, so no proof path depends on it.
const twists = [
  { chapter: 3, speaker: "elinor", text: "A message has just been handed up from the Millbeck platform. Guard Tallow has remembered an item from the night of the Vesper that went into no report — a glove, of all things. It is on the board.", testimony: "s_tallow_glove", feed: "Tallow remembered a glove from that night." }
];

module.exports = { meta, speakers, conclusions, links, chapters, accusation, epilogue, fairness, twists };
