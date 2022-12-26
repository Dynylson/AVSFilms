import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Movie() {
  const { query } = useRouter();
  const { id } = query;

  console.log(id);

  return <Text>Testando dynamic routes...</Text>;
}
