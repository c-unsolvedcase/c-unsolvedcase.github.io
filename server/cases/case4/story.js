// Story layer for Case 4: conclusions, board links, chapters, hints, accusation, epilogue.

const meta = {
  id: "case4",
  title: "The Long Dark",
  tagline: "The storm was blamed for Maren Haug. The storm was innocent.",
  summary:
    "Dr. Maren Haug, expedition leader of Kestrel Station, walked the flagged line to the weather mast on a still night in the polar dark, radioed that the reported fault did not exist, and never came home. The inquiry blamed a sudden storm. The institute's safety office now holds the satellite's own weather record and the station's raw logs — and they tell a different story. Reopen the file.",
  difficulty: "Hard",
  players: "1–4"
};

// Voices (Kokoro voice ids) used by the voice generator.
const speakers = {
  hanna: { name: "Hanna Weiss", voice: "bf_isabella", speed: 0.95 },
  narrator: { name: "Narrator", voice: "bf_emma", speed: 0.95 },
  tomas: { name: "Tomas Riedel", voice: "bm_lewis", speed: 0.92 },
  ruth: { name: "Ruth Calloway", voice: "af_sky", speed: 0.97 },
  elias: { name: "Elias Brandt", voice: "am_michael", speed: 0.95 },
  sara: { name: "Sara Iversen", voice: "af_nicole", speed: 0.97 },
  jo: { name: "Jo Mercer", voice: "bm_daniel", speed: 1.0 },
  nadia: { name: "Nadia Rahman", voice: "af_river", speed: 0.95 },
  maren: { name: "Maren Haug", voice: "af_sarah", speed: 0.93 }
};

const conclusions = {
  c_record_true: {
    title: "The storm story is false",
    text: "The satellite record and the station's own backup agree: the Thursday afternoon was clear and calm, and the storm did not peak until 23:40 — long after Maren Haug was already lost. The weather the inquiry blamed did not exist at the hours that matter."
  },
  c_no_fault: {
    title: "There was no fault at the mast",
    text: "The mast's sensor trace runs clean all day, and Maren's own voice — by radio and by dictaphone — says it from the mast itself: anemometer clean, no fault anywhere. The emergency that sent her out was invented."
  },
  c_sent_out: {
    title: "The fault was typed in the laboratory",
    text: "Fault F-31 was a manual entry, typed at 16:05 from the LAB-2 terminal — in a session opened with Tomas Riedel's own key card, minutes after he came in from the line."
  },
  c_line_moved: {
    title: "The flag line was re-routed that afternoon",
    text: "The last three flags stand sixty metres off the surveyed line, their holes bright and fresh beside the true sockets under the drift. Somebody moved Maren Haug's road home, in clear afternoon weather, hours before she walked it."
  },
  c_fraud: {
    title: "The flagship data was fabricated",
    text: "The register's depths do not match the ice: the ash band sits at 38 metres in Maren's check core and at 44 in the paper. The archive labels are new card on old cores, and the published variance is identical, season after season, like a photocopy of winter. Three seasons of the famous melt series were written, not measured."
  },
  c_maren_knew: {
    title: "Maren had proof, and a deadline",
    text: "A check core, a photographed register, a notebook that names the hand, and a file marked C-14 ready to go first on the 07:00 pass — 'whatever he decides'. Maren Haug had Tomas Riedel, and he knew the hour it would end."
  },
  c_row: {
    title: "Maren confronted Riedel that afternoon",
    text: "At twenty to three on the Thursday, through the dispensary wall, Elias heard it: resign, or the file goes on the morning pass with your name on it. Riedel's answer was the silence Elias has trusted less ever since — and everything he did next was done inside sixteen hours."
  },
  c_motive: {
    title: "Riedel faced ruin at seven o'clock",
    text: "Exposure meant retraction, disgrace and the end of the only life Tomas Riedel has. Maren gave him until the 07:00 pass to choose the manner of it. He chose flags and a keyboard instead."
  },
  c_riedel_out: {
    title: "Riedel went out that afternoon",
    text: "His signature on the sortie board, his own GPS track, and the far-end blue grit still packed in his boot treads: Tomas Riedel was on the mast line on the Thursday afternoon, whatever he has said since."
  },
  c_lie_alibi: {
    title: "Riedel's alibi is true at night and false by day",
    text: "He was in the laboratory that evening — Sara's tea proves it, and nobody needs to doubt it. But 'I never left the station that day' is a lie the sortie board answers in his own hand. The checkable half of his alibi is immaculate. The half that matters is false."
  },
  c_ruth_alibi: {
    title: "Ruth's alibi is true in comms and false at midnight",
    text: "Ruth Calloway worked the evening pass exactly as she says — and never walked the midnight round she initialled. At midnight she was on the observation deck with a cigarette, inside the building, behind a door the logger watched. Her lie hid a habit, not a killing — and it removes the inquiry's 'all quiet at midnight' from the record."
  },
  c_afternoon: {
    title: "It was all done before she went out",
    text: "The airlock never cycled between Maren's leaving and the search going out. The moved flags and the typed fault were both in place before 21:40. Nobody arranged anything in the night; the night was only when it worked."
  },
  c_method: {
    title: "How it was done",
    text: "He sent her out with a fault that never existed, typed from his own terminal, and he moved the road home before she left. She reached the mast, found nothing, and walked his flags faithfully into the dark while the real storm was still an hour away."
  },
  c_tomas_proof: {
    title: "Riedel sent her out and moved her road home",
    text: "The witness who saw him leave the mallet behind, or the confession he gives when the paper closes round him — either way, the afternoon is his: the typed fault, the twenty-five minutes at the far end of the line, and the flags that bent a good woman's road toward the dump."
  }
};

// Board links. Each pair is order-independent. A pair not listed here is simply unproven.
function L(a, b, gives) { return { pair: [a, b], gives }; }
const links = [
  L("weather_record", "comms_log", "c_record_true"),
  L("weather_record", "weather_backup", "c_record_true"),
  L("mast_card", "comms_log", "c_no_fault"),
  L("uv_lab_keys", "mast_card", "c_no_fault"),
  L("mast_card", "maren_dictaphone", "c_no_fault"),
  L("mast_card", "lab_terminal", "c_sent_out"),
  L("c_no_fault", "lab_terminal", "c_sent_out"),
  L("flag_survey", "old_sockets", "c_line_moved"),
  L("flag_survey", "gps_track", "c_line_moved"),
  L("core_register", "check_core", "c_fraud"),
  L("check_core", "stake_data", "c_fraud"),
  L("core_register", "archive_cores", "c_fraud"),
  L("maren_notebook", "check_core", "c_maren_knew"),
  L("maren_notebook", "sat_schedule", "c_maren_knew"),
  L("s_nadia_file", "maren_notebook", "c_maren_knew"),
  L("s_elias_row", "core_register", "c_row"),
  L("s_elias_row", "maren_notebook", "c_row"),
  L("c_fraud", "c_maren_knew", "c_motive"),
  L("c_fraud", "s_elias_row", "c_motive"),
  L("sortie_board", "boots", "c_riedel_out"),
  L("sortie_board", "gps_track", "c_riedel_out"),
  L("boots", "s_elias_met", "c_riedel_out"),
  L("sortie_board", "s_riedel_statement", "c_lie_alibi"),
  L("gps_track", "s_riedel_statement", "c_lie_alibi"),
  L("night_log", "door_log", "c_ruth_alibi"),
  L("cigarette_ends", "s_sara_smoke", "c_ruth_alibi"),
  L("night_log", "cigarette_ends", "c_ruth_alibi"),
  L("airlock_log", "c_sent_out", "c_afternoon"),
  L("airlock_log", "c_line_moved", "c_afternoon"),
  L("c_sent_out", "c_line_moved", "c_method"),
  L("c_afternoon", "c_sent_out", "c_method"),
  L("c_line_moved", "c_no_fault", "c_method"),
  L("s_jo_saw", "c_line_moved", "c_tomas_proof"),
  L("s_jo_saw", "flag_survey", "c_tomas_proof"),
  L("s_riedel_confession", "c_line_moved", "c_tomas_proof"),
  L("s_riedel_confession", "flag_survey", "c_tomas_proof"),
  L("c_lie_alibi", "c_sent_out", "c_tomas_proof")
];

const chapters = [
  {
    id: "c1",
    title: "The Mast",
    scenes: ["mast"],
    suspects: ["tomas", "nadia"],
    question: "Was the road home where she left it?",
    goals: ["c_line_moved"],
    intro: {
      speaker: "hanna",
      text: "Detectives, I am Hanna Weiss; the institute's safety office sends me, and its apologies. Dr. Maren Haug led Kestrel Station for eleven winters and died in the polar night four hundred metres from her own door. We called it a storm. We have since read the satellite's weather record, and we no longer believe ourselves. Start at the mast, where she arrived safely. Everything is as the search team left it."
    },
    hints: [
      "Walk the line the way she walked it. The survey team plotted every flag — compare their plot with where the flags actually stand.",
      "The old line is still there under the drift. Fresh holes and old holes do not look alike.",
      "Link the GPS survey of the flags with the old sockets beneath the snow."
    ]
  },
  {
    id: "c2",
    title: "The Laboratory",
    scenes: ["mast", "lab"],
    suspects: ["tomas", "nadia", "elias", "jo"],
    question: "What did the ice actually say — and who typed the fault?",
    goals: ["c_fraud", "c_sent_out"],
    intro: {
      speaker: "hanna",
      text: "The laboratory, detectives — the flagship paper's home, and Maren's last workplace. She drilled a check core the week before she died, and somebody on this station was very interested in what it said. And while you are among the paper, ask the mast logger's card a question the inquiry never did: a fault can be born in two places. Which one was this?"
    },
    hints: [
      "The register is beautiful and the ice is honest. Date the ash band in Maren's check core and set it against the book.",
      "The fault entry carries a terminal stamp. Then ask the terminal who was sitting at it, and when.",
      "Link the mast logger's card with the LAB-2 session record; link the register with the check core."
    ]
  },
  {
    id: "c3",
    title: "Voices in the Static",
    scenes: ["mast", "lab", "comms", "dorm"],
    suspects: ["tomas", "nadia", "elias", "jo", "ruth", "sara"],
    question: "Who was where that night — and which halves of their stories are true?",
    goals: ["c_maren_knew", "c_ruth_alibi"],
    intro: {
      speaker: "hanna",
      text: "Now the voices, detectives. Nadia's log holds a call the inquiry never quoted; Maren's notebook holds a deadline; and the deputy leader's evening is true exactly as far as it can be checked — which is a thing worth examining in any station, on any night. Listen to everyone. Believe the paper."
    },
    hints: [
      "Maren wrote her deadline down twice: in her notebook, and on the pass schedule itself. Put them together.",
      "The night log's midnight entry sits among the wrong hours, in the wrong pen. The door logger keeps the corridor's true diary.",
      "Link the night log with the door-logger printout; link Maren's notebook with the pass schedule."
    ]
  },
  {
    id: "c4",
    title: "The Airlock",
    scenes: ["mast", "lab", "comms", "dorm", "gear"],
    suspects: ["tomas", "nadia", "elias", "jo", "ruth", "sara"],
    question: "Who went out on the Thursday — and when was this night arranged?",
    goals: ["c_afternoon", "c_lie_alibi"],
    intro: {
      speaker: "hanna",
      text: "The gear room, detectives — the station's memory of every journey. A sortie board, a door that counts its own openings, and a senior scientist who has told everyone he never left the building that day. The board is in his own hand. Let us ask it what it remembers."
    },
    hints: [
      "The sortie board is the station's oldest law, and it does not care about reputations. Read the Thursday line by line.",
      "The airlock counts itself. If it never cycled in the night, then nothing about that night was arranged in the night.",
      "Link the sortie board with Riedel's statement; link the airlock log with what you know of the fault."
    ]
  },
  {
    id: "c5",
    title: "The Seven O'Clock Pass",
    scenes: ["mast", "lab", "comms", "dorm", "gear"],
    suspects: ["tomas", "nadia", "elias", "jo", "ruth", "sara"],
    question: "Why did it have to happen before Friday morning?",
    goals: ["c_motive", "c_method"],
    intro: {
      speaker: "hanna",
      text: "Put it together, detectives. A deadline at seven o'clock, a fault typed at five past four, and a road moved in the clear afternoon — the method is a chain, and every link of it is already on your board. What remains is to say why, and how, in one breath."
    },
    hints: [
      "The fraud and the deadline are two halves of one motive. Join them.",
      "The method is not a single card: the typed fault and the moved line are conclusions — join the conclusions.",
      "Join the fabricated data to what Maren knew; join 'sent out' to 'the line was moved'."
    ]
  },
  {
    id: "c6",
    title: "Name the Culprit",
    scenes: ["mast", "lab", "comms", "dorm", "gear"],
    suspects: ["tomas", "nadia", "elias", "jo", "ruth", "sara"],
    question: "Who sent her out, why, how — and what proves it?",
    goals: [],
    intro: {
      speaker: "hanna",
      text: "That is everything Kestrel Station can tell you. Decide together: culprit, motive, method and proof. One person on this station was told the truth at twenty to three and answered it with flags and a keyboard. Maren Haug deserved the institute's honesty. Give her yours."
    },
    hints: [
      "One man was out on the line that afternoon, typed the fault, and faced the seven o'clock deadline. Two alibis on this station are half true; only one of them is his.",
      "Ask Jo gently — a junior's silence is not consent, it is fear with good eyesight. Show Riedel the paper one piece at a time; paper does not panic, but he does.",
      "Name Tomas Riedel. For proof, use the conclusion that joins the witness or the confession to the moved line."
    ]
  }
];

const accusation = {
  culprits: ["tomas", "ruth", "elias", "sara", "jo", "nadia"],
  motives: [
    { id: "m_fraud", text: "To stop Maren sending the fabricated ice-core data to the institute." },
    { id: "m_command", text: "To take command of the station himself." },
    { id: "m_report", text: "To bury a bad safety report before the institute read it." },
    { id: "m_grudge", text: "An old professional grudge over the flagship paper's authorship." }
  ],
  methods: [
    { id: "x_rigged", text: "He faked the mast fault to send her out, and moved the flag line so the way home led past the station." },
    { id: "x_storm", text: "The storm caught her on a routine trip — a genuine misadventure." },
    { id: "x_lamp", text: "He drained her lamp and radio batteries so the dark and the cold would finish her." },
    { id: "x_followed", text: "He followed her out to the mast that night and left her off the line." }
  ],
  answer: {
    culprit: "tomas",
    motive: "m_fraud",
    method: "x_rigged",
    proofs: ["c_tomas_proof", "c_method"]
  }
};

const epilogue = {
  truth:
    "Tomas Riedel wrote three winters of weather that never happened, and when Maren Haug's check core told the truth at 38 metres, she gave him until Friday's seven o'clock pass to resign before the institute saw it. Tomas spent the Thursday afternoon instead. At five past three he signed out for the stakes and re-planted the last three flags of the mast line, bending Maren's road home toward the old fuel dump; at five past four he sat at his own laboratory terminal and typed a fault into the mast logger that the mast had never reported. Maren went out into a still, clear night because the logger told her to, found no fault, said so on the radio at twenty past ten, and then walked his flags faithfully while the real storm was still rising. Ruth Calloway's false round and Tomas Riedel's false 'never went out' were the two half-true stories of that Thursday — and only one of them was told by the man who moved the flags.",
  results: {
    5: "A perfect case. Tomas Riedel leaves on the first spring flight in custody, Maren Haug's check core is published as the correction of record, and the C-14 file she readied goes to the institute at the seven o'clock pass — first in the queue, as she asked.",
    4: "Tomas Riedel is arrested on the evidence of the afternoon. A loose end or two will occupy the institute's lawyers, but Maren's file has gone, and the right man answers for the flags.",
    3: "You named the right culprit, but the case was thin. Riedel's counsel will make the institute fight for every star you lost.",
    2: "Part of your case held up, but the accusation fell apart. The long dark keeps its secret a while longer.",
    1: "The accusation failed. The file closes again, and the storm keeps the blame it never deserved."
  }
};

// Two independent paths to the key proof (validator section 7): the proof must
// survive losing Jo's eyewitness testimony (confession path) and losing
// Riedel's confession (eyewitness path).
const fairness = { proof: "c_tomas_proof", paths: [["s_jo_saw"], ["s_riedel_confession"]] };


// Live twist: a scripted interlude surfaced by the engine when the party
// enters chapter 4. It grants one colour-only testimony — nothing
// references it in any requires, link or goal, so no proof path depends on it.
const twists = [
  { chapter: 3, speaker: "hanna", text: "A moment, everyone. The last satellite pass brought a personal relay for the comms room — Nadia has been back over the night of the storm, and she has remembered something about Maren's last call. It is on the board.", testimony: "s_nadia_static", feed: "Nadia remembered more about the last call." }
];

module.exports = { meta, speakers, conclusions, links, chapters, accusation, epilogue, fairness, twists };
