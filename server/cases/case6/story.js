// Story layer for Case 6: conclusions, board links, chapters, hints, accusation, epilogue.
// Master case: two linked crimes, and the only five-part accusation in the game
// (culprit + accomplice + motive + method + proof) — see accusation.accomplices.

const meta = {
  id: "case6",
  title: "The Hollow Crown",
  tagline: "The crown in the case is perfect. That is the problem.",
  summary:
    "On the morning after the gala opening of the Fenwick Museum's Karash Gallery, Dr. Ingrid Sauer — the one scholar alive who had examined the Sun Crown at its acquisition, brought back to certify it before its loan tour — was found dead in the museum's fumigation chamber, a room she had no business to be in. The crown she came to certify still sits in its case, perfect under the lights. Fiona Grant, investigator for the museum's insurers, has sealed the building and kept the staff. Two crimes are tangled together in this museum, detectives, and the second exists only because of the first. Unpick them both.",
  difficulty: "Master",
  players: "1–4"
};

// Voices (Kokoro voice ids) used by the voice generator.
const speakers = {
  fiona: { name: "Fiona Grant", voice: "bf_isabella", speed: 0.95 },
  narrator: { name: "Narrator", voice: "bf_emma", speed: 0.95 },
  vale: { name: "Adrian Vale", voice: "bm_george", speed: 0.92 },
  bea: { name: "Beatrice Lindqvist", voice: "af_nicole", speed: 0.97 },
  feld: { name: "Marcus Feld", voice: "am_liam", speed: 0.95 },
  raman: { name: "Dr. Priya Raman", voice: "af_river", speed: 0.95 },
  herrera: { name: "Tomás Herrera", voice: "am_fenrir", speed: 1.0 },
  greta: { name: "Greta Lindholm", voice: "af_aoede", speed: 0.92 },
  jonas: { name: "Jonas Reber", voice: "bm_daniel", speed: 1.0 },
  ingrid: { name: "Dr. Ingrid Sauer", voice: "af_sky", speed: 0.9 }
};

const conclusions = {
  c_replica: {
    title: "The crown in the case is a replica",
    text: "Set her 2019 notebook beside the thing under the glass and it is not a close question. The garnet she recorded as a natural stone with a smoky fire is a synthetic spinel — the flake in her sample tube proves it in the lab. The alloy she recorded as high-carat native gold is modern nine-carat stock — the microscope's shaving proves that. And the crown weighs three hundred and eighty-eight grams against the four hundred and twelve she weighed with her own hands seven years ago. The Sun Crown of Karash has not been in its case for some time. Something else has been sitting for it."
  },
  c_swap_window: {
    title: "The swap was made in closed week",
    text: "The movement log gives the genuine crown exactly one journey in seven years: to the restoration workshop in closed week, 'for rebacking', and back. The case's own pressure plate tells the rest of that story — an opening at thirteen minutes past two on the Tuesday night of that week, forty-one minutes long, and the weight on the plate changing, in those minutes, from four hundred and twelve grams to three hundred and eighty-eight. The crown that came back from the workshop was not the crown that went. The swap was made in closed week, in the dark, by somebody the building trusted."
  },
  c_replica_made: {
    title: "The replica was cast in this workshop",
    text: "The mould in the assistant's locker is a two-part casting mould for a circlet of exactly the crown's measure, and the seam it leaves along a band's inner face is the seam the microscope found on the displayed crown — the seam no Karash goldsmith ever left, because the original was raised, not cast. The invoice in the materials cabinet completes the recipe: synthetic spinels and nine-carat alloy, bought over two years, billed as 'restoration materials'. The crown in the gallery was not imported, or commissioned abroad. It was cooked up downstairs, in the museum's own workshop, by the museum's own people."
  },
  c_forged_order: {
    title: "The casting order's signature was forged",
    text: "The requisition that ordered the circlet cast — 'handling copy, schools programme' — is signed 'T. Herrera'. The lab reads signatures the way it reads ink: this one was drawn, not written. The strokes hesitate, the pen lifts inside the letters, the pressure is a copyist's pressure. Tomás Herrera never signed that order. Somebody needed the casting to carry the assistant's name and not their own — somebody senior enough to sign work into the workshop, and frightened enough of this page to forge it."
  },
  c_original_here: {
    title: "The original crown never left the museum",
    text: "It was inside the hollow kouros the whole time — in the plaster store of the restoration workshop, behind a seam of fresh plaster in a statue nobody has moved in years, wrapped in the workshop's own acid-free cloth. Four hundred and twelve grams. A garnet with a smoky fire that no laboratory makes. The genuine Sun Crown of Karash never left the building: it was hidden within twenty paces of the case it was stolen from, by the one man who could walk the workshop at any hour without a question being asked. The theft was never a theft out of the museum. It was a theft inside it."
  },
  c_log_forged: {
    title: "The gala-night wing check was written before the fact",
    text: "The security log's night reads smooth — too smooth. The lab is plain about the 23:00 line: 'Secure wing checked, all quiet', it is written in the registrar's gel pen, not in Marcus Feld's biro, and it was written in the same sitting, with the same pen and the same hand, as the entry above it — the 21:45 entry. The secure wing was certified as checked at eleven o'clock, on paper, at a quarter to ten. At eleven o'clock nobody had checked it, and nobody was going to. The log was not kept that night. It was composed."
  },
  c_blackmail: {
    title: "Vale held the registrar's old disgrace over her",
    text: "In the deed box of the Ashworth Bequest lies a provenance letter in a young registrar's hand — a draft authentication of a document that was itself a forgery, annotated, initialled, and stamped by Beatrice Lindqvist in 2016. The authentication was withdrawn quietly; the letter's subject never knew; the draft should have been destroyed. It was not destroyed, and it was not in the registrar's keeping. It was in the museum's archives, in a box the chief restorer 'researched' more than once — and the same registrar's hand signs both the bequest papers and the crown's movement record. Adrian Vale did not need to pay his registrar. He owned the one page of her past she could not survive being read aloud."
  },
  c_camera_gap: {
    title: "The wing camera was taken down on Vale's written order",
    text: "The camera that watches the secure-wing corridor did not fail on gala night. It was taken down, for 'maintenance', between 22:40 and 23:30, on a chit signed by Adrian Vale — and the AV booth's own log shows its feed dark for exactly those fifty minutes and no others in the month. Vale is not an electrician and the camera was not faulty: it passed its test the next morning without a part being changed. The one pair of eyes that could have watched the wing was closed, in advance, in writing, by the man who then walked the wing."
  },
  c_lure: {
    title: "Sauer was called to the wing by a message the director never sent",
    text: "The slip in her handbag is courteous, official, and false: 'The reserve diadem awaits your opinion in the fumigation anteroom before midnight. — The Director's Office.' Director Lindholm sent no slip, and her office sends none after six. The booth log gives the slip a birthplace: printed at 22:47 from the restoration workshop's terminal, one page, a file named for the diadem. Ingrid Sauer did not wander to the secure wing on a whim in the middle of a gala. She was summoned — by the piece she had wanted to examine all week, in the name of the woman who ran the museum, from the desk of the man she had confronted at twenty to seven."
  },
  c_cycle: {
    title: "The chamber ran a manual cycle at 23:10, with no batch in it",
    text: "The fumigation chamber's tape is a machine's diary and it does not embroider. Door closed 23:06, code V-01. Manual cycle begun 23:10, code V-01, running to 23:25. The batch line — the line where the operator writes what artefact is being treated — is blank. Nothing was loaded for treatment that night; the day's batch had gone through at noon. And at 05:52 the tape records the vent and the opening, code V-01 again. A fifteen-minute cycle, run by hand, in an empty chamber, in a dark wing, on the chief restorer's code — five hours before the woman in the chamber was found."
  },
  c_sauer_chamber: {
    title: "Ingrid Sauer died in the fumigation chamber",
    text: "Her gala badge is on the chamber floor by the chair, where it fell or was torn; her hairpin is beside it. The diadem trolley stands where she bent over it, its case dust carrying the print of her gloved hand at the edge — she reached the piece, she began her examination, and she never left the room. The chamber treats infested oak with a nitrogen flood that leaves the air sweet and unbreathable and the dead, in the morning, looking asleep. She was in that room when the cycle ran. The room was the weapon, and she was lured into it like game into a snare."
  },
  c_method: {
    title: "How it was done",
    text: "He composed the night the way he had composed the crown: patiently, on paper first. A check written before it happened, so no one would look. A camera closed in advance, so no one could see. A courteous lie on a printed slip, so she would walk to the room herself, alone, at an hour when the wing was empty. Then a door that seals itself, a panel that answers to his code, and fifteen quiet minutes of treated air. Before dawn he vented the room and opened the door and left her in the chair beside the piece she had come to judge, for the morning round to read as an accident. No struggle, no weapon, no mark. A museum death: catalogued, composed — and signed, in the end, by his own code on the tape."
  },
  c_sauer_knew: {
    title: "Sauer found the swap, and told him so",
    text: "Her notebook gives the afternoon a shape: the examination at four, the weights, the stone, the alloy — and at the end, underlined, 'A.V. — tonight.' The assistant restorer heard the rest through the workshop door at twenty to seven: her voice, quite calm, saying '2019', and 'you certified it yourself, Adrian, with me in the room' — and something about nine o'clock in the morning. She had examined the original at its acquisition; she was the one living person who could not be fooled by the replica; and on the afternoon of the gala she found it, proved it, and gave its maker until nine the next morning to watch her tell the world. That appointment is the hinge of the whole night."
  },
  c_link: {
    title: "The death exists to conceal the swap",
    text: "Lay the two crimes side by side and they are one. The swap had survived seven weeks of registers and gala lights; it could not survive the one examination it was always going to face — by the one examiner who knew the true crown's weight to the gram. Sauer's certification was the swap's death sentence, and she read it aloud to its author at twenty to seven, with a deadline of nine in the morning. Everything that followed — the composed log, the closed camera, the printed lie, the fifteen minutes in the chamber — is that deadline being answered. Ingrid Sauer was not killed for anything she did at the gala. She was killed for what she found at four o'clock, and for the appointment she made for nine. The second crime is the first crime, defending itself."
  },
  c_motive: {
    title: "Vale faced ruin at nine in the morning",
    text: "He had built the replica over two years and hidden the original within his own walls, against a quiet sale abroad and a retirement no restorer's pension buys. What stood between him and all of it was one appointment: Sauer before the director and the insurers at nine o'clock, with her notebook. Exposure did not mean embarrassment. It meant the police, a cell, and the end of the name that twenty-six years of other people's treasures had made. He had one night, one registrar who could not refuse him, one camera he could close with a signature, and one room in the building that kills quietly and keeps no marks. Men have killed for less than their whole life's name. Vale killed for exactly that."
  },
  c_bea_records: {
    title: "The registrar falsified both sets of records",
    text: "Twice, seven weeks apart, the paper of this museum bends the same way. In closed week, a condition report certifying an examination that never happened, signed by a registrar who was on leave, over a crown that was being swapped while she signed. On gala night, a wing check entered before the fact, in her gel pen, in one sitting with the evening's earlier line. Both falsifications serve one man and shield one pair of movements: Adrian Vale's. The registrar's hand is on the paper of both crimes — and on both occasions she was somewhere the paper says she was not, doing what the paper says she did not do."
  },
  c_bea_proof: {
    title: "Beatrice Lindqvist was Vale's accomplice",
    text: "The call log puts his voice in her office at half past nine on gala night, four minutes, minutes before she composed the check that cleared his wing. The paper puts her hand on the records of both crimes. And her own account, when it finally comes, agrees with every document: she certified what she had not seen, and she wrote a check that had not happened, because the man who asked held a page of her past she could not survive. Beatrice Lindqvist was Adrian Vale's accomplice — in the swap that stole the crown, and in the composed night that hid a killing. She knew nothing of a death. She knew everything about the paper, and the paper is how both crimes were made possible."
  },
  c_vale_proof: {
    title: "Vale made the swap, and the night that hid it",
    text: "Either road arrives at the same door. His own confession, when the paper closes round him. Or the workshop's testimony, spoken by things and by the assistant whose name he forged: the replica his mould cast, the original in his plaster statue, the spinels on his invoice, the signature he traced. The two accounts agree in every particular — the swap in closed week, the confrontation at twenty to seven, the composed log, the closed camera, the printed slip, the cycle on his code at ten past eleven. Adrian Vale stole the Sun Crown of Karash, and when its examiner found him out, he killed her with his own museum."
  },
  c_feld_clear: {
    title: "Feld's missing forty minutes were spent at a copier",
    text: "The copier's own log fixes the security supervisor's disgrace to the minute: 22:31, the director's office machine, a personnel file copied page by page by a man who feared — correctly — that the disciplinary hearing would go against him, and who meant to have his own record before it was used. The office is at the far end of the building from the secure wing; the hall camera the AV log does keep shows him entering at 22:19 and leaving at the hour. Marcus Feld's gap in the rounds is real, and shameful, and entirely his own. It covers no journey to the wing, and at ten past eleven he was nowhere near the chamber. His secret was vanity, not murder."
  },
  c_raman_clear: {
    title: "Raman left the museum at five past nine",
    text: "The cloakroom stub is in her name and the photographer's contact sheet shows her on the steps at five past nine, in her coat, in the rain, in the first wave of departures — hours before the slip was printed, the camera closed, or the wing went dark. Her row with Ingrid Sauer was real, public, and professional: two scholars who disagreed about a dead king's crown, in front of forty witnesses. Dr. Raman's fingerprints are on the Karash attribution and on nothing else in this case. She argued with the victim in the afternoon, loudly, like a colleague. She was home before the crime began."
  }
};

// Board links. Each pair is order-independent. A pair not listed here is simply unproven.
function L(a, b, gives) { return { pair: [a, b], gives }; }
const links = [
  L("display_crown", "sauer_notebook", "c_replica"),
  L("crown_flake", "display_crown", "c_replica"),
  L("scope_slide", "sauer_notebook", "c_replica"),
  L("movement_log", "pressure_log", "c_swap_window"),
  L("movement_log", "leave_chit", "c_swap_window"),
  L("casting_mould", "display_crown", "c_replica_made"),
  L("casting_mould", "geneva_invoice", "c_replica_made"),
  L("requisition", "casting_mould", "c_forged_order"),
  L("requisition", "s_herrera_casting", "c_forged_order"),
  L("original_crown", "c_replica", "c_original_here"),
  L("original_crown", "pressure_log", "c_original_here"),
  L("security_log", "exchange_log", "c_log_forged"),
  L("security_log", "camera_request", "c_log_forged"),
  L("lindqvist_letter", "movement_log", "c_blackmail"),
  L("lindqvist_letter", "s_bea_letter", "c_blackmail"),
  L("camera_request", "booth_log", "c_camera_gap"),
  L("uv_bracket_paint", "camera_request", "c_camera_gap"),
  L("camera_request", "s_jonas_maintenance", "c_camera_gap"),
  L("lure_slip", "booth_log", "c_lure"),
  L("lure_slip", "s_greta_noslip", "c_lure"),
  L("chamber_tape", "diadem_trolley", "c_cycle"),
  L("chamber_tape", "s_feld_rounds", "c_cycle"),
  L("sauer_badge", "c_cycle", "c_sauer_chamber"),
  L("sauer_badge", "chamber_tape", "c_sauer_chamber"),
  L("c_lure", "c_cycle", "c_method"),
  L("c_sauer_chamber", "c_camera_gap", "c_method"),
  L("sauer_notebook", "s_herrera_voices", "c_sauer_knew"),
  L("sauer_notebook", "c_replica", "c_sauer_knew"),
  L("ingrid_recorder", "sauer_notebook", "c_sauer_knew"),
  L("c_sauer_knew", "c_method", "c_link"),
  L("c_sauer_knew", "c_swap_window", "c_link"),
  L("c_original_here", "geneva_invoice", "c_motive"),
  L("c_swap_window", "s_greta_certification", "c_motive"),
  L("movement_log", "c_log_forged", "c_bea_records"),
  L("c_blackmail", "movement_log", "c_bea_records"),
  L("c_bea_records", "exchange_log", "c_bea_proof"),
  L("s_bea_admits", "c_blackmail", "c_bea_proof"),
  L("c_log_forged", "s_bea_admits", "c_bea_proof"),
  L("s_vale_confession", "c_method", "c_vale_proof"),
  L("s_vale_confession", "c_cycle", "c_vale_proof"),
  L("s_herrera_casting", "c_original_here", "c_vale_proof"),
  L("copier_log", "s_feld_file", "c_feld_clear"),
  L("contact_sheet", "cloakroom_chit", "c_raman_clear")
];

const chapters = [
  {
    id: "c1",
    title: "The Empty Case",
    scenes: ["gallery"],
    suspects: ["vale", "bea"],
    question: "What did Ingrid Sauer find under the gallery lights at four o'clock?",
    goals: ["c_replica"],
    intro: {
      speaker: "fiona",
      text: "Detectives, Fiona Grant — I investigate for the museum's insurers, which means this morning I am the nearest thing this building has to the law. Dr. Ingrid Sauer was found at twenty to seven in the fumigation chamber, and the museum would like her death to be an accident with an unfamiliar room. The insurers would like the truth. Start where she started: the Karash Gallery, and the crown she came back, after seven years, to certify. She examined it at four o'clock yesterday. Whatever she found, she found there."
    },
    hints: [
      "She weighed the crown in 2019 with her own hands, and wrote it down. Weigh what is in the case against what is in her notebook.",
      "The flake in her sample tube is from the crown's great stone. The lab can say what that stone actually is.",
      "A crown can be wrong in its stone, its metal, or its weight. This one is wrong in all three — prove any two and the case opens."
    ]
  },
  {
    id: "c2",
    title: "The Workshop",
    scenes: ["gallery", "workshop"],
    suspects: ["vale", "bea", "herrera"],
    question: "Where was the replica made — and where is the original?",
    goals: ["c_replica_made", "c_forged_order"],
    intro: {
      speaker: "fiona",
      text: "If the thing in the gallery is a copy, detectives, it was made somewhere — and replicas of this quality are not made in garden sheds. The restoration workshop, downstairs: the museum's own benches, the museum's own kiln, and a plaster store full of statues that have stood there for years. Ask the room who has been working in it at night. Ask, too, about a casting order with a young man's name on it."
    },
    hints: [
      "A raised crown has no seam. A cast crown does. Look for the mould that leaves the seam the microscope found.",
      "The requisition for the casting is in the workshop office. Paper can be read two ways — whose name is on it, and whose hand actually wrote it.",
      "Statues in a plaster store are moved by the men who store them. One of them has been opened, and closed again, more recently than the others."
    ]
  },
  {
    id: "c3",
    title: "The Registrar's Hand",
    scenes: ["gallery", "workshop", "archives"],
    suspects: ["vale", "bea", "herrera", "feld", "greta"],
    question: "The museum's paper says the crown never moved and the wing was checked. Is the paper true?",
    goals: ["c_log_forged", "c_blackmail"],
    intro: {
      speaker: "fiona",
      text: "Museums run on paper, detectives — movement logs, condition reports, night checks, every object accounted for by a signature. This museum's paper is beautiful. It is also, I have begun to suspect, composed. The archives hold the registrar's kingdom: the logs, the deed boxes, the leave book. And somewhere in those boxes is a letter from 2016 that somebody has kept very carefully, for very careful reasons."
    },
    hints: [
      "The registrar certified the crown's condition in closed week. Her leave chit is also in the archives. Hold the two together.",
      "Ink keeps its own diary. The lab can tell whether a log line was written when it claims, and in whose pen.",
      "The Ashworth Bequest made this museum's name in 2016. Its deed box holds a draft that should have been destroyed — ask why it survived, and who 'researched' that box."
    ]
  },
  {
    id: "c4",
    title: "The Night of the Gala",
    scenes: ["gallery", "workshop", "archives", "gala"],
    suspects: ["vale", "bea", "herrera", "feld", "greta", "raman", "jonas"],
    question: "Between nine and midnight, who arranged for the wing to be unwatched — and who was called down to it?",
    goals: ["c_camera_gap", "c_lure"],
    intro: {
      speaker: "fiona",
      text: "The gala hall, detectives — chandeliers, speeches, and four hundred guests in evening dress, among them a woman who had perhaps three hours to live. Someone used the gala the way a stage magician uses an audience: while every eye was on the lights, the secure wing was prepared — a camera closed, a message printed. The AV booth and the cloakroom keep the night's small change. Count it."
    },
    hints: [
      "The wing camera did not break. Cameras that are 'maintained' leave a chit, and chits have signatures.",
      "The booth printer logs every job with its hour and its source terminal. One job, at 22:47, was a single slip of paper.",
      "Her handbag came back to the cloakroom with her wrap. What she carried down to the wing — and what she carried back — is written in what the bag still holds."
    ]
  },
  {
    id: "c5",
    title: "The Chamber",
    scenes: ["gallery", "workshop", "archives", "gala", "vault"],
    suspects: ["vale", "bea", "herrera", "feld", "greta", "raman", "jonas"],
    question: "What happened in the fumigation chamber between 23:06 and 05:52?",
    goals: ["c_cycle", "c_sauer_chamber"],
    intro: {
      speaker: "fiona",
      text: "The strongroom wing, detectives, and the chamber at its heart — a room the museum uses to cleanse infested wood with treated air, sealed like a safe and governed by a tape that records every door, every cycle, every code. She was found in the chair by the diadem trolley, looking asleep. Read the room the way she would have read a crown: exactly, and without being told what to conclude."
    },
    hints: [
      "The chamber tape records door, cycle and code — and it does not know how to lie. What it cannot say is what was in the chamber. Look at the batch line.",
      "Her badge is not on her dress. Find where it fell, and you have placed her in the room before the door closed.",
      "A security system remembers what people forget: the gallery case keeps a log of its own openings, going back years."
    ]
  },
  {
    id: "c6",
    title: "Two Crimes, One Hand",
    scenes: ["gallery", "workshop", "archives", "gala", "vault"],
    suspects: ["vale", "bea", "herrera", "feld", "greta", "raman", "jonas"],
    question: "Prove the two crimes are one: who gained, who helped — and what did each pair of hands do?",
    goals: ["c_link", "c_bea_proof", "c_vale_proof"],
    intro: {
      speaker: "fiona",
      text: "Everything the museum can tell you is now on the table, detectives. Two crimes remain to be joined. A crown was stolen from inside its own case, seven weeks ago, by paper. A woman was killed last night, by paper first and by a quiet room second. Before you name anyone, prove the join: that the death exists because of the swap, that the registrar's hand served both, and that one man composed the whole of it. Then — and only then — we will talk about names."
    },
    hints: [
      "She gave him a deadline: nine in the morning. Join her appointment to the method, and the two crimes become one.",
      "The registrar's case does not need her confession: her two falsified records and his four-minute telephone call are a chain by themselves. Her confession only makes it kind.",
      "The assistant's testimony and the original crown, together, accuse the culprit without his saying a word. His confession is the second road, not the only one."
    ]
  },
  {
    id: "c7",
    title: "Name Them Both",
    scenes: ["gallery", "workshop", "archives", "gala", "vault"],
    suspects: ["vale", "bea", "herrera", "feld", "greta", "raman", "jonas"],
    question: "Culprit, accomplice, motive, method, proof — all five, or the accusation fails.",
    goals: [],
    intro: {
      speaker: "fiona",
      text: "That is everything, detectives. This is the hardest accusation this office has ever put to a party, and I will not pretend otherwise: it is not enough to name the man. Name who did it, who helped him — on paper, in advance, in both crimes — why, how, and the proof that binds it. Five parts. The museum is listening. Ingrid Sauer examined crowns for forty years and was never once wrong about what she was looking at. Be as sure as she was."
    },
    hints: [
      "The hands were his; the paper was hers. Culprit: the restorer. Accomplice: the registrar whose signature served both crimes.",
      "The motive is not the sale — the sale was the swap's reward. He killed to keep the swap hidden for one more night.",
      "For proof, use the conclusion that joins the confession — or the assistant's testimony — to the method in the chamber."
    ]
  }
];

const accusation = {
  culprits: ["vale", "bea", "herrera", "feld", "greta", "raman", "jonas"],
  accomplices: ["vale", "bea", "herrera", "feld", "greta", "raman", "jonas"],
  motives: [
    { id: "m_ruin", text: "To keep the crown swap hidden — Sauer's nine o'clock appointment meant exposure, prison, and the end of his name." },
    { id: "m_sale", text: "To sell the original crown through a Geneva dealer and be rich by Christmas." },
    { id: "m_grudge", text: "A thirty-year professional grudge against Dr. Sauer, who had twice corrected his attributions in print." },
    { id: "m_tour", text: "To protect the director and the loan tour, whatever it cost — an order from above." }
  ],
  methods: [
    { id: "x_chamber", text: "He lured her to the fumigation chamber with a printed slip, sealed the door, and ran a manual cycle on his own code." },
    { id: "x_stair", text: "He pushed her down the grand staircase in the dark after the gala." },
    { id: "x_dose", text: "He dosed her champagne at the gala dinner and waited for the room to empty." },
    { id: "x_cold", text: "He locked her in the textile cold store overnight and let the cold do it." }
  ],
  answer: {
    culprit: "vale",
    accomplice: "bea",
    motive: "m_ruin",
    method: "x_chamber",
    proofs: ["c_vale_proof", "c_method"]
  }
};

const epilogue = {
  truth:
    "Adrian Vale spent two years making a crown. In the museum's own workshop, on the museum's own benches, he cast and set and aged a perfect twin of the Sun Crown of Karash — and in closed week, with a registrar's borrowed signature certifying what she had never seen, he set the twin in the gallery case and hid the true crown inside a plaster statue twenty paces away, against a quiet sale abroad. It might have stood for a century. But the insurers sent for the one examiner who had held the original in her hands, and Ingrid Sauer weighed the thing in the case at four o'clock on gala day and knew it for a lie before her notebook was open. She told him so at twenty to seven, courteously, and gave him until nine in the morning. He spent the night instead: a registrar's hand, which he owned, composing a check that never happened; a camera closed by his own signature; a courteous printed lie, in the director's name, calling a proud woman down to the room that kills quietly; and fifteen minutes of treated air on his own code, while the gala danced above her. Beatrice Lindqvist, who wrote the paper of both crimes because he held one page of her past, was arrested reading the log she had composed, and told the truth at last in full. The true crown came out of the kouros into the light on the third day, heavier than its twin by twenty-four grams, and the gallery hung it where the replica had sat — with Sauer's notebook, open at the page of weights, in a small case beside it, where it remains.",
  results: {
    5: "A perfect case, complete in all five parts. Vale is taken from the workshop he ruled for twenty-six years; the registrar's evidence, freely given at last, is believed in every particular; and the Fenwick's gallery reopens with the true crown in its case and a small brass plate beneath it with one name on it — not the king's. Hers.",
    4: "Vale is arrested on the evidence of the two crimes, and Lindqvist's part is proved to the last signature. A loose thread or two will occupy the lawyers, but the crown is genuine again, and the night is explained.",
    3: "You named the right culprit, but the case was thin in places. Vale's counsel will make the insurers fight for every star you lost.",
    2: "Part of your case held up, but the accusation fell apart. The crown in the gallery keeps its secret a while longer.",
    1: "The accusation failed. The file closes again, the plaster statues keep their counsel, and the replica sits perfect under the lights."
  }
};

// Two independent paths to the key proof (validator section 7): the proof
// must survive losing Vale's pressured confession (workshop path) and losing
// Herrera's testimony (confession path).
// The accomplice is proven the same way, on her own evidence chain: the paper
// path (her falsified records + the exchange log of Vale's call) must survive
// losing her admission, and the admission path must survive losing the
// exchange log — she is never merely named by the culprit.
const fairness = {
  proof: "c_vale_proof",
  paths: [["s_vale_confession"], ["s_herrera_casting"]],
  accomplice: { proof: "c_bea_proof", paths: [["s_bea_admits"], ["exchange_log"]] }
};


// Live twist: a scripted interlude surfaced by the engine when the party
// enters chapter 5. It grants one colour-only testimony — nothing
// references it in any requires, link or goal, so no proof path depends on it.
const twists = [
  { chapter: 4, speaker: "fiona", text: "A moment, please. Dr. Raman has just asked the front desk for a taxi to the airport — a conference flight, she says. I have asked her to stay until morning, and she has agreed. What she said at the door is on the board.", testimony: "s_raman_stay", feed: "Dr. Raman tried to leave, and stayed." }
];

module.exports = { meta, speakers, conclusions, links, chapters, accusation, epilogue, fairness, twists };
