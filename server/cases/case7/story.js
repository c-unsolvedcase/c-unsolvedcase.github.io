// Story layer for Case 7 (ported from the author's "case2") "Curtain Call": conclusions, board links, chapters, hints, accusation, epilogue.
const meta = {
  id: "case7",
  title: "Curtain Call",
  tagline: "On opening night the crown fell. The rope was old, said the coroner. The rope was cut.",
  summary: "Leonard Ashby, producer-director of the Marlowe Theatre, was crushed by a falling chandelier during his own curtain call. The coroner says accident. The insurer is not so sure, and neither are you. Six people were backstage, and every one of them lied about something.",
  difficulty: 3, difficultyLabel: "Hard", players: "2-4", length: "about 90 min", setting: "A London theatre, opening night"
};

const speakers = {
  penn: { name: "Inspector Penn", voice: "bm_fable", speed: 0.95 },
  narrator: { name: "Narrator", voice: "bf_emma", speed: 0.95 },
  iris: { name: "Iris Calloway", voice: "bf_alice", speed: 1.0 },
  dorian: { name: "Dorian Pike", voice: "am_liam", speed: 1.0 },
  celeste: { name: "Celeste Marlowe", voice: "af_heart", speed: 0.95 },
  tobias: { name: "Tobias Reed", voice: "bm_george", speed: 0.92 },
  margo: { name: "Margo Dane", voice: "bf_isabella", speed: 0.92 },
  wren: { name: "Wren Adair", voice: "af_nova", speed: 1.05 }
};

const conclusions = {
  c_line_cut: { title: "The line was cut, not worn through", text: "The break has a clean blade face over two thirds of its width. The coroner's 'worn rope' finding is wrong." },
  c_shear_cut: { title: "Cut with scissor-type shears", text: "A double-bevel stroke from long blades. A rigging knife leaves a different mark, and the shears were hidden with the line's fibres in their pivot." },
  c_shears_taken: { title: "The wardrobe shears were taken and hidden", text: "They were on their board at 18:10, missing by the end of the night, and found wrapped at the bottom of a hamper." },
  c_cut_after_q40: { title: "The line was cut during Act 2", text: "Cue 40 at 21:15 held the full load for thirty seconds. Cue 88 dropped it. The cut was made in between." },
  c_stairs_unused: { title: "Nobody used the grid stairs", text: "Only three people hold a key to the grid door, and its dusty handle and cobwebs show it was not opened." },
  c_hatch_route: { title: "There was another way up: the wardrobe loft hatch", text: "A hidden ladder runs from wardrobe to the grid. Its hatch and rungs were wiped clean, while the keyed door stayed untouched." },
  c_loft_wardrobe: { title: "The loft route belongs to wardrobe", text: "The loft key and ladder are wardrobe's, and Margo Dane signed the key out herself." },
  c_margo_thread: { title: "A thread from Margo's cardigan was on the hatch", text: "Dove-grey lambswool with a pearl-button knot. The Christmas photograph shows exactly that cardigan on Margo." },
  c_margo_alibi_gap: { title: "Margo's alibi has a hole", text: "She says she was locked in wardrobe until the bow. Wren knocked at two minutes past ten and nobody answered." },
  c_margo_in_grid: { title: "Margo climbed to the grid", text: "Her thread was on the hatch, she had the key and the route, and nobody can place her in wardrobe at the key moment." },
  c_margo_cut_line: { title: "Margo cut the line", text: "She was in the grid, the line was cut with wardrobe shears, and the shears were hers to take." },
  c_play_stolen: { title: "The Glass Crown was Daniel Fenn's play", text: "A 1999 playbill names Fenn as the author, and the typescript still shows his name beneath Ashby's pasted title page." },
  c_margo_is_fenn: { title: "Margo Dane is Margaret Fenn, Daniel's sister", text: "Court papers, a family photograph, and a wardrobe credit for 'M. Fenn' all point to one woman who changed her name." },
  c_margo_motive: { title: "Margo had a motive: revenge", text: "Ashby stole her dead brother's play and then crushed her in court. Ashby's own diary noticed her watching the old poster." },
  c_sale: { title: "Ashby was selling the theatre", text: "He was about to lose it to the bank and sell it for demolition, ending every staff contract." },
  c_pension_theft: { title: "Ashby had drained the pension fund", text: "Six years of deductions never paid in, and 31,400 moved to his own account." },
  c_wide_motives: { title: "Half the company had a reason to hate him", text: "A sale that ended their jobs and a stolen pension. Motive alone proves nothing here." },
  c_tobias_drank: { title: "Tobias left his rail to drink", text: "The bottle in the prop store and Wren's account explain his lie. It is shameful, but it is not murder." },
  c_tobias_cleared: { title: "Tobias is cleared", text: "The cut was made with shears, not his knife, and he had no reason to use the hatch he never knew mattered." },
  c_celeste_motive: { title: "Celeste had a motive: the affair", text: "Ashby was about to be dumped, and then he laughed at her ultimatum. She wanted him humiliated." },
  c_celeste_cleared: { title: "Celeste is cleared", text: "She was on stage or with dressers all of Act 2 and cannot climb ladders." },
  c_dorian_secret: { title: "Dorian sold the building's secrets", text: "Halloran paid him for a survey of the theatre. A betrayal, but not a motive to kill the man he was already abandoning." },
  c_dorian_cleared: { title: "Dorian is cleared", text: "His console log shows every cue pressed by hand from the booth." },
  c_iris_cleared: { title: "Iris is cleared", text: "Her prompt book is in her own hand, cue after cue. She called the whole show." },
  c_wren_cleared: { title: "Wren is cleared", text: "She hid the shears out of fear, but she was at the quick changes and in the wings all through Act 2." }
};

function L(a, b, gives) { return { pair: [a, b], gives }; }
const links = [
  L("cut_line_end", "accident_report", "c_line_cut"),
  L("cut_line_end", "line_anchor", "c_line_cut"),
  L("cut_line_end", "hamper_shears", "c_shear_cut"),
  L("cut_line_end", "flyman_kit", "c_shear_cut"),
  L("shadow_board", "signout_book", "c_shears_taken"),
  L("hamper_shears", "shadow_board", "c_shears_taken"),
  L("prompt_book", "rig_log", "c_cut_after_q40"),
  L("prompt_book", "c_line_cut", "c_cut_after_q40"),
  L("grid_door", "notice_board", "c_stairs_unused"),
  L("loft_ladder", "hatch_clean", "c_hatch_route"),
  L("c_stairs_unused", "hatch_clean", "c_hatch_route"),
  L("loft_ladder", "grid_door", "c_hatch_route"),
  L("signout_book", "loft_ladder", "c_loft_wardrobe"),
  L("s_margo_loft", "loft_ladder", "c_loft_wardrobe"),
  L("hatch_thread", "christmas_photo", "c_margo_thread"),
  L("s_margo_alibi", "s_wren_locked", "c_margo_alibi_gap"),
  L("c_margo_thread", "c_hatch_route", "c_margo_in_grid"),
  L("c_margo_alibi_gap", "c_hatch_route", "c_margo_in_grid"),
  L("s_margo_confession", "c_hatch_route", "c_margo_in_grid"),
  L("c_margo_in_grid", "c_shear_cut", "c_margo_cut_line"),
  L("c_margo_in_grid", "c_shears_taken", "c_margo_cut_line"),
  L("playbill_1999", "manuscript", "c_play_stolen"),
  L("manuscript", "programme_night", "c_play_stolen"),
  L("playbill_1999", "programme_night", "c_play_stolen"),
  L("court_letter", "c_play_stolen", "c_margo_is_fenn"),
  L("fenn_photo", "c_play_stolen", "c_margo_is_fenn"),
  L("court_letter", "fenn_photo", "c_margo_is_fenn"),
  L("c_margo_is_fenn", "c_play_stolen", "c_margo_motive"),
  L("c_margo_is_fenn", "ashby_diary", "c_margo_motive"),
  L("mortgage_letter", "sale_contract", "c_sale"),
  L("sale_contract", "takings_book", "c_sale"),
  L("mortgage_letter", "takings_book", "c_sale"),
  L("takings_book", "pension_complaint", "c_pension_theft"),
  L("c_sale", "c_pension_theft", "c_wide_motives"),
  L("prop_bottle", "s_tobias_drink", "c_tobias_drank"),
  L("prop_bottle", "s_wren_tobias_gone", "c_tobias_drank"),
  L("c_tobias_drank", "c_shear_cut", "c_tobias_cleared"),
  L("c_tobias_drank", "c_stairs_unused", "c_tobias_cleared"),
  L("celeste_note", "s_celeste_affair", "c_celeste_motive"),
  L("quick_change_roster", "prompt_book", "c_celeste_cleared"),
  L("contract_rider", "c_hatch_route", "c_celeste_cleared"),
  L("s_celeste_vertigo", "c_hatch_route", "c_celeste_cleared"),
  L("dorian_letter", "s_dorian_letter_admit", "c_dorian_secret"),
  L("dorian_letter", "sale_contract", "c_dorian_secret"),
  L("light_cue_log", "s_dorian_booth", "c_dorian_cleared"),
  L("light_cue_log", "prompt_book", "c_dorian_cleared"),
  L("prompt_book", "s_iris_desk", "c_iris_cleared"),
  L("cue_memo", "s_iris_desk", "c_iris_cleared"),
  L("s_wren_shears", "quick_change_roster", "c_wren_cleared"),
  L("s_wren_shears", "prompt_book", "c_wren_cleared"),
  { pair: ["uv_hatch_fibres", "hatch_thread"], gives: "c_margo_thread" }
];

const chapters = [
  {
    id: "c1", title: "Opening Night", scenes: ["stage", "curtain_foyer"], suspects: ["iris", "dorian"],
    question: "Was it really an accident?", goals: ["c_line_cut"],
    intro: { speaker: "penn", text: "Detective, the insurer has asked for a second opinion. The coroner says the rope was old and the chandelier fell by accident. I have seen too many accidents that were not. Start on the stage. Look at that line." },
    hints: [
      "The broken end of the line looks frayed. The Analyst can put it under the lab's microscope.",
      "A worn rope tears. Compare what the lab shows with what the coroner's report claims.",
      "Link the broken line end with the coroner's report."
    ]
  },
  {
    id: "c2", title: "The Man Who Owned Everything", scenes: ["stage", "curtain_foyer", "ashby_office"], suspects: ["iris", "dorian", "celeste", "tobias"],
    question: "Who stood to gain or lose from Ashby's plans?", goals: ["c_sale", "c_play_stolen"],
    intro: { speaker: "penn", text: "A cut rope means a killer. So who wanted Ashby dead? The man held everyone's livelihood in his hand. Search his office and the foyer. Look at money, and look at old history. Every theatre has a skeleton." },
    hints: [
      "Two stories to prove: what was happening to the theatre, and where did the play really come from?",
      "The bank letter, the contract and the takings book tell the first story. The old playbill, once the lab has cleaned it, tells the second.",
      "Link the bank letter with the draft contract. Link the old playbill with the typescript."
    ]
  },
  {
    id: "c3", title: "Act Two", scenes: ["stage", "curtain_foyer", "ashby_office", "wardrobe"], suspects: ["iris", "dorian", "celeste", "tobias", "margo", "wren"],
    question: "What cut the line, and when?", goals: ["c_shear_cut", "c_cut_after_q40"],
    intro: { speaker: "penn", text: "The line held at fifteen minutes past nine, under full load. It failed at ten past ten. In between, a show was on and everyone was busy. Somebody was not. Go through wardrobe and find what could have made that cut." },
    hints: [
      "Two questions: what tool, and what time? One answer is in wardrobe, the other is on the stage.",
      "The prompt book says what happened at Cue 40. The fly rail's log says when the line was checked.",
      "Link the line end with the shears from the hamper. Link the prompt book with the flyman's log."
    ]
  },
  {
    id: "c4", title: "The Grid", scenes: ["stage", "curtain_foyer", "ashby_office", "wardrobe", "grid"], suspects: ["iris", "dorian", "celeste", "tobias", "margo", "wren"],
    question: "Who could get up there, and who is hiding who they are?", goals: ["c_hatch_route", "c_margo_is_fenn"],
    intro: { speaker: "penn", text: "Now the grid, where the line was cut. The door was locked. So how did a person reach it? And one of these six is not who she says she is. Find how they got up, and find who they really are." },
    hints: [
      "The grid door and the hatch tell different stories. Dust does not lie.",
      "The ladder in wardrobe leads to a hatch in the grid. A solicitor's letter and an old photograph tell you about one person's past.",
      "Link the wardrobe ladder with the clean hatch. Link the solicitor's letter with the photograph from the sewing box."
    ]
  },
  {
    id: "c5", title: "Name the Culprit", scenes: ["stage", "curtain_foyer", "ashby_office", "wardrobe", "grid"], suspects: ["iris", "dorian", "celeste", "tobias", "margo", "wren"],
    question: "Who killed Leonard Ashby, why, how, and what proves it?", goals: [],
    intro: { speaker: "penn", text: "That is everything. Six people lied to you tonight. Four of them lied about something shameful and harmless. One lied about everything. Choose with care. If you accuse the wrong person, the real one goes free." },
    hints: [
      "Almost everyone has a secret. Only one secret leads to the grid.",
      "The cleared suspects each have a conclusion that clears them. Who is left once you check the board?",
      "Name Margo Dane. For proof, use the conclusion that puts her in the grid, or the one that says she cut the line."
    ]
  }
];

const accusation = {
  culprits: ["margo", "tobias", "celeste", "dorian", "iris", "wren"],
  motives: [
    { id: "m_revenge", text: "To avenge her brother, whose play Ashby stole." },
    { id: "m_sale", text: "To stop him selling the theatre." },
    { id: "m_affair", text: "Fury over a six-year affair." },
    { id: "m_pension", text: "Revenge for the stolen pension fund." },
    { id: "m_bribe", text: "To hide a secret payment from the developers." }
  ],
  methods: [
    { id: "x_line_cut", text: "Cut the chandelier line with shears during Act 2, reaching the grid by the wardrobe hatch." },
    { id: "x_worn_rope", text: "No one: the old rope simply failed." },
    { id: "x_rigging_error", text: "The flyman tied the line badly." },
    { id: "x_cue_change", text: "Ashby's last-minute cue change overloaded a sound line." },
    { id: "x_pushed", text: "Ashby was pushed under the chandelier." }
  ],
  answer: { culprit: "margo", motive: "m_revenge", method: "x_line_cut", proofs: ["c_margo_in_grid", "c_margo_cut_line"], criticalTestimonies: ["s_wren_locked", "s_margo_confession"] }
};

const epilogue = {
  truth: "Twenty-seven years ago Daniel Fenn wrote a play called The Glass Crown. Leonard Ashby put his own name on it, and when Daniel's sister went to court, Ashby had her called a liar. Daniel never recovered. His sister took a new surname, joined Ashby's theatre as wardrobe supervisor, and waited. On opening night, after the last quick change, Margo locked the wardrobe and climbed the hidden loft ladder to the grid. With her tailor's shears she cut two thirds through the chandelier's line. At Cue 88 Ashby asked for the crown lowered for his bow, and it fell on him. Wren found the shears and hid them in fear. Tobias lied about his rail, Dorian about his letter, Celeste about her affair. Only one person had the route, the shears, and the reason.",
  results: {
    5: "A flawless case. Margo Dane is arrested, Daniel Fenn is credited as the author of The Glass Crown, and the insurer pays out to the right people.",
    4: "Margo Dane is arrested. A few loose ends cost you a polished prosecution, but the right woman is in custody.",
    3: "You named the right culprit, but the case was thin. Her barrister will fight for every doubt.",
    2: "Part of your case held up, but the accusation fell apart. The killer is still free.",
    1: "The accusation failed. The coroner's finding stands, and the crown stays an accident."
  }
};

const rules = { hintPenaltyAt: [3, 6], wrongLinkLimit: 10, labSkipAfter: 3 };


// Two independent paths to the key proof (validator section 7), authored for
// this port (the author's data declares criticalTestimonies instead; the two
// sets below are exactly those testimonies). c_margo_in_grid is provable from
// the thread on the hatch alone, from the hole in her alibi (Wren's knock),
// and from her own confession — losing any one route leaves the others.
const fairness = {
  proof: "c_margo_in_grid",
  paths: [["s_wren_locked"], ["s_margo_confession"]]
};

// Live twist (Round 3 port, same pattern as Cases 2–6): a scripted interlude
// surfaced by the engine when the party enters the chapter below. It grants
// one colour-only testimony — nothing references it in any requires, link or
// goal, so no proof path can depend on it.
const twists = [
  { chapter: 2, speaker: "penn", text: "A word from the front of house, detectives. Young Wren has been turning over a small thing from that night — not evidence, exactly, but it has stayed with her. It is on the board.", testimony: "s_wren_house", feed: "Wren remembered the girl in the front row." }
];

module.exports = { meta, speakers, conclusions, links, chapters, accusation, epilogue, rules, fairness, twists };
