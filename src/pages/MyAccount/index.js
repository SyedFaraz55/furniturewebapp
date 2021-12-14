import { Container, Heading, Box, Text, Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import React from "react";
import supabase from "../../config/supabase.config";

const MyAccount = () => {
  const [data, setData] = React.useState([]);
  const fetchData = async () => {
    const data = JSON.parse(localStorage.getItem("user"));
    const record = await supabase.from("craftt").select("*").eq("uid", data.id);
    console.log(record.data, "record");
    setData(record.data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box p={5}>
      <Heading>My Account</Heading>
      <Box mt={6} width="40%">
        {!data ? (
          <Center>
            <Spinner size="lg" />
          </Center>
        ) : (
          data.map((order) => {
            return order.orders.map((info, index) => {
              return (
                <Box
                  key={index}
                  border="1px"
                  p={2}
                  borderRadius={6}
                  borderColor="#e6e6e6"
                >
                  <Text fontSize="xl">
                    Order Id:{" "}
                    <span style={{ color: "dodgerblue" }}>{order.orderId}</span>
                  </Text>
                  <Text fontSize="xl">Product : {info.name}</Text>
                  <Text fontSize="xl">
                    Price :{" "}
                    {info.price.toString().toLocaleString(navigator.language, {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                  <Text fontSize="xl">Quantity : {info.quantity}</Text>
                </Box>
              );
            });
          })
        )}
      </Box>
    </Box>
  );
};

export default MyAccount;
