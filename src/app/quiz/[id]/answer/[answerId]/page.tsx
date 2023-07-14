"use client";

import Navbar from "@/common/NavBar";
import { getAnswer, getSingleQuiz } from "@/utils/db";
import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Answer = ({ params }) => {
  const router = useRouter();
  const [quiz, setQuiz] = useState(null);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { id, answerId } = params;
      const quizData = await getSingleQuiz(id);
      const answerData = await getAnswer(answerId);
      setQuiz(quizData);
      setAnswer(answerData);
    };

    fetchData();
  }, [router.query]);

  return (
    <>
      <Navbar />
      {quiz && answer && (
        <Container maxW="3xl" mt={5}>
          <Center flexDirection="column">
            <Heading>Correct Answer for {quiz.title}</Heading>
            <Text mt={4}>{quiz.description}</Text>
          </Center>
          <Divider
            mt={4}
            mb={4}
            css={{
              boxShadow: "1px 1px #888888",
            }}
          />
          {quiz.questions.map((singleQuiz, index) => {
            const jsonAnswer = JSON.parse(answer);
            return (
              <Box
                mt={index !== 0 && 4}
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                p={6}
                boxShadow="xl"
                backgroundColor={
                  jsonAnswer.questions[singleQuiz.questionId] &&
                  singleQuiz.options[singleQuiz.answer].optionId ===
                    jsonAnswer.questions[singleQuiz.questionId]
                    ? "green.200"
                    : "red.200"
                }
              >
                <Text>
                  {index + 1}) {singleQuiz.title}
                </Text>
                <RadioGroup>
                  <SimpleGrid minChildWidth="120px" mt={2}>
                    {singleQuiz.options.map((option, index) => (
                      <Radio value={option.title} isDisabled key={index}>
                        {option.title}
                      </Radio>
                    ))}
                  </SimpleGrid>
                </RadioGroup>
                <Text mt={3}>
                  Correct Answer: {singleQuiz.options[singleQuiz.answer].title}
                </Text>
                {jsonAnswer.questions[singleQuiz.questionId] ? (
                  <Text>
                    Selected Answer:{" "}
                    {
                      singleQuiz.options.find(
                        (option) =>
                          option.optionId ===
                          jsonAnswer.questions[singleQuiz.questionId]
                      ).title
                    }
                  </Text>
                ) : (
                  <Text>Not Answered</Text>
                )}
              </Box>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default Answer;
