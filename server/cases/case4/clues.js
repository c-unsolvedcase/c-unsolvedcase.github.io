// Clues for Case 4. `text` is what the finder sees. `analysis` clues need the Analyst's lab
// mini-puzzle (slider focus) before `revealed` is shown. `audio` plays a voice line.

module.exports = {
  // ---- starting evidence (given to the whole party in the briefing) ----
  weather_record: {
    title: "The satellite weather record",
    kind: "document",
    start: true,
    text: "The automatic weather station's own record, uplinked to the satellite hourly and held by the institute — not the summary the inquiry worked from. Wind, visibility and temperature for the Thursday, hour by hour, in the machine's own hand.",
    analysis: {
      prompt: "Align the hourly traces until the night's true shape reads clearly.",
      target: 0.5,
      tolerance: 0.07,
      revealed:
        "Two things stand out. The afternoon of the Thursday was clear and calm — visibility over twenty kilometres from 14:00 to 17:00, perfect working weather. And the storm the inquiry blamed did not peak until 23:40, with the wind rising only after 22:30. At the hour Maren Haug walked home, the night was still and starless and cold — the kind of night a flagged line is made for."
    }
  },

  // ---- The Mast Site ----
  flag_survey: {
    title: "GPS survey of the flag line",
    kind: "document",
    text: "The survey team's GPS plot of the mast line, flag by flag, laid over the station's surveyed route. Flags one to eleven sit on the line to within a pace. Flags twelve, thirteen and fourteen stand sixty metres off it, in a gentle arc that bends away from the station door and toward the old fuel dump."
  },
  old_sockets: {
    title: "The old flag sockets",
    kind: "object",
    text: "On the true line, under ten centimetres of drift, the original sockets for flags twelve to fourteen: neat dark holes, rims crusted with old ice. Beside the new holes the ice chips are bright and sharp as broken glass. The old holes are months old. The new ones were dug this season — and not long before the snow that covered them."
  },
  flag_mallet: {
    title: "The line mallet, half-buried",
    kind: "object",
    text: "The station's flag-line mallet, found by the search team half-buried in the snow beside the last moved flag, and bagged where it lay. The head is iced solid. The grip tape is stencilled 'KESTREL — LINE 2'. It belongs on a hook in the gear room, signed out and signed back like everything else on this station."
  },
  mast_card: {
    title: "The mast logger's memory card",
    kind: "object",
    text: "The memory card from the weather mast's logger, pulled by the inquiry and never read past its first page. The fault entry that sent Maren Haug out is in it — entry F-31, timed 16:05 on the Thursday.",
    analysis: {
      prompt: "Step through the entry log until the fault entry's origin resolves.",
      target: 0.62,
      tolerance: 0.07,
      revealed:
        "Entry F-31 is not a sensor event. It is a MANUAL entry — typed, not triggered — and it carries a terminal stamp: LAB-2, the laboratory terminal. The anemometer's own sensor trace runs clean and unbroken across the whole Thursday. The mast never faulted. Somebody in the laboratory told it to say it had."
    }
  },

  // ---- The Laboratory ----
  core_register: {
    title: "The ice-core register",
    kind: "document",
    text: "The station's ice-core register, three seasons in one careful hand — Riedel's. Cores 12, 13 and 14 are logged at depths of 41, 44 and 47 metres, with melt layers recorded at each. It is beautifully kept. It is the foundation of the flagship paper, and of a famous career."
  },
  check_core: {
    title: "Maren's check core",
    kind: "object",
    text: "A fresh ice core in a labelled tray in the cold store, drilled by Maren Haug the week before she died and logged in her own hand: 'CHECK — C-14 horizon'. It is the twin of the archive's core 14, drilled from the same face.",
    analysis: {
      prompt: "Count the ash band down the check core until its true depth reads.",
      target: 0.35,
      tolerance: 0.07,
      revealed:
        "The volcanic ash band — an unarguable date stamped in the ice — sits at 38 metres in Maren's check core. In the register, and in the published paper, the same band is recorded at 44. Six metres of melt that exists in the paperwork and nowhere in the ice. The check core and the register cannot both be true, and ice does not lie for a living."
    }
  },
  archive_cores: {
    title: "The archive cores, 12 to 14",
    kind: "object",
    text: "The stored archive cores in the cold-store racks, their section labels tied on in the old style. Look closely: the label card is this year's stock, bright white, and the tie holes are punched, not worn. The station only bought card like this last spring. These labels were printed and tied within the year — on cores supposedly labelled three winters ago."
  },
  lab_terminal: {
    title: "The LAB-2 terminal record",
    kind: "document",
    text: "The laboratory terminal's session history, kept by the key-card reader nobody remembers is switched on. Thursday: card TR-51 inserted 16:02, removed 16:09. One session, seven minutes, in the middle of the quiet afternoon. Card TR-51 is issued to Dr. T. Riedel. The mast logger's manual fault entry was made at 16:05."
  },
  stake_data: {
    title: "Jo's stake spreadsheet",
    kind: "document",
    text: "The ablation-stake spreadsheet Jo Mercer keeps for the glaciology programme, three seasons of melt figures as published. Jo has highlighted one column in a miserable yellow: the season-to-season variance. Three different winters, three different storms — and the melt varies by exactly the same amount in each. Nature, as Jo has written in the margin, is not that tidy."
  },

  // ---- Comms & Weather Room ----
  comms_log: {
    title: "The radio log, Thursday",
    kind: "document",
    text: "The comms room's radio log, in Nadia Rahman's hand. 21:40 — Haug out to the mast, F-31 fault, solo, acknowledged. 22:20 — Haug, from the mast: 'Anemometer clean. No fault here. Coming home.' 23:05 — Haug, weak and broken, two words unreadable. 23:07, 23:12 — Rahman calling, no answer. The inquiry's summary quotes the first and last entries. It does not quote the second."
  },
  sat_schedule: {
    title: "The satellite pass schedule",
    kind: "document",
    text: "The printed pass schedule pinned in the comms room: windows at 07:00 and 19:00 daily, traffic queued in order. Against Friday's 07:00 window, in Maren Haug's hand: 'C-14 FILE — SEND FIRST. Whatever he decides.' Underlined twice."
  },
  weather_backup: {
    title: "The met computer's local backup",
    kind: "document",
    text: "The met computer's own local copy of the weather record, printed by Nadia Rahman the morning after and filed without being read. It agrees with the satellite copy hour for hour — afternoon clear, storm peak 23:40. Whatever else was managed that week, the weather was not edited. The machine kept its own counsel and kept it twice."
  },
  jo_note: {
    title: "Jo's sticky note on the GPS cradle",
    kind: "document",
    text: "A sticky note on the GPS download cradle, in Jo Mercer's quick hand, gone brown at the edges: 'TR track Thu — 25 min at far end?? No stakes there. Ask M.' Beneath it, in pencil, fainter: 'Asked. Told: instrument drift. Nov.' Jo asked. Jo was answered. Jo kept the note."
  },

  // ---- Living Quarters ----
  maren_notebook: {
    title: "Maren's notebook, from her parka",
    kind: "document",
    text: "Maren Haug's field notebook, recovered from her parka pocket and kept with her effects. The last pages are dated the Wednesday: a photograph of core 14 taped beside the register page, and her writing, steady as a rail: 'C-14 again. The register hand is not the drill hand. I know whose. He gets the choice first — that is fair. Pass at 07:00: the institute gets the file either way.'"
  },
  maren_dictaphone: {
    title: "Maren's dictaphone",
    kind: "audio",
    text: "Maren's field dictaphone, one entry on it, timed 22:05 on the Thursday, recorded at the mast. Her own voice, tired and exact, with the wind beginning far away.",
    audio: {
      speaker: "maren",
      text: "Mast log, twenty-two oh five. Anemometer clean, bearings clean, no fault anywhere on this mast. Somebody's idea of a joke, or somebody wanted me out of the station tonight. Either way — I am coming home, and tomorrow we talk about paperwork. All of us."
    }
  },
  night_log: {
    title: "The dorm night log",
    kind: "document",
    text: "The night log kept on the corridor lectern, rounds and checks initialled through the night. Thursday's page: the 23:35 generator check, initialled R.C. And directly beneath it — above the page's later entries, in the same pen, in the same unhurried hand — '00:00 round: corridor quiet, all doors shut. R.C.' The midnight round was written before midnight. Whatever it records, it was not written by a woman walking a corridor at twelve."
  },
  door_log: {
    title: "The fire-door logger printout",
    kind: "document",
    text: "The fire-safety door logger's printout for the Thursday night, filed in the corridor cabinet. Cabin-corridor door: opens 21:35 (Haug, leaving), then nothing until the search morning. Observation-deck door: opens 00:05, closes 00:40. The corridor Maren's door stands on was never walked that night. The deck was visited for thirty-five minutes, in the middle of the dark, by somebody who did not sign the book."
  },
  cigarette_ends: {
    title: "Cigarette ends in the deck snow bucket",
    kind: "object",
    text: "In the snow bucket by the observation-deck door — the bucket the smokers-that-do-not-exist are not supposed to use — three cigarette ends, menthol, crushed out carefully and buried in the snow like evidence. They are not old. On a station of six people, a brand is a signature: only one person aboard has ever smelled of menthol, and she enforces the no-smoking rule herself."
  },

  // ---- Airlock & Gear Room ----
  sortie_board: {
    title: "The sortie board, Thursday",
    kind: "document",
    text: "The gear room's sign-out board, the station's oldest law: nobody goes out unrecorded. Thursday: 15:05 — RIEDEL, 'stakes, mast line', out. 15:50 — RIEDEL, in. 18:20 — MERCER, 'stores', in and out within the hour. 21:40 — HAUG, 'mast, F-31', out. The space beside her return time is empty. It will stay empty."
  },
  airlock_log: {
    title: "The airlock cycle log",
    kind: "document",
    text: "The airlock's automatic cycle log, printed from the door mechanism's own counter. Thursday: 15:05 out, 15:50 in. 21:40 out — Haug. Then nothing. No cycle in either direction until 05:50 on the Friday, when the search team went out. Whoever arranged that night did their arranging before 21:40, inside the station or on its line, because after Maren Haug left, the door never opened again."
  },
  gps_track: {
    title: "Riedel's GPS track, Thursday",
    kind: "document",
    text: "The download from Riedel's handheld GPS, part of Jo Mercer's routine Thursday file. Out at 15:05, along the mast line at a working pace — then, at the line's far end, a stop of twenty-five minutes among the last three flags. The ablation stakes stand at the line's near end, by the station. At the far end there is nothing to measure, nothing to read, and nothing to do for twenty-five minutes but work on the flags themselves."
  },
  boots: {
    title: "Riedel's field boots",
    kind: "object",
    text: "Riedel's field boots in his gear-room cubby, uppers brushed clean, laces loosened with a tidy man's care. Turn one over. The tread is still packed hard with ice grit — and it is the blue grit, the old glacier ice that only surfaces at the mast line's far end. Around the station the grit is grey shore ice. He cleaned everything about these boots except the one part that says where they have been."
  },
  rescue_report: {
    title: "The search team's report",
    kind: "document",
    text: "The search team's report, signed by Sara Iversen. Out at 05:50 in first light. The flag line followed from the station: flags one to eleven true, then the line bending away toward the dump, and Maren Haug found at 06:40 beside the old fuel drums, three hundred metres past the station turn-off, her lamp dead, her tracks coming down the false line and wandering at the end. She had walked the flags faithfully, the way she had walked them for eleven winters. The flags were what lied."
  },
  uv_lab_keys: {
    title: "Wear on the LAB-2 keys",
    kind: "object",
    text: "Under UV the LAB-2 keyboard shows its manual-entry key polished bright by use. The automatic keys are dusty. Somebody's thumb knew that key well."
  },
  uv_gear_salt: {
    title: "Salt line in the airlock",
    kind: "object",
    text: "A tide-line of dried salt melt across the airlock floor at boot-top height — slush that came in on somebody's legs that day and was never mopped."
  }
};
