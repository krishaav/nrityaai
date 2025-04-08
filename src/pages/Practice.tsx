
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Play, Square, ArrowRight } from 'lucide-react';

const danceStyles = [
  { id: 'bharatanatyam', name: 'Bharatanatyam' },
  { id: 'kathak', name: 'Kathak' },
  { id: 'kuchipudi', name: 'Kuchipudi' },
  { id: 'odissi', name: 'Odissi' },
  { id: 'mohiniyattam', name: 'Mohiniyattam' },
];

const Practice = () => {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [cameraActive, setCameraActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [videoConstraints, setVideoConstraints] = useState({
    width: 720,
    height: 540,
    facingMode: "user"
  });
  
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      setCameraActive(true);
      console.log("Camera started successfully");
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access your camera. Please check permissions and try again.");
    }
  };
  
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      
      setCameraActive(false);
      console.log("Camera stopped");
    }
  };
  
  const startRecording = () => {
    // Start with 3 second countdown
    setCountdown(3);
    
    const countdownInterval = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount <= 1) {
          clearInterval(countdownInterval);
          beginActualRecording();
          return null;
        }
        return prevCount - 1;
      });
    }, 1000);
  };
  
  const beginActualRecording = () => {
    if (!streamRef.current) return;
    
    recordedChunksRef.current = [];
    const mediaRecorder = new MediaRecorder(streamRef.current);
    
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };
    
    mediaRecorder.onstop = () => {
      const videoBlob = new Blob(recordedChunksRef.current, {
        type: 'video/webm'
      });
      
      const videoUrl = URL.createObjectURL(videoBlob);
      console.log("Recording finished. Video URL:", videoUrl);
      
      // Here we would typically upload the video for AI processing
      // and redirect to the feedback page
      
      // For demo, just alert that recording is done
      alert("Recording complete! In a real app, this would be uploaded for AI analysis.");
    };
    
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setIsRecording(true);
    
    // Auto-stop recording after 30 seconds
    setTimeout(() => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        stopRecording();
      }
    }, 30000);
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };
  
  useEffect(() => {
    return () => {
      // Clean up when component unmounts
      stopCamera();
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 md:px-8 py-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 tradition-gradient-text">Practice Studio</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="tradition-card h-full">
                <CardHeader>
                  <CardTitle>Dance Recording Studio</CardTitle>
                  <CardDescription>
                    Record yourself performing a dance for AI analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                    {cameraActive ? (
                      <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline 
                        muted 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <Camera size={48} className="mx-auto mb-4 text-gray-400" />
                        <p className="text-gray-400">Camera feed will appear here</p>
                        <Button 
                          onClick={startCamera} 
                          className="mt-4 bg-tradition-maroon hover:bg-tradition-maroon/90"
                        >
                          Turn On Camera
                        </Button>
                      </div>
                    )}
                    
                    {countdown !== null && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="text-6xl font-bold text-white">{countdown}</div>
                      </div>
                    )}
                    
                    {isRecording && (
                      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                        <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                        Recording
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium mb-1">
                        Select Dance Style
                      </label>
                      <Select 
                        value={selectedStyle} 
                        onValueChange={setSelectedStyle}
                        disabled={isRecording}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a dance style" />
                        </SelectTrigger>
                        <SelectContent>
                          {danceStyles.map(style => (
                            <SelectItem key={style.id} value={style.id}>
                              {style.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex gap-2">
                      {cameraActive && !isRecording && (
                        <Button 
                          onClick={startRecording} 
                          disabled={!selectedStyle || isRecording} 
                          className="bg-tradition-maroon hover:bg-tradition-maroon/90 flex gap-2 items-center"
                        >
                          <Play size={16} />
                          Start Recording
                        </Button>
                      )}
                      
                      {isRecording && (
                        <Button 
                          onClick={stopRecording} 
                          variant="destructive"
                          className="flex gap-2 items-center"
                        >
                          <Square size={16} />
                          Stop Recording
                        </Button>
                      )}
                      
                      {cameraActive && (
                        <Button 
                          onClick={stopCamera} 
                          variant="outline"
                          disabled={isRecording}
                        >
                          Turn Off Camera
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="tradition-card h-full">
                <CardHeader>
                  <CardTitle>Recording Tips</CardTitle>
                  <CardDescription>
                    Follow these guidelines for the best analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Tabs defaultValue="setup">
                    <TabsList className="w-full">
                      <TabsTrigger value="setup" className="flex-1">Setup</TabsTrigger>
                      <TabsTrigger value="recording" className="flex-1">Recording</TabsTrigger>
                      <TabsTrigger value="tips" className="flex-1">Tips</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="setup" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">Proper Environment</h3>
                        <p className="text-sm text-muted-foreground">
                          Choose a well-lit room with enough space to move freely.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Camera Placement</h3>
                        <p className="text-sm text-muted-foreground">
                          Position your camera at waist height, about 6-8 feet away.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Wear Appropriate Attire</h3>
                        <p className="text-sm text-muted-foreground">
                          Wear form-fitting clothes that contrast with your background.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="recording" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">Duration</h3>
                        <p className="text-sm text-muted-foreground">
                          Recordings are limited to 30 seconds for optimal analysis.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Full Body View</h3>
                        <p className="text-sm text-muted-foreground">
                          Make sure your entire body is visible in the frame.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Privacy</h3>
                        <p className="text-sm text-muted-foreground">
                          All videos are processed securely and never shared.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="tips" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">Practice First</h3>
                        <p className="text-sm text-muted-foreground">
                          Rehearse a few times before recording your performance.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Clear Background</h3>
                        <p className="text-sm text-muted-foreground">
                          Remove clutter from the background for better analysis.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Stay in Frame</h3>
                        <p className="text-sm text-muted-foreground">
                          Maintain position within the camera frame throughout.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold mb-2">What happens next?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      After recording, our AI will analyze your performance and provide detailed feedback on your technique, timing, posture, and expressions.
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => window.location.href = '/feedback'}
                    >
                      View Sample Feedback
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Practice;
