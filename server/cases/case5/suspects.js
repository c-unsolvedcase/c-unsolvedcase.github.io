// Suspects, interview topics, contradictions and testimony cards for Case 5.
// Topics can be gated by shared clue/card ids, pressure (0-100) and trust (0-100).
// pressure rises when you catch lies; trust rises when you are gentle.

const testimonies = {
  s_tallow_glove: {
    title: "Tallow: the glove",
    speaker: "tallow",
    text: "In the dining car after Port Agnes, Tallow found a gentleman's glove — fine kid leather, left hand, small for a man. It sits in the guard's van still, against its owner asking. Nobody has asked."
  },
  s_pargeter_statement: {
    title: "Pargeter: 'I dined, I slept, I knew nothing'",
    speaker: "julian",
    text: "Pargeter says his night holds nothing to examine: dinner at table six, a cigar he did not finish, his berth by eleven, and sleep until the commotion at dawn. Mr. Fenn's death is a sorrow and a surprise to him in equal measure. He has said all of this twice, in the same words, in the same order."
  },
  s_pargeter_errand: {
    title: "Pargeter: 'My cigar case. The cloakroom.'",
    speaker: "julian",
    text: "Pargeter says he left the dining car at a quarter past nine for one reason only: his cigar case, which he had left in the cloakroom on coming in. He fetched it, stood a moment in the vestibule for the air, and returned to his table inside fifteen minutes. He is surprised the journey needs accounting for at all."
  },
  s_pargeter_fenn: {
    title: "Pargeter: 'We discussed the inquiry. He was immovable.'",
    speaker: "julian",
    text: "Pargeter admits he called on Fenn at his house the Wednesday before the journey: the ledger's contents, he says, were a misunderstanding between engineers that a conversation could have settled. Fenn would not converse. 'He told me the book went before the commission whatever it cost any of us. I believed him, detectives. I still do. He was the most immovable man I ever did business with.'"
  },
  s_pargeter_confession: {
    title: "Pargeter's confession",
    speaker: "julian",
    text: "Pargeter breaks at last, quietly, like a man reading minutes: he compounded the tincture himself, from his own stock, at four times the strength. He wrapped the phial in a napkin and bought the attendant's hands in the pantry with a story about a sleeping draught and an envelope for a debt he had taken care to learn of. He says he sat at his dinner while it was done and told himself a draught and a missed hearing were all he had purchased. He has not yet said the word murder. The paper in front of him says it for him."
  },
  s_nell_turndown: {
    title: "Nell: 'I serviced B4 at twenty-five to ten'",
    speaker: "nell",
    text: "Nell says the turndown was her ordinary round and the log tells it true: A2, A4, B4 at twenty-five to ten while Mr. Fenn was at dinner, B6 after. She set out his tonic measure by the bed the way she did every service, laid his briefcase on the stand, and left the berth empty, locked, and ready. Nothing in the round was out of its order, she says — and then, quietly, that she has been saying that sentence to the mirror since Port Agnes."
  },
  s_nell_admits: {
    title: "Nell admits the swap, and the ledger",
    speaker: "nell",
    text: "Nell tells it whole at last. In the pantry, at a quarter past nine, Mr. Pargeter gave her a phial wrapped in a napkin and told her it was a sleeping draught — the old gentleman was terrified of the inquiry, one deep sleep and he'd miss his stop and his courage, no harm in it, and a kindness besides. There was an envelope with it, for her brother's bill, which he had somehow heard of. She swapped the phials at the turndown and took the blue ledger from the case, as he asked. At Harefield she was to hand the book to him on the platform — and her hands would not do it, with Mr. Fenn dead in everything but the finding of him, so she hid it in the van instead, where it could not be burned and could not be only her word. She did not know it was poison until ten past six. She says she has known it every minute since."
  },
  s_hugh_row: {
    title: "Hugh: 'I begged him not to testify'",
    speaker: "hugh",
    text: "Hugh says the corridor row at five to ten was his, and his shame: he begged his uncle to withdraw the ledger before the inquiry — the family holds Pargeter Signalling shares, the testimony would halve them, his mother's house is mortgaged against them. His uncle told him a man who sells a signature sells the men under the train as well, and went to bed angry, and Hugh has heard the door shut every night since. He wanted the evidence stopped, he says. God help him, he wanted it loudly, in a corridor, in front of witnesses. He did not want his uncle dead, and the difference is the whole of his life now."
  },
  s_hugh_draft: {
    title: "Hugh: 'His tonic at half past ten, then the draft at twenty to twelve'",
    speaker: "hugh",
    text: "Hugh says his uncle's routine never varied in six years of travelling together: berth at five past ten, the tonic measured at half past, the room locked, and silence. Hugh himself knocked at B4 at twenty to twelve with the statement draft, as arranged — knocked twice, heard nothing, and thought the old man asleep and still angry. He went to his own berth. He has wondered since what he would have done if the door had opened."
  },
  s_hugh_confession: {
    title: "Hugh's confession",
    speaker: "hugh",
    text: "Hugh's signed statement: at half past midnight he took the spare key to B4 from the attendant's cupboard, let himself into his uncle's berth, and poured the contents of a small bottle — bought that week in Kingsmere, he says, and since thrown from the train — into the whisky decanter. His uncle's testimony would have ruined the family; he had begged, and been refused, and he chose the shares over the man. He asks that it be written down exactly so, and signed, and that nobody trouble the train's staff any further on his account."
  },
  s_hugh_retracts: {
    title: "Hugh retracts — and tells what he saw",
    speaker: "hugh",
    text: "Shown that his confession cannot stand, Hugh breaks — and tells the truth he has been carrying under it. He could not sleep that night. At the Harefield stop he was in the rear vestibule in his overcoat, watching the lamps, and he saw Nell Barber cross to the mail van with a flat, blue, book-shaped parcel under her arm and come back without it. He has known since the morning round what it must have been, and whose instructions it must have followed — and when the Inspectorate began asking after phials and keys, he was certain the trail would end at her, and he could not bear that it should. His confession was built out of the spare key and the decanter because those were the things he knew were there. He has never been in B4 that night, and he never dosed anything."
  },
  s_emrys_napkin: {
    title: "Emrys: 'I saw the handover in the pantry'",
    speaker: "emrys",
    text: "Emrys says he was in the pantry cellar at a quarter past nine — down the hatch, among the bottles, on business of his own that the wine tally will explain if it must — and through the hatch grating he saw it plainly: Mr. Pargeter, out of the dining car in the middle of his dinner, passing the sleeping-car attendant a small bottle wrapped in a napkin, and an envelope with it. She took both the way staff take things from first class. He thought it was a tip and a tonic for a passenger. He has thought about it differently since ten past six."
  },
  s_emrys_wine: {
    title: "Emrys admits the cellar book",
    speaker: "emrys",
    text: "Emrys admits the wine tally is his own quiet ruin: a year of the good vintages opened for himself and written off as breakage, perhaps forty bottles, always on his late turns. It is theft and he will answer for it to the company. It is also, he points out, the entire reason he was down a cellar hatch at a quarter past nine with his eyes at the grating — a man does not schedule a crime to witness a worse one."
  },
  s_vane_dose: {
    title: "Dr. Vane: 'The timing is in the body'",
    speaker: "vane",
    text: "Dr. Vane is precise: the signs she read at twenty past six — the body's cooling, the settling, the state of the eyes — put death between half past one and half past two, and no honest reading stretches it either way. A fourfold dose of that tincture takes two to three hours to do its work. Reckon back: the dose was taken between half past ten and midnight — and she would stake her licence on the earlier end. A dose administered at half past midnight, she says, would have found Mr. Fenn alive at dawn, ill and accusing, and she is sorry for whoever built a story on that hour."
  },
  s_vane_found: {
    title: "Dr. Vane: 'The seal, and the wrong bottle'",
    speaker: "vane",
    text: "Dr. Vane says she was called at ten past six and found what the round found: a man dead some hours, in a berth locked on the inside, at peace in every particular — except two, which she has not been able to put down since. The whisky decanter beside him stood full and sealed, though the nightcap was his religion. And the phial by the bed was a bottle she would not have passed in a dispensary: heavy glass, no label, and a smell off it like a chemist's bench, not a medicine. She bagged it before she signed anything, and she has signed nothing since that calls the death natural."
  },
  s_tallow_rounds: {
    title: "Tallow: 'The van opened once, at Harefield'",
    speaker: "tallow",
    text: "Tallow says the van's night is in his book and his book does not embroider: sealed at Kingsmere with forty-one sacks, the pouch at Millbeck through the door in two minutes, and the one opening of the journey at Harefield, eight minutes, three out and two in, signed by himself in the driver's sight. Between those entries the seals stood unbroken, and he will swear to the seals in any court in the country — they are, he says, the only witnesses on this train that nobody can call liars."
  },
  s_tallow_dozed: {
    title: "Tallow admits the fifty minutes",
    speaker: "tallow",
    text: "Tallow admits it with the air of a man handing over his stripes: after the Harefield exchange was done and the van sealed again, he sat down on his bunk 'for one minute' at twenty past three and woke to his own alarm at ten past four, with his tea stone cold. Fifty minutes, after the work, with the seals on and the train running clean. He has told every man who asked that he never closed his eyes all night. He would like it known which of those two statements the Inspectorate is prosecuting, because only one of them is a lie, and it is not the one that matters."
  }
};

const suspects = [
  {
    id: "julian",
    name: "Julian Pargeter",
    age: 49,
    role: "Director, Pargeter Signalling Ltd.",
    color: "#6a5a7a",
    unlockedAt: 2,
    bio: "A signalling director whose firm's name is on half the junctions in the south — and, if Aldous Fenn's ledger is to be believed, on the certificates that let the Kingsmere junction kill two men. He travels in first class, tips in envelopes, and speaks of the inquiry as a misunderstanding between engineers.",
    intro: "Detectives. A wretched business, and I am sorry the Inspectorate feels it needs one. Mr. Fenn and I were rivals of forty years' standing, which in our trade is a kind of friendship. Ask what you must — my night was dinner, a cigar, and sleep, and there is very little embroidery available on any of the three.",
    defaultPresent: "Paper, paper. Everyone on this train seems to keep a book about everyone else. What of it?",
    topics: [
      {
        id: "t_statement",
        label: "Where were you that night?",
        answer: "At dinner, at my berth, and in between precisely nowhere of interest. Table six from five past nine, the courses, a brandy; my berth by eleven; asleep, I am sorry to say, while a man I respected was dying four doors away. I have given the Inspectorate the same account twice. It does not improve with repetition, because it does not change.",
        gives: "s_pargeter_statement"
      },
      {
        id: "t_errand",
        label: "You left the dining car at a quarter past nine.",
        answer: "For my cigar case, which I had left in the cloakroom coming in — a silver case, my father's, I am lost without it after dinner. I fetched it, I stood a moment in the vestibule for the air — a dining car at full cry is a furnace — and I was back at my table inside the quarter hour. The steward will have written it down; stewards write everything down. It is the tragedy of travelling among clerks.",
        gives: "s_pargeter_errand"
      },
      {
        id: "t_fenn",
        label: "Tell me about your visit to Fenn's house.",
        requires: { clues: ["fenn_diary"] },
        answer: "…He kept a diary. Of course he kept a diary; the man minuted his own conscience. Yes: I called on Wednesday. The ledger is a misunderstanding between engineers — certificates summarised by clerks, detectives, not forged by directors — and I hoped a conversation might spare us all a public one. He would not converse. He told me the book went before the commission whatever it cost, and I believed him. I still do. It is the only wholly reliable thing in this business.",
        gives: "s_pargeter_fenn"
      },
      {
        id: "t_ledger",
        label: "The blue ledger is not missing, Mr. Pargeter. We have it.",
        requires: { clues: ["the_ledger"] },
        answer: "Then you have a dead man's notebook and my condolences on the reading of it. Aldous wrote what he believed; belief is not evidence, whatever uniform it wears. If the Inspectorate means to hang an inquiry on a signature copied into a diary, they will find the law less romantic than the railway."
      },
      {
        id: "t_confess",
        label: "Tell me what really happened with the phial.",
        requires: { minPressure: 80 },
        answer: "…You have the bottle. You have the steward, or you would not be standing there like men who have already heard the sentence. Very well, and let the record have it in my own words. I compounded it myself — fourfold, from my own stock. I told the girl it was a sleeping draught. A draught, detectives — one deep sleep, a missed hearing, a frightened old man persuaded to go home and be quiet. That is the purchase I believed I was making. If you ask me when I understood what I had actually bought, I will tell you the truth: at dinner, watching him drink his soup like a man with years in him. I said nothing. That is the part I will hang for, and it is the part nobody had to prove.",
        gives: "s_pargeter_confession"
      }
    ],
    present: [
      {
        card: "medicine_phial",
        pressure: 10,
        reply: "The bottle from his berth. You carry it like an accusation; it is a bottle. Men with weak hearts keep a pharmacopoeia by the bed — ask Dr. Vane, she will give you the lecture with slides."
      },
      {
        card: "source_bottle",
        pressure: 20,
        reply: "…That came from my valise, under seal, and I will thank the Inspectorate to remember it was sealed. A bottle of tincture, detectives. Half the men my age in first class travel with worse."
      },
      {
        card: "tumbler_test",
        pressure: 10,
        reply: "A glass. Washed, I am told, by the dead man's own hand, and now it testifies. The railway is producing a very poor class of witness."
      },
      {
        card: "pantry_napkin",
        pressure: 15,
        reply: "A napkin. From a dining car. I have eaten three courses off its brothers this week, and so, I imagine, have you."
      },
      {
        card: "cigar_case",
        pressure: 10,
        reply: "My case. In the rack, yes — I remember now I never did go back for it after dinner; the brandy came and the evening went. You are building a cathedral on a cigar case."
      },
      {
        card: "dinner_chit",
        pressure: 10,
        reply: "Fifteen minutes, in the steward's hand. I have read more damning railway documents in my life, detectives — most of them, regrettably, with my own signature on them."
      },
      {
        card: "the_ledger",
        pressure: 15,
        reply: "The famous book. You found it in the mail van, I am told — among the sacks, like a parcel that missed its train. Whatever travels by night on this railway seems to end up everywhere but its destination."
      },
      {
        card: "fenn_diary",
        pressure: 10,
        reply: "'Look first for the man who profits.' He always did think in proverbs. The man who profits by that book's absence, detectives, is any engineer who ever signed a form — we are a numerous and nervous congregation."
      },
      {
        card: "s_emrys_napkin",
        pressure: 25,
        reply: "Cole. A steward with his hand in the cellar and his eye at a grating, who now remembers — conveniently, completely — a napkin, a bottle, an envelope. I have buried better witnesses than Cole in cross-examination, gentlemen. So have you."
      },
      {
        card: "c_pargeter_proof",
        pressure: 25,
        reply: "A conclusion. Assembled, not discovered. You have strung paper on paper and called the string a rope. It will not hold a director of forty years' standing, detectives. It will not."
      }
    ]
  },
  {
    id: "nell",
    name: "Nell Barber",
    age: 34,
    role: "Sleeping-car attendant, cars A and B.",
    color: "#7a4a56",
    unlockedAt: 1,
    bio: "Eleven years on the night trains, the only attendant for two sleeping cars, keeper of the turndowns, the rounds, and the master key. She found Aldous Fenn at the morning round and has not yet been heard to finish a sentence about it.",
    intro: "I do cars A and B, detectives — the turndowns, the rounds, the wake-up calls. I knocked on B4 at ten to six and I knocked again, and Mr. Tallow came up with the key, and — ask me what you need. I have the log. The log says what I did, in my own hand, and I'll stand to the log.",
    defaultPresent: "That's not mine to know about. I do the berths and the rounds; the rest is other people's luggage.",
    topics: [
      {
        id: "t_rounds",
        label: "Walk me through your night.",
        answer: "Turndowns from twenty past nine, in order: A2, A4, B4 at twenty-five to ten while Mr. Fenn was at dinner, B6 after. I set out his tonic measure by his bed, the way the service is done, and laid his case on the stand. Round at ten past ten — B4 had the do-not-disturb, as he asked. Millbeck for the pouch at twenty to twelve. My bunk in the cubby after that, dozing the way attendants do, one ear open. Harefield I was on the platform and about the van for the exchange. Rounds again at ten to six. That is the whole of it, and it is in the log in my own hand.",
        gives: "s_nell_turndown"
      },
      {
        id: "t_kind",
        label: "Nobody here thinks you wished him harm, Nell.",
        trust: 35,
        answer: "…Everyone says that in the first hour. By the third hour there's a book open and a pen waiting. I have done this run eleven years, detective. I know what the third hour looks like. But thank you for the first one. It's more than the company gave me — they had my log photographed before they'd let me sit down."
      },
      {
        id: "t_money",
        label: "Tell me about your brother.",
        requires: { clues: ["money_envelope"] },
        answer: "Tommy. Nineteen, a fitter's mate, and his lungs full of the foundry by twenty — the sanatorium at Brecknock is his one chance and it is forty pounds a quarter, and the final demand came the week before the Vesper ran. I am not telling you that to make a story of it. Everybody on a night train has a bill somewhere. It's only mine that somebody went and learned by heart."
      },
      {
        id: "t_admits",
        label: "Tell me what happened at the turndown, Nell. All of it.",
        requires: { cards: ["c_nell_van"], minTrust: 45 },
        answer: "…Then have it whole, and God forgive me the parts I dressed up. At a quarter past nine, in the pantry, Mr. Pargeter gave me a phial in a napkin and told me it was a sleeping draught — the old gentleman was frightened half to death of the inquiry, one deep sleep and he'd miss Port Agnes and his courage with it, no harm, a kindness. There was an envelope with it, for Tommy's bill, which he had somehow heard of, the way he hears of everything. I swapped the phials at the turndown, and I took the blue book from the case like he asked. At Harefield I was to hand it to him on the platform — and I stood there with it under my arm and my hands would not do it, because by then I had begun to understand what a draught does that a man pays a year's wages to have given in secret. So I put it in the van, under the sacks, where it couldn't be burned and couldn't be only my word against his. I did not know it was poison, detective. I have known it every minute since ten past six, and I will say all of it in any room they put me in.",
        gives: "s_nell_admits"
      }
    ],
    present: [
      {
        card: "turndown_log",
        reply: "My log. Twenty-five to ten, B4, in my hand — I wrote it the way I write everything, before I knew there'd be a reading of it. Whatever else I did that night, detective, I never once wrote a lie in that book. The lies were all in what I didn't write."
      },
      {
        card: "money_envelope",
        trust: 20,
        reply: "…You've found Tommy's bill. A hundred and eighty pounds, new notes, that stick together when you count them. I counted them twice in the pantry and once in my bunk, and I was grateful, detective — that's the worst of it, I was grateful for a whole evening."
      },
      {
        card: "the_ledger",
        trust: 10,
        reply: "You found it. Under the fourteens, where I put it. I oiled my hands on a sack seam so it wouldn't take my prints so plain — look at me, detective, eleven years an attendant and that's the criminal I amounted to. It was the only honest thing I did all night."
      },
      {
        card: "genuine_phial",
        pressure: 15,
        reply: "His own bottle. I rinsed it in the corridor sink and put it in the linen like rubbish, because that's what he'd told me to do with it — 'the old one goes in the wash, Nell, nobody keeps an empty'. I held it under the tap and I thought: a sleeping draught comes in a bottle of its own, why does it need his? I thought it, and I rinsed it anyway."
      },
      {
        card: "spare_key",
        reply: "The spare keys hang sealed, the way I sealed them at Kingsmere — that's my initial on the tag and it's never been lifted, not that night, not in a year. If anybody tells you they went into B4 with that key, detective, they are lying to you, and you may tell them Nell Barber said so."
      }
    ]
  },
  {
    id: "hugh",
    name: "Hugh Fenn",
    age: 28,
    role: "The victim's nephew and secretary.",
    color: "#4a6a8a",
    unlockedAt: 3,
    bio: "Aldous Fenn's nephew, secretary, and only family: he typed the statement, carried the correspondence, and begged his uncle in a train corridor to burn the evidence that would halve the family's shares. He has not slept properly since the train reached Port Agnes.",
    intro: "I was his secretary, detectives — six years of his dictation, his appointments, his blasted conscience, typed up fair. If you're asking whether we quarrelled that night: yes, in the corridor, at the top of my voice, where anyone could hear. I've not troubled to deny it. Ask the rest in order, if you would. I find the order helps.",
    defaultPresent: "That's not — I'm sorry. Six years I filed his papers and I never once read a page he hadn't asked me to. What of it?",
    topics: [
      {
        id: "t_row",
        label: "Tell me about the row in the corridor.",
        answer: "Five to ten, outside B4, and I won't dress it: I begged him to withdraw the ledger. The family holds Pargeter shares — my mother's house is mortgaged against them; the inquiry halves them; I did the arithmetic all the way from Kingsmere and then I did it out loud. He told me a man who sells a signature sells the men under the train as well — he had the sentence ready, he always had the sentence ready — and he shut the door. I have heard that door every night since, detectives. But I wanted the evidence stopped. Not the man. The difference is the whole of my life now, and I would be obliged if your book kept them separate.",
        gives: "s_hugh_row"
      },
      {
        id: "t_routine",
        label: "What was his routine that night?",
        answer: "The routine of six years, and I could set a watch by it. Berth at five past ten, door locked — he distrusted every lock he had not thrown himself — the tonic measured at half past from the phial by the bed, one measure, never more, and silence. I knocked at twenty to twelve with the statement draft, as arranged. Twice. Nothing. I thought him asleep, and still angry, and I went to B6 and lay awake being right about him in my head. The old fool. The old, principled, immovable— forgive me. That is the whole of my night: a door that did not open, and a nephew who has wondered since what he would have done if it had.",
        gives: "s_hugh_draft"
      },
      {
        id: "t_confess",
        label: "You asked to make a statement, Mr. Fenn.",
        requires: { cards: ["c_train_fixed"] },
        answer: "I did, and I will sign it. At half past midnight I took the spare key to B4 from the attendant's cupboard — the cupboard is never locked, everyone on the staff knows it — and let myself into my uncle's berth. I had a small bottle, bought in Kingsmere that week, and I poured it into his whisky decanter, the whole of it. His testimony would have ruined this family: the shares, the house, my mother's name in the papers beside a fraud's. I begged him at five to ten and he shut the door on me, and I chose the shares over the man, and I have come to say so before anyone else is troubled for it. Write it exactly so. The staff have done nothing. Nothing at all, any of them.",
        gives: "s_hugh_confession"
      },
      {
        id: "t_retract",
        label: "Your statement cannot stand, Hugh. Tell us the truth.",
        requires: { cards: ["c_confession_false"] },
        answer: "…Cannot stand. No. I built it out of the spare key and the decanter because those were the things I knew were there — every word of it was carpentry. I was never in B4; I never dosed anything; I couldn't sleep, that's my whole night, a man lying awake hating a shut door. At Harefield I went down to the rear vestibule for the cold air, and I saw her — Nell, the attendant — cross to the mail van with a flat blue parcel under her arm, book-shaped, and come back with her hands empty. I knew by the morning round what it must have been. And when your people began asking after phials and keys, I could see where the road ended: at her, in a cell, for doing what that man at table six told her to do. So I stepped into the road. It was the only useful thing I have ever done quickly. Forgive me for the trouble of it.",
        gives: "s_hugh_retracts"
      }
    ],
    present: [
      {
        card: "c_confession_false",
        reply: "Yes. Yes, I know. A sealed decanter and an unbroken key-tag and the whole train's clockwork — I built a confession out of the furniture of his berth and forgot the furniture would be examined. Ask me the true thing now. I find I am tired of the carpentry."
      },
      {
        card: "spare_key",
        reply: "Sealed. Of course it's sealed. I never touched it — I have never in my life held that key; I only knew where it hung, because staff talk and nephews listen. When I wrote 'spare key' in that statement I was describing the cupboard, not my hand."
      },
      {
        card: "sealed_decanter",
        reply: "Sealed. He set the wax himself at Kingsmere, in front of the attendant, the way he did everything — witnessed and in order. I knew that. I knew it when I signed. If that doesn't tell you what my statement was for, detective, nothing I can add will."
      },
      {
        card: "dictaphone",
        trust: 10,
        reply: "'If anything should happen to me — the ledger is the whole of it.' He dictated that at the dinner table, in my hearing, like a man signing his own— he knew. Not the manner of it, but he knew the size of what he was carrying, and he carried it anyway. I am trying to be more like him, detectives. It is coming out badly so far."
      }
    ]
  },
  {
    id: "emrys",
    name: "Emrys Cole",
    age: 41,
    role: "Dining-car steward.",
    color: "#54683c",
    unlockedAt: 2,
    bio: "Nineteen years in the dining cars of the night trains: he lays table three the way other men tune pianos, knows every regular's brandy, and keeps the cellar book in a hand that has lately learned to lie in one column only.",
    intro: "Emrys Cole, dining car, nineteen years on the night trains. I laid table three for Mr. Fenn for six seasons and I knew his brandy the way I know my own name. My chits are on the spike and my book is in the pantry, and both of them are at your disposal — the book with a confession attached, which you will find at the back, in figures.",
    defaultPresent: "Not from my car, that. I keep the tables and the cellar; the berths are the attendant's country.",
    topics: [
      {
        id: "t_evening",
        label: "Take me through the dinner service.",
        answer: "A quiet car, for a last-season train. Fenn and the young gentleman at three from ten past nine, the courses through in order, brandy declined — he was keeping himself for Friday, he said, and laughed about it. Pargeter alone at six: soup, fish, no sweet, a brandy after. Out of the car once, quarter past nine, quarter of an hour — cloakroom, he said. The chits have it all; I write them as I go, which is a habit that has kept me employed and may now keep me honest."
      },
      {
        id: "t_cellar",
        label: "How is the cellar kept, Emrys?",
        trust: 20,
        answer: "By a book, a tally and — these last months — by a conscience with a pencil. I know what you're circling, detective. The tallies are out, always the good vintages, always breakage, always my late turns. Forty bottles of other men's claret, in a steward's belly, over a year. It is theft and I'll answer for it to the company. But you will oblige me by noting the position of the thief at the hour in question: down my own hatch, at my own crime, with my eyes at the grating. It is an alibi of a kind, and the only one in this car with figures to it."
      },
      {
        id: "t_pantry",
        label: "What did you see through the pantry hatch?",
        requires: { clues: ["pantry_napkin"], minTrust: 40 },
        answer: "What I have been turning over like a bad coin since ten past six. I was down the hatch at a quarter past nine, topping a bottle — my business, the company's loss, we'll come to it — when I heard the pantry door and put my eye to the grating out of nothing but a thief's caution. It was Mr. Pargeter, out of the car in the middle of his dinner, and the attendant, Mrs. — Miss Barber. He passed her a small bottle wrapped in one of my own napkins, and an envelope with it, thick as a sandwich. She took them the way staff take things from first class: without looking up, without a word. He was back at his table inside the minute. I thought it a tip and a tonic for some passenger of hers. I have thought about it differently since the morning round, and I will sign to all of it.",
        gives: "s_emrys_napkin"
      },
      {
        id: "t_wine",
        label: "Tell me about the wine tally.",
        requires: { clues: ["wine_ledger"] },
        answer: "Forty bottles, give or take a conscience — always the good ones, always written off as breakage on my late turns. I have a brother in the licensing trade who calls it the steward's dividend. The company will call it theft and they will be right, and I will pay the schedule price of every bottle with my name signed to the sum. It has nothing to do with a medicine phial, detective, except this: it put a guilty man at a grating at exactly the hour a worse one needed a witness. Providence keeps a cellar book too, it seems.",
        gives: "s_emrys_wine"
      }
    ],
    present: [
      {
        card: "dinner_chit",
        trust: 10,
        reply: "My chits. Written as I go, never after — it is the one rule of the car I have kept unbroken, and you are welcome to date your whole case by them. Table six, out at a quarter past, back at half past. Fifteen minutes, in ink, before anyone knew ink would matter."
      },
      {
        card: "pantry_napkin",
        trust: 20,
        reply: "One of mine — the dining car's starch, I'd know it blind. Folded round something small and heavy and damp with a smell that does not belong to any table I ever laid. I have laid that napkin's brothers for nineteen years. It was in my pantry, in my bin, around his bottle."
      },
      {
        card: "wine_ledger",
        pressure: 15,
        reply: "Out by forty bottles, and every one of them down a steward's throat or a steward's friends'. I won't insult you with arithmetic, detective. The column is mine and the shame is mine, and I have already told you what I was doing at the grating."
      },
      {
        card: "cigar_case",
        reply: "Pargeter's case, and in the rack all night — I passed that rack a dozen times between courses and I'd have sworn to the silver of it. The gentleman never came for his cigars. Whatever took him out of my car at a quarter past nine, it wasn't a smoke."
      }
    ]
  },
  {
    id: "vane",
    name: "Dr. Miriam Vane",
    age: 55,
    role: "Physician; passenger in A4.",
    color: "#8a7a4a",
    unlockedAt: 1,
    bio: "A physician of thirty years who happened to be the nearest doctor on the train, and who has declined — in writing, twice — to call Aldous Fenn's death natural until somebody explains the bottle by his bed.",
    intro: "I am a doctor, detectives, not a witness of the usual kind: I saw nothing of the night and a great deal of its result. I was called at ten past six, I pronounced a man dead, and I have since declined, in writing and twice, to call the death natural. Ask me about the body and the bottle. The rest of the train is other people's evidence.",
    defaultPresent: "Not medical, and not mine. I pronounced one man on this train; I do not propose to pronounce on its luggage.",
    topics: [
      {
        id: "t_found",
        label: "Tell me what you found at B4.",
        answer: "A berth locked on the inside, a man dead some hours in his bed, everything at peace and in its place — which is itself a finding, detectives: there had been no struggle, no distress, no reaching for help. A heart does not usually take a careful man so tidily. And two things off their places, which I reported before I signed anything: the whisky decanter full and sealed, though the nightcap was his religion; and the phial by the bed, which no chemist of my acquaintance would own to. Heavy glass, no label, and a smell off it like a compounding bench. I bagged it before the porters touched the berth, and I have signed nothing since that calls the death natural.",
        gives: "s_vane_found"
      },
      {
        id: "t_dose",
        label: "What does the phial's strength tell you?",
        requires: { clues: ["medicine_phial"] },
        answer: "Arithmetic, which is the politest form of accusation. Four times the strength is not an error a chemist makes and not a dose a patient survives comfortably — it slows the heart over two to three hours and stops a weak one in its sleep. Now lay it against the body: the signs at twenty past six put death between half past one and half past two. Reckon backwards and the dose was taken between half past ten and midnight — and I will stake my licence on the earlier end of that, knowing his routine. If anyone offers you a dose at half past midnight, detectives, decline it on my authority: at that story's pace he would have been alive at dawn, ill, and extremely talkative.",
        gives: "s_vane_dose"
      },
      {
        id: "t_man",
        label: "Did you know Aldous Fenn?",
        answer: "By reputation, and by one consultation nine years ago — a railwayman's heart, strong for its years, managed on a measure of tonic he treated like a sacrament. He was not a careless man with medicine, detectives. He was not a careless man with anything. Whoever arranged his death arranged it through the one habit he never varied, which tells you the arranger had watched him a long time — or been told, in confidence, exactly how he lived."
      }
    ],
    present: [
      {
        card: "medicine_phial",
        trust: 10,
        reply: "The bottle I bagged. Fourfold, by the bench's arithmetic and by my nose before it. No chemist dispensed that, and no patient of mine would have been left alone with it. Whoever compounded it knew precisely what a measure would do, and when."
      },
      {
        card: "sealed_decanter",
        reply: "Full and sealed, as I found it. In thirty years I have learned that a dead man's untouched habits are a kind of testimony: he did not drink that night, whatever story is later told about his drinks. Hold on to that bottle, detectives. It is the night's most respectable witness."
      },
      {
        card: "tumbler_test",
        reply: "One measure, dried in the grain, of the strong tincture. He dosed himself, once, at his hour, with his own hand — I find that the saddest sentence in your whole file, and I have read the file. The murderer never touched him. He was killed by his own reliability, which the murderer had merely… scheduled."
      }
    ]
  },
  {
    id: "tallow",
    name: "George Tallow",
    age: 52,
    role: "Mail-van guard.",
    color: "#7a5230",
    unlockedAt: 4,
    bio: "Nineteen years guarding the mail on the night trains: a man who counts sacks the way other men count blessings, initials every seal, and regards an unlogged minute the way a priest regards a sin.",
    intro: "George Tallow, guard, nineteen years on the mails. My van, my seals, my book — and no man alive will tell you a sack went astray on a night of mine. I have heard what's being said about the gentleman in B4 and I am very sorry for it, but if it travelled, it didn't travel through my van without my ink on it. Ask me about the van, detectives. I know the van the way you know your own pockets.",
    defaultPresent: "Not mail. If it isn't a sack, a seal or a signature, it's beyond my parish, detective.",
    topics: [
      {
        id: "t_rounds",
        label: "Walk me through the van's night.",
        answer: "Kingsmere: forty-one sacks aboard, counted twice, seals on at two minutes to nine, my initials. Millbeck, twenty to twelve: one pouch out through the door, two minutes, seals verified untouched. Harefield, five past three to twenty past: the one opening of the night — three out, two in, eight minutes with the door wide, myself at the side door signing the waybill in the driver's sight. Port Agnes: seals verified. Between those entries the van was a locked box on wheels, and every man on this train knows the box was locked, because I am the man who locks it.",
        gives: "s_tallow_rounds"
      },
      {
        id: "t_attendant",
        label: "Your margin mentions the attendant at Harefield.",
        requires: { clues: ["van_tally"] },
        answer: "It does, and I'll not unsay my own margin. Twelve minutes past three, while I'm at the side door with the waybill, the sleeping-car attendant comes along the van with a parcel of cushion linen for my seat — kind of her, and I told her the cushions were fine, which went in the book because everything goes in the book. She went in by the rear gangway to leave it, minute or two, and out the same way, empty-handed. A small thing. I wrote it small. I gather it has grown."
      },
      {
        id: "t_dozed",
        label: "Tell me about the alarm clock, Mr. Tallow.",
        requires: { clues: ["tallow_bunk"] },
        answer: "…You have been in my bunk. Then have the rest standing up, the way I'd want it told of me. After the exchange was done and the seals on again, I sat on that bunk at twenty past three 'for one minute' — and woke at ten past four to my own alarm with my tea cold as the grave. Fifty minutes. After the work, with the van sealed and the train running clean. I have told every man who asked that I never closed my eyes all night, and that was a lie of pride, and I am done with it. But mark the hours, detective, the way I'd mark a waybill: my sleep began when the van's night was already over.",
        gives: "s_tallow_dozed"
      }
    ],
    present: [
      {
        card: "van_tally",
        trust: 10,
        reply: "My waybill. Forty-one at Kingsmere, and every door-minute accounted for, and the margin as honest as the columns — I write small in margins, detective, but I write true. Nineteen years of books like that one is the whole of my defence and I'm content with it."
      },
      {
        card: "van_seal",
        reply: "The seals. Checked at every stop and initialled, mine and the driver's at Harefield both. A seal doesn't know whose van it is, and it doesn't take instructions. If the book were opened at any hour but Harefield, that board would hang the man who did it — and it hangs nobody."
      },
      {
        card: "the_ledger",
        reply: "Found under my fourteens. I have turned that over oftener than the sacks themselves: it went in at Harefield, in my eight minutes, while I stood at the side door with a pen in my hand being proud of my book. There's a sermon in that, detective, and I preach it to myself nightly."
      }
    ]
  }
];

module.exports = { suspects, testimonies };
