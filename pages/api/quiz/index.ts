import { NextApiRequest, NextApiResponse } from 'next';
import { addQuiz as addQuizFb } from '@/utils/db';

const addQuiz = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const quizData = { ...req.body };
    await addQuizFb(quizData);
    return res
      .status(200)
      .json({ status: true, message: 'Quiz added successfully...' });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: 'Something went wrong' });
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      await addQuiz(req, res);
      break;
    default:
      res.status(405).json({ status: false, message: 'Method Not found' });
      break;
  }
};
