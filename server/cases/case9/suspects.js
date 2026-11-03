// Suspects, interview topics and testimony cards for Case 4 "The Midnight Express".
const testimonies = {
  s_volkov_cards: { title: "Volkov: 'the ring'", speaker: "volkov", text: "Volkov says that at bridge Fairweather turns a ring on his finger when he is bluffing — an old habit, known to the whole table. That night, he says, Fairweather turned it for an hour together, and was not bluffing at anything so small as cards." },
  s_marchetti_cards: { title: "Marchetti: 'Fairweather barely left the table'", speaker: "marchetti", text: "Dr. Marchetti says Mr. Fairweather left the bridge table for a minute or two, no more, and that he was back in good time." },
  s_marchetti_misread: { title: "Marchetti never tested the capsules", speaker: "marchetti", text: "Dr. Marchetti admits she certified natural causes because the body and the pills looked ordinary. She never tested the capsules or the glass." },
  s_reiss_van: { title: "Reiss: 'I was in the guard's van all night'", speaker: "reiss", text: "Anton Reiss says he did not leave the guard's van except for his rounds at ten, half past eleven and half past two." },
  s_reiss_baggage: { title: "Reiss admits the baggage car", speaker: "reiss", text: "Anton Reiss admits he spent most of an hour in the baggage car with Rosalind Hale, from about ten to midnight to ten to one by the train's own clocks. He lied to protect her reputation." },
  s_hale_asleep: { title: "Hale: 'I was asleep in Compartment 6'", speaker: "hale", text: "Rosalind Hale says she went to her compartment at half past ten and did not leave it until morning." },
  s_hale_baggage: { title: "Hale admits the baggage car", speaker: "hale", text: "Rosalind Hale admits she met Anton Reiss in the baggage car at midnight and stayed with him for most of an hour. She did not see anyone else." },
  s_brenner_tray: { title: "Brenner: 'I brought his usual tray at 23:40'", speaker: "brenner", text: "Tomas Brenner says he took Mr. Vale's tray at twenty to midnight, with brandy from the dining car's decanter, and was back in the pantry by ten to." },
  s_brenner_confession: { title: "Brenner's confession", speaker: "brenner", text: "Tomas Brenner breaks: Mr. Fairweather gave him a stoppered decanter and two thousand to swap it for Vale's own. He hid the chipped one in the pantry afterwards. He swears he did not know what was in it." },
  s_fairweather_cards: { title: "Fairweather: 'I only left for a minute'", speaker: "fairweather", text: "Lucian Fairweather says he stepped out of the lounge once, for a minute, to wash his face. He never went near Compartment 3." },
  s_fairweather_confession: { title: "Fairweather's confession", speaker: "fairweather", text: "Lucian Fairweather breaks: he poisoned the brandy through Brenner, slipped through the connecting door after Vale died, swapped the decanter and the pills, and drew the bolt back with a wire from his side." },
  s_volkov_never: { title: "Volkov: 'I never went near Vale's compartment'", speaker: "volkov", text: "Count Volkov says he did not visit Compartment 3 all night. He says he needed Vale alive and signing, and had no reason to harm him." },
  s_volkov_saw: { title: "Volkov saw Fairweather leave and return", speaker: "volkov", text: "Count Volkov says Fairweather left the table at twenty past twelve by the lounge clock and returned at five to one, smelling of cold water, with wet hands." },
  s_ivana_room: { title: "Kessler: 'I went straight to bed'", speaker: "ivana", text: "Ivana Kessler says she went from the lounge straight to Compartment 5 and did not leave it until morning." },
  s_ivana_theft: { title: "Kessler admits stealing the sapphire", speaker: "ivana", text: "Ivana Kessler admits she borrowed the spare key at five to three, swapped the sapphire for a paste copy bought twelve days ago, and put the real one in her hem. She says Vale was already dead." }
};

const suspects = [
  {
    id: "marchetti", name: "Dr. Odile Marchetti", age: 54, role: "Passenger physician. Signed the certificate.", color: "#7aa0c4", unlockedAt: 1,
    look: { hair: "bob", hairColor: "#8a8a8e", skin: "#e0b790", acc: "glasses", accColor: "#cfd6e0" },
    bio: "Dry, precise, and tired. She has treated Vale's heart for six years and signed his certificate at half past seven this morning.",
    intro: "Dr. Marchetti. I was his physician and his bridge partner on occasion. If I made a mistake, Detective, I would like to hear it from you.",
    defaultPresent: "That is not a medical matter.",
    topics: [
      { id: "t_cert", label: "Why did you certify natural causes?", answer: "A known cardiac patient, a locked door, and his own tablets in the case. It was the obvious conclusion. I never tested the capsules.", gives: "s_marchetti_misread" },
      { id: "t_cards", label: "Did Mr. Fairweather leave the bridge table?", answer: "For a minute or two. I wasn't watching the clock. We were in the middle of a hard rubber.", gives: "s_marchetti_cards" },
      { id: "t_pills", label: "Could the tablets have been tampered with?", requires: { clues: ["vale_diary"] }, answer: "I told him never to double his digitalis, even once. He was an obstinate man, but he would not do it by accident." },
      { id: "t_vale", label: "How well did you know Mr. Vale?", requires: { minTrust: 15 }, answer: "A formidable patient. He hated being told he was mortal." }
    ],
    present: [
      { card: "death_certificate", trust: 5, reply: "My signature. Written at half past seven with a body in front of me and no reason for doubt." },
      { card: "doctor_bag", trust: 15, reply: "Every ampoule counted. I keep a log. You may check it against the manifest of the chemist in Vienna." },
      { card: "vale_pillbox", pressure: 10, reply: "Doubled capsules. If I had opened that case I would have known at once. I did not open it." },
      { card: "brandy_glass", pressure: 10, reply: "You found the glass. I should have." },
      { card: "exam_note", trust: 5, reply: "My estimate stands. I wrote it honestly." },
      { card: "card_score", trust: 10, reply: "I was at that table until half past one. Check the sheet." },
      { card: "s_volkov_saw", pressure: 20, reply: "Then I was wrong about the minute. I was losing, Detective. I wasn't watching anything but my hand." }
    ]
  },
  {
    id: "reiss", name: "Anton Reiss", age: 44, role: "Train conductor.", color: "#c9a56a", unlockedAt: 1,
    look: { hair: "cap", hairColor: "#4a4a4a", skin: "#d2a07a", acc: "cap", accColor: "#1c2a44", stache: true },
    bio: "Correct, stiff, and proud of his punctuality. He has run the night service for nine years and has never let a clock run wrong until tonight.",
    intro: "Reiss, conductor. I keep the train on time and the passengers in their places. Ask, and I shall answer correctly.",
    defaultPresent: "That is not in my log.",
    topics: [
      { id: "t_night", label: "Where were you during the night?", answer: "In the guard's van, except for my rounds at ten, half past eleven, and half past two. A conductor never leaves his post.", gives: "s_reiss_van" },
      { id: "t_border", label: "What happened at the border?", requires: { clues: ["border_log"] }, answer: "At midnight, every clock on the train goes forward an hour. I did them all. All except the lounge clock, which I forgot. A shameful oversight." },
      { id: "t_key", label: "Who signs out spare keys?", requires: { clues: ["spare_key_log"] }, answer: "I sign them out. The young lady said she needed Mr. Vale's medicine. I thought nothing of it." },
      { id: "t_baggage", label: "Is there something you are not telling me, Anton?", requires: { minTrust: 25 }, answer: "Yes. The baggage car. A lady asked me not to say. I would rather not, Detective.", gives: "s_reiss_baggage" }
    ],
    present: [
      { card: "punch_book", pressure: 15, reply: "The punch book shows my rounds. It does not show my private time." },
      { card: "locket", pressure: 25, gives: "s_reiss_baggage", reply: "Where did you find that? Very well. I was in the baggage car with Miss Hale from ten to midnight. I lied. I was ashamed for her sake." },
      { card: "hale_note", pressure: 20, gives: "s_reiss_baggage", reply: "That is her handwriting. I met her at midnight. We talked. We did nothing wrong, but she is the heiress and I am a conductor." },
      { card: "border_log", trust: 10, reply: "My log. My oversight. I have written to the line already." },
      { card: "conductor_report", trust: 10, reply: "Every word accurate." }
    ]
  },
  {
    id: "brenner", name: "Tomas Brenner", age: 33, role: "Sleeping-car steward.", color: "#9a9aa8", unlockedAt: 2,
    look: { hair: "short", hairColor: "#2a1a10", skin: "#d8b08c", acc: "none", accColor: "#444" },
    bio: "Smooth, obliging, and always at the elbow. He runs the pantry and the bell board, and he has gambled his wages away more than once.",
    intro: "Brenner, sir. Steward. Whatever the gentleman needs, I'll see to it. A glass of something? No? Very good.",
    defaultPresent: "I wouldn't know about that, sir.",
    topics: [
      { id: "t_tray", label: "Tell me about Mr. Vale's nightcap.", answer: "I took his tray at twenty to midnight, brandy from the dining car's decanter, as always. I was back in the pantry by ten to.", gives: "s_brenner_tray" },
      { id: "t_vale", label: "How did Vale treat you?", answer: "Like a gentleman, sir. Tipped well." },
      { id: "t_debt", label: "I hear you had debts, Tomas.", requires: { clues: ["bar_tab"] }, answer: "Everyone has debts, sir. I settled mine on the fourteenth. A lucky night at cards." },
      { id: "t_decanter", label: "Whose decanter was on the tray?", requires: { clues: ["decanter_new"] }, answer: "The dining car's. A new one, from stock. Mr. Vale's own was chipped, and I had it taken away to be washed." },
      { id: "t_confess", label: "Tell me what you did.", requires: { minPressure: 65 }, answer: "Mr. Fairweather gave me a stoppered decanter and two thousand to swap it for Mr. Vale's own. He said it was a practical joke, something to make him sleep heavily. I hid the chipped one afterwards. God help me, I did not know.", gives: "s_brenner_confession" }
    ],
    present: [
      { card: "bell_log", pressure: 10, reply: "My log. Honest to the minute." },
      { card: "nightcap_note", pressure: 5, reply: "That is how I knew what he wanted." },
      { card: "pantry_decanter", pressure: 25, reply: "That is nothing to do with me. Somebody put that there." },
      { card: "pantry_envelope", pressure: 25, reply: "Savings. A man can have savings." },
      { card: "bar_tab", pressure: 15, reply: "The card club's gossip. Don't believe it." },
      { card: "c_brenner_paid", pressure: 25, reply: "Then somebody paid me. I did not ask where the money came from." },
      { card: "c_decanter_swapped", pressure: 20, reply: "The decanter was swapped, yes. By someone." },
      { card: "c_fw_paid_brenner", pressure: 30, reply: "You'll never prove he gave me anything." }
    ]
  },
  {
    id: "fairweather", name: "Lucian Fairweather", age: 58, role: "Vale's partner at Fairweather & Vale.", color: "#a890c8", unlockedAt: 3,
    look: { hair: "short", hairColor: "#b8b0a0", skin: "#e6c4a4", acc: "glasses", accColor: "#a08ac0", stache: true },
    bio: "Urbane, soft-voiced, and impeccably dressed. For twelve years he has authenticated the pieces Vale sold. He wept at the dinner table tonight.",
    intro: "Lucian Fairweather. Poor Sebastian. We built a house together, you know. I would give anything to have him back.",
    defaultPresent: "I'm afraid I don't follow, Detective.",
    topics: [
      { id: "t_night", label: "What did you do after dinner?", answer: "Cards in the lounge, until half past one. I stepped out once, for a minute, to wash my face. Too much brandy.", gives: "s_fairweather_cards" },
      { id: "t_vale", label: "What did you and Vale argue about at dinner?", requires: { clues: ["argument_slip"] }, answer: "Valmer. He wanted to rush the sale. I wanted care. We always argued, and we always made up." },
      { id: "t_papers", label: "Tell me about the provenance papers.", requires: { clues: ["provenance_papers"] }, answer: "Standard certificates, signed by me over many years. I stand by every one." },
      { id: "t_partner", label: "Was the partnership secure?", requires: { clues: ["dictation"] }, answer: "Sebastian was theatrical. He said a great many things on a great many nights." },
      { id: "t_confess", label: "Tell me what you did.", requires: { minPressure: 90 }, answer: "Twelve years of forgeries. He found the watermark and said he would ruin me at Valmer, in front of the buyer. I could not go to prison. I gave Tomas a decanter prepared with foxglove tincture and told him to swap it. After Sebastian fell, I came through the door between us, took the decanter, put out a clean one, doubled the capsules in his case so it looked like an overdose of his own, and drew the bolt back with a wire.", gives: "s_fairweather_confession" }
    ],
    present: [
      { card: "provenance_papers", pressure: 15, reply: "Old papers on new stock. Everyone in the trade does it." },
      { card: "vale_diary", pressure: 10, reply: "Sebastian's moods. He wrote a great many dramatic things." },
      { card: "dictation", pressure: 20, reply: "A recording made in anger, over dessert. I am sure he meant none of it." },
      { card: "wire_hook", pressure: 20, reply: "A piece of wire? That could be anyone's. A passenger, a porter." },
      { card: "connecting_door", pressure: 15, reply: "That door has been bolted since Vienna, I assure you." },
      { card: "fairweather_trunk", pressure: 25, reply: "Garden remedy. For my digestion. I'm fifty-eight, Detective." },
      { card: "pantry_envelope", pressure: 20, reply: "A bank band. My firm uses a great many." },
      { card: "card_score", pressure: 20, reply: "I stepped out for a minute. I said so." },
      { card: "s_volkov_saw", pressure: 25, reply: "The count is mistaken. Brandy and bridge do not make a good witness." },
      { card: "c_fw_motive", pressure: 25, reply: "A man with a reason is not a man with a crime." },
      { card: "c_fw_at_death", pressure: 30, reply: "I was ill. I washed my face. You can't prove otherwise." },
      { card: "c_fw_route", pressure: 30, reply: "A door and a wire. Anyone could have used them." }
    ]
  },
  {
    id: "volkov", name: "Count Dmitri Volkov", age: 63, role: "Buyer of the Meridian collection.", color: "#c47a6a", unlockedAt: 4,
    look: { hair: "short", hairColor: "#c8c8c8", skin: "#e0b890", acc: "none", accColor: "#444", stache: true },
    bio: "Courtly, impatient, and very rich. He travelled on the same train to be sure Vale signed on arrival.",
    intro: "Count Volkov. I came to buy a collection and, instead, I find myself among policemen. Ask your questions, and let us finish.",
    defaultPresent: "I have no interest in that.",
    topics: [
      { id: "t_alibi", label: "Where were you at the time of the death?", answer: "At the bridge table in the lounge until half past one. I never went near Vale's compartment.", gives: "s_volkov_never" },
      { id: "t_sale", label: "What happens to the sale now?", requires: { clues: ["sale_contract"] }, answer: "Without his signature the contract is worthless. I needed him alive and signing, Detective. His death has cost me four hundred thousand." },
      { id: "t_fw", label: "Did anyone leave the table?", requires: { clues: ["card_score"] }, answer: "Fairweather, once. He left at twenty past twelve by the lounge clock. Hands, sorry, hands seven to nine. He came back at five to one.", gives: "s_volkov_saw" },
      { id: "t_wet", label: "Anything unusual about him when he came back?", requires: { minTrust: 15 }, answer: "Cold water on his cuffs and hands. He said he had been sick. I noticed because he is a vain man, and vain men do not forget their cuffs." }
    ],
    present: [
      { card: "volkov_telegram", pressure: 10, reply: "My impatience, yes. I wanted my collection. It does not make me a murderer." },
      { card: "sale_contract", trust: 10, reply: "My money waits on that signature. It still waits." },
      { card: "card_score", trust: 15, reply: "Every hand, Detective. Every hand but three of someone else's." },
      { card: "volkov_notes", trust: 10, reply: "Pencil notes. I keep notes on cards, on partners, on liars." },
      { card: "lounge_clock", trust: 10, reply: "A clock running an hour behind. I noticed. I said nothing. I assumed it was the line's affair." }
    ]
  },
  {
    id: "ivana", name: "Ivana Kessler", age: 29, role: "Vale's private secretary.", color: "#6aa88a", unlockedAt: 4,
    look: { hair: "long", hairColor: "#7a3a22", skin: "#e2b894", acc: "none", accColor: "#3f7d4f" },
    bio: "Quiet, earnest, and underpaid. She has typed Vale's letters for three years and has not been home in eleven months.",
    intro: "Ivana Kessler. I'm, I was Mr. Vale's secretary. I don't know what to do now. Ask what you like.",
    defaultPresent: "I'm sorry, I don't know.",
    topics: [
      { id: "t_night", label: "What did you do after cards?", answer: "I went straight to my compartment, number five. I didn't leave it all night.", gives: "s_ivana_room" },
      { id: "t_vale", label: "What was Vale like to work for?", answer: "Demanding. Generous when it suited him. He never once asked about my mother." },
      { id: "t_mother", label: "Tell me about your mother.", requires: { clues: ["ivana_letter"] }, answer: "She's very ill. The clinic needs thirty-five hundred by the end of the month and I don't have it." },
      { id: "t_theft", label: "What really happened to the sapphire?", requires: { minPressure: 45 }, answer: "I took it. I swear he was already dead. I ordered a copy twelve days ago and meant to swap it in Valmer when he was asleep. I took the spare key at five to three. He was cold. I felt awful. I never touched his brandy.", gives: "s_ivana_theft" }
    ],
    present: [
      { card: "ivana_letter", trust: 10, reply: "That's private. My mother's clinic." },
      { card: "paste_receipt", pressure: 30, reply: "That, that is nothing. A gift, for my mother." },
      { card: "spare_key_log", pressure: 25, reply: "I went to fetch his medicine. It was an error." },
      { card: "sapphire_case", pressure: 15, reply: "The case. Oh, God, the case." },
      { card: "luggage_manifest", pressure: 15, reply: "I checked my valise. I do that, when I'm nervous." },
      { card: "card_score", trust: 15, reply: "I played every hand with the others. Ask the count." },
      { card: "c_ivana_thief", pressure: 25, reply: "All right. I stole it. But Vale was dead already." }
    ]
  },
  {
    id: "hale", name: "Rosalind Hale", age: 31, role: "Vale's niece and half-heir.", color: "#c9b06a", unlockedAt: 5,
    look: { hair: "bob", hairColor: "#c8a050", skin: "#f0cdb0", acc: "cardigan", accColor: "#7a8aa0" },
    bio: "Bright, restless, and heavily in debt. She has come to Valmer to be at her uncle's side, or so she says.",
    intro: "Rosalind Hale. My uncle's niece. I'm told I'm his heir, and I'm told I'm a suspect. It's an odd way to spend a morning.",
    defaultPresent: "I really don't know.",
    topics: [
      { id: "t_night", label: "Where were you after dinner?", answer: "In bed, in my compartment. Asleep by eleven.", gives: "s_hale_asleep" },
      { id: "t_money", label: "Did you need your uncle's money?", requires: { clues: ["rosalind_letter"] }, answer: "Of course I did. Everyone knows I did. It doesn't mean I wanted him dead." },
      { id: "t_anton", label: "Tell me about the conductor.", requires: { minTrust: 20 }, answer: "Anton? A decent man. We talk, sometimes. Nothing more.", gives: "s_hale_baggage" },
      { id: "t_vale", label: "How well did you know your uncle?", answer: "Not well. He was a stranger in a very expensive suit." }
    ],
    present: [
      { card: "hale_note", pressure: 20, gives: "s_hale_baggage", reply: "Oh, no. All right. I was in the baggage car with Anton, from midnight till nearly one. I'm sorry. I lied." },
      { card: "locket", pressure: 20, gives: "s_hale_baggage", reply: "He kept that? Yes. Midnight in the baggage car. I'm not proud." },
      { card: "rosalind_letter", pressure: 10, reply: "My bank. My shame. It's not a motive." },
      { card: "dining_roster", trust: 10, reply: "I dined alone. I always do." },
      { card: "c_reiss_hale", trust: 15, reply: "So now you know. Is that enough?" }
    ]
  }
];

module.exports = { suspects, testimonies };
