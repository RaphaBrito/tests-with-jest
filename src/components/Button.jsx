export default function Button({ label, clique }) {
  return <button onClick={clique}>{label}</button>;
}
