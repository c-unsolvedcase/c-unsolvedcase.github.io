// Scenes and hotspots for Case 2: "The Meridian Fall".
// Coordinates are in BLENDER space (x right, y depth, z up). The client converts to three.js:
//   three = (x, z, -y).
// roles: which co-op roles can SEE and inspect this hotspot. [] = everyone.
// If the holder of a listed role is disconnected, the hotspot opens to everyone.
// clue: id from clues.js. flavor: text for items that are not clues.
// lights: realtime lights for the client (no baked lighting, keeps downloads small).

module.exports = [
  {
    id: "lobby",
    name: "Hotel Lobby",
    glb: "lobby.glb",
    mood: { fog: 0x0b0a10, ambient: 0.35, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-1.6, 1.6, 1.9], color: "#ffb066", intensity: 15, distance: 8 },
      { type: "point", pos: [2.2, 0.6, 2.4], color: "#ffd9a0", intensity: 12, distance: 8 },
      { type: "point", pos: [0, -1.6, 2.8], color: "#8fa4d8", intensity: 5, distance: 10 }
    ],
    camera: { pos: [0.0, -6.2, 2.4], target: [0.0, 0.9, 1.1], minDist: 2.2, maxDist: 8.5 },
    hotspots: [
      { id: "h_refund_book", pos: [-1.2, 2.2, 1.22], roles: ["archivist"], clue: "refund_book" },
      { id: "h_register", pos: [-2.3, 2.2, 1.2], roles: ["archivist"], clue: "guest_register" },
      { id: "h_desk_drawer", pos: [0.4, 2.05, 1.24], roles: ["analyst"], clue: "desk_drawer" },
      { id: "h_phone_log", pos: [1.6, 2.2, 1.24], roles: ["field"], clue: "desk_phone_log" },
      { id: "h_complaint", pos: [2.5, 2.2, 1.18], roles: ["interrogator"], clue: "complaint_card" },
      { id: "h_rota", pos: [3.82, 0.8, 1.6], roles: ["interrogator"], clue: "rota_card" },
      { id: "h_gala_photo", pos: [-3.82, 0.6, 1.8], roles: [], clue: "gala_photo" },
      { id: "h_bell", pos: [0.95, 2.25, 1.24], roles: [], flavor: "The brass desk bell. It has a bright spot worn on top by sixty years of impatient thumbs. Helen used to ring it twice, as a joke, every time she passed." }
    ]
  },
  {
    id: "suite",
    name: "Helen's Suite",
    glb: "suite.glb",
    mood: { fog: 0x0a0a12, ambient: 0.33, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-0.8, 1.8, 1.6], color: "#ffbe7a", intensity: 13, distance: 7 },
      { type: "point", pos: [2.0, 0.4, 1.8], color: "#6c8cff", intensity: 10, distance: 7 },
      { type: "point", pos: [0, -1.2, 2.6], color: "#8fa4d8", intensity: 4, distance: 9 }
    ],
    camera: { pos: [0.0, -5.4, 2.2], target: [0.0, 0.8, 1.0], minDist: 2.0, maxDist: 7.5 },
    hotspots: [
      { id: "h_draft", pos: [-1.5, 2.0, 1.06], roles: ["archivist"], clue: "centenary_draft" },
      { id: "h_voice_memo", pos: [-0.6, 2.0, 1.05], roles: ["interrogator"], clue: "voice_memo" },
      { id: "h_glasses_case", pos: [0.3, 2.0, 1.06], roles: ["analyst"], clue: "glasses_case" },
      { id: "h_shoes", pos: [-2.8, -0.8, 0.34], roles: ["field"], clue: "evening_shoes" },
      { id: "h_packed", pos: [2.2, 0.8, 0.92], roles: [], clue: "packed_case" },
      { id: "h_tea", pos: [1.2, -1.2, 0.9], roles: [], flavor: "A tea tray with a pot gone cold and one cup, unused, still in its paper seal. The gala night tray the hotel sends up to its historian. She never poured." }
    ]
  },
  {
    id: "corridor",
    name: "Service Corridor",
    glb: "corridor.glb",
    mood: { fog: 0x05080c, ambient: 0.32, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-2.2, 1.2, 2.5], color: "#d8e4ff", intensity: 14, distance: 8 },
      { type: "point", pos: [2.4, 0.4, 2.5], color: "#ffd9a0", intensity: 11, distance: 8 },
      { type: "point", pos: [0, -1.2, 2.8], color: "#8fa4d8", intensity: 5, distance: 9 }
    ],
    camera: { pos: [0.0, -5.8, 2.3], target: [0.0, 0.7, 1.0], minDist: 2.2, maxDist: 8.0 },
    hotspots: [
      { id: "h_lift_log", pos: [-2.6, 1.62, 1.42], roles: ["analyst"], clue: "lift_log" },
      { id: "h_uv_lift", pos: [-1.8, 1.5, 0.4], roles: [], clue: "uv_lift_scuffs", uv: true },
      { id: "h_door_log", pos: [-0.8, 1.56, 1.52], roles: ["archivist"], clue: "door_log" },
      { id: "h_fire_register", pos: [1.2, 1.86, 1.46], roles: [], clue: "fire_register" },
      { id: "h_stairs", pos: [2.9, 0.3, 0.74], roles: ["field"], clue: "stairs_carpet" },
      { id: "h_laundry_rota", pos: [-3.8, -0.6, 1.5], roles: ["interrogator"], clue: "laundry_rota" },
      { id: "h_mop", pos: [3.7, -1.3, 0.45], roles: [], flavor: "A mop and bucket in the corner, wrung dry and put away square. The night cleaner's work, or someone else's. The water in the bucket was changed recently; it is still faintly warm." }
    ]
  },
  {
    id: "terrace",
    name: "Roof Terrace",
    glb: "terrace.glb",
    mood: { fog: 0x03060d, ambient: 0.36, exposure: 1.0 },
    lights: [
      { type: "point", pos: [-2.0, 1.8, 2.2], color: "#ffb35c", intensity: 14, distance: 9 },
      { type: "point", pos: [2.6, -0.6, 2.4], color: "#7fb8ff", intensity: 11, distance: 9 },
      { type: "point", pos: [0, -2.2, 3.0], color: "#8fa4d8", intensity: 5, distance: 11 }
    ],
    camera: { pos: [0.2, -6.4, 2.2], target: [0.2, 0.8, 0.8], minDist: 2.6, maxDist: 11.0 },
    hotspots: [
      { id: "h_planter", pos: [-2.4, 1.9, 1.3], roles: ["field"], clue: "terrace_planter" },
      { id: "h_tin", pos: [0.6, 2.62, 0.68], roles: ["field"], clue: "cigarette_tin" },
      { id: "h_glasses", pos: [1.8, 1.0, 0.3], roles: [], clue: "glasses_found" },
      { id: "h_rail_fibre", pos: [3.4, -0.5, 1.05], roles: ["analyst"], clue: "rail_fibre" },
      { id: "h_uv_rail", pos: [2.9, -0.9, 1.0], roles: [], clue: "uv_terrace_smear", uv: true },
      { id: "h_telescope", pos: [-3.6, -1.4, 1.42], roles: [], flavor: "A brass telescope on a stand, a relic of the hotel's first owner, who liked to watch the shipping. Tonight it points at nothing but cloud." }
    ]
  }
];
