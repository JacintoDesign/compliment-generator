document.addEventListener('DOMContentLoaded', () => {
  // Element references
  const mainTextElement = document.getElementById('main-text');
  const punchlineElement = document.getElementById('punchline');
  const newComplimentBtn = document.getElementById('new-compliment-btn');
  const newJokeBtn = document.getElementById('new-joke-btn');
  const cornerTop = document.getElementById('corner-top');
  const cornerBottom = document.getElementById('corner-bottom');

  // Data Arrays
  const compliments = [
    "You're the human equivalent of a surprise pizza.",
    'You have a better sense of humor than most professional comedians.',
    "If you were a vegetable, you'd be a 'cute-cumber.'",
    "You're not lazy, you're just in energy-saving mode.",
    "You're more fun than a ball pit filled with puppies.",
    'Your brain is so wrinkly, it makes raisins jealous.',
    "I bet you're the person who reads the terms and conditions.",
    'You could make a grumpy cat smile.',
    "You're the kind of person who would survive a zombie apocalypse because you'd befriend the zombies.",
    "You're as smart as a dolphin, and probably a better conversationalist.",
    "If cartoon bluebirds were real, they'd be fighting over who gets to sit on your shoulder.",
    'You\'re the reason I believe in good things.',
    "You're cooler than the other side of the pillow.",
    'You have the uncanny ability to find the best snacks in any room.',
    "On a scale of 1 to 10, you're an 11. In a world of 5s.",
    "You're like a human multitasking tool, but with better hair.",
    'Your organizational skills are so good, you could probably color-code the internet.',
    "You're the avocado to my toast.",
    "You're the GOAT. And I don't mean the farm animal.",
    'You are proof that aliens have a sense of humor and good taste.',
    "You're so cool, you make ice cubes jealous.",
    "Your fashion sense is on point, even if you're just wearing pajamas.",
    "You're more unique than a four-leaf clover riding a unicorn.",
    'You have a smile that could end wars.',
    "You're as refreshing as a cold glass of lemonade on a hot day.",
    'You\'re the kind of person who can make anyone feel at home.',
    "You're so creative, you could probably invent a new color.",
    "You're the sprinkles on the cupcake of life.",
    'You have the patience of a saint, especially when dealing with me.',
    "You're a rockstar, but with better manners.",
    "You're the kind of person who can make a trip to the grocery store an adventure.",
    "You're so charming, you could sell a ketchup popsicle to a woman in white gloves.",
    "You're a ray of sunshine on a cloudy day.",
    'You\'re a true original. No one else is quite like you.',
    "You're the kind of person who always knows the right thing to say.",
    "You're so trustworthy, you could be a secret agent.",
    'You have the heart of a lion and the spirit of a puppy.',
    "You're so awesome, I'd give you a high-five even if my hands were full of pizza.",
    "You're the kind of person who can make a rainy day feel like a sunny one.",
    "You're a walking, talking encyclopedia of interesting facts.",
    'You\'re so much fun, you make every day feel like a holiday.',
    "You're the kind of person who can make a plant grow just by talking to it.",
    "You're so clever, you could probably outsmart a fox.",
    'You have the best taste in music, movies, and friends.',
    'You\'re a true masterpiece, a work of art in human form.',
    'You\'re the kind of person who can make a boring meeting interesting.',
    "You're so kind, you probably apologize to furniture when you bump into it.",
    "You have a laugh that's so contagious, it should come with a warning label.",
    "You're the kind of person who can find the good in everyone.",
    'You\'re a true gem, a diamond in the rough.',
    "You're so amazing, you make me want to be a better person.",
  ];

  const jokes = [
    { setup: "Why don't scientists trust atoms?", punchline: 'Because they make up everything!' },
    { setup: 'What do you call a fake noodle?', punchline: 'An Impasta.' },
    { setup: 'Why did the scarecrow win an award?', punchline: 'Because he was outstanding in his field.' },
    { setup: 'What do you call a lazy kangaroo?', punchline: 'Pouch potato.' },
    { setup: "Why can't a bicycle stand up by itself?", punchline: "It's two tired." },
    { setup: 'What did the zero say to the eight?', punchline: 'Nice belt!' },
    { setup: 'Why did the coffee file a police report?', punchline: 'It got mugged.' },
    { setup: 'How does a penguin build its house?', punchline: 'Igloos it together.' },
    { setup: "What's orange and sounds like a parrot?", punchline: 'A carrot.' },
    { setup: 'Why did the golfer bring two pairs of pants?', punchline: 'In case he got a hole in one.' },
    { setup: "What's a vampire's favorite fruit?", punchline: 'A neck-tarine.' },
    { setup: 'Why was the math book sad?', punchline: 'Because it had too many problems.' },
    { setup: 'What do you get when you cross a snowman and a vampire?', punchline: 'Frostbite.' },
    { setup: 'Why are ghosts such bad liars?', punchline: 'Because you can see right through them.' },
    { setup: 'What do you call a bear with no teeth?', punchline: 'A gummy bear.' },
    { setup: "What's an astronaut's favorite part of a computer?", punchline: 'The space bar.' },
    { setup: 'Why did the invisible man turn down the job offer?', punchline: "He couldn't see himself doing it." },
    { setup: "What do you call cheese that isn't yours?", punchline: 'Nacho cheese.' },
    { setup: "Why couldn't the pony sing a lullaby?", punchline: 'She was a little hoarse.' },
    { setup: "Why do we tell actors to 'break a leg?'", punchline: 'Because every play has a cast.' },
    { setup: 'What kind of car does an egg drive?', punchline: 'A Yolkswagen.' },
    { setup: 'Where do you learn to make ice cream?', punchline: 'At Sundae school.' },
    { setup: 'What do you call a sad strawberry?', punchline: 'A blueberry.' },
    { setup: 'Why did the tomato turn red?', punchline: 'Because it saw the salad dressing!' },
    { setup: 'How do you organize a space party?', punchline: 'You planet.' },
    { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts." },
    { setup: 'What has one eye but can’t see?', punchline: 'A needle.' },
    { setup: "What do you call a boomerang that won't come back?", punchline: 'A stick.' },
    { setup: 'What do you call an alligator in a vest?', punchline: 'An investigator.' },
    { setup: 'Why is it annoying to eat near a basketball team?', punchline: 'They dribble all the time.' },
    { setup: 'What do you call a fish with no eyes?', punchline: 'Fsh.' },
    { setup: 'Why did the stadium get hot after the game?', punchline: 'Because all the fans left.' },
    { setup: 'What do you call a Wookiee with a chocolate chip in its hair?', punchline: 'A chocolate chip Wookiee.' },
    { setup: "What is a computer's favorite snack?", punchline: 'Computer chips.' },
    { setup: 'What did the grape do when he got stepped on?', punchline: 'He let out a little wine.' },
    { setup: 'Why are spiders so smart?', punchline: 'They can find everything on the web.' },
    { setup: 'What did the janitor say when he jumped out of the closet?', punchline: "'Supplies!'" },
    { setup: 'What has ears but cannot hear?', punchline: 'A cornfield.' },
    { setup: 'What do you call a pig that does karate?', punchline: 'A pork chop.' },
    { setup: 'How do you make a tissue dance?', punchline: 'You put a little boogie in it.' },
    { setup: 'Why was the baby strawberry crying?', punchline: 'Because its parents were in a jam.' },
    { setup: 'What did one wall say to the other?', punchline: "I'll meet you at the corner." },
    { setup: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus." },
    { setup: "Why don't some couples go to the gym?", punchline: "Because some relationships don't work out." },
    { setup: 'I invented a new word!', punchline: 'Plagiarism.' },
    { setup: 'What do you call a dog that does magic tricks?', punchline: 'A labracadabrador.' },
    { setup: 'Why do bees have sticky hair?', punchline: 'Because they use a honeycomb.' },
    { setup: "What's a foot long and slippery?", punchline: 'A slipper.' },
    { setup: 'Why did the music teacher need a ladder?', punchline: 'To reach the high notes.' },
    { setup: 'What do you call a factory that makes okay products?', punchline: 'A satisfactory.' },
  ];

  const cornerColors = [
    '#f08080',
    '#90ee90',
    '#add8e6',
    '#ffb6c1',
    '#f0e68c',
    '#dda0dd',
    '#87ceeb',
    '#ff69b4',
  ];
  const cornerEmojis = [
    '☀️',
    '⭐',
    '❤️',
    '☘️',
    '⚡',
    '✨',
    '✔️',
    '⚛️',
    '♦️',
    '♠️',
    '♣️',
    '♥️',
    '⚓',
    '✏️',
    '⚽',
    '⚾',
    '⛳',
    '☂️',
    '⛄',
    '⛅',
  ];

  function updateCardStyle() {
    const randomColor = cornerColors[Math.floor(Math.random() * cornerColors.length)];
    const randomEmoji = cornerEmojis[Math.floor(Math.random() * cornerEmojis.length)];

    cornerTop.style.backgroundColor = randomColor;
    cornerBottom.style.backgroundColor = randomColor;
    cornerTop.textContent = randomEmoji;
    cornerBottom.textContent = randomEmoji;
  }

  function generateNewCompliment() {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    mainTextElement.textContent = randomCompliment;
    punchlineElement.textContent = '';
    punchlineElement.classList.remove('visible');
    updateCardStyle();
  }

  // Keep track of any active punchline timeout so we can cancel if user clicks again quickly
  let punchlineTimeoutId = null;

  function resetRevealState() {
    // Remove classes and content for a clean state
    document.getElementById('display-text-area').classList.remove('has-punchline');
    punchlineElement.classList.remove('visible');
    punchlineElement.textContent = '';
  }

  function generateNewJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Cancel any pending punchline reveal
    if (punchlineTimeoutId) {
      clearTimeout(punchlineTimeoutId);
      punchlineTimeoutId = null;
    }

    // Prepare setup text and reset state
    resetRevealState();
    mainTextElement.style.opacity = '1';
    mainTextElement.style.transform = 'translateY(0)';
    mainTextElement.textContent = randomJoke.setup;
    updateCardStyle();

    // Reveal punchline with smooth fade-in and lift; also nudge setup upwards
    punchlineTimeoutId = setTimeout(() => {
      document.getElementById('display-text-area').classList.add('has-punchline');
      punchlineElement.textContent = randomJoke.punchline;
      // Force reflow to ensure animation triggers even if same class is reused
      // eslint-disable-next-line no-unused-expressions
      punchlineElement.offsetHeight;
      punchlineElement.classList.add('visible');
      punchlineTimeoutId = null;
    }, 1200); // shorter delay to feel snappier with smoother animation
  }

  // Event Listeners
  newComplimentBtn.addEventListener('click', generateNewCompliment);
  newJokeBtn.addEventListener('click', generateNewJoke);

  // Spotlight mouse tracker
  window.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mouse-x', `${(e.clientX / window.innerWidth) * 100}%`);
    document.body.style.setProperty('--mouse-y', `${(e.clientY / window.innerHeight) * 100}%`);
  });

  // Initial call
  generateNewCompliment();
});
