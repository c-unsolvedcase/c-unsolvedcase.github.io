// Clues for Case 2. `text` is what the finder sees. `analysis` clues need the Analyst's lab
// mini-puzzle (slider focus) before `revealed` is shown. `audio` plays a voice line.

module.exports = {
  // ---- starting evidence (given to the whole party in the briefing) ----
  notebook_page: {
    title: "Rain-spotted notebook page",
    kind: "document",
    start: true,
    text: "A single page from Helen Marlowe's notebook, found by the gardener in a roof-terrace planter. Rain has bled the ink into brown clouds. Only a date can be read: the night of the gala.",
    analysis: {
      prompt: "Adjust the contrast filter until the handwriting comes into focus.",
      target: 0.62,
      tolerance: 0.07,
      revealed:
        "Helen's handwriting: 'Refunds, March to June: 63. All signed N2. The money never reached the guests. It is Daniel, and I hate it. Talk to him tonight, kindly, before Ada.'"
    }
  },

  // ---- Hotel Lobby ----
  refund_book: {
    title: "Refund book, two years",
    kind: "document",
    text: "The lobby refund ledger. From March two years ago to this June: sixty-three refunds for gala deposits and no-show bookings, every one authorised with code N2. Beside each, in a different pen: 'guest repaid' — but the guests' names have no matching receipts."
  },
  desk_drawer: {
    title: "Desk drawer and paying-in slips",
    kind: "object",
    text: "Bank paying-in slips for the refund account. Month after month the money paid back to the hotel's refund account is less than the bookings say it should be. The gap adds up to roughly 18,400."
  },
  desk_phone_log: {
    title: "Front-desk phone log",
    kind: "document",
    text: "The desk telephone's call register, printed by the system. Night of the gala, 02:10: front desk to Suite 4, Helen Marlowe's room. Duration one minute. It is the only call of the night."
  },
  guest_register: {
    title: "Guest register, gala night",
    kind: "document",
    text: "Suite 4: H. Marlowe (hotel historian, resident for the summer). Room 5: the Ashworths. Room 6: W. Grieves, permanent resident. Garden room: marked 'MAINTENANCE' for two nights in May — in handwriting that is not the maintenance man's."
  },
  gala_photo: {
    title: "Centenary gala photograph",
    kind: "photo",
    text: "A framed photograph of the centenary gala, that evening. Helen laughs at the front desk beside Daniel Okoye, who is smiling like a man in a brochure. Ada Whitlock raises a glass."
  },
  rota_card: {
    title: "Staff rota card",
    kind: "document",
    text: "The rota pinned behind the desk. Gala night: Tessa Wren, desk until 23:00. Priya Nair, floors, until 01:00. Daniel Okoye, night manager, 22:00 to 06:00 — sole staff in charge. Personal authorisation codes: D1 Wren, H3 housekeeping (Priya), N2 Okoye."
  },
  complaint_card: {
    title: "Guest complaint card, Room 5",
    kind: "document",
    text: "A complaint card in a guest's hand, timed 02:35 on the gala night: 'Woken by voices on the roof above us, a man and a woman, then a door slammed. Please ask them to keep it down. — Ashworth, Room 5.' Nobody ever followed it up."
  },

  // ---- Helen's Suite ----
  voice_memo: {
    title: "Helen's voice memo, 01:48",
    kind: "audio",
    text: "A voice memo on Helen's phone, recorded at 01:48 on the gala night. Her own voice, tired and steady.",
    audio: {
      speaker: "helen",
      text: "Note to self. Page forty-one again. N2. It has to be Daniel, and I hate it. I will talk to him tonight, kindly, before I tell Ada. He deserves the chance to explain."
    }
  },
  glasses_case: {
    title: "Empty glasses case",
    kind: "object",
    text: "Helen's reading-glasses case on her desk, open and empty. Her spare pair is in the drawer, untouched. Everyone who knew her says she never read, wrote or walked the hotel without the main pair on her nose."
  },
  centenary_draft: {
    title: "Centenary book, finance chapter draft",
    kind: "document",
    text: "Helen's draft chapter on the hotel's finances, covered in pencil. In the margin beside the refunds paragraph, underlined twice: 'ask D. about the refunds — kindly. He may have an explanation.'"
  },
  evening_shoes: {
    title: "Helen's evening shoes",
    kind: "object",
    text: "The shoes Helen wore on the gala night, returned by the police and left by the suite door. There is something pale caught in the tread of the left shoe.",
    analysis: {
      prompt: "Raise the magnification until the material in the tread resolves.",
      target: 0.5,
      tolerance: 0.07,
      revealed:
        "Pale granite chips, crushed into the tread. The hotel's roof terrace is surfaced with exactly this pale granite gravel. The service stairs are carpeted and swept nightly — there is no gravel anywhere near them."
    }
  },
  packed_case: {
    title: "Packed suitcase and morning ticket",
    kind: "object",
    text: "Helen's suitcase, packed and strapped by the door, with a morning train ticket on top. She meant to leave the day after the gala — after she had spoken to Ada."
  },

  // ---- Service Corridor ----
  door_log: {
    title: "Building panel: door log",
    kind: "document",
    text: "The building system's door contacts, gala night. Roof-terrace door: opened 02:28, closed 02:31; opened 02:44, closed 03:01. No other terrace-door openings all night. The service-stairs door has no contact fitted."
  },
  lift_log: {
    title: "Service lift log",
    kind: "document",
    text: "The service lift is staff-card operated and logs every ride. Gala night: 02:47, card N2, terrace level down to ground. 03:04, card N2, ground floor to the second floor — the managers' corridor, where Daniel keeps a rest room. No other rides after midnight."
  },
  stairs_carpet: {
    title: "The service stairs",
    kind: "object",
    text: "The stairs where Helen was found. The carpet runner is clean, close-piled and vacuum-striped from the nightly clean — no grit, no gravel, no scuff at any tread. On the landing, a faint damp arc, as if the boards at its edge were mopped after the rest had dried."
  },
  laundry_rota: {
    title: "Laundry sign-in sheet",
    kind: "document",
    text: "Priya Nair signed out of the laundry at 01:00 on the gala night, exactly as she told the police. But the linen count at the bottom of the same sheet is in her hand too, timed and initialled 03:20."
  },
  fire_register: {
    title: "Night fire-check register",
    kind: "document",
    text: "The night manager's fire-check register. Gala night: rounds signed by D. Okoye at 22:00, 02:00 and 04:00, each in the same steady hand. The 04:00 round is the last entry of the night."
  },

  // ---- Roof Terrace ----
  terrace_planter: {
    title: "Stone planter, terrace door side",
    kind: "object",
    text: "A heavy stone planter beside the terrace door. Low on its rim, at about head height for a woman of Helen's size, there is a mark in the lichen. Something is caught in it.",
    analysis: {
      prompt: "Angle the raking light across the rim until the mark and the fibres show.",
      target: 0.8,
      tolerance: 0.07,
      revealed:
        "A fresh chip out of the stone at 1.6 metres, with cream wool fibres caught in it — the cream cardigan Helen wears in every gala photograph. In the gravel below, a scuffed arc, as if someone fell here and was lifted away."
    }
  },
  glasses_found: {
    title: "Reading glasses under the bench",
    kind: "object",
    text: "Helen's reading glasses, under the terrace bench, one arm bent. The lenses are dusty with two nights of roof weather. Nobody from the hotel has been up here since the gala, and the police never searched the terrace — the fall was meant to have happened on the stairs."
  },
  cigarette_tin: {
    title: "Engraved cigarette tin",
    kind: "object",
    text: "A flat silver cigarette tin by the terrace door, engraved 'W.G.' Two cigarette ends in the gravel beside it, stubbed out neatly in a line. Smoking is forbidden on the terrace; the ash tray by the door is empty and clean."
  },
  rail_fibre: {
    title: "Fibre on the terrace rail",
    kind: "object",
    text: "A snag of cream wool on a bolt of the terrace safety rail, at waist height, the same cream as Helen's cardigan. It is weathered flat, as if it has been there since the gala."
  },
  uv_lift_scuffs: {
    title: "Drag scuffs at the lift",
    kind: "object",
    text: "Under UV the service-lift threshold shows two long parallel scuffs at heel height, dragged from the terrace side toward the stairs and wiped — but not quite wiped — clean."
  },
  uv_terrace_smear: {
    title: "Smear on the terrace rail",
    kind: "object",
    text: "The UV lamp finds a broad smear across the inside of the terrace rail, where something heavy was levered over it — the wipe of a shoulder, perhaps, or of palms that slipped."
  }
};
