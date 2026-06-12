export const AXES = [
  { id: 'emotional', name: 'Emotional', desc: "Checking in on each other's inner lives — sharing struggles, growth, how things are really going" },
  { id: 'fitness', name: 'Fitness', desc: 'Working out together, keeping each other accountable, getting healthier side by side' },
  { id: 'intellectual', name: 'Intellectual', desc: 'Thinking through hard problems, riffing on ideas, making things together' },
  { id: 'parental', name: 'Parental', desc: 'Open to the possibility of raising children together someday' },
  { id: 'professional', name: 'Professional', desc: 'Making money together — building something, collaborating on work, or finding deals that benefit both' },
  { id: 'recreational', name: 'Recreational', desc: 'Hanging out, goofing around, going on adventures — fun for its own sake, no agenda' },
  { id: 'sexual', name: 'Sexual', desc: 'Physical attraction, intimacy, and shared pleasure' },
] as const;

export const LABELS = [
  'Not interested, sorry.',
  'Skeptical but open',
  'Maybe?',
  'It could work',
  'Sounds good',
  'Promising',
  'Exciting',
  'Fuck yeah',
] as const;
