import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [showNSFW, setShowNSFW] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-lg">Dark Mode</span>
          <button
            className={\`\${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} px-4 py-2 rounded-md\`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Enabled" : "Disabled"}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg">Show NSFW Content</span>
          <button
            className={\`\${showNSFW ? "bg-red-600 text-white" : "bg-gray-200 text-black"} px-4 py-2 rounded-md\`}
            onClick={() => setShowNSFW(!showNSFW)}
          >
            {showNSFW ? "Visible" : "Hidden"}
          </button>
        </div>

        <p className="text-sm text-gray-500 pt-6">
          More settings coming soon — such as notifications, API control, and more.
        </p>
      </div>
    </div>
  );
}
