import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Star, Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';

const FeedbackPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to submit feedback',
        variant: 'destructive'
      });
      navigate('/login');
    }
  }, [isAuthenticated, navigate, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !message || !feedbackType) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    if (!user) return;

    setIsLoading(true);
    try {
      const feedbackData = {
        user_id: user.ID,
        feedback_type: feedbackType,
        title: title,
        message: message,
        rating: rating,
        status: 'pending',
        submitted_at: new Date().toISOString()
      };

      const { error } = await window.ezsite.apis.tableCreate(17998, feedbackData);

      if (error) {
        toast({
          title: 'Submission Failed',
          description: error,
          variant: 'destructive'
        });
      } else {
        setIsSubmitted(true);
        toast({
          title: 'Success',
          description: 'Thank you for your feedback! We appreciate your input.'
        });

        // Clear form
        setTitle('');
        setMessage('');
        setFeedbackType('');
        setRating(0);
      }
    } catch (error) {
      console.error('Feedback submission error:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred while submitting your feedback',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4" data-id="paqakbq89" data-path="src/pages/FeedbackPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md" data-id="l3wu1k76w" data-path="src/pages/FeedbackPage.tsx">

          <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/80" data-id="cprk88c4b" data-path="src/pages/FeedbackPage.tsx">
            <CardHeader className="text-center pb-6" data-id="tk5giview" data-path="src/pages/FeedbackPage.tsx">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="mqbvt4n7j" data-path="src/pages/FeedbackPage.tsx">

                <MessageSquare className="w-8 h-8 text-white" data-id="inphnbntl" data-path="src/pages/FeedbackPage.tsx" />
              </motion.div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent" data-id="5s75xu5sx" data-path="src/pages/FeedbackPage.tsx">
                Thank You!
              </CardTitle>
              <CardDescription className="text-gray-600" data-id="we2dj4873" data-path="src/pages/FeedbackPage.tsx">
                Your feedback has been submitted successfully
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center" data-id="n8lykv576" data-path="src/pages/FeedbackPage.tsx">
              <p className="text-gray-600 mb-6" data-id="c3n4enptv" data-path="src/pages/FeedbackPage.tsx">
                We value your input and will review your feedback carefully. Thank you for helping us improve Privacy Guardian!
              </p>
              <Link to="/" data-id="my8slvh19" data-path="src/pages/FeedbackPage.tsx">
                <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200" data-id="891hyffyu" data-path="src/pages/FeedbackPage.tsx">
                  <ArrowLeft className="w-4 h-4 mr-2" data-id="nssku5y0r" data-path="src/pages/FeedbackPage.tsx" />
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>);

  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4" data-id="f99728n90" data-path="src/pages/FeedbackPage.tsx">
      <div className="max-w-2xl mx-auto" data-id="t3yo8u6j2" data-path="src/pages/FeedbackPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} data-id="tihprip3w" data-path="src/pages/FeedbackPage.tsx">

          <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/80" data-id="mnnvmlw59" data-path="src/pages/FeedbackPage.tsx">
            <CardHeader className="text-center pb-6" data-id="xm7ept9gw" data-path="src/pages/FeedbackPage.tsx">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="qsf1aytmd" data-path="src/pages/FeedbackPage.tsx">

                <MessageSquare className="w-8 h-8 text-white" data-id="q74ze9qd3" data-path="src/pages/FeedbackPage.tsx" />
              </motion.div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="7ylq6m0cz" data-path="src/pages/FeedbackPage.tsx">
                Share Your Feedback
              </CardTitle>
              <CardDescription className="text-gray-600" data-id="6xgnzjni7" data-path="src/pages/FeedbackPage.tsx">
                Help us improve Privacy Guardian with your valuable feedback
              </CardDescription>
            </CardHeader>
            <CardContent data-id="xe28gt5f8" data-path="src/pages/FeedbackPage.tsx">
              <form onSubmit={handleSubmit} className="space-y-6" data-id="le2xi4179" data-path="src/pages/FeedbackPage.tsx">
                <div className="space-y-2" data-id="8decx6leb" data-path="src/pages/FeedbackPage.tsx">
                  <label className="text-sm font-medium text-gray-700" data-id="9fcpymlhh" data-path="src/pages/FeedbackPage.tsx">Feedback Type *</label>
                  <Select value={feedbackType} onValueChange={setFeedbackType} required data-id="8lq7e4ql5" data-path="src/pages/FeedbackPage.tsx">
                    <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500" data-id="4scce23u0" data-path="src/pages/FeedbackPage.tsx">
                      <SelectValue placeholder="Select feedback type" data-id="ktpfrxyan" data-path="src/pages/FeedbackPage.tsx" />
                    </SelectTrigger>
                    <SelectContent data-id="gpd66mrtw" data-path="src/pages/FeedbackPage.tsx">
                      <SelectItem value="bug_report" data-id="kbubfz51f" data-path="src/pages/FeedbackPage.tsx">Bug Report</SelectItem>
                      <SelectItem value="feature_request" data-id="4awy8l55u" data-path="src/pages/FeedbackPage.tsx">Feature Request</SelectItem>
                      <SelectItem value="general" data-id="5k502xdcg" data-path="src/pages/FeedbackPage.tsx">General Feedback</SelectItem>
                      <SelectItem value="complaint" data-id="k3u0lbcpg" data-path="src/pages/FeedbackPage.tsx">Complaint</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-id="5a91t0i29" data-path="src/pages/FeedbackPage.tsx">
                  <label className="text-sm font-medium text-gray-700" data-id="wouwas7to" data-path="src/pages/FeedbackPage.tsx">Title *</label>
                  <Input
                    type="text"
                    placeholder="Brief summary of your feedback"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required data-id="kbsgjvf0c" data-path="src/pages/FeedbackPage.tsx" />

                </div>

                <div className="space-y-2" data-id="fiyknz0q7" data-path="src/pages/FeedbackPage.tsx">
                  <label className="text-sm font-medium text-gray-700" data-id="d48astnei" data-path="src/pages/FeedbackPage.tsx">Message *</label>
                  <Textarea
                    placeholder="Please provide detailed feedback..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-32 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    required data-id="4nezbx8b4" data-path="src/pages/FeedbackPage.tsx" />

                </div>

                <div className="space-y-2" data-id="srlf3he7z" data-path="src/pages/FeedbackPage.tsx">
                  <label className="text-sm font-medium text-gray-700" data-id="nvkgpiuqv" data-path="src/pages/FeedbackPage.tsx">Rating (Optional)</label>
                  <div className="flex items-center space-x-1" data-id="b7g05ra2t" data-path="src/pages/FeedbackPage.tsx">
                    {[1, 2, 3, 4, 5].map((star) =>
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className={`p-1 rounded-full transition-colors ${
                      star <= rating ?
                      'text-yellow-400 hover:text-yellow-500' :
                      'text-gray-300 hover:text-gray-400'}`
                      } data-id="ylviqsvns" data-path="src/pages/FeedbackPage.tsx">

                        <Star className="w-6 h-6 fill-current" data-id="33q0n8n63" data-path="src/pages/FeedbackPage.tsx" />
                      </button>
                    )}
                    {rating > 0 &&
                    <span className="ml-2 text-sm text-gray-600" data-id="t8vonua32" data-path="src/pages/FeedbackPage.tsx">
                        {rating} star{rating !== 1 ? 's' : ''}
                      </span>
                    }
                  </div>
                </div>

                <div className="flex gap-4" data-id="n1vhcgzmj" data-path="src/pages/FeedbackPage.tsx">
                  <Link to="/" className="flex-1" data-id="4ld86k5hw" data-path="src/pages/FeedbackPage.tsx">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full h-12 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800" data-id="mxat6ucr1" data-path="src/pages/FeedbackPage.tsx">

                      <ArrowLeft className="w-4 h-4 mr-2" data-id="9fi3m0b9e" data-path="src/pages/FeedbackPage.tsx" />
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    className="flex-1 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200"
                    disabled={isLoading} data-id="07cc3xgjz" data-path="src/pages/FeedbackPage.tsx">

                    {isLoading ?
                    'Submitting...' :

                    <>
                        <Send className="w-4 h-4 mr-2" data-id="spj7gfnmx" data-path="src/pages/FeedbackPage.tsx" />
                        Submit Feedback
                      </>
                    }
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>);

};

export default FeedbackPage;