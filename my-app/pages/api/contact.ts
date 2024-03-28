export default function handler(req:any, res:any) {
    if (req.method === 'POST') {
      const formData = req.body;
      console.log('Received form submission:', formData);
      res.status(200).json({ message: 'Form submitted successfully.' });
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }