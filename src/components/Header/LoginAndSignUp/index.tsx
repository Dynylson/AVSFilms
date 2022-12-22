import { Link, Flex } from "@chakra-ui/react";

export function LoginAndSignUp() {
  return (
    <Flex alignItems='center' gap='20px'>
      <Link
        color='gray.700'
        fontWeight='bold'
        _hover={{ textDecoration: "none", color: "#b2b7f9" }}
      >
        Login
      </Link>
      <Link
        color='white.900'
        background='blue.900'
        borderRadius='10px'
        py='12px'
        px='25px'
        _hover={{ textDecoration: "none", background: "#5587ed" }}
      >
        Registrar-se
      </Link>
    </Flex>
  );
}
