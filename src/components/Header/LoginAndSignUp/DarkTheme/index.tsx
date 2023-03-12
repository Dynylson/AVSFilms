import { BsFillMoonFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import { Box, useColorMode } from "@chakra-ui/react";

export function DarkTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <Box cursor='pointer' padding='.5rem' onClick={() => toggleColorMode()}>
          <RiSunLine fill='#F3F808' />
        </Box>
      ) : (
        <Box cursor='pointer' padding='.5rem' onClick={() => toggleColorMode()}>
          <BsFillMoonFill fill='#838186' />
        </Box>
      )}
    </>
  );
}
