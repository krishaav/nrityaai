
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUp, Award, Users, TrendingUp } from 'lucide-react';

const performanceData = [
  { name: 'Week 1', score: 65 },
  { name: 'Week 2', score: 68 },
  { name: 'Week 3', score: 75 },
  { name: 'Week 4', score: 72 },
  { name: 'Week 5', score: 80 },
  { name: 'Week 6', score: 85 },
];

const recentSessions = [
  { id: 1, date: '2025-04-05', style: 'Bharatanatyam', score: 85, duration: '15 min' },
  { id: 2, date: '2025-04-03', style: 'Kathak', score: 78, duration: '20 min' },
  { id: 3, date: '2025-04-01', style: 'Odissi', score: 82, duration: '25 min' },
  { id: 4, date: '2025-03-28', style: 'Kuchipudi', score: 75, duration: '15 min' },
];

const recommendations = [
  { id: 1, title: 'Basic Mudras in Bharatanatyam', level: 'Beginner', duration: '10 min' },
  { id: 2, title: 'Footwork in Kathak', level: 'Intermediate', duration: '15 min' },
  { id: 3, title: 'Expressions in Classical Dance', level: 'All Levels', duration: '12 min' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 md:px-8 py-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 tradition-gradient-text">Your Dance Journey</h1>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="tradition-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Practice Hours</p>
                    <h3 className="text-2xl font-bold">24.5</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-tradition-gold/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-tradition-gold" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="tradition-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Average Score</p>
                    <h3 className="text-2xl font-bold">78%</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-tradition-terracotta/20 flex items-center justify-center">
                    <ArrowUp className="h-6 w-6 text-tradition-terracotta" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="tradition-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Dance Styles</p>
                    <h3 className="text-2xl font-bold">4</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-tradition-orange/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-tradition-orange" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="tradition-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Achievements</p>
                    <h3 className="text-2xl font-bold">7</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-tradition-maroon/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-tradition-maroon" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sessions">Recent Sessions</TabsTrigger>
              <TabsTrigger value="progress">Skill Progress</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card className="tradition-card">
                <CardHeader>
                  <CardTitle>Performance Progress</CardTitle>
                  <CardDescription>Your dance scores over the past 6 weeks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                        <YAxis stroke="var(--muted-foreground)" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--card)', 
                            borderColor: 'var(--border)',
                            borderRadius: '0.5rem'
                          }} 
                        />
                        <Bar 
                          dataKey="score" 
                          fill="var(--tradition-gold, #D4AF37)" 
                          radius={[4, 4, 0, 0]} 
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sessions" className="space-y-6">
              <Card className="tradition-card">
                <CardHeader>
                  <CardTitle>Recent Dance Sessions</CardTitle>
                  <CardDescription>Your last 4 practice sessions and scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Dance Style</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentSessions.map((session) => (
                        <TableRow key={session.id}>
                          <TableCell>{session.date}</TableCell>
                          <TableCell>{session.style}</TableCell>
                          <TableCell>{session.duration}</TableCell>
                          <TableCell className="text-right">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              session.score >= 80 ? 'bg-green-100 text-green-800' : 
                              session.score >= 70 ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {session.score}%
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="progress" className="space-y-6">
              <Card className="tradition-card">
                <CardHeader>
                  <CardTitle>Skill Progression</CardTitle>
                  <CardDescription>Track your improvement across different aspects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Timing</span>
                        <span className="text-sm text-tradition-maroon font-medium">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-tradition-maroon h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Technique</span>
                        <span className="text-sm text-tradition-orange font-medium">72%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-tradition-orange h-2.5 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Posture</span>
                        <span className="text-sm text-tradition-terracotta font-medium">78%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-tradition-terracotta h-2.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Expression</span>
                        <span className="text-sm text-tradition-gold font-medium">65%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-tradition-gold h-2.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="recommendations" className="space-y-6">
              <Card className="tradition-card">
                <CardHeader>
                  <CardTitle>Recommended Practice</CardTitle>
                  <CardDescription>Based on your skill level and progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendations.map((rec) => (
                      <div key={rec.id} className="border border-border p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <h3 className="font-semibold text-lg">{rec.title}</h3>
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                          <span>Level: {rec.level}</span>
                          <span>Duration: {rec.duration}</span>
                        </div>
                        <button className="mt-3 px-4 py-2 text-sm text-tradition-maroon border border-tradition-maroon rounded-md hover:bg-tradition-maroon/10 transition-colors">
                          Start Practice
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
