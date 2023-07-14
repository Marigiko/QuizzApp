"use client";

import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllQuiz, getAllUsers } from "../utils/db";
import Navbar from "@/common/NavBar";

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const router = useRouter();

  const generateQuizCard = (singleQuiz) => {
    return (
      <Box m={3} borderWidth="1px" borderRadius="lg" p={6} boxShadow="xl">
        <Heading as="h3" size="lg">
          {singleQuiz.title}
        </Heading>

        <Text color="gray.500" mt={2}>
          Posted By: {singleQuiz.user.name}
        </Text>
        <Text color="gray.500" mt={2}>
          No of Questions: {singleQuiz.questions.length}
        </Text>

        <Divider mt={3} mb={3} />
        <Text noOfLines={[1, 2, 3]}>{singleQuiz.description}</Text>
      </Box>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizData = await getAllQuiz();
        const users = await getAllUsers();
        const data = quizData.map((singleQuiz) => {
          return {
            ...singleQuiz,
            user: users.find((user) => user.id === singleQuiz.userId),
          };
        });
        setQuiz(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Head>
        <title>QuizApp</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@1&display=swap')
        </style>
      </Head>

      <main>
        <header>
          <Navbar />
        </header>
        <section>
          <Container textAlign={"center"} p={6}>
            <Text
              fontSize={"6xl"}
              fontWeight={"extrabold"}
              fontFamily={"Ropa Sans, sans-serif"}
            >
              Quiz del Mejor Amigo
            </Text>
            <Text
              fontSize={"3xl"}
              textColor={"Highlight"}
              fontWeight={"light"}
              fontFamily={"Ropa Sans, sans-serif"}
            >
              ¿Qué tan bien te conocen tus amigos?
            </Text>
            <Image
              src="/static/friends-small.png"
              alt="a group of friends"
            />
            <Box
              textAlign={"start"}
              backgroundColor={"#202025"}
              m={3}
              borderRadius="2xl"
              p={6}
            >
              <Text
                fontSize={"2xl"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                <Text
                  display={"inline-flex"}
                  backgroundColor={"#34b8e5"}
                  mr={3}
                  borderRadius="2xl"
                  py={1.5}
                  px={3}
                >
                  1
                </Text>
                Crea tu propio quiz
              </Text>
              <Text
                mt={"10px"}
                fontSize={"2xl"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                <Text
                  display={"inline-flex"}
                  backgroundColor={"#f9218f"}
                  mr={3}
                  borderRadius="2xl"
                  py={1.5}
                  px={3}
                >
                  2
                </Text>
                Compartelo con tus amigos
              </Text>
              <Text
                mt={"10px"}
                fontSize={"2xl"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                <Text
                  display={"inline-flex"}
                  backgroundColor={"#faa31b"}
                  mr={3}
                  borderRadius="2xl"
                  py={1.5}
                  px={3}
                >
                  3
                </Text>
                Mira sus resultados y descubre a tus verdaderos mejores amigos
              </Text>
            </Box>
          </Container>
        </section>
        <section>
          <Container maxW="6xl">
            {quiz.length > 0 && (
              <SimpleGrid minChildWidth="400px">
                {quiz.map((singleQuiz) => (
                  <Box
                    key={singleQuiz.id}
                    onClick={() => router.push(`/quiz/${singleQuiz.id}`)}
                    as="button"
                    textAlign="start"
                    m={2}
                  >
                    {generateQuizCard(singleQuiz)}
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </Container>
        </section>
      </main>
    </Box>
  );
};

export default Home;
