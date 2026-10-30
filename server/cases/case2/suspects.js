// Suspects, interview topics, contradictions and testimony cards for Case 2.
// Topics can be gated by shared clue/card ids, pressure (0-100) and trust (0-100).
// pressure rises when you catch lies; trust rises when you are gentle.

const testimonies = {
  s_guest_voices: {
    title: "The Room 5 guest, again",
    speaker: "ada",
    text: "Through her wall, the Room 5 guest heard a man's voice on the terrace, low and apologetic, saying the same name twice: 'Helen. Helen.' Then a door. Then nothing she could turn into a complaint."
  },
  s_daniel_desk: {
    title: "Daniel: 'I was at the desk all night'",
    speaker: "daniel",
    text: "Daniel says he took the front desk at ten and never left it until six. A night manager, he says, does not wander."
  },
  s_daniel_no_call: {
    title: "Daniel: 'I never spoke to her that night'",
    speaker: "daniel",
    text: "Daniel says he did not phone or speak to Helen on the gala night, apart from good evening at the gala itself."
  },
  s_daniel_code: {
    title: "Daniel: 'My code is N2'",
    speaker: "daniel",
    text: "Daniel says his personal authorisation code is N2, as everyone's is their own, and nobody else may use it."
  },
  s_daniel_call_admitted: {
    title: "Daniel admits he phoned Helen",
    speaker: "daniel",
    text: "Shown the phone log, Daniel admits he called Helen's suite at 02:10. He says it was only to ask whether she needed anything for the morning."
  },
  s_daniel_confession: {
    title: "Daniel's confession",
    speaker: "daniel",
    text: "Daniel breaks: he asked her to the terrace to explain the refunds, she pulled away from his hand, fell against the planter, and did not get up. He carried her down and made it look like a fall on the stairs."
  },
  s_tessa_handover: {
    title: "Tessa: 'Daniel was calm as milk'",
    speaker: "tessa",
    text: "Tessa says Daniel relieved her at the desk at 22:00, calm as milk, and told her: 'Big night, Tessa. Get some sleep.'"
  },
  s_tessa_comp: {
    title: "Tessa admits the comped room",
    speaker: "tessa",
    text: "Tessa admits she put her brother in the garden room for two nights in May and logged it as maintenance. She says she would do it again."
  },
  s_priya_laundry: {
    title: "Priya: 'I was in the laundry until one'",
    speaker: "priya",
    text: "Priya says she finished her floor rounds and was in the laundry until 01:00, then went to her room in the staff wing."
  },
  s_priya_admitted: {
    title: "Priya admits she was by the stairs",
    speaker: "priya",
    text: "Priya admits the linen count at 03:20 is hers: she was out of the laundry that night — first in the kitchen, then carrying linen past the service stairs at about five past three."
  },
  s_priya_saw: {
    title: "Priya saw Daniel on the stairs",
    speaker: "priya",
    text: "At about 03:05 Priya passed the service stairs with an armful of linen and saw Daniel Okoye coming down from the terrace side, straightening the stair rug with his foot. He said, quite gently: 'Not a word, Priya. You were never out of the laundry.' She believed she would be sacked if she spoke."
  },
  s_walter_nothing: {
    title: "Walter: 'I heard nothing at all'",
    speaker: "walter",
    text: "Walter says he slept like the dead on the gala night and heard nothing, which at his age he calls the one reliable pleasure left."
  },
  s_walter_admitted: {
    title: "Walter admits the terrace, and the hour",
    speaker: "walter",
    text: "Walter admits he was on the roof terrace smoking until 02:20, against house rules, and left it empty. Back in Room 6, at about half past two, he heard the terrace door go above him and voices, a man and a woman, brief. Then nothing."
  }
};

const suspects = [
  {
    id: "daniel",
    name: "Daniel Okoye",
    age: 45,
    role: "Night manager of the Grand Meridian.",
    color: "#7a8aa0",
    unlockedAt: 1,
    bio: "Smooth, unhurried, and proud of the hotel. Fifteen years of nights; the regulars call him the mayor of the small hours.",
    intro: "Mrs. Marlowe was a friend to everyone here. Whatever you need from me, Detective, you have it. The night desk sees everything, and I am the night desk.",
    defaultPresent: "I couldn't say, Detective. The hotel keeps many papers.",
    topics: [
      {
        id: "t_theory",
        label: "What do you think happened to her?",
        answer: "A fall, plainly. Those service stairs are steep and the light has been poor since spring — I reported it twice. Helen knew them, but she was seventy, nearly, and it was a long night."
      },
      {
        id: "t_alibi",
        label: "Where were you that night?",
        answer: "At the desk from ten until six, as always. A night manager does not wander, Detective. The desk is the post, and I keep to it.",
        gives: "s_daniel_desk"
      },
      {
        id: "t_call",
        label: "Did you speak to Helen that night?",
        answer: "At the gala, good evening, nothing more. I did not phone her. Why would I? She was two floors up and asleep by midnight, for all I knew.",
        gives: "s_daniel_no_call"
      },
      {
        id: "t_refunds",
        label: "Tell me about refunds.",
        requires: { clues: ["refund_book"] },
        answer: "Refunds are routine. Deposits, no-shows, the odd storm cancellation. Every manager uses their own code, that is policy, and the book is there for anyone to read. Helen read it for her chapter, I believe."
      },
      {
        id: "t_key",
        label: "Which authorisation code is yours?",
        requires: { clues: ["refund_book"] },
        answer: "N2. Tessa is D1, housekeeping is H3. It is on the rota card behind the desk, Detective. No mystery there.",
        gives: "s_daniel_code"
      },
      {
        id: "t_terrace",
        label: "When were you last on the roof terrace?",
        requires: { clues: ["glasses_found"] },
        answer: "The terrace? I check it on the morning round. That night I never went up. I was at the desk — I have told you. Guests and their glasses are not my department."
      },
      {
        id: "t_confess",
        label: "Tell me what really happened on the terrace.",
        requires: { minPressure: 75 },
        answer: "She said she would ruin me kindly. Kindly! I took her arm, only her arm, and she pulled away and went down against the planter and she did not get up. I carried her to the stairs. God forgive me, I made it look like a fall, because I could not lose everything over one moment.",
        gives: "s_daniel_confession"
      }
    ],
    present: [
      {
        card: "desk_phone_log",
        pressure: 20,
        gives: "s_daniel_call_admitted",
        reply: "All right. I rang her room at ten past two. She had seemed troubled at the gala and I asked if she needed anything for the morning. A courtesy call. I did not think it worth mentioning."
      },
      {
        card: "lift_log",
        pressure: 25,
        reply: "The lift. I — there was a call about a noise. A manager checks. It does not put me on any terrace, Detective."
      },
      {
        card: "door_log",
        pressure: 15,
        reply: "Doors open in a hotel all night. Wind, guests, staff. A log of a door is not a log of a man."
      },
      {
        card: "refund_book",
        pressure: 10,
        reply: "That is policy. Every refund carries the manager's code. If the sums look wrong, that is a question for the office, and Helen was writing the office chapter."
      },
      {
        card: "desk_drawer",
        pressure: 10,
        reply: "Banking is reconciled weekly. I do not carry the hotel's money in my pockets, Detective."
      },
      {
        card: "gala_photo",
        trust: 15,
        reply: "That evening. She was laughing at something I said. She laughed easily, Helen. Whatever you may think of me, I miss that."
      },
      {
        card: "c_daniel_terrace",
        pressure: 25,
        reply: "That proves opportunity, nothing more. Half the hotel could have been on that roof."
      },
      {
        card: "s_priya_saw",
        pressure: 30,
        reply: "Priya? A girl sneaking out of her own laundry at three in the morning would say anything to keep her job. Anything."
      }
    ]
  },
  {
    id: "tessa",
    name: "Tessa Wren",
    age: 34,
    role: "Front-desk receptionist.",
    color: "#c98a6a",
    unlockedAt: 1,
    bio: "Bright, funny, and incapable of leaving a silence unfilled. She has worked the desk for six years and knows every regular by their tea order.",
    intro: "Helen used to bring me a bun from the bakery on Thursdays, did you know that? Ask me anything. If I don't know it, I'll know who does, which is nearly as good.",
    defaultPresent: "Ooh. No idea, sorry. Shall I ask around?",
    topics: [
      {
        id: "t_handover",
        label: "Tell me about the handover that night.",
        answer: "Daniel relieved me at ten, calm as milk. 'Big night, Tessa, get some sleep.' I went home to my flat over the bakery. If anything happened, it happened on his watch, poor man.",
        gives: "s_tessa_handover"
      },
      {
        id: "t_helen",
        label: "What was Helen working on?",
        answer: "The centenary book. She practically lived in the old books. Said the ledgers were full of ghosts, and she meant the arithmetic kind. She was at them all summer."
      },
      {
        id: "t_brother",
        label: "Who was in the garden room in May?",
        requires: { clues: ["guest_register"] },
        answer: "Maintenance, like the register says. The room was being painted. Slowly. Very slowly. Can we talk about literally anything else?"
      }
    ],
    present: [
      {
        card: "guest_register",
        pressure: 15,
        reply: "That handwriting? Registers get written by whoever is passing. You can't hang a girl for handwriting."
      },
      {
        card: "rota_card",
        pressure: 10,
        gives: "s_tessa_comp",
        reply: "Fine. Fine! My brother lost his flat in May and I put him in the garden room for two nights and wrote 'maintenance'. He slept in a bed instead of a bus shelter. I'd do it again, and you can tell Ada I said so."
      },
      {
        card: "refund_book",
        reply: "Refunds are Daniel's desk, not mine. I check people in, I smile, I hand them a key the size of a rolling pin. That's my whole empire."
      }
    ]
  },
  {
    id: "priya",
    name: "Priya Nair",
    age: 29,
    role: "Housekeeper, night floors.",
    color: "#a086b5",
    unlockedAt: 2,
    bio: "Careful, precise, and quietly funny when she trusts you. She keeps the hotel's floors immaculate and its secrets better than her own.",
    intro: "I do the floors at night. I see sheets and shoes, mostly. I will tell you what I know, but it is not very much.",
    defaultPresent: "I don't know about that, sorry.",
    topics: [
      {
        id: "t_rounds",
        label: "What were your rounds that night?",
        answer: "Floors until eleven, then the laundry until one, then my room. The gala made a mountain of linen. I signed out at one, it is on the sheet.",
        gives: "s_priya_laundry"
      },
      {
        id: "t_kind",
        label: "Nobody is blaming you for anything, Priya.",
        trust: 35,
        answer: "That is — thank you. People look at the girl with the linen before they look anywhere else. It has been a long two years of that look."
      },
      {
        id: "t_saw",
        label: "What did you see by the stairs?",
        requires: { cards: ["s_priya_admitted"], minTrust: 50 },
        answer: "At five past three I came past the service stairs with the linen, and Daniel was coming down from the terrace side, straightening the rug with his foot, like it mattered. He said, very gently: not a word, Priya, you were never out of the laundry. I have been frightened of that gentleness for two years.",
        gives: "s_priya_saw"
      }
    ],
    present: [
      {
        card: "laundry_rota",
        pressure: 15,
        trust: 10,
        gives: "s_priya_admitted",
        reply: "The count at twenty past three. Yes, that is my hand. I was out of the laundry — the chef and I, we meet in the kitchen when the hotel sleeps, it is against the rules. Then I took linen up. I said one o'clock because I would be sacked for the kitchen, not because of Helen. I swear it."
      },
      {
        card: "voice_memo",
        trust: 20,
        reply: "That is her voice exactly. Kindly. She was kind to everyone below stairs. Whatever she found, she would have been kind about it, and that is the worst part."
      },
      {
        card: "complaint_card",
        trust: 15,
        reply: "Room Five. Above them is the terrace. Voices at half past two — I believe them. I wish I had heard them too; then it would not only be me saying so."
      }
    ]
  },
  {
    id: "walter",
    name: "Walter Grieves",
    age: 71,
    role: "Permanent resident, Room 6.",
    color: "#9a8a6a",
    unlockedAt: 3,
    bio: "A retired shipping clerk who has lived at the Meridian for nine years and regards the hotel as a ship he refuses to leave. Dry as a bone.",
    intro: "I have lived in Room Six for nine years. The hotel is my ship and I do not intend to be put ashore. Ask your questions; I have a crossword with your name on it afterwards.",
    defaultPresent: "Never seen it. And I have seen most things in this hotel.",
    topics: [
      {
        id: "t_alibi",
        label: "What did you hear that night?",
        answer: "Nothing. I sleep like the dead, young person. It is the one reliable pleasure left at my age. The gala kept me up until midnight and then — nothing.",
        gives: "s_walter_nothing"
      },
      {
        id: "t_helen",
        label: "Did you know Helen Marlowe?",
        answer: "Thirty years of Thursdays. She beat me at chess and lied about letting me win. If she found something in those books of hers, she'd have dug at it like a terrier. It was her only vice."
      },
      {
        id: "t_door",
        label: "Tell me about the terrace door.",
        requires: { cards: ["s_walter_admitted"] },
        answer: "Half past two, give or take. The door above my ceiling went, and voices — a man and a woman — brief as a struck match. I told myself it was young love. It was not, was it."
      }
    ],
    present: [
      {
        card: "cigarette_tin",
        trust: 20,
        gives: "s_walter_admitted",
        reply: "My tin. All right — I smoke on that roof most nights, rules be damned, and that night I was up until twenty past two and left it empty as a church. What I heard after, from my room, I will tell you because Helen would have haunted me otherwise."
      },
      {
        card: "complaint_card",
        reply: "The Ashworths. Half past two, they say. For once in their lives, the Ashworths are right about something."
      },
      {
        card: "door_log",
        reply: "Half past two, near enough. Machines and I agree, which makes a change."
      }
    ]
  }
];

module.exports = { suspects, testimonies };
