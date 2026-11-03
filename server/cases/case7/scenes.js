// Scenes and hotspots for Case 2 "Curtain Call". Blender space: x right, y depth, z up (client uses three = (x, z, -y)).
const L = (pos, color, intensity, distance) => ({ type: "point", pos, color, intensity, distance });
module.exports = [
  {
    id: "curtain_foyer", name: "Foyer & Box Office", glb: "curtain_foyer.glb",
    mood: { fog: 0x0a0710, ambient: 0.35, exposure: 1.0 },
    lights: [L([-1.6, 0.6, 2.4], "#ffb870", 15, 8), L([2.2, 1.6, 2.2], "#ff7a5a", 12, 8), L([0, -1.5, 3.0], "#8f9ed8", 6, 10)],
    camera: { pos: [0, -5.8, 2.4], target: [0, 0.9, 1.1], minDist: 2.2, maxDist: 8 },
    hotspots: [
      { id: "h_programme", pos: [-0.5, 0.2, 1.12], roles: [], clue: "programme_night" },
      { id: "h_playbill", pos: [-2.9, 0.9, 1.8], roles: ["field"], clue: "playbill_1999" },
      { id: "h_mortgage", pos: [1.9, 2.0, 1.12], roles: ["archivist"], clue: "mortgage_letter" },
      { id: "h_takings", pos: [0.9, 2.0, 1.12], roles: ["analyst"], clue: "takings_book" },
      { id: "h_notice", pos: [-1.6, 2.44, 1.75], roles: [], clue: "notice_board" },
      { id: "h_dorian_letter", pos: [2.3, -0.7, 0.66], roles: ["interrogator"], clue: "dorian_letter" },
      { id: "h_tin", pos: [-1.6, -0.9, 0.98], roles: [], flavor: "A collection tin marked 'SAVE THE MARLOWE'. Someone has posted a hundred-pound cheque into it, signed only with a flourish. The theatre still hasn't been saved." }
    ]
  },
  {
    id: "ashby_office", name: "Ashby's Office", glb: "ashby_office.glb",
    mood: { fog: 0x0a0a10, ambient: 0.33, exposure: 1.0 },
    lights: [L([0, 1.0, 2.2], "#ffc27a", 16, 8), L([-2.2, 0.6, 2.0], "#6c8cff", 10, 7), L([2.4, 1.5, 2.0], "#ff9a5a", 9, 7), L([0, -1.5, 2.8], "#8fa4d8", 4, 9)],
    camera: { pos: [0, -5.2, 2.3], target: [0, 0.9, 1.0], minDist: 2.0, maxDist: 7 },
    hotspots: [
      { id: "h_manuscript", pos: [-0.65, 1.55, 0.88], roles: ["archivist"], clue: "manuscript" },
      { id: "h_sale_contract", pos: [0.0, 1.25, 0.88], roles: ["interrogator"], clue: "sale_contract" },
      { id: "h_diary", pos: [0.7, 1.6, 0.88], roles: ["analyst"], clue: "ashby_diary" },
      { id: "h_court_letter", pos: [-2.3, 1.9, 1.32], roles: ["field"], clue: "court_letter" },
      { id: "h_pension", pos: [1.8, 2.19, 1.75], roles: ["archivist"], clue: "pension_complaint" },
      { id: "h_celeste_note", pos: [-0.65, 1.05, 0.88], roles: ["interrogator"], clue: "celeste_note" },
      { id: "h_rider", pos: [2.3, 0.2, 0.68], roles: ["analyst"], clue: "contract_rider" },
      { id: "h_decanter", pos: [-2.5, -0.5, 0.98], roles: [], flavor: "A crystal decanter, two glasses, one with lipstick on the rim. Ashby never drank alone. Or never admitted to it." }
    ]
  },
  {
    id: "wardrobe", name: "Wardrobe", glb: "wardrobe.glb",
    mood: { fog: 0x090810, ambient: 0.34, exposure: 1.0 },
    lights: [L([-0.5, 1.2, 2.4], "#ffc890", 15, 8), L([2.2, 1.0, 2.0], "#c88aff", 10, 7), L([-2.4, 1.4, 1.8], "#7aa0ff", 9, 7), L([0, -1.5, 3.0], "#8fa4d8", 5, 10)],
    camera: { pos: [0, -5.6, 2.4], target: [0, 0.8, 1.1], minDist: 2.2, maxDist: 8 },
    hotspots: [
      { id: "h_shadow_board", pos: [0.6, 2.44, 1.6], roles: ["field"], clue: "shadow_board" },
      { id: "h_signout_book", pos: [2.0, 1.8, 1.0], roles: ["archivist"], clue: "signout_book" },
      { id: "h_loft_ladder", pos: [-2.5, 2.1, 1.3], roles: ["analyst"], clue: "loft_ladder" },
      { id: "h_uv_ladder", pos: [-2.2, 2.0, 1.15], roles: [], clue: "uv_wardrobe_chalk", uv: true },
      { id: "h_hamper", pos: [2.4, -0.5, 0.7], roles: ["field"], clue: "hamper_shears" },
      { id: "h_christmas_photo", pos: [-2.9, 0.3, 1.75], roles: ["archivist"], clue: "christmas_photo" },
      { id: "h_fenn_photo", pos: [-0.9, 0.3, 0.7], roles: ["interrogator"], clue: "fenn_photo" },
      { id: "h_roster", pos: [0.3, 1.0, 0.97], roles: [], clue: "quick_change_roster" },
      { id: "h_mannequin", pos: [1.3, 2.0, 1.25], roles: [], flavor: "Queen Isolde's gown on its mannequin: forty hours of hand-stitching, every pearl sewn on by the same patient hands." }
    ]
  },
  {
    id: "stage", name: "Stage & Prompt Corner", glb: "cc_stage.glb",
    mood: { fog: 0x06060c, ambient: 0.32, exposure: 1.0 },
    lights: [L([0, 0.6, 3.6], "#ffe2b0", 22, 11), L([-3.4, 1.2, 2.6], "#ffb060", 14, 8), L([3.4, 2.0, 2.8], "#6d90ff", 13, 9), L([0, -2.5, 3.4], "#8fa4d8", 6, 12)],
    camera: { pos: [0, -9.2, 3.4], target: [0, 0.7, 1.0], minDist: 3.0, maxDist: 13 },
    hotspots: [
      { id: "h_cut_line", pos: [0.3, 0.5, 0.82], roles: ["field"], clue: "cut_line_end" },
      { id: "h_prompt_book", pos: [-3.4, 1.5, 1.1], roles: ["archivist"], clue: "prompt_book" },
      { id: "h_cue_memo", pos: [-3.95, 0.5, 1.6], roles: ["analyst"], clue: "cue_memo" },
      { id: "h_light_log", pos: [-1.6, 2.94, 1.8], roles: ["interrogator"], clue: "light_cue_log" },
      { id: "h_rig_log", pos: [3.3, 2.0, 1.3], roles: ["archivist"], clue: "rig_log" },
      { id: "h_prop_bottle", pos: [1.6, 2.5, 0.95], roles: ["field"], clue: "prop_bottle" },
      { id: "h_ghost_light", pos: [-1.2, 0.9, 1.5], roles: [], flavor: "The ghost light: one bare bulb on a stand, left burning so the theatre is never truly dark. Tonight it lights a very bad scene." }
    ]
  },
  {
    id: "grid", name: "The Grid", glb: "grid.glb",
    mood: { fog: 0x04050a, ambient: 0.3, exposure: 1.0 },
    lights: [L([0, 1.2, 2.2], "#cfe0ff", 14, 8), L([-2.3, 1.0, 1.4], "#ffb060", 11, 6), L([2.4, 1.6, 1.8], "#6d90ff", 10, 7), L([0, -1.5, 2.4], "#8fa4d8", 5, 9)],
    camera: { pos: [0, -5.0, 2.7], target: [0, 1.0, 0.7], minDist: 2.0, maxDist: 7 },
    hotspots: [
      { id: "h_hatch_thread", pos: [-2.3, 1.0, 0.3], roles: ["analyst"], clue: "hatch_thread" },
      { id: "h_line_anchor", pos: [0.3, 2.1, 0.95], roles: ["field"], clue: "line_anchor" },
      { id: "h_flyman_kit", pos: [2.0, 0.5, 0.58], roles: ["interrogator"], clue: "flyman_kit" },
      { id: "h_grid_door", pos: [2.95, 1.7, 1.2], roles: ["archivist"], clue: "grid_door" },
      { id: "h_hatch_clean", pos: [-1.2, 1.5, 0.38], roles: [], clue: "hatch_clean" },
      { id: "h_uv_hatch", pos: [-1.7, 1.25, 0.5], roles: [], clue: "uv_hatch_fibres", uv: true },
      { id: "h_pulley", pos: [-0.6, 2.3, 1.75], roles: [], flavor: "A pulley wheel the size of a dinner table, polished by a century of rope. It is humming faintly as the wind crosses the roof." }
    ]
  }
];
