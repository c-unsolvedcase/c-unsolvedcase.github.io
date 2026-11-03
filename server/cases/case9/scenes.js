// Scenes and hotspots for Case 4 "The Midnight Express". Blender space: x right, y depth, z up (client three = (x, z, -y)).
const L = (pos, color, intensity, distance) => ({ type: "point", pos, color, intensity, distance });
module.exports = [
  {
    id: "compartment", name: "Compartment 3", glb: "compartment.glb",
    mood: { fog: 0x0a0608, ambient: 0.36, exposure: 1.0 },
    lights: [L([0, 0.6, 2.2], "#ffb870", 14, 7), L([-1.6, 1.4, 1.8], "#ff9a5a", 9, 6), L([1.8, 1.2, 1.8], "#7a90ff", 7, 6), L([0, -1.4, 2.6], "#8f9ed8", 4, 8)],
    camera: { pos: [0, -4.9, 2.1], target: [0, 0.7, 1.0], minDist: 1.8, maxDist: 6.5 },
    hotspots: [
      { id: "h_pillbox", pos: [0.3, 0.6, 0.9], roles: ["analyst"], clue: "vale_pillbox" },
      { id: "h_brandy_glass", pos: [-0.1, 0.55, 0.92], roles: ["analyst"], clue: "brandy_glass" },
      { id: "h_decanter_new", pos: [-1.6, 1.5, 0.98], roles: ["field"], clue: "decanter_new" },
      { id: "h_connecting_door", pos: [2.38, 0.8, 1.1], roles: ["field"], clue: "connecting_door" },
      { id: "h_uv_bolt", pos: [2.3, 0.95, 1.2], roles: [], clue: "uv_bolt_smear", uv: true },
      { id: "h_sapphire_case", pos: [-0.9, 1.65, 0.92], roles: ["analyst"], clue: "sapphire_case" },
      { id: "h_vale_diary", pos: [-1.0, 0.1, 0.86], roles: ["interrogator"], clue: "vale_diary" },
      { id: "h_sale_contract", pos: [0.9, 1.7, 0.92], roles: ["archivist"], clue: "sale_contract" },
      { id: "h_nightcap_note", pos: [-2.38, -0.3, 1.5], roles: ["archivist"], clue: "nightcap_note" },
      { id: "h_window", pos: [0.0, 1.94, 1.55], roles: ["field"], clue: "window_catch" },
      { id: "h_bunk", pos: [1.6, -0.2, 0.9], roles: [], flavor: "The bunk has been slept in on one side only. A neat pair of slippers sits on the rug, toes together, the way a careful man leaves them." }
    ]
  },
  {
    id: "corridor", name: "Sleeper Corridor", glb: "me_corridor.glb",
    mood: { fog: 0x08080c, ambient: 0.34, exposure: 1.0 },
    lights: [L([-2.6, 0.2, 2.2], "#ffb060", 11, 6), L([0, 0.2, 2.2], "#ffc880", 11, 6), L([2.6, 0.2, 2.2], "#ffb060", 11, 6), L([0, -1.2, 2.5], "#8f9ed8", 4, 8)],
    camera: { pos: [0, -5.0, 2.0], target: [0, 0.4, 1.1], minDist: 2.0, maxDist: 8.5 },
    hotspots: [
      { id: "h_bell_log", pos: [-2.4, 1.74, 1.5], roles: ["archivist"], clue: "bell_log" },
      { id: "h_corridor_plan", pos: [2.4, 1.74, 1.6], roles: ["archivist"], clue: "corridor_plan" },
      { id: "h_pantry_envelope", pos: [3.94, 0.3, 1.15], roles: ["field"], clue: "pantry_envelope" },
      { id: "h_wire_hook", pos: [0.6, 1.2, 0.92], roles: ["field"], clue: "wire_hook" },
      { id: "h_provenance", pos: [-1.0, -0.1, 0.9], roles: ["analyst"], clue: "provenance_papers" },
      { id: "h_passenger_list", pos: [-3.94, 0.3, 1.6], roles: ["interrogator"], clue: "passenger_list" },
      { id: "h_fire_axe", pos: [1.4, 1.74, 1.7], roles: [], flavor: "A fire axe in a glass case marked IN CASE OF EMERGENCY. The glass has been dusted, which in this carriage counts as an event." }
    ]
  },
  {
    id: "dining", name: "Dining Car", glb: "me_dining.glb",
    mood: { fog: 0x0c0806, ambient: 0.36, exposure: 1.0 },
    lights: [L([-2.6, 0.4, 2.3], "#ffc27a", 12, 7), L([0, 0.4, 2.3], "#ffd8a0", 12, 7), L([2.6, 0.4, 2.3], "#ffc27a", 12, 7), L([0, -1.4, 2.6], "#8f9ed8", 4, 8)],
    camera: { pos: [0, -5.0, 2.1], target: [0, 0.6, 1.0], minDist: 2.0, maxDist: 8.5 },
    hotspots: [
      { id: "h_dining_roster", pos: [-1.5, -0.2, 0.9], roles: ["archivist"], clue: "dining_roster" },
      { id: "h_argument_slip", pos: [1.2, 1.2, 0.9], roles: ["interrogator"], clue: "argument_slip" },
      { id: "h_pantry_decanter", pos: [2.8, 1.94, 1.05], roles: ["field"], clue: "pantry_decanter" },
      { id: "h_bar_tab", pos: [-3.0, 1.94, 1.4], roles: ["archivist"], clue: "bar_tab" },
      { id: "h_dictation", pos: [-0.5, 1.5, 1.0], roles: ["interrogator"], clue: "dictation" },
      { id: "h_rosalind_letter", pos: [1.8, -0.5, 0.9], roles: ["analyst"], clue: "rosalind_letter" },
      { id: "h_menu", pos: [3.94, 0.4, 1.6], roles: [], flavor: "Tonight's menu, with a hand-drawn locomotive in the corner. Someone has underlined 'Brandy, with the compliments of the line' twice." }
    ]
  },
  {
    id: "lounge", name: "Saloon Lounge", glb: "lounge.glb",
    mood: { fog: 0x0a0608, ambient: 0.34, exposure: 1.0 },
    lights: [L([0, 0.8, 2.3], "#ffb870", 14, 8), L([-2.2, 1.4, 1.8], "#ff7a5a", 8, 6), L([2.4, 1.2, 1.8], "#7a90ff", 8, 6), L([0, -1.4, 2.8], "#8f9ed8", 4, 9)],
    camera: { pos: [0, -5.4, 2.2], target: [0, 0.8, 1.0], minDist: 2.0, maxDist: 7.5 },
    hotspots: [
      { id: "h_card_score", pos: [0.0, 0.3, 0.9], roles: [], clue: "card_score" },
      { id: "h_lounge_clock", pos: [0.0, 2.44, 2.05], roles: ["field"], clue: "lounge_clock" },
      { id: "h_volkov_telegram", pos: [2.94, 0.6, 1.5], roles: ["interrogator"], clue: "volkov_telegram" },
      { id: "h_doctor_bag", pos: [-1.8, 0.8, 0.6], roles: ["field"], clue: "doctor_bag" },
      { id: "h_volkov_notes", pos: [-0.6, 0.25, 0.92], roles: ["interrogator"], clue: "volkov_notes" },
      { id: "h_ivana_letter", pos: [-2.94, 0.4, 1.5], roles: ["archivist"], clue: "ivana_letter" },
      { id: "h_gramophone", pos: [2.2, 1.9, 1.0], roles: [], flavor: "A gramophone with a waltz still on the turntable. Someone has stopped it mid-bar, as if they were interrupted." }
    ]
  },
  {
    id: "baggage", name: "Baggage Car", glb: "baggage.glb",
    mood: { fog: 0x08080a, ambient: 0.3, exposure: 1.0 },
    lights: [L([-1.2, 0.8, 2.3], "#ffb060", 11, 7), L([1.6, 1.4, 2.0], "#ff9a5a", 9, 7), L([0, -1.4, 2.6], "#8f9ed8", 4, 9)],
    camera: { pos: [0, -5.4, 2.2], target: [0, 0.8, 1.0], minDist: 2.0, maxDist: 8 },
    hotspots: [
      { id: "h_trunk", pos: [-2.0, 1.6, 0.78], roles: ["field"], clue: "fairweather_trunk" },
      { id: "h_uv_dust", pos: [-1.7, 1.45, 0.85], roles: [], clue: "uv_baggage_dust", uv: true },
      { id: "h_manifest", pos: [3.44, 0.6, 1.5], roles: ["archivist"], clue: "luggage_manifest" },
      { id: "h_paste_receipt", pos: [1.8, 0.8, 0.72], roles: ["analyst"], clue: "paste_receipt" },
      { id: "h_locket", pos: [-0.6, 0.2, 0.55], roles: ["interrogator"], clue: "locket" },
      { id: "h_hale_note", pos: [0.8, 2.44, 1.25], roles: ["archivist"], clue: "hale_note" },
      { id: "h_crates", pos: [-3.0, -0.2, 0.9], roles: [], flavor: "Crates stamped FRAGILE, VALMER AUCTION HOUSE. Inside the lids someone has tucked straw, and what looks like a very old cheese." }
    ]
  },
  {
    id: "guard", name: "Guard's Van", glb: "guard.glb",
    mood: { fog: 0x08080c, ambient: 0.34, exposure: 1.0 },
    lights: [L([0, 0.8, 2.1], "#ffc27a", 13, 6), L([-1.6, 1.4, 1.6], "#ff9a5a", 8, 5), L([1.8, 1.2, 1.6], "#7a90ff", 8, 5), L([0, -1.4, 2.5], "#8f9ed8", 4, 8)],
    camera: { pos: [0, -4.9, 2.1], target: [0, 0.7, 1.0], minDist: 1.8, maxDist: 6.5 },
    hotspots: [
      { id: "h_punch_book", pos: [0.0, 0.9, 0.94], roles: ["archivist"], clue: "punch_book" },
      { id: "h_spare_key_log", pos: [-1.2, 1.94, 1.35], roles: ["archivist"], clue: "spare_key_log" },
      { id: "h_border_log", pos: [1.2, 1.94, 1.4], roles: ["archivist"], clue: "border_log" },
      { id: "h_stopped_watch", pos: [0.6, 0.4, 0.94], roles: ["analyst"], clue: "stopped_watch" },
      { id: "h_exam_note", pos: [2.38, 0.2, 1.4], roles: ["interrogator"], clue: "exam_note" },
      { id: "h_conductor_report", pos: [-2.38, 0.2, 1.4], roles: ["archivist"], clue: "conductor_report" },
      { id: "h_lamp", pos: [-0.5, 1.94, 1.9], roles: [], flavor: "A red signal lamp, polished until it gleams. Whatever else happened tonight, the conductor kept his lamp in order." }
    ]
  }
];
