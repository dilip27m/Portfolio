export default function Achievements() {
  return (
    <div className="px-8 py-12 max-w-6xl mx-auto text-gray-900 dark:text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2">
        Achievements
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          JEE Mains
        </h3>
        <ul className="text-lg ml-6 list-disc">
          <li>General Category: Rank: 63,000 out of 12 Lakhs</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          JEE Advanced
        </h3>
        <ul className="text-lg ml-6 list-disc">
          <li>General Category: Rank 23,000 out of 2.5 Lakhs</li>
          <li>EWS Category: Rank 3,000</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          COMEDK
        </h3>
        <ul className="text-lg ml-6 list-disc">
          <li>General Category: Rank: 2,800</li>
        </ul>
      </div>
    </div>
  );
}
