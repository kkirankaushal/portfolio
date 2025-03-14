import { Button } from "@/components/ui/button"
import { Mail, FileText, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Kiran Kaushal Kotha</span>
              <span className="block text-primary">Business Analyst</span>
            </h1>
            <p className="max-w-prose text-lg text-gray-600 dark:text-gray-300">
              Data Analyst with 5+ years of experience in statistical analysis, business analysis, fraud detection, and
              data visualization. Specialized in ETL/ELT processes, interactive dashboards, and workflow optimization.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://drive.google.com/file/d/1RaZqPGUq46xy4QXyBSgMXWdikN8EzwSU/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/kiran-kaushal-kotha" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 p-1 shadow-xl dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="h-full w-full overflow-hidden rounded-full bg-white dark:bg-gray-900">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4339%20%281%29.JPG-PFq4iBDPPcRzu20plM0rAAX2EBgIgT.jpeg"
                alt="Kiran Kaushal Kotha"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 left-0 right-0 h-48 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0)_80%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_80%)]"></div>
    </section>
  )
}

