import { NextApiRequest, NextApiResponse } from "next";
import { addAnswer as addAnswerFb } from "@/utils/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      await addAnswer(req, res);
      break;
    default:
      res.status(405).json({ status: false, message: "Method Not found" });
      break;
  }
};

const addAnswer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = {
      ...req.body,
      quizId: req.query.id,
    };
    const response = await addAnswerFb(data);
    return res
      .status(200)
      .json({ status: true, data: { answerId: response.id } });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "Something went wrong" });
  }
};
