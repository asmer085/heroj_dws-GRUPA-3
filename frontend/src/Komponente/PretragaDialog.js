import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import axios from "axios";
import { useEffect, useState } from "react";

const apiURL = "http://127.0.0.1:8000/api/v1/postupciprvepomoci/";

function PretragaDialog(props) {
  const { odabranaNesreca, otvorenDialogPretrage, zatvoriDialogPretrage } = props;
  const [postupciPrvePomoci, setPostupciPrvePomoci] = useState(null);

  useEffect(() => {
    if (!otvorenDialogPretrage || !odabranaNesreca) return;

    axios
      .get(apiURL + "?nesreca=" + odabranaNesreca.id)
      .then((response) => {
        setPostupciPrvePomoci(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [otvorenDialogPretrage, odabranaNesreca]);

  return (
    <>
      {postupciPrvePomoci && postupciPrvePomoci.length ? (
        <Dialog onClose={zatvoriDialogPretrage} open={otvorenDialogPretrage}>
          <DialogContent>
            <DialogContentText>{postupciPrvePomoci[0].opis}</DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}

export default PretragaDialog;
