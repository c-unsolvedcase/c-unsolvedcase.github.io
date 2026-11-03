// Story layer for Case 8 (ported from the author's "case3") "Station Nine": conclusions, board links, chapters, hints, accusation, epilogue.
const meta = {
  id: "case8",
  title: "Station Nine",
  tagline: "Eight people. Four months of dark. One of them locked the leader in the cold.",
  summary: "Dr. Anselm Voss, leader of Antarctic Station Nine, was found dead in the ice-core cold store the morning after the midwinter dinner. The inside release was stuck, the alarm never sounded, and the doctor wrote it up as an accident. A foundation official wants it checked before the relief flight lands. Seven people wintered with him. Every one of them was somewhere they said they were not.",
  difficulty: 4, difficultyLabel: "Expert", players: "2-4", length: "about 2 hours", setting: "An Antarctic research station, midwinter"
};

const speakers = {
  penn: { name: "Inspector Penn", voice: "bm_fable", speed: 0.95 },
  narrator: { name: "Narrator", voice: "bf_emma", speed: 0.95 },
  voss: { name: "Dr. Anselm Voss", voice: "bm_lewis", speed: 0.92 },
  brandt: { name: "Dr. Ilse Brandt", voice: "bf_alice", speed: 0.98 },
  ortega: { name: "Rafael Ortega", voice: "am_michael", speed: 0.98 },
  weir: { name: "Jonas Weir", voice: "bm_george", speed: 0.92 },
  okafor: { name: "Lena Okafor", voice: "af_sky", speed: 1.0 },
  marit: { name: "Dr. Marit Solheim", voice: "af_nicole", speed: 0.95 },
  reid: { name: "Clara Reid", voice: "af_nova", speed: 1.05 },
  koval: { name: "Pavel Koval", voice: "am_liam", speed: 0.95 }
};

const conclusions = {
  c_outside_latch: { title: "He was locked in from the outside", text: "A steel pin was frozen through the outer latch bar, and the card reader logged 'manual latch' at 23:14. Someone shut that door on him." },
  c_core_mismatch: { title: "Voss believed 14-B showed 61 layers, not 74", text: "His notebook says the core does not match the published curve. The lab count gives sixty-one layers against the paper's seventy-four." },
  c_release_disabled: { title: "The inside release was deliberately disabled", text: "The cable pin was removed. The manual says that takes thirty seconds and renders the release useless, and warns never to do it while the room is occupied." },
  c_alarm_silenced: { title: "The alarm was switched off in advance", text: "The cold store alarm was set to maintenance mode at 21:58, long before Voss went in, so nothing could sound." },
  c_heater_sabotage: { title: "The door heater was switched off at 23:15", text: "The chart shows the door-frame heater coil dropping out, and the breaker was locked off. The door seal froze, and by midnight the door could not be forced from inside." },
  c_planned_murder: { title: "This was planned, not an accident", text: "Alarm silenced, release disabled, door latched from outside, heater cut. Four separate acts, in order. This is a murder." },
  c_no_witness: { title: "The camera was unplugged to leave no witness", text: "The vestibule camera was disconnected at the junction box, and its plug is clean of frost: it was done recently." },
  c_weir_code: { title: "The alarm was disabled with Weir's code", text: "The building log says code 4471. The sheet in the plant room says 4471 is Weir." },
  c_weir_heater: { title: "Weir's tag locked the heater breaker", text: "The tag is signed J.W. and stamped 23:15, the exact minute the heater coil dropped out." },
  c_latch_pin_crib: { title: "The latch pin came from the tool crib", text: "A 12 mm pin of that type, signed out by Weir, and the tray is one short." },
  c_cable_pin_weir: { title: "The missing cable pin was in Weir's toolbag", text: "A brass-collared pin, matching the cold store release, was wrapped in a rag in his side pocket." },
  c_weir_sabotage: { title: "Jonas Weir sabotaged the cold store", text: "His code silenced the alarm, his tag killed the heater, his tray lost the latch pin, and his bag held the release pin." },
  c_weir_sensor_fraud: { title: "The 'sensor job' was never done", text: "Weir's work order says sensors were replaced, but every sensor in the cold store is the old model, and the grant paid three thousand for them." },
  c_weir_bribed: { title: "Weir was paid 3,000 through the grant", text: "A bank transfer on 13 July referenced the Polar Science Grant. The ledger shows the same sum as 'sensor spares'." },
  c_marit_hand: { title: "The same slanting hand altered the log and approved the ledger", text: "Crossed 4s and 7s appear in the grant approvals and in the overwritten 14-B logbook. One person wrote both." },
  c_marit_inflated: { title: "Marit edited 14-B upward, seven times", text: "The edit history shows seven edits to column 14-B under the login msolheim, all at night, each raising the layer count. Voss's own counts are sixty-one." },
  c_marit_paid_weir: { title: "Marit approved the payment to Weir", text: "The ledger entry for Weir's sum is approved by M. Solheim in the hand that altered the core log." },
  c_voss_withdraw: { title: "Voss was about to withdraw the Core 14 paper", text: "His unsent email, his notebook, and his toast all say it: he meant to correct the record at eight the next morning." },
  c_deadline: { title: "Marit had one night", text: "Voss was due to speak to the foundation by satphone at 08:00. The calendar circles it: 'SAY IT'." },
  c_marit_motive: { title: "Marit had a motive: exposure", text: "If Voss spoke, the falsified 14-B chronology, the grant, and her career would all be gone by breakfast." },
  c_marit_coolant: { title: "Core-drill coolant was on Marit's parka", text: "The parka on peg 5 is hers. The red smear is drill coolant, found only in the lab and the cold store, and the cuffs were frosted in a warm room." },
  c_reid_cleared: { title: "Reid cannot have been at the cold store at 23:11", text: "The gym log puts her in the gym from 23:09. The cold store slip at 23:11 is her card, but she was not holding it." },
  c_card_borrowed: { title: "Reid's card was borrowed", text: "Her lanyard on peg 4 is wet and ice-cold, as if it had been outside, though she was in the gym on her wristband tag." },
  c_marit_at_cold_store: { title: "Marit was at the cold store at 23:11", text: "Her parka carries cold store coolant, she sat beside the lanyard she needed, and Okafor saw a purple parka heading that way." },
  c_marit_alibi_hollow: { title: "Marit's lab alibi is hollow", text: "She logged in at 22:40 and her last keystroke was 22:41. The batch job ran by itself, and her sticky note says 'back soon'." },
  c_marit_architect: { title: "Marit planned it and had Weir do the work", text: "She paid Weir through the grant ledger and had a motive and an empty alibi on the night his sabotage worked." },
  c_koval_cleared: { title: "Koval is cleared", text: "His radio log, with the manual key held from 23:09 to 23:13, keeps him in the radio room at the critical moment." },
  c_koval_protecting: { title: "Koval was protecting someone", text: "His crumpled note says 'say it was me'. It is loyalty, not guilt." },
  c_okafor_cleared: { title: "Okafor is cleared", text: "She lied about the dishwasher to hide the still. She was in the greenhouse, nowhere near the cold store door." },
  c_ortega_cleared: { title: "Ortega is cleared", text: "The clinic note and the duty rota place him with Dr. Brandt from 23:00 to 23:30." },
  c_brandt_cleared: { title: "Brandt is cleared", text: "She was on clinic cover, with Ortega, for the whole critical window. Her accident verdict was a mistake, not a cover-up." },
  c_reid_careless: { title: "Reid was careless, not guilty", text: "She admits she never checked 14-B. That is a lapse in science, not a crime." }
};

function L(a, b, gives) { return { pair: [a, b], gives }; }
const links = [
  L("latch_pin", "door_log", "c_outside_latch"),
  L("core_14b", "voss_notebook", "c_core_mismatch"),
  L("door_release", "maintenance_manual", "c_release_disabled"),
  L("alarm_panel", "bms_log", "c_alarm_silenced"),
  L("thermo_chart", "bms_log", "c_heater_sabotage"),
  L("breaker", "bms_log", "c_heater_sabotage"),
  L("c_release_disabled", "c_alarm_silenced", "c_planned_murder"),
  L("c_outside_latch", "c_heater_sabotage", "c_planned_murder"),
  L("cctv_cable", "door_log", "c_no_witness"),
  L("bms_log", "code_sheet", "c_weir_code"),
  L("breaker", "c_heater_sabotage", "c_weir_heater"),
  L("tool_crib", "latch_pin", "c_latch_pin_crib"),
  L("door_release", "jonas_toolbag", "c_cable_pin_weir"),
  L("c_weir_code", "c_cable_pin_weir", "c_weir_sabotage"),
  L("c_weir_heater", "c_latch_pin_crib", "c_weir_sabotage"),
  L("s_weir_confession", "c_planned_murder", "c_weir_sabotage"),
  L("work_order", "grant_ledger", "c_weir_sensor_fraud"),
  L("bank_slip", "grant_ledger", "c_weir_bribed"),
  L("bank_slip", "work_order", "c_weir_bribed"),
  L("core_logbook", "grant_ledger", "c_marit_hand"),
  L("dataset_metadata", "raw_counts", "c_marit_inflated"),
  L("core_logbook", "raw_counts", "c_marit_inflated"),
  L("c_weir_bribed", "c_marit_hand", "c_marit_paid_weir"),
  L("voss_notebook", "voss_email", "c_voss_withdraw"),
  L("voss_email", "voss_calendar", "c_voss_withdraw"),
  L("toast_recording", "voss_email", "c_voss_withdraw"),
  L("voss_calendar", "flight_schedule", "c_deadline"),
  L("c_marit_inflated", "c_voss_withdraw", "c_marit_motive"),
  L("c_marit_hand", "c_deadline", "c_marit_motive"),
  L("purple_parka", "seating_plan", "c_marit_coolant"),
  L("gym_printout", "door_log", "c_reid_cleared"),
  L("card_lanyard", "c_reid_cleared", "c_card_borrowed"),
  L("c_marit_coolant", "c_card_borrowed", "c_marit_at_cold_store"),
  L("s_okafor_saw_marit", "purple_parka", "c_marit_at_cold_store"),
  L("s_marit_confession", "c_planned_murder", "c_marit_at_cold_store"),
  L("session_log", "marit_note", "c_marit_alibi_hollow"),
  L("session_log", "s_marit_lab", "c_marit_alibi_hollow"),
  L("c_marit_paid_weir", "c_marit_alibi_hollow", "c_marit_architect"),
  L("c_marit_motive", "c_weir_sabotage", "c_marit_architect"),
  L("radio_log", "shift_rota", "c_koval_cleared"),
  L("pavel_draft", "s_koval_protect", "c_koval_protecting"),
  L("kitchen_log", "hidden_still", "c_okafor_cleared"),
  L("clinic_note", "shift_rota", "c_ortega_cleared"),
  L("clinic_note", "s_ortega_clinic", "c_brandt_cleared"),
  L("s_brandt_clinic", "s_ortega_clinic", "c_brandt_cleared"),
  L("reid_note", "s_reid_unchecked", "c_reid_careless"),
  { pair: ["uv_store_smear", "seating_plan"], gives: "c_marit_coolant" }
];

const chapters = [
  {
    id: "c1", title: "The Locked Door", scenes: ["cold_store"], suspects: ["brandt", "ortega"],
    question: "Was Voss trapped by accident, or by someone?", goals: ["c_outside_latch", "c_core_mismatch"],
    intro: { speaker: "penn", text: "Detective, the station doctor says accident. A stuck door, a failed alarm, a tragic night. But a man does not freeze in a cold store by chance. Start in the cold store itself. Look at the door, from both sides." },
    hints: [
      "The door has an outside as well as an inside. Compare what each side shows.",
      "The reader slip says 'manual latch' at 23:14. The latch itself has something in it.",
      "Link the pin through the outer latch with the card reader slip. Link Voss's notebook with the ice core on the rack, once the Analyst has focused it."
    ]
  },
  {
    id: "c2", title: "Silent Alarm, Cold Door", scenes: ["cold_store", "plant"], suspects: ["brandt", "ortega", "weir"],
    question: "How was the cold store turned into a trap?", goals: ["c_alarm_silenced", "c_heater_sabotage", "c_release_disabled"],
    intro: { speaker: "penn", text: "Locked from outside is only one part of it. The alarm didn't sound and the lever didn't work. Someone did a great deal of preparation. The plant room runs everything on this station, heat and power and alarms. Go and see what it remembers." },
    hints: [
      "Three systems failed: the alarm, the door heater, and the inside release. Each leaves a trace.",
      "The building management printout has two entries that matter. The chart in the cold store and the manual in the plant room match them.",
      "Link the alarm panel with the BMS printout. Link the temperature chart with the BMS printout. Link the inside release with the manual page."
    ]
  },
  {
    id: "c3", title: "Midwinter Dinner", scenes: ["cold_store", "plant", "mess"], suspects: ["brandt", "ortega", "weir", "okafor", "marit"],
    question: "Who was at the table, and who left it?", goals: ["c_marit_coolant", "c_okafor_cleared", "c_ortega_cleared"],
    intro: { speaker: "penn", text: "Eight people sat down to dinner. Voss gave a toast that made one of them very uncomfortable. Search the mess hall. Find out who sat where, who left early, and what some of them were hiding from each other." },
    hints: [
      "Everybody has a small lie tonight. Check the logs and rota against what people said.",
      "A frost-stiff cuff in a warm room is odd. Something red is on that sleeve. Ask the lab's expert to compare it under UV.",
      "Link the purple parka with the seating plan. Link the galley log with the still. Link the clinic note with the duty rota."
    ]
  },
  {
    id: "c4", title: "Four Minutes to Midnight", scenes: ["cold_store", "plant", "mess", "radio"], suspects: ["brandt", "ortega", "weir", "okafor", "marit", "reid", "koval"],
    question: "Whose card opened the door, and who was where?", goals: ["c_reid_cleared", "c_card_borrowed", "c_voss_withdraw", "c_koval_cleared"],
    intro: { speaker: "penn", text: "The card reader says REID at 23:11. The gym says Reid was elsewhere. Someone is using someone else's name. And in the radio room, Voss left a message no one was meant to read. Let's see who was where, and what he was about to say." },
    hints: [
      "Two logs disagree about Reid. One of them must have been used by a different hand.",
      "The lanyard on peg 4 is wet and ice-cold. Compare it to the reader slip and the gym printout.",
      "Link the gym printout with the card reader slip. Link Voss's email with his calendar. Link the radio log with the duty rota."
    ]
  },
  {
    id: "c5", title: "The Core Fourteen Affair", scenes: ["cold_store", "plant", "mess", "radio", "lab"], suspects: ["brandt", "ortega", "weir", "okafor", "marit", "reid", "koval"],
    question: "What was Voss about to expose, and who was paying whom?", goals: ["c_marit_inflated", "c_marit_hand", "c_marit_motive", "c_weir_bribed", "c_marit_alibi_hollow"],
    intro: { speaker: "penn", text: "One more room, the laboratory. Voss said he was going to set the record straight on Core 14. Somebody did not want that. Follow the data, then follow the money." },
    hints: [
      "Three things in the lab are worth a careful look: the edit history, the counts, and the session log.",
      "Look at the handwriting. The same hand turns up in the lab logbook and in the grant ledger.",
      "Link the dataset history with Voss's hand-counted sheets. Link the lab logbook with the grant ledger. Link the bank slip with the work order."
    ]
  },
  {
    id: "c6", title: "Name the Culprit", scenes: ["cold_store", "plant", "mess", "radio", "lab"], suspects: ["brandt", "ortega", "weir", "okafor", "marit", "reid", "koval"],
    question: "Who killed Anselm Voss, who helped, why, and how?", goals: [],
    intro: { speaker: "penn", text: "That is every room on Station Nine. Seven people lied to you, some from shame, one from loyalty, two from guilt. The foundation expects a name and a reason, and the flight lands in the morning. Choose with care. If you name the wrong person, the real one walks off that plane." },
    hints: [
      "Everyone cleared themselves except two people. One did the physical work. One gave the reason.",
      "The person who did the work was paid. The person who paid had the motive and the empty alibi.",
      "Name Marit Solheim, with Jonas Weir as accomplice. For proof, use the conclusion that puts her at the cold store, or the one that shows she planned it."
    ]
  }
];

const accusation = {
  culprits: ["marit", "weir", "reid", "koval", "okafor", "ortega", "brandt"],
  motives: [
    { id: "m_fraud", text: "To bury a falsified ice-core chronology before Voss could correct it." },
    { id: "m_money", text: "Money: the grant funds were hers to take." },
    { id: "m_leadership", text: "To take over the station." },
    { id: "m_love", text: "Jealousy over a colleague." },
    { id: "m_moonshine", text: "To protect the hidden still." }
  ],
  methods: [
    { id: "x_sealed", text: "Silenced the alarm, disabled the release, latched the door from outside and cut the door heater, leaving him to freeze." },
    { id: "x_accident", text: "No one: the door and alarm failed by accident." },
    { id: "x_poison", text: "Poisoned his dinner." },
    { id: "x_pushed", text: "Pushed him into the freezer and left." },
    { id: "x_suicide", text: "Voss locked himself in on purpose." }
  ],
  accomplices: ["weir", "koval", "reid", "okafor"],
  answer: { culprit: "marit", motive: "m_fraud", method: "x_sealed", accomplice: "weir", proofs: ["c_marit_at_cold_store", "c_marit_architect"], criticalTestimonies: ["s_marit_confession", "s_okafor_saw_marit"] }
};

const epilogue = {
  truth: "Years ago Marit Solheim padded the layer count in Core 14-B to keep her grant alive. Anselm Voss, recounting by hand, found the truth and decided to say so on the satphone at eight in the morning. At the midwinter dinner he said as much in his toast. Marit had paid Jonas Weir three thousand through the grant ledger to prepare the cold store: the alarm switched to maintenance, the release pin pulled, the camera unplugged. After dinner she took Clara Reid's card from peg 4, led Voss into the cold store under a pretext, and let the door latch behind them. Weir killed the door heater at a quarter past eleven so the seal would freeze. Pavel Koval, who loved her, tried to take the blame. The doctor wrote 'accident', and the cold did the rest.",
  results: {
    5: "A flawless case. Marit Solheim and Jonas Weir are arrested before the relief flight takes off, and the Core 14 record is corrected in Voss's own words.",
    4: "Marit Solheim is arrested. A loose end or two costs you a polished prosecution, but the right people are in custody.",
    3: "You named the right killer, but the case was thin. Her lawyers will fight for every doubt.",
    2: "Part of your case held up, but the accusation fell apart. The killer is still on the station.",
    1: "The accusation failed. The doctor's verdict stands, and a man died in the cold for nothing."
  }
};

const rules = { hintPenaltyAt: [3, 6], wrongLinkLimit: 9, labSkipAfter: 3 };


// Two independent paths to the key proof (validator section 7), authored for
// this port (the author's data declares criticalTestimonies instead; the
// culprit sets below are exactly those testimonies). Marit at the cold store
// is provable from the coolant + borrowed card alone, from Okafor's sighting,
// and from her own confession. The accomplice is proven by his sabotage work,
// which has three independent routes in the author's graph: the code +
// cable-pin chain, the heater + latch-pin chain, and his own confession —
// losing the confession or the toolbag pin leaves the physical routes.
// (The payment conclusion c_marit_paid_weir itself is single-route in the
// author's data — bank_slip, grant_ledger and core_logbook are each pivotal
// to it — so it cannot serve as the two-path accomplice proof; the author's
// own validator never required one.)
const fairness = {
  proof: "c_marit_at_cold_store",
  paths: [["s_okafor_saw_marit"], ["s_marit_confession"]],
  accomplice: { proof: "c_weir_sabotage", paths: [["s_weir_confession"], ["jonas_toolbag"]] }
};

// Live twist (Round 3 port, same pattern as Cases 2–6): a scripted interlude
// surfaced by the engine when the party enters the chapter below. It grants
// one colour-only testimony — nothing references it in any requires, link or
// goal, so no proof path can depend on it.
const twists = [
  { chapter: 3, speaker: "penn", text: "The station's doctor has asked to add something small to the record — the sort of thing a man notices at the pole and cannot shake afterwards. It is on the board.", testimony: "s_ortega_night", feed: "Ortega remembered the night the wind dropped." }
];

module.exports = { meta, speakers, conclusions, links, chapters, accusation, epilogue, rules, fairness, twists };
