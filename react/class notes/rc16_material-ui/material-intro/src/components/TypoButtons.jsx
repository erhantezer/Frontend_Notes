import { Typography, Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

// import Typography from '@mui/material/Typography';
// // or
// import { Typography } from '@mui/material';
const TypoButtons = () => {
  return (
    <div>
      {/* Container, 👇 sağdan soldan default margin veriyor */}
      <Container maxWidth="md">
        {/* Bu container'ın maxWidh'i md'ye kadar olsun 👆 */}
        <Typography
          variant="subtitle"
          component="h1"
          align="center"
          color="primary"
        >
          Typography,Buttons,Container,Box
        </Typography>
        <Typography
          variant="caption"
          component="h1"
          align="center"
          color="secondary"
        >
          Typography,Buttons,Container,Box
        </Typography>
        <Typography
          //! sx prop'uyla çift süslü içinde inline styling verebiliyoruz 👇
          sx={{ bgcolor: "blue", border: "3px solid black" }}
          variant="h6"
          component="h1"
          align="justify"
          color="secondary"
        >
          Typography,Buttons,Container,Box
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          align="justify"
          color="secondary.dark"
          sx={{ background: "gray", mt: 5 }} //! inline styling
        >
          Typography,Buttons,Container,Box
        </Typography>
        {/* body1, p elementi oluşturdu 👇 */}
        <Typography variant="body1" align="justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          eos impedit illo quam earum molestiae magni reprehenderit laboriosam
          libero ipsum.
        </Typography>

        <Typography
          variant="button"
          align="justify"
          sx={{ display: "inline-block", mt: 4 }}
        >
          {/* button, span elementi oluşturdu 👇 */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          eos impedit illo quam earum molestiae magni reprehenderit laboriosam
          libero ipsum.
        </Typography>
      </Container>

      <Container maxWidth="md">
        {/* box stillendirilmiş div 👇 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Button variant="contained" color="secondary">
            CLİCK
          </Button>
          <Button variant="outlined" color="success" startIcon={<SendIcon />}>
            SEND
          </Button>
          <Button variant="contained" disabled endIcon={<DeleteIcon />}>
            DELETE
          </Button>
          <Button variant="contained" href="https://clarusway.com">
            Link
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;

//* görüntü olarak h5 ama styled olarak h1 olarak

//* bodyler p tagı oluyor

//* button span
//* Container margin auto özelliği verir.
