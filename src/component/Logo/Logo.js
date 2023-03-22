import "./logo.css";
import Typography from "@mui/material/Typography";

function Logo(props) {
  const { message } = props;

  const newMessage = message.replace('.', ' ')

  return (
    <Typography className="typo" variant="h5" component="h2">
      Yggdrasil {newMessage}
    </Typography>
  );
}
export default Logo;
