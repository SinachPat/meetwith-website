export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export const landingFaqs: FaqItem[] = [
  {
    question: "What is Meetwith and how is it different from other scheduling tools?",
    answer:
      "Meetwith is a decentralized group meeting scheduler built for teams, DAOs, and communities. It's designed to make coordinating multi-person meetings simple, flexible, and collaborative. While we do have 1:1 we give you a full 360 experience with group features and payment options that integrates Web3, Stripe and invoicing.",
  },
  {
    question: "How does scheduling group meetings work?",
    answer:
      "You can either: Find the best available time across all members using our discovery tool, or set a fixed time (recurrent or one-off) and notify the group.",
  },
  {
    question: "What payment methods does Meetwith accept?",
    answer:
      "Meetwith supports crypto payments through Arbitrum and Celo networks, traditional payments via Stripe, and manual invoicing. You choose what works best for you and your clients.",
  },
  {
    question: "Do invitees need a Meetwith account to book or join a meeting?",
    answer:
      "No — participants can schedule or join meetings with just a link. Creating an account is optional.",
  },
  {
    question: "Can I offer different pricing for different session types?",
    answer:
      "Absolutely! Create multiple session types with different durations, prices, and descriptions. For example: 30-min quick calls at $50, 90-min strategy sessions at $200.",
  },
];

const additionalFaqCategories: FaqCategory[] = [
  {
    title: "General Functionality",
    items: [
      {
        question: "Can I use Meetwith for individual (1:1) meetings too?",
        answer:
          "Yes! You can create multiple meeting types or sessions, including one-on-one meetings, each with its own unique link.",
      },
      {
        question: "Is there a limit to the number of meetings or groups I can create?",
        answer: "Nope — create as many meetings or groups as you need. Meetwith scales with you.",
      },
    ],
  },
  {
    title: "Groups & Contacts",
    items: [
      {
        question: "How do Groups work in Meetwith?",
        answer:
          "Groups let you organize your contacts by team, department, project, or organization. You can assign roles, schedule meetings, and set reminders — all from one shared space.",
      },
      {
        question: "Can I make someone else an admin in a group?",
        answer:
          "Yes, group members can be promoted to admin to help manage meetings and members.",
      },
      {
        question: "Can I see the contact information and scheduling links of group members?",
        answer:
          "Yes, every member's profile shows their contact info and public scheduling link if enabled.",
      },
      {
        question: "How do I add people to a group?",
        answer:
          "You can invite people directly or share a unique invite link — no account required for joining.",
      },
      {
        question: "Can I add somebody as a contact if we are not in a shared Group?",
        answer:
          "You can invite any colleague or friend to be your contact using their Meetwith ID or email information. They will receive the invite and appear in your contact list once accepted.",
      },
    ],
  },
  {
    title: "Meeting Scheduling",
    items: [
      {
        question: "Can I make a meeting open for others to join?",
        answer:
          "Yes, you can invite any person to join a meeting using their email or Meetwith ID. They don't need to be contacts.",
      },
      {
        question: "Can I set reminders for upcoming meetings?",
        answer: "Absolutely — reminders can be sent via email, Telegram, or Discord.",
      },
    ],
  },
  {
    title: "Integrations & Calendars",
    items: [
      {
        question: "What video platforms does Meetwith support?",
        answer:
          "You can integrate with Google Meet, Zoom, Huudle01, or Jitsi Meet when creating a meeting.",
      },
      {
        question: "Can I connect my external calendars?",
        answer:
          "Yes! You can connect unlimited calendars and view all your availability in one place.",
      },
    ],
  },
  {
    title: "Time Zones & Availability",
    items: [
      {
        question: "How does Meetwith handle time zones?",
        answer:
          "You can set your availability based on your time zone, and we'll take care of converting times for everyone else.",
      },
      {
        question: "Can I customize my scheduling availability?",
        answer:
          "Yes, you have full control over which times you want to be available for different meetings.",
      },
      {
        question: "Is there a limite of how many availabilities I can create?",
        answer:
          "No, you can create, set, and synchronize them with your sessions as necessary. For example, you can create a holiday availability and attach it to your sessions when needed.",
      },
    ],
  },
  {
    title: "Notifications & Links",
    items: [
      {
        question: "What types of notifications can I receive?",
        answer:
          "You can choose to receive updates via email, Telegram, or Discord.",
      },
      {
        question: "Can I customize my Meetwith link?",
        answer:
          "Yes! Create a personalized URL for easier sharing and recognition.",
      },
    ],
  },
  {
    title: "Privacy & Access",
    items: [
      {
        question: "Is my data secure?",
        answer:
          "Yes. Meetwith is built with privacy in mind and does not sell or share your data.",
      },
    ],
  },
  {
    title: "Payments & Pricing",
    items: [
      {
        question: "How do I set up paid sessions?",
        answer:
          "When creating a session, simply toggle on the payment option and set your price. You can configure different rates for different session types — office hours at one price, deep-dive sessions at another.",
      },
      {
        question: "Do I need a crypto wallet to receive payments?",
        answer:
          "When you create your Meetwith account, you get your own wallet, and if you want to accept crypto payments in another wallet, you can set it up too. But if you prefer traditional payments, you can use Stripe. For crypto, you'll need to connect a Web3 wallet, and we support MetaMask, Coinbase Wallet, and other popular options.",
      },
      {
        question: "How do I set up my crypto wallet?",
        answer:
          "Connect your existing wallet through your session settings, or receive and onramp using your Meetwith wallet. We'll guide you through the process step by step.",
      },
      {
        question: "What are the transaction fees?",
        answer:
          "Crypto payments have significantly lower fees than traditional processors, with no 2.9% Stripe fee. Exact fees depend on network conditions. Stripe payments follow their standard rates, and Meetwith does not charge percentage-based fees on top.",
      },
      {
        question: "How quickly do I receive payments?",
        answer:
          "Crypto payments hit your wallet instantly after the transaction confirms. Stripe payments follow their standard payout schedule, typically 2 to 7 days.",
      },
      {
        question: "Can I accept payments in different currencies?",
        answer:
          "Yes! With crypto, you're borderless by default. With Stripe, you can accept payments in multiple fiat currencies based on your account settings.",
      },
      {
        question: "How does automatic invoicing work?",
        answer:
          "Every paid session automatically generates a professional invoice with all transaction details. You and your client both receive a copy, with no manual work required.",
      },
      {
        question: "What happens if someone cancels a paid session?",
        answer:
          "You set your own cancellation policy when creating paid sessions. You can configure full refunds, partial refunds, or no refunds based on timing.",
      },
      {
        question: "Do clients need crypto to pay me?",
        answer:
          "No. If you enable Stripe, they can pay with regular credit or debit cards. Crypto is an option, not a requirement, though it offers instant settlement and lower fees.",
      },
      {
        question: "Can I offer free and paid sessions at the same time?",
        answer:
          "Yes! Create different session types — some free like discovery calls and some paid like coaching sessions. Each gets its own booking link.",
      },
    ],
  },
  {
    title: "Customization & Branding",
    items: [
      {
        question: "Can I customize my public booking page?",
        answer:
          "Yes! You have full control over your public scheduling page. Add custom descriptions, service offerings, and make it feel like your brand.",
      },
      {
        question: "Can I add my logo and brand colors?",
        answer:
          "You can upload your logo or profile photo today. Custom brand colors are still being worked on, and updates will be shared as soon as they're ready.",
      },
      {
        question: "How do I create different service offerings?",
        answer:
          "Create multiple session types, each with its own title, description, duration, price, and availability. For example: Office Hours, Strategy Session, or Group Workshop.",
      },
      {
        question: "Can I customize my Meetwith URL?",
        answer:
          "Yes! Create a personalized link like meetwith.xyz/yourname for easier sharing and better recognition.",
      },
      {
        question: "Can I add my own terms and conditions?",
        answer:
          "Yes, you can add custom policies, cancellation terms, and any other information clients need to see before booking.",
      },
    ],
  },
];

const existingQuestions = new Set(landingFaqs.map((item) => item.question.trim().toLowerCase()));

export const faqCategories: FaqCategory[] = [
  {
    title: "Landing Page FAQ",
    items: landingFaqs,
  },
  ...additionalFaqCategories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => !existingQuestions.has(item.question.trim().toLowerCase())),
    }))
    .filter((category) => category.items.length > 0),
];
