// Suspects, interview topics, contradictions and testimony cards for Case 3.
// Topics can be gated by shared clue/card ids, pressure (0-100) and trust (0-100).
// pressure rises when you catch lies; trust rises when you are gentle.

const testimonies = {
  s_ruben_door: {
    title: "Ruben, at the stage door",
    speaker: "ruben",
    text: "Stopped with his bag packed, Ruben says he only wanted his sister's spare room and one night without the gallery above him. 'I signed the book. I never climbed. Whatever fell, fell on its own — I just want one night not dreaming about it.'"
  },
  s_felix_box: {
    title: "Felix: 'I was in the box all evening'",
    speaker: "felix",
    text: "Felix says he took his seat in the director's box at the half-hour call and never left it until the curtain fell. Four hundred people, he points out, can place him there."
  },
  s_felix_statement: {
    title: "Felix: 'I never went near the flies'",
    speaker: "felix",
    text: "Felix says he never set foot on the fly gallery on the closing day — he does not go up there on performance days at all. The flies, he says, are the crew's kingdom, not his."
  },
  s_felix_confession: {
    title: "Felix's confession",
    speaker: "felix",
    text: "Felix breaks: he climbed the ladder at ten past six, signed it out of habit, and cut the rope halfway through. He says he told himself it would only frighten her — a fallen weight, a closed show, a board too busy to read lists. He moved her mark the same week. He did not miss."
  },
  s_ruben_signed: {
    title: "Ruben: 'I walked every line at 18:40'",
    speaker: "ruben",
    text: "Ruben says he climbed the gallery at twenty to seven and walked every fly line, and they were sound. Eleven years, he says, and he has never missed an inspection."
  },
  s_ruben_admitted: {
    title: "Ruben admits the bottle",
    speaker: "ruben",
    text: "Ruben admits it: he came in at half six straight from the pub, signed the inspection book without climbing so much as the ladder's first rung, and slept it off in the crew room. He never went up before the show. He believed for six months that his laziness had killed her."
  },
  s_kit_cues: {
    title: "Kit: 'The book ran clean'",
    speaker: "kit",
    text: "Kit says the closing night ran clean on the prompt book — every cue on time, every entrance as set — until the weight fell in Act 2 and the show stopped dead."
  },
  s_kit_heard: {
    title: "Kit heard the ladder bell",
    speaker: "kit",
    text: "Kit says the fly-gallery ladder has a bell at its foot, fitted so the prompt corner knows when someone climbs. It rang once on the closing day at about ten past six — before any of the evening fly crew had signed in."
  },
  s_kit_saw: {
    title: "Kit saw a man on the gallery",
    speaker: "kit",
    text: "Kit finally says it: after the bell rang, they looked up through the grid and saw a man cross the fly gallery in a dark suit — not crew blacks — a tall man walking with a limp, favouring his left side, exactly the walk Mr Ardell has had since his fall from a rostrum in '09."
  },
  s_kit_ruben: {
    title: "Kit: 'Ruben never climbed before the show'",
    speaker: "kit",
    text: "Kit says Ruben Voss came in at half six smelling of the pub across the road, signed the inspection book at the desk downstairs, and went to sleep it off in the crew room. The ladder bell never rang for him — Kit would have heard it from the prompt corner, and it did not ring again until the inquest."
  },
  s_rose_heard: {
    title: "Rose heard the row",
    speaker: "rose",
    text: "Rose says that at half past five on the closing day she heard Margot and Felix through the box-office wall: Margot calm as a magistrate, Felix not calm at all — 'You will resign, or I will ruin you, and I am sorry for it.' Then Margot came out white as her own ghost."
  },
  s_petra_noticed: {
    title: "Petra noticed the costumes going",
    speaker: "petra",
    text: "Petra says the heritage pieces began vanishing three years ago — always 'sent for repair', always on her days at the touring theatre, never once returned. She began keeping her own list because she no longer trusted the office copy."
  },
  s_petra_told: {
    title: "Petra gave Margot the list",
    speaker: "petra",
    text: "Petra says she gave Margot a copy of her list in September and Margot promised the board would have it after the farewell run — kindly, if Felix resigned; in full, if he did not."
  }
};

const suspects = [
  {
    id: "felix",
    name: "Felix Ardell",
    age: 52,
    role: "Director of the Halvard Theatre.",
    color: "#6a7a6e",
    unlockedAt: 1,
    bio: "Brilliant, vain and broke in the particular way of men who live for one building. He has directed at the Halvard for twenty years and walks with a limp from a fall off a rostrum in 2009.",
    intro: "I directed Margot Ellery for twenty years. Whatever she was to this theatre, she was more to me. Ask what you need, detectives. I have nothing to hide and, God knows, nothing left to lose.",
    defaultPresent: "Paper, props, gossip. This theatre runs on all three. What of it?",
    topics: [
      {
        id: "t_evening",
        label: "Where were you during the performance?",
        answer: "In the director's box, from the half-hour call to the fall of the curtain. It is my seat, my ritual, twenty years of it. Four hundred people watched the same stage I did. Whatever happened in the wings, I was in plain view when it happened.",
        gives: "s_felix_box"
      },
      {
        id: "t_flies",
        label: "Did you go up to the fly gallery that day?",
        answer: "Never. I do not go up there on performance days at all — the flies are the crew's kingdom, and Ruben guards it like a dragon. My last climb was a week before, with the safety officer, and it is in her report if you care to look.",
        gives: "s_felix_statement"
      },
      {
        id: "t_rope",
        label: "What parted that rope?",
        requires: { clues: ["fallen_rope"] },
        answer: "Age. The Halvard is a hundred and twenty years old and starved of money for thirty of them. That rope should have been renewed in the spring; the board deferred it. If you want a culprit for worn hemp, detectives, look at the budgets, not at me."
      },
      {
        id: "t_sales",
        label: "Tell me about the heritage costume sales.",
        requires: { clues: ["sales_invoices"] },
        answer: "Duplicates. Every theatre sells its duplicates to keep the store from bursting — the money went to the fabric fund, and the board's own minutes allow it. Margot sentimentalised every rag in that store. A gown is cloth, detectives. It is not a soul."
      },
      {
        id: "t_margot",
        label: "What did Margot say to you that evening?",
        requires: { clues: ["board_letter"] },
        answer: "That letter. She never sent it, you notice. Margot liked a dramatic gesture the way other people like tea. We spoke of the farewell season, of nothing, cordially. She was my leading lady to the last hour of her life."
      },
      {
        id: "t_confess",
        label: "Tell me what really happened in the flies.",
        requires: { minPressure: 80 },
        answer: "I climbed at ten past six and signed the wretched book out of habit — twenty years of signing things. I cut that rope halfway and told myself it would only fall and frighten her, close the show, bury her list in the fuss. I moved her mark on the Tuesday. I have heard that bell in the ladder every night since, detectives. Every single night.",
        gives: "s_felix_confession"
      }
    ],
    present: [
      {
        card: "ladder_log",
        pressure: 25,
        reply: "That is not — the fly crew sign that book. Anyone could write initials. Anyone. You cannot hang a man on two letters in a borrowed book."
      },
      {
        card: "rope_offcut",
        pressure: 15,
        reply: "A piece of rope. In a theatre. There are four miles of rope in this building, detective; you have found forty centimetres of it."
      },
      {
        card: "sales_invoices",
        pressure: 15,
        reply: "My signature is on everything in this theatre. That is what a director is — a signature at the bottom of other people's decisions."
      },
      {
        card: "board_letter",
        pressure: 10,
        reply: "Unsent. Unposted. A draft of a feeling, in a dramatic woman's hand. She would have burned it by Monday, as she burned a hundred others."
      },
      {
        card: "dealer_catalogue",
        pressure: 10,
        reply: "She circled half that catalogue every season. Margot collected grievances the way the store collects gowns."
      },
      {
        card: "fallen_rope",
        pressure: 10,
        reply: "You have had that under a lens, I suppose. Old rope does strange things at the ends. Ask your lens about thirty years of deferred budgets."
      },
      {
        card: "shawl",
        reply: "Her shawl. She would no more go on without it than without the words. Keep it from the damp, whatever you do — she would have hated that most of all."
      },
      {
        card: "s_kit_saw",
        pressure: 30,
        reply: "Kit. A child on the book, in the dark, looking up through a grid at a gallery forty feet above — and six months to let this building's gossip ripen into memory. Kit saw what the building told Kit to see."
      },
      {
        card: "c_felix_flies",
        pressure: 25,
        reply: "A conclusion. Yours. Paper accusing paper. You will need more than string and pins to make a court believe it."
      }
    ]
  },
  {
    id: "ruben",
    name: "Ruben Voss",
    age: 44,
    role: "Flyman — head of the fly gallery.",
    color: "#8a6a4a",
    unlockedAt: 1,
    bio: "Eleven years in the flies, forty feet above the stage, and proud of every rope of it. Since the closing night he has the look of a man listening for a bell only he can hear.",
    intro: "I run the flies. Every rope in this building answers to me, including that one, so get it over with. I've said my piece to the inquest and I'll say it to you: I checked those lines.",
    defaultPresent: "What's that got to do with my gallery?",
    topics: [
      {
        id: "t_inspection",
        label: "Walk me through your inspection that day.",
        answer: "Same as always. In at the half, up the ladder, walked every line on the rail, hand over hand, chalk on my palms. All sound at twenty to seven. Eleven years I've signed that book and never been wrong.",
        gives: "s_ruben_signed"
      },
      {
        id: "t_rope",
        label: "The rope was cut, Ruben. Not worn.",
        requires: { clues: ["fallen_rope"] },
        answer: "Cut? No. No, listen — I know rope. Old hemp goes strange at the ends when it goes, it bursts, it — you're telling me someone took a knife to my line? In my gallery? Then they did it where I couldn't see, because I was — I was checking. I was checking."
      },
      {
        id: "t_window",
        label: "Who was in your gallery before your shift?",
        requires: { clues: ["ladder_log"] },
        answer: "Nobody. The gallery's locked to crew and the log's the log — matinee lads down at twenty to five, then my name at the end of the day. Whoever wrote those initials before mine, that's your question, isn't it. I never wrote them and I never saw them till now."
      },
      {
        id: "t_bottle",
        label: "Tell me about the flask, Ruben.",
        requires: { clues: ["hip_flask"] },
        answer: "…Mine. All right. Mine. I came in at half six off the pub floor, signed for lines I never walked, and slept it off in the crew room like the useless article I am. I never climbed that ladder before the show — that's God's truth. And I've believed six months that my bottle killed her, so whatever you're going to do to me, get on with it.",
        gives: "s_ruben_admitted"
      }
    ],
    present: [
      {
        card: "hip_flask",
        pressure: 20,
        gives: "s_ruben_admitted",
        reply: "Where did you — behind the tins. Yes. Mine. I keep it where the ladder can't see it, which tells you everything about me. Sit down, detective, I'll tell you the whole shameful timetable."
      },
      {
        card: "fallen_rope",
        pressure: 15,
        reply: "Don't show me that. I know what it is. I coiled a hundred like it. If it's cut, it wasn't cut by hands that love rope — look at the angle on it, that's a stranger's cut."
      },
      {
        card: "inspection_book",
        pressure: 10,
        reply: "My signature. My shame, more like. Ask me what I was doing at twenty to seven and watch me lie to you out of habit — then ask Kit. Kit hears everything."
      },
      {
        card: "ladder_log",
        trust: 10,
        reply: "There. Eighteen forty-five, my name, after I'd slept the worst of it off. And before it — those aren't crew initials, detective. Crew write their names. Only one man in this building signs with two letters and a flourish."
      },
      {
        card: "shawl",
        reply: "Her shawl, on the flat where she waited. She stood there in the dark like she'd stood a thousand nights, trusting the ropes over her head. That's the part I can't — leave it there, will you. Leave it there."
      }
    ]
  },
  {
    id: "kit",
    name: "Kit Sorrell",
    age: 26,
    role: "Assistant stage manager, on the prompt book.",
    color: "#5a8aa8",
    unlockedAt: 2,
    bio: "Two seasons at the Halvard and already the person everyone actually asks. Kit hears the whole building from the prompt corner — including the ladder bell nobody else notices.",
    intro: "I was on the book that night. Every cue, every entrance, I called them all. I wrote down what I was supposed to write down. Ask me about the show — the show I can do.",
    defaultPresent: "I don't — that's not on my book. I only know what's on my book.",
    topics: [
      {
        id: "t_night",
        label: "How did the closing night run?",
        answer: "Clean. Cleanest of the run, which is the worst of it. House full, first act like a watch, entrances on the button. Miss Ellery hit every mark I ever gave her — including the new one, God help us. Then Act 2, the weight, and the curtain came in on its own.",
        gives: "s_kit_cues"
      },
      {
        id: "t_kind",
        label: "Nobody is blaming you for anything, Kit.",
        trust: 35,
        answer: "…Everyone looks at the book when something falls. The book, the boy— the person on the book. I called her onto that mark, do you understand that? I said 'standby, Miss Ellery', and she went and stood where the book said. I've been carrying that for six months."
      },
      {
        id: "t_ladder",
        label: "Tell me about the ladder bell.",
        requires: { clues: ["cue_sheet"] },
        answer: "There's a bell at the foot of the gallery ladder — an old thing, so the prompt corner knows when someone's climbing. It rang once that day, ten past six, and I wrote it on the sheet without thinking. The evening crew weren't in yet. I was told to re-ink page forty of the book afterwards, to make it neat for the file. I did it. I hate that I did it.",
        gives: "s_kit_heard"
      },
      {
        id: "t_man",
        label: "What did you see when you looked up?",
        requires: { cards: ["s_kit_heard"], minTrust: 45 },
        answer: "A man crossing the gallery, up at the rail by line seven. Dark suit — not blacks, a suit. Tall. And the walk, detective: he favours his left side, step and drag, step and drag. There's one man in this building walks like that, since he fell off the rostrum in '09, and he's directed every show since from the box. It was Mr Ardell. I've known since that night and I've been too frightened to say it.",
        gives: "s_kit_saw"
      },
      {
        id: "t_ruben",
        label: "Did Ruben climb the ladder before the show?",
        requires: { clues: ["inspection_book"] },
        answer: "No, and I'll sign to it. Ruben came in at half six reeking of the pub, signed his book at the desk down here, and went to the crew room to sleep. That bell never rang for him — it rings through the floor into my corner, I'd have felt it in my teeth. Whatever Ruben's sins are, climbing isn't one of them.",
        gives: "s_kit_ruben"
      }
    ],
    present: [
      {
        card: "prompt_book",
        trust: 15,
        reply: "My book. You can see where page forty was re-inked — I did that. Mr Ardell asked for it neat for the file, the morning after. I thought it was for the insurers. I keep telling myself I thought that."
      },
      {
        card: "cue_sheet",
        trust: 10,
        reply: "That's my writing. 'Ladder bell' — I wrote it before I knew it mattered, which is the only reason I believe it myself."
      },
      {
        card: "ladder_log",
        reply: "F.A. Ten past six. I couldn't read it from the corner, but I didn't need to. I heard the bell and I know the walk. Ask me properly, detective, and I'll tell you — but be kind about it."
      },
      {
        card: "fallen_rope",
        trust: 10,
        reply: "That's the one that — yes. Line seven. It came down twelve feet from my desk and I never heard a thing wrong with it all evening, that's what I can't get over. It just… waited."
      }
    ]
  },
  {
    id: "rose",
    name: "Rose Delgado",
    age: 58,
    role: "Box-office manager.",
    color: "#a85a6e",
    unlockedAt: 3,
    bio: "Twenty years in the box office, keeper of the diary, the invoices and every grudge the building has ever produced. Nothing paper exists at the Halvard that Rose has not filed.",
    intro: "Margot Ellery took tea at my counter every Thursday for eleven years, detectives. Whatever you want, if it's written down, I have it. If it isn't written down, I probably heard it through the wall.",
    defaultPresent: "Filed, darling. Everything here is filed. That's rather the point of me.",
    topics: [
      {
        id: "t_row",
        label: "What did you hear on the closing day?",
        answer: "Half past five, through the office wall — these walls are paper with delusions. Margot, calm as a magistrate: 'You will resign, or I will ruin you, and I am sorry for it.' Felix anything but calm. Then she swept out past my counter white as her own ghost and said, 'Rose. Tea on Thursday, whatever happens.' There was no Thursday.",
        gives: "s_rose_heard"
      },
      {
        id: "t_invoices",
        label: "Who countersigned the costume invoices?",
        requires: { clues: ["sales_invoices"] },
        answer: "Felix Ardell, every one, 'duplicates' in his own hand. I filed what I was given — that is the box office's whole religion. But I will tell you free of charge, detectives: I have sold tickets at this theatre for twenty years, and nobody ever once showed me a duplicate of the duchess's gown."
      },
      {
        id: "t_margot",
        label: "What was Margot to this theatre?",
        answer: "Its spine. Thirty years, never missed a show, knew the ushers' grandchildren by name. Her husband — God rest him — I let him in free his last season, never logged it, and I'd do it again. Margot knew. She used to leave the money in my drawer anyway, exact change, with a note. That was Margot: she always knew, and she always paid."
      }
    ],
    present: [
      {
        card: "box_office_diary",
        trust: 15,
        reply: "My diary. Written that evening, before anyone knew a diary could matter — which is rather why you can trust it, darling."
      },
      {
        card: "sales_invoices",
        reply: "Filed in good faith by me and signed in bad faith by him. Fourteen of them. I counted again in September, when Petra started asking questions I couldn't answer."
      },
      {
        card: "dealer_catalogue",
        reply: "Quill. 'By appointment only' — appointment with whom, I wonder. Not with the box office, darling. We only found out when Margot marched in waving it like a warrant."
      }
    ]
  },
  {
    id: "petra",
    name: "Petra Vane",
    age: 39,
    role: "Wardrobe mistress.",
    color: "#7a9a5a",
    unlockedAt: 4,
    bio: "Keeper of the Halvard's costumes for twelve years; she can date a seam by touch. She stopped trusting the office copies of her own records three years ago, which is why there is a list.",
    intro: "Every costume in this building has passed through my hands, detectives. I know what we hold, I know what we held, and I know the difference — which is more than the office can say. Ask.",
    defaultPresent: "Not wardrobe. I keep the clothes; the lies are other people's department.",
    topics: [
      {
        id: "t_stock",
        label: "When did the costumes start vanishing?",
        answer: "Three years ago. Always the same way: 'sent for repair' on the office book, always on my touring days, never once returned. Fourteen heritage pieces. I am not a fanciful woman, detectives. I began a list of my own, in my own hand, and I kept it in my own drawer.",
        gives: "s_petra_noticed"
      },
      {
        id: "t_list",
        label: "What did you do with your list?",
        requires: { cards: ["s_petra_noticed"] },
        answer: "I gave a copy to Margot in September — she was the only person in this building the board would believe. She promised: kindly first, if he resigned; the whole list to the board after the farewell run, if he did not. He knew. She told him to his face on the closing day. I heard none of it and I would give my right hand to have stood in that office.",
        gives: "s_petra_told"
      },
      {
        id: "t_crate",
        label: "Tell me about the crate by the store door.",
        requires: { clues: ["dealer_crate"] },
        answer: "The silver wedding dress, 1994, packed for Quill like a body for burial. I found it the week after the inquest and I have slept badly since. It was still going on, detectives — after Margot, after everything. The man did not even stop."
      }
    ],
    present: [
      {
        card: "petra_list",
        trust: 10,
        reply: "My list. Fourteen stars, fourteen thefts. The foot of it says who got the copy, and when. I wrote it so that if anything happened to me, the paper would speak."
      },
      {
        card: "empty_rails",
        reply: "My graveyard. I keep the tags tied on so that somebody, someday, has to read the names aloud. Tonight it's you."
      },
      {
        card: "dealer_catalogue",
        pressure: 10,
        reply: "There. Lot forty-one. The duchess's gown, described by a man who held it in his hands, priced like a used car. Margot circled that page till the pencil tore."
      }
    ]
  }
];

module.exports = { suspects, testimonies };
