import { useSEO } from "@/hooks/useSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Blog = () => {
  useSEO({ title: "IPTV Guides, News & Streaming Tips", description: "Expert IPTV guides, setup tutorials and streaming news from HighStream. Get the most from your subscription." });
  const { t } = useLanguage();
  const blogPosts = [
    {
      title: "Best IPTV Service 2025: Your Ultimate Guide to Uninterrupted 4K Streaming & Live TV Without Cable",
      excerpt: "Tired of Sky-High Cable Bills? Welcome to the Future of TV!",
      image: "/blogs/Best-IPTV-Service-2025.webp",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Technology",
      featured: true,
      slug: "best-iptv-service-2025"
    },
    {
      title: "Watch UEFA Champions League & Premier League Live: The Ultimate 4K IPTV Football Experience (Cable-Free!)",
      excerpt: "Are You Missing the Thrill of Top-Tier Football? Ditch Cable, Embrace IPTV!",
      image: "/blogs/UEFA-Champions-League.webp",
      date: "January 12, 2025",
      readTime: "8 min read",
      category: "Technology",
      featured: false,
      slug: "ultimate-iptv-football-experience"
    },
      {
   title: "IPTV Buffering Fix: How to Get Smooth 4K Streams on Your Firestick & Smart TV",
      excerpt: "Frustrated by constant buffering? This comprehensive troubleshooting guide provides actionable steps to ensure smooth 4K streams every time on your Firestick and Smart TV.",
      image: "/blogs/4K-streaming.webp",
      date: "January 20, 2025",
      readTime: "12 min read",
      category: "Technology",
      slug: "flawless-4k-streaming-guide"
    },
    // {
    //   title: "Comparing IPTV vs Cable TV: Cost, Quality & Features",
    //   excerpt: "An in-depth comparison of IPTV services versus traditional cable television, covering pricing, channel selection, and streaming quality.",
    //   image: "/placeholder.svg",
    //   date: "January 10, 2025",
    //   readTime: "6 min read",
    //   category: "Comparison",
    //   featured: false,
    //   slug: "iptv-vs-cable-comparison"
    // },
    // {
    //   title: "How to Optimize Your Internet for IPTV Streaming",
    //   excerpt: "Learn essential tips and tricks to ensure smooth, buffer-free IPTV streaming with optimal internet settings and configurations.",
    //   image: "/placeholder.svg",
    //   date: "January 8, 2025",
    //   readTime: "7 min read",
    //   category: "Tutorial",
    //   featured: false,
    //   slug: "optimize-internet-for-iptv"
    // },
    // {
    //   title: "Legal Considerations for IPTV Services in 2025",
    //   excerpt: "Understanding the legal landscape of IPTV services, licensing requirements, and how to choose legitimate providers.",
    //   image: "/placeholder.svg",
    //   date: "January 5, 2025",
    //   readTime: "10 min read",
    //   category: "Legal",
    //   featured: false,
    //   slug: "legal-considerations-iptv-2025"
    // },
    // {
    //   title: "Best IPTV Apps for Android and iOS Devices",
    //   excerpt: "Comprehensive review of the top IPTV applications for mobile devices, comparing features, usability, and performance.",
    //   image: "/placeholder.svg",
    //   date: "January 3, 2025",
    //   readTime: "9 min read",
    //   category: "Apps",
    //   featured: false,
    //   slug: "best-iptv-apps-mobile"
    // }
  ];

  const categories = ["All", "Technology", "Tutorial", "Comparison", "Legal", "Apps"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('blog.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          {/* <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div> */}

          {/* Featured Post */}
          {/* {blogPosts.find(post => post.featured) && (
            <Card className="mb-12 border-primary/20">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={blogPosts.find(post => post.featured)?.image}
                    alt={blogPosts.find(post => post.featured)?.title}
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">Featured Article</Badge>
                  <h2 className="text-2xl font-bold mb-4">
                    {blogPosts.find(post => post.featured)?.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {blogPosts.find(post => post.featured)?.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {blogPosts.find(post => post.featured)?.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts.find(post => post.featured)?.readTime}
                    </div>
                  </div>
                  <Link to={`/blog/${blogPosts.find(post => post.featured)?.slug}`}>
                    <Button className="w-fit">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )} */}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video" style={{ aspectRatio: "18/9" }}>
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CalendarDays className="h-3 w-3" />
                      {post.date}
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {/* <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;