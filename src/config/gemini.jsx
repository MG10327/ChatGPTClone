/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {GoogleGenerativeAI, HarmCategory, HarmBlockThreshold} from '@google/generative-ai'



    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    async function run(prompt) {
        const apiKey = "AIzaSyDC6hNbE2KIOL5MYdQEODCUot4NlS7fVa4";
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
        });

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            }
        ]

        const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [
        ],
        });

        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text());
    }

 export default run;