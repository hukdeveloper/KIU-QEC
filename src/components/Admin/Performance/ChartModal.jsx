import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { BarChart } from "@mui/icons-material";
import PieChart from "./PieChart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ChartModal({ a, sa, da, sda, q }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const quizOptionScore = [
    {
      id: "stronglyAgree",
      value: sa,
      label: "Strongly Agree",
    },
    {
      id: "stronglyDisagree",
      value: sda,
      label: "Strongly Disagree",
    },

    {
      id: "disagree",
      value: da,
      label: "Disagree",
    },
    {
      id: "agree",
      value: a,
      label: "Agree",
    },
  ];

  return (
    <div>
      <IconButton onClick={handleOpen} color="info">
        <BarChart />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="body1" component="h2">
            {q}
          </Typography>
          <PieChart data={quizOptionScore} />
        </Box>
      </Modal>
    </div>
  );
}
