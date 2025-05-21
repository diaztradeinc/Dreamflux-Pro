export default function Footer() {
  return (
    <footer className="mt-16 py-6 border-t text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>&copy; {new Date().getFullYear()} Dreamflux. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/terms" className="hover:text-blue-600">Terms</a>
          <a href="/settings" className="hover:text-blue-600">Settings</a>
          <a href="https://github.com/your-repo" target="_blank" className="hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
