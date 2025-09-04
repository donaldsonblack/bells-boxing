"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import GrungeBackground from "@/components/grunge-background";
import PageHeader from "@/components/page-header";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      if (response.ok) {
        toast({ title: "Success!", description: "Your message has been sent." });
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <PageHeader
        title="CONTACT US"
        subtitle="Get in touch with our team for any questions or to schedule your first class"
      />

      <section className="relative py-16">
        <GrungeBackground className="opacity-10" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold uppercase tracking-wider text-red-500">Send us a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="bg-zinc-800 border-zinc-700 placeholder:text-zinc-500"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-zinc-800 border-zinc-700 placeholder:text-zinc-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  name="phone"
                  placeholder="Your Phone (Optional)"
                  className="bg-zinc-800 border-zinc-700 placeholder:text-zinc-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Select name="subject" required value={subject} onValueChange={setSubject}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100">
                    <SelectValue placeholder="Reason for contacting" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-100">
                    <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                    <SelectItem value="memberships">Memberships</SelectItem>
                    <SelectItem value="training">Personal Training</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="bg-zinc-800 border-zinc-700 placeholder:text-zinc-500"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg bg-zinc-800/30 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-zinc-400">116 Fyans St</p>
                      <p className="text-zinc-400">South Geelong VIC 3220</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-zinc-400">0 407 581 872</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-zinc-400">greg@bellsboxing.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-3 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-zinc-400">All Days: 5:00 AM – 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-zinc-950 py-16">
        <GrungeBackground className="opacity-20" />
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="relative mb-6 inline-block font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              FREQUENTLY <span className="text-red-500">ASKED QUESTIONS</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300">
              Find quick answers to common questions about Bells Boxing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-800/30 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold">Do I need to have boxing experience?</h3>
              <p className="text-zinc-300">
                No experience is necessary. We have classes for all skill levels, including complete beginners. Our
                coaches will teach you everything you need to know from the ground up.
              </p>
            </div>

            <div className="rounded-lg bg-zinc-800/30 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold">What should I bring to my first class?</h3>
              <p className="text-zinc-300">
                Just bring comfortable workout clothes, a water bottle, and a positive attitude. We provide gloves for
                beginners, but you'll want to purchase hand wraps for hygiene.
              </p>
            </div>

            <div className="rounded-lg bg-zinc-800/30 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold">Is boxing safe?</h3>
              <p className="text-zinc-300">
                Safety is our top priority. Our beginner classes focus on technique and fitness with no sparring.
                Sparring is optional and only for those who are ready and properly equipped with protective gear.
              </p>
            </div>

            <div className="rounded-lg bg-zinc-800/30 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold">How often should I train?</h3>
              <p className="text-zinc-300">
                For beginners, we recommend 2-3 sessions per week to build skills and conditioning without overtraining.
                As you advance, you may increase to 3-5 sessions per week depending on your goals.
              </p>
            </div>

            <div className="rounded-lg bg-zinc-800/30 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold">Do you offer private training?</h3>
              <p className="text-zinc-300">
                Yes, we offer one-on-one training with our expert coaches. Private sessions are perfect for accelerated
                learning, competition preparation, or focused skill development.
              </p>
            </div>

            <div className="rounded-lg bg-zinc-800/30 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold">Can I try before I join?</h3>
              <p className="text-zinc-300">
                Your first class is free. This gives you a chance to experience our training style and facility before
                making any commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-red-600 py-12">
        <GrungeBackground className="opacity-30" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase tracking-tight text-white">
            READY TO GET STARTED?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white/90">
            Book your free introductory class today and take the first step toward transformation.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-zinc-800">
            BOOK FREE CLASS
          </Button>
        </div>
      </section>
    </main>
  )
}
