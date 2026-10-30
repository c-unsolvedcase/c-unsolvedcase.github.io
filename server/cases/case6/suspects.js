// Suspects, interview topics, contradictions and testimony cards for Case 6.
// Topics can be gated by shared clue/card ids, pressure (0-100) and trust (0-100).
// pressure rises when you catch lies; trust rises when you are gentle.

const testimonies = {
  s_raman_stay: {
    title: "Raman, at the door",
    speaker: "raman",
    text: "At the museum door, Dr. Raman says she has a flight to a conference she no longer cares about. 'Ingrid and I fought about a label. A label. If I could take back one afternoon…' She agrees to stay until the morning."
  },
  s_vale_statement: {
    title: "Vale: 'I was at the gala, then in my rooms'",
    speaker: "vale",
    text: "Vale says his evening was the gala and nothing else: the speeches he half-wrote, the donors he half-listens to, a turn about the gallery at ten to show a trustee the Karash case — and then his rooms above the workshop by midnight, where he slept badly, as he always does before an opening. Dr. Sauer's death is a tragedy and an embarrassment in proportions he is still measuring. He has said all of this to the police already, in the same order, with the same pauses."
  },
  s_vale_workshop: {
    title: "Vale: 'The crown never left its case in my care'",
    speaker: "vale",
    text: "Vale says the crown's closed-week journey is the most ordinary page in the log: the band's backing had lifted, he took the piece to the workshop himself, rebacked it at his own bench, and returned it the same week. The registrar examined it on its return, as the condition report says. 'A crown does not leave this building, detectives. It barely leaves its cushion. Whatever Dr. Sauer imagined she saw, the piece has been under glass, in my care, unmoved — and I have minded it for twenty-six years.'"
  },
  s_vale_confession: {
    title: "Vale's confession",
    speaker: "vale",
    text: "Vale breaks at last, without drama, like a man laying tools in a row. He made the replica over two years because the true crown was, he says, the one object in the world that was ever entirely his — and because a quiet man in Geneva had named a price for it that was a life. The registrar wrote what he needed written because he kept her letter; he has kept many people's letters. Sauer found the swap in an afternoon, the way he always feared exactly one person could, and gave him until nine o'clock out of a courtesy he did not deserve. The slip, the camera, the chamber — 'I composed it,' he says, 'the way I composed the crown. I am very good at making things that are not what they seem. It is the whole of my talent, detectives. It always was.'"
  },
  s_bea_rounds: {
    title: "Lindqvist: 'The records are complete and correct'",
    speaker: "bea",
    text: "The registrar says the museum's records are her life's work and she stands by every line: the movement log, the condition report, the night checks as Feld's staff phoned them in. She examined the crown on its return in closed week — she is 'quite certain'. The gala-night 23:00 line in the security log is in her hand because the security office sends its checks through her office for fair copying, 'as always'. She says all of this to a point on the wall behind the interviewer's shoulder."
  },
  s_bea_letter: {
    title: "Lindqvist acknowledges the Ashworth letter",
    speaker: "bea",
    text: "Shown kindness about 2016, the registrar admits what the annotations already say: the Ashworth authentication was hers. She was twenty-nine, the bequest was the museum's salvation, the letter's hand 'looked right', and she let herself be flattered into certainty. When the letter was shown to be a fabrication, the museum buried the matter to save the bequest, and she has carried it since like a stone in a pocket. 'It was withdrawn. It was finished. Nobody kept anything — there was nothing to keep. The drafts were destroyed.' She says the last sentence like a woman reciting weather from a country she no longer lives in."
  },
  s_bea_admits: {
    title: "Lindqvist admits both falsifications",
    speaker: "bea",
    text: "She tells it whole at last, in her registrar's order, as if entering it in a log. In closed week Adrian Vale asked her to write the condition report — examined, no change — for a crown she had not seen: she was on leave; she never entered the building; he said the piece had merely been rebacked and the tour's insurance needed the page. She signed because he let her understand, without ever saying it, that the Ashworth draft was safe in a deed box with her name on it. On gala night he telephoned her office at half past nine — four minutes — and asked her to enter the 23:00 wing check in advance: he would make the check himself, short-staffed, gala night; she wrote it with her office pen, at a quarter to ten, and has not slept since the morning round. 'I never asked what either page was for,' she says. 'That was the arrangement. He held the letter, and I did not ask questions. Ask me what I am, detectives, and I will tell you: I am the signature on both crimes, and I never knew there were two.'"
  },
  s_herrera_casting: {
    title: "Herrera: 'Those are my seams. I cast that base.'",
    speaker: "herrera",
    text: "Herrera looks at the displayed crown the way a man looks at his own handwriting on a stranger's letter. The casting seams along the band are his — the registration nick, the parting line, the little flaw at the third claw that he remembers filing and deciding to leave. Two years ago the chief restorer had him cast a circlet at the Karash measure, as a handling copy for the schools programme, and collected the casting himself, and praised it, and Herrera thought no more of it until he stood at the case this morning and saw his own seams under the glass, holding a synthetic stone. 'I did not make a crown,' he says. 'I made a base. He did the rest — the chasing, the ageing, the stone. But the base is mine, and I will say so anywhere, to anyone, in writing.'"
  },
  s_herrera_voices: {
    title: "Herrera: 'I heard them through the workshop door'",
    speaker: "herrera",
    text: "Herrera says he was leaving by the workshop's side door at twenty to seven on gala day when Dr. Sauer came down the corridor like weather. He stayed, out of sight, because the door was between them and his coat was inside. He heard her voice, quite calm: '2019.' And: 'You certified it yourself, Adrian, with me in the room.' And something about nine o'clock, and the director, and the insurers. He heard Vale say almost nothing — one sentence, too low to catch — and then Sauer passed him in the corridor with her notebook under her arm, and nodded, and did not see him at all. He has been hearing it since, every hour."
  },
  s_feld_rounds: {
    title: "Feld: 'My rounds are in the book'",
    speaker: "feld",
    text: "The security supervisor says the night is in his book and his book is honest: doors at eight, the gala floors hourly, the secure wing by the book — and at twenty past eleven, coming through the wing corridor, he saw the fumigation chamber's panel lit with 'cycle complete' and thought no more of it than of a dishwasher finishing: the chamber runs when the conservators load it. The door log was already written up fair by the registrar's office, as usual. He found Dr. Sauer at twenty to seven on the opening round, in the chamber chair, looking asleep, and he knew before he touched her wrist that the museum had changed forever."
  },
  s_feld_file: {
    title: "Feld admits the copier",
    speaker: "feld",
    text: "Feld admits it with the air of a man paying a fine he has rehearsed: from twenty past ten until the hour, he was in the director's office, copying his own personnel file — thirty-four pages — ahead of next week's disciplinary hearing, because the file is 'a work of fiction with my name spelled right' and he meant to have his own copy before the museum used it. He left the office at the hour, resumed his rounds, and was at the far end of the building from the secure wing at ten past eleven. 'Forty minutes off my rounds on the one night it mattered,' he says. 'For a photocopier. Write that on my record too — it's the truest thing in it.'"
  },
  s_greta_certification: {
    title: "Lindholm: 'I brought Sauer back myself'",
    speaker: "greta",
    text: "The director says the certification was her own insistence, and her own shame is elsewhere: the insurers required a scholar of standing; she overruled the appointments committee to engage Sauer, the acquisition examiner, over two cheaper names. What she did not do — what she confesses to the insurers before anyone else — is the second examination the museum's own charter recommends: she waived it in February, to keep the gala announcement, and the tour's dates, and the donors' pleasure. 'I saved six weeks and a fee,' she says, 'and I have been doing the arithmetic of that saving since twenty to seven this morning.'"
  },
  s_greta_noslip: {
    title: "Lindholm: 'My office sent no slip'",
    speaker: "greta",
    text: "The director is absolute, in the way of a woman who has run a building for nineteen years: her office issues no slips after six o'clock, uses no unsigned messages, and has never in its history summoned an examiner to a workroom by note. The reserve diadem's examination was scheduled, in her own diary, for Monday, with Sauer, in the gallery, in daylight. 'Whoever wrote that slip, detectives, knew my office's voice and my museum's paper, and knew what Dr. Sauer wanted. That is a short list of persons. It does not include me.'"
  },
  s_raman_row: {
    title: "Raman: 'We argued about a dead king'",
    speaker: "raman",
    text: "Dr. Raman does not minimise it: at half past four, in the gallery, in front of the case, she and Ingrid Sauer argued about the Karash attribution — whether the crown was Aurel's or his brother's — loudly, professionally, and with forty witnesses, the way they had argued at conferences for fifteen years. 'She was wrong about the brother,' Raman says, 'and I was enjoying telling her so, because she was never wrong about anything and it was a pleasure to catch her at it. I have been catching her at things since we were students. I would give — ' She stops. 'It was an argument about the ninth century. Ask anyone who heard it. There were forty.'"
  },
  s_raman_left: {
    title: "Raman: 'I left at five past nine'",
    speaker: "raman",
    text: "Raman says she left with the first wave, deliberately, before the speeches: claimed her coat at five past nine, took the taxi the cloakroom called, and was home in the rain by half past, where she marked student essays and thought about the ninth century. The cloakroom stub and her conscience agree. 'I have been a suspect in exactly one thing before,' she says, 'a library book, in 1998. I had eaten the fine for a month before I found it in my own bag. I am not a subtle woman, detectives. I do not do things quietly, as forty witnesses to my afternoon will tell you.'"
  },
  s_jonas_maintenance: {
    title: "Reber: 'The camera went down on Vale's chit'",
    speaker: "jonas",
    text: "Reber says the wing camera's gala-night nap was none of his invention: the chit came from the chief restorer in the morning — corridor camera down 22:40 to 23:30, gala traffic expected, 'keep the log simple' — and taking cameras down for gala nights is the most ordinary favour in his working life; the catering cameras go down for the same reason. He set the timer, logged it, and thought about it never again until this morning. 'Vale signs half the chits in this building,' he says. 'His signature is the museum's wallpaper. You stop reading it.'"
  },
  s_jonas_photos: {
    title: "Reber: 'My contact sheet keeps the honest clock'",
    speaker: "jonas",
    text: "Reber says his camera is the one honest clerk in the building: the contact sheet's times are burned in by the machine and cannot be argued with. On it: Raman leaving in the rain at five past nine; Sauer at the long table until late, listening to speeches she despised; and — he is almost apologetic — an accidental frame at 22:44 of the hall's far end, where a tall figure in restorer's grey crosses toward the secure-wing stairs while the director is mid-sentence. 'I didn't fire that frame on purpose,' he says. 'The camera fired it. Make of it what the insurers pay you to make of it.'"
  }
};

const suspects = [
  {
    id: "vale",
    name: "Adrian Vale",
    age: 52,
    role: "Chief restorer, twenty-six years at the Fenwick.",
    color: "#5a4a6a",
    unlockedAt: 1,
    bio: "The museum's hands. Vale has conserved half the objects in the building, built its workshop from a bench and a kiln into the envy of two countries, and speaks of the Sun Crown — which he conserved at its acquisition, before Sauer certified it — the way other men speak of an only child. He is courteous, exact, and tired in the manner of a man who has been indispensable too long.",
    intro: "Detectives. Forgive the workshop coat; I have not been home. Twenty-six years I have minded this museum's treasures, and I minded Dr. Sauer's visit as I mind everything here — carefully, and at a distance. She examined my crown yesterday afternoon — the museum's crown — and this morning she is dead in my fumigation chamber. Ask what you must. I have already told the police a great deal, and I find repetition restful.",
    defaultPresent: "An object. Everything in this building is an object, detectives, until it is a document. Which are you offering me?",
    topics: [
      {
        id: "t_statement",
        label: "Where were you on gala night?",
        answer: "At the gala, where my work was on every wall — the speeches, which I helped to draft, the donors, who require watering like plants — and at ten I took a turn about the gallery to show a trustee the Karash case. After midnight I went up to my rooms above the workshop and slept badly, as I always do before an opening. The chamber, the wing — other people's kingdoms. I found them this morning as you did: as the scene of a tragedy I do not understand.",
        gives: "s_vale_statement"
      },
      {
        id: "t_workshop",
        label: "The crown went to your workshop in closed week.",
        answer: "It did, and the log says why: the band's backing had lifted — two hundred years of a cushion's damp, detectives, it happens to gold as to men. I rebacked it at my own bench, the registrar examined it on its return and certified the condition, and it went back under its glass the same week. A crown does not leave this building. It barely leaves its cushion. Whatever Dr. Sauer believed she saw yesterday, the piece has been in its case, in my care, undisturbed — and I have minded it for twenty-six years.",
        gives: "s_vale_workshop"
      },
      {
        id: "t_confrontation",
        label: "Dr. Sauer confronted you at twenty to seven.",
        requires: { clues: ["sauer_notebook"] },
        answer: "…She came to the workshop corridor, yes, with one of her theories — the weight, the stone, the usual romance of the expert who has travelled far and must find something. I told her the crown had been rebacked and that old gold settles; I told her her 2019 figures were made in another room with another balance. She said she would trouble the director in the morning, and I said the director would enjoy it. That is the whole of our terrible confrontation, detectives. Scholars. We were raising our voices about grams."
      },
      {
        id: "t_confess",
        label: "Tell me about the crown you made, Adrian.",
        requires: { minPressure: 80 },
        answer: "…You have the statue open, then. Or the boy talked. It hardly matters which; I have been listening for that sound for seven weeks, and there is a kind of rest in hearing it. I made it. Two years, in my own workshop, the finest work of my life — better than the original, if we are confessing: the original is a crude thing beside it. It was to go abroad with the tour, and the true crown was to come to me quietly, through Geneva, and that would have been fair — twenty-six years, detectives, and the museum calls me staff. As for Ingrid — she gave me until nine in the morning. Nine in the morning. I composed the night the way I compose everything, and I told myself she would be found asleep and it would be an accident with a strange room. She was the only person alive who could see it. You understand that she was the only person alive who could see it.",
        gives: "s_vale_confession"
      }
    ],
    present: [
      {
        card: "display_crown",
        pressure: 10,
        reply: "My crown — the museum's crown. Beautiful, is it not? I conserved it at the acquisition. I know every claw of that setting the way you know your own handwriting."
      },
      {
        card: "crown_flake",
        pressure: 10,
        reply: "A stone chip in a tube. Dr. Sauer sampled everything she ever looked at; she would have sampled the moon. It proves she examined the piece. Nobody has ever doubted she examined it."
      },
      {
        card: "geneva_invoice",
        pressure: 10,
        reply: "Workshop orders. Spinels for the schools handling tray, alloy for repairs — a restorer's groceries, detectives, over two years. You will find the same in every workshop in Europe, in pettier handwriting."
      },
      {
        card: "lure_slip",
        pressure: 10,
        reply: "A printed slip. On the booth's paper, I am told — a paper half the building can reach. The director's office is careless with its courtesies; I have told Greta so for years."
      },
      {
        card: "camera_request",
        pressure: 15,
        reply: "My signature, and I do not deny it: the corridor camera dazzles the gala guests' photographs, and I have it taken down on gala nights as a courtesy to the development office. It is a favour so routine the technician could forge the chit from memory. Ask him."
      },
      {
        card: "s_herrera_casting",
        pressure: 15,
        reply: "Tomás is a gifted boy and a frightened one, and frightened boys say what the room wants to hear. A handling copy, detectives — for schoolchildren to hold. That it resembles the crown is the entire point of a copy."
      },
      {
        card: "chamber_tape",
        pressure: 15,
        reply: "The chamber's tape. V-01 is the workshop code — the workshop's, detectives, not a fingerprint. The conservators use it, the engineers use it, it is written on the panel in pencil, as your own people will have seen."
      },
      {
        card: "requisition",
        pressure: 20,
        reply: "…The requisition. Kept in my drawer because my drawer is where workshop paper lives. If the signature is not the boy's — and I am not a graphologist, detectives — then the boy signed carelessly, or the schools office copied it. You are asking a restorer to answer for handwriting."
      },
      {
        card: "original_crown",
        pressure: 25,
        reply: "…So. The statue is open, and the crown is in your hands, and it is heavier than mine. I wondered, when she weighed it on the Tuesday night — no. I wondered nothing. You have the crown, detectives. Ask me what else you need, and I will consider the shape of my remaining life while I answer."
      }
    ]
  },
  {
    id: "bea",
    name: "Beatrice Lindqvist",
    age: 44,
    role: "Registrar of the Fenwick — keeper of its paper.",
    color: "#4a5a74",
    unlockedAt: 1,
    bio: "The museum's memory. Every accession, movement, loan and condition report for nineteen years is in Lindqvist's hand or under her stamp. She is quiet, exact, and visibly frightened of this interview, which she would be anyway: registrars are the people history blames when paper and truth part company.",
    intro: "Detectives. I have prepared the files you will need — the movement record, the condition reports, the night logs, all complete. The museum's paper is in order. I would ask you to remember, while you work, that paper is kept by people, and people in this building have had a very bad morning. Ask what you must. I will answer from the record.",
    defaultPresent: "That is not a document I keep. The record is large, detectives, and my part of it is exact; outside my part, I am only a witness like the others.",
    topics: [
      {
        id: "t_records",
        label: "Walk me through the crown's records.",
        answer: "Willingly. The crown: received 2019, examined by Dr. Sauer, installed. Six years undisturbed. Closed week this spring: to the workshop for the rebacking of its band, returned the same week, condition examined by me on its return — no change. The gala night security log was kept by Mr. Feld's staff and copied fair through my office, as always. The records are complete, detectives, and they are correct. They are, if I may say so, the one thing in this museum that is never anything else.",
        gives: "s_bea_rounds"
      },
      {
        id: "t_bequest",
        label: "Tell me about the Ashworth Bequest, 2016.",
        answer: "…The bequest saved this museum. I was twenty-nine and the provenance letter was the founding document, and I authenticated it — the hand looked right, the seal was right, I was so sure, and being sure felt like being brilliant. When it was shown to be a fabrication, the museum withdrew the authentication quietly and the donor was never told, to save the gift. The drafts were destroyed. All of them. It was finished, detectives. It has been finished for ten years.",
        trust: 20,
        gives: "s_bea_letter"
      },
      {
        id: "t_leave",
        label: "You were on leave for the whole of closed week.",
        requires: { clues: ["leave_chit"] },
        answer: "…The leave chit is a year old and the office keeps everything; you have been thorough. Yes. I was away that week — a walking holiday, booked in January. The condition report was — the report was prepared from the workshop's account and the photographs, and I signed it on my return, as registrars do, on the word of the chief restorer. It is not — it is not how it should be done. It is how it was done, that spring, by everyone, for everything. The museum was closed and the tour was coming."
      },
      {
        id: "t_admits",
        label: "Beatrice. We know about the letter. Tell us the rest.",
        requires: { cards: ["c_blackmail"], minTrust: 60 },
        answer: "…Then you know the shape of the room I have lived in. He never threatened me, detectives — that is the refinement of it. He would ask for a page, a signature, a small untruth, and he would mention the bequest the way one mentions weather, and I would understand. In closed week I signed the condition report for a crown I never saw — I was on leave; he knew I was on leave; that was rather the point of asking me. On gala night he telephoned my office at half past nine and asked me to enter the eleven o'clock wing check in advance — he would make the check himself, short-staffed, gala night — and I wrote it at a quarter to ten, in my office pen, and I did not ask why, because not asking was the arrangement. I did not know a woman would die. I want that in whatever record you are keeping. I did not know — and I did not ask — and those are not the same innocence.",
        gives: "s_bea_admits"
      }
    ],
    present: [
      {
        card: "lindqvist_letter",
        trust: 30,
        reply: "…That is my draft. My pencil. My stamp. It was supposed to be destroyed ten years ago — I was told it was destroyed; I have the memorandum somewhere that says so. Where — where did you find this? No. Do not tell me. I think I would rather you told me everything else first."
      },
      {
        card: "movement_log",
        trust: 15,
        reply: "My hand, yes. The closed-week entries are mine. The return entry, the condition line — mine. I keep the movement record for every object in this building, detectives. It is — it was — the most trusted paper in the museum."
      },
      {
        card: "security_log",
        trust: 15,
        reply: "…The gala-night log. Fair copying passes through my office; hands vary; inks vary. You are looking at the eleven o'clock line. Everyone looks at the eleven o'clock line, in the end. It is in my pen. I am not going to insult you about the pen."
      },
      {
        card: "exchange_log",
        pressure: 10,
        reply: "The exchange log. Half past nine, workshop to my office, four minutes. The porters write down everything; it is their one pleasure. Yes, he called me. The museum was short-staffed and the gala was loud and he called me about — about the night's arrangements, detectives. That is what the call was about, as far as this page knows."
      }
    ]
  },
  {
    id: "herrera",
    name: "Tomás Herrera",
    age: 29,
    role: "Assistant restorer — Vale's right hand in the workshop.",
    color: "#7a5a34",
    unlockedAt: 2,
    bio: "A brilliant young caster from a family of founders, two years at the Fenwick and still dazzled to be there. He does whatever the chief restorer asks, keeps the workshop's benches cleaner than his own kitchen, and has been crying, on and off, since the morning round — which he would do anyway, his colleagues say, about a broken pot.",
    intro: "Detectives — thank you for — I mean, I am sorry, I have been — the chamber is my room too, I load the batches, I — ask me anything. Anything at all. I have nothing to hide except being frightened, and I am not managing to hide that either.",
    defaultPresent: "I — that is not from my bench. The workshop keeps everything labelled; if it is not labelled it is not mine. Mr. Vale's bench I do not touch. Nobody touches Mr. Vale's bench.",
    topics: [
      {
        id: "t_voices",
        label: "You were near the workshop at twenty to seven.",
        answer: "I was leaving — my coat was inside, the side door — and Dr. Sauer came down the corridor like weather, and I stayed behind the door because she had that face, the examiner's face, and I am junior. I heard her, quite calm: '2019.' And 'You certified it yourself, Adrian, with me in the room.' And nine o'clock, and the director. I did not hear him answer properly — one sentence, low. Then she passed me with her notebook under her arm and nodded, and didn't see me. I have been hearing it since. Every hour, detectives. I should have said it to the police first and I am sorry.",
        gives: "s_herrera_voices"
      },
      {
        id: "t_hands",
        label: "Look at the crown in its case. Look at the band.",
        requires: { clues: ["casting_mould"] },
        answer: "…That is my seam. That is my registration nick, and my parting line, and the flaw at the third claw that I filed and decided to leave because a handling copy does not need to be perfect. Two years ago Mr. Vale had me cast a circlet at the Karash measure — a handling copy, for the schools programme, he said — and he collected the casting himself, and praised it, and I was so proud I could have — and this morning I stood at that case and saw my own work under the glass with a stone in it. I did not make a crown, detectives. I made a base. He did the rest. But the base is mine and I will say so anywhere, to anyone, in writing.",
        gives: "s_herrera_casting"
      },
      {
        id: "t_mould",
        label: "The mould was hidden in your locker.",
        requires: { clues: ["casting_mould"] },
        answer: "I took it from the mould shelf yesterday — no, the day before the gala, when the workshop was being tidied for the opening and Mr. Vale said the old moulds were to be thrown out. I could not throw it out. It was my best work and it was — I told myself it was vanity. Then this morning, with Dr. Sauer dead and the gallery full of police, I understood it might be evidence, and I was too frightened to bring it forward, and too frightened to destroy it. It has been under my overall for two days judging me. Take it. Please take it quickly."
      }
    ],
    present: [
      {
        card: "casting_mould",
        trust: 20,
        reply: "My mould. The nick is mine — I cut it without thinking, the way my father cuts his, on everything. If that mould has been used for anything but the schools copy — detectives, I want it written down that I am showing it to you myself."
      },
      {
        card: "requisition",
        pressure: 20,
        reply: "…That is my name. That is — it is shaped like my name. I never signed this. I never wrote 'schools programme' in my life; the schools copy was Mr. Vale's phrase, in his office, out loud. Whoever wrote this copied my signature off the timesheets. Oh God. Oh God, detectives, that is why he collected the casting himself."
      },
      {
        card: "display_crown",
        pressure: 10,
        reply: "I cannot look at it for long, if you will forgive me. The base is — I keep seeing the base. He aged it beautifully. Nobody ages metal like Mr. Vale. That is what makes it terrible: it is beautiful work, and all of it is a lie with my seams in it."
      }
    ]
  },
  {
    id: "feld",
    name: "Marcus Feld",
    age: 46,
    role: "Security supervisor — keeper of the night.",
    color: "#3f5a4a",
    unlockedAt: 3,
    bio: "Ex-military police, eleven years guarding the Fenwick, proud of a night record with nothing on it. He found Sauer's body on the opening round and has been standing straighter ever since, the way men do over a drop. There is a disciplinary hearing next week with his name on it, which the whole building knows and nobody mentions.",
    intro: "Detectives. Feld, security. I found her, at twenty to seven on the opening round, and I'll thank you to keep this interview to the facts, because the facts are what I have. The museum's nights are mine and nothing has ever happened on them. Until this one. Ask.",
    defaultPresent: "Not security's concern, that. My concern is doors, rounds, and who was where — and on those I can be exact to the minute, because my book is exact.",
    topics: [
      {
        id: "t_rounds",
        label: "Talk me through the night's rounds.",
        answer: "Doors at eight, gala floors hourly, the wing by the book — the log is in the archives and it reads as it happened. At twenty past eleven I came through the secure-wing corridor and the fumigation chamber's panel showed 'cycle complete'. I thought what anyone thinks: the conservators loaded a batch before the gala and the machine had finished it. I did not open the door. There was no reason on earth to open the door. I keep coming back to that, detectives. There was no reason — except that she was in there.",
        trust: 15,
        gives: "s_feld_rounds"
      },
      {
        id: "t_gap",
        label: "Your rounds have a hole in them, 22:20 to 23:00.",
        requires: { clues: ["copier_log"] },
        answer: "…A hole. You have been reading machine logs; machines have no mercy and no context. I was — there is a matter of a hearing next week, detectives, a disciplinary matter, trumped up by people who have never stood a night round in their lives. Where I was between twenty past ten and the hour is my business and the museum's, and it was nowhere near the secure wing, and I will say that on any paper you like."
      },
      {
        id: "t_file",
        label: "Marcus. The copier logged a personnel file at 22:31.",
        requires: { minTrust: 40 },
        answer: "…Thirty-four pages. Mine. I copied my own personnel file, in the director's office, from twenty past ten until the hour, because the hearing next week is built on that file and the file is a work of fiction with my name spelled right, and I meant to have my own copy before they used it on me. I left at the hour and resumed my rounds, and at ten past eleven I was at the far end of this building from that panel. Forty minutes off my rounds on the one night it mattered — for a photocopier. Put it on my record with the rest. It's the truest thing in it.",
        gives: "s_feld_file"
      }
    ],
    present: [
      {
        card: "security_log",
        trust: 15,
        reply: "My book — mostly. My lines are biro, my hand, my hours, and they are true. The eleven o'clock line is not mine and I never made that check, because the check was already written when I came to write it. Ask the registrar whose pen that is. I've been asking myself since six forty."
      },
      {
        card: "chamber_tape",
        trust: 10,
        reply: "V-01. The workshop code. It's the conservators' code — the engineers', the chief restorer's. Security has its own and it isn't that one. Whoever ran that chamber at ten past eleven, detectives, it was not security. We were — I was — elsewhere, and God forgive me for the elsewhere."
      },
      {
        card: "contact_sheet",
        trust: 10,
        reply: "The photographer's sheet. Twenty-two forty-four, the hall's far end — that's the wing stairs, and that is not one of my staff, and it is not me. Grey coat. Tall. I know that coat, detectives. Every man in this building knows that coat."
      }
    ]
  },
  {
    id: "greta",
    name: "Greta Lindholm",
    age: 63,
    role: "Director of the Fenwick for nineteen years.",
    color: "#6a6248",
    unlockedAt: 3,
    bio: "The director built the modern Fenwick: the donors, the gala, the loan tour that was to put the museum on the world's circuit. She speaks in completed paragraphs and has plainly decided to survive this by candour, which in a director is either innocence or the most advanced form of its opposite.",
    intro: "Detectives. You have the building, the staff, and my entire cooperation, in that order of availability. I engaged Dr. Sauer myself, I waived a rule of my own charter to do it quickly, and I will answer for both decisions in any forum you choose. What I will not do is pretend this is anything but what it is: a catastrophe, in my museum, on my night. Ask.",
    defaultPresent: "Paper flows uphill to my desk eventually, detectives, but I am not its keeper. The registrar will serve you better on documents; I serve you on decisions, and God knows there are enough of those to answer for.",
    topics: [
      {
        id: "t_certification",
        label: "Why Sauer? And why so fast?",
        answer: "Because she was the acquisition examiner and the only living person who had held the crown — the insurers wanted standing, and she was standing itself. My shame is the second examination: our charter recommends one before any loan, and I waived it in February, to keep the gala announcement and the tour's dates and the donors' pleasure. Six weeks and a fee, detectives. I saved them both, and I have been doing that arithmetic since twenty to seven this morning, and it does not improve.",
        gives: "s_greta_certification"
      },
      {
        id: "t_tour",
        label: "What did the tour mean to the museum?",
        answer: "Everything my nineteen years were for. Two years abroad, three capitals, the Fenwick's name in lights that are not its own — and the insurance, the sponsors, the endowment that follows the name. The crown was the tour; there is no tour without the crown. Understand me: I do not offer that as a motive for anything but honesty. Half this city would have killed to have that tour happen. One person in it, apparently, killed to keep something else from stopping it."
      },
      {
        id: "t_slip",
        label: "Did your office send Dr. Sauer a slip that night?",
        requires: { clues: ["lure_slip"] },
        answer: "It did not. My office issues no slips after six, signs everything it sends, and had the diadem's examination in my own diary for Monday, in the gallery, in daylight, with Dr. Sauer — an appointment she confirmed to me at the gala, at her table, at half past nine, when she told me she had something to discuss at nine in the morning and would not say what. Whoever wrote that slip knew my office's voice and my museum's paper and what she wanted. That is a short list, detectives. It does not include me.",
        gives: "s_greta_noslip"
      }
    ],
    present: [
      {
        card: "lure_slip",
        reply: "My office's voice, my museum's paper, my name's authority — and not one atom of my office in it. It is a forgery, detectives, of a particularly intimate kind: whoever printed it knew how I summon people. There are perhaps four people alive of whom that is true."
      },
      {
        card: "camera_request",
        reply: "Vale's signature, on a chit for a camera, on gala morning. He signs a hundred chits a year — the workshop is the museum's engine room. I am trying to remember whether I have ever, in nineteen years, read one. That may be the most honest sentence I have said today."
      }
    ]
  },
  {
    id: "raman",
    name: "Dr. Priya Raman",
    age: 41,
    role: "Curator of antiquities — the Karash collection's keeper.",
    color: "#74553a",
    unlockedAt: 4,
    bio: "The scholar who built the Karash Gallery's interpretation, Sauer's colleague and rival of fifteen years' standing, and the person who argued with the victim, in public, on the last afternoon of her life — a fact she raises herself, immediately, at maximum volume, in the manner of a woman kicking a door before it can be opened against her.",
    intro: "Before you ask: yes, I argued with Ingrid Sauer yesterday, in the gallery, in front of everyone, at the top of my voice, about the ninth century. It is what we did. It is what we have done since we were twenty-five. If you have come to arrest the argument, I can provide forty witnesses and a transcript. Ask me anything else.",
    defaultPresent: "You are showing a curator a thing she has not catalogued, detectives. I decline to improvise. Ingrid never improvised either — whatever she concluded yesterday, she concluded it exactly, with her notebook open. Find the notebook and you have her mind."
  ,
    topics: [
      {
        id: "t_row",
        label: "The argument, then. What was it about?",
        answer: "The attribution. Whether the crown was Aurel's or his brother's — the brother made war on two fronts and his goldwork is coarser, and I have a die-link that proves the brother's mint produced half the coinage the crown was buried with. We argued for twenty minutes, Ingrid demolished my die-link — demolished it, fairly, in front of my own students — and then she did the unforgivable thing: she agreed with my conclusion anyway, for her own reasons, and left me with nothing to be angry about except her afternoon's face. She had a face, at the end, that I did not like. Examiner's face. I thought it was for my die-link. It was not for my die-link.",
        gives: "s_raman_row"
      },
      {
        id: "t_left",
        label: "When did you leave the gala?",
        requires: { clues: ["cloakroom_chit"] },
        answer: "Five past nine, with the first wave, before the speeches — I have heard the director's speeches for nine years and I mark essays in the rain by preference. My coat at five past, the taxi the cloakroom called, home by half past. The stub is in their book and my conscience is in the same place. I argued with Ingrid at half past four, detectives, in front of forty people, about a dead king. By the time she was in danger I was home with a red pen, being rude about the ninth century in writing.",
        gives: "s_raman_left"
      }
    ],
    present: [
      {
        card: "contact_sheet",
        reply: "There I am, in the rain, in my coat, at five past nine — Reber's camera is a merciless diarist. And there is Ingrid at her table, alive, with her notebook shut, hours after our row. Keep that sheet, detectives. It is worth more than anyone's memory of that evening, including mine."
      },
      {
        card: "display_crown",
        reply: "I have written four thousand words about that crown — its king, its mint, its burial. If Ingrid said it is not the crown, then it is not the crown, and my four thousand words belong to a copy, and I will rewrite them at whatever age I am when I finish being angry. She was never wrong about an object. Never. That is the testimony you actually need from me."
      }
    ]
  },
  {
    id: "jonas",
    name: "Jonas Reber",
    age: 35,
    role: "AV technician — cameras, booth, gala sound.",
    color: "#44584f",
    unlockedAt: 4,
    bio: "The museum's one-man technical department: cameras, microphones, the AV booth, and a sideline selling gala photographs to a gossip site that nobody has yet proved. He has the technician's total recall for systems and total vagueness about people, and seems genuinely pleased that the machines, at least, kept honest records.",
    intro: "Detectives. Reber, AV. Before anything: my logs are complete, my timers are exact, and my camera sheet is time-burned by the machine, so for once in this building the machines can do the talking and I can do the shrugging. The wing camera napped on schedule — whose schedule is in my chit folder. Ask.",
    defaultPresent: "Not a system of mine, that. If it plugs in, prints, records or lights up, it's mine and I can tell you its life story. Otherwise I'm furniture with a toolbox.",
    topics: [
      {
        id: "t_secret",
        label: "You sell gala photographs to a gossip site.",
        answer: "…The development office suspects; the site pays in cash; the photographs are of dresses, detectives, faces and jewellery — the gala from the mezzanine, forty frames a night. It is against my contract and it is not against the law, and I will trade you the whole confession for the observation that a man planning a murder does not spend the evening of it photographing necklaces at twelve frames a minute. My sheet is your best clock. Use it, and then sack me; the order matters to me."
      },
      {
        id: "t_maintenance",
        label: "The wing camera was down 22:40 to 23:30.",
        requires: { clues: ["camera_request"] },
        answer: "On Mr. Vale's chit, signed that morning: corridor camera down for the gala window, 'keep the log simple'. It is the most ordinary favour in my working life — cameras come down for galas so the guests' photographs are not dazzled, the caterers ask, the development office asks, Vale asks most years. I set the timer at six, the booth logged it dark on schedule, and it tested perfect next morning with no part changed, which at the time I filed under 'cameras'. I do not file it there now.",
        gives: "s_jonas_maintenance"
      },
      {
        id: "t_photos",
        label: "Walk me through your contact sheet.",
        requires: { clues: ["contact_sheet"] },
        answer: "Frame by frame, then, since the camera is the only witness here who was never off duty. Raman out in the rain at five past nine. Dr. Sauer at the long table until late, notebook shut, listening to speeches like a woman storing them up for revenge. The director radiant at midnight. And the frame I did not take — the camera took it, motion-fired, at 22:44: the hall's far end, a tall figure in restorer's grey crossing to the secure-wing stairs while the speeches run on. I shoot dresses, detectives. The building shot that one itself.",
        gives: "s_jonas_photos"
      }
    ],
    present: [
      {
        card: "booth_log",
        pressure: 10,
        reply: "My booth log, and I stand by every line — including the one I cannot explain, which is the workshop terminal printing a single page at 22:47. I run the booth. I do not run the workshop terminal. Nobody runs the workshop terminal at thirteen to eleven on gala night. Nobody, detectives, except the man whose kingdom it is."
      },
      {
        card: "camera_request",
        reply: "His signature. I keep the chits because paper is the only armour a technician gets. Vale signs half the paper in this building — you stop reading it, the way you stop reading wallpaper. I've read that one now. I've read it about forty times."
      }
    ]
  }
];

module.exports = { suspects, testimonies };
