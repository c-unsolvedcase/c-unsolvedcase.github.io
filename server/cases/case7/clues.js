// Case 7 "Curtain Call" (ported from the author's case2): clues. Same format as case 1. Lab tolerance is tighter (hard difficulty).
module.exports = {
  accident_report: {
    title: "Coroner's preliminary report",
    kind: "document",
    start: true,
    text: "Leonard Ashby, producer-director of the Marlowe Theatre, died at 11 minutes past ten on opening night when the stage chandelier fell during the curtain call. Cause recorded: a worn rope gave way. The insurer will not pay out until someone double-checks the finding."
  },

  // ---- Foyer & Box Office ----
  programme_night: {
    title: "Opening night programme",
    kind: "document",
    text: "'The Glass Crown, written and directed by Leonard Ashby.' Crew: Stage Manager I. Calloway, Assistant W. Adair, Lighting D. Pike, Head Flyman T. Reed, Wardrobe Margo Dane. Leading lady: Celeste Marlowe."
  },
  playbill_1999: {
    title: "Framed playbill on the history wall",
    kind: "photo",
    text: "A faded playbill from a tiny theatre, hung among the old shows. The sun has bleached almost all of the print.",
    analysis: {
      prompt: "Raise the contrast until the lettering returns. Don't overshoot.",
      target: 0.41,
      tolerance: 0.05,
      revealed: "'THE GLASS CROWN, a new play by Daniel Fenn. Little Arbour Theatre, one night only, 1999. Costumes by M. Fenn.'"
    }
  },
  mortgage_letter: {
    title: "Bank letter to Ashby",
    kind: "document",
    text: "Final notice. The theatre is mortgaged to the limit and three payments are missed. Unless the building is sold by March, the bank will repossess it."
  },
  takings_book: {
    title: "Box-office takings book",
    kind: "document",
    text: "The house has been half empty all season. In the margin, in pencil: 'Pension fund to L.A. personal account: 31,400. Never repaid.'"
  },
  notice_board: {
    title: "Staff noticeboard",
    kind: "document",
    text: "Interval 20:50 to 21:10. 'GRID DOOR: keys held by T. Reed, I. Calloway and L. Ashby only. Nobody else goes up. No exceptions.'"
  },
  dorian_letter: {
    title: "Letter in the lost property box",
    kind: "document",
    text: "On Halloran Developments paper, to D. Pike: 'Thank you for your report on the condition of the building. As agreed, 2,000 is enclosed. Please keep us informed.'"
  },

  // ---- Ashby's Office ----
  manuscript: {
    title: "Typescript of The Glass Crown",
    kind: "document",
    text: "The title page has been pasted over with a new one carrying Ashby's name. At the bottom edge, where the paste has curled, a line of the older page shows: 'by D. Fenn'."
  },
  sale_contract: {
    title: "Draft sale contract",
    kind: "document",
    text: "The Marlowe is to be sold to Halloran Developments and demolished for flats. Signing is on Monday. A clause: 'all staff contracts end on completion'. Ashby has initialled every page."
  },
  ashby_diary: {
    title: "Ashby's desk diary",
    kind: "document",
    text: "'Dorian sulks. Tobias says the chandelier line is tired; ignored. The wardrobe woman keeps staring at the old poster in the foyer. Too quiet lately. Not a word to Iris.'"
  },
  court_letter: {
    title: "Solicitor's letter, 2012",
    kind: "document",
    text: "Copied to Ashby. 'Dear Ms Fenn: your claim that The Glass Crown was written by your late brother is dismissed for lack of evidence. Costs are awarded against you.'"
  },
  pension_complaint: {
    title: "Actors' union letter",
    kind: "document",
    text: "A formal complaint: company pension contributions have been deducted from wages for six years and never paid in. The union threatens to take Ashby to court."
  },
  celeste_note: {
    title: "Perfumed note in the blotter",
    kind: "document",
    text: "'L. After tonight it's finished. You tell your wife, or I will. And find another Isolde if you can. C.'"
  },
  contract_rider: {
    title: "Celeste Marlowe's contract rider",
    kind: "document",
    text: "Clause 9: 'The artiste is not required to climb ladders, steps or any structure above 2 metres, on medical grounds (vertigo).'"
  },

  // ---- Wardrobe & Dressing Corridor ----
  shadow_board: {
    title: "Wardrobe tool shadow board",
    kind: "object",
    text: "Every tool has a painted outline. The outline for the long 12-inch tailor's shears is empty. A label reads: 'SHEARS: sign out in the book.'"
  },
  signout_book: {
    title: "Tool sign-out book",
    kind: "document",
    text: "'Shears, 12-inch: I. Calloway, out 17:30, back 18:10, checked in by M.D.' Further down: 'Loft key: M. Dane, 12 Oct.' Nothing is signed out after 18:10."
  },
  loft_ladder: {
    title: "Ladder behind the costume rail",
    kind: "object",
    text: "A hidden hatch and a fixed ladder up to the wardrobe loft, and from there to the hatch under the grid. The padlock hangs open. The rungs are dusty except for two clean, rubbed patches. Two minutes' climb."
  },
  hamper_shears: {
    title: "Shears wrapped in a handkerchief",
    kind: "object",
    text: "The missing 12-inch shears, wrapped up and pushed to the bottom of the hamper marked 'Act 1 gowns'. Something has lodged between the blades.",
    analysis: {
      prompt: "Focus the macro lens on the pivot of the blades.",
      target: 0.58,
      tolerance: 0.05,
      revealed: "Tan manila fibres are wedged in the pivot, the same colour and lay as the line from batten 4."
    }
  },
  christmas_photo: {
    title: "Staff Christmas photograph",
    kind: "photo",
    text: "The whole company in paper hats. Margo Dane, front row, wears a soft dove-grey lambswool cardigan with pearl buttons. Tobias and Celeste stand at the back, not looking at each other."
  },
  fenn_photo: {
    title: "Photograph in the sewing box",
    kind: "photo",
    text: "A young man with a typewriter and a girl in a theatre wardrobe apron, both laughing. On the back: 'Daniel and Margo, Little Arbour, 1998. Break a leg.'"
  },
  quick_change_roster: {
    title: "Quick-change roster, Act 2",
    kind: "document",
    text: "Celeste's changes: 21:34 and 21:52, dressers M. Dane and W. Adair. Celeste is on stage for the final scene from 21:55 until the curtain call at 22:10. Everyone else is marked 'wings'."
  },

  // ---- Stage & Prompt Corner ----
  cut_line_end: {
    title: "Broken line end on the chandelier",
    kind: "object",
    text: "Two metres of the line are still shackled to the chandelier ring. It looks frayed at first sight, but one side of the break is oddly flat.",
    analysis: {
      prompt: "Zoom in on the broken end until the fibres separate.",
      target: 0.73,
      tolerance: 0.05,
      revealed: "Two thirds of the line was severed by a clean double-bevel stroke, the mark of long scissor-type blades. The last third is torn, where the line finally gave way."
    }
  },
  prompt_book: {
    title: "Stage manager's prompt book",
    kind: "document",
    text: "Iris Calloway's cue timings. 21:15, Cue 40: the chandelier was flown to trim and held for 30 seconds under full load. It held. 22:10, Cue 88: crown lowers for the bow. Every cue is initialled I.C. in her hand."
  },
  cue_memo: {
    title: "Ashby's last-minute memo",
    kind: "document",
    text: "Pinned in the prompt corner: 'Cue 88: lower the crown to one metre for the bow. I want the audience to see it. L.A.' It was added at the last rehearsal."
  },
  light_cue_log: {
    title: "Lighting console log",
    kind: "document",
    text: "Dorian's console printout. Every lighting cue from 41 to 88 was pressed by hand, with seconds recorded, from the booth at the back of the house."
  },
  rig_log: {
    title: "Flyman's rigging check log",
    kind: "document",
    text: "At the fly rail. '20:45 batten 4 line checked, sound. 21:12 re-checked before Act 2, sound.' Both signed T.R., the second in a shakier hand."
  },
  prop_bottle: {
    title: "Bottle behind the prop shelf",
    kind: "object",
    text: "A half-empty bottle of whisky and a hip flask engraved 'T.R.', hidden behind the prop shelf in the wings, with a folded coat for a pillow."
  },

  // ---- The Grid ----
  hatch_thread: {
    title: "Thread on the loft hatch",
    kind: "object",
    text: "A single fibre snagged on the splintered latch of the small hatch in the grid floor. It is too fine to see its colour properly.",
    analysis: {
      prompt: "Bring the thread into focus under the lamp.",
      target: 0.28,
      tolerance: 0.05,
      revealed: "A soft dove-grey lambswool thread, with a trace of a pearl-button thread knot at one end."
    }
  },
  line_anchor: {
    title: "Cleat where batten 4's line ends",
    kind: "object",
    text: "The line's tail is still on the cleat. Just below the cut point, scraps of tan fibre lie in the dust on the grating, as if cut away rather than worn off."
  },
  flyman_kit: {
    title: "Tobias's rigging kit roll",
    kind: "object",
    text: "A leather roll of tools: a hooked rigging knife, a sailmaker's palm, a marlin spike. Nothing with scissor blades. The knife has not been used for weeks."
  },
  grid_door: {
    title: "The grid door",
    kind: "object",
    text: "The door at the top of the back stairs, locked with a heavy key. Cobwebs span the frame and a film of dust lies on the handle. Nobody has opened it for days."
  },
  hatch_clean: {
    title: "The hatch from the wardrobe loft",
    kind: "object",
    text: "A small plywood hatch in the grid floor. The bolt is drawn back and the edges are wiped clean of dust. Someone came up this way very recently."
  },

  uv_hatch_fibres: {
    title: "Fibres along the hatch rim",
    kind: "object",
    text: "Under the UV lamp a trail of pale fibres glows along the hatch rim and across the ladder's top rung — more of the same fine wool, dragged upward by someone climbing through, and smeared where a knee or a shoulder brushed the frame."
  },

  uv_wardrobe_chalk: {
    title: "Chalk marks on the ladder",
    kind: "object",
    text: "The UV lamp wakes a dusting of tailor's chalk on the loft ladder's rails — two handprints' worth, high up, where the ladder meets the loft. Wardrobe chalk, on wardrobe's ladder, at a height nobody reaches by tidying."
  }
};
