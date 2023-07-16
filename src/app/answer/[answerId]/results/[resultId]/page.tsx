"use client";

import { getAnswer, getSingleQuiz } from "@/utils/db";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Answer = () => {
  const router = useRouter();
  const { answerId, resultId }: any = useParams();
  const [quiz, setQuiz]: any = useState(null);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const quizData: any = await getSingleQuiz(answerId);
      const answerData: any = await getAnswer(resultId);
      //console.log(quizData);
      //console.log(answerData);
      setQuiz(quizData);
      setAnswer(answerData);
    };

    fetchData();
  }, []);

  return (
    <>
      {quiz && answer && (
        <Container maxW="3xl" mt={5}>
          <Center flexDirection="column">
            <Heading>Correct Answer for Quiz</Heading>
            <Text mt={4}>{quiz.description}</Text>
          </Center>
          <Divider
            mt={4}
            mb={4}
            css={{
              boxShadow: "1px 1px #888888",
            }}
          />
          {quiz.questions.map((singleQuiz: any, index: any) => {
            const jsonAnswer = JSON.parse(answer);
            return (
              <Box
                mt={4}
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                p={6}
                boxShadow="xl"
                backgroundColor={
                  jsonAnswer.questions[singleQuiz.questionId] &&
                  singleQuiz.answer.map(
                    (idx: any) => singleQuiz.options[idx].optionId
                  ).length ===
                    jsonAnswer.questions[singleQuiz.questionId].length &&
                  JSON.stringify(
                    singleQuiz.answer.map(
                      (idx: any) => singleQuiz.options[idx].optionId
                    )
                  ) ===
                    JSON.stringify(jsonAnswer.questions[singleQuiz.questionId])
                    ? "green.400"
                    : "red.400"
                }
              >
                <Text>
                  {index + 1}) {singleQuiz.title}
                </Text>
                <RadioGroup>
                  <SimpleGrid minChildWidth="120px" mt={2}>
                    {singleQuiz.options.map((option: any, index: any) => (
                      <Radio value={option.title} isDisabled key={index}>
                        {option.title}
                      </Radio>
                    ))}
                  </SimpleGrid>
                </RadioGroup>
                <Text mt={3}>
                  Correct Answer: <br />
                  {singleQuiz.answer.map((item: any, idx: any) => {
                    return (
                      <Text as={"span"} key={idx}>
                        <br />
                        {singleQuiz.options[singleQuiz.answer[idx]].title}
                      </Text>
                    );
                  })}
                </Text>
                {jsonAnswer.questions[singleQuiz.questionId] ? (
                  <Text>
                    <br />
                    Selected Answer: <br />
                    {jsonAnswer.questions[singleQuiz.questionId].map(
                      (idx: any, key: any) => {
                        return (
                          <Text as={"span"} key={key}>
                            <br />
                            {
                              singleQuiz.options.find(
                                (option: any) => option.optionId === idx
                              ).title
                            }
                          </Text>
                        );
                      }
                    )}
                  </Text>
                ) : (
                  <Text>Not Answered</Text>
                )}
              </Box>
            );
          })}
          <Button
            w={"100%"}
            onClick={() => router.push(`/`)}
            borderRadius="3xl"
            mt={"15px"}
            h={"16"}
            __css={{ bgColor: "#5000ff !important" }}
            fontStyle={"italic"}
            fontSize={"2xl"}
            letterSpacing={"tighter"}
            fontWeight={"extrabold"}
            fontFamily={"Ropa Sans, sans-serif"}
          >
            Go Home
          </Button>
        </Container>
      )}
    </>
  );
};

export default Answer;
