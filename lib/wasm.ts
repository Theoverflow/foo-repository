export async function loadWasm() {
  const base64 = 'AGFzbQEAAAABBwFgAn9/AX8DAgEABwcBA2FkZAAACgkBBwAgACABags=';
  const binary = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  const { instance } = await WebAssembly.instantiate(binary);
  return instance.exports as { add: (a: number, b: number) => number };
}
