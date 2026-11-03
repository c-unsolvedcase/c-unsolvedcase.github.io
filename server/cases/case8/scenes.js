// Scenes and hotspots for Case 3 "Station Nine". Blender space: x right, y depth, z up (client three = (x, z, -y)).
const L = (pos, color, intensity, distance) => ({ type: "point", pos, color, intensity, distance });
module.exports = [
  {
    id: "cold_store", name: "Ice-Core Cold Store", glb: "cold_store.glb",
    mood: { fog: 0x06101a, ambient: 0.4, exposure: 1.0 },
    lights: [L([0, 1.0, 2.4], "#bfe0ff", 18, 9), L([-2.2, 0.5, 1.8], "#7fb8ff", 12, 7), L([2.4, 1.6, 2.0], "#ff9a7a", 9, 7), L([0, -1.5, 2.8], "#a8c4e8", 6, 10)],
    camera: { pos: [0, -5.6, 2.3], target: [0, 0.8, 1.1], minDist: 2.2, maxDist: 7.5 },
    hotspots: [
      { id: "h_door_release", pos: [2.9, 1.2, 1.1], roles: ["field"], clue: "door_release" },
      { id: "h_latch_pin", pos: [2.9, 2.0, 1.45], roles: ["field"], clue: "latch_pin" },
      { id: "h_door_log", pos: [-0.4, 2.45, 1.45], roles: ["field"], clue: "door_log" },
      { id: "h_uv_seal", pos: [2.75, 1.55, 1.25], roles: [], clue: "uv_store_smear", uv: true },
      { id: "h_thermo", pos: [-2.9, 0.4, 1.4], roles: ["analyst"], clue: "thermo_chart" },
      { id: "h_core_14b", pos: [0.2, 0.9, 0.97], roles: ["analyst"], clue: "core_14b" },
      { id: "h_voss_notebook", pos: [-1.4, -0.2, 0.74], roles: ["interrogator"], clue: "voss_notebook" },
      { id: "h_alarm_panel", pos: [1.6, 2.44, 1.5], roles: ["archivist"], clue: "alarm_panel" },
      { id: "h_cctv", pos: [2.9, -0.8, 2.1], roles: ["interrogator"], clue: "cctv_cable" },
      { id: "h_core_racks", pos: [-2.4, 1.6, 1.2], roles: [], flavor: "Racks of ice cores, each a winter from before anyone kept records. Voss used to say this room was the only honest place on the station." }
    ]
  },
  {
    id: "mess", name: "Mess Hall", glb: "mess.glb",
    mood: { fog: 0x0c0a0a, ambient: 0.36, exposure: 1.0 },
    lights: [L([0, 0.6, 2.6], "#ffc27a", 16, 9), L([-2.6, 1.8, 2.2], "#ff9a5a", 10, 7), L([2.8, 1.2, 2.2], "#7aa0ff", 10, 8), L([0, -1.6, 2.9], "#8fa4d8", 5, 10)],
    camera: { pos: [0, -6.4, 2.5], target: [0, 0.8, 1.1], minDist: 2.4, maxDist: 9 },
    hotspots: [
      { id: "h_seating", pos: [0.0, 0.3, 0.9], roles: [], clue: "seating_plan" },
      { id: "h_toast", pos: [1.3, 0.5, 0.9], roles: ["interrogator"], clue: "toast_recording" },
      { id: "h_parka", pos: [-3.4, 0.8, 1.5], roles: ["field"], clue: "purple_parka" },
      { id: "h_lanyard", pos: [-3.4, -0.3, 1.5], roles: ["analyst"], clue: "card_lanyard" },
      { id: "h_kitchen_log", pos: [1.5, 2.1, 1.1], roles: ["archivist"], clue: "kitchen_log" },
      { id: "h_still", pos: [-2.6, 2.1, 0.72], roles: ["field"], clue: "hidden_still" },
      { id: "h_rota", pos: [3.4, 1.0, 1.6], roles: ["archivist"], clue: "shift_rota" },
      { id: "h_clinic_note", pos: [3.4, 0.0, 1.6], roles: ["archivist"], clue: "clinic_note" },
      { id: "h_menu", pos: [-0.3, 2.44, 1.9], roles: [], flavor: "A hand-lettered menu: MIDWINTER FEAST. Under it someone has drawn a small sun, with a face, rising over the ice." }
    ]
  },
  {
    id: "radio", name: "Radio Room", glb: "radio.glb",
    mood: { fog: 0x06100c, ambient: 0.34, exposure: 1.0 },
    lights: [L([-0.6, 1.2, 2.2], "#9affc0", 12, 7), L([2.0, 1.4, 2.0], "#7aa0ff", 12, 7), L([-2.4, 1.4, 1.8], "#ffb060", 9, 7), L([0, -1.5, 2.8], "#8fa4d8", 5, 9)],
    camera: { pos: [0, -5.3, 2.3], target: [0, 0.9, 1.0], minDist: 2.0, maxDist: 7 },
    hotspots: [
      { id: "h_radio_log", pos: [-0.8, 1.6, 0.98], roles: ["archivist"], clue: "radio_log" },
      { id: "h_uv_logdesk", pos: [-0.45, 1.75, 1.05], roles: [], clue: "uv_radio_erasure", uv: true },
      { id: "h_voss_email", pos: [2.0, 1.2, 0.92], roles: ["analyst"], clue: "voss_email" },
      { id: "h_gym_printout", pos: [-2.3, 1.9, 1.1], roles: ["interrogator"], clue: "gym_printout" },
      { id: "h_grant_ledger", pos: [0.6, 2.0, 0.98], roles: ["archivist"], clue: "grant_ledger" },
      { id: "h_flight_schedule", pos: [-2.95, 0.5, 1.7], roles: [], clue: "flight_schedule" },
      { id: "h_pavel_draft", pos: [2.3, -0.6, 0.57], roles: ["interrogator"], clue: "pavel_draft" },
      { id: "h_voss_calendar", pos: [-0.2, 2.2, 1.8], roles: ["interrogator"], clue: "voss_calendar" },
      { id: "h_antenna", pos: [2.5, 1.9, 1.3], roles: [], flavor: "A model of the station's antenna mast, made from paperclips by someone with a very long winter." }
    ]
  },
  {
    id: "lab", name: "Laboratory", glb: "sn_lab.glb",
    mood: { fog: 0x080c10, ambient: 0.36, exposure: 1.0 },
    lights: [L([0, 1.0, 2.5], "#e4f0ff", 18, 9), L([-2.2, 1.4, 1.8], "#7fb8ff", 10, 7), L([2.4, 1.2, 2.0], "#ffd9a0", 9, 7), L([0, -1.5, 2.8], "#a8c4e8", 5, 10)],
    camera: { pos: [0, -5.6, 2.4], target: [0, 0.8, 1.1], minDist: 2.2, maxDist: 8 },
    hotspots: [
      { id: "h_dataset", pos: [-1.6, 1.4, 1.1], roles: ["analyst"], clue: "dataset_metadata" },
      { id: "h_marit_note", pos: [-1.0, 1.4, 0.98], roles: [], clue: "marit_note" },
      { id: "h_session_log", pos: [-0.2, 1.6, 0.98], roles: ["analyst"], clue: "session_log" },
      { id: "h_raw_counts", pos: [1.2, 1.5, 0.98], roles: ["archivist"], clue: "raw_counts" },
      { id: "h_reid_note", pos: [2.95, 0.6, 1.5], roles: ["interrogator"], clue: "reid_note" },
      { id: "h_core_logbook", pos: [2.2, 1.9, 1.07], roles: ["field"], clue: "core_logbook" },
      { id: "h_centrifuge", pos: [0.6, -0.3, 0.98], roles: [], flavor: "A centrifuge spinning slowly with nothing in it. Someone forgot to switch it off at midwinter, and nobody has dared since." }
    ]
  },
  {
    id: "plant", name: "Plant Room", glb: "plant.glb",
    mood: { fog: 0x0c0806, ambient: 0.32, exposure: 1.0 },
    lights: [L([0, 1.0, 2.3], "#ffb060", 16, 8), L([-2.4, 1.2, 1.8], "#ff6a4a", 10, 7), L([2.4, 1.6, 2.0], "#6d90ff", 10, 7), L([0, -1.5, 2.6], "#8fa4d8", 5, 9)],
    camera: { pos: [0, -5.4, 2.3], target: [0, 0.9, 1.0], minDist: 2.0, maxDist: 7 },
    hotspots: [
      { id: "h_bms_log", pos: [-1.2, 2.44, 1.5], roles: ["analyst"], clue: "bms_log" },
      { id: "h_tool_crib", pos: [-2.95, 1.2, 1.5], roles: ["archivist"], clue: "tool_crib" },
      { id: "h_toolbag", pos: [0.9, 1.4, 1.0], roles: ["field"], clue: "jonas_toolbag" },
      { id: "h_code_sheet", pos: [1.8, 2.44, 1.5], roles: ["interrogator"], clue: "code_sheet" },
      { id: "h_breaker", pos: [2.95, 0.2, 1.3], roles: ["field"], clue: "breaker" },
      { id: "h_bank_slip", pos: [-0.6, 1.2, 0.98], roles: ["archivist"], clue: "bank_slip" },
      { id: "h_work_order", pos: [-2.95, -0.4, 1.4], roles: ["analyst"], clue: "work_order" },
      { id: "h_manual", pos: [2.3, 1.9, 1.12], roles: ["archivist"], clue: "maintenance_manual" },
      { id: "h_generator", pos: [-1.8, -0.2, 0.95], roles: [], flavor: "The backup generator, warm to the touch and humming. It has kept eight people alive through four months of dark, and it has never once complained." }
    ]
  }
];
