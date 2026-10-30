// Clues for Case 6. `text` is what the finder sees. `analysis` clues need the Analyst's lab
// mini-puzzle (slider focus) before `revealed` is shown. `audio` plays a voice line.

module.exports = {
  // ---- starting evidence (handed to the party at the briefing by Fiona Grant) ----
  crown_flake: {
    title: "The garnet flake in Sauer's sample tube",
    kind: "object",
    start: true,
    text: "A sample tube from Dr. Sauer's examination kit, bagged by the first officer at the gallery bench. In it, a sliver of red stone the size of a grain of rice, and in her hand on the label: 'Karash crown, great stone, 16:05 — loose at the claw. Sampled.' She prised it from the displayed crown's setting yesterday afternoon. Only the bench can say what the stone actually is.",
    analysis: {
      prompt: "Resolve the stone's composition against the reference garnets until the reading settles.",
      target: 0.42,
      tolerance: 0.07,
      revealed:
        "It is not a garnet. It is a synthetic spinel — laboratory-grown, flawless in the way nature never is, of a make that has existed for perhaps thirty years. The great stone of the Sun Crown of Karash, cut before gunpowder reached Europe, is a twentieth-century factory product. Whatever is sitting in the gallery case, its crowning jewel was made in a modern works. Ingrid Sauer sampled this at five past four yesterday. She knew within the hour."
    }
  },

  // ---- The Karash Gallery ----
  display_crown: {
    title: "The crown in its case",
    kind: "object",
    text: "The Sun Crown of Karash under its glass, on its cushion, in the light the gallery was built for: a gold circlet, chased and enamelled, with the great red stone at its brow. It is beautiful. It is also — if you stand where she stood and look the way she looked — somehow too easy in its beauty: the enamel a fraction bright, the chasing a fraction clean, and along the band's inner face, where no visitor ever sees, a fine straight seam, like the join of two halves of a mould."
  },
  sauer_notebook: {
    title: "Sauer's examination notebook",
    kind: "document",
    text: "Her notebook, open on the gallery bench where she left it, beside a pencil worn to a stub. The 2019 pages are pasted in at the front, in her hand: 'Karash crown. Weight 412 g. Great stone: garnet, smoky fire, one inclusion like a feather. Alloy: high-carat, native gold, soft.' Yesterday's page, in the same hand, is four lines long. 'Weight 388 g.' 'Stone: wrong fire. Too clean.' 'Alloy bright — modern?' 'Setting marks — rotary tool.' And at the foot, underlined twice: 'A.V. — tonight.'"
  },
  scope_slide: {
    title: "The microscope slide, still mounted",
    kind: "object",
    text: "The gallery's examination microscope, where she left it, a slide still mounted under the lens: a bright curling shaving of metal, taken — the bench log in her hand says — from an unwatched edge of the crown's band at 16:20. Under the lens the shaving's grain is even and industrial, the grain of rolled modern stock. The Karash crown was beaten from native gold by men who signed their work in runes. This metal was made by a machine that signs nothing."
  },
  ingrid_recorder: {
    title: "The audio-guide handset she borrowed",
    kind: "audio",
    text: "A gallery audio-guide handset from the desk, signed out to 'I. Sauer' at 15:50 and never returned. She used its record function the way she used everything: as a notebook. One memo, timed 16:22, in her voice.",
    audio: {
      speaker: "ingrid",
      text: "Note, four twenty-two. The stone is wrong, the weight is wrong, and the alloy under my lens is modern rolled stock. I certified a crown in this room in 2019 and this is not it — this is a copy, and a good one, and good copies are not made by thieves with a ladder. They are made by workshops. I will speak to the chief restorer tonight, and to the director at nine tomorrow, and God help whoever has been minding this case in between."
    }
  },

  // ---- The Restoration Workshop ----
  casting_mould: {
    title: "A casting mould in the assistant's locker",
    kind: "object",
    text: "In Tomás Herrera's locker, behind his aprons: a two-part investment mould for a circlet, of exactly the Sun Crown's measure, the inner face bearing the negative of chased ornament — and along the parting line, the maker's own habit, a tiny nick cut as a registration mark. A circlet cast in this mould would carry, along its band's inner face, one fine straight seam. It has been hidden here, recently and hurriedly, under a folded overall."
  },
  original_crown: {
    title: "Inside the hollow kouros",
    kind: "object",
    text: "The kouros at the plaster store's end has a seam around its back that the other statues do not — fresh plaster over old, worked by a practised hand. Inside the hollow cast, in a nest of acid-free tissue, lies a gold circlet with a great red stone. It is heavier than it looks — much heavier. The stone's fire is smoky and deep, with one inclusion like a feather, and the gold is soft and dark with the centuries. It has been in the dark for seven weeks, twenty paces from the case it belongs in."
  },
  requisition: {
    title: "The casting requisition",
    kind: "document",
    text: "From the workshop office drawer, the requisition file. One page, dated two years ago: 'Cast one circlet, Karash measure, for handling copy — schools programme. Requisitioned by: T. Herrera.' The signature is the assistant restorer's name. The page has been kept when older pages around it were thrown out — kept, perhaps, by the man whose drawer it is in, as a kind of insurance of his own. Paper this important deserves the lab's full attention: signatures, like stones, can be read.",
    analysis: {
      prompt: "Read the signature stroke by stroke — speed, pressure, and the pen's small hesitations.",
      target: 0.58,
      tolerance: 0.07,
      revealed:
        "The signature was drawn, not written. A written name flows; this one was copied — the strokes hesitate at the joins, the pen lifts twice inside the letters where no writer lifts, and the pressure is the even pressure of a hand watching a model. 'T. Herrera' was traced by somebody imitating the assistant's signature from an example. The casting of a crown-circlet was ordered in a young man's name, by an older and cleverer hand."
    }
  },
  geneva_invoice: {
    title: "The materials invoice",
    kind: "document",
    text: "From the materials cabinet, a dealer's invoice file in the chief restorer's name, kept with the workshop's ordinary orders: over two years, from a Geneva supplier of jewellers' materials — synthetic spinels, unset, 'garnet colour, large'; nine-carat gold alloy, rolled stock, in small repeated quantities; casting investment; ageing salts. Every order is marked 'restoration materials — A. Vale', and every one was paid from the workshop's petty account in amounts too small to question."
  },

  // ---- Archives & Registrar's Office ----
  movement_log: {
    title: "The crown's movement log",
    kind: "document",
    text: "The crown's movement record, in the registrar's beautiful hand, complete and serene. 2019: received, examined (Sauer), installed. Six quiet years of 'in case, undisturbed'. Then closed week, this spring: 'To workshop, rebacking of the band — A. Vale.' 'Returned to case.' 'Condition examined; no change — B. Lindqvist.' Nothing else. No journey since. A crown that has moved twice in seven years, both times on one page, in one week, in the spring of this year."
  },
  security_log: {
    title: "The gala-night security log",
    kind: "document",
    text: "The night security log for gala night, kept at the archives desk. The evening's lines in Marcus Feld's biro: doors, rounds, the gala's ebb and flow, all in a working hand. And among them, one line that sits differently on the page: '23:00 — secure wing checked, all quiet', in a smoother, darker ink, in a careful registrar's hand — the hand of Beatrice Lindqvist. A log line in the wrong pen, in the wrong handwriting, deserves the lab before it deserves belief.",
    analysis: {
      prompt: "Separate the page's inks and sittings until the night's writing resolves into its true order.",
      target: 0.64,
      tolerance: 0.07,
      revealed:
        "Two pens wrote this page. Feld's lines are biro throughout, in the small hours' tired hand. The 23:00 line — 'secure wing checked, all quiet' — is written in a gel pen, the registrar's office pen, and its ink sits on the paper exactly as the 21:45 entry's ink sits: same pen, same session, same unhurried hand. The 23:00 check was written at a quarter to ten, in the registrar's office, before it could possibly have been known. The secure wing was not checked at eleven. It was certified at nine forty-five."
    }
  },
  lindqvist_letter: {
    title: "The Ashworth draft, in the deed box",
    kind: "document",
    text: "In the deed box of the Ashworth Bequest, beneath the accession papers: a draft provenance letter, the museum's triumph of 2016 — the letter that authenticated the bequest's founding document. The letter itself was later shown to be a nineteenth-century fabrication; the authentication was withdrawn in whispers and the donor never told. This draft is annotated throughout in a young registrar's pencil — 'verify seal', ' hand is right', 'accept' — and carries, at its foot, an authentication stamp and the initials B.L. It should have been burned in 2016. Somebody filed it instead, the way a careful man files a weapon."
  },
  leave_chit: {
    title: "The registrar's leave chit",
    kind: "document",
    text: "From the staff board, the leave chits for the spring, kept a year by office habit. One, approved and countersigned: 'B. Lindqvist, registrar — annual leave, the whole of closed week; no duties; signed out the Friday before.' The registrar who certified the Sun Crown's condition during closed week — 'examined; no change' — was on leave from the Friday before it began until the Monday after it ended. She was not in the building. She did not examine anything."
  },
  exchange_log: {
    title: "The telephone exchange log",
    kind: "document",
    text: "The museum's telephone exchange log for gala night, kept by the night porter in a bored and beautiful hand: calls in, calls out, extensions noted. Among the caterers and the taxis, one internal call stands by itself: '21:32 — workshop extension to registrar's office. Four minutes.' At half past nine on gala night, with the speeches beginning upstairs, the chief restorer telephoned the registrar at her desk, and they talked for four minutes."
  },
  copier_log: {
    title: "The office copier's log",
    kind: "document",
    text: "The director's-office copier keeps its own account, as machines do: every job, its hour, its pages. Gala night holds one job among the gala's programmes and seating plans: '22:31 — personnel file, 34 pages, copied in full.' Thirty-four pages, at half past ten, in an office that should have been dark, of a file that is not a programme and not a seating plan. Somebody spent the loudest part of the gala alone with the copier and a personnel file."
  },

  // ---- The Gala Hall ----
  camera_request: {
    title: "The camera maintenance chit",
    kind: "document",
    text: "From the AV booth's chit folder, the maintenance requests for the quarter, in order. One is dated the morning of the gala: 'Secure-wing corridor camera — down for maintenance, gala night, 22:40 to 23:30. Gala traffic in the corridor expected; keep the log simple. Requested by: A. Vale.' The signature is the chief restorer's, confident and flowing — a signature he wrote himself, in his own name, for once."
  },
  booth_log: {
    title: "The AV booth's log",
    kind: "document",
    text: "The AV booth's machine log for gala night, printed out by the booth's own housekeeping: microphone checks, the speeches recorded, the wing camera feed dark 22:40–23:30 as scheduled — and one job that belongs to no gala: '22:47 — print, one page, from workshop terminal: reserve_diadem.txt.' A single printed slip, on the booth's good paper, sent from downstairs at thirteen minutes to eleven, while its supposed sender was on stage thanking the donors."
  },
  contact_sheet: {
    title: "The photographer's contact sheet",
    kind: "photo",
    text: "Jonas Reber's contact sheet for the gala, frame numbers and clock times burned in by the camera itself. The evening in little windows: the speeches; Sauer at the long table, listening, her notebook shut; Dr. Raman on the steps in her coat at 21:05, in the first departing wave; the director radiant at midnight. And at 22:44, an accidental frame across the hall — a tall figure in restorer's grey crossing toward the secure-wing stairs, while the speeches run on without him."
  },
  lure_slip: {
    title: "The slip in Sauer's handbag",
    kind: "document",
    text: "In her handbag, returned to the cloakroom with her wrap and never reclaimed: a single printed slip, on the AV booth's good paper, folded once. 'Dr. Sauer — the reserve diadem awaits your opinion in the fumigation anteroom before midnight. The piece travels Monday; yours is the eye we trust. — The Director's Office.' No signature. No office stamp. A message with the director's authority and none of the director's hand anywhere on it."
  },
  cloakroom_chit: {
    title: "The cloakroom stub book",
    kind: "document",
    text: "The cloakroom's stub book for the gala, stub by stub, in the attendants' hands. Sauer: wrap and handbag in at 19:40, stub 114 — never claimed. Raman: coat in at 19:35, claimed 21:05, stub 88, with the note 'taxi'. The director's party, the donors, the critics — all claimed by one in the morning. Stub 114 stands unclaimed still, a small paper monument to an evening that ended in the wrong room."
  },

  // ---- The Strongroom & Fumigation Chamber ----
  chamber_tape: {
    title: "The fumigation chamber's cycle tape",
    kind: "document",
    text: "The chamber's control tape, spooled out of the panel by the morning engineer and bagged unread: a printed strip, the machine's diary of the night — door events, cycle starts, ventings, each with its hour and its operator code, each in the tape's blunt capitals. Machines keep the most honest records in any building. This one deserves the analyst's full attention before anyone interprets it.",
    analysis: {
      prompt: "Read the tape event by event until the night resolves into its true sequence.",
      target: 0.71,
      tolerance: 0.07,
      revealed:
        "DOOR CLOSED 23:06 — CODE V-01. CYCLE MANUAL 23:10 TO 23:25 — CODE V-01. BATCH: (blank). VENT 05:52 — CODE V-01. DOOR OPEN 05:52 — CODE V-01. Nothing else, all night: no batch was loaded, no artefact was treated, and the day's honest cycle had run at noon. At ten past eleven somebody closed that door on a living woman and ran the chamber by hand for fifteen minutes — and at ten to six somebody came back and aired the room before the morning round. Both times, the panel was answered by one code. V-01 is the chief restorer's."
    }
  },
  sauer_badge: {
    title: "Her gala badge, on the chamber floor",
    kind: "object",
    text: "On the fumigation chamber's floor, by the chair, where no cleaning has yet dared to reach: a gala badge on its ribbon — 'DR. I. SAUER — CERTIFYING EXAMINER' — and beside it, a plain hairpin. She did not leave this room under her own power and she did not leave it tidily. Whatever the morning round was meant to believe, the woman in the chair had not simply sat down in the wrong room and fallen asleep among the artefacts."
  },
  diadem_trolley: {
    title: "The reserve diadem, on its trolley",
    kind: "object",
    text: "The reserve diadem of Karash, second piece of the collection, on its treatment trolley inside the chamber, where it was wheeled that afternoon to be fumigated before the tour. Its case is closed. The fine grey dust of the chamber lies on the case unbroken — except at one edge, where a gloved hand has rested, once, lightly, the way an examiner steadies a case before opening it. She reached the piece. She began. The case was never opened."
  },
  pressure_log: {
    title: "The gallery case's pressure log",
    kind: "document",
    text: "The security panel's oldest memory: the crown case's pressure plate, which weighs its cushion's burden and logs every opening. Years of nothing — then, at 02:13 on the Tuesday of closed week, an opening of forty-one minutes, and the plate's reading changing across it: 412 grams before; 388 grams after. And before that, in 2019, a reading entered at installation and initialled by the certifying examiner herself: 412. The case has been opened exactly once in seven years, in the dark, in the week the museum was shut."
  },
  uv_bracket_paint: {
    title: "Paint fleck at the camera",
    kind: "object",
    text: "Under the wing camera's bracket, the UV lamp finds a fleck of fresh grey paint and one bright scratch — the camera was taken down by hand, and recently, not by weather or age."
  },
  uv_plinth_dust: {
    title: "The dust rectangle",
    kind: "object",
    text: "On the plinth shelf the UV lamp shows a clean rectangle in the dust, the size of a small strongbox, lifted away within the last few weeks."
  }
};
