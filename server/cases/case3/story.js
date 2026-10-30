// Story layer for Case 3: conclusions, board links, chapters, hints, accusation, epilogue.

const meta = {
  id: "case3",
  title: "The Final Act",
  tagline: "They said the rope was worn. The rope says otherwise.",
  summary:
    "Margot Ellery, the Halvard Theatre's leading lady for thirty years, was killed on the closing night of The Glass Duchess when a counterweight fell into the wings. The theatre called it a worn rope and an old building. The board's chair has now seen the rope. Reopen the file.",
  difficulty: "Medium",
  players: "1–4"
};

// Voices (Kokoro voice ids) used by the voice generator.
const speakers = {
  bea: { name: "Beatrice Halloran", voice: "bf_lily", speed: 0.95 },
  narrator: { name: "Narrator", voice: "bf_emma", speed: 0.95 },
  felix: { name: "Felix Ardell", voice: "bm_george", speed: 0.92 },
  ruben: { name: "Ruben Voss", voice: "am_onyx", speed: 0.95 },
  kit: { name: "Kit Sorrell", voice: "af_jessica", speed: 1.0 },
  rose: { name: "Rose Delgado", voice: "bf_alice", speed: 0.95 },
  petra: { name: "Petra Vane", voice: "af_river", speed: 0.97 },
  margot: { name: "Margot Ellery", voice: "af_kore", speed: 0.95 }
};

const conclusions = {
  c_rope_cut: {
    title: "The rope was cut, not worn",
    text: "The parted fibres of fly rope 7 were sliced clean with a blade and then frayed. No honest wear cuts half a rope and frays only the rest."
  },
  c_mark_moved: {
    title: "Felix moved Margot's mark under the rope",
    text: "That week, for the first time in thirty years, Felix re-blocked the Act 2 entrance — so Margot would wait for her cue standing directly under fly line 7."
  },
  c_window: {
    title: "The rope was cut in the empty hours",
    text: "Between the matinee crew leaving and the evening crew arriving, the fly gallery stood empty — and one visitor signed the ladder log: F.A., 18:12."
  },
  c_theft: {
    title: "The heritage costumes were sold off",
    text: "Fourteen pieces of the Halvard's heritage collection were sold to a dealer as 'duplicates', about £41,000 worth, every sale countersigned by the director."
  },
  c_margot_knew: {
    title: "Margot had the proof, and meant to use it",
    text: "Petra's missing list, the dealer catalogue in Margot's own hand, an unsent letter to the board: Margot had Felix, and the board would hear it on Monday."
  },
  c_motive: {
    title: "Felix faced ruin",
    text: "If the costume sales came out, Felix Ardell faced prison and the end of the only life he has. Margot was going to make them come out."
  },
  c_row: {
    title: "Margot confronted Felix that evening",
    text: "At half past five on the closing day, behind the office door, Margot told Felix to his face what she had — and Rose heard enough through the wall."
  },
  c_lie_flies: {
    title: "Felix lied about the flies",
    text: "He swore he never went near the fly gallery that day. The ladder log carries his initials at ten past six, in his own hand."
  },
  c_ruben_cleared: {
    title: "Ruben's lies hid a bottle, not a killing",
    text: "Ruben signed in at 18:34, drank, signed the inspection he never did, and slept. He never climbed the ladder before the show — he could not have cut a rope he never went near."
  },
  c_felix_flies: {
    title: "Felix was in the flies, and cut the rope",
    text: "His initials in the ladder log, the empty hours, the cut fibres, and what was seen from the prompt corner put Felix Ardell on the fly gallery with a knife in his hand."
  },
  c_method: {
    title: "How it was done",
    text: "Hours before the show he cut the rope halfway through, and moved her mark beneath it. Physics did the rest, in front of four hundred people, while he watched from his box."
  }
};

// Board links. Each pair is order-independent. A pair not listed here is simply unproven.
function L(a, b, gives) { return { pair: [a, b], gives }; }
const links = [
  L("fallen_rope", "sandbag", "c_rope_cut"),
  L("uv_chalk_dust", "rope_offcut", "c_rope_cut"),
  L("fallen_rope", "rope_offcut", "c_rope_cut"),
  L("sandbag", "rope_offcut", "c_rope_cut"),
  L("blocking_bible", "annotated_script", "c_mark_moved"),
  L("cue_sheet", "annotated_script", "c_mark_moved"),
  L("ladder_log", "door_log", "c_window"),
  L("ladder_log", "inspection_book", "c_window"),
  L("ladder_log", "gallery_chalk", "c_window"),
  L("sales_invoices", "dealer_catalogue", "c_theft"),
  L("sales_invoices", "petra_list", "c_theft"),
  L("sales_invoices", "key_log", "c_theft"),
  L("mending_book", "empty_rails", "c_theft"),
  L("board_letter", "dictaphone", "c_margot_knew"),
  L("board_letter", "petra_list", "c_margot_knew"),
  L("dictaphone", "dealer_catalogue", "c_margot_knew"),
  L("petra_list", "s_petra_told", "c_margot_knew"),
  L("c_theft", "c_margot_knew", "c_motive"),
  L("c_theft", "c_row", "c_motive"),
  L("box_office_diary", "dictaphone", "c_row"),
  L("box_office_diary", "s_rose_heard", "c_row"),
  L("ladder_log", "s_felix_statement", "c_lie_flies"),
  L("hip_flask", "s_kit_ruben", "c_ruben_cleared"),
  L("door_log", "s_kit_ruben", "c_ruben_cleared"),
  L("hip_flask", "door_log", "c_ruben_cleared"),
  L("s_kit_saw", "ladder_log", "c_felix_flies"),
  L("s_kit_saw", "c_rope_cut", "c_felix_flies"),
  L("s_felix_confession", "ladder_log", "c_felix_flies"),
  L("s_felix_confession", "c_rope_cut", "c_felix_flies"),
  L("c_lie_flies", "c_rope_cut", "c_felix_flies"),
  L("c_rope_cut", "c_mark_moved", "c_method"),
  L("c_mark_moved", "c_felix_flies", "c_method"),
  L("c_rope_cut", "c_felix_flies", "c_method")
];

const chapters = [
  {
    id: "c1",
    title: "The Night It Fell",
    scenes: ["stage"],
    suspects: ["felix", "ruben"],
    question: "Did that rope really wear through?",
    goals: ["c_rope_cut"],
    intro: {
      speaker: "bea",
      text: "Detectives, I am Beatrice Halloran; I chair this theatre's board. On the closing night of The Glass Duchess a counterweight fell into the wings and killed Margot Ellery, our leading lady of thirty years. We were told the rope was worn. I have since looked at the rope, and I do not believe it. Start on the stage, where she stood. Everything is as it was left."
    },
    hints: [
      "Look at what fell, and what it fell from. The weight is still lying in the wing.",
      "The parted rope needs the lab. Fibres remember how they were parted.",
      "Link the examined rope with the fallen weight on the board."
    ]
  },
  {
    id: "c2",
    title: "The Leading Lady's Room",
    scenes: ["stage", "dressing"],
    suspects: ["felix", "ruben", "kit"],
    question: "What had Margot found out — and where was she told to stand?",
    goals: ["c_margot_knew", "c_mark_moved"],
    intro: {
      speaker: "bea",
      text: "Margot kept her dressing room like a captain's cabin, and her counsel like a confession. Her room is open to you now. And ask yourselves, while you are in it, who told her where to stand that night — that entrance was thirty years old, and somebody changed it."
    },
    hints: [
      "Margot wrote everything down. Look for her letter, her catalogue, and the little machine she talked to.",
      "Her script is annotated in two hands. One of them moved her mark this week.",
      "Link the board letter with the dictaphone, and her script with the director's blocking bible from the prompt corner."
    ]
  },
  {
    id: "c3",
    title: "Up in the Flies",
    scenes: ["stage", "dressing", "flies"],
    suspects: ["felix", "ruben", "kit", "rose"],
    question: "Who went up the ladder — and who never did?",
    goals: ["c_lie_flies", "c_ruben_cleared"],
    intro: {
      speaker: "bea",
      text: "The fly gallery, detectives. Ruben Voss has run it for eleven years and he is frightened half to death, which is not the same as guilty. Somebody signed that ladder log who had no business up there, and somebody's signature on an inspection is worth less than the paper. Find out whose."
    },
    hints: [
      "The fly crew sign the ladder log, every climb, every day. Directors do not. Read it.",
      "Ruben's inspection book says 'all sound'. Ask what else Ruben was doing at twenty to seven — look behind the paint tins.",
      "Link the ladder log with Felix's sworn statement; link the flask with what Kit tells you about Ruben."
    ]
  },
  {
    id: "c4",
    title: "The Paper Trail",
    scenes: ["stage", "dressing", "flies", "boxoffice", "store"],
    suspects: ["felix", "ruben", "kit", "rose", "petra"],
    question: "Where did the costumes go?",
    goals: ["c_theft", "c_row"],
    intro: {
      speaker: "bea",
      text: "Now the paper, detectives. The box office keeps what the box office keeps, and Petra Vane keeps the wardrobe like a religion. If costumes walked out of this theatre, somebody signed for them, and somebody noticed the empty hangers. Follow the signatures."
    },
    hints: [
      "Fourteen heritage costumes are missing. The invoices call them 'duplicates'. Ask who countersigned them.",
      "Rose keeps a desk diary, and the box-office wall is thin. She heard the closing-day row; her diary was written before anyone knew it mattered.",
      "Link the sales invoices with the dealer catalogue, and Rose's diary with Margot's dictaphone."
    ]
  },
  {
    id: "c5",
    title: "Name the Culprit",
    scenes: ["stage", "dressing", "flies", "boxoffice", "store"],
    suspects: ["felix", "ruben", "kit", "rose", "petra"],
    question: "Who cut the rope, why, how — and what proves it?",
    goals: [],
    intro: {
      speaker: "bea",
      text: "That is everything this old theatre can tell you. Decide together: culprit, motive, method and proof. Margot gave this house thirty years. Give her the truth in return, and be sure of it."
    },
    hints: [
      "One man signed the ladder log in the empty hours, sold the costumes, and moved her mark. The bottle explains Ruben; nothing explains Felix.",
      "Ask Kit kindly — fear kept that story in for months. Show Felix the paper one piece at a time; paper does not panic, but he will.",
      "Name Felix Ardell. For proof, use the conclusion that puts him in the flies with the knife."
    ]
  }
];

const accusation = {
  culprits: ["felix", "ruben", "kit", "rose", "petra"],
  motives: [
    { id: "m_sales", text: "To stop Margot exposing the heritage-costume sales." },
    { id: "m_bottle", text: "To hide that he had been drinking on duty." },
    { id: "m_casting", text: "A grudge over a casting decision." },
    { id: "m_loan", text: "Money owed to Margot from an old loan." }
  ],
  methods: [
    { id: "x_cut", text: "He cut the fly rope hours before the show, so the weight would fall on her mark during Act 2." },
    { id: "x_worn", text: "The rope was old and parted on its own — a plain accident." },
    { id: "x_dropped", text: "The flyman dropped the weight from the gallery by hand during Act 2." },
    { id: "x_rail", text: "She was struck at the fly rail during the interval and left in the wing." }
  ],
  answer: {
    culprit: "felix",
    motive: "m_sales",
    method: "x_cut",
    proofs: ["c_felix_flies", "c_method"]
  }
};

const epilogue = {
  truth:
    "Felix Ardell sold the Halvard's heritage costumes piece by piece for three years, and when Petra Vane's list reached Margot Ellery, Margot gave him until Monday to face the board. Felix could not face it. On the closing day he climbed to the empty fly gallery at ten past six, signed the ladder log out of a lifetime's habit, and cut fly rope 7 halfway through. He had already moved Margot's mark that week, so she would wait for her cue beneath it. The rope held through the first act and frayed through the second, and the weight fell at twenty to eight in front of four hundred people, while the man who cut it watched from his box. Ruben Voss's bottle and Felix's initials were the two secrets in the flies that night — and only one of them was a crime.",
  results: {
    5: "A perfect case. Felix Ardell is arrested before the Sunday matinee, Petra's list is read to the board, and the Halvard will play Margot's farewell season in her name.",
    4: "Felix Ardell is arrested. A loose end or two will keep the lawyers busy, but the right man is in custody and the costumes are coming home.",
    3: "You named the right culprit, but the case was thin. Felix's counsel will make the board sweat for every star you lost.",
    2: "Part of your case held up, but the accusation fell apart. The flies keep their secret a while longer.",
    1: "The accusation failed. The file closes again, and the worn-rope story stands."
  }
};

// Two independent paths to the key proof (validator section 7): the proof must
// survive losing Kit's eyewitness testimony (confession path) and losing
// Felix's confession (eyewitness path).
const fairness = { proof: "c_felix_flies", paths: [["s_kit_saw"], ["s_felix_confession"]] };


// Live twist: a scripted interlude surfaced by the engine when the party
// enters chapter 3. It grants one colour-only testimony — nothing
// references it in any requires, link or goal, so no proof path depends on it.
const twists = [
  { chapter: 2, speaker: "bea", text: "Hold on — word from the stage door. Ruben Voss tried to slip out with his bag packed not ten minutes ago. I have asked him to stay, and he has agreed — but you should hear what he said at the door. It is on the board.", testimony: "s_ruben_door", feed: "Ruben tried to leave the theatre." }
];

module.exports = { meta, speakers, conclusions, links, chapters, accusation, epilogue, fairness, twists };
