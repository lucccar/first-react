import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle> Quem Somos </FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, similique sapiente deserunt iure esse vero doloremque
            at rerum est laudantium, iusto delectus hic, excepturi dignissimos
            eos reiciendis? A, quo dolores?
          </Typography>
        </Box>
        <div>
          <FooterTitle> Baixe nossos aplicativos. </FooterTitle>
          <AppList>
            <li>
              <a href="/" target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt="app store" />
              </a>
            </li>
            <li>
              <a href="/" target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt="google play" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
