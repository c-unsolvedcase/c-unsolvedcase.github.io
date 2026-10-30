// Clues for Case 3. `text` is what the finder sees. `analysis` clues need the Analyst's lab
// mini-puzzle (slider focus) before `revealed` is shown. `audio` plays a voice line.

module.exports = {
  // ---- starting evidence (given to the whole party in the briefing) ----
  prompt_book: {
    title: "Kit's prompt book, closing night",
    kind: "document",
    start: true,
    text: "The assistant stage manager's prompt book for the closing night, every cue and entrance marked in pencil. One line on the Act 2 page has been rubbed out and re-inked over, hard enough to score the page.",
    analysis: {
      prompt: "Tilt the page under raking light until the erased pencil line reads.",
      target: 0.45,
      tolerance: 0.07,
      revealed:
        "Under the ink, in Kit's pencil: '18:12 — ladder bell. Someone up.' The line was erased and the page re-inked later, neatly, by a hand that was not in a hurry."
    }
  },

  // ---- The Stage ----
  fallen_rope: {
    title: "The parted rope, fly line 7",
    kind: "object",
    text: "The rope that held the counterweight, coiled by the stage crew exactly as it fell. Half its strands end in a frayed burst; the rest end oddly flat and clean, in a neat angled line.",
    analysis: {
      prompt: "Raise the magnification until the fibre ends resolve.",
      target: 0.7,
      tolerance: 0.07,
      revealed:
        "Under magnification it is unmistakable: about half the strands were cut through with a blade in one angled pass, clean as a haircut. The remaining strands frayed and tore one by one under the show's load. The rope was cut halfway, then left to fail."
    }
  },
  sandbag: {
    title: "The fallen counterweight",
    kind: "object",
    text: "A canvas sandbag stencilled '24 KG — FLY 7', lying in the stage-right wing where it fell, beside a taped cross of glow tape — Margot's entrance mark, worn pale by a season of her shoes."
  },
  shawl: {
    title: "Margot's shawl",
    kind: "object",
    text: "Margot's shawl, draped over the wing flat exactly where she would wait for her entrance cue, in the dark, in the wings. She was superstitious about it: the shawl went on the flat before every entrance of her last ten years. She was at her mark, precisely where she had been told to stand."
  },
  blocking_bible: {
    title: "The director's blocking bible",
    kind: "document",
    text: "The master blocking book at the prompt desk, thirty years of entrances in three hands. The Act 2 page is new paper. Pasted in and initialled 'F.A.' this week: a changed cross that moves the Duchess's waiting mark two paces stage-left — directly beneath fly line 7."
  },
  cue_sheet: {
    title: "Kit's cue sheet, with a pencil note",
    kind: "document",
    text: "The running cue sheet from the prompt desk. Against the Act 2 entrance cue, in pencil: 'LX 47 — Miss E. to the NEW mark (blue)'. In the margin, timed in a different pencil stroke: '18:12 ladder bell??' — and beneath it, underlined, 'asked to re-ink p.40'."
  },
  door_log: {
    title: "Stage-door log, closing day",
    kind: "document",
    text: "The stage-door keeper's book. Closing day: matinee fly crew out 16:45. F. Ardell in 17:05 (front of house). R. Voss in 18:34 — the keeper has written 'late again' and underlined it twice. No fly crew signed in before 18:34."
  },

  // ---- Margot's Dressing Room ----
  board_letter: {
    title: "Unsent letter to the board",
    kind: "document",
    text: "A letter in Margot's hand, finished, folded, never posted. 'Dear Beatrice — By Monday you will have Petra Vane's list. Fourteen pieces of this theatre's history have been sold as duplicates, and every signature is the same one. I confronted him tonight, kindly, as I promised myself. If he will not resign, the list is yours, and so is my statement. — M.'"
  },
  dealer_catalogue: {
    title: "A dealer's catalogue, marked up",
    kind: "document",
    text: "A theatrical-antiques catalogue from H. Quill, 'by appointment only'. Three lots are circled in Margot's pencil, with prices and one furious note: a duchess gown 'Halvard, 1987', a mourning cloak 'Halvard heritage', a general's coat — 'OURS. SOLD FROM UNDER US.'"
  },
  dictaphone: {
    title: "Margot's dictaphone",
    kind: "audio",
    text: "Margot's rehearsal dictaphone, one memo on it, dated the morning of the closing day. Her own voice, dry as paper.",
    audio: {
      speaker: "margot",
      text: "For the letter, in case my nerve goes. The gowns are gone, Felix sells them one by one, and Petra's list proves it. I shall tell him tonight, kindly, and give him until Monday. It is more mercy than he showed this theatre."
    }
  },
  annotated_script: {
    title: "Margot's script, annotated",
    kind: "document",
    text: "Margot's working script of The Glass Duchess, thirty years of notes in the margins. At the Act 2 entrance, a fresh note in her hand: 'NEW cross — Felix's idea, wait on the blue mark, longer in the dark. Odd, after all these years. He says it reads better from the box.'"
  },
  morning_tickets: {
    title: "Two train tickets for Monday",
    kind: "object",
    text: "In Margot's handbag, two train tickets for Monday morning — one for herself, one for Petra Vane — and a note in her hand: 'Board at ten. Then lunch, and never think of him again.' She meant to face the board in person, with her witness beside her."
  },

  // ---- The Fly Gallery ----
  ladder_log: {
    title: "The ladder log",
    kind: "document",
    text: "The fly gallery's ladder sign-in sheet, a theatre law older than anyone in the building: every climb signed, crew only. Closing day: matinee crew down 16:40. Then, in a neat educated hand unlike any flyman's: '18:12 — F.A.' No other signature until R. Voss at 18:45."
  },
  rope_offcut: {
    title: "A length of rope behind the paint tins",
    kind: "object",
    text: "Behind the gallery paint tins, a forty-centimetre length of fly rope, the same line and lay as rope 7. One end is frayed old; the other is cut clean and angled — and the fibres at the clean end are bright, weeks fresh at most, where rope this old should be grey."
  },
  inspection_book: {
    title: "The rope inspection book",
    kind: "document",
    text: "The fly crew's inspection book. Closing day, in Ruben Voss's hand: '18:40 — all lines walked and sound — R.V.' Below, in the deputy's hand from the inquest: 'Gallery ladder bell does not appear to have rung before the show. Query.'"
  },
  hip_flask: {
    title: "A hip flask behind the paint tins",
    kind: "object",
    text: "A dented steel hip flask tucked behind the gallery paint tins, engraved 'R.V.' It still smells strongly of whisky. It is warm work in the flies, and the tins are exactly where a man would keep a bottle where the ladder cannot see it."
  },
  gallery_chalk: {
    title: "Chalk on the gallery boards",
    kind: "object",
    text: "Fresh blue chalk dust ground into the gallery boards around fly line 7, and one chalked handprint, fingers down, on the ladder rail at head height. Fly crews chalk their hands every show — but the dust here is in the boards' grain on the door side of the line, where a man would steady himself coming off the ladder."
  },

  // ---- Box Office ----
  sales_invoices: {
    title: "Heritage sales invoices",
    kind: "document",
    text: "A box-office file marked 'Duplicates — costume'. Fourteen invoices over three years to H. Quill, theatrical antiques: gowns, a cloak, a general's coat, about £41,000 in all. Every one is countersigned in the same neat hand: F. Ardell, Director."
  },
  box_office_diary: {
    title: "Rose's desk diary",
    kind: "document",
    text: "Rose Delgado's desk diary, kept in pencil for twenty years. Closing day: '17:30 — Mr A. and Miss E. at it in the office, through the wall. Her voice: 'You will resign, or I will ruin you, and I am sorry for it.' Then quiet. She came out white as her own ghost.'"
  },
  key_log: {
    title: "Heritage store key log",
    kind: "document",
    text: "The key cabinet's sign-out book for the heritage store. Across three years, one pattern: the store key out on Thursday afternoons, signed 'F.A.', back within the hour — always on days when the wardrobe mistress was at the other theatre with the touring show."
  },

  // ---- Costume Store ----
  petra_list: {
    title: "Petra's private stock list",
    kind: "document",
    text: "Petra Vane's private stock list, kept in her own hand because she stopped trusting the office copy. Fourteen heritage pieces are marked with dates and a small furious star: the 1987 duchess gown, the mourning cloak, the general's coat, and eleven more. At the foot: 'Copy to M.E. — September.'"
  },
  empty_rails: {
    title: "The empty rails",
    kind: "object",
    text: "A costume rail of labelled empty hangers, each with its heritage tag still tied on: 'DUCHESS GOWN — ELLERY, 1987', 'MOURNING CLOAK — HERITAGE', 'GENERAL'S COAT — DO NOT HIRE'. The gowns are gone. The tags, like gravestones, remain."
  },
  mending_book: {
    title: "The wardrobe mending book",
    kind: "document",
    text: "The wardrobe's mending book. Three entries across the years in Petra's hand — 'Duchess gown to repair, March', 'Cloak to the menders', 'General's coat, buttons' — each countersigned 'F.A.' below. None of the three ever came back from the menders, and no mender in the city has any record of them."
  },
  dealer_crate: {
    title: "A packed crate for the dealer",
    kind: "object",
    text: "A wooden crate by the store door, packed in tissue and stencilled 'H. QUILL — BY APPOINTMENT'. Inside, folded like a sleeping animal, is the silver wedding dress from the 1994 production — heritage, tagged, and caught before it could leave the building."
  },
  uv_chalk_dust: {
    title: "Chalk dust below the rail",
    kind: "object",
    text: "Beneath the fly rail the UV lamp picks out a drift of fresh chalk dust, still white — dust from hands that were chalked that day, not that season."
  },
  uv_wings_powder: {
    title: "Powder in the wings",
    kind: "object",
    text: "A spilled dusting of face powder in the wings, with one print of a heeled shoe pressed into it. Someone waited here a long while, keeping very still."
  }
};
