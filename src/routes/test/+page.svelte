<script>
  import { onMount } from 'svelte';

  const words = ['ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 'action', 'activity', 'actually', 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'agency', 'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'all', 'allow', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'American', 'among', 'amount', 'analysis', 'and', 'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area', 'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'as', 'ask', 'assume', 'at', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'be', 'beat', 'beautiful', 'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best', 'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue', 'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother', 'budget', 'build', 'building', 'business', 'but', 'buy', 'by', 'call', 'camera', 'campaign'];

  let score = 0;
  let currentWord;
  let startTime;
  let wordRef = {};

  let player;
  let typedWord;
  let wordInput;

  let playerX = 10;
  let playerY;
  const speed = 5;

  let gameLoopInterval;

  function placeWord() {
    const word = { text: words[Math.floor(Math.random() * words.length)], x: window.innerWidth + 10, y: Math.random() * (window.innerHeight - 50) };
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

    if (Math.random() < 0.01) {
      placeWord();
    }
  }

  onMount(() => {
    player = $player;
    typedWord = $typedWord;
    wordInput = $wordInput;
    playerY = window.innerHeight - 50;

    gameLoopInterval = setInterval(gameLoop, 1000 / 60);
    placeWord();

    return () => {
      clearInterval(gameLoopInterval);
    };
  });
</script>

<style>
  .word {
    position: absolute;
    font-size: 2rem;
  }
</style>

<div class="bg-gray-900 text-white">
  <div class="fixed top-4 right-4 text-2xl">Score: {score}</div>
  <div id="game" class="h-screen w-screen overflow-hidden relative">
    <div id="player" class="absolute bottom-10 left-10 w-8 h-8 bg-blue-500" bind:this={$player}></div>
    {#each words as word}
      <div class="word" style="top: {word.y}px; left: {word.x}px;" bind:this={wordRef[word.text]}>{word.text}</div>
    {/each}
  </div>
  <div id="word-input" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 rounded hidden" bind:this={$wordInput}>
    <input type="text" id="typed-word" class="border border-gray-300 rounded px-2 py-1 mb-2 w-full" bind:this={$typedWord}>
    <button id="submit-word" class="bg-blue-500 text-white px-4 py-2 rounded" on:click={checkInput}>Submit</button>
  </div>
</div>
