// Story layer for Case 9 (ported from the author's "case4") "The Midnight Express": conclusions, board links, chapters, hints, accusation, epilogue.
const meta = {
  id: "case9",
  title: "The Midnight Express",
  tagline: "One man dead in a locked compartment. One sapphire gone. Two crimes, and not the same hand.",
  summary: "Sebastian Vale, the collector, is found dead in a locked sleeper compartment on the Midnight Express, and his famous sapphire is missing. The doctor says heart failure. The insurers say prove it. Seven people shared the carriage, a time zone was crossed in the night, and at least two crimes were committed by two different people. Not every lie is a murder.",
  difficulty: 5, difficultyLabel: "Master", players: "2-4", length: "about 2.5 hours", setting: "A luxury sleeper train, one night"
};

const speakers = {
  penn: { name: "Inspector Penn", voice: "bm_fable", speed: 0.95 },
  narrator: { name: "Narrator", voice: "bf_emma", speed: 0.95 },
  vale: { name: "Sebastian Vale", voice: "bm_george", speed: 0.92 },
  marchetti: { name: "Dr. Odile Marchetti", voice: "bf_alice", speed: 0.98 },
  reiss: { name: "Anton Reiss", voice: "bm_daniel", speed: 0.95 },
  brenner: { name: "Tomas Brenner", voice: "am_liam", speed: 1.0 },
  fairweather: { name: "Lucian Fairweather", voice: "bm_lewis", speed: 0.92 },
  volkov: { name: "Count Volkov", voice: "am_michael", speed: 0.92 },
  ivana: { name: "Ivana Kessler", voice: "af_nicole", speed: 1.0 },
  hale: { name: "Rosalind Hale", voice: "af_nova", speed: 1.05 }
};

const conclusions = {
  c_not_natural: { title: "This was not a natural death", text: "The glass at his elbow holds digitalis crystals. The certificate says heart failure, but the heart was stopped by a drug." },
  c_pills_doubled: { title: "His own heart tablets were doctored", text: "Two capsules in his case are double-strength digitalis, relabelled to look ordinary. His diary says his doctor warned him never to double the dose, even once." },
  c_staged: { title: "A natural death was staged", text: "A fresh decanter on the washstand and doctored tablets in the case both point to someone arranging the scene afterwards." },
  c_poison_in_brandy: { title: "The poison was in the nightcap", text: "He drank brandy at midnight, always from his own decanter, and the glass holds the poison." },
  c_no_window: { title: "Nobody came through the window or the corridor door", text: "The window is painted shut, and the conductor found the corridor door locked with the key in it. Only the connecting door remains." },
  c_bolt_wire: { title: "The bolt was drawn with a wire", text: "Scratches and metal flecks on the bolt plate match the bent brass wire found in Compartment 4." },
  c_comp4_fairweather: { title: "Compartment 4 is Fairweather's", text: "The plan and the passenger list agree: the room that shares a door with Vale's belongs to his business partner." },
  c_fw_route: { title: "Fairweather had the route", text: "His room, his wire, and a bolt that could only be drawn from his side." },
  c_brenner_tray: { title: "Brenner brought the tray at 23:40", text: "His bell log and Vale's note agree: Brenner took the tray with the brandy at twenty to midnight." },
  c_decanter_swapped: { title: "The decanter was switched", text: "The bright decanter in Compartment 3 is not Vale's own. His chipped one turned up in the pantry." },
  c_poison_decanter: { title: "The chipped decanter held the poison", text: "The pantry decanter carries the same digitalis crystals as the brandy glass." },
  c_brenner_hid: { title: "Brenner hid the poisoned decanter", text: "It was pushed behind the pantry plate racks, in his pantry, rinsed in a hurry." },
  c_brenner_paid: { title: "Brenner was paid two thousand", text: "His debt of 1,800 was settled on the 14th, and a banded envelope of 2,000 was hidden behind his tea tins." },
  c_fw_paid_brenner: { title: "Fairweather paid Brenner", text: "The bank band on the pantry envelope matches the one in Fairweather's trunk: his firm's client account." },
  c_brenner_accomplice: { title: "Brenner delivered the poison for pay", text: "He took the tray, hid the decanter, and was paid. Whether he knew is another matter." },
  c_forgeries: { title: "Fairweather forged provenance papers", text: "The watermark on twelve certificates dates from 1936, twelve years after their dates." },
  c_vale_exposure: { title: "Vale was about to expose his partner", text: "On the recording and in the diary he said he would dissolve the partnership and publicise the forgeries at Valmer." },
  c_fw_motive: { title: "Fairweather had a motive: ruin and prison", text: "Twelve years of forgeries and a partner about to announce them to the buyer." },
  c_fw_poison_source: { title: "Fairweather owned the poison", text: "A bottle of foxglove tincture in his trunk, labelled 'garden remedy', smells like the crushed leaves in the glass." },
  c_death_time: { title: "Vale died at 01:50 train time", text: "His watch stopped at 01:50, and the doctor's estimate covers it. By the old clocks, that is 00:50." },
  c_clock_shift: { title: "The lounge clock ran an hour behind", text: "The conductor advanced every clock at the border except the lounge clock." },
  c_fairweather_absent: { title: "Fairweather left the table 00:20 to 00:55 lounge time", text: "The card sheet and Volkov's notes agree. Because the lounge clock was an hour behind, that is 01:20 to 01:55 train time." },
  c_fw_at_death: { title: "Fairweather was away exactly when Vale died", text: "He was gone from the table from 01:20 to 01:55 train time, and Vale's watch stopped at 01:50." },
  c_fw_at_scene: { title: "Fairweather was at the scene", text: "He had the route, he was absent at the right minute, and his cuffs were wet when he returned." },
  c_fw_orchestrated: { title: "Fairweather ordered the poisoning", text: "He had the motive, he paid the steward, and the poison was in his trunk." },
  c_ivana_thief: { title: "Ivana Kessler stole the sapphire", text: "She had a paste copy made twelve days ago, and the stone in the case is that copy." },
  c_ivana_keys: { title: "She took the spare key at 02:55", text: "The register shows she signed it out and returned it after Vale was dead." },
  c_ivana_motive: { title: "Ivana stole to pay for her mother's care", text: "The clinic wants 3,500 by month end, and the paste copy was ordered with cash." },
  c_theft_separate: { title: "The theft was a separate crime, an hour after the death", text: "Vale died at 01:50. The key was signed out at 02:55. Two crimes, two culprits." },
  c_ivana_not_killer: { title: "Ivana is not the killer", text: "She played every hand of the card game and stole only after the death." },
  c_reiss_hale: { title: "Reiss and Hale were together in the baggage car", text: "The locket and Rosalind's note place them there at midnight, each the other's alibi." },
  c_reiss_cleared: { title: "Reiss is cleared", text: "His punch book has a gap that the baggage car explains. His lie was about a romance, not a murder." },
  c_hale_cleared: { title: "Hale is cleared", text: "She was in the baggage car with the conductor, not at Vale's door. Her debts give her a motive only on paper." },
  c_volkov_cleared: { title: "Volkov is cleared", text: "He needed Vale alive to sign the contract, and he sat at the table through every hand." },
  c_doctor_sealed: { title: "Marchetti's digitalis was never touched", text: "Her ampoules are sealed and counted: the poison did not come from her bag." },
  c_marchetti_cleared: { title: "Marchetti is cleared", text: "She was at the table, her drugs are intact, and her certificate was an honest mistake." }
};

function L(a, b, gives) { return { pair: [a, b], gives }; }
const links = [
  L("death_certificate", "brandy_glass", "c_not_natural"),
  L("vale_pillbox", "vale_diary", "c_pills_doubled"),
  L("vale_pillbox", "decanter_new", "c_staged"),
  L("brandy_glass", "nightcap_note", "c_poison_in_brandy"),
  L("window_catch", "conductor_report", "c_no_window"),
  L("connecting_door", "wire_hook", "c_bolt_wire"),
  L("corridor_plan", "passenger_list", "c_comp4_fairweather"),
  L("c_bolt_wire", "c_comp4_fairweather", "c_fw_route"),
  L("c_no_window", "c_comp4_fairweather", "c_fw_route"),
  L("s_fairweather_confession", "c_bolt_wire", "c_fw_route"),
  L("bell_log", "nightcap_note", "c_brenner_tray"),
  L("decanter_new", "pantry_decanter", "c_decanter_swapped"),
  L("pantry_decanter", "brandy_glass", "c_poison_decanter"),
  L("pantry_decanter", "c_brenner_tray", "c_brenner_hid"),
  L("pantry_envelope", "bar_tab", "c_brenner_paid"),
  L("pantry_envelope", "fairweather_trunk", "c_fw_paid_brenner"),
  L("s_brenner_confession", "c_brenner_paid", "c_fw_paid_brenner"),
  L("c_brenner_paid", "c_brenner_hid", "c_brenner_accomplice"),
  L("c_brenner_tray", "c_poison_decanter", "c_brenner_accomplice"),
  L("provenance_papers", "vale_diary", "c_forgeries"),
  L("dictation", "argument_slip", "c_vale_exposure"),
  L("dictation", "vale_diary", "c_vale_exposure"),
  L("c_forgeries", "c_vale_exposure", "c_fw_motive"),
  L("fairweather_trunk", "brandy_glass", "c_fw_poison_source"),
  L("stopped_watch", "exam_note", "c_death_time"),
  L("border_log", "lounge_clock", "c_clock_shift"),
  L("card_score", "c_clock_shift", "c_fairweather_absent"),
  L("volkov_notes", "c_clock_shift", "c_fairweather_absent"),
  L("s_volkov_saw", "c_clock_shift", "c_fairweather_absent"),
  L("c_fairweather_absent", "c_death_time", "c_fw_at_death"),
  L("c_fw_at_death", "c_fw_route", "c_fw_at_scene"),
  L("c_fw_paid_brenner", "c_fw_motive", "c_fw_orchestrated"),
  L("c_fw_poison_source", "c_fw_motive", "c_fw_orchestrated"),
  L("s_fairweather_confession", "c_fw_motive", "c_fw_orchestrated"),
  L("paste_receipt", "sapphire_case", "c_ivana_thief"),
  L("spare_key_log", "c_ivana_thief", "c_ivana_keys"),
  L("ivana_letter", "paste_receipt", "c_ivana_motive"),
  L("c_ivana_keys", "c_death_time", "c_theft_separate"),
  L("card_score", "c_theft_separate", "c_ivana_not_killer"),
  L("locket", "hale_note", "c_reiss_hale"),
  L("s_reiss_baggage", "s_hale_baggage", "c_reiss_hale"),
  L("c_reiss_hale", "punch_book", "c_reiss_cleared"),
  L("c_reiss_hale", "dining_roster", "c_hale_cleared"),
  L("volkov_telegram", "sale_contract", "c_volkov_cleared"),
  L("card_score", "s_volkov_never", "c_volkov_cleared"),
  L("doctor_bag", "brandy_glass", "c_doctor_sealed"),
  L("c_doctor_sealed", "card_score", "c_marchetti_cleared"),
  L("exam_note", "s_marchetti_misread", "c_marchetti_cleared"),
  { pair: ["uv_bolt_smear", "wire_hook"], gives: "c_bolt_wire" }
];

const chapters = [
  {
    id: "c1", title: "The Locked Compartment", scenes: ["compartment"], suspects: ["marchetti", "reiss"],
    question: "Did Sebastian Vale really die of heart failure?", goals: ["c_not_natural", "c_pills_doubled", "c_staged"],
    intro: { speaker: "penn", text: "Detective, the doctor says his heart gave out. The door was locked, the window shut, and the sapphire is gone. I don't like it. A man who dies on a train with an empty jewel case deserves a better look. Start in Compartment 3." },
    hints: [
      "Start with what he took into his body: the pillbox and the glass at his elbow. The Analyst's tools matter here.",
      "The diary mentions what his own doctor warned him about. Compare it to what is in the pillbox.",
      "Link the death certificate with the brandy glass. Link the pillbox with the diary. Link the pillbox with the new decanter."
    ]
  },
  {
    id: "c2", title: "The Door Between", scenes: ["compartment", "corridor"], suspects: ["marchetti", "reiss", "brenner"],
    question: "How did anyone get in and out of a locked compartment?", goals: ["c_bolt_wire", "c_comp4_fairweather", "c_brenner_tray"],
    intro: { speaker: "penn", text: "The corridor door was locked from the inside, and the window is painted shut. So how did anyone get in? Look at the other walls of that compartment, and at who sleeps behind them. And find out who brought him his nightcap." },
    hints: [
      "There is a second door in Compartment 3. Where does it lead, and who sleeps there?",
      "Fresh scratches on a bolt plate. A bent piece of wire in the next room's washbasin.",
      "Link the connecting door with the wire. Link the carriage plan with the passenger list. Link the bell log with Vale's note."
    ]
  },
  {
    id: "c3", title: "The Dining Car", scenes: ["compartment", "corridor", "dining"], suspects: ["marchetti", "reiss", "brenner", "fairweather"],
    question: "Whose decanter was it, and what did Vale mean to do?", goals: ["c_decanter_swapped", "c_vale_exposure", "c_forgeries", "c_brenner_paid"],
    intro: { speaker: "penn", text: "The dining car is where it began. Vale quarrelled with his partner over dessert, and he left a recording. Somebody swapped a decanter, and somebody got paid. Find out what he was about to do, and who benefited if he did not." },
    hints: [
      "Two questions: what had Vale found out, and what happened to his decanter?",
      "The pantry decanter is chipped, and the Analyst can tell you what is in the rim. The papers in the corridor can be made to give up their watermark.",
      "Link the new decanter with the chipped one. Link the dictation with the maitre d's note. Link the provenance papers with the diary. Link the envelope with the card-club ledger."
    ]
  },
  {
    id: "c4", title: "Four Hands of Bridge", scenes: ["compartment", "corridor", "dining", "lounge"], suspects: ["marchetti", "reiss", "brenner", "fairweather", "volkov", "ivana"],
    question: "Who was actually at the card table, and who could not have done it?", goals: ["c_volkov_cleared", "c_doctor_sealed"],
    intro: { speaker: "penn", text: "Four people played bridge in the lounge that night. Three of them had good reasons to look elsewhere. One of them was not watching the clock, and one of them is richer for what happened. Find out who sat still and who did not." },
    hints: [
      "The count has a motive on paper, and the doctor has the means. Check both against the evidence.",
      "Volkov needed Vale alive. Marchetti's bag may speak for itself.",
      "Link the telegram with the sale contract. Link the doctor's bag with the brandy glass."
    ]
  },
  {
    id: "c5", title: "The Baggage Car", scenes: ["compartment", "corridor", "dining", "lounge", "baggage"], suspects: ["marchetti", "reiss", "brenner", "fairweather", "volkov", "ivana", "hale"],
    question: "What is hidden among the luggage, and who is lying about it?", goals: ["c_reiss_hale", "c_fw_poison_source", "c_ivana_thief", "c_fw_paid_brenner"],
    intro: { speaker: "penn", text: "Everything on this train that nobody wanted found is in the baggage car. Look at who went there and why. There are two crimes in this case, Detective. Do not let one of them hide the other." },
    hints: [
      "The baggage car holds three separate secrets belonging to three different people.",
      "A locket, a note, a bottle, and a receipt. Each belongs to a different story.",
      "Link the locket with the note. Link the trunk with the brandy glass. Link the paste receipt with the sapphire case. Link the envelope with the trunk."
    ]
  },
  {
    id: "c6", title: "Midnight at Karst Pass", scenes: ["compartment", "corridor", "dining", "lounge", "baggage", "guard"], suspects: ["marchetti", "reiss", "brenner", "fairweather", "volkov", "ivana", "hale"],
    question: "When did he die, and who was not where they said?", goals: ["c_death_time", "c_clock_shift", "c_fairweather_absent", "c_ivana_keys", "c_theft_separate"],
    intro: { speaker: "penn", text: "At midnight the train crossed the frontier and every clock moved forward an hour. Except one. That is the heart of this case, Detective. Work out what time it really was when each thing happened, and who was missing from where." },
    hints: [
      "Time is the key. Two clocks disagree. One of them is wrong in a very specific way.",
      "Vale's watch stopped at a particular minute. The border log explains a clock that did not move.",
      "Link the watch with the doctor's note. Link the border log with the lounge clock. Link the card score with the corrected clock. Link the key register with the paste copy."
    ]
  },
  {
    id: "c7", title: "Name the Killer", scenes: ["compartment", "corridor", "dining", "lounge", "baggage", "guard"], suspects: ["marchetti", "reiss", "brenner", "fairweather", "volkov", "ivana", "hale"],
    question: "Who killed Sebastian Vale, who helped, why, and how?", goals: [],
    intro: { speaker: "penn", text: "Seven people, two crimes, one night, and the train reaches Valmer at noon. A thief and a killer shared that carriage, and they are not the same person. One person acted alone, and one had help. Choose with care. A wrong name here frees the killer." },
    hints: [
      "One person stole. One person poisoned. Do not confuse them.",
      "The killer had the poison, the motive, the route, and a gap in his alibi. He also paid someone to carry the tray.",
      "Name Lucian Fairweather, with Tomas Brenner as accomplice. For proof, use the conclusion that puts him at the scene, or the one that shows he ordered it."
    ]
  }
];

const accusation = {
  culprits: ["fairweather", "brenner", "ivana", "hale", "volkov", "marchetti", "reiss"],
  motives: [
    { id: "m_forgery", text: "To bury twelve years of forged provenance before Vale could expose him." },
    { id: "m_inherit", text: "To inherit his half of the estate." },
    { id: "m_sale", text: "To stop the sale of the Meridian collection." },
    { id: "m_debt", text: "To clear a gambling debt." },
    { id: "m_theft", text: "To steal the Meridian Sapphire." }
  ],
  methods: [
    { id: "x_poison_staged", text: "Poisoned his brandy through a swapped decanter, then staged a natural death through the connecting door." },
    { id: "x_natural", text: "No one: his own heart failed." },
    { id: "x_pills_only", text: "Swapped his tablets so he overdosed on his own medicine." },
    { id: "x_smother", text: "Smothered him in his bunk." },
    { id: "x_pushed", text: "Pushed him from the train." }
  ],
  accomplices: ["brenner", "ivana", "reiss", "hale"],
  answer: { culprit: "fairweather", motive: "m_forgery", method: "x_poison_staged", accomplice: "brenner", proofs: ["c_fw_at_scene", "c_fw_orchestrated"], criticalTestimonies: ["s_fairweather_confession", "s_brenner_confession"] }
};

const epilogue = {
  truth: "For twelve years Lucian Fairweather forged provenance for the pieces Vale sold. When Sebastian Vale found the watermark, he told his partner he would dissolve the firm and expose him at Valmer. Fairweather bribed the steward Tomas Brenner with two thousand to swap Vale's decanter for a stoppered one prepared with foxglove tincture. Vale drank at midnight and died at ten to two, train time. Fairweather, who had slipped away from the bridge table by the lounge clock that nobody had reset, came through the connecting door, swapped the decanters, doubled Vale's capsules to stage a heart failure, and drew the bolt back with a wire. The doctor, deceived, signed a certificate of natural causes. An hour later, Ivana Kessler, desperate for her mother's treatment, used a signed spare key to swap the sapphire for a paste copy, finding a dead man already cold. Two crimes, two culprits, and one clock.",
  results: {
    5: "A flawless case. Fairweather and Brenner are arrested at Valmer, Ivana Kessler is charged with the theft, and the Meridian collection is held for investigation.",
    4: "Fairweather is arrested. A loose end or two costs you a polished prosecution, but the right man is in custody.",
    3: "You named the killer, but the case was thin. His barrister will fight for every doubt.",
    2: "Part of your case held up, but the accusation fell apart. The killer steps off the train.",
    1: "The accusation failed. The doctor's certificate stands, and a poisoner walks free."
  }
};

const rules = { hintPenaltyAt: [2, 5], wrongLinkLimit: 7, labSkipAfter: 4 };


// Two independent paths to the key proof (validator section 7), authored for
// this port (the author's data declares criticalTestimonies instead; the
// culprit sets below are exactly those testimonies). Fairweather as the
// orchestrator is provable from the poison's source alone, from Brenner's
// confession that he was paid, and from Fairweather's own confession. The
// accomplice is proven two ways: the payment + hidden decanter (the pantry
// envelope is pivotal to the paid half) and the tray + poisoned decanter
// (the brandy glass is pivotal to the poison half).
const fairness = {
  proof: "c_fw_orchestrated",
  paths: [["s_brenner_confession"], ["s_fairweather_confession"]],
  accomplice: { proof: "c_brenner_accomplice", paths: [["pantry_envelope"], ["brandy_glass"]] }
};

// Live twist (Round 3 port, same pattern as Cases 2–6): a scripted interlude
// surfaced by the engine when the party enters the chapter below. It grants
// one colour-only testimony — nothing references it in any requires, link or
// goal, so no proof path can depend on it.
const twists = [
  { chapter: 4, speaker: "penn", text: "Count Volkov has sent word from the lounge car — a small vanity of the bridge table that he cannot stop turning over. Colour, perhaps. It is on the board.", testimony: "s_volkov_cards", feed: "Volkov remembered the ring." }
];

module.exports = { meta, speakers, conclusions, links, chapters, accusation, epilogue, rules, fairness, twists };
