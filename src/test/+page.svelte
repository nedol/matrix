<script>
  import { onMount, onDestroy } from 'svelte';

  const words = ['ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 'action', 'activity', 'actually', 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'agency', 'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'all', 'allow', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'American', 'among', 'amount', 'analysis', 'and', 'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area', 'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'as', 'ask', 'assume', 'at', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'be', 'beat', 'beautiful', 'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best', 'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue', 'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother', 'budget', 'build', 'building', 'business', 'but', 'buy', 'by', 'call', 'camera', 'campaign'];

  let score = 0;
  let currentWord;
  let startTime;
  let playerX = 10;
  let playerY = 100;
  const speed = 5;
  const wordFrequency = 0.01; // Adjust the frequency of word appearance

  let gameLoopInterval;
  let player;

  let typedWord;
  let wordInput;

  let wordRef = {};

  function placeWord() {
    const word = {
      text: words[Math.floor(Math.random() * words.length)],
      x: window.innerWidth + 10,
      y: Math.random() * (window.innerHeight - 50)
    };
    words.push(word);
    return word;
  }

  function checkCollision(word) {
    const playerRect = player.getBoundingClientRect();
    const wordRect = word.getBoundingClientRect();
    return !(
      playerRect.right < wordRect.left ||
      playerRect.left > wordRect.right ||
      playerRect.bottom < wordRect.top ||
      playerRect.top > wordRect.bottom
    );
  }

  function startInput(word) {
    currentWord = word.text;
    wordInput.style.display = 'block';
    typedWord.value = '';
    typedWord.focus();
    startTime = Date.now();
  }

  function endInput() {
    wordInput.style.display = 'none';
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    const timeBonus = Math.max(2000 - elapsedTime, 0);
    score += Math.round(1000 + timeBonus);
  }

  function checkInput() {
    if (typedWord.value === currentWord) {
      endInput();
    }
  }

  function gameLoop() {
    playerY = Math.max(0, Math.min(playerY, window.innerHeight - player.offsetHeight));
    playerX = Math.max(0, Math.min(playerX, window.innerWidth - player.offsetWidth));
    player.style.top = `${playerY}px`;
    player.style.left = `${playerX}px`;

    words.forEach(word => {
      word.x -= speed;
      wordRef[word.text].style.left = `${word.x}px`;
      if (checkCollision(wordRef[word.text])) {
        startInput(word);
      }
    });

    words.forEach((word, index) => {
      if (word.x < -wordRef[word.text].offsetWidth) {
        words.splice(index, 1);
      }
    });

    if (Math.random() < wordFrequency) {
      placeWord();
    }
  }

  onMount(() => {
    player = $refs.player;
    typedWord = $refs.typedWord;
    wordInput = $refs.wordInput;

    gameLoopInterval = setInterval(gameLoop, 1000 / 60);
    placeWord();

    return () => {
      clearInterval(gameLoopInterval);
    };
  });

  onDestroy(() => {
    clearInterval(gameLoopInterval);
  });
</script>

<style>
  #game {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #f3f4f6;
  }

  #player {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #3b82f6;
    border-radius: 50%;
  }

  .word {
    position: absolute;
    font-size: 1rem;
    color: #111827;
  }

  #word-input {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    display: none;
  }

  #typed-word {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
  }

  #submit-word {
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>

<div id="game" tabindex="0" on:keydown="{handleKeyDown}">
  <div id="player" style="top: {playerY}px; left: {playerX}px"></div>
  {#each words as word}
    <div class="word" style="top: {word.y}px; left: {word.x}px" bind:this={wordRef[word.text]}>{word.text}</div>
  {/each}
</div>

<div id="word-input" bind:this={$refs.wordInput}>
  <input type="text" id="typed-word" bind:this={$refs.typedWord} on:input="{checkInput}">
</div>

<div class="fixed top-4 right-4 text-2xl">Score: {score}</div>

<script>
  function handleKeyDown(event) {
    const key = event.key.toLowerCase();
    if (key === 'w' || key === 'arrowup') {
      playerY -= speed;
    } else if (key === 'a' || key === 'arrowleft') {
      playerX -= speed;
    } else if (key === 's' || key === 'arrowdown') {
      playerY += speed;
    } else if (key === 'd' || key === 'arrowright') {
      playerX += speed;
    }
  }
</script>
