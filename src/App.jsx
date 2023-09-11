import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const numSymbols = [
    {
      num: ".",
    },
    {
      num: "/",
    },
    {
      num: "7",
    },
    {
      num: "8",
    },
    {
      num: "9",
    },
    {
      num: "*",
    },
    {
      num: "4",
    },
    {
      num: "5",
    },
    {
      num: "6",
    },
    {
      num: "+",
    },
    {
      num: "1",
    },
    {
      num: "2",
    },
    {
      num: "3",
    },
    {
      num: "-",
    },
    {
      num: "00",
    },
    {
      num: "0",
    },
  ];

  const [calc, setCalc] = useState("");

  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <>
      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100vh"}
          bg={"gray.50"}
          borderTopRadius="md"
        >
          <Card borderRadius={5} boxShadow={"dark-lg"} p={2} bg={"#1b263b"}>
            <CardHeader p={0} bg={"#0d1b2a"}>
              <Box
                width={"auto"}
                height={"50px"}
                display={"flex"}
                justifyContent={"right"}
                alignItems={"center"}
                pr={8}
                py={"30px"}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "700",
                  }}
                >
                  {calc || 0}
                </span>
              </Box>
            </CardHeader>
            <CardBody mt={0} bg={"#1b263b"}>
              <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                <Button
                  color={"#06d6a0"}
                  width={"30px"}
                  onClick={() => setCalc("")}
                  _hover={{ backgroundColor: "#e76f51" }}
                >
                  AC
                </Button>
                <Button
                  color={"#06d6a0"}
                  width={"30px"}
                  onClick={deleteLast}
                  _hover={{ backgroundColor: "#e76f51" }}
                >
                  DE
                </Button>
                {numSymbols.map((numSymbol, index) => (
                  <GridItem key={index} fontWeight={"500"}>
                    <Button
                      _hover={{ backgroundColor: "#e76f51" }}
                      onClick={() => updateCalc(numSymbol.num.toString())}
                      color={/[=+*/-]/.test(numSymbol.num) ? "red" : "black"}
                    >
                      {numSymbol.num}
                    </Button>
                  </GridItem>
                ))}
                <GridItem colSpan={2}>
                  <Button
                    color={"red"}
                    onClick={calculate}
                    width={"100px"}
                    _hover={{ backgroundColor: "#e76f51" }}
                  >
                    =
                  </Button>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default App;
