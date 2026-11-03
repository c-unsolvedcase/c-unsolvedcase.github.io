"use strict";
// Feature overlay data, keyed by case id. This module is the ONE place where
// per-case feature data lives outside the case folders:
//
//   ambience   scene id -> procedural WebAudio bed id (rain|wind|water|train|hush|room)
//   labBenches lab clue id -> "fingerprint" | "photo" (presentation only; the
//              lab mechanic itself stays in the case data + engine)
//   timeline   the case's TRUE night, as ordered steps { time, actor, scene,
//              card, title, text }. `card` is the conclusion/testimony/clue
//              whose earning gates the step in the board's Timeline view; the
//              full list is sent to clients only on a solved result (verdict
//              replay). Authored from each case's design note.
//   coldOpen   (Cases 2–6) a skippable pre-Chapter-1 prologue: beats by the
//              case's briefing speaker + flavour inspect spots. Flavour only —
//              nothing essential exists only here. Its voice lines are NOT
//              part of the case's allLines; they are generated separately
//              (tools/make_feature_voices.js) and keyed via voiceKey.
//
// Case 1's data files are frozen byte-identical, so everything Case 1 needs
// (ambience, benches, its verdict timeline) lives here too.

module.exports = {
  // ---------------------------------------------------------- Case 1
  case1: {
    // I1: one hidden brass key per scene (Blender coords, beside an anchor
    // hotspot). Pure bonus — keys never gate anything.
    keys: { harbor_office: [-1.65, 2.4, 2.43], apartment: [0.95, 2.42, 2.13], archive: [0.35, 2.3, 1.33], ferry: [-2.95, 0, 1.08] },
    ambience: { harbor_office: "room", apartment: "room", archive: "hush", ferry: "water" },
    labBenches: { bilge_page: "photo", notepad_impression: "fingerprint", coat_box: "fingerprint", hatch_latch: "photo" },
    timeline: [
      { time: "Six months", actor: "Clara Dunne", scene: "harbor_office", card: "c_skimming", title: "The skimming", text: "Clara voids ticket sales with her personal key 07 and pockets the cash — forty-one tickets across six months, and the money never reaches the bank." },
      { time: "That week", actor: "Elena Marsh", scene: "apartment", card: "c_elena_planned_police", title: "Elena decides", text: "Elena finds the theft. She will hear her best friend out on the last ferry — then go to the police on Friday." },
      { time: "22:20", actor: "Haverport", scene: "archive", card: "c_clara_alibi_false", title: "The last bus", text: "The last bus leaves Haverport at 22:20. The 22:45 bus Clara will later swear she caught does not exist." },
      { time: "22:52", actor: "Clara Dunne", scene: "harbor_office", card: "c_clara_boarded", title: "Ticket 0457", text: "Clara buys a ticket at the office window — and at 22:58 voids it with key 07, erasing herself from the record before she boards." },
      { time: "23:00", actor: "The Kestrel", scene: "ferry", card: "c_hidden_boarder", title: "Seven on six tickets", text: "The last ferry sails. The gangway counter clicks seven boardings; only six tickets are valid." },
      { time: "The crossing", actor: "Elena Marsh", scene: "ferry", card: "c_elena_habit", title: "Her Thursday habit", text: "Elena rides the 23:00 sailing, as she does most Thursdays, to think. Tonight she means to talk." },
      { time: "The crossing", actor: "Clara & Elena", scene: "ferry", card: "c_clara_on_deck", title: "The aft deck", text: "On the aft deck the two friends argue. Nina Kell, on watch and not asleep, is close enough to hear what happens." },
      { time: "The crossing", actor: "Elena Marsh", scene: "ferry", card: "c_method", title: "The hatch", text: "Elena strikes the engine hatch and goes over the side. The sea keeps her; the bent latch keeps the fibres of her teal scarf." },
      { time: "Dawn", actor: "Clara Dunne", scene: "archive", card: "c_cover_up", title: "The coat on the pier", text: "Clara leaves with the crew and places Elena's coat on the pier. The suicide story holds for ten years." }
    ]
  },

  // ---------------------------------------------------------- Case 2
  case2: {
    keys: { lobby: [-3.27, 0.6, 2.18], suite: [2.75, 0.8, 1.3], corridor: [-1.25, 1.5, 0.78], terrace: [2.35, 1, 0.68] },
    ambience: { lobby: "rain", suite: "room", corridor: "hush", terrace: "rain" },
    labBenches: { notebook_page: "photo", evening_shoes: "fingerprint", terrace_planter: "photo" },
    timeline: [
      { time: "21:00", actor: "Helen Marlowe", scene: "lobby", card: "c_refund_fraud", title: "The gala ends", text: "The Meridian's gala ends. Helen stays behind to work — she has found refunds in the hotel's books that never reached any guest." },
      { time: "01:48", actor: "Helen Marlowe", scene: "suite", card: "c_helen_confront", title: "The voice memo", text: "Alone in Suite 4, Helen records a memo: tonight she will confront the night manager about the ghost refunds." },
      { time: "02:10", actor: "Daniel Okoye", scene: "lobby", card: "c_lie_call", title: "The desk calls", text: "The front-desk phone rings Suite 4 for one minute. Daniel will swear he never spoke to Helen that night." },
      { time: "02:20", actor: "Walter Grieves", scene: "terrace", card: "c_walter_cleared", title: "A cigarette", text: "Walter, a resident, leaves the terrace where he was smoking against the house rules — before anything happens there." },
      { time: "02:28", actor: "The terrace door", scene: "terrace", card: "c_helen_terrace", title: "The door opens", text: "The building log shows the terrace door open. Helen is up there, and she is not alone for long." },
      { time: "02:35", actor: "Helen Marlowe", scene: "terrace", card: "c_fall_terrace", title: "The fall", text: "Helen goes over the rail against the planter. A Room 5 guest will remember voices above, minutes earlier." },
      { time: "02:47", actor: "Daniel Okoye", scene: "corridor", card: "c_daniel_left_desk", title: "Card N2", text: "The service lift travels terrace to ground on staff card N2 — Daniel's card. The body is moved to the service stairs." },
      { time: "03:05", actor: "Priya Nair", scene: "corridor", card: "s_priya_saw", title: "Straightening the rug", text: "Priya, passing with linen, sees Daniel on the stairs, wiping his hands: 'Straightening the rug.' He tells her she was never out of the laundry." },
      { time: "04:00", actor: "Daniel Okoye", scene: "corridor", card: "c_lie_desk", title: "A steady hand", text: "Daniel signs the fire register at the desk in a calm, steady hand — for a man who claims he never left it." },
      { time: "05:40", actor: "The Meridian", scene: "corridor", card: "c_staged", title: "An accident", text: "Helen is found at the foot of the service stairs. The hotel calls it an accident before the night is out." }
    ],
    coldOpen: {
      scene: "lobby",
      title: "Before the gala ended",
      panels: ["assets/panels/case2-1.jpg", "assets/panels/case2-2.jpg", "assets/panels/case2-3.jpg"],
      beats: [
        { speaker: "ada", text: "Before we open the file, walk the lobby with me. This is where the Meridian's gala ended that night — two hundred guests, and every one of them gone by eleven." },
        { speaker: "ada", text: "Helen Marlowe stayed behind. A historian, methodical, the sort who alphabetises her own bookshelf. She told the desk she had work to finish." },
        { speaker: "ada", text: "By morning she was lying at the foot of the service stairs, and the hotel called it an accident before her tea went cold. Hotels prefer accidents. They photograph better." },
        { speaker: "ada", text: "Nothing you see here is evidence — not yet. But get the feel of the place. Rich carpets swallow more than sound." }
      ],
      spots: [
        { label: "The guest book", text: "Two hundred signatures in fountain pen. The last page is smudged where the night porter blotted it — a careful hand, even at four in the morning." },
        { label: "The gala programme", text: "'An Evening of Meridian History.' The guest of honour was meant to speak. The programme still lists her name." },
        { label: "The tall windows", text: "Rain, then and now. It drums the glass softly, the way it must have drummed it that night — loud enough to cover small sounds." }
      ]
    }
  },

  // ---------------------------------------------------------- Case 3
  case3: {
    keys: { stage: [2.7, 1.15, 1.33], dressing: [1.25, 1.95, 1.43], flies: [2.05, 1.2, 1.28], boxoffice: [-0.95, 1.95, 1.56], store: [3.45, -0.7, 1.1] },
    ambience: { stage: "hush", dressing: "room", flies: "hush", boxoffice: "room", store: "hush" },
    labBenches: { prompt_book: "photo", fallen_rope: "fingerprint" },
    timeline: [
      { time: "September", actor: "Petra Vane", scene: "store", card: "c_theft", title: "The stock list", text: "Petra's private stock list reaches Margot: fourteen of the theatre's heritage costumes have quietly been sold." },
      { time: "16:45", actor: "The fly crew", scene: "flies", card: "c_window", title: "The empty gallery", text: "The matinee fly crew leaves. For the only stretch that afternoon, the fly gallery stands completely empty." },
      { time: "17:05", actor: "Felix Ardell", scene: "stage", card: "c_felix_flies", title: "The director arrives", text: "Felix signs in at the stage door — through the front entrance, where the log will later be read very carefully." },
      { time: "17:30", actor: "Margot & Felix", scene: "boxoffice", card: "c_row", title: "The row", text: "Margot confronts Felix in the office. Through the box-office wall, Rose hears every word and writes it in her desk diary." },
      { time: "18:12", actor: "\"F.A.\"", scene: "flies", card: "c_lie_flies", title: "The ladder log", text: "Someone climbs to the gallery and signs the ladder log 'F.A.' — the only non-crew initials that week, inside the only empty window." },
      { time: "18:34", actor: "Ruben Voss", scene: "flies", card: "c_ruben_cleared", title: "The flyman's secret", text: "Ruben signs in late, straight from the pub. At 18:40 he signs the rope inspection 'all sound' without climbing — then sleeps it off in the crew room." },
      { time: "19:30", actor: "Felix Ardell", scene: "stage", card: "s_felix_box", title: "Curtain up", text: "The show begins with Felix in the director's box, in full view of the house — exactly where he needs to be seen." },
      { time: "20:47", actor: "Margot Ellery", scene: "stage", card: "c_method", title: "The weight falls", text: "Fly rope 7 parts where it was cut. Twenty-four kilos of counterweight fall on Margot's re-blocked mark, and Ruben raises the alarm believing his skipped inspection killed her." }
    ],
    coldOpen: {
      scene: "stage",
      title: "Two shows a night",
      panels: ["assets/panels/case3-1.jpg", "assets/panels/case3-2.jpg", "assets/panels/case3-3.jpg"],
      beats: [
        { speaker: "bea", text: "Stand where the audience can't see you — the wings. Every theatre runs two shows: the one out front, and the one back here." },
        { speaker: "bea", text: "Margot Ellery played this stage for thirty years. She knew every board, every rope, every mark taped to the floor. Especially her own mark." },
        { speaker: "bea", text: "On the last night of the run, a counterweight fell where she was standing. The theatre called it a tragedy of old rigging — old rigging, in a house she kept like a church." },
        { speaker: "bea", text: "Look around before we begin. Theatres keep everything: programmes, grudges, ghosts. Mostly grudges." }
      ],
      spots: [
        { label: "The ghost light", text: "A single bulb on a stand, left burning when the theatre is dark. Tradition says it's for the ghosts. Stagehands say it's so nobody falls into the pit. Both, probably." },
        { label: "Tape marks on the boards", text: "Crosses of coloured tape everywhere — every actor's place, every night. Some are fresh. Some are older than the apprentices." },
        { label: "The prompt corner", text: "A desk, a lamp, the book with every cue. Whoever sits here hears everything that happens above and below the stage." }
      ]
    }
  },

  // ---------------------------------------------------------- Case 4
  case4: {
    keys: { mast: [2.75, -0.9, 0.56], lab: [2.05, 1.9, 1.48], comms: [-1.05, 1.9, 1.5], dorm: [-2.75, 1.8, 1.33], gear: [2.45, 1.6, 0.68] },
    ambience: { mast: "wind", lab: "room", comms: "room", dorm: "hush", gear: "room" },
    labBenches: { weather_record: "photo", mast_card: "fingerprint", check_core: "photo" },
    timeline: [
      { time: "Wednesday", actor: "Dr. Maren Haug", scene: "lab", card: "c_fraud", title: "The check-core", text: "Maren's check-core results come back: the ash band sits at 38 metres, not the published 44. Three seasons of ice-core data were fabricated." },
      { time: "Thu 14:40", actor: "Maren & Tomas", scene: "lab", card: "c_row", title: "The row", text: "Maren confronts Tomas Riedel in the lab. In the adjoining dispensary, Elias hears the row through the wall." },
      { time: "15:05", actor: "Tomas Riedel", scene: "gear", card: "c_riedel_out", title: "Stakes — mast line", text: "Riedel signs the sortie board 'stakes — mast line' and takes the line mallet. At the comms-room window, Jo watches him go." },
      { time: "15:05–15:50", actor: "Tomas Riedel", scene: "mast", card: "c_line_moved", title: "Twenty-five minutes", text: "His GPS track runs the line, then stops for twenty-five minutes at the far end, where there are no stakes — moving flags 12 to 14 sixty metres off the safe line." },
      { time: "15:55", actor: "Tomas Riedel", scene: "gear", card: "c_afternoon", title: "Snow in his cuffs", text: "The airlock cycles Riedel back in. Elias passes him in the corridor with snow still in his cuffs — though he will claim he never left the station that day." },
      { time: "16:05", actor: "LAB-2 terminal", scene: "lab", card: "c_no_fault", title: "Fault F-31", text: "From the LAB-2 terminal, on Riedel's key card, a mast fault — F-31 — is typed into the logger as a manual entry. There is no fault." },
      { time: "21:40", actor: "Dr. Maren Haug", scene: "comms", card: "c_sent_out", title: "Sent into the storm", text: "Nadia relays fault F-31. Maren signs out and the airlock cycles. Nobody else leaves or returns all night." },
      { time: "22:20", actor: "Dr. Maren Haug", scene: "mast", card: "c_record_true", title: "\"No fault\"", text: "From the mast, Maren radios: 'Anemometer clean. No fault. Coming home.' Her dictaphone at the mast says the same at 22:05." },
      { time: "23:05", actor: "Dr. Maren Haug", scene: "comms", card: "s_nadia_calls", title: "The broken call", text: "A weak, broken call comes in. Nadia logs it and calls back. No answer." },
      { time: "23:40", actor: "The storm", scene: "mast", card: "c_method", title: "The long dark", text: "The storm peaks. Maren is already lost on the wrong line, following flags that were moved. Time of death is put at about 01:00." },
      { time: "Fri 06:40", actor: "Sara Iversen", scene: "mast", card: "s_sara_found", title: "Found", text: "The search team goes out at first light. Sara finds Maren by the dump, on the line that should have brought her home." }
    ],
    coldOpen: {
      scene: "comms",
      title: "The station's ear",
      panels: ["assets/panels/case4-1.jpg", "assets/panels/case4-2.jpg", "assets/panels/case4-3.jpg"],
      beats: [
        { speaker: "hanna", text: "Before the file opens, look at this room. Comms is the station's ear — every word in or out of Kestrel passes across this desk." },
        { speaker: "hanna", text: "Six people winter here. Six. When something goes wrong at a polar station, there is no stranger to blame. There is only ever one of the six." },
        { speaker: "hanna", text: "Dr. Maren Haug ran this station and knew ice the way you know your own hands. The storm that took her was real. The errand that sent her into it was not." },
        { speaker: "hanna", text: "Get warm while you can. Out there the wind doesn't argue. It just takes." }
      ],
      spots: [
        { label: "The radio log", text: "Columns of times and call signs in pencil. Polar stations run on pencil — ink freezes." },
        { label: "The satellite schedule", text: "Passes at fixed hours, circled in red. The station's only clock that matters is the sky's." },
        { label: "The chess board", text: "A game in progress, mid-winter rules: nobody resigns, nobody wins. The game just outlasts the dark." }
      ]
    }
  },

  // ---------------------------------------------------------- Case 5
  case5: {
    keys: { berth: [-0.05, 2.2, 2.3], dining: [-3.05, 1.9, 1.53], sleeper: [-2.85, 1.9, 1.48], mailvan: [4.15, 2.2, 1.78], cab: [1.35, 1.9, 1.88] },
    ambience: { berth: "train", dining: "hush", sleeper: "train", mailvan: "train", cab: "train" },
    labBenches: { medicine_phial: "fingerprint", tumbler_test: "photo", source_bottle: "fingerprint" },
    timeline: [
      { time: "20:42", actor: "George Tallow", scene: "mailvan", card: "c_train_fixed", title: "Forty-one sacks", text: "Boarding at Kingsmere. The mail van is loaded — forty-one sacks, counted and tallied by the guard. The Vesper's night is fixed to the minute from here." },
      { time: "21:15", actor: "Julian Pargeter", scene: "dining", card: "c_handover", title: "The pantry hatch", text: "Pargeter leaves his table 'for his cigar case' — and in the pantry passes Nell a napkin-wrapped phial and an envelope of new notes. Emrys Cole sees it through the hatch." },
      { time: "21:35", actor: "Nell Barber", scene: "sleeper", card: "c_phial_swap", title: "The turndown", text: "Nell turns down berth B4 while Fenn is still at dinner: the heart-tonic phial is swapped for a concentrated one, and the ledger leaves his briefcase in her linen trolley." },
      { time: "21:52", actor: "Aldous Fenn", scene: "dining", card: "c_ledger_gone", title: "The memo", text: "Fenn dictates at the table — a memo about the falsified junction certificates his ledger proves — then takes the dictaphone back to his berth." },
      { time: "21:55", actor: "Hugh Fenn", scene: "sleeper", card: "s_hugh_row", title: "The corridor row", text: "Hugh begs his uncle to withdraw the ledger: the family holds Pargeter Signalling shares. The row is loud, unhappy — and innocent." },
      { time: "22:05", actor: "Aldous Fenn", scene: "berth", card: "c_swap", title: "Do not disturb", text: "Fenn retires to B4 and locks the door. Nell's 22:10 round notes 'B4 — do not disturb'. The substituted phial is already waiting by his bed." },
      { time: "22:30", actor: "Aldous Fenn", scene: "berth", card: "c_tonic_timeline", title: "The evening dose", text: "Fenn takes his evening tonic from the phial — four times the strength of his prescribed dose, in an unlabelled bottle." },
      { time: "23:40", actor: "Hugh Fenn", scene: "sleeper", card: "s_nell_turndown", title: "No answer", text: "Hugh knocks at B4 with the statement draft he promised. No answer. He assumes his uncle asleep and goes to his own berth." },
      { time: "03:12", actor: "Nell Barber", scene: "mailvan", card: "c_nell_van", title: "Harefield", text: "At the Harefield stop, Nell crosses to the mail van 'with cushion linen for the guard's seat' and hides the ledger under sack 14. The fireman sees her silhouette against the rear lamp." },
      { time: "06:10", actor: "Dr. Miriam Vane", scene: "berth", card: "s_vane_found", title: "The locked berth", text: "Tallow and Nell open B4 with the master key. Fenn is dead — and Dr. Vane notices the decanter's wax seal is unbroken, while the phial by the bed smells far too strong." }
    ],
    coldOpen: {
      scene: "dining",
      title: "The last train north",
      panels: ["assets/panels/case5-1.jpg", "assets/panels/case5-2.jpg", "assets/panels/case5-3.jpg"],
      beats: [
        { speaker: "elinor", text: "Board at Kingsmere, and mind the gap nobody minds. The Vesper is the last train north, and it keeps the hours the rest of the railway has forgotten." },
        { speaker: "elinor", text: "Dinner service, a sleeper car, a mail van full of other people's secrets. Aldous Fenn — retired inspector, travelling with a ledger that could hang a company — took his usual table." },
        { speaker: "elinor", text: "By Port Agnes he was dead in a locked berth, and the ledger was gone. The railway's word for it was 'misadventure'. The railway prefers its words tidy." },
        { speaker: "elinor", text: "Look about the dining car before we start. A train tells you a great deal, if you learn its rhythm." }
      ],
      spots: [
        { label: "The menu card", text: "'Consommé, turbot, saddle of lamb.' Printed for a line that has served the same dinner since before the war. Some things on the Vesper never changed. Some things did." },
        { label: "Table three", text: "A window table for two, laid for the inspector and his nephew. The silver is polished to a mirror — the steward's pride." },
        { label: "The carriage clock", text: "Railway time, kept to the second. On a night train, times are the one witness nobody can bribe." }
      ]
    }
  },

  // ---------------------------------------------------------- Case 6
  case6: {
    keys: { gallery: [0.55, 1.6, 1.9], workshop: [-3.05, 1.9, 1.28], archives: [4.45, 1.9, 1.88], gala: [-1.85, 2, 1.53], vault: [4.05, 2.2, 2.28] },
    ambience: { gallery: "hush", workshop: "room", archives: "hush", gala: "hush", vault: "room" },
    labBenches: { crown_flake: "photo", requisition: "fingerprint", security_log: "photo", chamber_tape: "fingerprint" },
    timeline: [
      { time: "Closed week, Mon 02:13", actor: "The gallery case", scene: "gallery", card: "c_replica", title: "412 grams to 388", text: "The crown case's pressure plate logs a 41-minute opening in the night. The weight on the plate changes from 412 grams to 388. The Sun Crown that goes back on display is a replica." },
      { time: "Closed week", actor: "\"B.L.\"", scene: "archives", card: "c_log_forged", title: "The movement log", text: "The log records the crown to the workshop 'for rebacking' and back, 'condition examined, no change — B.L.' The registrar was on leave all week." },
      { time: "Closed week", actor: "Adrian Vale", scene: "workshop", card: "c_original_here", title: "Inside the kouros", text: "The original crown is sealed inside a hollow plaster kouros cast in the store — cast, innocently, by Vale's assistant under a forged requisition." },
      { time: "Gala day, 16:00", actor: "Dr. Ingrid Sauer", scene: "gallery", card: "c_sauer_knew", title: "The keeper looks closely", text: "Sauer examines the displayed crown: synthetic stone, modern alloy, 24 grams light. She gives Vale until 09:00 tomorrow." },
      { time: "18:40", actor: "Sauer & Vale", scene: "workshop", card: "s_herrera_voices", title: "The confrontation", text: "Sauer confronts Vale in the workshop. Herrera, working late, hears the end of it through the door." },
      { time: "21:32", actor: "Adrian Vale", scene: "archives", card: "c_blackmail", title: "Four minutes", text: "From the workshop extension, Vale telephones Beatrice Lindqvist for four minutes — the registrar he has been blackmailing for two years." },
      { time: "21:45", actor: "Beatrice Lindqvist", scene: "archives", card: "c_bea_records", title: "Written in advance", text: "Bea writes the 23:00 wing check into the security log — in gel pen, before the check could possibly have happened." },
      { time: "22:40", actor: "Adrian Vale", scene: "vault", card: "c_camera_gap", title: "Maintenance", text: "The wing camera goes down for 'maintenance' on Vale's signed chit, until 23:30. The wing is blind." },
      { time: "22:47", actor: "The workshop terminal", scene: "gala", card: "c_lure", title: "The lure", text: "A summons slip is printed from the workshop terminal — a message in Sauer's name that Sauer never sent, calling her down to the secure wing." },
      { time: "23:06", actor: "Dr. Ingrid Sauer", scene: "vault", card: "c_sauer_chamber", title: "Code V-01", text: "Sauer badges into the wing and the fumigation chamber door closes behind her on Vale's code. At 23:10 a manual nitrogen cycle begins, and runs to 23:25." },
      { time: "06:40", actor: "Marcus Feld", scene: "vault", card: "c_method", title: "Found", text: "Feld finds her when the chamber is vented and opened — again on code V-01. Fiona Grant is called before the museum opens." }
    ],
    coldOpen: {
      scene: "gallery",
      title: "Everything has a label",
      panels: ["assets/panels/case6-1.jpg", "assets/panels/case6-2.jpg", "assets/panels/case6-3.jpg"],
      beats: [
        { speaker: "fiona", text: "Come in quietly. Museums dislike noise almost as much as they dislike questions — and tonight we are going to ask a great many." },
        { speaker: "fiona", text: "The Sun Crown of Karash: twelve centuries old, and the heart of this museum. Dr. Ingrid Sauer was its keeper, and the most stubborn pair of eyes in the building." },
        { speaker: "fiona", text: "She was found in the fumigation chamber on the morning of the gala. The museum's word was 'accident'. The museum's word, I'm afraid, is one of the exhibits." },
        { speaker: "fiona", text: "Take a turn around the gallery first. Everything here has a label. Half the labels are wrong. That's rather the point of us." }
      ],
      spots: [
        { label: "The Sun Crown's case", text: "Glass, brass, and a plaque polished by ten thousand thumbs. Whatever sits inside has been photographed a million times. Photographs, of course, can't weigh anything." },
        { label: "The donor wall", text: "Names in gold leaf, generation over generation. Museums run on gratitude — and on nobody looking too hard at where the treasures came from." },
        { label: "A bench, mid-gallery", text: "Worn smooth by sitters. Sauer used to say you could judge a gallery by whether its benches faced the art, or the exits." }
      ]
    }
  },

  // ---------------------------------------------------------- Case 7 (ported: author's "Curtain Call")
  case7: {
    keys: { curtain_foyer: [-1.3, 2.3, 1.95], ashby_office: [-2.25, -0.35, 1.2], wardrobe: [1.05, 1.85, 1.45], stage: [-0.95, 0.75, 1.7], grid: [-0.35, 2.15, 1.95] },
    ambience: { curtain_foyer: "room", ashby_office: "room", wardrobe: "hush", stage: "hush", grid: "wind" },
    labBenches: { playbill_1999: "photo", hamper_shears: "fingerprint", cut_line_end: "photo", hatch_thread: "photo" },
    timeline: [
      { time: "27 years ago", actor: "Daniel Fenn", scene: "curtain_foyer", card: "c_play_stolen", title: "The stolen play", text: "Daniel Fenn writes The Glass Crown. Leonard Ashby puts his own name on it — and when Daniel's sister goes to court, Ashby has her called a liar." },
      { time: "The years after", actor: "Margo Dane", scene: "wardrobe", card: "c_margo_is_fenn", title: "A new name", text: "Daniel never recovers. His sister takes a new surname, joins Ashby's own theatre as wardrobe supervisor — and waits." },
      { time: "Opening night", actor: "The Marlowe", scene: "stage", card: "programme_night", title: "Opening night", text: "The Glass Crown opens under Ashby's name. Six people are backstage, and every one of them will lie about something." },
      { time: "Act 2", actor: "Margo Dane", scene: "grid", card: "c_margo_in_grid", title: "The climb", text: "After the last quick change, Margo locks the wardrobe and climbs the hidden loft ladder to the grid with her tailor's shears." },
      { time: "Act 2", actor: "Margo Dane", scene: "grid", card: "c_margo_cut_line", title: "Two thirds through", text: "She cuts the chandelier's line two thirds through — enough to hold the rehearsal loads, not the curtain call." },
      { time: "21:15", actor: "The chandelier", scene: "stage", card: "c_cut_after_q40", title: "Cue 40 holds", text: "At Cue 40 the line holds the full load for thirty seconds. The cut was made after the checks, during Act 2." },
      { time: "22:11", actor: "Leonard Ashby", scene: "stage", card: "c_line_cut", title: "Cue 88", text: "Ashby asks for the crown lowered for his bow. The parted line lets go, and the chandelier falls on the man who stole it." },
      { time: "22:15", actor: "Wren Adair", scene: "wardrobe", card: "c_shears_taken", title: "The hamper", text: "Wren finds the shears sticky on the cutting table and, in a panic, wraps them up and hides them in the hamper." }
    ],
    coldOpen: {
      scene: "stage",
      title: "Opening night",
      panels: ["assets/panels/case7-1.jpg", "assets/panels/case7-2.jpg", "assets/panels/case7-3.jpg"],
      beats: [
        { speaker: "penn", text: "Stand on the stage a moment, before the house fills. The Marlowe has played to this room for a hundred years, and tonight it opens its crown jewel — The Glass Crown, written and directed, the posters say, by Leonard Ashby." },
        { speaker: "penn", text: "Ashby owned everything here: the building, the company, the play. Especially the play. Remember that he owned the play. It is the sort of detail that gets a man killed politely, in a theatre, in front of four hundred witnesses." },
        { speaker: "penn", text: "At eleven minutes past ten, taking his bow, the chandelier came down on him. The coroner calls it a worn rope. The insurers, who are paid to be suspicious, would like a second opinion. Ours." },
        { speaker: "penn", text: "Nothing here is evidence yet. But get the smell of the place — dust, greasepaint, hot lamps. Theatres remember everything. It is why they are haunted so efficiently." }
      ],
      spots: [
        { label: "The chandelier", text: "A crown of glass and brass, hanging over the mark where Ashby took his bows. From the stalls it is the prettiest thing in the building. From the grid, it is a weight on a rope." },
        { label: "The ghost light", text: "A single bulb left burning on the empty stage. Tradition says it keeps the ghosts company. The stage manager says it keeps actors from falling into the pit. Both, probably." },
        { label: "The prompt corner", text: "The book, the cue lights, the stage manager's desk. Whoever sits here knows the show to the second — every entrance, every cue, every weight that flies." }
      ]
    }
  },

  // ---------------------------------------------------------- Case 8 (ported: author's "Station Nine")
  case8: {
    keys: { cold_store: [-2.15, 1.45, 1.4], mess: [-0.05, 2.3, 2.05], plant: [-1.55, -0.05, 1.15], radio: [2.3, 1.75, 1.5], lab: [0.85, -0.15, 1.18] },
    ambience: { cold_store: "hush", mess: "room", plant: "room", radio: "hush", lab: "room" },
    labBenches: { thermo_chart: "photo", core_14b: "photo", purple_parka: "photo", dataset_metadata: "photo" },
    timeline: [
      { time: "Years ago", actor: "Dr. Marit Solheim", scene: "lab", card: "c_marit_inflated", title: "Core 14-B", text: "Marit pads the layer count in Core 14-B to keep her grant alive. The published record of the ice is wrong, and only she knows by how much." },
      { time: "This winter", actor: "Anselm Voss", scene: "lab", card: "c_core_mismatch", title: "The recount", text: "Voss, recounting the core by hand, finds the truth. He decides to say so on the satphone at eight in the morning." },
      { time: "Midwinter dinner", actor: "Anselm Voss", scene: "mess", card: "c_voss_withdraw", title: "The toast", text: "At the midwinter dinner Voss says as much in his toast, in front of the whole station. The deadline is now public — and so is hers." },
      { time: "Before midnight", actor: "Dr. Marit Solheim", scene: "plant", card: "c_weir_bribed", title: "Three thousand", text: "Through the grant ledger, Marit has paid Jonas Weir three thousand to prepare the cold store: alarm to maintenance, release pin pulled, camera unplugged." },
      { time: "Before midnight", actor: "Jonas Weir", scene: "plant", card: "c_weir_sabotage", title: "The preparation", text: "Weir does the work he was paid for. The cold store is made into a trap that looks like a machine being a machine." },
      { time: "After dinner", actor: "Dr. Marit Solheim", scene: "mess", card: "c_card_borrowed", title: "Peg 4", text: "Marit takes Clara Reid's card from peg 4, so the door log will tell the wrong name." },
      { time: "23:11", actor: "Marit & Voss", scene: "cold_store", card: "c_marit_at_cold_store", title: "The cold store", text: "Under a pretext Marit leads Voss into the cold store, steps out, and lets the door latch behind her." },
      { time: "23:15", actor: "Jonas Weir", scene: "plant", card: "c_weir_heater", title: "The heater dies", text: "Weir kills the door heater so the seal will freeze fast and hard. Inside, the cold begins its slow work." },
      { time: "Afterwards", actor: "Pavel Koval", scene: "radio", card: "c_koval_protecting", title: "The false shield", text: "Pavel Koval, who loves her, tries to take the blame. The doctor writes 'accident', and the cold keeps the rest." }
    ],
    coldOpen: {
      scene: "cold_store",
      title: "The door that latched",
      panels: ["assets/panels/case8-1.jpg", "assets/panels/case8-2.jpg", "assets/panels/case8-3.jpg"],
      beats: [
        { speaker: "penn", text: "Mind the threshold. This is the cold store of Station Nine, Antarctica, in the middle of the midwinter dark — the room where the station keeps its food, its ice cores, and, for one night, its chief scientist." },
        { speaker: "penn", text: "Seven people winter here. Seven. When something goes wrong at a polar station there is no stranger to blame and no door out of the dark. There is only ever one of the seven." },
        { speaker: "penn", text: "Anselm Voss was found here in the morning, frozen, and the station's doctor wrote 'accident'. But the door latched from the outside, the alarm was silent, and Voss was a man who checked everything twice. Including, in the end, his own data." },
        { speaker: "penn", text: "Look around before we begin. Everything here is labelled, logged and frozen. Even the lies keep well in this room." }
      ],
      spots: [
        { label: "The door seal", text: "Rubber, steel, and a skin of frost. When this door closes, the cold inside stops being weather and becomes a sentence." },
        { label: "The core racks", text: "Cylinders of ancient ice in their tubes, each one a year of the world's weather, written in bubbles. People have built whole careers on these — and buried them here too." },
        { label: "The alarm panel", text: "A small panel of patient lights. It is supposed to scream if the door is shut with someone inside. On the night in question, it had nothing to say." }
      ]
    }
  },

  // ---------------------------------------------------------- Case 9 (ported: author's "The Midnight Express")
  case9: {
    keys: { compartment: [0.3, 1.8, 1.75], corridor: [1.65, 1.6, 1.85], dining: [3.7, 0.25, 1.8], lounge: [2.45, 1.75, 1.2], baggage: [-2.75, -0.05, 1.1], guard: [-0.25, 1.8, 2.05] },
    ambience: { compartment: "train", corridor: "train", dining: "hush", lounge: "hush", baggage: "train", guard: "train" },
    labBenches: { vale_pillbox: "fingerprint", brandy_glass: "fingerprint", sapphire_case: "photo", provenance_papers: "photo", pantry_decanter: "fingerprint", stopped_watch: "photo" },
    timeline: [
      { time: "Twelve years", actor: "Lucian Fairweather", scene: "dining", card: "c_forgeries", title: "The forgeries", text: "For twelve years Fairweather forges the provenance papers for the pieces Vale sells. The firm's respectability is built on his handwriting." },
      { time: "This week", actor: "Sebastian Vale", scene: "dining", card: "c_vale_exposure", title: "The watermark", text: "Vale finds the watermark — the proof of the forgeries — and tells his partner he will dissolve the firm and expose him at Valmer." },
      { time: "That evening", actor: "Lucian Fairweather", scene: "corridor", card: "c_fw_paid_brenner", title: "Two thousand", text: "Fairweather bribes the steward Tomas Brenner with two thousand to swap Vale's decanter for a stoppered one prepared with foxglove tincture." },
      { time: "23:40", actor: "Tomas Brenner", scene: "corridor", card: "c_brenner_tray", title: "The tray", text: "Brenner brings the nightcap tray at twenty to twelve. The decanter on it is not the one that left the pantry cellar — it is the prepared one." },
      { time: "Midnight", actor: "Sebastian Vale", scene: "compartment", card: "c_poison_in_brandy", title: "The nightcap", text: "Vale drinks his brandy at midnight, in a locked compartment, from a decanter his steward carried in. The foxglove begins its work." },
      { time: "After midnight", actor: "Lucian Fairweather", scene: "lounge", card: "c_fairweather_absent", title: "The lounge clock", text: "Fairweather slips away from the bridge table — by the lounge clock that nobody had reset, his absence is longer than anyone first reckons." },
      { time: "After midnight", actor: "Lucian Fairweather", scene: "compartment", card: "c_staged", title: "The staging", text: "Through the connecting door he swaps the decanters back, doubles Vale's capsules to stage a heart failure, and draws the bolt home with a wire." },
      { time: "01:50", actor: "Sebastian Vale", scene: "compartment", card: "c_death_time", title: "Ten to two", text: "Vale dies at ten to two, train time. The doctor, deceived by the staging, will sign a certificate of natural causes." },
      { time: "An hour later", actor: "Ivana Kessler", scene: "baggage", card: "c_ivana_thief", title: "The second crime", text: "Ivana Kessler, desperate for her mother's treatment, uses a signed spare key to swap the sapphire for a paste copy — and finds a dead man already cold. Two crimes, two culprits, one clock." },
      { time: "Morning", actor: "Dr. Marchetti", scene: "guard", card: "c_doctor_sealed", title: "Natural causes", text: "The doctor seals the compartment and signs. Everything is tidy, official — and wrong in every particular that matters." }
    ],
    coldOpen: {
      scene: "compartment",
      title: "The night train",
      panels: ["assets/panels/case9-1.jpg", "assets/panels/case9-2.jpg", "assets/panels/case9-3.jpg"],
      beats: [
        { speaker: "penn", text: "Mind the step up. This is Sebastian Vale's compartment on the Midnight Express — first class, locked from the inside, and in the morning, a problem no timetable can solve." },
        { speaker: "penn", text: "Vale dealt in beautiful old things with beautiful old papers. His partner, Lucian Fairweather, wrote half of those papers himself — which was a crime, then a fortune, and finally, this week, a deadline." },
        { speaker: "penn", text: "Vale drank his nightcap at midnight and died before two, behind a bolted door, and the train's doctor signed it natural causes by breakfast. The railway prefers its deaths tidy. This one was arranged to be exactly that." },
        { speaker: "penn", text: "Look about the compartment first. On a night train, everything is close, everything is heard, and every clock on board disagrees with the next one. Remember that. It matters here." }
      ],
      spots: [
        { label: "The connecting door", text: "Between this compartment and the next, a door that is supposed to stay locked from both sides. Supposed to. The bolt is bright where it has been worked." },
        { label: "The nightcap tray", text: "A silver tray, a decanter, a glass — the small ceremony of a rich man's midnight. Someone on this train took great care with this tray. Greater care than service requires." },
        { label: "The window blind", text: "Drawn against the night. Beyond the glass, the line climbs toward Karst Pass, and the clocks of two countries take turns to be right." }
      ]
    }
  }
};
