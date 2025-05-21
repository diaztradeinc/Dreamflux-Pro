import Link from "next/link";
import { useRouter } from "next/router";
import { usePromptContext } from "@/contexts/PromptContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/generate", label: "Generate" },
  { href: "/models", label: "Models" },
  { href: "/settings", label: "Settings" },
  { href: "/pro", label: "Pro" }
];

export default function Navbar() {
  const router = useRouter();
  const { isLoggedIn, user } = usePromptContext();

  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-sm px-6 py-4 mb-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Dreamflux</h1>
        <div className="space-x-4 flex items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`cursor-pointer text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition ${
                  router.pathname === link.href
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          {isLoggedIn && (
            <span className="ml-4 px-3 py-1 text-xs bg-yellow-400 text-black rounded-full">
              PRO
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
