
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserDashboard = () => {
  const recentOrders = [
    { id: "#ORD-123456", date: "2024-01-15", status: "Delivered", total: "$357.00" },
    { id: "#ORD-123455", date: "2024-01-10", status: "Shipped", total: "$199.00" },
    { id: "#ORD-123454", date: "2024-01-05", status: "Processing", total: "$299.00" },
  ];

  const upcomingBookings = [
    { id: "#BK-001234", service: "Consultation", date: "2024-01-20", time: "2:00 PM" },
    { id: "#BK-001233", service: "Service Session", date: "2024-01-25", time: "10:00 AM" },
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back, John!</h1>
            <p className="text-xl text-gray-600">Manage your account, orders, and bookings all in one place.</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Total Orders</CardTitle>
                    <CardDescription>Lifetime orders placed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">24</div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: "0.1s" }}>
                  <CardHeader>
                    <CardTitle>Active Bookings</CardTitle>
                    <CardDescription>Upcoming appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">2</div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: "0.2s" }}>
                  <CardHeader>
                    <CardTitle>Total Spent</CardTitle>
                    <CardDescription>Lifetime spending</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">$2,150</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentOrders.map((order, index) => (
                        <div key={order.id} className="flex justify-between items-center border-b pb-2">
                          <div>
                            <div className="font-medium">{order.id}</div>
                            <div className="text-sm text-gray-500">{order.date}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{order.total}</div>
                            <div className="text-sm text-green-600">{order.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <CardHeader>
                    <CardTitle>Upcoming Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingBookings.map((booking, index) => (
                        <div key={booking.id} className="flex justify-between items-center border-b pb-2">
                          <div>
                            <div className="font-medium">{booking.service}</div>
                            <div className="text-sm text-gray-500">{booking.id}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{booking.date}</div>
                            <div className="text-sm text-gray-500">{booking.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View all your past orders and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order, index) => (
                      <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{order.id}</h3>
                            <p className="text-gray-600">Ordered on {order.date}</p>
                            <p className="text-sm text-gray-500 mt-2">Status: <span className="text-green-600">{order.status}</span></p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{order.total}</p>
                            <Button size="sm" variant="outline" className="mt-2">View Details</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Manage Bookings</CardTitle>
                  <CardDescription>View and manage your appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingBookings.map((booking, index) => (
                      <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{booking.service}</h3>
                            <p className="text-gray-600">Booking ID: {booking.id}</p>
                            <p className="text-gray-600">{booking.date} at {booking.time}</p>
                          </div>
                          <div className="space-x-2">
                            <Button size="sm" variant="outline">Reschedule</Button>
                            <Button size="sm" variant="destructive">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button>Book New Appointment</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Manage your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" defaultValue="John" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" defaultValue="Doe" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" defaultValue="john@example.com" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" defaultValue="(555) 123-4567" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                  </div>
                  <div className="pt-4">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
