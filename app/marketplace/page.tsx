import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Star, MapPin, ShoppingCart, Heart, Info } from "lucide-react"
import { YouTubeEmbed } from "@/components/youtube-embed"

export default function Marketplace() {
  return (
    <main className="min-h-screen">
      <MobileNav />

      {/* Header */}
      <section className="py-6 px-4">
        <h1 className="text-2xl font-bold mb-2">B2B Honey Marketplace</h1>
        <p className="text-muted-foreground mb-4">
          Connect directly with verified Rwandan honey producers for bulk orders
        </p>

        {/* Search and Filter */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search honey products..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="raw">Raw</TabsTrigger>
            <TabsTrigger value="organic">Organic</TabsTrigger>
            <TabsTrigger value="specialty">Specialty</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>

      {/* Featured Producer Video */}
      <section className="px-4 mb-6">
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Featured Producer</h2>
          <YouTubeEmbed videoId="jN-HnGdiXQk" title="Meet the Beekeepers: Rwandan Honey Cooperative" />
          <div className="mt-3 flex items-start gap-3">
            <Info className="h-5 w-5 text-primary mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Learn about the traditional and sustainable beekeeping practices of our featured producer cooperative in
              Rwanda's Northern Province.
            </p>
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="px-4 pb-20">
        <div className="grid grid-cols-2 gap-4">
          {/* Product 1 */}
          <Card className="overflow-hidden">
            <div className="relative h-40 bg-muted">
              <Image className="fill" src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/09/raw-honey-732x549-thumbnail.jpg" alt="Rwandan Wildflower Honey" fill style={{ objectFit: "fill" }} />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-honey text-honey-foreground">Organic</Badge>
            </div>
            <CardHeader className="p-3">
              <CardTitle className="text-base">Wildflower Honey</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-honey text-honey mr-1" />
                <span>4.8</span>
                <span className="mx-1">•</span>
                <MapPin className="h-3 w-3 mr-1" />
                <span>Northern Rwanda</span>
              </div>
            </CardHeader>
            <CardFooter className="p-3 pt-0 flex justify-between">
              <div className="font-medium">$24.99/kg</div>
              <Button size="sm" variant="secondary">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Inquire
              </Button>
            </CardFooter>
          </Card>

          {/* Product 2 */}
          <Card className="overflow-hidden">
            <div className="relative h-40 bg-muted">
            <Image className="fill" src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/09/raw-honey-732x549-thumbnail.jpg" alt="Rwandan Wildflower Honey" fill style={{ objectFit: "fill" }} /> <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-primary text-primary-foreground">Raw</Badge>
            </div>
            <CardHeader className="p-3">
              <CardTitle className="text-base">Raw Honeycomb</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-honey text-honey mr-1" />
                <span>4.9</span>
                <span className="mx-1">•</span>
                <MapPin className="h-3 w-3 mr-1" />
                <span>Eastern Rwanda</span>
              </div>
            </CardHeader>
            <CardFooter className="p-3 pt-0 flex justify-between">
              <div className="font-medium">$39.99/kg</div>
              <Button size="sm" variant="secondary">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Inquire
              </Button>
            </CardFooter>
          </Card>

          {/* Product 3 */}
          <Card className="overflow-hidden">
            <div className="relative h-40 bg-muted">
            <Image className="fill" src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/09/raw-honey-732x549-thumbnail.jpg" alt="Rwandan Wildflower Honey" fill style={{ objectFit: "fill" }} />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-honey text-honey-foreground">Specialty</Badge>
            </div>
            <CardHeader className="p-3">
              <CardTitle className="text-base">Eucalyptus Honey</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-honey text-honey mr-1" />
                <span>4.7</span>
                <span className="mx-1">•</span>
                <MapPin className="h-3 w-3 mr-1" />
                <span>Western Rwanda</span>
              </div>
            </CardHeader>
            <CardFooter className="p-3 pt-0 flex justify-between">
              <div className="font-medium">$28.99/kg</div>
              <Button size="sm" variant="secondary">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Inquire
              </Button>
            </CardFooter>
          </Card>

          {/* Product 4 */}
          <Card className="overflow-hidden">
            <div className="relative h-40 bg-muted">
            <Image className="fill" src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/09/raw-honey-732x549-thumbnail.jpg" alt="Rwandan Wildflower Honey" fill style={{ objectFit: "fill" }} />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-primary text-primary-foreground">Bulk</Badge>
            </div>
            <CardHeader className="p-3">
              <CardTitle className="text-base">Bulk Raw Honey</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-honey text-honey mr-1" />
                <span>4.6</span>
                <span className="mx-1">•</span>
                <MapPin className="h-3 w-3 mr-1" />
                <span>Southern Rwanda</span>
              </div>
            </CardHeader>
            <CardFooter className="p-3 pt-0 flex justify-between">
              <div className="font-medium">$22.99/kg</div>
              <Button size="sm" variant="secondary">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Inquire
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* B2B Information */}
        <div className="mt-8 p-4 border rounded-lg bg-muted">
          <h3 className="font-semibold mb-2">B2B Purchasing Information</h3>
          <p className="text-sm text-muted-foreground mb-3">
            All products are available for bulk orders with minimum quantities starting at 100kg. Custom packaging and
            labeling services are available for wholesale buyers.
          </p>
          <Button>Request Wholesale Information</Button>
        </div>
      </section>
    </main>
  )
}
