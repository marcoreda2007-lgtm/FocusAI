import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Target, 
  Clock, 
  Smartphone, 
  CheckCircle2, 
  BarChart3, 
  Calendar, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  Zap,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">FocusAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">The Problem</a>
            <a href="#solution" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Story</a>
            <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-gray-900/20">
              Get Started Free
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <a href="#problem" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>The Problem</a>
          <a href="#solution" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>How it Works</a>
          <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Story</a>
          <button className="w-full mt-2 bg-gray-900 text-white px-5 py-3 rounded-xl text-base font-medium hover:bg-gray-800">
            Get Started Free
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8"
        >
          <SparklesIcon className="w-4 h-4" />
          <span>Meet your new AI study mentor</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
        >
          Study Smarter. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Stay Focused. Achieve More.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Your AI-powered study coach that builds your daily plan, tracks your focus, and keeps you consistent.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-gray-900/20 flex items-center justify-center gap-2">
            Get Started Free <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            View Demo
          </button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
          <div className="rounded-2xl border border-gray-200/60 bg-white/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Today's Study Plan</h3>
                  <p className="text-sm text-gray-500">Generated by FocusAI based on your upcoming exams</p>
                </div>
                <div className="space-y-3">
                  {[
                    { time: '09:00 AM', task: 'Review Calculus Chapter 4', duration: '45 min', type: 'Deep Work' },
                    { time: '10:00 AM', task: 'Physics Practice Problems', duration: '60 min', type: 'Active Recall' },
                    { time: '11:15 AM', task: 'History Flashcards', duration: '30 min', type: 'Spaced Repetition' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <div className="text-sm font-medium text-gray-500 w-20">{item.time}</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.task}</div>
                        <div className="text-xs text-gray-500 mt-1">{item.type}</div>
                      </div>
                      <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{item.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <h3 className="text-sm font-medium text-blue-100 mb-1">Focus Score</h3>
                  <div className="text-4xl font-bold mb-4">92%</div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <TrendingUp className="w-4 h-4" />
                    <span>+5% from last week</span>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">AI Mentor Tip</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    "You've been studying for 45 minutes straight. Take a 5-minute break to stretch and rest your eyes before starting Physics."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Procrastination Loop",
      description: "You know you need to study, but you keep pushing it to 'tomorrow' until it's too late."
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: "No Clear Plan",
      description: "Sitting down to study but spending 20 minutes just figuring out what to do first."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-500" />,
      title: "Constant Distractions",
      description: "Checking your phone for 'just a minute' and losing an hour of valuable study time."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sound familiar?</h2>
          <p className="text-lg text-gray-600">Studying shouldn't feel like a constant battle against yourself. We know the struggle.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const steps = [
    {
      number: "01",
      title: "Input your exams & subjects",
      description: "Tell FocusAI what you're studying for and when your deadlines are."
    },
    {
      number: "02",
      title: "Get a personalized plan",
      description: "Our AI breaks down your syllabus into bite-sized, daily tasks."
    },
    {
      number: "03",
      title: "Track focus & improve",
      description: "Start your study sessions, block distractions, and get weekly feedback."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How AI solves the consistency problem
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              FocusAI acts like a personal mentor. It removes the friction of planning, keeps you accountable during sessions, and helps you build lasting study habits.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center border border-blue-100">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
              <div className="relative space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Biology Midterm</div>
                      <div className="text-xs text-gray-500">In 14 days</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">On Track</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between opacity-80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Calculus Final</div>
                      <div className="text-xs text-gray-500">In 28 days</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">Needs Review</div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-500 mb-3">AI Recommendation</div>
                  <div className="bg-blue-600 text-white p-4 rounded-xl">
                    <p className="text-sm leading-relaxed">
                      "You've been struggling with Integration techniques. I've added a 30-minute active recall session for tomorrow morning when your focus is highest."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "Personalized Study Planner",
      description: "AI generates a realistic daily schedule based on your deadlines, syllabus, and available time."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Focus Tracker",
      description: "Built-in pomodoro timer that detects distractions and helps you build deep work habits."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      title: "Weekly AI Feedback Report",
      description: "Get actionable insights on your study patterns, peak focus hours, and areas to improve."
    },
    {
      icon: <Brain className="w-6 h-6 text-emerald-600" />,
      title: "Smart Recommendations",
      description: "The AI adapts to your progress, suggesting active recall or spaced repetition when needed."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-gray-600">Powerful tools designed specifically for students who want to optimize their learning.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 flex gap-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductDemo = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your entire study life, in one place</h2>
          <p className="text-lg text-gray-600">A beautifully designed dashboard that gives you clarity and keeps you accountable.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 px-3 py-1 bg-white rounded-md border border-gray-200 text-xs text-gray-400 flex-1 max-w-md flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                app.focusai.com/dashboard
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex h-[600px]">
              {/* Sidebar */}
              <div className="w-64 border-r border-gray-100 p-6 hidden md:block bg-gray-50/50">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-lg text-gray-900">FocusAI</span>
                </div>
                
                <div className="space-y-1">
                  <div className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm flex items-center gap-3">
                    <Calendar className="w-4 h-4" /> Schedule
                  </div>
                  <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm flex items-center gap-3 transition-colors">
                    <Target className="w-4 h-4" /> Focus Mode
                  </div>
                  <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm flex items-center gap-3 transition-colors">
                    <BarChart3 className="w-4 h-4" /> Analytics
                  </div>
                  <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm flex items-center gap-3 transition-colors">
                    <BookOpen className="w-4 h-4" /> Subjects
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-8 overflow-y-auto bg-gray-50/30">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Good morning, Alex</h1>
                    <p className="text-gray-500 text-sm mt-1">You have 3 tasks scheduled for today.</p>
                  </div>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Start Focus Session
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Schedule Column */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h2>
                      <div className="space-y-4">
                        {[
                          { time: '09:00 AM', task: 'Review Calculus Chapter 4', duration: '45 min', type: 'Deep Work', status: 'completed' },
                          { time: '10:00 AM', task: 'Physics Practice Problems', duration: '60 min', type: 'Active Recall', status: 'current' },
                          { time: '11:15 AM', task: 'History Flashcards', duration: '30 min', type: 'Spaced Repetition', status: 'upcoming' },
                        ].map((item, i) => (
                          <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${item.status === 'current' ? 'border-blue-200 bg-blue-50/50' : 'border-gray-100 bg-white'}`}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === 'completed' ? 'bg-green-100 text-green-600' : item.status === 'current' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                              {item.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current"></div>}
                            </div>
                            <div className="text-sm font-medium text-gray-500 w-16">{item.time}</div>
                            <div className="flex-1">
                              <div className={`font-medium ${item.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>{item.task}</div>
                              <div className="text-xs text-gray-500 mt-1">{item.type}</div>
                            </div>
                            <div className="text-sm font-medium text-gray-500">{item.duration}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Focus Score */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Weekly Focus Score</h2>
                      <div className="flex items-end gap-4 mb-4">
                        <div className="text-5xl font-bold text-gray-900">88<span className="text-2xl text-gray-400">%</span></div>
                        <div className="flex items-center gap-1 text-sm font-medium text-green-600 mb-1 bg-green-50 px-2 py-1 rounded">
                          <TrendingUp className="w-3 h-3" /> +12%
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[88%] rounded-full"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">Great job! You've been more consistent than 75% of users this week.</p>
                    </div>

                    {/* Weekly Report Snippet */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl text-white shadow-lg">
                      <div className="flex items-center gap-2 mb-4">
                        <SparklesIcon className="w-4 h-4 text-amber-400" />
                        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">AI Insights</h2>
                      </div>
                      <p className="text-sm text-gray-200 leading-relaxed mb-4">
                        You tend to lose focus after 40 minutes of studying Physics. Try breaking it down into 25-minute Pomodoro sessions.
                      </p>
                      <button className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                        View Full Report <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I used to spend more time planning my study schedule than actually studying. FocusAI does it all for me now. My grades have never been better.",
      author: "Sarah J.",
      role: "Pre-Med Student",
      avatar: "SJ"
    },
    {
      quote: "The focus tracker is a game changer. Knowing the AI is 'watching' my study session stops me from picking up my phone. Highly recommend!",
      author: "Michael T.",
      role: "High School Senior",
      avatar: "MT"
    },
    {
      quote: "The weekly feedback reports feel like having a real mentor. It pointed out I study worst at night, so I shifted to mornings and it changed everything.",
      author: "Elena R.",
      role: "Computer Science Major",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by students</h2>
          <p className="text-lg text-gray-600">Join thousands of students who have transformed their study habits.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-8 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-blue-700 font-bold flex items-center justify-center">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 mb-6">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-2xl font-bold">
              IR
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Built by Ignatius Reda</h2>
          <p className="text-blue-400 font-medium mb-6">AI Product Manager</p>
          
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 max-w-2xl mx-auto text-left">
            <p className="text-gray-300 leading-relaxed text-lg italic">
              "I built FocusAI because I struggled with procrastination and needed a smarter way to stay consistent. 
              Traditional planners were too rigid, and simple timers weren't enough. I wanted a tool that adapted to my life 
              and actually coached me to be better."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Start your focused journey today
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Stop procrastinating and start achieving your academic goals with your personal AI study coach.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/20 flex items-center justify-center gap-2 mx-auto">
          Get Started Free <ArrowRight className="w-5 h-5" />
        </button>
        <p className="mt-4 text-sm text-gray-500">No credit card required. Free forever plan available.</p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-xl text-gray-900">FocusAI</span>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
        </div>
        
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FocusAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <ProductDemo />
        <Testimonials />
        <AboutMe />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
