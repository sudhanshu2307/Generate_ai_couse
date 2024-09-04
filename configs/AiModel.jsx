const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export  const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration:1 hours, • NoOf Chapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Fundamentals\",\n    \"description\": \"This course introduces the fundamentals of Python programming, covering essential concepts like data types, variables, operators, control flow, and functions. It is designed for beginners with no prior programming experience.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter covers the basics of Python, including its history, features, and how to set up your programming environment.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Data Types and Variables\",\n        \"about\": \"This chapter introduces fundamental data types in Python, such as integers, floats, strings, and booleans, and explains how to declare and use variables.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Operators and Expressions\",\n        \"about\": \"This chapter explores various operators in Python, including arithmetic, comparison, logical, and assignment operators, and demonstrates how to create and evaluate expressions.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Control Flow\",\n        \"about\": \"This chapter covers conditional statements like if-else, loops like for and while, and how to control the execution flow of your programs.\",\n        \"duration\": \"10 minutes\"\n      },\n      {\n        \"name\": \"Functions\",\n        \"about\": \"This chapter introduces the concept of functions, their definition, usage, and how they can be used to organize and reuse code.\",\n        \"duration\": \"15 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n}\n```"},
          ],
        },
      ],
    });
  
   // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    //console.log(result.response.text());

   export const GenerateChapterContent_AI=  model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Explain the concept in Detail on Topic : animals, Chapter:Animal Cognition and Problem Solving, in JSON Format with list of array with  field as title, description  in detail , Code Example(Code field in <precode> format) if applicable                                                         do it as an array \n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"title\": \"Animal Cognition\",\n    \"description\": \"Animal cognition refers to the mental capabilities of animals, including their ability to perceive, learn, remember, reason, solve problems, and communicate. It explores how animals process information, make decisions, and adapt to their environments. Studying animal cognition helps us understand the evolution of intelligence and the similarities and differences between human and animal minds.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Methods of Studying Animal Cognition\",\n    \"description\": \"Researchers use various methods to study animal cognition, including:\\n\\n* **Observational Studies:** Observing animals in their natural habitats or controlled settings to understand their behaviors and mental processes.\\n* **Experimental Studies:** Designing controlled experiments to test specific hypotheses about animal cognition. This often involves training animals on tasks and measuring their performance.\\n* **Neurological Studies:** Using brain imaging techniques to study the neural activity of animals during cognitive tasks.\\n* **Comparative Psychology:** Comparing cognitive abilities across different species to understand the evolution of intelligence.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Key Areas of Animal Cognition\",\n    \"description\": \"Animal cognition research explores various cognitive abilities, including:\\n\\n* **Perception:**  Animals' ability to sense and interpret information from their environment through sight, hearing, smell, taste, and touch.\\n* **Learning and Memory:** The ability to acquire new knowledge and retain information over time.  Animals demonstrate different types of learning, such as classical conditioning, operant conditioning, and observational learning.\\n* **Problem Solving:**  Animals' ability to devise strategies to overcome challenges and reach goals. This can involve using tools, navigating mazes, and adapting to novel situations.\\n* **Communication:** Animals use various forms of communication, including vocalizations, gestures, pheromones, and visual displays. Some animals demonstrate complex communication systems, such as those found in bees, dolphins, and primates.\\n* **Social Cognition:**  Animals' ability to understand and interact with other individuals within their social groups. This includes recognizing individuals, forming relationships, and engaging in cooperative behaviors.\\n* **Theory of Mind:**  The ability to attribute mental states, such as beliefs, desires, and intentions, to oneself and others. Some researchers believe that certain animal species may have a rudimentary form of theory of mind.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Examples of Animal Problem Solving\",\n    \"description\": \"Animals demonstrate remarkable problem-solving abilities. Here are some examples:\\n\\n* **New Caledonian Crows:** These birds are famous for their tool-making skills. They use sticks and leaves to extract insects from logs and use tools to access food in other challenging situations.\\n* **Chimpanzees:** Chimpanzees are known for their problem-solving abilities in the wild. They can use sticks to fish for termites, crack nuts with stones, and even build rudimentary shelters.\\n* **Dolphins:** Dolphins can solve puzzles involving opening containers to access food. They have also been observed using tools to help them catch prey.\\n* **Rats:** Rats are highly intelligent animals and are known for their ability to learn complex mazes and navigate through environments.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Ethical Considerations in Animal Cognition Research\",\n    \"description\": \"Animal cognition research raises ethical concerns, as it involves studying and sometimes manipulating the mental capabilities of animals. Ethical considerations include:\\n\\n* **Animal welfare:** Ensuring that animals are treated humanely and their welfare is prioritized in research.\\n* **Avoiding unnecessary harm:** Using non-invasive methods and minimizing stress on animals.\\n* **Informed consent:**  Understanding the ethical implications of research on animal cognition and obtaining informed consent from relevant authorities and stakeholders.\",\n    \"code\": \"\"\n  }\n]\n```"},
        ],
      },
    ],
  });