export default defineEventHandler((event) => {
  return [
    {
      plan: 'Start',
      currency: '€',
      price: '250',
      per: 'month',
      is_popular: false,
      features: [
        'Channel: Email',
        'Incl. 5,000+ contacts',
        'Two-way integration with your ATS',
        'Unlimited apps',
        'Unlimited flows',
        'Unlimited actions per contact',
        'Email-only support'
      ]
    },
    {
      plan: 'Grow',
      currency: '€',
      price: '500',
      per: 'month',
      is_popular: true,
      features: [
        'Channels: Email, WhatsApp',
        'Incl. 12,500+ contacts',
        'Two-way integration with your ATS',
        'Unlimited apps',
        'Unlimited flows',
        'Unlimited actions per contact',
        'Surveys',
        'Reports',
        'Email and chat support'
      ]
    },
    {
      plan: 'Scale',
      currency: '€',
      price: '1000',
      per: 'month',
      is_popular: false,
      features: [
        'Channels: Email, WhatsApp, Web',
        'Incl. 50,000+ contacts',
        'Two-way integration with your ATS',
        'Unlimited apps',
        'Unlimited flows',
        'Unlimited actions per contact',
        'Surveys',
        'Reports',
        'Web scraping',
        'Scoring & tagging',
        'Custom apps',
        'Priority support via email, video call and chat'
      ]
    }
  ]
})
