import { writeFile } from "fs";

writeFile("txtfile.txt", "Writing this message", (err) => {
  err
    ? () => {
        console.log(err);
        return;
      }
    : console.log("File successfully written");
});
