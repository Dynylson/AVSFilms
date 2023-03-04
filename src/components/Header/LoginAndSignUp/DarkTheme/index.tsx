import { BsFillMoonFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import { Box } from "@chakra-ui/react";
import { useSwitchTheme } from "../../../../hooks/useSwitchTheme";

export function DarkTheme() {
  const { colorMode, switchTheme } = useSwitchTheme();

  return (
    <>
      {colorMode === "dark" ? (
        <Box
          cursor='pointer'
          border='1px solid #838186'
          borderRadius='8px'
          padding='.5rem'
        >
          <BsFillMoonFill onClick={() => switchTheme()} fill='#838186' />
        </Box>
      ) : (
        <Box
          cursor='pointer'
          border='1px solid #F3F808'
          borderRadius='8px'
          padding='.5rem'
        >
          <RiSunLine onClick={() => switchTheme()} fill='#F3F808' />
        </Box>
      )}
    </>
  );
}
