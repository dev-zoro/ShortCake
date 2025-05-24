// import {hindiJokes} from "./hindiJokes.js";
// const hindiJokes = require('./hindiJokes');
// // const URL = "https://official-joke-api.appspot.com/random_joke";
// const URL = "https://official-joke-api.appspot.com/jokes/general/random";

// const btn = document.getElementById("joke-btn");
// const display = document.getElementById("joke-box");

// async function getAJoke(){
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data);
//     let jokePunchline = data[0].punchline;
//     let jokeSetUp = data[0].setup;
//     console.log(jokePunchline);
//     console.log(jokeSetUp);
//     let joke = jokePunchline + " " + jokeSetUp;
    
//     display.value = `${jokeSetUp} 
// ${jokePunchline}`;

// }

// btn.addEventListener('click', async(event) => {
//     await getAJoke();
// });

const hindiJokes = [
  ["पप्पू: मम्मी मैं शादी नहीं करूंगा। ","मम्मी: क्यों?", "पप्पू: क्योंकि आप भी पापा को रोज़ डांटती हो।"],
  ["टीचर: बताओ हवा क्यों चलती है?", "छात्र: पंखा चलाने से!"],
  ["डॉक्टर: क्या परेशानी है?", "मरीज: बीवी बहुत तंग करती है।", "डॉक्टर: ये बीमारी नहीं है।", "मरीज: फिर इलाज भी खुद कर लूंगा!"],
  ["बॉस: तुम लेट क्यों आए?" ,"कर्मचारी: सर, नींद से लड़ते हुए आया हूं, हार गया!"],
  ["राजू: शादी के बाद लाइफ कैसी होती है?", "सोमू: जैसे मोबाइल में गेम हो - बैटरी भी खत्म और टेंशन भी हाई!"],
  ["टीचर: बताओ पृथ्वी घूमती क्यों है?", "छात्र: टाइम पास के लिए।"],
  ["पति: सुनो, आज खाने में क्या बना है?", "पत्नी: झगड़ा!"],
  ["गब्बर: कितने आदमी थे?", "सांभा: सरदार दो थे।", "गब्बर: तो मैं HR क्यों हूं?"],
  ["बच्चा: मम्मी पापा कहां से आते हैं?", "मम्मी: ऑनलाइन ऑर्डर करते हैं बेटा।"],
  ["टीचर: बताओ सबसे लंबा आदमी कौन?", "छात्र: जो सबसे देर तक खड़ा रहता है।"],
  ["पप्पू- क्या तुमको पता है कि मंदिर में पुरुष ही पुजारी क्यों होते है",
    "चप्पू- नहीं यार तुम ही बता दो",
    "गप्पू- मुझे पता है मैं बताता हूं",
    "गप्पू- ताकि, लोग सिर्फ भगवान परध्यान दे सकें"],

    ["टीचर- लड़कियां अगर पराया धनहोती है तो लड़के क्या होते है??",
    "गप्पू- सर चोर होते है!",
    "टीचर – वो कैसे??",
    "गप्पू- क्योकि चोरों की नजरहमेशा पराये धन पर होती है।"],

    ["हसबैंड – डार्लिंग तुम खुबसूरत होती जा रही हो,",
    "पत्नी किचन से- तुमने कैसे जाना ?",
    "हसबैंड- तुम्हें देखकर तो अब रोटियां भी जलने लगी हैं।"]
];

const jokeBox = document.getElementById("joke-box");
const btn = document.getElementById("joke-btn");

btn.addEventListener("click", () => {
  const jokeLines = hindiJokes[Math.floor(Math.random() * hindiJokes.length)];
  const fullJoke = jokeLines.join(" \n"); // Join lines with line breaks
  jokeBox.value = fullJoke;
  jokeBox.style.height = "auto";
  jokeBox.style.height = jokeBox.scrollHeight + "px";
});
