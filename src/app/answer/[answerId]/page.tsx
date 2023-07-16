"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  RadioGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { addAnswerApi } from "@/utils/service";
import { getSingleQuiz } from "@/utils/db";

const ShowQuiz = ({ quiz, onSubmit }: any) => {
  return (
    <Container textAlign={"center"} p={6}>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {(props) => (
          <Form>
            {quiz.questions.map((singleQuiz: any, key: any) => (
              <Field name={singleQuiz.questionId} key={key}>
                {({ field, _form }: any) => (
                  <FormControl
                    as="fieldset"
                    isRequired={true}
                    mb={{ base: 4, md: 0 }}
                  >
                    <Box
                      as="article"
                      textAlign={"start"}
                      backgroundColor={"#202025"}
                      m={3}
                      borderRadius="2xl"
                      p={6}
                    >
                      <FormLabel
                        textAlign={"center"}
                        fontSize={"lg"}
                        fontStyle={"italic"}
                        letterSpacing={"tighter"}
                        fontWeight={"extrabold"}
                        fontFamily={"Ropa Sans, sans-serif"}
                        as="legend"
                      >
                        {singleQuiz.title}
                      </FormLabel>
                      <RadioGroup>
                        <Flex flexDir={"column"} mb={2}>
                          {singleQuiz.options.map((option: any, subkey: any) => (
                            <HStack key={subkey}>
                              <Field
                                {...field}
                                type="checkbox"
                                name={singleQuiz.questionId}
                                value={option.optionId}
                              />
                              <Text>{option.title}</Text>
                            </HStack>
                          ))}
                        </Flex>
                      </RadioGroup>
                    </Box>
                  </FormControl>
                )}
              </Field>
            ))}
            <Center mt={10}>
              <Button
                type="submit"
                isLoading={props.isSubmitting}
                colorScheme="green"
                w={"100%"}
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
                Submit
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const SingleQuiz = ({ params }: any) => {
  const router = useRouter();
  const { answerId }: any = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const quizData: any = await getSingleQuiz(answerId);
      console.log(quizData);
      setQuiz(quizData);
    };
    fetchQuiz();
  }, []);

  const onSubmit = async (values: any, actions: any) => {
    try {
      const resp = await addAnswerApi(params.id, values);
      const resultId = resp.data.data.answerId;
      router.push(`/answer/${answerId}/results/${resultId}`);
    } catch (error) {
      console.log("error", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return <>{quiz && <ShowQuiz quiz={quiz} onSubmit={onSubmit} />}</>;
};

export default SingleQuiz;
