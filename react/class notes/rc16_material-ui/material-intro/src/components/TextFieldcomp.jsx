import React from "react";
import { Typography, Container, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const TextFieldcomp = () => {
  let error = false;
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" mt={4} color="error">
          Texfield
        </Typography>

        <Box
          sx={{
            mt: 4,
            textAlign: "center",
          }}
        >
          <TextField
            margin="normal"
            id="email"
            label="email"
            type="email"
            placeholder="Enter your Email"
            error={error}
            fullWidth
            helperText={error && "İncorrect Email Format"}
          />
          <TextField
            margin="normal"
            id="password"
            label="password"
            type="password"
            placeholder="Enter your password"
            error={error}
            fullWidth
            helperText={error && "İncorrect password Format"}
          />
          <Button type="submit" sx={{ mt: 3 }} variant="contained">
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TextFieldcomp;
