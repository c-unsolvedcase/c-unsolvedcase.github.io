// Scenes and hotspots for Case 6: "The Hollow Crown".
// Coordinates are in BLENDER space (x right, y depth, z up). The client converts to three.js:
//   three = (x, z, -y).
// roles: which co-op roles can SEE and inspect this hotspot. [] = everyone.
// If the holder of a listed role is disconnected, the hotspot opens to everyone.
// clue: id from clues.js. flavor: text for items that are not clues.
// lights: realtime lights for the client (no baked lighting, keeps downloads small).

module.exports = [
  {
    id: "gallery",
    name: "The Karash Gallery",
    glb: "gallery.glb",
    mood: { fog: 0x0a0906, ambient: 0.36, exposure: 1.0 },
    lights: [
      { type: "point", pos: [0, 0.6, 2.6], color: "#ffd9a0", intensity: 14, distance: 10 },
      { type: "point", pos: [-2.6, 0.4, 2.2], color: "#ffca7a", intensity: 9, distance: 8 },
      { type: "point", pos: [2.6, 0.2, 2.2], color: "#8fa4d8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.0, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_crown", pos: [0, 1.6, 1.52], roles: [], clue: "display_crown" },
      { id: "h_notebook", pos: [-3.4, 2.0, 0.9], roles: ["archivist"], clue: "sauer_notebook" },
      { id: "h_scope", pos: [3.4, 2.0, 1.05], roles: ["analyst"], clue: "scope_slide" },
      { id: "h_recorder", pos: [-0.9, -0.7, 0.62], roles: ["interrogator"], clue: "ingrid_recorder" },
      { id: "h_plinth", pos: [4.3, 0.4, 1.85], roles: [], flavor: "The Ithara plinth, the gallery's second treasure: a basalt queen from the same tomb complex, three thousand years old and perfectly indifferent to the evening. The wall text beneath her — written by Dr. Raman, approved by the director — explains at length how the Karash crown came to the Fenwick 'through the generosity of its donors and the vigilance of its keepers'. Somebody has read that sentence recently and often. The card's corner is worn where a thumb keeps finding it." },
      { id: "h_uv_dust", pos: [3.6, 0.9, 1.2], roles: [], clue: "uv_plinth_dust", uv: true },
    ]
  },
  {
    id: "workshop",
    name: "The Restoration Workshop",
    glb: "workshop.glb",
    mood: { fog: 0x0a0705, ambient: 0.34, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.8, 0.6, 2.3], color: "#ffc98a", intensity: 12, distance: 9 },
      { type: "point", pos: [2.4, 0.2, 2.1], color: "#ffca7a", intensity: 10, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.3], color: "#7a86b8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.2, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_mould", pos: [-3.6, 1.9, 0.9], roles: ["field"], clue: "casting_mould" },
      { id: "h_requisition", pos: [-0.8, 2.15, 0.95], roles: ["archivist"], clue: "requisition" },
      { id: "h_invoice", pos: [1.6, 2.02, 1.56], roles: ["analyst"], clue: "geneva_invoice" },
      { id: "h_kouros", pos: [3.9, 1.47, 1.5], roles: ["field"], clue: "original_crown" },
      { id: "h_kiln", pos: [-4.3, -1.18, 1.05], roles: [], flavor: "The workshop kiln, cold since Thursday, and beside it the benches in their two nations: the assistant's, scrubbed and ordered, every tool on its shadow — and the chief restorer's, at the room's far end, which nobody else touches and nobody else tidies. On it, under a cloth, the shapes of work in progress lie like patients under sheets. Twenty-six years of other people's treasures have passed across that bench and been made whole. It is not the bench's fault that its master finally made a thing of his own." }
    ]
  },
  {
    id: "archives",
    name: "Archives & Registrar's Office",
    glb: "archives.glb",
    mood: { fog: 0x080806, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-2.0, 0.8, 2.2], color: "#e8dcc0", intensity: 12, distance: 9 },
      { type: "point", pos: [2.4, 0.2, 2.0], color: "#ffd9a0", intensity: 9, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.3], color: "#7a86b8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -6.2, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_movement", pos: [-3.6, 2.0, 1.3], roles: ["archivist"], clue: "movement_log" },
      { id: "h_security", pos: [-2.2, 2.0, 1.3], roles: ["archivist"], clue: "security_log" },
      { id: "h_exchange", pos: [-0.6, 2.0, 1.05], roles: ["analyst"], clue: "exchange_log" },
      { id: "h_letter", pos: [0.9, 2.1, 1.1], roles: ["interrogator"], clue: "lindqvist_letter" },
      { id: "h_leave", pos: [3.9, 1.9, 1.5], roles: [], clue: "leave_chit" },
      { id: "h_copier", pos: [4.2, 0.2, 1.0], roles: ["field"], clue: "copier_log" },
      { id: "h_deeds", pos: [-4.4, 0.4, 1.38], roles: [], flavor: "Deed boxes, floor to ceiling, in the registrar's beautiful hand: bequests, accessions, loans, the paper ancestry of every object in the building. A museum is two collections — the things, and the truth about the things — and this room is the second one. It is kept by one person, trusted absolutely, audited never. That is how the Fenwick arranged its memory, and its memory, in the end, is where both crimes were written down." }
    ]
  },
  {
    id: "gala",
    name: "The Gala Hall",
    glb: "gala.glb",
    mood: { fog: 0x0b0806, ambient: 0.37, exposure: 1.0 },
    lights: [
      { type: "point", pos: [0, 0.4, 2.7], color: "#ffdca8", intensity: 15, distance: 11 },
      { type: "point", pos: [-2.8, 0.4, 2.2], color: "#ffca7a", intensity: 9, distance: 8 },
      { type: "point", pos: [2.8, 0.2, 2.2], color: "#ffb35c", intensity: 9, distance: 8 }
    ],
    camera: { pos: [0.0, -6.4, 2.6], target: [0.0, 1.0, 1.0], minDist: 2.2, maxDist: 9.5 },
    hotspots: [
      { id: "h_slip", pos: [-3.8, 1.9, 1.0], roles: ["field"], clue: "lure_slip" },
      { id: "h_stubs", pos: [-2.4, 2.0, 1.15], roles: [], clue: "cloakroom_chit" },
      { id: "h_sheet", pos: [1.4, 2.05, 0.95], roles: ["interrogator"], clue: "contact_sheet" },
      { id: "h_booth", pos: [2.6, 2.1, 1.2], roles: ["analyst"], clue: "booth_log" },
      { id: "h_chit", pos: [3.8, 2.0, 1.1], roles: ["archivist"], clue: "camera_request" },
      { id: "h_lectern", pos: [0, -0.9, 1.15], roles: [], flavor: "The gala lectern, abandoned mid-evening: the director's speech in its folder, the order of toasts, a seating plan annotated in three hands. The speech's peroration — much applauded, say the papers — praised 'the keepers of this collection, in whose vigilance these treasures sleep safe'. It was delivered at twenty to eleven to a room in evening dress, while in the booth behind the hall a printer warmed, once, for a single page, and a woman at the long table folded her napkin and rose to answer a summons that had not been sent." }
    ]
  },
  {
    id: "vault",
    name: "The Strongroom & Fumigation Chamber",
    glb: "vault.glb",
    mood: { fog: 0x06090a, ambient: 0.33, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.6, 0.8, 2.2], color: "#cfe0e6", intensity: 12, distance: 9 },
      { type: "point", pos: [2.4, 0.2, 2.0], color: "#ffd9a0", intensity: 8, distance: 8 },
      { type: "point", pos: [0, -1.8, 2.3], color: "#7a86b8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -5.8, 2.5], target: [0.0, 0.9, 1.0], minDist: 2.0, maxDist: 9.0 },
    hotspots: [
      { id: "h_pressure", pos: [-1.75, 0.62, 1.5], roles: ["interrogator"], clue: "pressure_log" },
      { id: "h_trolley", pos: [-0.9, 1.6, 1.0], roles: ["interrogator"], clue: "diadem_trolley" },
      { id: "h_badge", pos: [0.7, 1.2, 0.4], roles: ["field"], clue: "sauer_badge" },
      { id: "h_tape", pos: [2.9, 2.0, 1.35], roles: ["analyst"], clue: "chamber_tape" },
      { id: "h_uv_bracket", pos: [3.5, 2.2, 1.9], roles: [], clue: "uv_bracket_paint", uv: true },
      { id: "h_door", pos: [4.05, 2.28, 1.3], roles: [], flavor: "The strongroom door: nine inches of steel on a hinge like a ship's, with the museum's arms embossed and the frost of the wing's cold still on its lower edge. It has been opened for kings' ransoms and closed on empires of paper. It opens now onto a quiet corridor and a sealed room, and stands the way doors stand in the morning after — patient, massive, and entirely unable to say the one thing it knows, which is every hand that has ever been laid upon it." }
    ]
  }
];
