import { Grid, Typography } from "@mui/material";

const HeaderTitleComponent = ({ title }: { title: string }) => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "33px",
              lineHeight: "10%",
              color: "#161F29",
              padding: "0px 0px 15px 0px",
              margin: "20px",
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderTitleComponent;
