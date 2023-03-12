import {
  Text,
  Flex,
  Button,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { DarkTheme } from "./DarkTheme";

import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function LoginAndSignUp() {
  const { data: session } = useSession();

  const login = useColorModeValue("#48BB78", "#48BB78");
  const exit = useColorModeValue("#c53030", "#c53030");

  return (
    <Flex alignItems='center' gap='20px'>
      <Flex alignItems='center' gap='.5rem'>
        <Link href='/minha-lista'>
          <Button mr='.5rem'>Minha lista</Button>
        </Link>
        {session?.user?.image && session?.user?.name && (
          <>
            <Avatar
              src={session.user.image}
              name={session.user.name}
              w={["44px", "60px"]}
              h={["44px", "60px"]}
              borderRadius='50%'
            />
          </>
        )}
        <Text color='blue.900' fontWeight='bold'>
          {session?.user?.name}
        </Text>
      </Flex>
      {!session ? (
        <Button
          color='#fff'
          fontWeight='bold'
          bg={login}
          _hover={{
            textDecoration: "none",
            color: "#ddd",
            background: "#2F855A",
          }}
          onClick={() => signIn("google")}
        >
          Login
        </Button>
      ) : (
        <Button
          color='#fff'
          fontWeight='bold'
          _hover={{
            textDecoration: "none",
            color: "#ddd",
            background: "#9B2C2C",
          }}
          bg={exit}
          onClick={() => signOut()}
        >
          Sair
        </Button>
      )}

      <DarkTheme />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
