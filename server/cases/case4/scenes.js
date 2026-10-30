// Scenes and hotspots for Case 4: "The Long Dark".
// Coordinates are in BLENDER space (x right, y depth, z up). The client converts to three.js:
//   three = (x, z, -y).
// roles: which co-op roles can SEE and inspect this hotspot. [] = everyone.
// If the holder of a listed role is disconnected, the hotspot opens to everyone.
// clue: id from clues.js. flavor: text for items that are not clues.
// lights: realtime lights for the client (no baked lighting, keeps downloads small).

module.exports = [
  {
    id: "mast",
    name: "The Mast Site",
    glb: "mast.glb",
    mood: { fog: 0x05070e, ambient: 0.34, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.5, 0.8, 3.0], color: "#bcd4ff", intensity: 13, distance: 11 },
      { type: "point", pos: [3.4, -0.6, 2.4], color: "#ffd9a0", intensity: 9, distance: 9 },
      { type: "point", pos: [0, -2.2, 2.2], color: "#8fa4d8", intensity: 5, distance: 11 }
    ],
    camera: { pos: [0.4, -8.2, 3.0], target: [0.6, 0.8, 0.9], minDist: 2.4, maxDist: 11.0 },
    hotspots: [
      { id: "h_mast_card", pos: [0.9, 1.8, 1.15], roles: ["analyst"], clue: "mast_card" },
      { id: "h_survey", pos: [3.4, 0.6, 1.05], roles: ["field"], clue: "flag_survey" },
      { id: "h_mallet", pos: [4.6, 2.2, 0.35], roles: ["field"], clue: "flag_mallet" },
      { id: "h_sockets", pos: [2.2, -0.9, 0.18], roles: [], clue: "old_sockets" },
      { id: "h_scoured", pos: [-2.4, -0.8, 0.3], roles: [], flavor: "The wind-scoured snow between the mast and the station. In the dark the station's windows burn in a row, four hundred metres off — close enough to walk to, if you are walking the right line. The anemometer turns above you, clean and sound: whatever else lied that Thursday, that small honest machine did not. It measured a calm night, and it was accused of a fault it never had." }
    ]
  },
  {
    id: "lab",
    name: "The Laboratory",
    glb: "lab.glb",
    mood: { fog: 0x060a10, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.4, 1.2, 2.2], color: "#d8ecff", intensity: 13, distance: 9 },
      { type: "point", pos: [2.2, 0.4, 2.0], color: "#cfe0ff", intensity: 10, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.4], color: "#ffb066", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.4, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_register", pos: [-2.9, 1.9, 1.1], roles: ["archivist"], clue: "core_register" },
      { id: "h_check_core", pos: [-1.2, 1.95, 1.05], roles: ["analyst"], clue: "check_core" },
      { id: "h_terminal", pos: [0.8, 2.0, 1.15], roles: ["analyst"], clue: "lab_terminal" },
      { id: "h_uv_keys", pos: [1.5, 1.9, 1.1], roles: [], clue: "uv_lab_keys", uv: true },
      { id: "h_stake_data", pos: [2.2, 1.9, 1.05], roles: ["analyst"], clue: "stake_data" },
      { id: "h_archive_cores", pos: [3.3, 1.6, 1.2], roles: ["archivist"], clue: "archive_cores" },
      { id: "h_mug", pos: [-0.2, -1.4, 0.95], roles: [], flavor: "A side bench of ordinary laboratory clutter: the core saw, a kettle, and two mugs — one stencilled with the station's crest, one with a faded flag of Norway. The crest mug is washed and put away. The other stands where its owner left it, with a skin of ice on the tea, in a room that has been kept at working warmth all winter." }
    ]
  },
  {
    id: "comms",
    name: "Comms & Weather Room",
    glb: "comms.glb",
    mood: { fog: 0x070810, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.2, 1.2, 2.1], color: "#ffd9a0", intensity: 13, distance: 8 },
      { type: "point", pos: [2.0, 0.2, 2.0], color: "#9fd8b0", intensity: 9, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.4], color: "#8fa4d8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -5.8, 2.5], target: [0.0, 0.9, 1.0], minDist: 2.0, maxDist: 8.5 },
    hotspots: [
      { id: "h_comms_log", pos: [-1.6, 1.9, 1.12], roles: [], clue: "comms_log" },
      { id: "h_weather_backup", pos: [0.6, 1.95, 1.08], roles: ["interrogator"], clue: "weather_backup" },
      { id: "h_sat_schedule", pos: [2.2, 2.35, 1.7], roles: ["archivist"], clue: "sat_schedule" },
      { id: "h_jo_note", pos: [3.0, 0.9, 1.25], roles: ["interrogator"], clue: "jo_note" },
      { id: "h_chess", pos: [-2.9, 0.2, 1.0], roles: [], flavor: "Nadia's corner of the desk: headphones on their hook, a mug ringed like a tree with six months of nights, and a chess scoresheet in her hand — the station's long postal game with a sister station two time zones away. She was awake at her desk all that Thursday night, listening to a radio. The scoresheet proves she was not asleep. It cannot prove she was not alone with what she heard." }
    ]
  },
  {
    id: "dorm",
    name: "Living Quarters",
    glb: "dorm.glb",
    mood: { fog: 0x0a0808, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.8, 1.0, 2.2], color: "#ffc98a", intensity: 12, distance: 8 },
      { type: "point", pos: [2.2, 0.4, 2.0], color: "#ffbe7a", intensity: 9, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.3], color: "#8fa4d8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.2, 2.5], target: [0.0, 0.9, 1.0], minDist: 2.0, maxDist: 9.0 },
    hotspots: [
      { id: "h_notebook", pos: [-3.3, 1.8, 0.95], roles: ["field"], clue: "maren_notebook" },
      { id: "h_dictaphone", pos: [-2.7, 1.8, 0.92], roles: ["interrogator"], clue: "maren_dictaphone" },
      { id: "h_night_log", pos: [0.4, 2.2, 1.15], roles: ["interrogator"], clue: "night_log" },
      { id: "h_door_log", pos: [1.8, 2.25, 1.3], roles: ["archivist"], clue: "door_log" },
      { id: "h_cigarettes", pos: [3.9, 1.9, 0.45], roles: ["field"], clue: "cigarette_ends" },
      { id: "h_photos", pos: [-1.4, 2.4, 1.7], roles: [], flavor: "The corridor's photograph wall: eleven winters of Kestrel crews, each year's team smaller in the frame as the faces learn the place. Maren Haug appears in all eleven, always at the edge, always half turned toward whoever took the picture. In the last one, taken in May, she is laughing at something out of frame — and beside her, a pace apart and not laughing, stands Tomas Riedel." }
    ]
  },
  {
    id: "gear",
    name: "Airlock & Gear Room",
    glb: "gear.glb",
    mood: { fog: 0x06090c, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-2.0, 1.2, 2.3], color: "#e6f0ff", intensity: 13, distance: 9 },
      { type: "point", pos: [2.4, 0.2, 2.1], color: "#ffb35c", intensity: 10, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.5], color: "#8fa4d8", intensity: 5, distance: 10 }
    ],
    camera: { pos: [0.0, -6.2, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_sortie_board", pos: [-3.3, 2.24, 1.6], roles: ["archivist"], clue: "sortie_board" },
      { id: "h_airlock_log", pos: [-1.7, 2.18, 1.2], roles: ["archivist"], clue: "airlock_log" },
      { id: "h_gps", pos: [0.2, 2.0, 1.2], roles: ["analyst"], clue: "gps_track" },
      { id: "h_boots", pos: [2.6, 1.9, 0.55], roles: ["field"], clue: "boots" },
      { id: "h_uv_salt", pos: [1.9, 1.6, 0.3], roles: [], clue: "uv_gear_salt", uv: true },
      { id: "h_rescue_report", pos: [1.2, -0.6, 0.95], roles: [], clue: "rescue_report" },
      { id: "h_memorial", pos: [3.9, 2.35, 1.8], roles: [], flavor: "The gear room's memorial board: a brass plate for each of the station's hard years, and under them the pegs where the winter-over team's parkas hang in a row. Eleven winters of Maren Haug are represented by the red parka at the end — still on its peg, still, after six months, brushed and ready. Nobody has had the heart or the authority to take it down." }
    ]
  }
];
