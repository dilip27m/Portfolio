export default function Education() {
  return (
    <div className="px-8 py-12 max-w-6xl mx-auto text-gray-900 dark:text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2">
        Education
      </h2>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Amrita University</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">2023 - Present</p>
        </div>
        <p className="text-lg">Bachelor of Technology in Computer Science</p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Currently pursuing my degree with a focus on software engineering and AI.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Narayana Junior College</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">2021 - 2023</p>
        </div>
        <p className="text-lg">Intermediate MPC (Mathematics, Physics, Chemistry)</p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">Marks: 971/1000</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Narayana Olympiad School</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">2019 - 2021</p>
        </div>
        <p className="text-lg">High School</p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">Marks: 10/10 (GPA)</p>
      </div>
    </div>
  );
}
