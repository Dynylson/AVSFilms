import {
  Text,
  Flex,
  Button,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { DarkTheme } from "./components/DarkTheme";

import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function LoginAndSignUp() {
  const router = useRouter()

  const { data: session }: any = useSession();
  console.log(session);

  const login = useColorModeValue("#48BB78", "#48BB78");
  const exit = useColorModeValue("#c53030", "#c53030");

  return (
    <Flex alignItems='center' gap='20px'>
      <Flex alignItems='center' gap='.5rem'>
        <Link href='/minha-lista'>
          <Button mr='.5rem'>Minha lista</Button>
        </Link>
        {!!session ? (
          <>
            {/* <User size={32} /> */}
            <Button fontWeight='bold' onClick={() => router.push(`/profile/${session?.user?.id}`)}>
              Meu Perfil
            </Button>
          </>
          
        ) : <h1>ludmilo</h1>}
        
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
