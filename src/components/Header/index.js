import { Box, Stack, Flex, useDisclosure, Divider } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import craftt from "../../resources/craftt.svg";

import { useStoreState } from "easy-peasy";
import Logout from "../../pages/Logout";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const user = useStoreState((state) => state.user);
  console.log(user, "user");
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        color="black"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Link to="/">
            <img src={craftt} width="120" alt="logo" />
          </Link>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <HamburgerIcon fontSize={30} />
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          uuu
          mt={{ base: 4, md: 0 }}
          justifyContent="flex-end"
          spacing={4}
          className="navbar"
        >
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart (0)</Link>
          {localStorage.getItem("supabase.auth.token") ? (
            <Logout />
          ) : (
            <Link to="/login">Login/Signup</Link>
          )}
        </Stack>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        ></Box>
      </Flex>

      <Divider />
    </>
  );
};

export default Header;
