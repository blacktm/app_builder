# App Structure

app = {
  name: '',
  description: '',
  options: {},
  actions: []
}

action = {
  name: '',
  display_name: '',
  description: '',
  properties: {
    // default properties
  }
}

# Example Workflow

1. Form, flight origin and destination
2. Form, credit card info
3. Call Brighter Planet API, calculate carbon emission
4. Charge credit card with Stripe
5. Generate QR code
6. Create PDF with:
  - Origin / destination airport
  - Credit card charge info
  - QR code
7. Email ticket and confirmation
