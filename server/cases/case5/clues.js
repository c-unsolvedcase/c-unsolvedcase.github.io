// Clues for Case 5. `text` is what the finder sees. `analysis` clues need the Analyst's lab
// mini-puzzle (slider focus) before `revealed` is shown. `audio` plays a voice line.

module.exports = {
  // ---- starting evidence (handed to the party at the briefing by Dr. Vane) ----
  medicine_phial: {
    title: "The phial from Fenn's berth",
    kind: "object",
    start: true,
    text: "The medicine phial from Aldous Fenn's berth, bagged by Dr. Vane at the scene and handed to the Inspectorate. Heavy, dark glass, no chemist's label, a hand-cut cork. Whatever it holds, it is not the bottle a careful man carried for six years — but only the bench can say what it holds, and how strongly.",
    analysis: {
      prompt: "Titrate the tincture against the prescription standard until the strength reads true.",
      target: 0.68,
      tolerance: 0.07,
      revealed:
        "It is Fenn's heart tonic — the same preparation Hartley's of Kingsmere dispensed to him for six years — at FOUR TIMES the prescribed strength. A dose of this would slow a strong heart over two to three hours and stop a weak one in its sleep. And the bottle is no chemist's issue: heavy unlabelled glass, a cork cut by hand. Somebody compounded a dose to order, and put it where a careful man would reach for it without looking."
    }
  },

  // ---- Berth B4 ----
  sealed_decanter: {
    title: "The whisky decanter, still sealed",
    kind: "object",
    text: "Fenn's whisky decanter on the berth dresser, three-quarters full, the railway's wax seal across its stopper unbroken — the seal he set on it himself when it was filled at Kingsmere, in the attendant's sight, as he did on every journey. Nobody has poured from it, dosed it, or opened it since. His nightcap for six years stands untouched on the night he died."
  },
  tumbler_test: {
    title: "The tumbler by the bed",
    kind: "object",
    text: "The berth's heavy tumbler, rinsed and set upside-down on the dresser cloth in Fenn's tidy way — but a tumbler keeps a ghost of its last contents in the grain of the glass, and the bench can read ghosts.",
    analysis: {
      prompt: "Lift the residue from the glass until its measure and strength resolve.",
      target: 0.35,
      tolerance: 0.07,
      revealed:
        "One measure — exactly one — of the concentrated tincture stood in this glass, and stood long enough ago for the film to dry in the grain: this was a dose measured out and drunk hours before the morning, not a drink poured in the night. And the dose matches the berth phial's strength, not the prescription's. Fenn measured his own tonic, once, at his usual hour, from the phial by his bed. Whatever poisoned him passed through his own careful hands."
    }
  },
  fenn_diary: {
    title: "Fenn's diary, from the drawer",
    kind: "document",
    text: "Fenn's appointments diary from the bedside drawer, kept in the hand of a man who wrote everything down. Friday: 'Inquiry opens. Ledger B to be laid before the commission FIRST.' Wednesday last: 'J.P. called at the house. Offered: the directorship's pension, then the firm's gratitude, then — when I laughed — a warning about old men's hearts. Refused all three. The ledger goes.' And beneath, underlined: 'If the book is ever missing, look first for the man who profits by its absence.'"
  },
  case_index: {
    title: "The briefcase and its index card",
    kind: "document",
    text: "Fenn's briefcase stands open on the luggage rack, and in its lid, in his hand, the index card he never travelled without: 'Contents — statement draft (3 pp.), certificate copies, Ledger B (blue, cloth), correspondence file.' The statement draft is there. The certificate copies are there. The correspondence file is there. Between the draft and the file there is a clean, ledger-shaped gap in the settled dust — and no blue ledger."
  },
  dictaphone: {
    title: "Fenn's dictaphone",
    kind: "audio",
    text: "Fenn's pocket dictaphone from the bedside, one memo on it, dictated at 21:52 on the night — at his dinner table, from the murmur under his voice.",
    audio: {
      speaker: "aldous",
      text: "Memo, for the statement, nine fifty-two. The certificates are the heart of it — not the crash, the certificates; crashes are weather, but a signature is a choice. Julian Pargeter signed paper he had not tested, and two men are dead of it, and on Friday I shall say so in a room built for saying so. If anything should happen to me on the way — the ledger is the whole of it. Keep the ledger safe, and nothing else matters very much."
    }
  },

  // ---- The Dining Car ----
  dinner_chit: {
    title: "The dining car's service chits",
    kind: "document",
    text: "The dining steward's service chits for the night, kept on the spike in order. Table 3 (Fenn, and Mr. Hugh): seated 21:10, courses through to 21:55, brandy declined. Table 6 (Pargeter, alone): seated 21:05; against 21:15, in the steward's hand — 'gentleman out, cloakroom, quarter hour'; against 21:30 — 'returned, brandy, no course missed'. Fifteen minutes, in the middle of dinner, on a train doing sixty."
  },
  cigar_case: {
    title: "Pargeter's cigar case, in the rack",
    kind: "object",
    text: "In the cloakroom rack by the dining-car door: a silver cigar case, engraved 'J.P.', left there by its owner when he came in to dinner — and still there, cool and undisturbed, when the car was cleared at Port Agnes. Whatever took Julian Pargeter out of the dining car at a quarter past nine, it was not this. He never came for it at all."
  },
  pantry_napkin: {
    title: "A napkin in the pantry linen bin",
    kind: "object",
    text: "In the pantry's bin for soiled linen, under the evening's honest napkins: one starched dining napkin, barely used, that does not belong to the wash at all. It is folded around nothing — but it holds the shape of something small and heavy that it carried, a phial-shaped damp ring pressed into the starch, and it smells, faintly and unmistakably, of Fenn's heart tonic."
  },
  wine_ledger: {
    title: "The wine tally, which does not add up",
    kind: "document",
    text: "The dining car's wine tally book, the steward's own account of the cellar: bottles out, bottles served, breakages written off. Read it with a pencil and it stops agreeing with itself some months back — always the good vintages, always 'breakage', always on this steward's late turns. The discrepancy runs to perhaps forty bottles. Whatever Emrys Cole has been doing in his cellar, he has been doing it with a book in one hand and a corkscrew in the other."
  },

  // ---- The Sleeping Car ----
  turndown_log: {
    title: "The turndown log",
    kind: "document",
    text: "The sleeping-car attendant's service log, in Nell Barber's careful hand. The evening's turndowns in order: A2 21:20 — 'Mr. Pargeter, bed made, nothing wanted'. A4 21:28 — 'Dr. Vane, extra pillow'. B4 21:35 — 'Mr. Fenn, turndown, tonic set out, case to bedside'. B6 21:44 — 'Mr. Hugh, turndown'. Then the rounds: 22:10 — 'B4, do not disturb, as instructed'. The berth of a man who died was serviced exactly once that night, at twenty-five to ten, while he was still at dinner."
  },
  spare_key: {
    title: "The spare key, under its seal",
    kind: "object",
    text: "In the attendant's cubby, the spare-key cupboard: a row of hooks, each key on a paper seal-tag initialled by the attendant who sealed it, so that any use shows. The spare for B4 hangs on its hook with its tag intact — 'N.B.' in Nell Barber's hand, the paper unbroken, the gummed edge never lifted. Nobody has taken that key down in the night, or in many nights. Whatever door was opened in B4, it was not opened with this."
  },
  genuine_phial: {
    title: "Fenn's own phial, in the linen bin",
    kind: "object",
    text: "At the bottom of the corridor's linen bin, under the night's used towels: a small phial of light glass, empty, rinsed, and labelled — 'Hartley's, Kingsmere. Tonic. A. Fenn. One measure at night.' This is the bottle of six years, the one Dr. Vane looked for by the bed and did not find. Somebody rinsed it, and threw it where the morning's laundry would carry it away unexamined."
  },
  source_bottle: {
    title: "The bottle in Pargeter's valise",
    kind: "object",
    text: "In Pargeter's valise, taken under seal from berth A2: travelling clothes, a cigar cutter, a timetable — and at the bottom, wrapped in a flannel, a heavy dark bottle of heart tincture, unlabelled, its cork cut by the same hand as the berth phial's. Three-quarters full. A director of a signalling firm does not pack heart medicine he does not take, in a bottle no chemist made.",
    analysis: {
      prompt: "Match the valise tincture against the berth phial's profile until the comparison resolves.",
      target: 0.8,
      tolerance: 0.07,
      revealed:
        "One making. The valise bottle and the berth phial hold the same tincture at the same fourfold strength, down to the trace of the water it was cut with — a private compounding, not any chemist's stock. The substitute phial was filled from this bottle, by whoever packed this valise. The dose that killed Aldous Fenn travelled to the Vesper in Julian Pargeter's luggage."
    }
  },
  money_envelope: {
    title: "The envelope in Nell's drawer",
    kind: "document",
    text: "In Nell Barber's cubby drawer, under her time-book: a plain envelope, unaddressed, holding a hundred and eighty pounds in banknotes so new they stick together — more than a year's wages for a sleeping-car attendant, in a drawer that holds nothing else of value. And beneath the envelope, the thing it was meant to bury: a sanatorium's bill, final demand, for a Thomas Barber — 'payment overdue; the patient's place cannot be held beyond the month'."
  },

  // ---- The Mail Van ----
  the_ledger: {
    title: "The blue ledger, under sack 14",
    kind: "document",
    text: "At the van's rear, under the bottom sack of pile fourteen: a cloth-bound ledger in faded blue, clean of the fine grey dust that skins everything loaded at Kingsmere. Inside, in Aldous Fenn's patient hand, page after page of it: the junction's safety certificates, each copied against the test sheet it claims to summarise — figures altered, failures passed, inspections signed that never happened. Every page ends the same way: 'Pargeter Signalling Ltd' — and a director's signature."
  },
  van_tally: {
    title: "The mail guard's waybill and tally",
    kind: "document",
    text: "Tallow's waybill for the night, ruled and exact. Kingsmere: 41 sacks aboard, counted twice, van sealed 20:58. Millbeck 22:47: one pouch out, door open two minutes. Harefield 03:05–03:20: three sacks out, two in, door open eight minutes, 'exchange signed, G.T.' And in the margin at Harefield, in the same hand but smaller, the way tired men write what is not their business: 'attendant at van with cushion linen, 03:12 — told her the cushions were fine.'"
  },
  van_seal: {
    title: "The van's seal record",
    kind: "document",
    text: "The seal board by the van door and the guard's record that matches it: the van's numbered seals, checked and initialled at every stop. Kingsmere — sealed. Millbeck — seal verified, unchanged. Harefield — seal broken by the guard's own hand for the exchange, new seal applied 03:20 in the driver's sight. Port Agnes — verified. In the whole of the night the van's side door was opened only where the timetable says it was."
  },
  tallow_bunk: {
    title: "The guard's bunk, and his alarm clock",
    kind: "object",
    text: "Tallow's bunk in the van's rear corner: blanket turned down, a thriller face-down at the page he stopped at, a flask of tea gone cold and filmed over. And on the shelf, his alarm clock — wound, set, and showing its setting plainly: ten past four. A man does not set an alarm for the middle of a night he means to spend awake. He sets it for the end of the sleep he has decided to take."
  },
  linen_parcel: {
    title: "The cushion-linen parcel, unused",
    kind: "object",
    text: "On the sorting table where she left it: Nell Barber's parcel of cushion linen for the guard's seat, still folded, still tied with its string, the cushions of the guard's seat themselves old, shiny, and entirely unreplaced. Whatever errand took the attendant to the mail van at twelve minutes past three, it was not this. The parcel was a story with string round it."
  },

  // ---- The Locomotive Cab ----
  train_register: {
    title: "The driver's train register",
    kind: "document",
    text: "The driver's register for the Vesper's run, kept on the footplate in the driver's hand and countersigned at the shed: Kingsmere away 21:05. Millbeck 22:45–22:47, signals clear, no one on the platform but the mail porter and the sleeping-car attendant with the pouch. The Kettleshaw tunnel 00:22–00:41, at speed throughout. Harefield 03:05–03:20, water and mails. No other stop, scheduled or otherwise, between the termini — 'a clean run, nothing to report but the weather'."
  },
  clock_card: {
    title: "The locomotive's clock card",
    kind: "object",
    text: "The clock card from the locomotive's recording clock, stamped by the mechanism itself at every stop and start of the run. Kingsmere 21:05. Millbeck 22:45, away 22:47. Harefield 03:05, away 03:20. The card is a machine's diary: it cannot be persuaded, hurried, or backdated, and it agrees with the driver's register to the minute, all night long."
  },
  fireman_notebook: {
    title: "The fireman's notebook",
    kind: "document",
    text: "The fireman's pocket notebook, in which footplate men note the night's oddities against the day they're asked about them. Among the coal and water entries, at Harefield: '03:14 — att'dant into van by rear gangway, flat blue parcel under her arm, while Tallow signed at side door. Not my business. Noting anyway.' Dated, timed, and signed with the care of a man who has been disbelieved before."
  },
  uv_berth_fibres: {
    title: "Fibres on the B4 door",
    kind: "object",
    text: "The UV lamp finds pale linen fibres snagged on the B4 door handle and frame at trolley height — the trace of linen stacked and carried past this door before the berth was made up for the night."
  },
  uv_van_chalk: {
    title: "Chalk tally in the van",
    kind: "object",
    text: "Chalked on the mail van's inner wall, a tally in two hands: forty-one sacks out of Kingsmere — and beneath it, in the second hand, a single stroke added later and half-rubbed away."
  }
};
