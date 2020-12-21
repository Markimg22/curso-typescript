// Quer dizer que uma função ou método não retorna nada

function somar(...args: number[]): void {
  const total = args.reduce((tot, num) => tot + num);
  console.log(total);
}

somar(10, 12, 1301, 1230123);
