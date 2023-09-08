#! /usr/bin/env node

const quotes: string[] = [
  "Watch A Sunrise At Least Once A Day.",
  "If You Love Something, Set It Free. Unless It's A Tiger.",
  "If You Get Pulled Over For Speeding, Tell The Policeman Your Spouse Has Diarrhea.",
  "Marry Someone Who Looks Sexy While Disappointed.",
  "You Can Tell A Lot About A Person By His Biography.",
  "When Life Gives You Lemonade, Make Lemons. Life Will Be All Like 'What?!",
  "Never Be Afraid To Reach For The Stars, Because Even If You Fall, You'll Always Be Wearing A Parentchute™.",
  "The most amazing things that can happen to a human being will happen to you, if you just lower your expectations.",
  "Success is 1% inspiration, 98% perspiration, and 2% attention to detail.",
  "If you want to be truly happy in life, surround yourself with people who make you laugh. And also, people who bring snacks.",
  "Always look people in the eye, even if they're blind. Just say \"I'm looking you in the eye, but it doesn't seem to be doing much\"",
];

const generate_random_quote = (list: string[]) => {
  return list[Math.floor((Math.random() * list.length))];
};

console.log(generate_random_quote(quotes));
