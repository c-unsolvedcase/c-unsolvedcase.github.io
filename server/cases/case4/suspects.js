// Suspects, interview topics, contradictions and testimony cards for Case 4.
// Topics can be gated by shared clue/card ids, pressure (0-100) and trust (0-100).
// pressure rises when you catch lies; trust rises when you are gentle.

const testimonies = {
  s_nadia_static: {
    title: "Nadia: the broken call, again",
    speaker: "nadia",
    text: "Going over the 23:05 call again, Nadia remembers the static broke twice in the same rhythm — Maren keying the set by hand, deliberate, the way you spell something out. She never finished."
  },
  s_riedel_statement: {
    title: "Riedel: 'I never left the station that day'",
    speaker: "tomas",
    text: "Riedel says he never left the station on the Thursday. He worked in the laboratory until the storm watch stood down at 23:00 — Sara brought him tea at half past ten — and then he slept. The evening, he points out, is fully witnessed."
  },
  s_riedel_lab: {
    title: "Riedel: 'Ask Sara — I was at the core logs'",
    speaker: "tomas",
    text: "Riedel says the Thursday evening was spent on the core logs ahead of the Friday pass, in the laboratory, with the door open as always. Anyone who looked in, he says, saw him there. Several people did."
  },
  s_riedel_confession: {
    title: "Riedel's confession",
    speaker: "tomas",
    text: "Riedel breaks: he re-planted the last three flags during his stake round and keyed the F-31 fault from LAB-2 at five past four. He says he told himself she would find the turn-off anyway, that she knew the sound better than the flags — that it was a warning, not a sentence. He has repeated that sentence to himself every night of the long dark."
  },
  s_ruth_comms: {
    title: "Ruth: 'The pass ran in my hand until half eleven'",
    speaker: "ruth",
    text: "Ruth says she worked the evening satellite pass in the comms room from 21:00 until it closed at 23:30 — the traffic, the queue, the weather file — all of it in her hand and all of it logged. Nadia, she says, can confirm every minute."
  },
  s_ruth_round: {
    title: "Ruth: 'I walked the midnight round myself'",
    speaker: "ruth",
    text: "Ruth says that after the pass she did the midnight round of the dorm corridor herself: lights low, every door shut, Maren's door shut like the rest, and she initialled the night log on the lectern as she passed it. All quiet, she says. She remembers it clearly."
  },
  s_ruth_admits: {
    title: "Ruth admits the deck",
    speaker: "ruth",
    text: "Ruth admits it, all of it, in one breath: she wrote the round in the log at five to twelve and then went out on the observation deck to smoke, the way she has done on the worst nights of two winters. Thirty-five minutes, three cigarettes, and a corridor she never walked. She never left the building and she never went near the airlock — and she has hated her own initials in that book ever since."
  },
  s_elias_row: {
    title: "Elias heard the row in the laboratory",
    speaker: "elias",
    text: "Elias says that at twenty to three on the Thursday he heard Maren and Riedel through the dispensary wall — the dispensary adjoins the laboratory and the wall is thin as paper. Maren, steady as a surgeon: 'The file goes on the morning pass, Tomas. Resign, or it goes with your name on it.' Riedel said nothing at all that Elias could hear. That silence, he says, has stayed with him."
  },
  s_elias_met: {
    title: "Elias passed Riedel at 15:55, snow in his cuffs",
    speaker: "elias",
    text: "Elias says he passed Riedel in the corridor at five to four on the Thursday, not ten minutes after the airlock had cycled. Riedel had his parka over his arm and snow still packed in his cuffs and boot tops. He said he'd been checking the cold store. Elias thought nothing of it until the inquiry started asking who had been out that day — and Riedel said nobody had."
  },
  s_sara_tea: {
    title: "Sara: 'I took him tea at half past ten'",
    speaker: "sara",
    text: "Sara says she took Riedel a mug of tea in the laboratory at 22:30 on the Thursday, the way she does the rounds of whoever is still working. He was at the core logs, calm, sleeves rolled, and he thanked her and asked whether the wind was rising yet. She has never doubted he was there. He was."
  },
  s_sara_found: {
    title: "Sara: 'She walked the flags. The flags lied.'",
    speaker: "sara",
    text: "Sara led the search team that found Maren: down the flag line from the station, the flags true for eleven and then bending away toward the dump, Maren's own tracks following them faithfully and wandering only at the very end. Maren did not get lost, Sara says. She was led."
  },
  s_sara_smoke: {
    title: "Sara: 'Only one person here smokes menthols'",
    speaker: "sara",
    text: "Sara laughs once, without humour: there is exactly one smoker on Kestrel Station and she does not exist — the deputy enforces the no-smoking rule with sermons. Menthol. Sara has smelled it on the deck stairs on bad nights for two winters and has kept the station's open secret the way everyone keeps it: completely, and from the inquiry entirely."
  },
  s_jo_shift: {
    title: "Jo: 'Thursdays I download the handhelds'",
    speaker: "jo",
    text: "Jo says Thursdays are download day: every handheld GPS on the station comes to the comms room and its track goes into the routine file, his included, Riedel's included. Nobody reads them. They are just kept, the way everything on a station is kept, against a day nobody names."
  },
  s_jo_track: {
    title: "Jo: 'His track stops where no stakes are'",
    speaker: "jo",
    text: "Jo says he looked at Riedel's Thursday track on the Friday, out of the habit of the job, and it has bothered him since: the track runs the mast line and then stops dead for twenty-five minutes at the far end, among the last flags. There are no ablation stakes at the far end. Jo checked the stake map twice before he let himself believe the download."
  },
  s_jo_saw: {
    title: "Jo saw Riedel come back without the mallet",
    speaker: "jo",
    text: "Jo finally says it: from the comms-room window he saw Riedel go out at 15:05 with the line mallet over his shoulder, and he saw him come back through the airlock at 15:50 — empty-handed, walking fast, with the look of a man who has left something behind him on purpose. The mallet was found by the last flag. Jo has known since the search came home, and has been too frightened of a great man's ruin to say it."
  },
  s_jo_smooth: {
    title: "Jo: 'The figures were too smooth. I was told: drift.'",
    speaker: "jo",
    text: "Jo says he noticed the melt figures a year ago — the same variance, season after season, like a photocopy of winter. He took it to Riedel, politely, the way a junior takes anything to a senior. Instrument drift, he was told. Process it, don't perform it. Jo processed it. Jo has the email still."
  },
  s_nadia_relay: {
    title: "Nadia: 'I relayed the fault. I never questioned it.'",
    speaker: "nadia",
    text: "Nadia says the F-31 printout came off the mast logger at half past nine on the Thursday, the way faults always come, and she relayed it to Maren the way she has relayed a hundred. The logger does not lie, she says, with the air of a woman correcting herself: the logger reports what it is told. She has wondered since whose hand told it."
  },
  s_nadia_calls: {
    title: "Nadia: 'At 22:20 she said: no fault. Coming home.'",
    speaker: "nadia",
    text: "Nadia says Maren's 22:20 call was clear as a bell across four hundred metres of still air: mast reached, anemometer clean, no fault, coming home. The 23:05 call was two broken words and the sound of wind. Nadia called back at once, and again, and logged it all, and has read that page every week of the winter."
  },
  s_nadia_file: {
    title: "Nadia: 'C-14. Send first, she said. Whatever he decides.'",
    speaker: "nadia",
    text: "Nadia says Maren came to the comms room on the Wednesday and asked her to ready Friday's 07:00 pass: a file for the institute, marked C-14, to go first in the queue, whatever Dr. Riedel decided in the meantime. Nadia asked no questions. She has answered several hundred since, all of them her own."
  }
};

const suspects = [
  {
    id: "tomas",
    name: "Tomas Riedel",
    age: 51,
    role: "Senior glaciologist.",
    color: "#5a6a7a",
    unlockedAt: 1,
    bio: "Eleven winters on the ice and the most decorated scientist the station has produced; the flagship melt paper carries his name around the world. A precise man who believes a station, like a dataset, should contain no surprises.",
    intro: "I have read the inquiry's report and I have read your faces, detectives, and both of you are wasting the dark. Maren Haug was my colleague for eleven years. Ask your questions. I keep nothing back; it is not my habit.",
    defaultPresent: "Paper. On this station everything is paper, and most of it is wrong. What of it?",
    topics: [
      {
        id: "t_evening",
        label: "Where were you on the Thursday?",
        answer: "In the station. I never left it that day — not for an hour, not for a minute. I worked in the laboratory until the storm watch stood down at eleven; Sara brought me tea at half past ten, she will tell you. Then I slept, badly, the way everyone sleeps when the wind starts. My evening is witnessed, detectives. Check it as closely as you like.",
        gives: "s_riedel_statement"
      },
      {
        id: "t_lab",
        label: "What were you doing in the laboratory that evening?",
        answer: "The core logs, ahead of the Friday pass — three seasons of them, and the institute wants them tidy. The door stood open, as it always does; Elias passed it, Sara came in with tea, the whole station could see me at that bench. A man planning a crime does not usually book an audience.",
        gives: "s_riedel_lab"
      },
      {
        id: "t_fault",
        label: "The F-31 fault — where did it come from?",
        requires: { clues: ["mast_card"] },
        answer: "From the mast, obviously. Instruments fault; that is the entire biography of instruments. If your card says the entry was made from a terminal, then a terminal was used to log it — the duty staff log faults from LAB-2 as a matter of routine when the mast link is down. You are building a cathedral on a keystroke."
      },
      {
        id: "t_cores",
        label: "Tell me about cores 12 to 14.",
        requires: { clues: ["core_register"] },
        answer: "The foundation of the melt series, drilled and logged by me, checked by the institute's own reviewers. Maren never understood that modern logging corrects the raw depths — she was a magnificent field scientist and a hopeless statistician. If she drilled a check core and frightened herself with it, that is a tragedy of method, not a crime of mine."
      },
      {
        id: "t_confess",
        label: "Tell me what really happened on the Thursday afternoon.",
        requires: { minPressure: 80 },
        answer: "…I moved three flags. Three. In twenty-five minutes of clear afternoon I did the worst arithmetic of my life and called it a warning. Then I sat at LAB-2 like a clerk and typed a fault into the mast, and all evening I waited for her to come home laughing at my joke. She had eleven winters of that line in her feet. I told myself she would not even need the flags. That is the sentence I serve, detectives — not yours. Mine.",
        gives: "s_riedel_confession"
      }
    ],
    present: [
      {
        card: "mast_card",
        pressure: 20,
        reply: "A memory card. You have read its little diary and decided it accuses me. It accuses a terminal, detectives. Terminals do not have names."
      },
      {
        card: "lab_terminal",
        pressure: 15,
        reply: "My card, my terminal, my laboratory. I use that machine forty times a week. You have found a man at his own desk and called it a clue."
      },
      {
        card: "gps_track",
        pressure: 20,
        reply: "My own track, kept by my own technician. I walk that line every Thursday of my life. If the download shows a stop, then I stopped — a man may stop on his own line without asking your permission."
      },
      {
        card: "sortie_board",
        pressure: 15,
        reply: "Stakes. It says stakes, in my hand, because I do the stakes. A signature on a board is a record of routine, not an admission — however much you would like it to be."
      },
      {
        card: "core_register",
        pressure: 15,
        reply: "My register. My hand. My life's work, if we are being plain. You hold it as if it were a weapon; to me it is three winters of careful nights. Maren questioned it too. She was wrong too."
      },
      {
        card: "maren_notebook",
        pressure: 10,
        reply: "Her notebook. 'I know whose hand' — Maren collected suspicions the way the cold store collects cores. She never once said a word of this to my face. Not one word."
      },
      {
        card: "flag_survey",
        pressure: 10,
        reply: "Flags move. Wind moves them, frost heaves them, men brush them with sledges in the dark. You have surveyed a winter, detectives, and found it untidy. Congratulations."
      },
      {
        card: "s_jo_saw",
        pressure: 25,
        reply: "Jo. A boy of twenty-four with a window and a winter of silence, who now remembers — conveniently, completely — the one afternoon that ruins me. I carried that mallet out a hundred times. His memory has carried it once."
      },
      {
        card: "c_tomas_proof",
        pressure: 25,
        reply: "A conclusion. Assembled, not discovered. You have strung paper on paper and called the string a rope. It will not hold my weight, detectives. It will not."
      }
    ]
  },
  {
    id: "nadia",
    name: "Nadia Rahman",
    age: 41,
    role: "Comms and meteorological officer.",
    color: "#7a5a8a",
    unlockedAt: 1,
    bio: "Keeper of the radios, the weather instruments and every log the station lives by. She speaks of the Thursday the way other people speak of a death in the family — because on a station of six, it was one.",
    intro: "I am the voice of this station, detectives — every word that left it on the Thursday went through my hands. I have kept the logs the way I keep them every night: exactly. Ask me anything. The paper is all true, which is more than I can say for the inquiry's summary of it.",
    defaultPresent: "That's not comms. I keep the air and the paper; the rest is other people's weather.",
    topics: [
      {
        id: "t_relay",
        label: "How did the fault reach Maren?",
        answer: "The way faults always reach the leader: the mast logger printed its F-31 chit at half past nine, I read it, I called Maren in the leader's cabin and told her the anemometer had faulted. She said what she always said: 'Then I'll go and look at it.' I did not question the logger. That is the whole of my sin, and I have confessed it every week since.",
        gives: "s_nadia_relay"
      },
      {
        id: "t_calls",
        label: "Walk me through her calls that night.",
        requires: { clues: ["comms_log"] },
        answer: "Twenty-one forty, out, acknowledging the fault. Twenty-two twenty — I will remember it in my grave — 'Anemometer clean. No fault here. Coming home.' Clear as a bell; the night was still then. Twenty-three oh five: two broken words, and wind. I called back at once and again at twelve past. The log has every second of it. The inquiry quoted my first entry and my last. Not the middle one. Never the middle one.",
        gives: "s_nadia_calls"
      },
      {
        id: "t_file",
        label: "What did Maren ask you to send on Friday's pass?",
        requires: { clues: ["sat_schedule"] },
        answer: "She came to me on the Wednesday, quiet and very polite, the way she was before weather. A file for the institute, C-14, to be readied for the seven o'clock pass and sent first in the queue — 'whatever Dr. Riedel decides in the meantime'. I asked nothing. She thanked me as if I had done her a kindness, and I have thought about that thanks every day since.",
        gives: "s_nadia_file"
      },
      {
        id: "t_weather",
        label: "Could the storm have taken her, Nadia?",
        answer: "The storm took nobody. I watched it build on my own instruments: the wind was a rumour until half past ten and a fact at twenty to twelve. Maren Haug walked home in a still night with a good lamp and eleven winters in her feet. If you want the thing that took her, detectives, do not look at my weather. Look at the road she was walking on."
      }
    ],
    present: [
      {
        card: "comms_log",
        trust: 10,
        reply: "My log. Every second of it mine and every word of it true. If the institute had asked for this book instead of a summary, you would not be here — that is not a complaint, detective. It is a relief."
      },
      {
        card: "weather_record",
        trust: 10,
        reply: "The satellite's copy and my local copy agree to the hour. I printed the backup the next morning and filed it unread — force of habit. Habits are the only honest witnesses on a station."
      },
      {
        card: "sat_schedule",
        reply: "There. Friday, seven o'clock, in her own hand: 'whatever he decides'. She gave him the choice first. I have never known a fairer person, and it is the thing I can least forgive him for using."
      },
      {
        card: "mast_card",
        pressure: 15,
        reply: "LAB-2. The logger reports what it is told, and it was told from the laboratory. I relayed a printed lie in a honest voice, detectives. Do you know what that does to a comms officer? I check every chit twice now. Every one."
      }
    ]
  },
  {
    id: "elias",
    name: "Dr. Elias Brandt",
    age: 38,
    role: "Station physician.",
    color: "#4a7a6e",
    unlockedAt: 2,
    bio: "The station's doctor and its quietest conscience. He examined Maren Haug at dawn after two hours on the search line and signed the inquiry's word — 'misadventure' — faster than he has forgiven himself for.",
    intro: "I signed the paper that called it misadventure, detectives, so let us not pretend I am a witness like the others. I am the man who closed the file. Ask what you need; I have had six months of practice answering myself.",
    defaultPresent: "Not medical. My department that week was one patient, and I failed her on paper. What of it?",
    topics: [
      {
        id: "t_row",
        label: "What did you hear through the dispensary wall?",
        requires: { clues: ["core_register"] },
        answer: "Twenty to three on the Thursday. I was stocktaking in the dispensary — it shares a wall with the laboratory and the wall is paper. Maren, steady the way she was before an operation: 'The file goes on the morning pass, Tomas. Resign, or it goes with your name on it.' And Riedel — nothing. Eleven years I have known that man's voice at every volume. That afternoon I heard its absence, and I have trusted it less ever since.",
        gives: "s_elias_row"
      },
      {
        id: "t_corridor",
        label: "Did you see Riedel that afternoon?",
        answer: "I did, and I have been ashamed of how little I made of it. Five to four, the corridor by the lab: Riedel coming from the airlock end with his parka over his arm and snow packed in his cuffs like a man who has been kneeling in it. He said the cold store wanted checking. I nodded. Doctors nod; it is most of the job. It was only at the inquiry, when he said nobody had been out that day, that my nod turned into this.",
        gives: "s_elias_met"
      },
      {
        id: "t_death",
        label: "What did your examination tell you?",
        answer: "That the cold took her slowly and late — toward one in the morning, by every sign I trust. She was strong, detectives, and well-dressed, and she fought it the way she fought everything: properly, and for a long time. She did not die beside that mast at ten. She died walking, in the small hours, a long way from where she should have been. I wrote 'misadventure'. What I meant was: I did not yet know the word for it."
      }
    ],
    present: [
      {
        card: "rescue_report",
        trust: 10,
        reply: "Sara's report. I countersigned it at dawn with hands that would not stop shaking, which is why her signature is the legible one. Everything in it is true. Everything the inquiry did with it is not."
      },
      {
        card: "maren_dictaphone",
        trust: 10,
        reply: "Her voice. 'Tomorrow we talk about paperwork.' I have heard her say a hundred practical things in that tone; it is the tone she used for shopping lists. She was not frightened, at the mast. She was annoyed. Remember that when they tell you she was careless."
      },
      {
        card: "sortie_board",
        reply: "There it is, in the station's own hand: out at five past three, in at ten to four. The inquiry photographed this board for its file and still printed his sentence — 'never left the station' — on the facing page. Nobody read the two pages together. That is why you are here."
      },
      {
        card: "weather_record",
        reply: "A still night until half past ten. I keep coming back to it: the weather gave her every chance. It was the kindest night of the month, and she died in it. Weather does not do that to Maren Haug. Arrangements do."
      }
    ]
  },
  {
    id: "jo",
    name: "Jo Mercer",
    age: 24,
    role: "Research technician.",
    color: "#8a7a3a",
    unlockedAt: 2,
    bio: "The youngest person on the station and the one who keeps its machines honest: handhelds, downloads, stake maps. Jo speaks of senior scientists the way sailors speak of weather — respectfully, and from a distance.",
    intro: "I just keep the instruments, detectives. Downloads, batteries, the cradle — the machines talk to me because I listen to them properly. People I am less good with. Ask me about the machines. The machines I can do.",
    defaultPresent: "I don't — that's not one of mine. I only know the machines and the files.",
    topics: [
      {
        id: "t_shift",
        label: "What does a Thursday look like for you?",
        answer: "Download day. Every handheld on the station comes to the cradle in comms — mine, the field set, Dr. Riedel's. Tracks go into the routine file, batteries on charge, nobody reads a word of it. It is just kept. Everything on a station is kept, detective. That is the whole secret of stations: we throw nothing away, not even the truth. We just file it.",
        gives: "s_jo_shift"
      },
      {
        id: "t_track",
        label: "What bothered you about Riedel's track?",
        requires: { clues: ["gps_track"] },
        answer: "The stop. Out at five past three, up the line at working pace — then twenty-five minutes dead still at the far end, by the last flags. I checked the stake map twice, detective. The stakes are at the NEAR end. There is nothing at the far end to stop for. Nothing to measure, nothing to read. Just flags, and snow, and a man standing in both for twenty-five minutes.",
        gives: "s_jo_track"
      },
      {
        id: "t_kind",
        label: "Nobody is blaming you for anything, Jo.",
        trust: 35,
        answer: "…Everyone says that first. Then the report comes out and the junior's name is the one spelled right. I saw a thing from a window, detective. Windows are my whole job — I watch machines through them. But the thing I saw was a person, and the person signs my appraisals, and I have been sitting on it like it was a chair made of knives."
      },
      {
        id: "t_saw",
        label: "Tell me what you saw from the comms-room window.",
        requires: { cards: ["s_jo_track"], minTrust: 45 },
        answer: "Five past three: Dr. Riedel out through the airlock with the line mallet over his shoulder, the big one, Kestrel Line Two. I noticed because the mallet lives on its hook and he never carries it on stake rounds — the stakes have their own little hammer. And at ten to four he came back. Fast. Empty-handed. The mallet came home with the search team, detective, out of the snow by the last flag. He left it there. A man does not forget a thing like that by accident. Not that man. Not in twenty-five minutes of standing still.",
        gives: "s_jo_saw"
      },
      {
        id: "t_smooth",
        label: "Tell me about the melt figures.",
        requires: { clues: ["stake_data"] },
        answer: "A year ago I took him the variance column — same spread, three winters running, like the ice had been photocopied. He didn't even look up. 'Instrument drift, Mercer. Process it; don't perform it.' So I processed it. I kept the email, though. Juniors keep everything. It's our only armour.",
        gives: "s_jo_smooth"
      }
    ],
    present: [
      {
        card: "gps_track",
        trust: 10,
        reply: "His track. My download, my file, my Thursday. Twenty-five minutes at the far end. I have looked at that stop so many times I could draw it in the dark — which, on this station, is the only way anyone draws anything."
      },
      {
        card: "flag_mallet",
        trust: 15,
        reply: "Line Two. That's it. That's the mallet from the hook by the airlock, the one he carried out at five past three. It came home in a evidence bag, detective, and I have never been able to walk past that hook since."
      },
      {
        card: "jo_note",
        trust: 10,
        reply: "My note. 'Ask M.' I did ask — I asked Dr. Riedel himself, because Maren was in the field that week. 'Instrument drift.' He answered a question about a GPS stop with an answer about data, and I was twenty-three and I let it stand."
      },
      {
        card: "sortie_board",
        reply: "Out five past three, in ten to four. His own handwriting, both lines. And at the inquiry he stood not six feet from that board and said he'd never left the station. I was holding a mug. I remember the mug better than my own name."
      }
    ]
  },
  {
    id: "ruth",
    name: "Ruth Calloway",
    age: 44,
    role: "Deputy expedition leader.",
    color: "#a86a4a",
    unlockedAt: 3,
    bio: "Runs Kestrel Station the way a harbourmaster runs a port: by the book, by the clock, and by personal example — which is why the one page of the book she falsified has eaten at her all winter.",
    intro: "I run this station, detectives, which means its failures queue at my door and its dead get carried past it. Maren Haug was my leader and my friend. Whatever you have heard about my Thursday, hear it from me in order: the pass, the round, and then whatever else you think you know.",
    defaultPresent: "Filed, witnessed, or it didn't happen. Which is it?",
    topics: [
      {
        id: "t_comms",
        label: "Where were you on the Thursday evening?",
        answer: "In the comms room, working the evening pass from nine until it closed at half eleven. The traffic queue, the weather file, two personal messages I should have charged for — all in my hand, all logged, and Nadia Rahman at her desk across the room for every minute of it. My evening has a witness with a logbook, detectives. Not many on this station can say that.",
        gives: "s_ruth_comms"
      },
      {
        id: "t_round",
        label: "And after the pass — the midnight round?",
        answer: "As I have said in every statement: I walked the corridor at midnight. Lights low, doors shut, Maren's door shut like the rest, and I initialled the log on the lectern as I passed it, with the pen that lives there. All quiet. I remember it clearly, because I remember thinking the station felt empty — and then being ashamed of the thought, because of course it did.",
        gives: "s_ruth_round"
      },
      {
        id: "t_deck",
        label: "Tell me about the observation deck, Ruth.",
        requires: { clues: ["door_log"] },
        answer: "…You have the logger. Then have the rest from me and save yourselves the theatre. I wrote the round in that book at five to twelve — in advance, in ink, like a fool covering a small sin with a larger one — and then I went out on the deck and smoked three cigarettes in the dark, the way I have done on the worst nights of two winters. I never walked that corridor. I never left this building; your own printout says the deck door and no other. I falsified a round, detectives. It is the only page I have ever falsified, and I will answer for it — but I will not have it called a killing by people who have read one log and stopped.",
        gives: "s_ruth_admits"
      },
      {
        id: "t_maren",
        label: "What was Maren to this station?",
        answer: "Its standard. Eleven winters, never a corner cut, never a log backdated, never a person left to carry what the team could carry. She made the rest of us better by the simple method of being watching. I have run her station for six months on her rules, with her portrait in the corridor — and one falsified page with my initials on it. You see why I do not sleep, detectives."
      }
    ],
    present: [
      {
        card: "door_log",
        pressure: 15,
        reply: "The deck door. Yes. I know what it says and I know what it doesn't say: it doesn't say airlock, and it doesn't say corridor. Read all of it, detectives, not just the line that hangs me."
      },
      {
        card: "cigarette_ends",
        pressure: 10,
        reply: "Menthol. Buried in the bucket like a schoolgirl. Two winters I have preached that rule with those in my coat pocket. Put it in your report in full sentences; I am done abbreviating myself."
      },
      {
        card: "night_log",
        pressure: 10,
        reply: "My initials, written at five to twelve, sitting above entries made after them. I have run this station's logs for four years; I knew exactly what that page would look like to a careful reader. I wrote it anyway. That is the most frightening sentence I know."
      },
      {
        card: "airlock_log",
        trust: 10,
        reply: "No cycle between her leaving and the search going out. I have read that line a hundred times: whatever else I did that night, the door to the outside was never mine. Hold on to that line, detectives. It is the truest thing in my file."
      }
    ]
  },
  {
    id: "sara",
    name: "Sara Iversen",
    age: 33,
    role: "Station nurse and medic.",
    color: "#5a8a5e",
    unlockedAt: 3,
    bio: "The station's nurse, its search-and-rescue lead, and the person who found Maren Haug. Sara has no patience left for the inquiry's version of that night, and says so in the first person.",
    intro: "I found her, detectives. Six months and I still check the flag line from the window before I check the weather. You want the Thursday in order? I will give you the Thursday in order, and you can leave the word 'misadventure' outside with the cold, where it belongs.",
    defaultPresent: "Not mine. I deal in people and temperatures, in that order.",
    topics: [
      {
        id: "t_tea",
        label: "You took Riedel tea that night?",
        answer: "Half past ten, the laboratory, the way I do the rounds of anyone still working. He was at the core logs with his sleeves rolled, calm as a librarian, and he asked me whether the wind was rising yet, and I said not before midnight, and we were both right, and neither of us knew it. He was there, detectives. Whatever else is true, that hour of him is true — I am its witness and I won't have it borrowed to cover the hours I didn't see.",
        gives: "s_sara_tea"
      },
      {
        id: "t_found",
        label: "Tell me about the search.",
        answer: "Out at ten to six, first light, six of us roped and hopeful. The line from the door: eleven flags true as a ruler — and then the line bends, gentle as you like, away toward the dump, and her tracks bend with it, faithful as a dog. She was by the drums with her lamp dead and her mitts still clipped to her belt like a woman planning to walk further. She did not wander, detectives. She was navigated. There is a difference, and it has a name.",
        gives: "s_sara_found"
      },
      {
        id: "t_smoke",
        label: "Who smokes on this station, Sara?",
        requires: { clues: ["cigarette_ends"] },
        answer: "Nobody. Officially nobody, in four years of sermons. Unofficially: menthol, on the deck stairs, on the worst nights — one person, and I will not say her name because it is not a crime I am reporting, it is a hypocrisy. But since you hold the evidence in your hand: the deputy preaches that rule with the evidence in her coat pocket, and half the station has kept her secret the way we keep all of them. Badly, and out of love.",
        gives: "s_sara_smoke"
      }
    ],
    present: [
      {
        card: "rescue_report",
        trust: 10,
        reply: "My report. I wrote it with my gloves still on because my hands would not do buttons. Every word of it is measured — the distances are paced, not guessed. If it contradicts a statement, it is the statement that is wrong."
      },
      {
        card: "flag_survey",
        reply: "Eleven true, three bent. I paced that bend with my own legs at dawn and I have paced it in my sleep since. Sixty metres. Her whole life came down to sixty metres of other people's honesty."
      },
      {
        card: "maren_notebook",
        reply: "Her handwriting. 'He gets the choice first — that is fair.' She offered a fraud his dignity on her way to destroying him, and he answered with flags in the dark. Read that page to the court for me, detective. Read it slowly."
      },
      {
        card: "cigarette_ends",
        reply: "Menthols. On a station where the anti-smoking sermon is a quarterly event. I am not naming her for you — you have the doors and the log for that — but I will confirm the brand, and the love the secret was kept in."
      }
    ]
  }
];

module.exports = { suspects, testimonies };
