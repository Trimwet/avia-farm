export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: 'How do I request a field visit?',
    answer:
      'Send a request online in under a minute using the "Request a visit" button — no account or sign-up needed. Pick the farm, the agronomist and a time. You can also call the farm office on +234 803 123 4567 and we will log it for you.',
  },
  {
    question: 'Do I need an account to request a visit?',
    answer:
      'No. You can request a visit and keep an eye on it without creating an account — just pick a farm and a time. Creating an account is optional and makes it easier to follow every request you have sent.',
  },
  {
    question: 'How does the live work queue work?',
    answer:
      'Once the farm approves your request it joins the work queue. You can watch its position and how long it has been waiting from your phone, and you are notified as the visit moves from pending to booked to out in the field.',
  },
  {
    question: 'When do crews work?',
    answer:
      'Crews run Monday to Saturday, 7:00 AM to 5:00 PM. Sunday work is limited to urgent cases such as disease outbreaks or irrigation failures. The office phone line stays open for urgent field issues.',
  },
  {
    question: 'Can I report an urgent field problem?',
    answer:
      'Yes. Mark it as urgent when you send the request, or call +234 803 123 4567. Urgent requests are flagged on the queue board so the crew on duty sees them first.',
  },
  {
    question: 'Where are you based?',
    answer:
      'Our office is at 14 Rayfield Road, Jos, Plateau State, Nigeria. Visit the Contact page for a map and directions to the farm office.',
  },
  {
    question: 'Can I get a record of a visit?',
    answer:
      'Every visit keeps its request details, the assigned agronomist and the outcome. You can view them from the grower portal, or ask the office to send a copy by email or WhatsApp.',
  },
  {
    question: 'How do I cancel or reschedule a visit?',
    answer:
      'Call the farm office on +234 803 123 4567 or send a message through the Contact page, and the crew will move your visit to a new time or cancel it.',
  },
]
