"use client";

import { addQuizApi } from "@/utils/service";
import { AddIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik, getIn } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import CustomIconButton from "../../common/CustomIcon";
import { useParams } from "next/navigation";

const Index = () => {
  const router = useRouter();
  let { name } = useParams();

  const questionsData = {
    title: "",
    options: [{ title: "" }, { title: "" }, { title: "" }, { title: "" }],
    answer: "0",
  };

  const initialValues = {
    title: "",
    description: "",
    questions: Array.from({ length: 10 }, () => questionsData),
  };

  const submitHandler = async (values: any, actions: any) => {
    try {
      const docId = uuidv4();

      values = {
        ...values,
        id: docId,
        createdAt: new Date(),
        updatedAt: new Date(),
        questions: values.questions.map((question) => {
          return {
            ...question,
            options: question.options.map((option) => {
              return { ...option, optionId: uuidv4() };
            }),
            questionId: uuidv4(),
          };
        }),
      };
      await addQuizApi(values);
      router.push(`/share/${docId}`);
    } catch (error) {
      console.log("error", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Container maxW="3xl" mt={5} mb={5} p={6} boxShadow="xl">
        <Box
          as="article"
          textAlign={"start"}
          backgroundColor={"#202025"}
          m={3}
          borderRadius="3xl"
          p={6}
        >
          <Text
            fontStyle={"italic"}
            textAlign={"center"}
            fontSize={"4xl"}
            letterSpacing={"tighter"}
            fontWeight={"extrabold"}
            fontFamily={"Ropa Sans, sans-serif"}
          >
            {name}'s Quiz
          </Text>
          <Text
            fontSize={"2xl"}
            fontStyle={"italic"}
            textAlign={"center"}
            letterSpacing={"tighter"}
            fontWeight={"light"}
            fontFamily={"Ropa Sans, sans-serif"}
          >
            ✍️ Edit and select the correct answer for each of your questions:
          </Text>
        </Box>
        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
        >
          {(props) => (
            <Form>
              <Field name="questions">
                {({ field }) => (
                  <FormControl>
                    <Box ml={4}>
                      <FieldArray {...field} name="questions">
                        {(fieldArrayProps) => {
                          const { push, remove, form } = fieldArrayProps;
                          const { values, errors, touched } = form;
                          const { questions } = values;

                          return (
                            <div>
                              {questions.map((_question, index) => {
                                return (
                                  <Flex
                                    key={index}
                                    direction="column"
                                    backgroundColor={"#202025"}
                                    m={3}
                                    borderRadius="3xl"
                                    p={6}
                                    borderWidth={"3px"}
                                    borderColor={"#5b4bfb"}
                                  >
                                    <FormControl
                                    >
                                      <Input
                                        borderRadius="2xl"
                                        textAlign={"start"}
                                        h={"24"}
                                        placeholder="Question..."
                                        borderWidth="3px"
                                        borderColor={"#3c3c47"}
                                        _hover={{ borderColor: "#00b9e6" }}
                                        _focus={{ bgColor: "#000000" }}
                                        boxShadow="xl"
                                        name={`questions[${index}][title]`}
                                        as={Field}
                                      />
                                    </FormControl>
                                    <FieldArray
                                      flexDir={"column"}
                                      mb={{ base: 4 }}
                                      name={`questions.${index}.options`}
                                    >
                                      {({
                                        push: pushOption,
                                        remove: removeOption,
                                      }) => (
                                        <>
                                          {_question.options.map(
                                            (option, subIndex) => (
                                              <FormControl
                                                mb={2}
                                                key={subIndex}
                                              >
                                                <Flex
                                                  as="article"
                                                  justifyContent={"start"}
                                                  alignContent={"center"}
                                                  alignItems={"center"}
                                                >
                                                  <Checkbox
                                                    variant="circular"
                                                    size="lg"
                                                    mr={"15px"}
                                                    onChange={() => form.setFieldValue(`questions[${index}][answer]`, questions[index].answer === "0" ? [subIndex] : [...questions[index].answer, subIndex])}
                                                  />
                                                  <Input
                                                    w={"85%"}
                                                    id={Math.pow(
                                                      subIndex + index + 3,
                                                      index + 2
                                                    )}
                                                    borderRadius="2xl"
                                                    textAlign={"start"}
                                                    h={"20"}
                                                    borderWidth="3px"
                                                    borderColor={"#3c3c47"}
                                                    placeholder="Answer..."
                                                    _hover={{
                                                      borderColor: "#00b9e6",
                                                    }}
                                                    _focus={{
                                                      bgColor: "#000000",
                                                    }}
                                                    boxShadow="xl"
                                                    name={`questions[${index}][options][${subIndex}].title`}
                                                    as={Field}
                                                  />
                                                  <CustomIconButton
                                                    onClick={() => {
                                                      // Utiliza el método filter para eliminar la pregunta del array
                                                      removeOption(subIndex);
                                                    }}
                                                    aria-label="Search database"
                                                    icon={
                                                      <CloseIcon
                                                        color={"white"}
                                                      />
                                                    }
                                                  />
                                                </Flex>
                                              </FormControl>
                                            )
                                          )}
                                          <Flex
                                            as="div"
                                            mt={"10px"}
                                            justifyContent={"center"}
                                            alignContent={"center"}
                                            alignItems={"center"}
                                          >
                                            <Button
                                              onClick={() => pushOption()}
                                              borderRadius="full"
                                              __css={{
                                                bgColor: "#414252 !important",
                                              }}
                                              fontSize={"2xl"}
                                              h={"14"}
                                              w={"30%"}
                                              fontStyle={"italic"}
                                              textAlign={"center"}
                                              letterSpacing={"tighter"}
                                              fontWeight={"extrabold"}
                                              fontFamily={
                                                "Ropa Sans, sans-serif"
                                              }
                                            >
                                              Add an option
                                            </Button>
                                          </Flex>
                                        </>
                                      )}
                                    </FieldArray>
                                    <Flex
                                      direction="row"
                                      justify="space-around"
                                      mt={4}
                                    >
                                      {index === questions.length - 1 && (
                                        <CustomIconButton
                                          onClick={() => remove(index)}
                                          aria-label="Remove Question"
                                          icon={<MinusIcon />}
                                          variant="ghost"
                                        >
                                          -
                                        </CustomIconButton>
                                      )}
                                      <Box></Box>
                                      {index === questions.length - 1 && (
                                        <CustomIconButton
                                          onClick={() => push(questionsData)}
                                          aria-label="Add Question"
                                          icon={<AddIcon />}
                                          variant="ghost"
                                        >
                                          +
                                        </CustomIconButton>
                                      )}
                                    </Flex>
                                  </Flex>
                                );
                              })}
                            </div>
                          );
                        }}
                      </FieldArray>
                    </Box>
                  </FormControl>
                )}
              </Field>
              <Center>
                <Button
                  borderRadius="full"
                  __css={{
                    bgColor: "#5800fc !important",
                  }}
                  fontSize={"2xl"}
                  h={"14"}
                  w={"90%"}
                  fontStyle={"italic"}
                  textAlign={"center"}
                  letterSpacing={"tighter"}
                  fontWeight={"extrabold"}
                  fontFamily={"Ropa Sans, sans-serif"}
                  isLoading={props.isSubmitting}
                  type="submit"
                  disabled={!(props.isValid && props.dirty)}
                >
                  Save and Share!
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Index;
