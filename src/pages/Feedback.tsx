
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';
import { ArrowLeft, ArrowRight, Download, Share } from 'lucide-react';

// Mock data for analysis
const performanceScores = {
  overall: 78,
  timing: 82,
  technique: 76,
  posture: 85,
  expression: 69
};

const movementAnalysis = [
  { name: '0s', accuracy: 95 },
  { name: '5s', accuracy: 88 },
  { name: '10s', accuracy: 72 },
  { name: '15s', accuracy: 65 },
  { name: '20s', accuracy: 78 },
  { name: '25s', accuracy: 85 }
];

const radarData = [
  {
    category: 'Timing',
    value: 82,
    fullMark: 100,
  },
  {
    category: 'Technique',
    value: 76,
    fullMark: 100,
  },
  {
    category: 'Posture',
    value: 85,
    fullMark: 100,
  },
  {
    category: 'Expression',
    value: 69,
    fullMark: 100,
  },
  {
    category: 'Energy',
    value: 72,
    fullMark: 100,
  },
];

const progressData = [
  { date: 'Feb 1', score: 65 },
  { date: 'Feb 15', score: 68 },
  { date: 'Mar 1', score: 72 },
  { date: 'Mar 15', score: 75 },
  { date: 'Apr 1', score: 78 }
];

const keyMoments = [
  { time: '0:05', issue: 'Hand position too low in mudra', tip: 'Raise hands to eye level for proper Bharatanatyam form' },
  { time: '0:12', issue: 'Loss of rhythm during transition', tip: 'Count beats internally during complex transitions' },
  { time: '0:18', issue: 'Weight not properly balanced', tip: 'Keep weight centered over both feet during turns' },
  { time: '0:23', issue: 'Facial expression neutral during emotive segment', tip: 'Practice expressions separately in mirror' }
];

const Feedback = () => {
  const [selectedKeyMoment, setSelectedKeyMoment] = useState(0);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 md:px-8 py-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tradition-gradient-text">Performance Analysis</h1>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download size={16} />
                Export
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Share size={16} />
                Share
              </Button>
            </div>
          </div>
          
          {/* Performance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="tradition-card md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Bharatanatyam - April 8, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                      {/* This would be the recorded video in a real implementation */}
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          <p>Your dance recording</p>
                          <p className="text-sm">(Video playback would appear here)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-center mb-4">
                      <div className="relative inline-block">
                        <svg className="w-40 h-40">
                          <circle
                            className="text-gray-300"
                            strokeWidth="8"
                            stroke="currentColor"
                            fill="transparent"
                            r="70"
                            cx="80"
                            cy="80"
                          />
                          <circle
                            className="text-tradition-gold"
                            strokeWidth="8"
                            strokeDasharray={440}
                            strokeDashoffset={440 - (440 * performanceScores.overall) / 100}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="70"
                            cx="80"
                            cy="80"
                          />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="text-4xl font-bold">{performanceScores.overall}</span>
                          <span className="text-xl">/100</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mt-2">Overall Score</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-tradition-maroon">{performanceScores.timing}</div>
                        <div className="text-sm text-muted-foreground">Timing</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-tradition-terracotta">{performanceScores.technique}</div>
                        <div className="text-sm text-muted-foreground">Technique</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-tradition-orange">{performanceScores.posture}</div>
                        <div className="text-sm text-muted-foreground">Posture</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-tradition-gold">{performanceScores.expression}</div>
                        <div className="text-sm text-muted-foreground">Expression</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="tradition-card">
              <CardHeader>
                <CardTitle>Improvement Tips</CardTitle>
                <CardDescription>Personalized suggestions for growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 pb-2 border-b border-border">
                  <h3 className="font-semibold text-tradition-maroon">Focus Areas</h3>
                  <p className="text-sm">
                    Based on your performance, focus on improving expressions and maintaining rhythm during transitions.
                  </p>
                </div>
                
                <div className="space-y-2 pb-2 border-b border-border">
                  <h3 className="font-semibold text-tradition-terracotta">Practice Recommendation</h3>
                  <p className="text-sm">
                    Dedicate 15 minutes daily to facial expressions and emotion portrayal in front of a mirror.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-tradition-gold">Strengths</h3>
                  <p className="text-sm">
                    Your posture is excellent, especially during static poses. Build on this foundation.
                  </p>
                </div>
                
                <Button className="w-full mt-4 bg-tradition-maroon hover:bg-tradition-maroon/90">
                  Start Guided Practice
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Detailed Analysis */}
          <Tabs defaultValue="movement" className="space-y-6">
            <TabsList className="bg-card border border-border w-full md:w-auto">
              <TabsTrigger value="movement">Movement Analysis</TabsTrigger>
              <TabsTrigger value="moments">Key Moments</TabsTrigger>
              <TabsTrigger value="comparison">Skill Comparison</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>
            
            <TabsContent value="movement" className="space-y-6">
              <Card className="tradition-card">
                <CardHeader>
                  <CardTitle>Movement Accuracy Over Time</CardTitle>
                  <CardDescription>
                    Track how your performance changed throughout the session
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={movementAnalysis}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                        <YAxis stroke="var(--muted-foreground)" domain={[0, 100]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'var(--card)',
                            borderColor: 'var(--border)',
                            borderRadius: '0.5rem'
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="accuracy"
                          stroke="var(--tradition-gold, #D4AF37)"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Analysis Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Your accuracy dropped around the 10-15 second mark, which corresponds to the transition between sequences. 
                      This suggests you may need more practice with smooth transitions while maintaining proper form.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="moments" className="space-y-6">
              <Card className="tradition-card">
                <CardHeader>
                  <CardTitle>Key Moments for Improvement</CardTitle>
                  <CardDescription>
                    Specific points in your performance that need attention
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 space-y-4">
                      {keyMoments.map((moment, index) => (
                        <div 
                          key={index}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            selectedKeyMoment === index 
                              ? 'border-tradition-gold bg-tradition-gold/10' 
                              : 'border-border hover:bg-muted/50'
                          }`}
                          onClick={() => setSelectedKeyMoment(index)}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{moment.time}</span>
                            {selectedKeyMoment === index && (
                              <div className="w-2 h-2 rounded-full bg-tradition-gold"></div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {moment.issue}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                        {/* This would be a specific moment from the video */}
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <div className="text-center">
                            <p>Key moment at {keyMoments[selectedKeyMoment].time}</p>
                            <p className="text-sm">(Video frame would appear here)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold">Issue Detected</h3>
                          <p className="text-sm mt-1">
                            {keyMoments[selectedKeyMoment].issue}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold">Improvement Tip</h3>
                          <p className="text-sm mt-1">
                            {keyMoments[selectedKeyMoment].tip}
                          </p>
                        </div>
                        
                        <div className="flex justify-between pt-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedKeyMoment(Math.max(0, selectedKeyMoment - 1))}
                            disabled={selectedKeyMoment === 0}
                            className="flex items-center gap-1"
                          >
                            <ArrowLeft size={16} />
                            Previous
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedKeyMoment(Math.min(keyMoments.length - 1, selectedKeyMoment + 1))}
                            disabled={selectedKeyMoment === keyMoments.length - 1}
                            className="flex items-center gap-1"
                          >
                            Next
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="comparison" className="space-y-6">
              <Card className="tradition-card">
                <CardHeader>
                  <CardTitle>Skill Breakdown</CardTitle>
                  <CardDescription>
                    Comparison across different performance aspects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart outerRadius={90} data={radarData}>
                          <PolarGrid stroke="var(--border)" />
                          <PolarAngleAxis dataKey="category" tick={{ fill: 'var(--muted-foreground)' }} />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} />
                          <Radar
                            name="Performance"
                            dataKey="value"
                            stroke="var(--tradition-gold, #D4AF37)"
                            fill="var(--tradition-gold, #D4AF37)"
                            fillOpacity={0.3}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'var(--card)',
                              borderColor: 'var(--border)',
                              borderRadius: '0.5rem'
                            }}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={radarData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="category" stroke="var(--muted-foreground)" />
                          <YAxis stroke="var(--muted-foreground)" domain={[0, 100]} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'var(--card)',
                              borderColor: 'var(--border)',
                              borderRadius: '0.5rem'
                            }}
                          />
                          <Bar dataKey="value" fill="var(--tradition-gold, #D4AF37)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Skill Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Your strongest areas are posture and timing, which shows good technical foundation. 
                      Expression scored lower, indicating an opportunity to develop emotional storytelling in your dance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="progress" className="space-y-6">
              <Card className="tradition-card">
                <CardHeader>
                  <CardTitle>Progress Over Time</CardTitle>
                  <CardDescription>
                    Track your improvement across multiple sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={progressData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                        <YAxis stroke="var(--muted-foreground)" domain={[0, 100]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'var(--card)',
                            borderColor: 'var(--border)',
                            borderRadius: '0.5rem'
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="score"
                          stroke="var(--tradition-gold, #D4AF37)"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Progress Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      You've shown consistent improvement over the past 2 months, with an overall increase of 13 points.
                      At this rate of progress, you're on track to reach advanced level performance within 3-4 months of consistent practice.
                    </p>
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

export default Feedback;
