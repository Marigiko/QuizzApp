import axios from 'axios';

export const addQuizApi = async (values: any) => {
  try {
    const header = {
      'Content-Type': 'application/json',
    };
    const resp = await axios.post('/api/quiz', values, { headers: header });
    return resp;
  } catch (error) {
    throw error;
  }
};

export const addAnswerApi = async (quizId, values) => {
  try {
    const header = {
      'Content-Type': 'application/json',
    };
    const resp = await axios.post(
      `/api/quiz/${quizId}/answer`,
      {
        questions: values,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { headers: header }
    );
    return resp;
  } catch (error) {
    throw error;
  }
};