const players = ["Tina", "Jorge", "Julien"];

async function getResults(arr) {
  const result = await arr.forEach((player) => {
    try {
      luckyDraw(player);
    } catch (error) {
      console.log(error);
    }
  });
}

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

getResults(players);
