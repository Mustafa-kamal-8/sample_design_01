import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card, CardContent } from "@/src/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "@/src/components/footer";

export default function ContactPage() {
  return (
    <>
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help. Reach out
              to our team using any of the methods below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="font-medium">1234 Edision Street Suits 200</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="font-medium">(123) 456-7890</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="font-medium">info@altelectric.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input id="first-name" placeholder="Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input id="email" type="email" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <Input id="number" placeholder="Phone Number" />
                </div>
                <div className="space-y-2">
                  <Textarea id="message" placeholder="Add Summary" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-[400px] border-none"
                  src="https://www.google.com/maps?q=12.98323231986023, 77.52664609243219&hl=es&z=14&output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
