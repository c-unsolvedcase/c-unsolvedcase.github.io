// Case 4 "The Midnight Express": clues. Master difficulty: tight lab tolerances, many red herrings.
module.exports = {
  death_certificate: {
    title: "Dr. Marchetti's death certificate",
    kind: "document",
    start: true,
    text: "Sebastian Vale, 61, found dead in Compartment 3 at 07:10, door locked from inside. 'Heart failure, natural causes. A known cardiac patient.' Below, in another hand: 'The Meridian Sapphire is missing from his case.' The train reaches Valmer at noon, and the insurers want it checked."
  },

  // ---- Compartment 3 (Vale) ----
  vale_pillbox: {
    title: "Vale's heart-tablet case",
    kind: "object",
    text: "A silver pillbox with the day's tablets sorted into slots. Two of the slots hold capsules that don't look like the rest.",
    analysis: {
      prompt: "Magnify the slots until the tablet markings are readable.",
      target: 0.3, tolerance: 0.03,
      revealed: "Two capsules are digitalis at double strength, relabelled to match his usual heart tablets."
    }
  },
  brandy_glass: {
    title: "Brandy glass at his elbow",
    kind: "object",
    text: "A snifter with a dried ring of dregs. It smells of brandy and something bitter, like crushed leaves.",
    analysis: {
      prompt: "Filter the dregs until the crystals separate.",
      target: 0.58, tolerance: 0.03,
      revealed: "Digitalis glycoside crystals. Enough to stop a heart that was already weak."
    }
  },
  decanter_new: {
    title: "Decanter on the washstand",
    kind: "object",
    text: "A plain, bright decanter, still carrying a dining-car price label. Vale's valet says he always travelled with a chipped cut-glass decanter of his own."
  },
  connecting_door: {
    title: "Door between Compartments 3 and 4",
    kind: "object",
    text: "A locking door to the next compartment. Its bolt is drawn on Vale's side, but the brass plate carries fresh fine scratches and flecks of dull metal."
  },
  sapphire_case: {
    title: "The Meridian Sapphire's case",
    kind: "object",
    text: "The velvet case lies open. A deep blue stone sits in it. The certificate says it should weigh forty-one carats.",
    analysis: {
      prompt: "Examine the stone under the loupe until the seam shows.",
      target: 0.72, tolerance: 0.03,
      revealed: "Glass, with a polished seam under the girdle. The real sapphire has been swapped for a paste copy."
    }
  },
  vale_diary: {
    title: "Vale's travelling diary",
    kind: "document",
    text: "'F. begs me to postpone Valmer. He is frightened of the provenance papers. I will not. Dr. M. says again that my digitalis must never be doubled, not even once. Brandy at midnight, as always. Tomas knows.'"
  },
  sale_contract: {
    title: "Sale contract for the Meridian collection",
    kind: "document",
    text: "Signed by Vale, sale of the Meridian collection to Count Dmitri Volkov for 400,000, to be completed on arrival at Valmer. The count's signature is not yet on the contract."
  },
  nightcap_note: {
    title: "Note pinned beside the bell",
    kind: "document",
    text: "Vale's own handwriting: 'Brandy at midnight, from my decanter. Tomas will bring the tray.'"
  },
  window_catch: {
    title: "Compartment window",
    kind: "object",
    text: "The window is closed and painted shut. The paint is unbroken all round. Nothing came or went this way."
  },

  // ---- Sleeper corridor ----
  bell_log: {
    title: "Steward's bell log",
    kind: "document",
    text: "'Comp 3: bell 23:35, brandy at midnight. Tray taken 23:40.' In the same column, in the same hand, nothing after 00:05."
  },
  corridor_plan: {
    title: "Carriage plan",
    kind: "document",
    text: "A plan pinned in the corridor shows that Compartments 3 and 4 share a connecting door. Compartment 4 is marked 'L.F.'"
  },
  pantry_envelope: {
    title: "Envelope in the steward's pantry",
    kind: "document",
    text: "Hidden behind the tea tins: two thousand in notes, still in a bank band stamped 'FAIRWEATHER & VALE, CLIENT ACCOUNT'."
  },
  wire_hook: {
    title: "Bent wire in Compartment 4",
    kind: "object",
    text: "In the washbasin of Compartment 4, a length of stiff brass wire bent into a small hook, its tip bright with fresh wear."
  },
  provenance_papers: {
    title: "Provenance papers for twelve lots",
    kind: "document",
    text: "Certificates of provenance for twelve pieces in the Meridian collection, all signed by Lucian Fairweather and dated 1924. The paper looks suspiciously crisp.",
    analysis: {
      prompt: "Hold the sheet to the light until the watermark resolves.",
      target: 0.44, tolerance: 0.03,
      revealed: "The watermark is a mill mark first used in 1936. The papers were forged twelve years after their dates."
    }
  },
  passenger_list: {
    title: "Passenger list",
    kind: "document",
    text: "Comp 1 Dr. O. Marchetti. Comp 2 Count D. Volkov. Comp 3 S. Vale. Comp 4 L. Fairweather. Comp 5 I. Kessler. Comp 6 R. Hale. Steward T. Brenner. Conductor A. Reiss."
  },

  // ---- Dining car ----
  dining_roster: {
    title: "Dinner seating",
    kind: "document",
    text: "Vale and Fairweather shared a table. Hale dined alone. Volkov with Dr. Marchetti. Ivana Kessler with a book. Dinner ended at 22:30."
  },
  argument_slip: {
    title: "Maitre d's note",
    kind: "document",
    text: "'21:40. Mr. F. and Mr. V. raised voices over provenance and the Valmer sale. Mr. V. said he would not be bullied. Mr. F. left before dessert.'"
  },
  pantry_decanter: {
    title: "Cut-glass decanter in the pantry",
    kind: "object",
    text: "Chipped on the stopper. Rinsed, but not well, and pushed behind the plate racks.",
    analysis: {
      prompt: "Sharpen the rim residue until it resolves into crystals.",
      target: 0.66, tolerance: 0.03,
      revealed: "Brandy and digitalis, the same crystals as in the glass. This is the decanter that was poisoned."
    }
  },
  bar_tab: {
    title: "Staff card-club ledger",
    kind: "document",
    text: "'T. Brenner: debt 1,800, settled in full 14th.' Beneath it, in a different hand: 'Where did that come from?'"
  },
  dictation: {
    title: "Vale's dictation cylinder",
    kind: "audio",
    text: "Vale recorded a letter to his solicitor on the dining car's cylinder machine at 21:55.",
    audio: {
      speaker: "vale",
      text: "To my solicitor. I am dissolving my partnership with Lucian Fairweather at Valmer. He has been selling forgeries under my name for twelve years. I will make it public, whoever it hurts."
    }
  },
  rosalind_letter: {
    title: "Rosalind Hale's letter",
    kind: "document",
    text: "A letter to her bank: 'My uncle's estate will cover this when it comes. Please be patient.' She is heavily in debt, and her uncle's will leaves her half."
  },

  // ---- Saloon lounge ----
  card_score: {
    title: "Bridge score sheet",
    kind: "document",
    text: "Four players: Volkov, Marchetti, Fairweather, Kessler. Fairweather 'sat out' hands 7, 8 and 9, 'from 00:20 to 00:55 by the lounge clock'. The other three played every hand until 01:30."
  },
  lounge_clock: {
    title: "The lounge clock",
    kind: "object",
    text: "A brass clock on the saloon wall. A paper tag hung from it says: 'Not reset at the pass. Keeps old time.'"
  },
  volkov_telegram: {
    title: "Volkov's telegram to Vale",
    kind: "document",
    text: "'Sign at Valmer or I take my money elsewhere. I will not wait another day for the Meridian collection. D.V.' It is dated the day before."
  },
  doctor_bag: {
    title: "Dr. Marchetti's medical bag",
    kind: "object",
    text: "Her digitalis ampoules are all present, sealed, and counted against her log. Nothing has been touched since Vienna."
  },
  volkov_notes: {
    title: "Volkov's pencil notes",
    kind: "document",
    text: "A note scribbled on the score sheet's margin: 'F. gone, 00:20. Back 00:55, smelling of cold water, hands wet. Said he had been sick.' The times are lounge-clock times."
  },
  ivana_letter: {
    title: "Ivana Kessler's hospital letter",
    kind: "document",
    text: "From a clinic: 'Your mother's treatment cannot continue unless 3,500 is paid by the end of the month.' It is stained with tears."
  },

  // ---- Baggage car ----
  fairweather_trunk: {
    title: "Fairweather's steamer trunk",
    kind: "object",
    text: "Inside, wrapped in a shirt, is a brown bottle labelled 'garden remedy'. It is half empty and smells of crushed leaves. A matching bank band lies loose in the lid."
  },
  luggage_manifest: {
    title: "Luggage manifest",
    kind: "document",
    text: "Lists every item in the car. Ivana Kessler's valise was opened at 02:30 and retied badly. Nobody asked her about it."
  },
  paste_receipt: {
    title: "Jeweller's receipt",
    kind: "document",
    text: "'One paste copy, 41 carats, deep blue, as per photograph. For Miss I. Kessler. Paid in cash. 12th.' It was in the lining of her valise."
  },
  locket: {
    title: "Conductor's locket",
    kind: "object",
    text: "A silver locket, found between two crates, inscribed 'A. from R.' A hair ribbon sits beside it, smelling of lavender."
  },
  hale_note: {
    title: "Note from Rosalind to Anton",
    kind: "document",
    text: "'Baggage car, midnight, behind the crates. Don't tell anyone. R.' A smudge of lipstick sits in the corner."
  },

  // ---- Guard's van ----
  punch_book: {
    title: "Conductor's punch book",
    kind: "document",
    text: "Tickets punched on rounds at 22:00, 23:30 and 02:30. Between 23:50 and 01:00, no punch. Reiss claims he was in the van all night."
  },
  spare_key_log: {
    title: "Spare key register",
    kind: "document",
    text: "'Comp 3 spare, signed out 02:55 by I. Kessler, to fetch Mr. Vale's medicine. Returned 03:10.' Vale was dead at that hour."
  },
  border_log: {
    title: "Border log, Karst Pass",
    kind: "document",
    text: "'Midnight, Karst Pass. All train clocks advanced one hour at the frontier. Lounge clock not reset, my oversight. A.R.'"
  },
  stopped_watch: {
    title: "Vale's pocket watch",
    kind: "object",
    text: "Found under his chair, glass cracked and hands frozen. It was set to train time at the border.",
    analysis: {
      prompt: "Refine the hand positions until the stopped time reads clearly.",
      target: 0.52, tolerance: 0.03,
      revealed: "01:50 train time, which is 00:50 by the old clocks. The watch stopped as he fell."
    }
  },
  exam_note: {
    title: "Dr. Marchetti's examination note",
    kind: "document",
    text: "'Rigor and body temperature suggest death between 01:30 and 02:30 train time. Pills in the case consistent with usual prescription. No signs of struggle.' She did not test the capsules."
  },
  conductor_report: {
    title: "Conductor's report to the line",
    kind: "document",
    text: "'Compartment 3 door locked from inside, key in the lock, at 07:10. Compartment 4 occupied, passenger roused with difficulty.'"
  },

  uv_bolt_smear: {
    title: "Smear in the bolt channel",
    kind: "object",
    text: "Under the UV lamp a bright smear glows along the connecting door's bolt channel, with a single pale fibre caught where a wire would ride in the groove — foxglove tincture carries a fluorescence no clean bolt ever earned."
  },

  uv_baggage_dust: {
    title: "Rouge dust on the clasp",
    kind: "object",
    text: "The UV lamp wakes a blush of jeweller's rouge on a trunk clasp in the baggage car — the polishing dust of a stone worked loose and handled in a hurry, invisible in lamplight, patient under this one."
  }
};
