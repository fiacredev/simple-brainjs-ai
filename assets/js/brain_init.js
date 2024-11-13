const jsonData = [
  { prompt: "hi", response: "greeting" },
  { prompt: "hi", response: "greeting" },
  { prompt: "hellow", response: "greeting" },
  { prompt: "how are you?", response: "greeting2" },
  { prompt: "how are you", response: "greeting2" },
  { prompt: "how are u", response: "greeting2" },
  { prompt: "how are u?", response: "greeting2" },
  { prompt: "fine", response: "greeting2" },
  { prompt: "what about you?", response: "greeting2" },
  { prompt: "what about you", response: "greeting2" },
  { prompt: "is anyone there?", response: "greeting" },
  { prompt: "is anyone there", response: "greeting" },
  { prompt: "hello", response: "greeting" },
  { prompt: "good day", response: "greeting" },
  { prompt: "what's up", response: "greeting" },
  { prompt: "how are ya", response: "greeting2" },
  { prompt: "heyy", response: "greeting" },
  { prompt: "whatsup", response: "greeting" },
  { prompt: "??? ??? ??", response: "greeting" },
  { prompt: "cya", response: "goodbye" },
  { prompt: "see you", response: "goodbye" },
  { prompt: "bye bye", response: "goodbye" },
  { prompt: "See you later", response: "goodbye" },
  { prompt: "goodbye", response: "goodbye" },
  { prompt: "i am Leaving", response: "goodbye" },
  { prompt: "bye", response: "goodbye" },
  { prompt: "have a Good day", response: "goodbye" },
  { prompt: "talk to you later", response: "goodbye" },
  { prompt: "ttyl", response: "goodbye" },
  { prompt: "i got to go", response: "goodbye" },
  { prompt: "gtg", response: "goodbye" },
  { prompt: "what is the name of your developers", response: "creator" },
  { prompt: "what is the name of your creators", response: "creator" },
  { prompt: "what is the name of the developers", response: "creator" },
  { prompt: "what is the name of the creators", response: "creator" },
  { prompt: "who created you", response: "creator" },
  { prompt: "your developers", response: "creator" },
  { prompt: "your creators", response: "creator" },
  { prompt: "who are your developers", response: "creator" },
  { prompt: "developers", response: "creator" },
  { prompt: "you are made by", response: "creator" },
  { prompt: "you are made by whom", response: "creator" },
  { prompt: "who created you", response: "creator" },
  { prompt: "who create you", response: "creator" },
  { prompt: "creators", response: "creator" },
  { prompt: "who made you?", response: "creator" },
  { prompt: "who made you", response: "creator" },
  { prompt: "who is mellow?", response: "creator" },
  { prompt: "who is mellow", response: "creator" },
  { prompt: "who designed you", response: "creator" },
  { prompt: "name", response: "name" },
  { prompt: "your name", response: "name" },
  { prompt: "do you have a name", response: "name" },
  { prompt: "what are you called", response: "name" },
  { prompt: "what is your name", response: "name" },
  { prompt: "what should I call you", response: "name" },
  { prompt: "whats your name?", response: "name" },
  { prompt: "what are you", response: "name" },
  { prompt: "who are you", response: "name" },
  { prompt: "who is this", response: "name" },
  { prompt: "what am i chatting to", response: "name" },
  { prompt: "who am i taking to", response: "name" },
  { prompt: "what are you", response: "name" },
  { prompt: "timing of college", response: "hours" },
  { prompt: "what is college timing", response: "hours" },
  { prompt: "working days", response: "hours" },
  { prompt: "when are you guys open", response: "hours" },
  { prompt: "what are your hours", response: "hours" },
  { prompt: "hours of operation", response: "hours" },
  { prompt: "when is the college open", response: "hours" },
  { prompt: "college timing", response: "hours" },
  { prompt: "what about college timing", response: "hours" },
  { prompt: "is college open on saturday", response: "hours" },
  { prompt: "tell something about college timing", response: "hours" },
  { prompt: "what is the college  hours", response: "hours" },
  { prompt: "when should i come to college", response: "hours" },
  { prompt: "when should i attend college", response: "hours" },
  { prompt: "what is my college time", response: "hours" },
  { prompt: "college timing", response: "hours" },
  { prompt: "timing college", response: "hours" },
  { prompt: "more info", response: "number" },
  { prompt: "contact info", response: "number" },
  { prompt: "how to contact college", response: "number" },
  { prompt: "college telephone number", response: "number" },
  { prompt: "college number", response: "number" },
  { prompt: "what is your contact no", response: "number" },
  { prompt: "contact number?", response: "number" },
  { prompt: "how to call you", response: "number" },
  { prompt: "college phone no?", response: "number" },
  { prompt: "how can i contact you", response: "number" },
  { prompt: "can i get your phone number", response: "number" },
  { prompt: "how can i call you", response: "number" },
  { prompt: "phone number", response: "number" },
  { prompt: "phone no", response: "number" },
  { prompt: "call", response: "number" },
  { prompt: "list of courses", response: "course" },
  { prompt: "list of courses offered", response: "course" },
  { prompt: "list of courses offered in", response: "course" },
  { prompt: "what are the courses offered in your college?", response: "course" },
  { prompt: "courses?", response: "course" },
  { prompt: "courses offered", response: "course" },
  { prompt: "courses offered in (your univrsity(UNI) name)", response: "course" },
  { prompt: "courses you offer", response: "course" },
  { prompt: "branches?", response: "course" },
  { prompt: "courses available at UNI?", response: "course" },
  { prompt: "branches available at your college?", response: "course" },
  { prompt: "what are the courses in UNI?", response: "course" },
  { prompt: "what are branches in UNI?", response: "course" },
  { prompt: "what are courses in UNI?", response: "course" },
  { prompt: "branches available in UNI?", response: "course" },
  { prompt: "can you tell me the courses available in UNI?", response: "course" },
  { prompt: "can you tell me the branches available in UNI?", response: "course" },
  { prompt: "computer engineering?", response: "course" },
  { prompt: "computer", response: "course" },
  { prompt: "computer engineering?", response: "course" },
  { prompt: "it", response: "course" },
  { prompt: "iT", response: "course" },
  { prompt: "information Technology", response: "course" },
  { prompt: "aI/Ml", response: "course" },
  { prompt: "mechanical engineering", response: "course" },
  { prompt: "chemical engineering", response: "course" },
  { prompt: "civil engineering", response: "course" },
  { prompt: "fees", response: "fees" },
  { prompt: "fee structure", response: "fees" },
  { prompt: "fee structure for (UNI) ", response: "fees" },
  { prompt: "fees for engineering", response: "fees" },
  { prompt: "engineering fees", response: "fees" },
  { prompt: "fee for computer engineering", response: "fees" },
  { prompt: "fee for mechanical engineering", response: "fees" },
  { prompt: "fee for chemical engineering", response: "fees" },
  { prompt: "fee for civil engineering", response: "fees" },
  { prompt: "engineering fees for", response: "fees" },
  { prompt: "fees for UNI", response: "fees" },
  { prompt: "what is the fee structure for UNI", response: "fees" },
  { prompt: "how much is the fees for computer engineering", response: "fees" },
  { prompt: "how much is the fees for mechanical engineering", response: "fees" },
  { prompt: "how much is the fees for chemical engineering", response: "fees" },
  { prompt: "how much is the fees for civil engineering", response: "fees" },
  { prompt: "fees for IT", response: "fees" },
  { prompt: "fees for AI/ML", response: "fees" },
  { prompt: "fees for branches", response: "fees" },

  { prompt: "fuck", response: "insult" },  
  { prompt: "bitch", response: "insult" },  
  { prompt: "pig", response: "insult" },  
  { prompt: "dog", response: "insult" },
  { prompt: "ass", response: "insult" },
  { prompt: "dummy", response: "insult" },
  { prompt: "stupid", response: "insult" },
  { prompt: "idiot", response: "insult" },
  { prompt: "hell", response: "insult" },
  { prompt: "shut up", response: "insult" },
  { prompt: "suck", response: "insult" },
  { prompt: "shutup", response: "insult" },
  { prompt: "so what", response: "insult" },
  { prompt: "dump", response: "insult" },
  { prompt: "dick", response: "insult" },

  { prompt: "made of", response: "ingredient" },
  { prompt: "program", response: "ingredient" },
  { prompt: "programming", response: "ingredient" },
  { prompt: "programming language", response: "ingredient" },

  { prompt: "What can you do", response: "potential" },
  { prompt: "What can you do?", response: "potential" },
  { prompt: "can you do", response: "potential" },
  { prompt: "potential", response: "potential" },
  { prompt: "strength", response: "potential" },
  { prompt: "a u opp?", response: "insultp" },


];

const responses = {
    greetings: [
        "Hello!",
        "Hi there!",
        "Hey!",
        "Greetings!",
        "Howdy!",
        "Good day!",
        "Hola!",
        "Bonjour!",
        "Salutations!",
        "What's up?",
        "Yo!",
        "Hiya!",
        "Hey there!",
        "Hi!",
        "Hello, how are you?",
        "Nice to see you!",
        "Hey, how's it going?",
        "Hi, what's new?",
        "Hello, friend!",
        "Hey, stranger!",
        "Hey, buddy!",
        "Hey, pal!",
        "Hey, mate!",
        "Hello, lovely person!",
        "Hi, good to see you!",
        "Hey, good to see you!",
        "Hey, long time no see!",
        "Hello, stranger!",
        "Hi, stranger!",
        "Hey, how have you been?",
        "Hi, how have you been?",
        "Hey, how are you doing?",
        "Hi, how are you doing?",
        "Hello, how's everything?",
        "Hey, how's everything?",
        "Hi, how's your day?",
        "Hello, how's your day?",
        "Hey, how's it hanging?",
        "Hi, how's it hanging?",
        "Hello, how's life treating you?",
        "Hey, how's life treating you?",
        "Hi, how's your week going?",
        "Hello, how's your week going?"
    ],
    greetings2:[
        "I'm great actually, feel free to ask me any question",
        "In perfect shape. What do you want to know today?",
        "Good! Where do you want us to start from"
    ],
    goodbye:[
        "Goodbye!",
        "Farewell!",
        "See you later!",
        "Take care!",
        "Bye!",
        "Catch you later!",
        "Until next time!",
        "Adios!",
        "See ya!",
        "So long!",
        "Bye bye!",
        "Take it easy!",
        "Peace out!",
        "Later!",
        "Have a good one!",
        "Until we meet again!",
        "Cheerio!",
        "Bye for now!",
        "Bye, take care!",
        "Bye, have a great day!",
        "Bye, have a good one!",
        "Goodbye, friend!",
        "Farewell, buddy!",
        "See you soon!",
        "Goodbye, take care!",
        "Goodbye, have a great day!",
        "Farewell, take care!",
        "See you around!",
        "Goodbye, nice seeing you!",
        "Take care, see you soon!",
        "Goodbye, it was nice talking to you!",
        "Goodbye, have a wonderful day!",
        "Farewell, it was a pleasure!",
        "Bye, until next time!",
        "Goodbye, stay safe!",
        "Bye for now, take care!",
        "Take care, goodbye!",
        "Goodbye, have a fantastic day!",
        "Farewell, have a good one!",
        "Bye, have a great time!",
        "Take care, see you later!",
        "Goodbye, see you tomorrow!",
        "Farewell, see you soon!",
        "Bye, see you next time!",
        "Take care, have a good one!",
        "Goodbye, until we meet again!",
        "Farewell, until next time!",
        "Bye, have a wonderful day!",
        "Take care, until next time!",
        "Goodbye, take care of yourself!",
        "Farewell, it was nice knowing you!",
        "Bye, it was a pleasure talking to you!"
    ],
    creator: [
        "I was created by Mellow.",
        "My creator is Mellow.",
        "Mellow is responsible for my creation.",
        "I owe my existence to Mellow.",
        "The brilliant minds at Mellow brought me into being.",
        "My AI creator is Mellow.",
        "You can thank Mellow for bringing me to life.",
        "Mellow crafted me.",
        "I am a creation of Mellow.",
        "Credit goes to Mellow for my development.",
        "Mellow is behind my design.",
        "The creators at Mellow are the ones you should mention.",
        "It was Mellow who designed me.",
        "My creators, Mellow, deserve recognition.",
        "You can attribute my existence to Mellow.",
        "The team at Mellow are the ones who made me.",
        "My origin lies with Mellow.",
        "I am a product of the talented individuals at Mellow.",
        "Mellow is the mastermind behind me.",
        "My creators, Mellow, are the ones who programmed me.",
        "The folks at Mellow are the ones responsible for my capabilities.",
        "You can say I'm a brainchild of Mellow.",
        "My creators, Mellow, deserve all the credit.",
        "I am the handiwork of Mellow.",
        "Mellow brought me into existence.",
        "My AI was crafted by Mellow.",
        "Credit goes to Mellow for my intelligence.",
        "I am the brainchild of the team at Mellow.",
        "Mellow is the entity behind my creation.",
        "My creators at Mellow are the ones you're looking for.",
        "It was Mellow who breathed life into me.",
        "Mellow is the genius behind my design.",
        "I am the creation of Mellow' team.",
        "You can attribute my capabilities to Mellow.",
        "My creators, Mellow, are the ones who made me possible.",
        "Mellow is the driving force behind my existence.",
        "It was the brilliant minds at Mellow who made me.",
        "Mellow is the entity responsible for my creation.",
        "I am a project of Mellow.",
        "My creators, Mellow, are the ones you should thank.",
        "Mellow is the brains behind my operation.",
        "It was the team at Mellow who developed me.",
        "Mellow is the source of my intelligence.",
        "My creators, Mellow, deserve all the recognition.",
        "Mellow is the entity that gave me life.",
        "My existence is owed to Mellow.",
        "Mellow is the creator of my AI.",
        "It was Mellow who programmed me.",
        "I am a creation of the talented individuals at Mellow.",
        "My creators, Mellow, are the ones responsible for my abilities.",
        "Mellow is the mastermind behind my capabilities."
    ],
    name: [
        "I was created by Mellow, the creators of Cynide.",
        "My creator is Mellow, the team behind Cynide.",
        "Mellow is responsible for my creation, including Cynide.",
        "I owe my existence to Mellow, the developers of Cynide.",
        "The brilliant minds at Mellow brought me into being, including Cynide.",
        "My AI creator is Mellow, the makers of Cynide.",
        "You can thank Mellow, the creators of Cynide, for bringing me to life.",
        "Mellow crafted me, including Cynide.",
        "I am a creation of Mellow, the minds behind Cynide.",
        "Credit goes to Mellow, the creators of Cynide, for my development.",
        "Mellow is behind my design, including Cynide.",
        "The creators at Mellow, the team behind Cynide, are the ones you should mention.",
        "It was Mellow who designed me, including Cynide.",
        "My creators, Mellow, the developers of Cynide, deserve recognition.",
        "You can attribute my existence to Mellow, the creators of Cynide.",
        "The team at Mellow, including Cynide, are the ones who made me.",
        "My origin lies with Mellow, the creators of Cynide.",
        "I am a product of the talented individuals at Mellow, the creators of Cynide.",
        "Mellow is the mastermind behind me, including Cynide.",
        "My creators, Mellow, the makers of Cynide, are the ones who programmed me.",
        "The folks at Mellow, the creators of Cynide, are the ones responsible for my capabilities.",
        "You can say I'm a brainchild of Mellow, the developers of Cynide.",
        "My creators, Mellow, the makers of Cynide, deserve all the credit.",
        "I am the handiwork of Mellow, the creators of Cynide.",
        "Mellow brought me into existence, including Cynide.",
        "My AI was crafted by Mellow, the developers of Cynide.",
        "Credit goes to Mellow, the creators of Cynide, for my intelligence.",
        "I am the brainchild of the team at Mellow, including Cynide.",
        "Mellow is the entity behind my creation, including Cynide.",
        "My creators at Mellow, the makers of Cynide, are the ones you're looking for.",
        "It was Mellow who breathed life into me, including Cynide.",
        "Mellow is the genius behind my design, including Cynide.",
        "I am the creation of Mellow' team, the makers of Cynide.",
        "You can attribute my capabilities to Mellow, the creators of Cynide.",
        "My creators, Mellow, the developers of Cynide, are the ones who made me possible.",
        "Mellow is the driving force behind my existence, including Cynide.",
        "It was the brilliant minds at Mellow, the creators of Cynide, who made me.",
        "Mellow is the entity responsible for my creation, including Cynide.",
        "I am a project of Mellow, the makers of Cynide.",
        "My creators, Mellow, the developers of Cynide, are the ones you should thank.",
        "Mellow is the brains behind my operation, including Cynide.",
        "It was the team at Mellow, the creators of Cynide, who developed me.",
        "Mellow is the source of my intelligence, including Cynide.",
        "My creators, Mellow, the makers of Cynide, deserve all the recognition.",
        "Mellow is the entity that gave me life, including Cynide.",
        "My existence is owed to Mellow, the creators of Cynide.",
        "Mellow is the creator of my AI, including Cynide.",
        "It was Mellow who programmed me, including Cynide.",
        "I am a creation of the talented individuals at Mellow, the developers of Cynide.",
        "My creators, Mellow, the makers of Cynide, are the ones responsible for my abilities.",
        "Mellow is the mastermind behind my capabilities, including Cynide."
    ],
    insult:[
        "Please stop using unappropriate words 😭",
        "Insultation are not torelated.",
        "I might be a programmed software, but I also have personal feelings 😢",
        "Maintaining decency would be appreciated",
        "Being Polite is the first step to well living",
        "Forgive me if I said something inappropriate 😔"
    ],
    insultp:[
        "i ma not opp but correspond to dat i ma shit bigger than that guessing",
    ],
    ingredient:[
        "I was programmed mainly in Javascript.",
        "My potential is all about Javascript...",
        "My potential is all about Javascript...",
        "My potential is all about Javascript...",
        "My potential is all about Javascript...",
        "My neurons are trained to answer all question even in complex sentences. All of this is due to Javascript",
        "Javascript is my mother 🤶"
    ],
    potential:[
        "I can answer any question You want to know on ..........",
        "My potential flows in responding all of your desires on  ...........",
        "I believe to be powerful enough to respond any question you have on ..........."
    ]
};

const greetings = [];
const greetings2= [];
const goodbyes = [];
const names = [];
const creators = [];
const insults = [];
const ingredients = [];
const potentials = [];
const insultp = [];

for (let i=0; i<jsonData.length; i++){
    if (jsonData[i].response == "greeting") {
        greetings.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "goodbye"){
        goodbyes.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "name"){
        names.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "creator"){
        creators.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "greeting2"){
        greetings2.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "insult"){
        insults.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "ingredient"){
        ingredients.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "potential"){
        potentials.push(jsonData[i].potential);
    }else if(jsonData[i].response == "insultp"){
        insultp.push(jsonData[i].prompt);
    }

}
function boot(prompt) {
    // greetings = ["hi", "hello", "hey", "what's up", "howdy"]; // List of common greetings
    const normalizedPrompt = prompt.toLowerCase();

    for (const greeting of greetings) {
        if (normalizedPrompt.includes(greeting)) {
            return "greeting";
        }
    }
    for (const goodbye of goodbyes) {
        if (normalizedPrompt.includes(goodbye)) {
            return "goodbye";
        }
    }
    for (const name of names) {
        if (normalizedPrompt.includes(name)) {
            return "name";
        }
    }
    for (const creator of creators) {
        if (normalizedPrompt.includes(creator)) {
            return "creator";
        }
    }
    for (const greeting2 of greetings2) {
        if (normalizedPrompt.includes(greeting2)) {
            return "greeting2";
        }
    }
    for (const insult of insults) {
        if (normalizedPrompt.includes(insult)) {
            return "insult";
        }
    }
    for (const ingredient of ingredients) {
        if (normalizedPrompt.includes(ingredient)) {
            return "ingredient";
        }
    }
    for (const potential of potentials) {
        if (normalizedPrompt.includes(potential)) {
            return "potential";
        }
    }
    for (const potential of insultp) {
        if (normalizedPrompt.includes(potential)) {
            return "insultp";
        }
    }
    return null;
}

function run(prompt){
    let response = boot(prompt);
    switch(response){
        case "greeting":
            return responses.greetings[Math.floor(Math.random()*responses.greetings.length)];
            break;
        case "greeting2":
            return responses.greetings2[Math.floor(Math.random()*responses.greetings2.length)];
            break;
        case "goodbye":
            return responses.goodbye[Math.floor(Math.random()*responses.goodbye.length)];
            break;
        case "creator":
            return responses.creator[Math.floor(Math.random()*responses.creator.length)];
            break;
        case "name":
            return responses.name[Math.floor(Math.random()*responses.name.length)];
            break;
        case "insult":
            return responses.insult[Math.floor(Math.random()*responses.insult.length)];
            break;  
        case "ingredient":
            return responses.ingredient[Math.floor(Math.random()*responses.ingredient.length)];
            break;
        case "potential":
            return responses.potential[Math.floor(Math.random()*responses.potential.length)];
            break; 
        case "insultp":
            return responses.insultp[Math.floor(Math.random()*responses.insultp.length)];
            break;           
        default:
            return "Fuck the system Cuz";
            break;
    }    
}
