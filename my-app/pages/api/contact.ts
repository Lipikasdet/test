export default function handler(req:any, res:any) {
    if (req.method === 'POST') {
      
      const formData = req.body;
      if(!formData || Object.keys(formData).length === 0) {
        return res.status(400).json({ error: 'Request body is empty'})
      }
      res.status(200).json({ message: 'Form submitted successfully.' });
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }


