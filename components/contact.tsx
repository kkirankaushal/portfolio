"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Let's connect to discuss opportunities and collaborations
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <a href="mailto:kiran.kotha@ndsu.edu" className="text-primary hover:underline">
                      kiran.kotha@ndsu.edu
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <a href="tel:+17012006354" className="text-primary hover:underline">
                      +1 (701) 200-6354
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Linkedin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <a
                      href="https://www.linkedin.com/in/kiran-kaushal-kotha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/kiran-kaushal-kotha
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fargo, North Dakota, USA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

