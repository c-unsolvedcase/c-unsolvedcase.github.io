// Scenes and hotspots for Case 5: "The Vesper Line".
// Coordinates are in BLENDER space (x right, y depth, z up). The client converts to three.js:
//   three = (x, z, -y).
// roles: which co-op roles can SEE and inspect this hotspot. [] = everyone.
// If the holder of a listed role is disconnected, the hotspot opens to everyone.
// clue: id from clues.js. flavor: text for items that are not clues.
// lights: realtime lights for the client (no baked lighting, keeps downloads small).

module.exports = [
  {
    id: "berth",
    name: "Berth B4 — Fenn's Compartment",
    glb: "berth.glb",
    mood: { fog: 0x0a0705, ambient: 0.34, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.6, 0.8, 2.2], color: "#ffca7a", intensity: 12, distance: 8 },
      { type: "point", pos: [2.4, 0.2, 2.0], color: "#ffb35c", intensity: 9, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.3], color: "#7a86b8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.0, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_decanter", pos: [2.9, 1.9, 1.05], roles: ["field"], clue: "sealed_decanter" },
      { id: "h_tumbler", pos: [1.2, 2.1, 1.0], roles: ["analyst"], clue: "tumbler_test" },
      { id: "h_diary", pos: [-1.55, 1.95, 0.9], roles: ["archivist"], clue: "fenn_diary" },
      { id: "h_case", pos: [-0.6, 2.2, 1.92], roles: [], clue: "case_index" },
      { id: "h_dictaphone", pos: [-3.4, 0.6, 0.85], roles: ["interrogator"], clue: "dictaphone" },
      { id: "h_window", pos: [0.4, 2.38, 2.08], roles: [], flavor: "The berth window, blind drawn, the way he left it. Somewhere beyond the glass the night is still going past at sixty — fields, signals, the dark backs of towns. Aldous Fenn watched this line go by for forty years, from the footplate, from the inspection saloon, and at the end from a berth with his name on the reservation card. He knew every signal on it by heart. The one thing on the whole journey he did not check was the bottle by his own bed." },
      { id: "h_uv_handle", pos: [1.9, 2.0, 1.0], roles: [], clue: "uv_berth_fibres", uv: true },
    ]
  },
  {
    id: "dining",
    name: "The Dining Car",
    glb: "dining.glb",
    mood: { fog: 0x0b0806, ambient: 0.36, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.8, 0.6, 2.3], color: "#ffd9a0", intensity: 13, distance: 9 },
      { type: "point", pos: [2.2, 0.2, 2.1], color: "#ffc98a", intensity: 10, distance: 8 },
      { type: "point", pos: [0, -1.9, 2.3], color: "#8fa4d8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.4, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_chit", pos: [-3.6, 1.9, 1.15], roles: ["archivist"], clue: "dinner_chit" },
      { id: "h_cigar", pos: [3.9, 2.2, 1.5], roles: ["field"], clue: "cigar_case" },
      { id: "h_napkin", pos: [1.8, 2.15, 0.95], roles: ["analyst"], clue: "pantry_napkin" },
      { id: "h_wine", pos: [-1.4, 2.2, 1.3], roles: ["analyst"], clue: "wine_ledger" },
      { id: "h_menu", pos: [0.2, -1.2, 1.0], roles: [], flavor: "Table three's place, cleared now: the menu card of the Vesper's last autumn — grouse soup, turbot, saddle of lamb, a cheese board the guidebooks mention — and the small printed notice the company puts on every table this season: 'The through sleeper service will be withdrawn in December. The company thanks its loyal passengers.' Forty years of evenings in this car, and it is being closed like a branch line. Fenn had outlived his railway in every way but one." }
    ]
  },
  {
    id: "sleeper",
    name: "The Sleeping Car",
    glb: "sleeper.glb",
    mood: { fog: 0x060a0c, ambient: 0.34, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-2.2, 0.8, 2.2], color: "#bcd4c8", intensity: 11, distance: 8 },
      { type: "point", pos: [2.2, 0.2, 2.0], color: "#ffd9a0", intensity: 8, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.3], color: "#7a86b8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.2, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_turndown", pos: [-3.4, 1.9, 1.1], roles: ["archivist"], clue: "turndown_log" },
      { id: "h_keys", pos: [-2.2, 2.3, 1.6], roles: ["interrogator"], clue: "spare_key" },
      { id: "h_linen", pos: [3.8, 1.9, 0.8], roles: ["field"], clue: "genuine_phial" },
      { id: "h_valise", pos: [0.6, 2.1, 1.0], roles: ["analyst"], clue: "source_bottle" },
      { id: "h_money", pos: [-2.9, 1.6, 0.75], roles: ["archivist"], clue: "money_envelope" },
      { id: "h_plates", pos: [2.4, 2.4, 1.7], roles: [], flavor: "The berth plates along the corridor, brass on mahogany: A2, A4, B4, B6 — a row of small dignities, each with its night behind it. Behind A2 a man who had prepared a death as carefully as a timetable. Behind B4, a berth the morning round found silent. The corridor between them is four paces long. Nell Barber walked it at twenty-five to ten with a folded napkin in her apron, and has walked it in her sleep ever since." }
    ]
  },
  {
    id: "mailvan",
    name: "The Mail Van",
    glb: "mailvan.glb",
    mood: { fog: 0x060906, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.6, 0.8, 2.2], color: "#cfe6c8", intensity: 12, distance: 9 },
      { type: "point", pos: [2.4, 0.2, 2.0], color: "#ffb35c", intensity: 9, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.3], color: "#7a86b8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.2, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_ledger", pos: [-3.6, 1.8, 0.55], roles: ["field"], clue: "the_ledger" },
      { id: "h_tally", pos: [0.4, 2.1, 1.15], roles: ["archivist"], clue: "van_tally" },
      { id: "h_seal", pos: [3.6, 2.2, 1.4], roles: [], clue: "van_seal" },
      { id: "h_uv_chalk", pos: [2.9, 1.9, 0.8], roles: [], clue: "uv_van_chalk", uv: true },
      { id: "h_bunk", pos: [2.6, 0.6, 0.75], roles: ["field"], clue: "tallow_bunk" },
      { id: "h_linen_parcel", pos: [-1.2, 2.0, 1.05], roles: ["interrogator"], clue: "linen_parcel" },
      { id: "h_stove", pos: [-4.2, -0.8, 0.9], roles: [], flavor: "The van's little stove, kept in all night against the cold that comes through the sorting frames. Tallow has fed it at every stop for nineteen years and writes the coal in the same book as the mail. Nothing in its ash but coal and one cigarette end that is the guard's own, crushed flat the way he crushes them. A book was meant to burn somewhere on this train. It is worth a moment's thanks, detectives, that it never met this stove." }
    ]
  },
  {
    id: "cab",
    name: "The Locomotive Cab",
    glb: "cab.glb",
    mood: { fog: 0x0a0503, ambient: 0.33, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-2.6, 0.4, 1.8], color: "#ff8a3c", intensity: 14, distance: 8 },
      { type: "point", pos: [1.6, 0.4, 2.2], color: "#ffd9a0", intensity: 9, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.3], color: "#7a86b8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -5.8, 2.5], target: [0.0, 0.9, 1.0], minDist: 2.0, maxDist: 9.0 },
    hotspots: [
      { id: "h_register", pos: [-1.8, 1.6, 1.25], roles: ["archivist"], clue: "train_register" },
      { id: "h_clock", pos: [0.8, 1.9, 1.5], roles: [], clue: "clock_card" },
      { id: "h_notebook", pos: [2.8, 1.2, 1.1], roles: ["field"], clue: "fireman_notebook" },
      { id: "h_firebox", pos: [-1.6, 2.25, 1.0], roles: [], flavor: "The firebox door, latched now, its seam still breathing heat. All night it opened and shut like a slow heart — through the tunnel, up the bank out of Harefield, down the long straight into Port Agnes — and the men who fed it saw nothing of the night behind them but steam, signals, and one attendant crossing a lamplit van doorway at twelve minutes past three. A footplate is the loneliest witness box in the world: it faces forward, it never sleeps, and it writes everything down." }
    ]
  }
];
