
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ClassSchedule = () => {
  const schedule = [
    { day: "Monday", classes: [
      { time: "9:00 AM", name: "Morning Yoga", instructor: "Jane Doe", duration: "60 min" },
      { time: "6:00 PM", name: "Evening Workout", instructor: "John Smith", duration: "45 min" }
    ]},
    { day: "Tuesday", classes: [
      { time: "7:00 AM", name: "Early Bird Session", instructor: "Sarah Johnson", duration: "45 min" },
      { time: "5:30 PM", name: "Power Hour", instructor: "Mike Wilson", duration: "60 min" }
    ]},
    { day: "Wednesday", classes: [
      { time: "9:00 AM", name: "Mid-week Boost", instructor: "Jane Doe", duration: "50 min" },
      { time: "7:00 PM", name: "Advanced Class", instructor: "Alex Brown", duration: "75 min" }
    ]},
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Class Schedule</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View our weekly schedule and register for upcoming classes. All times are in your local timezone.
            </p>
          </div>

          <div className="space-y-8">
            {schedule.map((day, dayIndex) => (
              <Card key={day.day} className="animate-fade-in" style={{ animationDelay: `${dayIndex * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl">{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {day.classes.map((classItem, classIndex) => (
                      <Card 
                        key={`${day.day}-${classIndex}`} 
                        className="hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{classItem.name}</CardTitle>
                              <CardDescription>
                                {classItem.time} • {classItem.duration}
                              </CardDescription>
                            </div>
                            <Button size="sm" className="hover:scale-105 transition-transform duration-300">
                              Register
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            <strong>Instructor:</strong> {classItem.instructor}
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Class description placeholder. Replace with actual class details and requirements.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="inline-block p-6">
              <h3 className="text-xl font-semibold mb-4">Can't find a suitable time?</h3>
              <p className="text-gray-600 mb-4">Contact us to discuss private sessions or additional class times.</p>
              <Button>Request Private Session</Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClassSchedule;
