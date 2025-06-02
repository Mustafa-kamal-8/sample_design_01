import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Footer from "@/src/components/footer";
import { ModeToggle } from "@/src/components/mode-toggle";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former education technology executive with 15+ years of experience in online learning platforms.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Software engineer with expertise in building scalable educational platforms and AI-driven learning tools.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jessica Williams",
      role: "Head of Content",
      bio: "Former university professor with a passion for creating engaging and effective learning materials.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Robert Thompson",
      role: "Director of Coaching",
      bio: "Certified executive coach with experience in leadership development and organizational psychology.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="p-6 space-y-8">
            <h1 className="text-4xl font-bold text-center text-foreground">
              About Us
            </h1>

            {/* About Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Empowering Lifelong Learners
                </h2>
                <p className="text-muted-foreground">
                  Learning should be flexible, personalized, and engaging. We
                  blend live classes, on-demand courses, and expert sessions so
                  you can learn at your pace.
                </p>
              </div>
              <Image
                src="/placeholder.svg"
                alt="Learning"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>

            {/* Our Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
              <Image
                src="/placeholder.svg"
                alt="Mission"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To make high-quality, expert-guided learning accessible,
                  inclusive, and interactive—so every learner can succeed, no
                  matter their background.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-card rounded-lg shadow-md p-6 mt-12">
              <h2 className="text-3xl font-bold text-foreground text-center mb-6">
                Our Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Learn From Experts",
                    desc: "Learn from licensed professionals, certified coaches, and seasoned industry leaders across multiple disciplines.",
                  },
                  {
                    title: "Flexible Learning on Your Time",
                    desc: "Flexible learning options tailored to your needs—join live sessions, access recorded classes anytime, or schedule private coaching.",
                  },
                  {
                    title: "Personalized Support",
                    desc: "Choose from live group classes, private 1-on-1 coaching, or self-paced modules to match your learning style.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 border border-border rounded-lg bg-primary text-primary-foreground shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mt-12 space-y-8">
              <h2 className="text-3xl font-bold text-foreground text-center">
                Meet the Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="bg-card border border-border rounded-lg shadow-md p-4 text-center"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-auto rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
