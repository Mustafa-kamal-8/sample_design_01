import { Check } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import Footer from "@/src/components/footer";

export default function MembershipPage() {
  return (
    <>
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Membership Plans</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your learning journey. No hidden fees.
              No fluff. Just pure, powerful learning.
            </p>
          </div>

          <Tabs defaultValue="monthly" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual (20% Off)</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>Perfect for beginners</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$49</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>5 live classes per month</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Limited recorded content</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Basic forum access</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Email support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Course completion certificates</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Subscribe Now</Button>
                  </CardFooter>
                </Card>
                <Card className="border-primary">
                  <CardHeader className="bg-primary text-primary-foreground">
                    <div className="bg-white/20 text-white text-xs font-bold py-1 px-3 rounded-full w-fit mb-2">
                      MOST POPULAR
                    </div>
                    <CardTitle>Premium</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Subscribe once. Learn endlessly.
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$119</span>
                      <span className="text-primary-foreground/80">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Unlimited access to all live classes</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Full library of recorded sessions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Discussion forum access</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Priority email support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Downloadable resources</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Course completion certificates</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Subscribe Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Elite</CardTitle>
                    <CardDescription>Everything plus coaching</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$199</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>All Premium features</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Monthly 1-on-1 coaching session</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Priority booking for live classes</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Personalized learning path</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Direct chat with instructors</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Advanced certification options</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Subscribe Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="annual">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>Perfect for beginners</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$39</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Billed annually ($468)
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>5 live classes per month</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Limited recorded content</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Basic forum access</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Email support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Course completion certificates</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Subscribe Now</Button>
                  </CardFooter>
                </Card>
                <Card className="border-primary">
                  <CardHeader className="bg-primary text-primary-foreground">
                    <div className="bg-white/20 text-white text-xs font-bold py-1 px-3 rounded-full w-fit mb-2">
                      MOST POPULAR
                    </div>
                    <CardTitle>Premium</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Subscribe once. Learn endlessly.
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$95</span>
                      <span className="text-primary-foreground/80">/month</span>
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      Billed annually ($1,140)
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Unlimited access to all live classes</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Full library of recorded sessions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Discussion forum access</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Priority email support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Downloadable resources</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Course completion certificates</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Subscribe Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Elite</CardTitle>
                    <CardDescription>Everything plus coaching</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$159</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Billed annually ($1,908)
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>All Premium features</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Monthly 1-on-1 coaching session</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Priority booking for live classes</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Personalized learning path</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Direct chat with instructors</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Advanced certification options</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Subscribe Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-muted p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Can I switch between plans?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will take effect at the start of your next billing
                  cycle.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  We offer a 7-day free trial for new members on any plan. You
                  can cancel anytime during the trial period without being
                  charged.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers.
                  All payments are processed securely.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">
                  Can I cancel my subscription?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll
                  continue to have access until the end of your current billing
                  period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
