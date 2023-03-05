import { BsFillMoonFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import { Box, useColorMode } from "@chakra-ui/react";

export function DarkTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <Box
          cursor='pointer'
          border='1px solid #838186'
          borderRadius='8px'
          padding='.5rem'
          onClick={() => toggleColorMode()}
        >
          <BsFillMoonFill fill='#838186' />
        </Box>
      ) : (
        <Box
          cursor='pointer'
          border='1px solid #F3F808'
          borderRadius='8px'
          padding='.5rem'
          onClick={() => toggleColorMode()}
        >
          <RiSunLine fill='#F3F808' />
        </Box>
      )}
    </>
  );
}
