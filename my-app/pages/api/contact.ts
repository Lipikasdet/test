  import type { NextApiRequest, NextApiResponse } from "next";
  import Cors from "cors";
  
  // Initializing the cors middleware
  const cors = Cors({
    origin: 'http://localhost:8080',
    methods: ["POST", "GET", "HEAD"],
  });
  
  // Helper method to wait for a middleware to execute before continuing
  // And to throw an error when an error happens in a middleware
  function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function,
  ) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
  
        return resolve(result);
      });
    });
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    // Run the middleware
    await runMiddleware(req, res, cors);
    
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