// Suspects, interview topics and testimony cards for Case 2 "Curtain Call".
const testimonies = {
  s_wren_house: { title: "Wren: 'the girl in the front row'", speaker: "wren", text: "Wren says a schoolgirl in the front row clutched her programme through the whole of Act 2 and gasped at Cue 40, when the chandelier held — as if she alone in the house understood it might not. Wren has thought about her all week." },
  s_margo_alibi: { title: "Margo: 'I was locked in wardrobe'", speaker: "margo", text: "Margo says that after Celeste's last quick change she went back to wardrobe, locked the door, and mended a gown until the curtain call." },
  s_margo_loft: { title: "Margo: 'I last used the loft in October'", speaker: "margo", text: "Margo says the loft key lives on her board and she fetches cloaks from up there in autumn. She last went on the twelfth of October." },
  s_margo_confession: { title: "Margo's confession", speaker: "margo", text: "Margo breaks: Ashby stole her brother's play. She climbed the loft ladder after the last quick change, cut the line with her shears, and came back down before anyone knocked." },
  s_wren_locked: { title: "Wren: 'the wardrobe was locked at two past ten'", speaker: "wren", text: "Wren says she knocked on the wardrobe door about two minutes after ten with a torn hem. It was locked, with the 'Do not disturb' sign up, and nobody answered." },
  s_wren_shears: { title: "Wren hid the shears", speaker: "wren", text: "Wren admits she found the shears on the cutting table at a quarter past ten, sticky with something, and in a panic wrapped them up and hid them in the hamper." },
  s_wren_tobias_gone: { title: "Wren: 'Tobias wasn't at the rail'", speaker: "wren", text: "Wren says that around a quarter to ten Tobias was not at his fly rail. She thought he was ill and told nobody." },
  s_tobias_post: { title: "Tobias: 'I never left the rail'", speaker: "tobias", text: "Tobias says that in twenty-six years he has never left his rail with a batten flying, and he did not leave it in Act 2." },
  s_tobias_drink: { title: "Tobias admits he was drinking", speaker: "tobias", text: "Tobias admits he had relapsed and went to a bottle in the prop store twice in Act 2, ten minutes each time, leaving the rail unmanned. He lied out of shame." },
  s_celeste_vertigo: { title: "Celeste: 'I can't climb ladders'", speaker: "celeste", text: "Celeste says she suffers from vertigo and could not climb a stepladder, let alone a ladder to the grid." },
  s_celeste_affair: { title: "Celeste and Ashby were lovers", speaker: "celeste", text: "Celeste admits a six-year affair with Ashby. Tonight she gave him an ultimatum, and he laughed at her. She says she did not want him dead." },
  s_dorian_booth: { title: "Dorian: 'I was in the booth all of Act 2'", speaker: "dorian", text: "Dorian says he ran every cue by hand from the booth at the back of the house and did not leave until the bow." },
  s_dorian_letter_admit: { title: "Dorian sold information to Halloran", speaker: "dorian", text: "Dorian admits Halloran Developments paid him two thousand to report on the condition of the building. He did not know they planned to demolish it." },
  s_iris_desk: { title: "Iris: 'I never left the prompt desk'", speaker: "iris", text: "Iris says she called every cue from the prompt desk, from the half-hour call to the curtain call, and never left it." }
};

const suspects = [
  {
    id: "iris", name: "Iris Calloway", age: 39, role: "Stage manager. Calls every cue.", color: "#7aa0c4", unlockedAt: 1,
    look: { hair: "short", hairColor: "#2a2420", skin: "#e0b790", acc: "glasses", accColor: "#cfd6e0" },
    bio: "Precise, tired, and fiercely loyal to the show. She has run the stage for eleven years and has never missed a cue.",
    intro: "I am the stage manager, Inspector. If it happened in this building, I probably wrote it down. Ask me what you like.",
    defaultPresent: "I don't recognise that. It isn't in my book.",
    topics: [
      { id: "t_night", label: "Take me through the night.", answer: "I called the show from the prompt desk, every cue from the half-hour call to the curtain call. I never left that desk. A stage manager who leaves the desk loses the show.", gives: "s_iris_desk" },
      { id: "t_leonard", label: "How did Mr Ashby treat the company?", answer: "Like furniture. Expensive furniture, when it suited him. He changed cues at the last rehearsal and never asked anyone." },
      { id: "t_memo", label: "Tell me about the Cue 88 change.", requires: { clues: ["cue_memo"] }, answer: "He wanted the crown down to one metre for the bow. Tobias said the line was tired. Leonard said Tobias was frightened of his own shadow." },
      { id: "t_keys", label: "Who holds a key to the grid door?", requires: { clues: ["notice_board"] }, answer: "Tobias, Mr Ashby and me. I haven't been up there in a month. You can see the dust on that door." },
      { id: "t_sale", label: "Did you know about the sale?", requires: { minTrust: 15 }, answer: "Not until tonight. I found the contract in his office when I fetched the cue sheet. I told nobody. I didn't want a riot before the curtain." }
    ],
    present: [
      { card: "prompt_book", trust: 10, reply: "That's my book. Every line in my own hand. I'd give it to the coroner myself." },
      { card: "cue_memo", pressure: 5, reply: "His memo. I pinned it up. I wish I'd torn it down." },
      { card: "sale_contract", pressure: 5, trust: 5, reply: "So you found that. Then you know why I kept quiet." },
      { card: "pension_complaint", trust: 10, reply: "Six years paying into nothing. I'd have walked out months ago if there had been anywhere to go." },
      { card: "c_hatch_route", reply: "A hatch from the wardrobe loft? I'd forgotten it. It was bolted for safety years ago, I thought." },
      { card: "c_margo_in_grid", reply: "Margo? Margo, of all people? She brought me soup when my mother died." }
    ]
  },
  {
    id: "dorian", name: "Dorian Pike", age: 36, role: "Lighting designer and operator.", color: "#86b59a", unlockedAt: 1,
    look: { hair: "short", hairColor: "#1d1d22", skin: "#c99b78", acc: "none", accColor: "#222" },
    bio: "Sharp, sarcastic, always in black. He lights the Marlowe for less than it should pay and everyone knows he wants out.",
    intro: "Dorian Pike. I make the lights go up and down. I'd say I'm sorry about Leonard, but I'm still owed eight thousand pounds.",
    defaultPresent: "Never seen it. Is that all you've got?",
    topics: [
      { id: "t_booth", label: "Where were you during Act 2?", answer: "In the booth at the back of the house, same as every night. I press the buttons, I don't leave until the bow. Ask the console.", gives: "s_dorian_booth" },
      { id: "t_ashby", label: "What did you think of Ashby?", answer: "A genius with other people's money. He owed me eight thousand, and when I asked he sulked." },
      { id: "t_blackout", label: "Describe Cue 88.", answer: "Nothing dramatic. A slow fade to the bow light, Leonard on his chalk mark, the crown coming in over his head. Beautiful. Until it wasn't." },
      { id: "t_halloran", label: "Do you know Halloran Developments?", requires: { clues: ["dorian_letter"] }, answer: "Everyone's heard of them. They want this building. Ask them about it, not me." }
    ],
    present: [
      { card: "dorian_letter", pressure: 25, gives: "s_dorian_letter_admit", reply: "All right. They paid me two thousand to say what state the building was in. Roof, wiring, the lot. I needed the money. I never knew they'd knock it down." },
      { card: "light_cue_log", trust: 10, reply: "There you go. Every button, every second. I couldn't have slipped out for a cigarette if I'd tried." },
      { card: "sale_contract", pressure: 10, reply: "Flats. They're putting flats where my lighting rig hangs. Marvellous." },
      { card: "takings_book", trust: 5, reply: "Half empty all season. I told him. I told him, and he blamed the weather." },
      { card: "s_dorian_letter_admit", reply: "You've got it already. What more do you want?" }
    ]
  },
  {
    id: "celeste", name: "Celeste Marlowe", age: 44, role: "Leading lady, Queen Isolde.", color: "#d68aa8", unlockedAt: 2,
    look: { hair: "long", hairColor: "#8a3a2a", skin: "#e8c4a8", acc: "none", accColor: "#a05068" },
    bio: "Radiant on stage, brittle off it. The Marlowe was named for her great-grandfather, and she has never worked anywhere else.",
    intro: "Celeste Marlowe, darling. Yes, that Marlowe. I was on stage when it fell. I will remember the sound for the rest of my life.",
    defaultPresent: "Is that supposed to mean something to me, darling?",
    topics: [
      { id: "t_night", label: "Where were you after the interval?", answer: "In my dressing room until my call, then on stage. I was in nearly every scene, darling. Ask the stage manager's book." },
      { id: "t_heights", label: "Do you ever go up to the loft or the grid?", answer: "God, no. I can't climb a stepladder without being sick. It's in my contract.", gives: "s_celeste_vertigo" },
      { id: "t_leonard", label: "How well did you know Ashby?", answer: "Twenty years we worked together. That is all I intend to say." },
      { id: "t_margo", label: "What is Margo Dane like?", answer: "Three years she's dressed me. Quiet as a church. Never takes a day off. She mends everything. I'd be lost without her hands." },
      { id: "t_affair", label: "Were you and Ashby involved?", requires: { minTrust: 25 }, answer: "Six years. He promised to leave his wife every Christmas. Tonight I gave him an ultimatum and he laughed. I wanted to slap him. I never wanted him dead.", gives: "s_celeste_affair" }
    ],
    present: [
      { card: "celeste_note", pressure: 15, gives: "s_celeste_affair", reply: "That is mine. Yes. Six years, Inspector, and he laughed at me. I wrote that note, I didn't write his death sentence." },
      { card: "contract_rider", trust: 10, reply: "Mercy. My vertigo. Leonard thought it was hilarious." },
      { card: "quick_change_roster", trust: 10, reply: "Margo and little Wren. Two minutes each, they're miracles. Then I'm on stage and I think of nothing but my lines." },
      { card: "programme_night", trust: 10, reply: "Isolde. My best part. Pity about the author." },
      { card: "fenn_photo", pressure: 5, reply: "Who is that? Is that Margo? I never knew she was ever that young." }
    ]
  },
  {
    id: "tobias", name: "Tobias Reed", age: 55, role: "Head flyman. Runs the rigging.", color: "#c9a56a", unlockedAt: 2,
    look: { hair: "cap", hairColor: "#9a9a9a", skin: "#d2a07a", acc: "cap", accColor: "#1c2a44", stache: true },
    bio: "Gruff, careful, a man who tests every knot twice. He has worked the fly rail for twenty-six years and warned Ashby about the line.",
    intro: "Tobias Reed. I fly the scenery. That line was mine to look after, and I told him it was tired. Say what you've come to say.",
    defaultPresent: "Never seen it in my life.",
    topics: [
      { id: "t_post", label: "Did you leave your post during Act 2?", answer: "Never. Twenty-six years on this rail and I've never left it with a batten flying.", gives: "s_tobias_post" },
      { id: "t_line", label: "Was that line worn?", answer: "Tired, yes. I told Leonard in September. He told me to keep my opinions for the pub." },
      { id: "t_check", label: "Who checked batten 4 tonight?", requires: { clues: ["rig_log"] }, answer: "I did, twice. Twenty to nine, and again before the second act. Sound as a bell." },
      { id: "t_grid", label: "Who goes up to the grid?", requires: { clues: ["notice_board"] }, answer: "Me and the stage manager. Ashby, if he wanted to look down on someone. Nobody else. The door's locked." },
      { id: "t_drink", label: "Are you all right, Tobias?", requires: { minTrust: 30 }, answer: "No. Five years dry, Inspector. Tonight Leonard's memo broke something in me. I went to the bottle in the prop store, twice, ten minutes each. The rail was empty. That's why I lied.", gives: "s_tobias_drink" }
    ],
    present: [
      { card: "prop_bottle", pressure: 25, gives: "s_tobias_drink", reply: "Damn you. All right. Twice I left the rail, once around a quarter to ten. I was ashamed. I'd never have touched that line." },
      { card: "flyman_kit", trust: 10, reply: "My kit. Look at that knife, it hasn't been out of the roll in a month. I'm no butcher of ropes." },
      { card: "notice_board", trust: 10, reply: "Aye. Three keys. I've kept that door locked for twenty years." },
      { card: "cue_memo", trust: 10, reply: "He did that to me too. One metre, on a tired line. He never looked up." },
      { card: "rig_log", pressure: 10, reply: "I signed that. The second check, maybe I signed before I did it. Sloppy. I looked at the line, I swear it." }
    ]
  },
  {
    id: "margo", name: "Margo Dane", age: 47, role: "Wardrobe supervisor.", color: "#9aa3ad", unlockedAt: 3,
    look: { hair: "bob", hairColor: "#6a6a6a", skin: "#e2b894", acc: "cardigan", accColor: "#9a9a98" },
    bio: "Soft-spoken and exact. She has dressed the company for three years and never raised her voice once.",
    intro: "Margo Dane, wardrobe. I keep the costumes and I keep quiet. If you need a button, I'm your woman.",
    defaultPresent: "I don't think that is anything to do with wardrobe, Inspector.",
    topics: [
      { id: "t_alibi", label: "Where were you after Celeste's last quick change?", answer: "Back in wardrobe, mending the train of Isolde's gown. I locked the door so nobody would trip over me. I stayed till the bow.", gives: "s_margo_alibi" },
      { id: "t_ashby", label: "What did you think of Ashby?", answer: "He paid late and he talked loudly. I made his actors beautiful and he never learned my name properly." },
      { id: "t_loft", label: "Do you use the loft?", requires: { clues: ["signout_book"] }, answer: "The loft key hangs on my board. I fetch cloaks in the autumn. I last went up on the twelfth of October.", gives: "s_margo_loft" },
      { id: "t_play", label: "What do you think of The Glass Crown?", requires: { clues: ["programme_night"] }, answer: "A lovely play. Everyone says so. Mr Ashby wrote it, doesn't it say so in the programme?" },
      { id: "t_brother", label: "Have you any family, Margo?", requires: { clues: ["fenn_photo"] }, answer: "I had a brother. He died a long time ago. I would rather not speak of him." },
      { id: "t_confess", label: "Tell me what you did tonight.", requires: { minPressure: 85 }, answer: "Twenty-seven years I carried Daniel's play in my head. Leonard put his name on it, and in court he called me hysterical. I wanted him to take a bow under his own stolen crown. After the last change I climbed the loft ladder. I cut the line with my shears and came down before anyone knocked.", gives: "s_margo_confession" }
    ],
    present: [
      { card: "hamper_shears", pressure: 15, reply: "The wardrobe shears. They are always being mislaid. This company is careless." },
      { card: "christmas_photo", pressure: 5, reply: "A good evening, that one. Everyone is a dear at Christmas." },
      { card: "hatch_thread", pressure: 20, reply: "Wool snags on everything in this building. I have been mending it for three years." },
      { card: "playbill_1999", pressure: 15, reply: "The Little Arbour. It was a charming little theatre. It burned down, you know." },
      { card: "fenn_photo", pressure: 20, reply: "That is private. That is my brother. Where did you get that?" },
      { card: "court_letter", pressure: 25, reply: "That was a long time ago, and a different woman." },
      { card: "c_play_stolen", pressure: 20, reply: "Everybody steals, Inspector. It is the theatre." },
      { card: "c_margo_is_fenn", pressure: 25, reply: "Yes. I am Daniel Fenn's sister. That does not make me a murderer." },
      { card: "s_wren_locked", pressure: 25, reply: "I may have stepped out. I felt unwell. I sat in the stairwell until it passed." },
      { card: "c_margo_in_grid", pressure: 30, reply: "You have wool, and ladders, and a frightened girl. You have no confession." }
    ]
  },
  {
    id: "wren", name: "Wren Adair", age: 23, role: "Assistant stage manager.", color: "#e0a458", unlockedAt: 3,
    look: { hair: "long", hairColor: "#c8a050", skin: "#f0cdb0", acc: "none", accColor: "#4a6a8a" },
    bio: "Quick, nervous, endlessly helpful. It is her first job in the theatre and she is terrified of losing it.",
    intro: "Wren. I'm the assistant. I run messages and fetch things. I didn't see anything, honestly, I just want to go home.",
    defaultPresent: "Sorry. I don't know what that is. Sorry.",
    topics: [
      { id: "t_night", label: "What did you do in Act 2?", answer: "Wings, mostly. Quick changes with Margo at half past nine and again just before ten to ten. I fetch props and run messages. I never go near the grid." },
      { id: "t_tobias", label: "Did you see Tobias during Act 2?", requires: { minTrust: 15 }, answer: "He wasn't at the rail around a quarter to ten. I thought he was being sick. I didn't say anything. He's lovely to me.", gives: "s_wren_tobias_gone" },
      { id: "t_knock", label: "Did you see Margo after the last quick change?", requires: { minTrust: 25 }, answer: "I went to wardrobe about two minutes after ten with a torn hem. The door was locked and the 'Do not disturb' sign was up. I knocked twice and nobody answered. Then the show ended and everyone started screaming.", gives: "s_wren_locked" }
    ],
    present: [
      { card: "quick_change_roster", trust: 20, reply: "That's us. Margo is amazing, she doesn't even look at the pins." },
      { card: "christmas_photo", trust: 15, reply: "Oh, the paper hats. Margo gave everyone a mince pie. She remembers things like that." },
      { card: "shadow_board", pressure: 10, reply: "That's where they live. Normally." },
      { card: "hamper_shears", pressure: 20, gives: "s_wren_shears", reply: "All right. I found them on the cutting table at quarter past ten, sticky. I panicked. I thought I'd be blamed. I wrapped them up and put them in the hamper." },
      { card: "prompt_book", trust: 5, reply: "Iris's book. She never lets anyone touch it." }
    ]
  }
];

module.exports = { suspects, testimonies };
