export const AXES = [
  {
    name: 'Emotional',
    desc: "Checking in on each other's inner lives — sharing struggles, growth, how things are really going",
  },
  {
    name: 'Fitness',
    desc: 'Working out together, keeping each other accountable, getting healthier side by side',
  },
  {
    name: 'Intellectual',
    desc: 'Thinking through hard problems, riffing on ideas, making things together',
  },
  { name: 'Parental', desc: 'Open to the possibility of raising children together someday' },
  {
    name: 'Professional',
    desc: 'Making money together — building something, collaborating on work, or finding deals that benefit both',
  },
  {
    name: 'Recreational',
    desc: 'Hanging out, goofing around, going on adventures — fun for its own sake, no agenda',
  },
  { name: 'Sexual', desc: 'Physical attraction, intimacy, and shared pleasure' },
] as const

export const LABELS = [
  'Not interested, sorry.',
  'Skeptical but open',
  'Maybe?',
  'It could work',
  'Sounds good',
  'Promising',
  'Exciting',
  'Fuck yeah',
] as const
