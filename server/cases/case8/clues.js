// Case 3 "Station Nine": clues. Lab tolerance is tight (expert difficulty).
module.exports = {
  station_report: {
    title: "Station doctor's report",
    kind: "document",
    start: true,
    text: "Dr. Ilse Brandt: Station leader Dr. Anselm Voss died of hypothermia in the ice-core cold store on the night of the midwinter dinner. R. Ortega found him at 07:20. The inside release was stuck and the alarm never sounded. Recorded as a tragic accident. The relief flight lands today, and the foundation wants it checked."
  },

  // ---- Ice-Core Cold Store ----
  door_release: {
    title: "Inside emergency release",
    kind: "object",
    text: "A lever on a cable. It moves freely but pulls nothing: the small cable pin that joins it to the latch is missing. A smear of red coolant sits on the housing."
  },
  latch_pin: {
    title: "Pin through the outer latch",
    kind: "object",
    text: "On the outside of the door, a steel pin has been dropped through the latch bar and is frozen solid in place. It is a 12 mm pin of the kind kept in the plant room's tool crib."
  },
  door_log: {
    title: "Vestibule card reader slip",
    kind: "document",
    text: "The paper slip from the reader: '23:08 VOSS, V. 23:11 REID, C. 23:14 MANUAL LATCH.' Nothing after."
  },
  thermo_chart: {
    title: "Cold store temperature chart",
    kind: "document",
    text: "The chart paper is smudged where the pen skipped. Something changed a little after eleven.",
    analysis: {
      prompt: "Sharpen the trace until the pen's step is readable.",
      target: 0.66,
      tolerance: 0.04,
      revealed: "At 23:15 the door-frame heater coil drops off the chart. From then the door seal began to freeze, and by midnight the door could not be forced from inside."
    }
  },
  core_14b: {
    title: "Core section 14-B",
    kind: "object",
    text: "The disputed ice core in its box, dating markers pinned along it. The markers and the published figure do not look right together.",
    analysis: {
      prompt: "Focus on the dark winter bands until each layer is separate.",
      target: 0.37,
      tolerance: 0.04,
      revealed: "Sixty-one annual layers. The published paper reports seventy-four."
    }
  },
  voss_notebook: {
    title: "Voss's waterproof notebook",
    kind: "document",
    text: "Found beside the door. 'Core 14-B does not match the published curve. Count by hand again tomorrow. If I am right, I have to say so on the flight, whoever it hurts.'"
  },
  alarm_panel: {
    title: "Door alarm panel",
    kind: "object",
    text: "The panel is switched to MAINTENANCE mode. In that mode nothing sounds. The key switch is turned with a standard maintenance key."
  },
  cctv_cable: {
    title: "Dead camera in the vestibule",
    kind: "object",
    text: "The camera covering the vestibule has no picture. Its cable was unplugged at the junction box, and the plug is clean of frost."
  },

  // ---- Mess Hall ----
  seating_plan: {
    title: "Midwinter dinner seating plan",
    kind: "document",
    text: "Voss at the head. Solheim (purple parka, peg 5) beside Reid (peg 4). Brandt, Ortega and Koval along the side, Okafor serving, Weir at the foot. Toast at 21:15. Dinner ended at 22:30."
  },
  toast_recording: {
    title: "Recording of Voss's toast",
    kind: "audio",
    text: "The mess recorder was running all night. This is the toast, 21:15.",
    audio: {
      speaker: "voss",
      text: "Friends, one more winter down. Before the flight comes I have something to say about Core Fourteen. I will set the record straight, whoever it hurts."
    }
  },
  purple_parka: {
    title: "Marit Solheim's purple parka",
    kind: "object",
    text: "On peg 5. Its cuffs are stiff with frost though the mess has been warm all night, and a red smear marks one sleeve.",
    analysis: {
      prompt: "Compare the red smear under UV until its glow separates from the fabric.",
      target: 0.84,
      tolerance: 0.04,
      revealed: "Core-drill coolant, the kind kept only in the lab and the cold store."
    }
  },
  card_lanyard: {
    title: "Reid's lanyard on peg 4",
    kind: "object",
    text: "The plastic card holder is wet and ice-cold to the touch, as if it had been outside the heated rooms tonight."
  },
  kitchen_log: {
    title: "Galley log",
    kind: "document",
    text: "Lena Okafor's log: 'Dishwasher 22:40 to 23:30.' In the margin, in pencil: 'greenhouse for herbs, 23:00 to 23:30.'"
  },
  hidden_still: {
    title: "Still behind the flour sacks",
    kind: "object",
    text: "A home-made still, a bucket of mash and two unlabelled bottles, hidden in the pantry. Alcohol is banned at the station."
  },
  shift_rota: {
    title: "Duty rota",
    kind: "document",
    text: "Radio watch: P. Koval 23:00 to 23:30. Outside watch: R. Ortega 19:00 to 21:30. Clinic cover: I. Brandt."
  },
  clinic_note: {
    title: "Clinic note pinned to the board",
    kind: "document",
    text: "'R. Ortega, frostnip, left foot, 23:00 to 23:30. I.B.'"
  },

  // ---- Radio Room ----
  radio_log: {
    title: "Radio log",
    kind: "document",
    text: "Pavel Koval's log: '23:05 weather obs sent. 23:09 to 23:13 satellite link test, manual key held. 23:20 weather obs sent.' Every line is initialled P.K."
  },
  voss_email: {
    title: "Unsent email from Voss",
    kind: "document",
    text: "Draft to the foundation: 'I must withdraw the Core 14 chronology. The 14-B count cannot be reconciled with the published figure, and I am responsible for what I signed. I will explain on arrival.'"
  },
  gym_printout: {
    title: "Gym door card printout",
    kind: "document",
    text: "'REID, C.: in 23:09, out 00:20.' Nobody else used the gym after 22:00."
  },
  grant_ledger: {
    title: "Polar grant expense ledger",
    kind: "document",
    text: "'Cold store sensor spares, 3,000, paid to J. Weir. Approved M. Solheim.' Every entry in the approvals column is in the same slanting hand, with crossed 4s and 7s."
  },
  flight_schedule: {
    title: "Radio schedule",
    kind: "document",
    text: "The relief flight lands on the 15th. 'Voss to speak to the foundation by satphone, 08:00.'"
  },
  pavel_draft: {
    title: "Crumpled draft in the bin",
    kind: "document",
    text: "In Pavel's hand: 'If anyone asks, say it was me. They don't need to know. P.'"
  },
  voss_calendar: {
    title: "Voss's wall calendar",
    kind: "document",
    text: "The 15th is circled in red ink: 'CALL 08:00. SAY IT.'"
  },

  // ---- Laboratory ----
  dataset_metadata: {
    title: "Core 14 spreadsheet properties",
    kind: "document",
    text: "The edit history on the bench terminal is a blur of tiny entries.",
    analysis: {
      prompt: "Zoom the history panel until the entries are legible.",
      target: 0.22,
      tolerance: 0.04,
      revealed: "Column 14-B was edited seven times, between 02:00 and 03:30 on three nights in March, all under the login 'msolheim'. Every edit raised the layer count."
    }
  },
  session_log: {
    title: "Lab terminal session log",
    kind: "document",
    text: "'msolheim logged in 22:40. Last keystroke 22:41. Batch job running to 23:35.' The mouse was never touched in between."
  },
  raw_counts: {
    title: "Voss's hand-counted sheets",
    kind: "document",
    text: "His original counts for Core 14-B: sixty-one layers, in his tidy hand. The published curve uses seventy-four."
  },
  reid_note: {
    title: "Reid's note on the board",
    kind: "document",
    text: "'V. asked me to re-check the 14-B dating. I told him I had assumed MS's numbers were fine. Not my dataset, not my problem.'"
  },
  core_logbook: {
    title: "The lab's core logbook",
    kind: "document",
    text: "The 14-B entries have been overwritten in a different pen. The figures are changed in a slanting hand with crossed 4s and 7s."
  },
  marit_note: {
    title: "Sticky note on the terminal",
    kind: "document",
    text: "'Job running. Back soon. M.'"
  },

  // ---- Plant Room ----
  bms_log: {
    title: "Building management printout",
    kind: "document",
    text: "'21:58 ALARM COLD STORE DISABLED, maintenance code 4471.' '23:15 DOOR HEATER COLD STORE OFF, manual, plant panel.'"
  },
  tool_crib: {
    title: "Tool crib sign-out board",
    kind: "document",
    text: "'Pin puller and 12 mm pins: J. Weir, 14:00 to 14:40.' The tray of pins is one short."
  },
  jonas_toolbag: {
    title: "Jonas Weir's toolbag",
    kind: "object",
    text: "In a side pocket, wrapped in a rag, is a brass-collared cable pin of exactly the kind the cold store's inside release uses."
  },
  code_sheet: {
    title: "Maintenance code sheet",
    kind: "document",
    text: "Taped inside the panel door: '4470 Leader. 4471 Weir. 4472 Spare.'"
  },
  breaker: {
    title: "Door heater breaker",
    kind: "object",
    text: "The cold store door heater breaker is off, locked with a tag signed J.W. and stamped 23:15."
  },
  bank_slip: {
    title: "Bank notification",
    kind: "document",
    text: "Addressed to J. Weir: 'Transfer received 13 July, 3,000, reference: Polar Science Grant.'"
  },
  work_order: {
    title: "Weir's work order for the 14th",
    kind: "document",
    text: "'Cold store sensors replaced.' But every sensor in the cold store is still the old model."
  },
  maintenance_manual: {
    title: "Manual page on the cable release",
    kind: "document",
    text: "'Removing the cable pin takes thirty seconds with a pin puller and disables the inside release. Never do this while the room is occupied.'"
  },

  uv_store_smear: {
    title: "Smear across the threshold",
    kind: "object",
    text: "Under the UV lamp a faint smear glows across the cold-store threshold and up the door seal — core-drill coolant, carried on fabric and pressed into the rubber where someone leaned, or was leaned, against the door that night."
  },

  uv_radio_erasure: {
    title: "The wiped page",
    kind: "object",
    text: "The UV lamp finds a rectangle wiped cleaner than the rest of the radio desk, and across it the graphite ghost of handwriting pressed through from a page above — a page that is no longer in any log on this station."
  }
};
