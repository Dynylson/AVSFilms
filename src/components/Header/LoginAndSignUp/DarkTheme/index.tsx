import { BsFillMoonFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

export function DarkTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      {isDarkMode ? (
        <Box
          cursor='pointer'
          border='1px solid #838186'
          borderRadius='8px'
          padding='.5rem'
        >
          <BsFillMoonFill
            onClick={() => setIsDarkMode(!isDarkMode)}
            fill='#838186'
          />
        </Box>
      ) : (
        <Box
          cursor='pointer'
          border='1px solid #F3F808'
          borderRadius='8px'
          padding='.5rem'
        >
          <RiSunLine
            onClick={() => setIsDarkMode(!isDarkMode)}
            fill='#F3F808'
          />
        </Box>
      )}
    </>
  );
}
