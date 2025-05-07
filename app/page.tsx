import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { YouTubeEmbed } from "@/components/youtube-embed"
import {
  ShoppingCart,
  BookOpen,
  FlaskRoundIcon as Flask,
  Newspaper,
  ArrowRight,
  Shield,
  Globe,
  Award,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MobileNav />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/11062b_6a8084bf14414f898a2bbdebf01bc659~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6a8084bf14414f898a2bbdebf01bc659~mv2.jpg"
            alt="Rwandan beekeeper with beehives and beautiful landscape"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">
            Connecting <span className="text-honey">Rwandan Honey</span> to Global Markets
          </h1>
          <p className="text-lg text-white/90 mb-6">
            A B2B platform bringing visibility to high-quality, authenticated honey from Rwandan apiary farmers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/marketplace">Explore Marketplace</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:text-white"
            >
              <Link href="/honey-checker">Verify Authenticity</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Why Source Rwandan Honey?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4">
              <div className="bg-honey/20 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Authenticated Quality</h3>
              <p className="text-muted-foreground text-center">
                Every batch is tested and certified for purity, with full traceability from hive to shelf.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="bg-honey/20 p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Impact</h3>
              <p className="text-muted-foreground text-center">
                Support sustainable livelihoods for over 3,500 Rwandan beekeepers and their communities.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="bg-honey/20 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Unique Flavor Profile</h3>
              <p className="text-muted-foreground text-center">
                Distinctive taste from Rwanda's unique flora, creating honey varieties unavailable elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Discover Rwandan Honey</h2>
          <YouTubeEmbed
            videoId="jN-HnGdiXQk"
            title="The Story of Rwandan Honey: From Hive to Global Market"
            height="h-64 sm:h-96"
          />
          <p className="text-center mt-4 text-muted-foreground">
            Learn about the journey of Rwandan honey and the beekeepers behind this exceptional product
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">BeeLink Platform Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Marketplace Feature */}
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-honey/20 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">B2B Marketplace</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Connect directly with verified Rwandan honey producers, place bulk orders, and establish long-term supply
              relationships.
            </p>
            <Button asChild variant="link" className="p-0">
              <Link href="/marketplace" className="flex items-center gap-1">
                Explore Marketplace <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Education Hub Feature */}
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-honey/20 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education Hub</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Access research on Rwandan honey varieties, production methods, and the unique properties that
              differentiate them in the global market.
            </p>
            <Button asChild variant="link" className="p-0">
              <Link href="/education" className="flex items-center gap-1">
                Start Learning <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* HoneyChecker Feature */}
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-honey/20 p-3 rounded-full">
                <Flask className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Authentication Tools</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Verify the authenticity of your honey with our advanced testing tools and blockchain-based traceability
              system.
            </p>
            <Button asChild variant="link" className="p-0">
              <Link href="/honey-checker" className="flex items-center gap-1">
                Verify Authenticity <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* News & Tips Feature */}
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-honey/20 p-3 rounded-full">
                <Newspaper className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Research & Insights</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Stay updated with the latest research on honey authentication, food safety standards, and market trends in
              the global honey industry.
            </p>
            <Button asChild variant="link" className="p-0">
              <Link href="/news" className="flex items-center gap-1">
                Read Research <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Partners Say</h2>

          <div className="relative p-6 bg-card rounded-lg shadow-sm border">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-24 h-24 relative rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/b2b-meeting.png"
                  alt="Business meeting with international buyers"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="italic text-muted-foreground mb-4">
                  "BeeLink has transformed how we source honey from Rwanda. The authentication tools give us confidence
                  in the product quality, while the direct connection to farmers allows us to tell a compelling story to
                  our customers about the origin of our ingredients."
                </p>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Procurement Director, Global Foods Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join the Movement for Authentic Global South Products</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of the solution to bring visibility and fair market access to exceptional products from Rwanda and
            beyond.
          </p>
          <Button asChild size="lg">
            <Link href="/marketplace">Start Sourcing Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
