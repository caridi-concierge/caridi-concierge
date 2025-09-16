export default function TestPage() {
  return (
    <div className="space-y-4 p-8">
      <div className="bg-outerSpace text-white p-4">Outer Space (should be dark)</div>
      <div className="bg-merino text-black p-4">Merino (should be cream)</div>
      <div className="bg-carnation text-white p-4">Carnation (should be red)</div>
    </div>
  );
}