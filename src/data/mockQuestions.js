const question1 = {
    id: 123,
    question: "What is this a picture of?",
    image: "https://images.articulate.com/f:jpg|png,a:retain,b:fff/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/d229V-nstxA6tZdi.gif",
    possibleAnswers: [
        { id: 1, text: "Cookies and coffee" },
        { id: 2, text: "Donuts and cider" },
    ],
    correctAnswer: 1,
    feedbackMessage: "I just love cookies and a warm cup of coffee!",
  };

  const question2 = {
    id: 124,
    question: "What is this a picture of plus some other text to test a super long question?",
    image: "https://images.articulate.com/f:jpg|png,a:retain,b:fff/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/d229V-nstxA6tZdi.gif",
    possibleAnswers: [
        { id: 1, text: "Cookies and coffee and a super long possible answer" },
        { id: 2, text: "Donuts and cider" },
    ],
    correctAnswer: 1,
    feedbackMessage: "I just love cookies and a warm cup of coffee! I also love writing a ton of feedback like this and this and this and this!",
  };

  export default [question1, question2];
