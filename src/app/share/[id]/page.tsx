"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";

const stylesInput = {
  baseStyle: {
    bgColor: "#161619 !important",
    borderRadius: "full", // Cambia el color de fondo por defecto a azul
  },
};

const SingleQuiz = () => {
  const router = useRouter();
  const inputRef = useRef();
  const { id } = useParams();
  console.log(window.location);
  return (
    <Container maxW="3xl" mt={5} mb={5} p={6} boxShadow="xl">
      <Flex
        as="article"
        textAlign={"start"}
        backgroundColor={"#202025"}
        flexDir={"column"}
        m={3}
        borderRadius="3xl"
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
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
          Your Quiz is ready!
        </Text>
        <Text
          fontSize={"2xl"}
          fontStyle={"italic"}
          textAlign={"center"}
          letterSpacing={"tighter"}
          fontWeight={"light"}
          fontFamily={"Ropa Sans, sans-serif"}
        >
          Share your Quiz link with all your friends and see their results.
        </Text>
        <Input
          w={"80%"}
          borderRadius={"2xl"}
          h={"14"}
          value={window.location.origin + "/answer/" + id}
          borderWidth="4px"
          ref={inputRef}
          borderColor={"#161619"}
          {...stylesInput.baseStyle}
          boxShadow="xl"
        />
        <Button
          w={"70%"}
          onClick={() => {
            inputRef.current.select();
            document.execCommand("copy");
          }}
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
          Copy Link
        </Button>
      </Flex>
    </Container>
  );
};

export default SingleQuiz;
