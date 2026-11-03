// Suspects, interview topics and testimony cards for Case 3 "Station Nine".
const testimonies = {
  s_ortega_night: { title: "Ortega: 'the night the wind dropped'", speaker: "ortega", text: "Ortega says that some time after midnight the wind fell away all at once, the way it does before a worse blow, and in the quiet he could hear the flag lines ticking against the mast and the whole station breathing. He did not sleep again. He cannot say why it matters. It does not, officially." },
  s_brandt_clinic: { title: "Brandt: 'Ortega was in my clinic'", speaker: "brandt", text: "Dr. Brandt says Rafael Ortega came to the clinic at eleven with frostnip and stayed until half past, and that she was with him the whole time." },
  s_brandt_report: { title: "Brandt: 'I signed it as an accident'", speaker: "brandt", text: "Dr. Brandt says she wrote 'accident' on the first morning because the body looked like a man who had panicked at a stuck door. She never looked at the outside latch." },
  s_ortega_clinic: { title: "Ortega: 'I was in the clinic 23:00 to 23:30'", speaker: "ortega", text: "Rafael Ortega says he finished his outside watch at half past nine, got frostnip on his left foot, and was in the clinic with Dr. Brandt from eleven to half past." },
  s_weir_plant: { title: "Weir: 'I never touched the cold store'", speaker: "weir", text: "Jonas Weir says he spent the evening in the plant room and has no reason to go near the cold store. He says the alarm and the heater are somebody else's business." },
  s_weir_confession: { title: "Weir's confession", speaker: "weir", text: "Jonas Weir breaks: Marit paid him three thousand through the grant to make the cold store 'fail'. He switched the alarm to maintenance at 21:58, pulled the cable pin, and at 23:15 killed the door heater. He never thought Voss would stay in there." },
  s_okafor_greenhouse: { title: "Okafor admits the greenhouse", speaker: "okafor", text: "Lena Okafor admits she was not at the dishwasher between eleven and half past. She was in the greenhouse, and she lied because of the still in the pantry." },
  s_okafor_saw_marit: { title: "Okafor saw a purple parka", speaker: "okafor", text: "Lena Okafor says that at about eight minutes past eleven, from the greenhouse corridor, she saw someone in a purple parka walking fast toward the cold store. She did not see a face." },
  s_marit_lab: { title: "Marit: 'I was in the lab until 23:35'", speaker: "marit", text: "Marit Solheim says she logged in to the lab terminal at twenty to eleven, started a long batch job, and stayed at the bench until the job finished at 23:35." },
  s_marit_confession: { title: "Marit's confession", speaker: "marit", text: "Marit breaks: she raised the 14-B counts years ago to keep the grant alive. When Voss said he would withdraw the paper at eight, she took Reid's card from peg 4, locked Voss in the cold store, and let the cold do the rest." },
  s_reid_gym: { title: "Reid: 'I was in the gym from 23:09'", speaker: "reid", text: "Clara Reid says she went to the gym at nine minutes past eleven and stayed past midnight. She says she badges in with her wristband, and that her lanyard card stays on peg 4." },
  s_reid_unchecked: { title: "Reid never checked Marit's numbers", speaker: "reid", text: "Clara Reid admits Voss asked her to re-check the 14-B dating and she told him she had assumed Marit's numbers were fine. She says it was not her dataset." },
  s_koval_radio: { title: "Koval: 'I was on the radio'", speaker: "koval", text: "Pavel Koval says he had radio watch from eleven to half past, and held the manual key for the satellite link test from nine past to thirteen past." },
  s_koval_protect: { title: "Koval wrote a false confession", speaker: "koval", text: "Pavel Koval admits he wrote a note saying 'say it was me' because he was afraid Marit had done something terrible, and he wanted to take it for her." }
};

const suspects = [
  {
    id: "brandt", name: "Dr. Ilse Brandt", age: 52, role: "Station doctor. Signed the death report.", color: "#7aa0c4", unlockedAt: 1,
    look: { hair: "bob", hairColor: "#8a8a8e", skin: "#e0b790", acc: "glasses", accColor: "#cfd6e0" },
    bio: "Calm, methodical, and tired. She has wintered four times and has certified more frostbite than deaths.",
    intro: "Ilse Brandt. I signed the report, Detective, and I would like to know if I was wrong. Ask me what you need.",
    defaultPresent: "That isn't something I can speak to.",
    topics: [
      { id: "t_report", label: "Why did you record it as an accident?", answer: "A man with a stuck door and no alarm. He had scratched at the frame, and he was dressed for the cold. It looked like panic. I never looked at the outside latch.", gives: "s_brandt_report" },
      { id: "t_night", label: "Where were you on the night?", answer: "Clinic cover. Rafael Ortega came in at eleven with frostnip and I treated him until about half past.", gives: "s_brandt_clinic" },
      { id: "t_voss", label: "What was Voss like as a leader?", answer: "Honest to a fault. He took the winter's mistakes onto himself and nobody asked him to." },
      { id: "t_core", label: "Did Voss mention Core 14 to you?", requires: { clues: ["voss_notebook"] }, answer: "He said the numbers bothered him. He said he would rather be wrong in public than right in private." },
      { id: "t_who", label: "Who would want him silenced?", requires: { minTrust: 20 }, answer: "Silenced? Nobody liked what he was about to say, if the rumour is true. But I will not name a name on a rumour." }
    ],
    present: [
      { card: "station_report", trust: 5, reply: "My words. Written at seven in the morning with a dead friend on the table. I would like to unwrite them." },
      { card: "clinic_note", trust: 15, reply: "That is my hand. Rafael was with me every minute of it." },
      { card: "latch_pin", trust: 10, reply: "A pin. In the latch. God. I should have walked round the door." },
      { card: "door_release", trust: 10, reply: "Then the lever was never going to work. I'm sorry, Voss." }
    ]
  },
  {
    id: "ortega", name: "Rafael Ortega", age: 34, role: "Field technician. Found the body.", color: "#c9a56a", unlockedAt: 1,
    look: { hair: "short", hairColor: "#1d1d22", skin: "#c99b78", acc: "cap", accColor: "#2f4a6a" },
    bio: "Quiet, strong, and out in the cold more than anyone. He found Voss at 07:20 and has not slept since.",
    intro: "Ortega. I opened the door and found him. I keep seeing it. Whatever I can do.",
    defaultPresent: "Don't know anything about that.",
    topics: [
      { id: "t_found", label: "Tell me about finding him.", answer: "Seven twenty. The door was stiff. It took two of us to open it. He was sitting against the racks. I thought he was asleep." },
      { id: "t_alibi", label: "Where were you between eleven and half past?", answer: "The clinic. I finished my outside watch at half nine and my left foot was gone numb. Dr. Brandt was with me until half past.", gives: "s_ortega_clinic" },
      { id: "t_door", label: "How was the door?", requires: { clues: ["latch_pin"] }, answer: "Frozen shut, but not by itself. I remember the pin. I pulled it out myself, and I thought nothing of it. I'm sorry. I should have said." },
      { id: "t_weir", label: "Did you see Weir that evening?", requires: { clues: ["bms_log"] }, answer: "He was supposed to be in the plant room after dinner. I didn't see him there when I came in from outside, though." }
    ],
    present: [
      { card: "shift_rota", trust: 10, reply: "Outside watch till half nine. Then the foot." },
      { card: "clinic_note", trust: 15, reply: "That is me. Frostnip. Nothing more." },
      { card: "latch_pin", trust: 10, reply: "That is the pin. It was frozen into the bar. I broke it free with my glove." }
    ]
  },
  {
    id: "weir", name: "Jonas Weir", age: 45, role: "Station engineer. Plant and power.", color: "#9a9aa8", unlockedAt: 2,
    look: { hair: "cap", hairColor: "#4a3a2a", skin: "#d2a07a", acc: "cap", accColor: "#3a4a3a", stache: true },
    bio: "Gruff, handy, and underpaid. He keeps eight people warm through the dark and never gets thanked.",
    intro: "Weir. Plant, power, heat. If it's cold, it's my fault. Say what you want.",
    defaultPresent: "Never seen it. Not mine.",
    topics: [
      { id: "t_night", label: "Where were you the night Voss died?", answer: "The plant room, after dinner. The whole evening. I never went near the cold store.", gives: "s_weir_plant" },
      { id: "t_alarm", label: "Who can switch the cold store alarm to maintenance?", requires: { clues: ["alarm_panel"] }, answer: "Anyone with a maintenance code. Leader, me, and the spare. It's on a sheet in the plant room, anyone could read it." },
      { id: "t_sensors", label: "What did the sensor job involve?", requires: { clues: ["work_order"] }, answer: "Swapped the sensors on the 14th. It's on the work order. Don't ask me what's wrong with it, I did the job." },
      { id: "t_money", label: "Are you in some kind of trouble, Jonas?", requires: { minTrust: 25 }, answer: "Trouble? I fix heaters. Ask me about a heater." },
      { id: "t_confess", label: "Tell me what you did that night.", requires: { minPressure: 70 }, answer: "She paid me three thousand through the grant. I switched the alarm to maintenance at two minutes to ten, pulled the pin out of the release, and at a quarter past eleven I killed the door heater from the plant panel. I never thought he'd be in there. I thought the room would just fail.", gives: "s_weir_confession" }
    ],
    present: [
      { card: "work_order", pressure: 10, reply: "Sensors replaced. That's what I wrote." },
      { card: "tool_crib", pressure: 15, reply: "I signed out the pins. I sign out a lot of things." },
      { card: "jonas_toolbag", pressure: 25, reply: "That's my bag. That pin is a spare. It means nothing." },
      { card: "breaker", pressure: 20, reply: "That tag is mine, yes. Lockout tags go on breakers. It's routine." },
      { card: "bank_slip", pressure: 20, reply: "That is my business and my bank's. It was a grant payment, a perfectly legal one." },
      { card: "code_sheet", pressure: 10, reply: "Everybody knows where that sheet is." },
      { card: "c_weir_bribed", pressure: 25, reply: "A payment for a job. Don't make it sound like anything else." },
      { card: "c_weir_sabotage", pressure: 30, reply: "You can't prove I knew he would be in there." }
    ]
  },
  {
    id: "okafor", name: "Lena Okafor", age: 41, role: "Cook and greenhouse keeper.", color: "#c47a6a", unlockedAt: 3,
    look: { hair: "long", hairColor: "#2a1a16", skin: "#9a6a4a", acc: "none", accColor: "#a05068" },
    bio: "Warm, practical, and the only person who ever makes the station feel like a home. She has a hidden still and an alibi she was ashamed of.",
    intro: "Lena Okafor. I feed these people. Sit, Detective, and have something hot before you ask me anything.",
    defaultPresent: "Is it something to eat? No? Then I can't help.",
    topics: [
      { id: "t_dishwasher", label: "Where were you after the dinner?", answer: "The dishwasher, from twenty to eleven. It runs for an hour. I wrote it in the log." },
      { id: "t_dinner", label: "How was the midwinter dinner?", answer: "Lovely, until Voss stood up. He said he had something to put right about Core Fourteen. Marit went the colour of the tablecloth." },
      { id: "t_saw", label: "Did you see anyone near the cold store?", requires: { cards: ["s_okafor_greenhouse"] }, answer: "From the greenhouse corridor, about eight past eleven. Someone in a purple parka, walking fast toward the cold store. I never saw a face.", gives: "s_okafor_saw_marit" },
      { id: "t_still", label: "That still in your pantry...", requires: { clues: ["hidden_still"] }, answer: "Don't tell Dr. Brandt. It's one bucket of mash and a very long winter." }
    ],
    present: [
      { card: "kitchen_log", pressure: 20, gives: "s_okafor_greenhouse", reply: "All right, all right. I was in the greenhouse. I wrote the dishwasher because I didn't want anyone to ask what I was doing there." },
      { card: "hidden_still", pressure: 25, gives: "s_okafor_greenhouse", reply: "Oh, that. Yes. Please. Not a word to the doctor." },
      { card: "seating_plan", trust: 10, reply: "I laid that table myself. Marit and Clara side by side, because they never stopped talking." },
      { card: "purple_parka", trust: 15, reply: "Marit's parka. She wears it everywhere. You can't miss it from fifty yards." }
    ]
  },
  {
    id: "marit", name: "Dr. Marit Solheim", age: 49, role: "Chief glaciologist. Senior author, Core 14.", color: "#a890c8", unlockedAt: 3,
    look: { hair: "long", hairColor: "#c8c0b0", skin: "#f0cdb0", acc: "glasses", accColor: "#a08ac0" },
    bio: "Brilliant, composed, and beloved by the foundation. Her Core 14 chronology made the station's name.",
    intro: "Marit Solheim. Anselm was a friend, Detective. I want whoever did this found, as much as you do.",
    defaultPresent: "I don't see what that has to do with anything.",
    topics: [
      { id: "t_alibi", label: "Where were you after dinner?", answer: "In the lab. I logged in at twenty to eleven, started a long batch job, and sat at the bench until it finished at 23:35.", gives: "s_marit_lab" },
      { id: "t_core", label: "Tell me about Core 14.", answer: "The best-dated core we have. Seventy-four annual layers in 14-B. It's the backbone of the paper." },
      { id: "t_voss", label: "What did Voss say at the dinner?", requires: { clues: ["toast_recording"] }, answer: "That he had something to say. I assumed he was worried about some detail in the paper. Anselm worried about everything." },
      { id: "t_grant", label: "Tell me about the grant ledger.", requires: { clues: ["grant_ledger"] }, answer: "I approve the expenditure. It's the job. A sensor contract for Jonas, and a hundred other entries." },
      { id: "t_confess", label: "Tell me what you did that night.", requires: { minPressure: 90 }, answer: "Seventy-four layers. It was sixty-one, and I knew it since the second winter. If the foundation had found out, the grant, the paper, my name, all of it would have gone. Anselm said at the dinner that he would withdraw it at eight. I took Clara's card from peg 4, went to the cold store, and finished it. Jonas did the rest. I wasn't going to let one man's conscience undo my life.", gives: "s_marit_confession" }
    ],
    present: [
      { card: "purple_parka", pressure: 15, reply: "My parka. The lab keeps coolant everywhere. It gets on everything." },
      { card: "core_14b", pressure: 10, reply: "Fourteen B. A fine core. A fine result." },
      { card: "raw_counts", pressure: 15, reply: "Anselm's rough counts. Early work. He always counted too fast." },
      { card: "dataset_metadata", pressure: 20, reply: "Editing a spreadsheet isn't a crime. Datasets get cleaned." },
      { card: "core_logbook", pressure: 15, reply: "Corrections to the log. I make a lot of those." },
      { card: "grant_ledger", pressure: 15, reply: "My signature on a sensor job. That's all." },
      { card: "session_log", pressure: 20, reply: "The job ran on its own. That's what batch jobs do." },
      { card: "marit_note", pressure: 5, reply: "A note so nobody would disturb the bench." },
      { card: "voss_email", pressure: 15, reply: "He was overwrought. He'd have thought better of it by morning." },
      { card: "card_lanyard", pressure: 10, reply: "Clara leaves that card everywhere." },
      { card: "c_marit_hand", pressure: 20, reply: "Everyone writes like me. It's the way we were taught." },
      { card: "c_marit_motive", pressure: 25, reply: "If I had wanted to hide a mistake, I'd have corrected it. I wouldn't have killed him." },
      { card: "c_marit_at_cold_store", pressure: 30, reply: "Coolant on a sleeve and a borrowed card. You have a story, Detective. You have no witness." },
      { card: "s_okafor_saw_marit", pressure: 25, reply: "A purple parka. This station has two. I'm not the only one with a purple parka." }
    ]
  },
  {
    id: "reid", name: "Clara Reid", age: 36, role: "Postdoctoral glaciologist.", color: "#6aa88a", unlockedAt: 4,
    look: { hair: "bob", hairColor: "#7a3a22", skin: "#e2b894", acc: "none", accColor: "#3f7d4f" },
    bio: "Sharp, nervous, and one of the best counters of ice layers in the field. She also did not look at what she should have.",
    intro: "Clara Reid. People keep telling me my card was used at the cold store. I wasn't there. Ask whatever you need.",
    defaultPresent: "I don't know anything about that, sorry.",
    topics: [
      { id: "t_gym", label: "Where were you at eleven that night?", answer: "The gym. I badged in at nine minutes past with my wristband tag and I was there till twenty past midnight. My lanyard card stays on peg 4 in the mess.", gives: "s_reid_gym" },
      { id: "t_dataset", label: "Did Voss ask you about the dataset?", requires: { clues: ["reid_note"] }, answer: "He asked me to re-check the 14-B dating. I said I'd assumed Marit's numbers were fine. It wasn't my dataset.", gives: "s_reid_unchecked" },
      { id: "t_marit", label: "How well do you know Marit?", requires: { minTrust: 20 }, answer: "She was my supervisor. She sat next to me at every dinner. She was kind to me and I never once checked her work." },
      { id: "t_card", label: "Who could have taken your lanyard?", requires: { clues: ["card_lanyard"] }, answer: "Anyone in the mess. It hangs on peg 4, right beside Marit's parka. But who would?" }
    ],
    present: [
      { card: "gym_printout", trust: 20, reply: "That's the wristband tag. Midnight, and I was still on the bike." },
      { card: "door_log", pressure: 10, reply: "My card at 23:11? I was in the gym! It was on the peg." },
      { card: "card_lanyard", trust: 10, reply: "Cold and wet. It's never wet. It was on the peg all evening." },
      { card: "reid_note", pressure: 10, reply: "I wrote that. I'm ashamed of it now." },
      { card: "c_card_borrowed", trust: 15, reply: "Someone took my card? Oh, no." }
    ]
  },
  {
    id: "koval", name: "Pavel Koval", age: 38, role: "Radio operator.", color: "#c9b06a", unlockedAt: 4,
    look: { hair: "short", hairColor: "#3a2a1a", skin: "#d8b08c", acc: "glasses", accColor: "#7a8aa0" },
    bio: "Gentle, precise, and hopelessly loyal. He has sent every weather report from this station for six winters.",
    intro: "Pavel Koval. I keep the radio. If it's said on the air, I heard it.",
    defaultPresent: "That isn't mine.",
    topics: [
      { id: "t_radio", label: "What were you doing at eleven?", answer: "Radio watch, from eleven to half past. I held the manual key for a satellite link test from nine past to thirteen past, so I couldn't have left the room.", gives: "s_koval_radio" },
      { id: "t_marit", label: "How do you get on with Marit?", requires: { minTrust: 15 }, answer: "She is the finest scientist I have ever met. She's been good to me, Detective, in a way nobody else has." },
      { id: "t_draft", label: "What's this crumpled note you wrote?", requires: { clues: ["pavel_draft"] }, answer: "That was a bad moment. I was afraid. I thought somebody had done something terrible, and I wanted to stand in front of her.", gives: "s_koval_protect" }
    ],
    present: [
      { card: "radio_log", trust: 15, reply: "Every line initialled. I'm careful." },
      { card: "shift_rota", trust: 10, reply: "My watch. Yes." },
      { card: "pavel_draft", pressure: 20, gives: "s_koval_protect", reply: "Oh. You found that. I was going to take the blame, for Marit. I thought she had done something. I still don't know what." },
      { card: "voss_calendar", trust: 10, reply: "He was meant to speak to the foundation at eight. He'd been planning it for weeks." }
    ]
  }
];

module.exports = { suspects, testimonies };
