import {
  Text,
  Flex,
  Button,
  Avatar,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { DarkTheme } from "./components/DarkTheme";

import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";
// import { BsChevronDown } from "react-icons/bs";

export function LoginAndSignUp() {
  const router = useRouter()

  const { data: session }: any = useSession();

  const login = useColorModeValue("#48BB78", "#48BB78");
  const exit = useColorModeValue("#c53030", "#c53030");

  function sair() {
    signOut();
    
    router.push("/");
  }

  return (
    <Flex alignItems='center' gap='20px'>
      <Flex alignItems='center' gap='.5rem'>
        {!!session && (
          <>
            {/* <User size={32} /> */}
            {/* <Button fontWeight='bold' onClick={() => router.push(`/profile/${session?.user?.id}`)}>
              Meu Perfil
            </Button> */}
            <Menu>
              <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                {session?.user?.name}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => router.push(`/profile/${session?.user?.id}`)}>Meu perfil</MenuItem>
                <MenuItem onClick={() => router.push('/minha-lista')}>Minha lista</MenuItem>
                <MenuItem>Suas avaliações</MenuItem>
                <MenuItem onClick={sair}>Sair</MenuItem>
              </MenuList>
            </Menu>
          </>
          
        )}
        
      </Flex>
      {!session && (
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
