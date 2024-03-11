export default function Obfuscated({ text }: { text: string }) {
  return [...text].map((i, index) => <span key={index}>{i}</span>)
}
