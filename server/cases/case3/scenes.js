// Scenes and hotspots for Case 3: "The Final Act".
// Coordinates are in BLENDER space (x right, y depth, z up). The client converts to three.js:
//   three = (x, z, -y).
// roles: which co-op roles can SEE and inspect this hotspot. [] = everyone.
// If the holder of a listed role is disconnected, the hotspot opens to everyone.
// clue: id from clues.js. flavor: text for items that are not clues.
// lights: realtime lights for the client (no baked lighting, keeps downloads small).

module.exports = [
  {
    id: "stage",
    name: "The Stage",
    glb: "stage.glb",
    mood: { fog: 0x07060c, ambient: 0.34, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-2.5, 0.5, 3.0], color: "#ffb066", intensity: 14, distance: 10 },
      { type: "point", pos: [2.6, -0.4, 2.6], color: "#7fb8ff", intensity: 11, distance: 9 },
      { type: "point", pos: [0, -2.0, 2.2], color: "#ffd9a0", intensity: 6, distance: 10 }
    ],
    camera: { pos: [0.0, -7.9, 2.9], target: [0.0, 1.0, 1.0], minDist: 2.4, maxDist: 10.5 },
    hotspots: [
      { id: "h_rope", pos: [2.6, -0.5, 0.28], roles: ["field"], clue: "fallen_rope" },
      { id: "h_sandbag", pos: [1.6, 0.5, 0.42], roles: ["field"], clue: "sandbag" },
      { id: "h_shawl", pos: [2.15, 1.15, 0.95], roles: [], clue: "shawl" },
      { id: "h_bible", pos: [-3.1, -1.0, 1.12], roles: ["archivist"], clue: "blocking_bible" },
      { id: "h_cue_sheet", pos: [-3.6, -0.35, 1.62], roles: ["interrogator"], clue: "cue_sheet" },
      { id: "h_door_log", pos: [4.0, 2.3, 1.18], roles: ["archivist"], clue: "door_log" },
      { id: "h_ghost", pos: [0.0, 0.9, 1.55], roles: [], flavor: "The ghost light: one bare bulb on a stand, left burning on the empty stage so the theatre is never wholly dark. Stagehands swear it keeps the building's ghosts polite. Tonight it is the only audience." },
      { id: "h_uv_wings", pos: [-0.9, 0.2, 0.5], roles: [], clue: "uv_wings_powder", uv: true },
    ]
  },
  {
    id: "dressing",
    name: "Margot's Dressing Room",
    glb: "dressing.glb",
    mood: { fog: 0x0b0810, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [0.6, 1.2, 2.0], color: "#ffc98a", intensity: 13, distance: 8 },
      { type: "point", pos: [-2.0, 0.6, 1.8], color: "#ffbe7a", intensity: 9, distance: 7 },
      { type: "point", pos: [0, -1.6, 2.4], color: "#8fa4d8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -5.6, 2.3], target: [0.0, 0.9, 1.0], minDist: 2.0, maxDist: 8.0 },
    hotspots: [
      { id: "h_letter", pos: [-1.7, 2.0, 1.08], roles: ["archivist"], clue: "board_letter" },
      { id: "h_dictaphone", pos: [-0.8, 2.0, 1.05], roles: ["interrogator"], clue: "dictaphone" },
      { id: "h_script", pos: [0.7, 1.95, 1.05], roles: [], clue: "annotated_script" },
      { id: "h_catalogue", pos: [2.3, 0.1, 0.82], roles: ["analyst"], clue: "dealer_catalogue" },
      { id: "h_tickets", pos: [-2.5, 0.7, 0.4], roles: ["field"], clue: "morning_tickets" },
      { id: "h_flowers", pos: [3.0, 1.9, 1.35], roles: [], flavor: "Closing-night flowers, a dozen bouquets deep, from the stage door crowd. One card, in a hand she would have known, reads only: 'For the Duchess. Always.' The rest are from strangers who loved her for thirty years." }
    ]
  },
  {
    id: "flies",
    name: "The Fly Gallery",
    glb: "flies.glb",
    mood: { fog: 0x04070c, ambient: 0.33, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-2.4, 0.6, 2.6], color: "#d8e4ff", intensity: 13, distance: 9 },
      { type: "point", pos: [2.8, 0.4, 2.6], color: "#ffb35c", intensity: 10, distance: 9 },
      { type: "point", pos: [0, -1.4, 2.8], color: "#8fa4d8", intensity: 5, distance: 10 }
    ],
    camera: { pos: [-0.4, -6.6, 2.9], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_ladder_log", pos: [-4.1, 1.55, 1.55], roles: ["archivist"], clue: "ladder_log" },
      { id: "h_offcut", pos: [1.9, 1.45, 1.28], roles: ["field"], clue: "rope_offcut" },
      { id: "h_flask", pos: [3.3, 1.35, 1.24], roles: ["field"], clue: "hip_flask" },
      { id: "h_inspection", pos: [0.1, 1.6, 1.18], roles: ["interrogator"], clue: "inspection_book" },
      { id: "h_chalk", pos: [0.9, 0.5, 0.3], roles: ["analyst"], clue: "gallery_chalk" },
      { id: "h_uv_chalkdust", pos: [1.5, 1.2, 0.9], roles: [], clue: "uv_chalk_dust", uv: true },
      { id: "h_rail", pos: [-1.2, -1.3, 1.25], roles: [], flavor: "The fly rail. From here the whole stage lies forty feet below like a lit doll's house, and every entrance looks very small, and very far away. A dozen ropes run through your hands up here. On a show night, so does everyone's life." }
    ]
  },
  {
    id: "boxoffice",
    name: "Box Office",
    glb: "boxoffice.glb",
    mood: { fog: 0x0a0910, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.2, 1.4, 2.1], color: "#ffd9a0", intensity: 13, distance: 8 },
      { type: "point", pos: [2.2, 0.2, 2.2], color: "#ffb066", intensity: 10, distance: 8 },
      { type: "point", pos: [0, -1.6, 2.6], color: "#8fa4d8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -5.6, 2.6], target: [0.0, 0.9, 1.05], minDist: 2.0, maxDist: 8.5 },
    hotspots: [
      { id: "h_invoices", pos: [-1.5, 1.95, 1.18], roles: ["archivist"], clue: "sales_invoices" },
      { id: "h_diary", pos: [-0.3, 1.95, 1.12], roles: ["interrogator"], clue: "box_office_diary" },
      { id: "h_key_log", pos: [1.7, 2.05, 1.62], roles: ["analyst"], clue: "key_log" },
      { id: "h_poster", pos: [-2.9, 2.38, 1.75], roles: [], flavor: "Thirty years of posters in one case. At its centre, 1994: a young Margot Ellery as the Duchess, chin up, in a silver wedding dress — the same dress that now sits in a dealer's crate in the costume store." }
    ]
  },
  {
    id: "store",
    name: "Costume Store",
    glb: "store.glb",
    mood: { fog: 0x090a10, ambient: 0.34, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.8, 1.2, 2.3], color: "#ffbe7a", intensity: 13, distance: 9 },
      { type: "point", pos: [2.4, 0.2, 2.2], color: "#ffd9a0", intensity: 10, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.6], color: "#8fa4d8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -5.8, 2.4], target: [0.0, 0.8, 1.0], minDist: 2.2, maxDist: 8.5 },
    hotspots: [
      { id: "h_petra_list", pos: [0.3, 1.95, 1.08], roles: ["analyst"], clue: "petra_list" },
      { id: "h_mending", pos: [1.15, 1.95, 1.08], roles: ["archivist"], clue: "mending_book" },
      { id: "h_rails", pos: [-2.5, 1.7, 1.35], roles: ["field"], clue: "empty_rails" },
      { id: "h_crate", pos: [2.9, -0.7, 0.72], roles: [], clue: "dealer_crate" },
      { id: "h_form", pos: [-0.9, -0.92, 1.15], roles: [], flavor: "A dressmaker's form in a half-sewn duchess gown, Petra's work for the revival that will now never happen. The pins are still in it, in a neat row, like a sentence stopped mid-word." }
    ]
  }
];
