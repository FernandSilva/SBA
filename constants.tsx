
import React from 'react';
import { FAQItem } from './types';
import { Trophy, Target, Shield, Zap, Activity } from 'lucide-react';

export const COLORS = {
  primary: '#ffffff',
  card: '#f9fafb',
  accent: '#b91c1c',
  text: '#0a0a0a',
  muted: '#666666',
  border: '#e5e5e5'
};

/**
 * Standardized Image Assets (Local Public Paths)
 * Original filenames were renamed to be URL-safe.
 * These files must be located in /public/images/sba/
 */
export const IMAGES = {
  gymClassProof: '/images/sba/gym-class-proof.jpeg',
  fightAction: '/images/sba/fight-action.jpeg',
  fightAction2: '/images/sba/fight-action2.jpeg',
  fightAction3: '/images/sba/fight-action3.jpeg',
  fightAction7: '/images/sba/fight-action7.jpeg',
  fightAction8: '/images/sba/fight-action8.jpeg',
  groupIntensity: '/images/sba/group-intensity.jpeg',
  technicalGroup: '/images/sba/technical-group.jpeg',
  venueWide: '/images/sba/venue-wide.jpeg',
  coachHero: '/images/sba/coach-hero.jpeg',
  coachHero2: '/images/sba/coach-hero2.jpeg',
  coachDetail: '/images/sba/coach-detail.jpeg',
  coachDetail2: '/images/sba/coach-detail2.jpeg',
  coachDetail5: '/images/sba/coach-detail5.jpeg',
  coachSparing: '/images/sba/coach-sparing.jpeg',
};


export const VIDEOS = {
  vid1: '/images/sba/Vid1.mp4',
  vid2: '/images/sba/Vid2.mp4',
  vid4: '/images/sba/Vid4.mp4',
  vid5: '/images/sba/Vid5.mp4',
};


export const CAMP_DATA = {
  location: 'Hamburg, Germany',
  contactEmail: 'fernand00.silva0@gmail.com',
  duration: '3 weeks',
  frequency: 'Once per week',
  day: 'Thursday',
  time: '18:00 – 19:00',
  sessionLength: '60 minutes',
  nextCampStart: 'Thursday, 12 February',
  pricing: {
    beginner: '€50 total for all three sessions',
    returningSingle: '€20 per individual session',
    returningUpfront: '€50 for all three sessions'
  }
};

export const SCHEDULE_BREAKDOWN = [
  { 
    duration: '10 minutes', 
    title: 'Warm-Up & Mobility', 
    desc: 'Dynamic warm-up focusing on joint mobility, footwork activation, and light cardio to prepare the body for boxing-specific movement.' 
  },
  { 
    duration: '10 minutes', 
    title: 'Technical Sets & Fundamentals', 
    desc: 'Structured boxing sets focusing on stance, guard, balance, and basic combinations. Emphasis on correct technique and repetition.' 
  },
  { 
    duration: '10 minutes', 
    title: 'Endurance & Conditioning', 
    desc: 'Boxing-specific endurance training designed to build stamina without sacrificing form. This includes controlled rounds and timed intervals.' 
  },
  { 
    duration: '25 minutes', 
    title: 'Padwork & Intensive Coaching', 
    desc: 'High-focus pad sessions working combinations, timing, and punch accuracy. Intensity is adjusted based on group level, with individual coaching feedback throughout.' 
  },
  { 
    duration: '5 minutes', 
    title: 'Cool-Down & Relaxation', 
    desc: 'Breathing exercises, light stretching, and recovery guidance to finish the session properly and reduce injury risk.' 
  }
];

export const FAQS: FAQItem[] = [
      {
        question: "What equipment do I need?",
        answer:
          "Hand wraps and boxing gloves are mandatory for training. A mouthguard is strongly recommended for safer protection. For floor-based warm-ups, mobility, or recovery work, we also recommend bringing a yoga mat or gym towel."
      }
  ,
  {
    question: "Do I need experience to join?",
    answer: "No. Beginners are welcome. We teach fundamentals properly and scale intensity safely."
  },
  {
    question: "Is sparring required?",
    answer: "No. Sparring is optional and depends on experience, readiness, and coach approval."
  },
  {
    question: "What if I'm not fit yet?",
    answer: "That is exactly what camp is for. We build your conditioning progressively."
  },

  {
  question: "How do I apply?",
  answer:
    "The fastest way to apply is to contact us directly via WhatsApp. You can also email, call, or send an SMS, and we’ll confirm availability, start dates, and onboarding steps."
}

];

export const HIGHLIGHTS = [
  { title: "Technical Fundamentals", desc: "Stance, guard, footwork, balance, timing", icon: <Target className="w-5 h-5" /> },
  { title: "High-Level Padwork", desc: "Designed for real ring application", icon: <Zap className="w-5 h-5" /> },
  { title: "Defensive Mastery", desc: "Head movement, blocks, parries, counters", icon: <Shield className="w-5 h-5" /> },
  { title: "Boxing Conditioning", desc: "Built around rounds, not random cardio", icon: <Activity className="w-5 h-5" /> },
  { title: "Professional Paths", desc: "Training for novice to pro athletes", icon: <Trophy className="w-5 h-5" /> }
];
