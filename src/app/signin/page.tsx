"use client";

import { useAuth } from "@/lib/auth";
import { Button, Center, Container, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const { auth, signInWithGoogle } = useAuth();
  const router = useRouter();
  
  if (auth) {
    router.back();
  }

  return (
    <>
      <Container>
        <Center mt={10}>
          <VStack spacing="4">
            <Heading fontSize="3xl" mb={2}>
              Hello, Welcome to the Quiz App!!
            </Heading>
            <Button leftIcon={<FcGoogle />} onClick={() => signInWithGoogle()}>
              Sign In with Google
            </Button>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default Signin;
