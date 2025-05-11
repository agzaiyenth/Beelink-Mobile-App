"use client"

import { useState } from "react"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Settings, Star, ChevronRight, Building, FileText, ShoppingBag } from "lucide-react"

export default function Profile() {
  const [notifications, setNotifications] = useState({
    newProducts: true,
    marketUpdates: true,
    newsletter: false,
    research: true,
  })

  return (
    <main className="min-h-screen">
      <MobileNav />

      {/* Header */}
      <section className="py-6 px-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/images/b2b-meeting.png" alt="Company Logo" />
            <AvatarFallback>GF</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Global Foods Inc.</h1>
            <p className="text-muted-foreground">Premium Food Importer</p>
            <div className="flex items-center gap-1 mt-1">
              <Badge variant="outline" className="text-xs">
                <Star className="h-3 w-3 fill-honey text-honey mr-1" />
                Verified Buyer
              </Badge>
              <Badge variant="outline" className="text-xs">
                Since 2020
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-20">
        <Tabs defaultValue="account">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="account">Company</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-4 space-y-4">
            {/* Company Information Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Company Information</CardTitle>
                <CardDescription>Manage your business details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Company Details</p>
                      <p className="text-xs text-muted-foreground">Update your business information</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Notification Settings</p>
                      <p className="text-xs text-muted-foreground">Manage your notification preferences</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Account Settings</p>
                      <p className="text-xs text-muted-foreground">Customize your account preferences</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            {/* Notification Preferences Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Notification Preferences</CardTitle>
                <CardDescription>Control which business updates you receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-products">New Honey Products</Label>
                    <p className="text-xs text-muted-foreground">Get notified about new honey varieties and products</p>
                  </div>
                  <Switch
                    id="new-products"
                    checked={notifications.newProducts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, newProducts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="market-updates">Market Updates</Label>
                    <p className="text-xs text-muted-foreground">
                      Receive notifications about honey market trends and pricing
                    </p>
                  </div>
                  <Switch
                    id="market-updates"
                    checked={notifications.marketUpdates}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketUpdates: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="newsletter">Industry Newsletter</Label>
                    <p className="text-xs text-muted-foreground">Get monthly updates about the honey industry</p>
                  </div>
                  <Switch
                    id="newsletter"
                    checked={notifications.newsletter}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, newsletter: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="research">Research & Authentication Updates</Label>
                    <p className="text-xs text-muted-foreground">
                      Receive updates on honey authentication research and technology
                    </p>
                  </div>
                  <Switch
                    id="research"
                    checked={notifications.research}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, research: checked })}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Purchase Orders</CardTitle>
                <CardDescription>Track and manage your honey orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Order 1 */}
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Order #BL-1234</h3>
                        <p className="text-xs text-muted-foreground">May 5, 2025</p>
                      </div>
                      <Badge>In Transit</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-md bg-muted relative overflow-hidden">
                        <Image
                          src="/images/honey-jar.png"
                          alt="Rwandan Wildflower Honey"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <p className="text-sm">Wildflower Honey (500kg)</p>
                        <p className="text-sm font-medium">$12,495.00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Order #BL-1189</h3>
                        <p className="text-xs text-muted-foreground">April 22, 2025</p>
                      </div>
                      <Badge>Delivered</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-md bg-muted relative overflow-hidden">
                        <Image
                          src="/images/honey-comb.png"
                          alt="Rwandan Raw Honeycomb"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <p className="text-sm">Raw Honeycomb (250kg)</p>
                        <p className="text-sm font-medium">$9,997.50</p>
                      </div>
                    </div>
                  </div>

                  {/* Order 3 */}
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Order #BL-1023</h3>
                        <p className="text-xs text-muted-foreground">March 15, 2025</p>
                      </div>
                      <Badge>Delivered</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-md bg-muted relative overflow-hidden">
                        <Image
                          src="/images/honey-varieties.png"
                          alt="Rwandan Honey Varieties"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <p className="text-sm">Mixed Varieties (1000kg)</p>
                        <p className="text-sm font-medium">$22,990.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Order History
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Documents</CardTitle>
                <CardDescription>Access and manage your important business documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Certificate of Analysis</p>
                      <p className="text-xs text-muted-foreground">Order #BL-1234 - May 5, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Authentication Report</p>
                      <p className="text-xs text-muted-foreground">Order #BL-1189 - April 22, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      <ShoppingBag className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Purchase Agreement</p>
                      <p className="text-xs text-muted-foreground">Annual Contract - January 15, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Organic Certification</p>
                      <p className="text-xs text-muted-foreground">Rwandan Producers - 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upload New Document</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
