// Story layer for Case 2: conclusions, board links, chapters, hints, accusation, epilogue.

const meta = {
  id: "case2",
  title: "The Meridian Fall",
  tagline: "The report says she fell on the stairs. The roof says otherwise.",
  summary:
    "Helen Marlowe, historian of the Grand Meridian Hotel, was found at the foot of the service stairs after the centenary gala, and her death was ruled an accident. A rain-spotted page from her notebook has now been found in a roof-terrace planter. Reopen the file.",
  difficulty: "Easy+",
  players: "1–4"
};

// Voices (Kokoro voice ids) used by the voice generator.
const speakers = {
  ada: { name: "Ada Whitlock", voice: "bf_isabella", speed: 0.95 },
  narrator: { name: "Narrator", voice: "bf_emma", speed: 0.95 },
  daniel: { name: "Daniel Okoye", voice: "am_adam", speed: 0.95 },
  tessa: { name: "Tessa Wren", voice: "af_bella", speed: 1.0 },
  priya: { name: "Priya Nair", voice: "af_sarah", speed: 0.95 },
  walter: { name: "Walter Grieves", voice: "bm_fable", speed: 0.9 },
  helen: { name: "Helen Marlowe", voice: "af_heart", speed: 0.95 }
};

const conclusions = {
  c_refund_fraud: {
    title: "Helen found a refund fraud",
    text: "Sixty-three refunds over two years, every one authorised with code N2, and the money never reached the guests."
  },
  c_code_daniel: {
    title: "Code N2 is Daniel's",
    text: "The staff rota and Daniel's own words agree: N2 is the night manager's personal authorisation code. Only Daniel could have entered those refunds."
  },
  c_motive: {
    title: "Daniel had a motive",
    text: "Daniel stood to be exposed as the thief, and lose everything, if Helen told the owner in the morning."
  },
  c_helen_confront: {
    title: "Helen meant to confront Daniel that night",
    text: "Her memo, her draft chapter and her packed case agree: she was going to talk to Daniel kindly that night, then tell Ada in the morning."
  },
  c_lie_call: {
    title: "Daniel lied about the phone call",
    text: "He swore he never spoke to Helen that night, but the desk phone log shows a call from the front desk to her suite at 02:10."
  },
  c_lie_desk: {
    title: "Daniel lied about staying at the desk",
    text: "He said he never left the front desk. The service lift moved at 02:47 on his own card, N2."
  },
  c_daniel_lied: {
    title: "Daniel's account of the night is false",
    text: "The call he denied, the desk he never left: his whole story of that night was invented."
  },
  c_daniel_left_desk: {
    title: "Daniel left the desk that night",
    text: "Terrace door timings and a lift ride on card N2 put the night manager away from his desk in the small hours."
  },
  c_helen_terrace: {
    title: "Helen was on the roof terrace that night",
    text: "Her reading glasses under the terrace bench and terrace gravel in her shoe: Helen was on the roof, not just the stairs."
  },
  c_fall_terrace: {
    title: "Helen fell on the terrace, not the stairs",
    text: "A fresh chip in the terrace planter at head height, her cardigan fibres in it, and not one grain of gravel on the swept stairs: the fall happened on the roof."
  },
  c_staged: {
    title: "The staircase fall was staged",
    text: "A fall on the roof, a body at the foot of the stairs, and a mopped landing: someone carried her down and arranged an accident."
  },
  c_daniel_terrace: {
    title: "Daniel was on the terrace with Helen",
    text: "The lift log, his code, and what Priya saw put Daniel Okoye on the roof terrace with Helen that night."
  },
  c_method: {
    title: "How it happened",
    text: "Helen fell against the terrace planter during the argument, and Daniel carried her down and staged a fall on the service stairs."
  },
  c_tessa_cleared: {
    title: "Tessa's secret is a comped room",
    text: "Tessa gave her brother the garden room for two nights and logged it as maintenance. It is a sacking offence, not a killing."
  },
  c_walter_cleared: {
    title: "Walter left the terrace before Helen",
    text: "Walter was gone from the roof by 02:20, ten minutes before Helen arrived. His secret is a cigarette, not a crime scene."
  }
};

// Board links. Each pair is order-independent. A pair not listed here is simply unproven.
function L(a, b, gives) { return { pair: [a, b], gives }; }
const links = [
  L("notebook_page", "refund_book", "c_refund_fraud"),
  L("refund_book", "desk_drawer", "c_refund_fraud"),
  L("notebook_page", "desk_drawer", "c_refund_fraud"),
  L("refund_book", "rota_card", "c_code_daniel"),
  L("refund_book", "s_daniel_code", "c_code_daniel"),
  L("notebook_page", "s_daniel_code", "c_code_daniel"),
  L("c_refund_fraud", "c_code_daniel", "c_motive"),
  L("voice_memo", "centenary_draft", "c_helen_confront"),
  L("voice_memo", "packed_case", "c_helen_confront"),
  L("centenary_draft", "notebook_page", "c_helen_confront"),
  L("desk_phone_log", "s_daniel_no_call", "c_lie_call"),
  L("lift_log", "s_daniel_desk", "c_lie_desk"),
  L("door_log", "s_daniel_desk", "c_lie_desk"),
  L("c_lie_call", "c_lie_desk", "c_daniel_lied"),
  L("lift_log", "door_log", "c_daniel_left_desk"),
  L("lift_log", "rota_card", "c_daniel_left_desk"),
  L("glasses_found", "glasses_case", "c_helen_terrace"),
  L("glasses_found", "evening_shoes", "c_helen_terrace"),
  L("glasses_case", "evening_shoes", "c_helen_terrace"),
  L("terrace_planter", "stairs_carpet", "c_fall_terrace"),
  L("uv_terrace_smear", "rail_fibre", "c_fall_terrace"),
  L("terrace_planter", "c_helen_terrace", "c_fall_terrace"),
  L("evening_shoes", "stairs_carpet", "c_fall_terrace"),
  L("c_fall_terrace", "c_helen_terrace", "c_staged"),
  L("c_fall_terrace", "fire_register", "c_staged"),
  L("s_priya_saw", "c_daniel_left_desk", "c_daniel_terrace"),
  L("s_priya_saw", "c_code_daniel", "c_daniel_terrace"),
  L("s_daniel_confession", "c_daniel_left_desk", "c_daniel_terrace"),
  L("s_daniel_confession", "c_helen_terrace", "c_daniel_terrace"),
  L("c_fall_terrace", "c_staged", "c_method"),
  L("c_staged", "c_daniel_terrace", "c_method"),
  L("s_tessa_comp", "guest_register", "c_tessa_cleared"),
  L("s_tessa_comp", "rota_card", "c_tessa_cleared"),
  L("s_walter_admitted", "cigarette_tin", "c_walter_cleared"),
  L("s_walter_admitted", "complaint_card", "c_walter_cleared")
];

const chapters = [
  {
    id: "c1",
    title: "The Fall on the Stairs",
    scenes: ["lobby"],
    suspects: ["daniel", "tessa"],
    question: "What had Helen found in the hotel's books?",
    goals: ["c_refund_fraud"],
    intro: {
      speaker: "ada",
      text: "Detectives, thank you for coming. Helen Marlowe was writing this hotel's centenary book when she was found at the foot of the service stairs. The coroner called it an accident. Last week my gardener found a page of her notebook in a terrace planter, and I stopped believing that. Start in the lobby. Be thorough, and be kind to my staff."
    },
    hints: [
      "The notebook page is rain-spotted and unreadable. Whoever holds the Analyst role can run it through the lab.",
      "The page talks about refunds. Where would refunds be kept in a hotel lobby?",
      "Link the cleaned notebook page with the refund book on the board."
    ]
  },
  {
    id: "c2",
    title: "Her Last Evening",
    scenes: ["lobby", "suite"],
    suspects: ["daniel", "tessa", "priya"],
    question: "What did Helen plan to do about it?",
    goals: ["c_helen_confront", "c_code_daniel"],
    intro: {
      speaker: "ada",
      text: "So she had found something rotten in my books, in my hotel. I want to know what she intended to do about it, and whose code that was. Her suite is as she left it. Go up."
    },
    hints: [
      "Helen recorded voice memos to herself. Her phone is in the suite.",
      "Whose code is N2? The rota card behind the desk says who held which code.",
      "Link the voice memo with the centenary draft, and the refund book with the rota card."
    ]
  },
  {
    id: "c3",
    title: "The Roof Terrace",
    scenes: ["lobby", "suite", "corridor", "terrace"],
    suspects: ["daniel", "tessa", "priya", "walter"],
    question: "Did she really fall on the stairs?",
    goals: ["c_helen_terrace", "c_fall_terrace"],
    intro: {
      speaker: "ada",
      text: "The stairs never sat right with me. Helen was careful, and she knew every step of this house. Take the service corridor and the roof terrace. If she was up there that night, I want it proved, not guessed."
    },
    hints: [
      "Her reading glasses are not in her suite. Where would a woman take her glasses off, or lose them, up high?",
      "The planter on the terrace needs the lab. And look at what is, and is not, on the swept stairs.",
      "Link the glasses from the terrace with the empty case in her suite, and the planter with the stairs carpet."
    ]
  },
  {
    id: "c4",
    title: "Name the Culprit",
    scenes: ["lobby", "suite", "corridor", "terrace"],
    suspects: ["daniel", "tessa", "priya", "walter"],
    question: "Who was with her, why, how, and what proves it?",
    goals: [],
    intro: {
      speaker: "ada",
      text: "That is everything this old house can tell you. Decide together: culprit, motive, method and proof. Helen was my friend for thirty years. Get it right."
    },
    hints: [
      "Everyone here has a secret. Only one secret is about money, a telephone call and a lift ride at 02:47.",
      "Ask Priya kindly, and show Daniel the logs one by one. Paper does not panic; people do.",
      "Name Daniel Okoye. For proof, use the conclusion that places him on the terrace with her."
    ]
  }
];

const accusation = {
  culprits: ["daniel", "tessa", "priya", "walter"],
  motives: [
    { id: "m_fraud", text: "To stop Helen exposing the refund fraud." },
    { id: "m_room", text: "To hide a comped room given to family." },
    { id: "m_debt", text: "A gambling debt Helen was collecting." },
    { id: "m_smoke", text: "A quarrel about smoking on the roof terrace." }
  ],
  methods: [
    { id: "x_terrace", text: "She fell on the roof terrace during the argument; he carried her down and staged a fall on the stairs." },
    { id: "x_stairs", text: "She fell down the service stairs in the dark, alone, by accident." },
    { id: "x_pushed", text: "She was pushed down the service stairs." },
    { id: "x_suite", text: "She was harmed in her suite and moved afterwards." }
  ],
  answer: {
    culprit: "daniel",
    motive: "m_fraud",
    method: "x_terrace",
    proofs: ["c_daniel_terrace", "c_staged"]
  }
};

const epilogue = {
  truth:
    "Helen Marlowe spent the centenary summer in the hotel's old books and found sixty-three refunds that never reached a guest, every one authorised with the night manager's code. She meant to talk to Daniel kindly, then tell Ada in the morning. Daniel phoned her suite at ten past two and asked her to meet him on the roof terrace. They argued beside the planter. She pulled away from his hand, fell, and struck her head on the stone. He carried her down in the service lift, laid her at the foot of the stairs, mopped the landing, and signed the fire register at four with a steady hand. Her glasses stayed under the terrace bench, and a page of her notebook stayed in the planter, until the gardener found it.",
  results: {
    5: "A perfect case. Daniel Okoye is arrested, the guests are repaid, and the centenary book will carry Helen's name, finished by other hands.",
    4: "Daniel Okoye is arrested. A loose end or two will keep the lawyers busy, but the right man is in custody.",
    3: "You named the right culprit, but the case was thin. Daniel's lawyer will make the hotel sweat for every star you lost.",
    2: "Part of your case held up, but the accusation fell apart. The terrace keeps its secret a while longer.",
    1: "The accusation failed. The file closes again, and the stairs keep their story."
  }
};

// Two independent paths to the key proof (validator section 7): the proof must
// survive losing Priya's eyewitness testimony (confession path) and losing
// Daniel's confession (eyewitness path).
const fairness = { proof: "c_daniel_terrace", paths: [["s_priya_saw"], ["s_daniel_confession"]] };


// Live twist: a scripted interlude surfaced by the engine when the party
// enters chapter 3. It grants one colour-only testimony — nothing
// references it in any requires, link or goal, so no proof path depends on it.
const twists = [
  { chapter: 2, speaker: "ada", text: "One moment, detectives — the front desk has just telephoned up. The Room 5 guest, the one who complained of voices at half past two, has remembered something else, and the desk took it down before she checked out. It is on the board.", testimony: "s_guest_voices", feed: "The Room 5 guest came forward with more." }
];

module.exports = { meta, speakers, conclusions, links, chapters, accusation, epilogue, fairness, twists };
