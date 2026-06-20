# SamePage

Rate your interest across seven dimensions with someone else — and only see overlap where you both actually match.

Live at [samepage.dsernst.com](https://samepage.dsernst.com).

## How it works

Two people join the same private room, each rate their interest across seven categories (emotional, fitness, intellectual, parental, professional, recreational, sexual), and submit.

For each category, **only the lower of the two scores is revealed** — to both people. Categories with no mutual interest (score 0) stay hidden. High scores are never exposed unless the other person matches at that level or higher.

Scores reflect your actual interest: how excited you are about someone in that dimension, combined with whether you have room for it in your life right now.

## Privacy

Answers are relayed in real time between browsers. Nothing is written to a database. The code is open source so you can verify that yourself.

## Development

### Prerequisites

- Node.js
- A free [Pusher](https://pusher.com) account

### Setup

```bash
npm install
cp .env.local.TEMPLATE .env.local
# Fill in your Pusher credentials in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

