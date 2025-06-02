"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Footer from "../../components/footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I book a class?",
      answer:
        "Booking a class is simple! Browse our available courses, select the one you're interested in, and click on the 'Book a Live Class' or 'Enroll Course' button. You'll be guided through the booking process, including selecting your preferred schedule and completing payment.",
    },
    {
      question: "Can I cancel or reschedule a session?",
      answer:
        "Yes, you can cancel or reschedule a session up to 24 hours before the scheduled start time without any penalty. To do so, go to 'My Courses' in your account dashboard, find the session you want to change, and select the cancel or reschedule option.",
    },
    {
      question: "How do I access recorded classes?",
      answer:
        "Recorded classes are available in your account dashboard under 'My Courses' > 'Recorded Classes'. You can stream them directly from our platform or download them for offline viewing, depending on your subscription plan.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For some regions, we also support local payment methods. All payments are processed securely through our payment partners.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 7-day money-back guarantee for most courses. If you're not satisfied with your purchase, you can request a refund within 7 days of enrollment, provided you haven't completed more than 20% of the course content.",
    },
    {
      question: "How do I get technical support?",
      answer:
        "For technical issues, you can reach our support team through the 'Help' section in your account dashboard, or by emailing support@metamatch.com. Our team is available 24/7 to assist you with any technical difficulties you might encounter.",
    },
    {
      question: "Can I switch between membership plans?",
      answer:
        "Yes, you can upgrade or downgrade your membership plan at any time. Changes will take effect at the start of your next billing cycle. To change your plan, go to 'Account Settings' > 'Membership' and select the plan you wish to switch to.",
    },
    {
      question: "Are there any prerequisites for courses?",
      answer:
        "Prerequisites vary by course. Each course page clearly lists any required prior knowledge or skills. For courses that are part of a series, we recommend completing them in sequence for the best learning experience.",
    },
    {
      question: "How do I become a coach on MetaMatch?",
      answer:
        "To become a coach, click on the 'Become a Coach' button on our website and complete the application form. Our team will review your credentials and experience. If approved, you'll receive guidance on setting up your profile and creating your first course.",
    },
    {
      question: "What equipment do I need for live classes?",
      answer:
        "For most live classes, you'll need a computer or tablet with a stable internet connection, a webcam, and a microphone. Some specialized courses might require additional software or equipment, which will be specified on the course page.",
    },
    {
      question: "How do I get a certificate after completing a course?",
      answer:
        "Certificates are automatically generated upon successful completion of a course. You can download your certificates from your account dashboard under 'My Achievements'. For some professional certification courses, additional verification steps might be required.",
    },
    {
      question: "Can I access courses on mobile devices?",
      answer:
        "Yes, our platform is fully responsive and works on smartphones and tablets. We also offer dedicated mobile apps for iOS and Android, which provide enhanced features for learning on the go, including offline access to downloaded content.",
    },
  ];

  return (
    <>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Got Questions? We've Got Answers!
            </h1>
            <p className="mb-6 text-center">
              Everything you need to know about live classes, subscriptions, and
              recorded lessons.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Contact us and we'll get back to
              you as soon as possible.
            </p>
            <div className="flex justify-center gap-4 mb-10">
              <a
                href="mailto:support@metamatch.com"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Email Support
              </a>
              <a
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
