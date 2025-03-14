import Link from "next/link"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-xl font-bold text-primary">
              Kiran Kaushal Kotha
            </Link>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 md:text-left">
              Business Analyst specializing in data analytics, fraud detection, and business intelligence
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="mailto:kiran.kotha@ndsu.edu"
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary dark:hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="tel:+17012006354"
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary dark:hover:text-white"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kiran-kaushal-kotha"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/kkirankaushal"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Kiran Kaushal Kotha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

