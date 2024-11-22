/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, Paper, Stack } from "@mui/material";
import { calculatorStyles } from "./CalculatorStyles";
import { useState } from "react";
const CalculatorPage = () => {
  const [inputVal, setInputVal] = useState("");
  const calcArr = [
    "AC",
    "%",
    "/",
    "C",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "3",
    "2",
    "1",
    "+",
    "0",
    ".",
    "=",
  ];
  const handleInput = (element: string) => {
    if (element === "=") {
      const value = eval(inputVal);
      setInputVal(JSON.stringify(value));
    } else if (element === "AC") {
      setInputVal("");
    }else if(element==="C"){
        const value=inputVal.substring(0,inputVal.length-1);
        setInputVal(value)
    }else if(element==="."){
        console.log("object")
    } 
    else {
      if (
        element === "+" ||
        element === "-" ||
        element === "*" ||
        element === "." ||
        element === "%" ||
        element === "/"
      ) {
        const value = inputVal[inputVal.length - 1];
        (+value >= 0 || inputVal === "") &&
          setInputVal((prev) => prev.concat(element));
      } else {
        setInputVal((prev) => prev.concat(element));
      }
    }
  };
  return (
    <Box sx={calculatorStyles.main}>
      <Paper sx={calculatorStyles.container}>
        <Stack direction={"column"} sx={calculatorStyles.resultCon}>
          <Box sx={calculatorStyles.inputBox}></Box>
          <Box sx={calculatorStyles.inputBox}>{inputVal}</Box>
        </Stack>
        <Grid container sx={calculatorStyles.keyboard} gap={1.5}>
          {calcArr.map((element) => (
            <Grid
              key={element}
              item
              xs={2.5}
              onClick={() => handleInput(element)}
            >
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={calculatorStyles.itemBox}
              >
                {element}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default CalculatorPage;
