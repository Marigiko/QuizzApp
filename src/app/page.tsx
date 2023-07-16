"use client";

import { Box, Button, Container, Image, Input, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Home = () => {
  const router = useRouter();
  const inputRef: any = useRef();
  /*
  const [quiz, setQuiz] = useState([]);
  
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
  */

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

      <Box as="main">
        <Container textAlign={"center"} p={6}>
          <Box as="section">
            <Text
              fontStyle={"italic"}
              fontSize={"6xl"}
              letterSpacing={"tighter"}
              fontWeight={"extrabold"}
              fontFamily={"Ropa Sans, sans-serif"}
            >
              Best Friend Quiz
            </Text>
            <Text
              fontSize={"3xl"}
              fontStyle={"italic"}
              letterSpacing={"tighter"}
              textColor={"#a19fb1"}
              fontWeight={"light"}
              fontFamily={"Ropa Sans, sans-serif"}
            >
              How well do your friends know you?
            </Text>
            <Image src="/static/friends-small.png" alt="a group of friends" />
            <Box
              as="article"
              textAlign={"start"}
              backgroundColor={"#202025"}
              m={3}
              borderRadius="2xl"
              p={6}
            >
              <Text
                fontSize={"lg"}
                fontStyle={"italic"}
                letterSpacing={"tighter"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                <Text
                  as="span"
                  display={"inline-flex"}
                  backgroundColor={"#34b8e5"}
                  mr={3}
                  borderRadius="2xl"
                  py={1.5}
                  px={3}
                >
                  1
                </Text>
                Create your own quiz
              </Text>
              <Text
                fontStyle={"italic"}
                letterSpacing={"tighter"}
                mt={"10px"}
                fontSize={"lg"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                <Text
                  as="span"
                  display={"inline-flex"}
                  backgroundColor={"#f9218f"}
                  mr={3}
                  borderRadius="2xl"
                  py={1.5}
                  px={3}
                >
                  2
                </Text>
                Share it with your friends
              </Text>
              <Text
                fontStyle={"italic"}
                letterSpacing={"tighter"}
                mt={"10px"}
                fontSize={"lg"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                <Text
                  as="span"
                  display={"inline-flex"}
                  backgroundColor={"#faa31b"}
                  mr={3}
                  borderRadius="2xl"
                  py={1.5}
                  px={3}
                >
                  3
                </Text>
                See their results & discover your real best friends
              </Text>
            </Box>
          </Box>
          <Input
            borderRadius="2xl"
            onKeyPressCapture={(event) => {
              if (event.key === "Enter") {
                router.push(`/questions/${inputRef.current?.value}`);
              }
            }}
            ref={inputRef}
            h={"14"}
            borderWidth="4px"
            borderColor={"#3c3c47"}
            placeholder="What's your name?"
            _focus={{ bgColor: "#000000" }}
            boxShadow="xl"
          />
          <Button
            w={"100%"}
            onClick={() => router.push(`/questions/${inputRef.current?.value}`)}
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
            Get Started
          </Button>
          <Box as="section">
            <Box as="article" mt={"30px"}>
              <Text
                textAlign={"start"}
                fontSize={"2xl"}
                color={"#fff"}
                fontStyle={"italic"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Best Friend Quiz: Trivia Questions
              </Text>
              <br />
              <Text
                textAlign={"start"}
                fontSize={"lg"}
                color={"#a19fb1"}
                fontStyle={"italic"}
                fontWeight={"light"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Have you ever wondered which friend knows you the best? Now you
                can test your friends by making your own trivia quiz about
                yourself. It’s the ultimate friendship test!
              </Text>
            </Box>
            <Box as="article" mt={"30px"}>
              <Text
                textAlign={"start"}
                fontSize={"2xl"}
                color={"#fff"}
                fontStyle={"italic"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Quiz Maker: How well do you know me?
              </Text>
              <br />
              <Text
                textAlign={"start"}
                fontSize={"lg"}
                color={"#a19fb1"}
                fontStyle={"italic"}
                fontWeight={"light"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Create your own quiz about yourself and send it to your friends.
                See how many questions they can answer about you and discover
                your real best friends.
              </Text>
            </Box>
            <Box as="article" mt={"30px"}>
              <Text
                textAlign={"start"}
                fontSize={"2xl"}
                color={"#fff"}
                fontStyle={"italic"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Quizzes for Friends
              </Text>
              <br />
              <Text
                textAlign={"start"}
                fontSize={"lg"}
                color={"#a19fb1"}
                fontStyle={"italic"}
                fontWeight={"light"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Creating your own Best Friend Quiz is super easy:
              </Text>
              <Box as="article" mt={"20px"} textAlign={"start"}>
                <Text
                  textAlign={"start"}
                  fontSize={"lg"}
                  color={"#a19fb1"}
                  fontStyle={"italic"}
                  fontWeight={"light"}
                  fontFamily={"Ropa Sans, sans-serif"}
                >
                  <Text
                    as="span"
                    color={"#fff"}
                    display={"inline-flex"}
                    backgroundColor={"#34b8e5"}
                    fontWeight={"extrabold"}
                    mr={3}
                    borderRadius="2xl"
                    py={1.5}
                    px={3}
                  >
                    1
                  </Text>
                  Enter your name
                </Text>
                <Text
                  fontStyle={"italic"}
                  letterSpacing={"tighter"}
                  mt={"10px"}
                  fontSize={"lg"}
                  color={"#a19fb1"}
                  fontWeight={"light"}
                  fontFamily={"Ropa Sans, sans-serif"}
                >
                  <Text
                    as="span"
                    fontWeight={"extrabold"}
                    color={"#fff"}
                    display={"inline-flex"}
                    backgroundColor={"#f9218f"}
                    mr={3}
                    borderRadius="2xl"
                    py={1.5}
                    px={3}
                  >
                    2
                  </Text>
                  Share it with your friends
                </Text>
                <Text
                  fontStyle={"italic"}
                  letterSpacing={"tighter"}
                  mt={"10px"}
                  fontSize={"lg"}
                  color={"#a19fb1"}
                  fontWeight={"light"}
                  fontFamily={"Ropa Sans, sans-serif"}
                >
                  <Text
                    as="span"
                    fontWeight={"extrabold"}
                    color={"#fff"}
                    display={"inline-flex"}
                    backgroundColor={"#faa31b"}
                    mr={3}
                    borderRadius="2xl"
                    py={1.5}
                    px={3}
                  >
                    3
                  </Text>
                  See their results & discover your real best friends
                </Text>
                <Text
                  fontStyle={"italic"}
                  letterSpacing={"tighter"}
                  mt={"10px"}
                  fontSize={"lg"}
                  color={"#a19fb1"}
                  fontWeight={"light"}
                  fontFamily={"Ropa Sans, sans-serif"}
                >
                  <Text
                    as="span"
                    fontWeight={"extrabold"}
                    color={"#fff"}
                    display={"inline-flex"}
                    backgroundColor={"#1b9b3b"}
                    mr={3}
                    borderRadius="2xl"
                    py={1.5}
                    px={3}
                  >
                    4
                  </Text>
                  Your friends will try to answer the questions
                </Text>
                <Text
                  fontStyle={"italic"}
                  letterSpacing={"tighter"}
                  mt={"10px"}
                  fontSize={"lg"}
                  color={"#a19fb1"}
                  fontWeight={"light"}
                  fontFamily={"Ropa Sans, sans-serif"}
                >
                  <Text
                    as="span"
                    fontWeight={"extrabold"}
                    color={"#fff"}
                    display={"inline-flex"}
                    backgroundColor={"#5800fc"}
                    mr={3}
                    borderRadius="2xl"
                    py={1.5}
                    px={3}
                  >
                    5
                  </Text>
                  Check the score of your friends at your quiz-link
                </Text>
              </Box>
            </Box>
            <Box as="article" mt={"30px"}>
              <Text
                textAlign={"start"}
                fontSize={"2xl"}
                color={"#fff"}
                fontStyle={"italic"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                BFF Test
              </Text>
              <br />
              <Text
                textAlign={"start"}
                fontSize={"lg"}
                color={"#a19fb1"}
                fontStyle={"italic"}
                fontWeight={"light"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Is your best friend really your{" "}
                <Text as={"span"} fontWeight={"extrabold"} color={"#fff"}>
                  Best Friend Forever
                </Text>
                ? Quiz your best mates now and find out who’s your better
                friend.
              </Text>
            </Box>
            <Box as="article" mt={"30px"}>
              <Text
                textAlign={"start"}
                fontSize={"2xl"}
                color={"#fff"}
                fontStyle={"italic"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Buddy Meter: Make your own Quiz
              </Text>
              <br />
              <Text
                textAlign={"start"}
                fontSize={"lg"}
                color={"#a19fb1"}
                fontStyle={"italic"}
                fontWeight={"light"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                After you have created your own quiz with ten customizable
                questions, post and share your quiz link with all your friends.
                Your friends then try to reach 10 out of 10 points. And you will
                see their results and see which of them is your top friend.
              </Text>
            </Box>
            <Box as="article" mt={"30px"}>
              <Text
                textAlign={"start"}
                fontSize={"2xl"}
                color={"#fff"}
                fontStyle={"italic"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Who Knows Me Best?
              </Text>
              <br />
              <Text
                textAlign={"start"}
                fontSize={"lg"}
                color={"#a19fb1"}
                fontStyle={"italic"}
                fontWeight={"light"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Share your quiz on Instagram, WhatsApp, BuzzFeed, and Snapchat
                to reach all your friends and see who knows you the best. Who is
                your true best friend?
              </Text>
            </Box>
            <Box as="article" mt={"30px"}>
              <Text
                textAlign={"start"}
                fontSize={"2xl"}
                color={"#fff"}
                fontStyle={"italic"}
                fontWeight={"extrabold"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Best friend quiz questions are just for fun!
              </Text>
              <br />
              <Text
                textAlign={"start"}
                fontSize={"lg"}
                color={"#a19fb1"}
                fontStyle={"italic"}
                fontWeight={"light"}
                fontFamily={"Ropa Sans, sans-serif"}
              >
                Always remember: No matter how many questions your friends can
                answer in this buddy quiz; Don’t take it too seriously. A real
                friendship doesn’t require that they know your favorite color.
                😊
              </Text>
            </Box>
          </Box>
        </Container>
        {/*
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
        */}
      </Box>
    </Box>
  );
};

export default Home;
