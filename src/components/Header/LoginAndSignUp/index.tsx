import { Text, Flex, Button, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { DarkTheme } from "./DarkTheme";

import { getSession, signIn, signOut, useSession } from "next-auth/react";

export function LoginAndSignUp() {
  const { data: session } = useSession();

  return (
    <Flex alignItems='center' gap='20px'>
      {session?.user?.image && (
        <>
          <Image
            src={session.user.image}
            alt='Foto do Usuário'
            w={["44px", "60px"]}
            h={["44px", "60px"]}
            borderRadius='50%'
          />
        </>
      )}
      <Text color='blue.900' fontWeight='bold'>
        {session?.user?.name}
      </Text>
      {!session ? (
        <Button
          color='#fff'
          fontWeight='bold'
          colorScheme='green'
          _hover={{ textDecoration: "none", color: "#ddd" }}
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
          }}
          colorScheme='red'
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
        destination: "/home",
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
