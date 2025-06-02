import Link from "next/link"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Separator } from "@/src/components/ui/separator"
import { Card, CardContent } from "@/src/components/ui/card"
import Footer from "@/src/components/footer"

export default function BlogPostPage() {
  // This would normally come from a database or API
  const post = {
 
    title: "10 Essential Tips for Online Learning Success",
    content: `
      <p>Online learning has become increasingly popular in recent years, offering flexibility and accessibility to students of all backgrounds. However, succeeding in an online learning environment requires a unique set of skills and strategies. In this article, we'll explore ten essential tips to help you excel in your online courses and maximize your learning potential.</p>
      
      <h2>1. Create a Dedicated Study Space</h2>
      <p>Having a designated area for studying helps train your brain to focus when you're in that space. Choose a quiet, comfortable location with minimal distractions. Ensure you have a good internet connection, proper lighting, and all the materials you need within reach.</p>
      
      <h2>2. Establish a Routine</h2>
      <p>One of the biggest challenges of online learning is managing your time effectively. Create a weekly schedule that includes specific times for watching lectures, reading materials, completing assignments, and participating in discussions. Treat your online classes like in-person classes by sticking to your schedule consistently.</p>
      
      <h2>3. Practice Active Learning</h2>
      <p>Passive reading or watching videos without engagement leads to poor retention. Instead, take notes, summarize key points in your own words, create mind maps, or teach the material to someone else. These active learning strategies help reinforce your understanding and memory of the content.</p>
      
      <h2>4. Participate in Discussions</h2>
      <p>Online forums and discussion boards are valuable opportunities to engage with your peers and instructors. Ask questions, share insights, and respond thoughtfully to others' comments. This interaction enhances your learning experience and helps build a sense of community despite the physical distance.</p>
      
      <h2>5. Break Down Large Tasks</h2>
      <p>Online courses often involve substantial projects or assignments. Break these down into smaller, manageable tasks with specific deadlines. This approach prevents last-minute cramming and reduces stress while improving the quality of your work.</p>
      
      <h2>6. Eliminate Distractions</h2>
      <p>Digital distractions can significantly impair your learning efficiency. Consider using website blockers, turning off notifications, or using the Pomodoro Technique (focused work sessions followed by short breaks) to maintain concentration during study periods.</p>
      
      <h2>7. Actively Seek Help</h2>
      <p>Don't hesitate to reach out to your instructor or teaching assistants when you're struggling with course material. Many online platforms offer virtual office hours, email support, or chat features. Being proactive about seeking clarification demonstrates your commitment to learning and helps prevent minor confusions from becoming major obstacles.</p>
      
      <h2>8. Connect with Peers</h2>
      <p>Form virtual study groups with classmates to discuss course materials, prepare for exams, or collaborate on projects. These connections not only enhance your understanding but also provide motivation and emotional support throughout your learning journey.</p>
      
      <h2>9. Practice Self-Care</h2>
      <p>Maintaining physical and mental well-being is crucial for academic success. Ensure you're getting adequate sleep, regular exercise, and proper nutrition. Take breaks when needed, and incorporate stress-management techniques such as meditation or deep breathing into your routine.</p>
      
      <h2>10. Reflect on Your Learning</h2>
      <p>Regularly assess your progress and learning strategies. What's working well? What could be improved? This metacognitive approach helps you adapt your methods to better suit your learning style and the specific requirements of each course.</p>
      
      <h2>Conclusion</h2>
      <p>Online learning offers tremendous opportunities for personal and professional growth, but it requires discipline, organization, and active engagement. By implementing these ten strategies, you'll be well-equipped to succeed in your virtual classroom and achieve your educational goals.</p>
    `,
    date: "May 2, 2023",
    author: {
      name: "Sarah Johnson",
      role: "Education Specialist",
      image: "/placeholder.svg?height=80&width=80",
    },
    category: "Learning Tips",
    image: "/placeholder.svg?height=400&width=800",
    relatedPosts: [
      {
        id: 2,
        title: "The Future of AI in Education: Trends to Watch",
        excerpt:
          "Explore how artificial intelligence is transforming the educational landscape and what it means for learners and educators.",
        image: "/placeholder.svg?height=150&width=300",
      },
      {
        id: 3,
        title: "How to Balance Work, Life, and Online Learning",
        excerpt:
          "Practical advice for managing your time effectively while pursuing online education alongside other responsibilities.",
        image: "/placeholder.svg?height=150&width=300",
      },
      {
        id: 4,
        title: "The Psychology of Effective Learning: Memory Techniques",
        excerpt: "Learn science-backed methods to improve retention and recall for better learning outcomes.",
        image: "/placeholder.svg?height=150&width=300",
      },
    ],
  }

  return (
    <>
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <div className="relative h-[400px] w-full mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">{post.author.role}</div>
            </div>
          </div>
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="my-12" />

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">2 days ago</div>
                </div>
                <p className="text-muted-foreground">
                  Great article! I've been struggling with online learning, and these tips are exactly what I needed.
                  Especially the part about creating a dedicated study space - that's been a game-changer for me.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Jessica Williams</div>
                  <div className="text-sm text-muted-foreground">1 week ago</div>
                </div>
                <p className="text-muted-foreground">
                  I would add that having accountability partners can be really helpful too. I've found that regular
                  check-ins with classmates keep me motivated and on track with my online courses.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
            <textarea
              className="w-full p-3 border rounded-md min-h-[120px] mb-4"
              placeholder="Share your thoughts..."
            ></textarea>
            <Button>Submit Comment</Button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id}>
                <div className="relative h-40">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">{relatedPost.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{relatedPost.excerpt}</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href={`/blog/${relatedPost.id}`}>Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
