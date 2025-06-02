import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import Footer from "@/src/components/footer";
import { ModeToggle } from "@/src/components/mode-toggle";

export default function CoachGuidelinesPage() {
  const coachData = [
    {
      title: "Licensed Therapists",
      description:
        "Licensed therapists and mental wellness professionals offering group or 1:1 emotional support.",
      image: "/placeholder.svg",
    },
    {
      title: "Organizational Experts",
      description:
        "Coaches with expertise in workplace structure, leadership dynamics, team efficiency, and performance coaching.",
      image: "/placeholder.svg",
    },
    {
      title: "HR & Well-being Consultants",
      description:
        "Specialists in employee wellness, organizational culture, HR frameworks, and healthy workplace ecosystems.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <main className="flex-1 container mx-auto px-4 py-12 space-y-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">Coach Guidelines</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about becoming and succeeding as a coach
            on our platform.
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="space-y-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 bg-card border border-border rounded-md">
            <TabsTrigger value="getting-started" className="bg-background text-foreground">
              Getting Started
            </TabsTrigger>
            <TabsTrigger value="content-creation" className="bg-background text-foreground">
              Content Creation
            </TabsTrigger>
            <TabsTrigger value="session-delivery" className="bg-background text-foreground">
              Session Delivery
            </TabsTrigger>
            <TabsTrigger value="policies" className="bg-background text-foreground">
              Policies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="space-y-6">
            <h2 className="text-2xl font-bold">Welcome to Our Coaching Community</h2>
            <p className="text-muted-foreground">
              We’re excited to have you join our network of professionals
              empowering learners through live sessions and one-on-one
              mentorship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coachData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2 text-foreground">Live Class Hosting</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  <li>Use clear titles and class descriptions.</li>
                  <li>Set consistent weekly availability.</li>
                  <li>Upload class materials when needed.</li>
                  <li>Use provided Zoom links for live sessions.</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2 text-foreground">Recording Policy</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  <li>All live classes will be recorded.</li>
                  <li>Ensure sessions are well-paced and content-rich.</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2 text-foreground">One-on-One Consultations</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  <li>Prepare based on learner goals.</li>
                  <li>Respect session duration and timing.</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="mb-4">
                Apply now to join our community of expert coaches and share your
                knowledge.
              </p>
              <Button asChild>
                <Link href="/become-coach">Register Now</Link>
              </Button>
            </div>
          </TabsContent>

        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
